import { Icon, ContactTrigger } from '@/components/ui';

export default function VacanciesSection({ data }) {
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
          <div className="job-list w-dyn-items" role="list">
            {data.items.map((item, index) => (
              <div className="w-dyn-item" role="listitem" key={index}>
                <div className="job-item">
                  <div className="h4">{item.heading}</div>
                  <div className="job-item-inner">
                    <p className="h6 text-color-700">{item.heading2}</p>
                  </div>
                  <div id="w-node-bd3502c8-4028-11e6-f5f2-77db23d8d5fc-8fc447b1">
                    <ContactTrigger className="btn-primary w-inline-block">
                      <div>{item.text}</div>
                      <div className="btn-icon-box">
                        <Icon name="ArrowUpRight" className="up-arrow-icon" />
                        <Icon name="ArrowUpRight" className="up-arrow-icon is-absolute" />
                      </div>
                    </ContactTrigger>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
