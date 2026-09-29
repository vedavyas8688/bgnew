import { AppLink, Icon, Carousel } from '@/components/ui';

export default function ProductsSection({ data }) {
  return (
    <section className="section home-products-section">
      <div className="container">
        <div className="two-col-title-wrap">
          <div className="two-col-title-left">
            <div className="badge">{data.text}</div>
            <h2 className="h3">{data.heading}</h2>
          </div>
          <AppLink className="btn-no-bg w-variant-9157a6cc-b1dc-f378-5af0-fcdeb2013bbf w-inline-block" href={data.link}>
            <div className="btn-text">{data.text2}</div>
            <div className="btn-icon-wrap">
              <Icon name="ArrowRight" className="btn-arrow" />
            </div>
          </AppLink>
        </div>
        <div className="my-swiper-container swiper">
          <Carousel variant="products">
            {data.items.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="h-product-list-item w-dyn-item">
                  <AppLink className="project-card w-inline-block" href={item.link}>
                    <div className="product-card-image">
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
                  </AppLink>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
