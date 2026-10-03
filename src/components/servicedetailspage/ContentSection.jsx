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
        <img
          alt={data.imageAlt}
          className="inner-cover"
          loading="lazy"
          sizes="100vw"
          src={data.image}
        />
        <div className="service-rich-text w-richtext">
          <h2>{data.heading3}</h2>
          {data.items.map((item, index) => (
            <p key={index}>{item.description}</p>
          ))}
          <ul role="list">
            {data.items2.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <p>{data.description}</p>
        </div>
        <div className="service-inner-grid">
          <div className="service-rich-text no-mb w-richtext">
            <h2>{data.heading4}</h2>
            <p>{data.description2}</p>
            <ul role="list">
              {data.items3.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
            </ul>
          </div>
          <div className="service-inner-grid-right">
            <img
              alt={data.imageAlt2}
              className="service-side-image"
              loading="lazy"
              sizes="100vw"
              src={data.image2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
