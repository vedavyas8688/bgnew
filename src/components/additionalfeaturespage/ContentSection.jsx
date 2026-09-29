import { AppLink, Icon } from '@/components/ui';

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
        <img alt={data.imageAlt} className="inner-cover contain optional" loading="lazy" sizes="100vw" src={data.image} />
        <div className="project-grid">
          <div className="project-overview w-richtext">
            <h2>{data.heading3}</h2>
            <p>{data.description}</p>
            <div className="cop-lop-feature-list">
              {data.items.map((item, index) => (
                <div className="cop-lop-feature-item" key={index}>{item.text}</div>
              ))}
            </div>
          </div>
          <div className="project-information-wrap">
            <h2 className="h4">{data.heading4}</h2>
            <div className="project-info-items">
              <div className="project-info-item">
                <AppLink href={data.link}>
                  <div className="text-base medium text-color-900">{data.text}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text2}</span>
              <div className="project-info-item">
                <AppLink href={data.link2}>
                  <div className="text-base medium text-color-900">{data.text3}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text4}</span>
              <div className="project-info-item">
                <AppLink href={data.link3}>
                  <div className="text-base medium text-color-900">{data.text5}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text6}</span>
              <div className="project-info-item">
                <AppLink href={data.link4}>
                  <div className="text-base medium text-color-900">{data.text7}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text8}</span>
              <div className="project-info-item">
                <AppLink href={data.link5}>
                  <div className="text-base medium text-color-900">{data.text9}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text10}</span>
              <div className="project-info-item">
                <AppLink href={data.link6}>
                  <div className="text-base medium text-color-900">{data.text11}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text12}</span>
              <div className="project-info-item">
                <AppLink href={data.link7}>
                  <div className="text-base medium text-color-900">{data.text13}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text14}</span>
              <div className="project-info-item">
                <AppLink href={data.link8}>
                  <div className="text-base medium text-color-900">{data.text15}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text16}</span>
              <div className="project-info-item">
                <AppLink href={data.link9}>
                  <div className="text-base medium text-color-900">{data.text17}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text18}</span>
              <div className="project-info-item">
                <AppLink href={data.link10}>
                  <div className="text-base medium text-color-900">{data.text19}</div>
                </AppLink>
              </div>
            </div>
            <h2 className="h4">{data.heading5}</h2>
            <div className="project-info-items">
              <div className="project-info-item">
                <AppLink href={data.link11}>
                  <div className="text-base medium text-color-900">{data.text20}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text21}</span>
              <div className="project-info-item">
                <AppLink href={data.link12}>
                  <div className="text-base medium text-color-900">{data.text22}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text23}</span>
              <div className="project-info-item">
                <AppLink href={data.link13}>
                  <div className="text-base medium text-color-900">{data.text24}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text25}</span>
              <div className="project-info-item">
                <AppLink href={data.link14}>
                  <div className="text-base medium text-color-900">{data.text26}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text27}</span>
              <div className="project-info-item">
                <AppLink href={data.link15}>
                  <div className="text-base medium text-color-900">{data.text28}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text29}</span>
              <div className="project-info-item">
                <AppLink href={data.link16}>
                  <div className="text-base medium text-color-900">{data.text30}</div>
                </AppLink>
              </div>
              <span className="project-info-slash-icon">{data.text31}</span>
              <div className="project-info-item">
                <AppLink href={data.link17}>
                  <div className="text-base medium text-color-900">{data.text32}</div>
                </AppLink>
              </div>
            </div>
            <div className="project-information-bottom">
              <h2 className="h4">{data.heading6}</h2>
              <div className="project-contact-info-items">
                {data.items2.map((item, index) => (
                  <div className="project-contact-info-item" key={index}>
                    <img alt={item.imageAlt} className="project-contact-info-item-icon" loading="lazy" src={item.image} width="32" />
                    <div className="text-base secondary-700">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
            <AppLink className="btn-primary full-width w-inline-block" href={data.link18}>
              <div>{data.text33}</div>
              <div className="btn-icon-box">
                <Icon name="ArrowUpRight" className="up-arrow-icon" />
                <Icon name="ArrowUpRight" className="up-arrow-icon is-absolute" />
              </div>
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
