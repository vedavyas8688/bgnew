import { AppLink, Icon } from "@/components/ui";

export default function ContentSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="two-row-title-wrap">
          <div className="two-row-sub-title-wrap">
            <div className="sub-title-line" />
            <p className="h6 secondary-700">{data.heading}</p>
          </div>
          <h1 className="h3">{data.heading2}</h1>
        </div>
        <div className="w-dyn-list">
          <div className="project-list w-dyn-items products-list" role="list">
            {data.items.map((item, index) => (
              <div
                className="project-list-item w-dyn-item"
                role="listitem"
                key={index}
              >
                <AppLink
                  className="project-card w-variant-b02b8a31-898b-ae68-8fd8-6811c694c34e w-inline-block"
                  href={item.link}
                >
                  <div className="product-card-image w-variant-b02b8a31-898b-ae68-8fd8-6811c694c34e">
                    <img
                      alt={item.imageAlt}
                      className="image"
                      loading="lazy"
                      src={item.image}
                    />
                  </div>
                  <div className="project-card-content">
                    <div className="product-card-title-wrap">
                      <div className="h5 secondary-900">{item.heading}</div>
                    </div>
                    <div className="project-card-link-wrap">
                      <Icon name="CircleArrowOutUpRight" className="" />
                    </div>
                  </div>
                  <p>{item.description}</p>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
