import { createElement } from 'react';
import { AppLink } from '@/components/ui';

/** Structured article blocks keep every paragraph, link, heading and table editable. */
function Block({ node }) {
  if (typeof node === 'string') return node;
  const attrs = { ...node.attributes };
  const children = node.children?.map((child, i) => <Block node={child} key={i} />);
  if (node.tag === 'a') return <AppLink {...attrs}>{children}</AppLink>;
  if (['img', 'br', 'hr', 'wbr', 'source'].includes(node.tag)) return createElement(node.tag, attrs);
  if (node.tag === 'table') return <div className="article-table-scroll">{createElement('table', attrs, children)}</div>;
  return createElement(node.tag, attrs, children);
}
export default function ArticleContent({ article }) {
  const introductionIndex = article.body.findIndex(node => node?.tag === 'p' && node.children?.some(child => typeof child === 'string' && child.trim()));
  return <div className="article-prose">{article.body.map((node, index) => index === introductionIndex ? null : <Block node={node} key={index} />)}</div>;
}
