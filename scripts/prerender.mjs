import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { renderPage, allPaths } from '../.ssr/entry-server.js';

const shell = await readFile('dist/index.html', 'utf8');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function head(meta) {
  const description = meta.meta?.find(item => item.name === 'description')?.content || '';
  const defaults = [
    { property: 'og:type', content: 'website' }, { property: 'og:site_name', content: 'BG Elevators' },
    { property: 'og:title', content: meta.title }, { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://www.bgelevators.com/images/673d74269488c8595948fdd9_home-hero-image.webp' },
    { property: 'og:image:alt', content: 'BG Elevators premium elevator solutions' },
    { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://www.bgelevators.com/images/673d74269488c8595948fdd9_home-hero-image.webp' },
  ];
  const pageMeta = [...(meta.meta || [])];
  for (const item of defaults) if (item.content && !pageMeta.some(current => (item.name && current.name === item.name) || (item.property && current.property === item.property))) pageMeta.push(item);
  if (process.env.VITE_GOOGLE_SITE_VERIFICATION) pageMeta.push({ name: 'google-site-verification', content: process.env.VITE_GOOGLE_SITE_VERIFICATION });
  const tags = pageMeta.map(item => `<meta data-page-meta ${Object.entries(item).map(([k, v]) => `${k}="${escape(v)}"`).join(' ')}>`);
  if (meta.canonical) tags.push(`<link data-page-meta rel="canonical" href="${escape(meta.canonical)}">`);
  if (meta.canonical && !(meta.meta || []).some(item => item.property === 'og:url')) tags.push(`<meta data-page-meta property="og:url" content="${escape(meta.canonical)}">`);
  for (const schema of meta.schemas || []) tags.push(`<script data-page-meta type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`);
  return tags.join('\n    ');
}
let count = 0;
for (const pathname of [...allPaths, '/404.html']) {
  const page = await renderPage(pathname);
  const html = shell.replace(/<title>.*?<\/title>/s, `<title>${escape(page.meta.title)}</title>`)
    .replace('<!--page-head-->', () => head(page.meta))
    .replace('<!--page-html-->', () => page.html);
  const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
  await writeFile(`dist/${filename}`, html);
  count++;
}
console.log(`Pre-rendered ${count - 1} original routes and a 404 page with full article content and page metadata.`);
await mkdir('docs', { recursive: true });
await writeFile('docs/route-list.json', JSON.stringify(allPaths, null, 2) + '\n');
