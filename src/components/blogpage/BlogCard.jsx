import { AppLink, Icon } from "@/components/ui";
import ui from "@/data/ui.json";

export default function BlogCard({ article, featured = false }) {
  return (
    <article className={featured ? "blog-featured" : "editorial-card"}>
      <AppLink
        href={article.href}
        className="editorial-card-image"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={article.image}
          alt={article.imageAlt || `${article.title} — BG Elevators`}
          loading={featured ? "eager" : "lazy"}
        />
      </AppLink>
      <div className="editorial-card-content">
        {article.date && (
          <p className="editorial-date">
            <Icon name="CalendarDays" size={15} />
            {article.date}
          </p>
        )}
        <h2>
          <AppLink href={article.href}>{article.title}</AppLink>
        </h2>
        {article.description && (
          <p className="editorial-excerpt">{article.description}</p>
        )}
        <AppLink
          href={article.href}
          className="editorial-read"
          aria-label={`${ui.blog.readArticle}: ${article.title}`}
        >
          {ui.blog.readArticle}
          <Icon name="ArrowUpRight" size={20} />
        </AppLink>
      </div>
    </article>
  );
}
