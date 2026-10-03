import { Icon, EnquiryForm } from "@/components/ui";

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
          className="job-details-cover"
          loading="lazy"
          sizes="100vw"
          src={data.image}
        />
        <div className="job-details-grid">
          <div className="job-details-grid-left">
            <div className="job-overview w-richtext">
              <p>{data.description}</p>
            </div>
            <div className="job-informations-wrap">
              <div className="job-info-item">
                <div className="job-info-inner">
                  <img
                    alt={data.imageAlt2}
                    className="job-info-icon"
                    loading="lazy"
                    src={data.image2}
                    width="23"
                  />
                  <p className="text-base medium text-color-900">
                    {data.description2}
                  </p>
                </div>
                <div className="text-base semi-bold">{data.text}</div>
              </div>
              <div className="job-info-item">
                <div className="job-info-inner">
                  <img
                    alt={data.imageAlt3}
                    className="job-info-icon"
                    loading="lazy"
                    src={data.image3}
                    width="24"
                  />
                  <p className="text-base medium text-color-900">
                    {data.description3}
                  </p>
                </div>
                <div className="text-base semi-bold">{data.text2}</div>
              </div>
              <div className="job-info-item">
                <div className="job-info-inner">
                  <Icon name="BriefcaseBusiness" className="source-icon" />
                  <p className="text-base medium text-color-900">
                    {data.description4}
                  </p>
                </div>
                <div className="text-base semi-bold">{data.text3}</div>
              </div>
              <div className="job-info-item last-item">
                <div className="job-info-inner">
                  <img
                    alt={data.imageAlt4}
                    className="job-info-icon"
                    loading="lazy"
                    src={data.image4}
                    width="24"
                  />
                  <p className="text-base medium text-color-900">
                    {data.description5}
                  </p>
                </div>
                <div className="text-base semi-bold">{data.text4}</div>
              </div>
            </div>
            <div className="job-list w-richtext">
              <h2>{data.heading3}</h2>
              <ul role="list">
                {data.items.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <h2>{data.heading4}</h2>
              <ul role="list">
                {data.items2.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <h2>{data.heading5}</h2>
              <ul role="list">
                {data.items3.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="contact-form-block w-form">
            <EnquiryForm data={data.form} />
          </div>
        </div>
      </div>
    </section>
  );
}
