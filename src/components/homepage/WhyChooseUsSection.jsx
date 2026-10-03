export default function WhyChooseUsSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="title-center">
          <div className="badge">{data.text}</div>
          <h2 className="h3">
            {data.heading}
            <span className="secondary-700">{data.text2}</span>
          </h2>
        </div>
        <div className="h-choose-us-grid">
          <div className="h-choose-us-left">
            <div className="h-choose-us-item">
              <img
                alt={data.imageAlt}
                className="h-choose-us-item-image"
                height="60"
                loading="lazy"
                src={data.image}
                width="55.5"
              />
              <div className="h-choose-us-item-content">
                <div className="h5">{data.heading2}</div>
                <p className="text-base">{data.description}</p>
              </div>
            </div>
            <div className="h-choose-us-item _2nd">
              <img
                alt={data.imageAlt2}
                className="h-choose-us-item-image"
                height="60"
                loading="lazy"
                src={data.image2}
                width="60"
              />
              <div className="h-choose-us-item-content">
                <div className="h5">{data.heading3}</div>
                <p className="text-base">{data.description2}</p>
              </div>
            </div>
            <div className="h-choose-us-item _3rd">
              <img
                alt={data.imageAlt3}
                className="h-choose-us-item-image"
                height="60"
                loading="lazy"
                src={data.image3}
                width="66.5"
              />
              <div className="h-choose-us-item-content">
                <div className="h5">{data.heading4}</div>
                <p className="text-base">{data.description3}</p>
              </div>
            </div>
            <div className="h-choose-us-item _4th">
              <img
                alt={data.imageAlt4}
                className="h-choose-us-item-image"
                height="60"
                loading="lazy"
                src={data.image4}
                width="65.5"
              />
              <div className="h-choose-us-item-content">
                <div className="h5">{data.heading5}</div>
                <p className="text-base">{data.description4}</p>
              </div>
            </div>
          </div>
          <div className="h-choose-us-right">
            <img
              alt={data.imageAlt5}
              className="h-choose-us-image"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, 537px"
              src={data.image5}
              width="537"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
