import { AppLink, Icon } from '@/components/ui';

export default function Section2({ data }) {
  return (
    <section className="section primary-200">
      <div className="container">
        <div className="two-col-title-wrap">
          <div className="two-col-title-left">
            <div className="badge">{data.text}</div>
            <h2 className="h3">
              {data.heading}
              <span className="secondary-700">{data.text2}</span>
            </h2>
          </div>
          <AppLink className="btn-no-bg w-variant-9157a6cc-b1dc-f378-5af0-fcdeb2013bbf w-inline-block" href={data.link}>
            <div className="btn-text">{data.text3}</div>
            <div className="btn-icon-wrap">
              <Icon name="ArrowRight" className="btn-arrow" />
            </div>
          </AppLink>
        </div>
        <div className="w-dyn-list">
          <div className="h-product-list w-dyn-items" role="list">
            {data.items.map((item, index) => (
              <div className="h-product-list-item w-dyn-item" role="listitem" key={index}>
                <AppLink className="project-card w-inline-block" href={item.link}>
                  <div className="product-card-image">
                    <img alt={item.imageAlt} className="image" loading="lazy" sizes="100vw" src={item.image} />
                  </div>
                  <div className="project-card-content">
                    <div className="product-card-title-wrap">
                      <div className="h5 secondary-900">{item.heading}</div>
                    </div>
                    <div className="project-card-link-wrap">
                      <Icon name="CircleArrowOutUpRight" className="" />
                    </div>
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
