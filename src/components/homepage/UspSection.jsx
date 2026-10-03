import { AppLink, Icon } from "@/components/ui";

export default function UspSection({ data }) {
  return (
    <section className="section primary-300">
      <div className="container">
        <div className="w-layout-grid h-service-grid">
          <div className="h-service-left">
            <div className="badge">{data.text}</div>
            <div className="spacer _1-rem" />
            <h2 className="h3">
              <span className="secondary-700">{data.text2}</span>
              {data.heading}
            </h2>
            <div className="spacer _2-5-rem" />
            <AppLink
              className="btn-no-bg w-variant-9157a6cc-b1dc-f378-5af0-fcdeb2013bbf w-inline-block"
              href={data.link}
            >
              <div className="btn-text">{data.text3}</div>
              <div className="btn-icon-wrap">
                <Icon name="ArrowRight" className="btn-arrow" />
              </div>
            </AppLink>
          </div>
          <div className="h-service-right">
            {data.items.map((item, index) => (
              <div className="service-card" key={index}>
                <img
                  alt={item.imageAlt}
                  className="service-card-image"
                  height="52"
                  loading="lazy"
                  src={item.image}
                  width="52"
                />
                <div className="service-card-content">
                  <div className="h5">{item.heading}</div>
                  <p className="text-base text-color-900">{item.description}</p>
                </div>
                <AppLink
                  className="btn-no-bg w-variant-9157a6cc-b1dc-f378-5af0-fcdeb2013bbf w-inline-block"
                  href={item.link}
                >
                  <div className="btn-text">{item.text}</div>
                  <div className="btn-icon-wrap">
                    <Icon name="ArrowRight" className="btn-arrow" />
                  </div>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
