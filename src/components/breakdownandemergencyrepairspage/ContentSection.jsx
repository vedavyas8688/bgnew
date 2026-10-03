export default function ContentSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="two-row-title-wrap">
          <div className="two-row-sub-title-wrap">
            <div className="sub-title-line" />
            <p className="h6 secondary-700">{data.heading}</p>
          </div>
          <h1 className="h3">{data.heading2}</h1>
        </div>
        <div className="project-overview w-richtext service-overview">
          <p>{data.description}</p>
          <ul>
            {data.items.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
