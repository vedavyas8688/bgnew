import { AppLink, Icon } from "@/components/ui";

export default function MaintenanceSupportSection({ data }) {
  return (
    <section className="section primary-200 home-support-section">
      <div className="container">
        <div className="title-center _3-rem">
          <div className="badge">{data.badge}</div>
          <h2 className="h3">
            {data.heading} <span className="secondary-700">{data.accent}</span>
          </h2>
          <p className="text-base home-section-intro">{data.description}</p>
        </div>
        <div className="home-support-grid">
          {data.items.map((item) => (
            <AppLink
              className="home-support-card"
              href={item.link}
              key={item.heading}
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
                width="420"
                height="260"
              />
              <div className="home-support-card-content">
                <h3 className="h5">{item.heading}</h3>
                <p className="text-base text-color-900">{item.description}</p>
                <span className="btn-no-bg w-inline-block">
                  <span className="btn-text">Learn More</span>
                  <span className="btn-icon-wrap">
                    <Icon name="ArrowRight" className="btn-arrow" />
                  </span>
                </span>
              </div>
            </AppLink>
          ))}
        </div>
        <div className="home-support-footer">
          <AppLink className="btn-primary w-inline-block" href={data.link}>
            <span>{data.linkText}</span>
            <span className="btn-icon-box">
              <Icon name="ArrowUpRight" className="up-arrow-icon" />
              <Icon
                name="ArrowUpRight"
                className="up-arrow-icon is-absolute"
              />
            </span>
          </AppLink>
        </div>
      </div>
    </section>
  );
}
