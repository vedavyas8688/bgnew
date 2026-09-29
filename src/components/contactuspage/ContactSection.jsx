import { EnquiryForm } from '@/components/ui';

export default function ContactSection({ data }) {
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
        <div className="contact-grid">
          <div className="contact-grid-left">
            <div className="contact-image">
              <img alt={data.imageAlt} className="image" loading="lazy" sizes="(max-width: 767px) 100vw, 648px" src={data.image} width="648" />
              <div className="contact-items-wrap">
                {data.items.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="contact-item-image-wrap">
                      <img alt={item.imageAlt} className="contact-icon" loading="lazy" src={item.image} width="32" />
                    </div>
                    <div className="text-lg medium text-color-900">{item.text}</div>
                  </div>
                ))}
                <div className="contact-item">
                  <div className="contact-item-image-wrap">
                    <img alt={data.imageAlt2} className="contact-icon" loading="lazy" src={data.image2} width="32" />
                  </div>
                  <div className="text-lg medium text-color-900">
                    {data.text}
                    <br />
                    {data.text2}
                    <br />
                    {data.text3}
                  </div>
                </div>
              </div>
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
