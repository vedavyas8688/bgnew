import { AppLink, Icon } from '@/components/ui';

export default function ServicesSection({ data }) {
  return (
    <section className="section primary-200">
      <div className="container">
        <div className="two-row-title-wrap">
          <div className="two-row-sub-title-wrap">
            <div className="sub-title-line" />
            <p className="h6 secondary-700">{data.heading}</p>
          </div>
          <h1 className="h3">{data.heading2}</h1>
        </div>
        <div className="w-dyn-list">
          <div className="service-list w-dyn-items" role="list">
            {data.items.map((item, index) => (
              <div className="service-list-item w-dyn-item" role="listitem" key={index}>
                <AppLink className="project-card w-inline-block" href={item.link}>
                  <div className="product-card-image w-variant-service">
                    <img alt={item.imageAlt} className="image" loading="lazy" sizes="100vw" src={item.image} />
                  </div>
                  <div className="project-card-content">
                    <div className="product-card-title-wrap">
                      <div className="h6 secondary-900">{item.heading}</div>
                    </div>
                    <div className="project-card-link-wrap">
                      <Icon name="CircleArrowOutUpRight" className="" />
                    </div>
                  </div>
                  <p className="text-sm">{item.description}</p>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
