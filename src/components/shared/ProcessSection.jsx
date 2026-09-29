
export default function ProcessSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="title-center _3-rem">
          <div className="badge">{data.text}</div>
          <h2>
            {data.heading}
            <span className="secondary-700">{data.text2}</span>
            {data.heading2}
            <span className="secondary-700">{data.text3}</span>
          </h2>
        </div>
        <div className="about-work-card-list">
          {data.items.map((item, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-top">
                <img alt={item.imageAlt} className="work-card-image" loading="lazy" src={item.image} width="58" />
                <div className="h5">{item.heading}</div>
              </div>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
          <div className="work-card">
            <div className="work-card-top">
              <img alt={data.imageAlt} className="work-card-image" loading="lazy" src={data.image} width="48" />
              <div className="h5">{data.heading3}</div>
            </div>
            <p className="text-base">{data.description}</p>
          </div>
          <div className="work-card">
            <div className="work-card-top">
              <img alt={data.imageAlt2} className="work-card-image" loading="lazy" src={data.image2} width="52" />
              <div className="h5">{data.heading4}</div>
            </div>
            <p className="text-base">{data.description2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
