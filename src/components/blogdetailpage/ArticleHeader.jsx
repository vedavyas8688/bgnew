import { AppLink, Icon } from "@/components/ui";
import { businessProfile } from "@/data/businessProfile";

function nodeText(node) {
  if (typeof node === "string") return node;
  return node?.children?.map(nodeText).join("") || "";
}

export default function ArticleHeader({ article }) {
  const introduction = article.body
    .find((node) => node?.tag === "p" && nodeText(node).trim())
    ?.children?.map(nodeText)
    .join("")
    .trim();
  const articleWords = article.body
    .map(nodeText)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const readingMinutes = Math.max(1, Math.ceil(articleWords / 220));
  const reviewedDate =
    article.modifiedDate || article.date || "September 29, 2026";
  return (
    <header className="article-header">
      <div className="editorial-container">
        <div className="article-header-top">
          <AppLink href="/blogs" className="article-back">
            <Icon name="ArrowLeft" size={16} />
            Journal
          </AppLink>
          <div className="article-header-details">
            <div className="article-meta">
          <span>{article.eyebrow}</span>
          {article.date && (
            <>
              <i>·</i>
              <time>{article.date}</time>
            </>
          )}
          <i>·</i>
          <span>{readingMinutes} min read</span>
        </div>
            <div className="article-byline">
          <span>By {businessProfile.legalAuthorName}</span>
          <i>·</i>
          <i>·</i>
          <span>
            Last reviewed <time>{reviewedDate}</time>
          </span>
            </div>
          </div>
          <span className="article-header-balance" aria-hidden="true" />
        </div>
        <div className="article-title-row">
          <h1>{article.title}</h1>
          {introduction && (
            <p className="article-introduction">{introduction}</p>
          )}
        </div>
        {article.image && (
          <div className="article-cover">
            <img
              src={article.image}
              alt={article.imageAlt || `${article.title} — BG Elevators`}
              fetchPriority="high"
            />
          </div>
        )}
      </div>
    </header>
  );
}
