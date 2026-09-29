import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { createApp } from '../server/app.js';
const routes = JSON.parse(await readFile('docs/route-list.json', 'utf8'));
let pageCount = 0;
for (const route of routes) {
  const filename = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  const html = await readFile(`dist/${filename}`, 'utf8');
  assert(html.includes('<main'), `Missing rendered content: ${route}`);
  assert(html.includes('<title>'), `Missing title: ${route}`);
  assert(!html.includes('<!--page-html-->'), `Unrendered page: ${route}`);
  pageCount++;
}
let sent = [];
let saved = [];
const repository = { saveLead: async data => saved.push({ kind: 'lead', ...data }), saveCareer: async data => saved.push({ kind: 'career', ...data }) };
const app = createApp({ repository, transport: { sendMail: async mail => sent.push(mail) }, config: { SMTP_FROM: 'test@example.test', ENQUIRY_TO: 'test@example.test' } });
const server = app.listen(0, '127.0.0.1');
await new Promise(resolve => server.once('listening', resolve));
const url = `http://127.0.0.1:${server.address().port}`;
try {
  assert.equal((await fetch(`${url}/api/health`)).status, 200);
  const invalid = await fetch(`${url}/api/enquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
  assert.equal(invalid.status, 400);
  const fields = new FormData();
  for (const [key, value] of Object.entries({ Name: 'Website QA', Email: 'qa@example.test', Phone: '9000000000', Message: 'Local integration test only.', kind: 'contact' })) fields.set(key, value);
  const success = await fetch(`${url}/api/enquiry`, { method: 'POST', body: fields });
  assert.equal(success.status, 200);
  assert.equal((await success.json()).status, 'success');
  assert.equal(sent.length, 2); assert.equal(sent[0].replyTo, 'qa@example.test'); assert.equal(saved[0].kind, 'lead');
  fields.set('kind', 'career');
  fields.set('Resume', new Blob(['%PDF-1.4 local fixture'], { type: 'application/pdf' }), 'resume.pdf');
  const career = await fetch(`${url}/api/enquiry`, { method: 'POST', body: fields });
  assert.equal(career.status, 200); assert.equal(sent.length, 4); assert.equal(sent[2].attachments[0].filename, 'resume.pdf'); assert.equal(saved[1].kind, 'career');
  fields.set('Resume', new Blob(['invalid']), 'resume.pdf');
  assert.equal((await fetch(`${url}/api/enquiry`, { method: 'POST', body: fields })).status, 400);
  assert.equal((await fetch(`${url}/missing-page`)).status, 404);
  assert.equal((await fetch(`${url}/blogs`)).status, 200);
  assert.equal((await fetch(`${url}/about-us`)).status, 200);
} finally { await new Promise(resolve => server.close(resolve)); }
const noMail = createApp({ repository, config: {} });
const offline = noMail.listen(0, '127.0.0.1');
await new Promise(resolve => offline.once('listening', resolve));
try {
  const response = await fetch(`http://127.0.0.1:${offline.address().port}/api/enquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ Name: 'Website QA', Email: 'qa@example.test', Phone: '9000000000' }) });
  assert.equal(response.status, 503, 'A submission must fail when mandatory email delivery is unavailable.');
} finally { await new Promise(resolve => offline.close(resolve)); }
console.log(`PASS: ${pageCount} rendered routes; persisted contact + resume submissions; mandatory dual email flow; invalid input/upload; missing-email failure; route aliases and 404 handling. No email sent.`);
