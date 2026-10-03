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
          <p>{data.description}</p>
          <h6 className="h6">{data.heading3}</h6>
          <p>
            {data.description2}
            <strong>{data.text}</strong>
            {data.description3}
          </p>
          <h6 className="h6">{data.heading4}</h6>
          <p>
            {data.description4}
            <strong>{data.text2}</strong>
            {data.description5}
          </p>
          <h6 className="h6">{data.heading5}</h6>
          <p>
            {data.description6}
            <strong>{data.text3}</strong>
            {data.description7}
          </p>
          <h6 className="h6">{data.heading6}</h6>
          <p>
            {data.description8}
            <strong>{data.text4}</strong>
            {data.description9}
          </p>
          <h6 className="h6">{data.heading7}</h6>
          <p>
            {data.description10}
            <strong>{data.text5}</strong>
            {data.description11}
          </p>
          <h6 className="h6">{data.heading8}</h6>
          <p>
            {data.description12}
            <strong>{data.text6}</strong>
            {data.description13}
          </p>
        </div>
      </div>
    </section>
  );
}
