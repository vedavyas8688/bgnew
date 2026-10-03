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
        <div className="project-overview w-richtext service-overview">
          {data.items.map((item, index) => (
            <p key={index}>{item.description}</p>
          ))}
          <h6 className="h6">{data.heading3}</h6>
          <p>{data.description}</p>
          <ul>
            {data.items2.map((item, index) => (
              <li key={index}>
                <strong>{item.text}</strong>
                {item.text2}
              </li>
            ))}
          </ul>
          <h6 className="h6">{data.heading4}</h6>
          <p>{data.description2}</p>
          <h6 className="h6">{data.heading5}</h6>
          <p>{data.description3}</p>
          <h6 className="h6">{data.heading6}</h6>
          <p>{data.description4}</p>
          <h6 className="h6">{data.heading7}</h6>
          <p>{data.description5}</p>
          <h6 className="h6">{data.heading8}</h6>
          <p>{data.description6}</p>
          <h6 className="h6">{data.heading9}</h6>
          <p>{data.description7}</p>
          <h6 className="h6">{data.heading10}</h6>
          <p>{data.description8}</p>
        </div>
      </div>
    </section>
  );
}
