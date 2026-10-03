import { createElement, Fragment } from "react";
import { AppLink } from "@/components/ui";

/** Structured article blocks keep every paragraph, link, heading and table editable. */
function Block({ node }) {
  if (typeof node === "string") return node;
  const attrs = { ...node.attributes };
  const children = node.children?.map((child, i) => (
    <Block node={child} key={i} />
  ));
  if (node.tag === "a") return <AppLink {...attrs}>{children}</AppLink>;
  if (["img", "br", "hr", "wbr", "source"].includes(node.tag))
    return createElement(node.tag, attrs);
  if (node.tag === "table")
    return (
      <div className="article-table-scroll">
        {createElement("table", attrs, children)}
      </div>
    );
  return createElement(node.tag, attrs, children);
}
function nodeText(node) {
  if (typeof node === "string") return node;
  return node?.children?.map(nodeText).join(" ") || "";
}
function directAnswer(node, followingNodes) {
  const heading = nodeText(node).replace(/\s+/g, " ").trim();
  if (
    !/^h[2-4]$/.test(node?.tag || "") ||
    (!heading.endsWith("?") &&
      !/^(how|what|why|when|which|can|does|is|are|should)\b/i.test(heading))
  )
    return "";
  const nextNode = followingNodes.find(
    (candidate) =>
      candidate && typeof candidate === "object" && candidate.tag !== "br",
  );
  if (nextNode?.tag !== "p") return "";
  const text = nodeText(nextNode).replace(/\s+/g, " ").trim();
  return (
    text
      .match(/[^.!?]+[.!?]+/g)
      ?.slice(0, 2)
      .join(" ") || text
  )
    .slice(0, 320)
    .trim();
}
export default function ArticleContent({ article }) {
  const introductionIndex = article.body.findIndex(
    (node) =>
      node?.tag === "p" &&
      node.children?.some((child) => typeof child === "string" && child.trim()),
  );
  return (
    <div className="article-prose">
      {article.body.map((node, index) => {
        if (index === introductionIndex) return null;
        const answer = directAnswer(node, article.body.slice(index + 1));
        return (
          <Fragment key={index}>
            <Block node={node} />
            {answer && (
              <p className="article-direct-answer">
                <strong>Short answer:</strong> {answer}
              </p>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
