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
        <img
          alt={data.imageAlt}
          className="inner-cover contain"
          loading="lazy"
          sizes="100vw"
          src={data.image}
        />
        <div className="project-grid">
          <div className="project-overview w-richtext">
            <div className="product-specifications-data">
              <h4 className="mb-3 h5 door-names">{data.heading3}</h4>
              <p>{data.description}</p>
            </div>
            <div className="cop-lop-feature-list">
              {data.items.map((item, index) => (
                <div className="cop-lop-feature-item" key={index}>
                  <strong>{item.text}</strong>
                  {item.text2}
                </div>
              ))}
              <div className="cop-lop-feature-item">
                <strong>{data.text}</strong>
                <p>{data.description2}</p>
              </div>
              {data.items2.map((item, index) => (
                <div className="cop-lop-feature-item" key={index}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="project-information-wrap">
            <h2 className="h4">{data.heading4}</h2>
            <div className="project-info-items">
              <div className="project-info-item">
                <AppLink href={data.link}>
                  <div className="text-base medium text-color-900">
                    {data.text2}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text3}</span>
              <div className="project-info-item">
                <AppLink href={data.link2}>
                  <div className="text-base medium text-color-900">
                    {data.text4}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text5}</span>
              <div className="project-info-item">
                <AppLink href={data.link3}>
                  <div className="text-base medium text-color-900">
                    {data.text6}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text7}</span>
              <div className="project-info-item">
                <AppLink href={data.link4}>
                  <div className="text-base medium text-color-900">
                    {data.text8}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text9}</span>
              <div className="project-info-item">
                <AppLink href={data.link5}>
                  <div className="text-base medium text-color-900">
                    {data.text10}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text11}</span>
              <div className="project-info-item">
                <AppLink href={data.link6}>
                  <div className="text-base medium text-color-900">
                    {data.text12}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text13}</span>
              <div className="project-info-item">
                <AppLink href={data.link7}>
                  <div className="text-base medium text-color-900">
                    {data.text14}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text15}</span>
              <div className="project-info-item">
                <AppLink href={data.link8}>
                  <div className="text-base medium text-color-900">
                    {data.text16}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text17}</span>
              <div className="project-info-item">
                <AppLink href={data.link9}>
                  <div className="text-base medium text-color-900">
                    {data.text18}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text19}</span>
              <div className="project-info-item">
                <AppLink href={data.link10}>
                  <div className="text-base medium text-color-900">
                    {data.text20}
                  </div>
                </AppLink>
              </div>
            </div>
            <h2 className="h4">{data.heading5}</h2>
            <div className="project-info-items">
              <div className="project-info-item">
                <AppLink href={data.link11}>
                  <div className="text-base medium text-color-900">
                    {data.text21}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text22}</span>
              <div className="project-info-item">
                <AppLink href={data.link12}>
                  <div className="text-base medium text-color-900">
                    {data.text23}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text24}</span>
              <div className="project-info-item">
                <AppLink href={data.link13}>
                  <div className="text-base medium text-color-900">
                    {data.text25}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text26}</span>
              <div className="project-info-item">
                <AppLink href={data.link14}>
                  <div className="text-base medium text-color-900">
                    {data.text27}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text28}</span>
              <div className="project-info-item">
                <AppLink href={data.link15}>
                  <div className="text-base medium text-color-900">
                    {data.text29}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text30}</span>
              <div className="project-info-item">
                <AppLink href={data.link16}>
                  <div className="text-base medium text-color-900">
                    {data.text31}
                  </div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text32}</span>
              <div className="project-info-item">
                <AppLink href={data.link17}>
                  <div className="text-base medium text-color-900">
                    {data.text33}
                  </div>
                </AppLink>
              </div>
            </div>
            <div className="project-information-bottom">
              <h2 className="h4">{data.heading6}</h2>
              <div className="project-contact-info-items">
                {data.items3.map((item, index) => (
                  <div className="project-contact-info-item" key={index}>
                    <img
                      alt={item.imageAlt}
                      className="project-contact-info-item-icon"
                      loading="lazy"
                      src={item.image}
                      width="32"
                    />
                    <div className="text-base secondary-700">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <AppLink
              className="btn-primary full-width w-inline-block"
              href={data.link18}
            >
              <div>{data.text34}</div>
              <div className="btn-icon-box">
                <Icon name="ArrowUpRight" className="up-arrow-icon" />
                <Icon
                  name="ArrowUpRight"
                  className="up-arrow-icon is-absolute"
                />
              </div>
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
