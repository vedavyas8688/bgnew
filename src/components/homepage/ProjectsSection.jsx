import { Carousel } from '@/components/ui';

export default function ProjectsSection({ data }) {
  return (
    <section className="section primary-200 home-projects-section">
      <div className="container">
        <div className="two-col-title-wrap">
          <div className="two-col-title-left">
            <div className="badge">{data.text}</div>
            <h2 className="h3">
              {data.heading}
              <span className="secondary-700">{data.text2}</span>
            </h2>
          </div>
        </div>
        <Carousel autoPlay interval={5000} variant="projects">
          {data.items.map((item, index) => (
            <div className="slider-item w-slide" key={index}>
              <div className="h-product-list-item w-dyn-item" role="listitem">
                <div className="project-card w-inline-block">
                  <div className="product-card-image">
                    <img alt={item.imageAlt} className="image" loading="lazy" sizes="100vw" src={item.image} />
                  </div>
                  <div className="project-card-content">
                    <div className="product-card-title-wrap">
                      <div className="product-card-price medium">{item.text}</div>
                      <div className="h6 secondary-900">{item.heading}</div>
                    </div>
                  </div>
                  <div className="project-deatails-about-data">
                    <div className="data">
                      {item.items.map((item, index) => (
                        <p key={index}>
                          {item.description}
                          <strong>{item.text}</strong>
                        </p>
                      ))}
                    </div>
                    <div className="data">
                      <p>
                        {item.description}
                        <strong>{item.text2}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
