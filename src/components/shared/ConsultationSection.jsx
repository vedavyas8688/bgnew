import { AppLink, Icon } from "@/components/ui";

export default function ConsultationSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-main-wrap">
          <div className="cta-left">
            <h2 className="h2">
              {data.heading}
              <span className="secondary-700">{data.text}</span>
            </h2>
            <div className="cta-des-wrap">
              <p className="text-base text-color-900">{data.description}</p>
            </div>
            <AppLink className="btn-primary w-inline-block" href={data.link}>
              <div>{data.text2}</div>
              <div className="btn-icon-box">
                <Icon name="ArrowUpRight" className="up-arrow-icon" />
                <Icon
                  name="ArrowUpRight"
                  className="up-arrow-icon is-absolute"
                />
              </div>
            </AppLink>
          </div>
          <div className="cta-right">
            <div className="cta-image">
              <img
                alt={data.imageAlt}
                className="image"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 497px"
                src={data.image}
                width="497"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
