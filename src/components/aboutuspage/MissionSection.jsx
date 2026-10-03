export default function MissionSection({ data }) {
  return (
    <section className="section primary-200">
      <div className="container">
        <div className="about-hero-grid">
          <div className="about-hero-grid-right">
            <div className="about-content-top">
              <h2 className="h4">
                {data.heading}
                <span className="secondary-700">{data.text}</span>
              </h2>
              <p className="text-base">{data.description}</p>
            </div>
            <div className="about-items-wrap">
              {data.items.map((item, index) => (
                <div className="about-item" key={index}>
                  <img
                    alt={item.imageAlt}
                    loading="lazy"
                    src={item.image}
                    width="24"
                  />
                  <p className="text-lg">{item.description}</p>
                </div>
              ))}
              <div className="about-item no-border">
                <img
                  alt={data.imageAlt}
                  loading="lazy"
                  src={data.image}
                  width="24"
                />
                <p className="text-lg">{data.description2}</p>
              </div>
            </div>
          </div>
          <div className="about-hero-inner-grid">
            <div className="about-hero-inner-grid-left">
              <div className="about-image-1">
                <img
                  alt={data.imageAlt2}
                  className="image"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, 312px"
                  src={data.image2}
                  width="312"
                />
              </div>
              <div className="about-number-wrap">
                <div className="about-number-wrap-right">
                  <div className="h2 secondary-700">{data.heading2}</div>
                </div>
                <div className="about-number-wrap-left">
                  <div className="h2 small">{data.heading3}</div>
                </div>
              </div>
            </div>
            <div className="about-hero-inner-grid-right">
              <div className="about-image-2">
                <img
                  alt={data.imageAlt3}
                  className="image"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, 409px"
                  src={data.image3}
                  width="409"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
