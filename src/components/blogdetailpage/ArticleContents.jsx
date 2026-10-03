import ui from "@/data/ui.json";

export default function ArticleContents({ article }) {
  if (!article.headings.length) return null;
  const primaryHeadings = article.headings
    .filter((heading) => heading.level === "h2")
    .slice(0, 5);
  return (
    <aside className="article-sidebar">
      <nav aria-label={ui.blog.contents}>
        <h2>In this story</h2>
        <ol>
          {primaryHeadings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`}>{heading.title}</a>
            </li>
          ))}
        </ol>
        <a className="article-back-top" href="#main-content">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </nav>
    </aside>
  );
}
