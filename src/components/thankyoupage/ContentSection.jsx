import { AppLink } from "@/components/ui";

export default function ContentSection({ data }) {
  return (
    <div className="success-container">
      <img alt={data.imageAlt} className="success-image" src={data.image} />
      <div className="success-content">
        <h1>{data.heading}</h1>
        <h2>{data.heading2}</h2>
        <p>
          <AppLink href={data.link}>
            <img alt={data.imageAlt2} height="12" width="12" />
            {data.label}
          </AppLink>
        </p>
      </div>
    </div>
  );
}
