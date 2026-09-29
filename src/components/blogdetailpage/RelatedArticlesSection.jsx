import { AppLink, Icon } from '@/components/ui';

export default function RelatedArticlesSection({ data }) {
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
          <div className="related-blog-list w-dyn-items" role="list">
            {data.items.map((item, index) => (
              <div className="w-dyn-item" role="listitem" key={index}>
                <AppLink className="blog-card w-inline-block" href={item.link}>
                  <div className="blog-card-image">
                    <img alt={item.imageAlt || `${item.heading || item.title} — BG Elevators`} className="image" loading="lazy" src={item.image} />
                  </div>
                  <div className="blog-card-center">
                    <div className="blog-card-title-wrap">
                      <div className="text-md secondary-700">{item.text}</div>
                      <div className="h5">{item.heading}</div>
                    </div>
                    <Icon name="CircleArrowOutUpRight" className="blog-card-svg" />
                  </div>
                  <p className="text-lg">{item.description}</p>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
