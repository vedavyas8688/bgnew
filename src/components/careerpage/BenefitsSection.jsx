
export default function BenefitsSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="title-center our-benefit">
          <div className="badge">{data.text}</div>
          <h2 className="h2">
            {data.heading}
            <span className="secondary-700">{data.text2}</span>
            {data.heading2}
            <span className="secondary-700">{data.text3}</span>
          </h2>
        </div>
        <div className="about-work-card-list">
          {data.items.map((item, index) => (
            <div className="work-card benefit" key={index}>
              <div className="work-card-top benefit">
                <div className="h5">{item.heading}</div>
              </div>
              <p className="text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
