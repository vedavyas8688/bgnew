import routes from '@/data/routes.json';
import articleIndex from '@/data/articleIndex.json';
import metadata from '@/data/metadata.json';

const pageModules = import.meta.glob('../pages/*.jsx');
const articles = import.meta.glob('../data/articles/*.json');
const routeMap = Object.fromEntries(routes.map(route => [route.slug, route.page]));
const articleSlugs = new Set(articleIndex.map(article => article.slug));
export function pageSlug(pathname) {
  return decodeURIComponent(pathname).replace(/^\/+|\/+$/g, '').replace(/\.html$/, '') || 'index';
}
export async function resolvePage(pathname) {
  const slug = pageSlug(pathname);
  if (articleSlugs.has(slug)) {
    const [page, article] = await Promise.all([pageModules['../pages/BlogDetailPage.jsx'](), articles[`../data/articles/${slug}.json`]()]);
    return { slug, Component: page.default, props: { article: article.default }, meta: metadata[slug], found: true };
  }
  const name = routeMap[slug];
  const page = await pageModules[`../pages/${name || 'NotFoundPage'}.jsx`]();
  return { slug, Component: page.default, props: {}, meta: metadata[slug] || { title: 'Page not found | BG Elevators', meta: [{ name: 'robots', content: 'noindex' }], schemas: [] }, found: !!name };
}
export const allPaths = ['/', ...routes.filter(route => route.slug !== 'index').map(route => route.path), ...articleIndex.map(article => `/${article.slug}`)];
