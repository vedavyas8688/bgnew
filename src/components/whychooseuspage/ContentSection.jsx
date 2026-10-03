import { Icon } from "@/components/ui";

export default function ContentSection({ data }) {
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
          <div className="work-card benefit">
            <div className="work-card-top benefit">
              <Icon name="Award" className="source-icon" />
              <div className="h5">{data.heading3}</div>
            </div>
            <p className="text-base">
              {data.description}
              <strong>{data.text4}</strong>
              {data.description2}
            </p>
          </div>
          <div className="work-card benefit">
            <div className="work-card-top benefit">
              <Icon name="Award" className="source-icon" />
              <div className="h5">{data.heading4}</div>
            </div>
            <p className="text-base">
              {data.description3}
              <strong>{data.text5}</strong>
              {data.description4}
            </p>
          </div>
          <div className="work-card benefit">
            <div className="work-card-top benefit">
              <Icon name="Award" className="source-icon" />
              <div className="h5">{data.heading5}</div>
            </div>
            <p className="text-base">
              {data.description5}
              <strong>{data.text6}</strong>
              {data.description6}
            </p>
          </div>
          {data.items.map((item, index) => (
            <div className="work-card benefit" key={index}>
              <div className="work-card-top benefit">
                <Icon name="Award" className="source-icon" />
                <div className="h5">{item.heading}</div>
              </div>
              <p className="text-base">
                {item.description}
                <strong>{item.text}</strong>
                {item.description2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
