import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";
import articles from "@/data/blogs.json";
import ui from "@/data/ui.json";

const PAGE_SIZE = 10;
const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date) - new Date(a.date),
);
const latestArticle = sortedArticles[0];
const remainingArticles = sortedArticles.slice(1);

export default function BlogListingSection() {
  const [page, setPage] = useState(1);
  const listRef = useRef(null);
  const initialRender = useRef(true);
  const pageCount = Math.ceil(remainingArticles.length / PAGE_SIZE);
  const pageArticles = remainingArticles.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  return (
    <section className="editorial-listing">
      <div className="editorial-masthead">
        <div className="editorial-container">
          <p className="editorial-eyebrow">{ui.blog.eyebrow}</p>
          <h1>{ui.blog.title}</h1>
        </div>
      </div>
      <div className="editorial-container editorial-feed">
        <BlogCard article={latestArticle} featured />
        <div className="editorial-grid" ref={listRef}>
          {pageArticles.map((article, index) => (
            <BlogCard article={article} key={`${article.href}-${index}`} />
          ))}
        </div>
        {pageCount > 1 && (
          <nav className="blog-pagination" aria-label="Blog pages">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => setPage((value) => value - 1)}
              aria-label="Previous blog page"
            >
              ← <span>Previous</span>
            </button>
            <div className="blog-page-numbers">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (number) => (
                  <button
                    type="button"
                    className={number === page ? "is-active" : ""}
                    aria-current={number === page ? "page" : undefined}
                    aria-label={`Blog page ${number}`}
                    onClick={() => setPage(number)}
                    key={number}
                  >
                    {number}
                  </button>
                ),
              )}
            </div>
            <button
              type="button"
              disabled={page === pageCount}
              onClick={() => setPage((value) => value + 1)}
              aria-label="Next blog page"
            >
              <span>Next</span> →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
