import { AppLink } from "@/components/ui";

export default function ContentSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="blog-content w-richtext">
          <h1>
            <strong>{data.text}</strong>
          </h1>
          <p>
            {data.description}
            <AppLink href={data.link}>{data.label}</AppLink>
            {data.description2}
          </p>
          <br />
          <h3>
            <strong>{data.text2}</strong>
          </h3>
          <p>{data.description3}</p>
          <ul>
            {data.items.map((item, index) => (
              <li key={index}>
                <strong>{item.text}</strong>
                {item.text2}
              </li>
            ))}
          </ul>
          <h3>
            <strong>{data.text3}</strong>
          </h3>
          <p>{data.description4}</p>
          <ul>
            {data.items2.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <h3>
            <strong>{data.text4}</strong>
          </h3>
          {data.items3.map((item, index) => (
            <p key={index}>{item.description}</p>
          ))}
          <h3>
            <strong>{data.text5}</strong>
          </h3>
          <p>{data.description5}</p>
          <ul>
            {data.items4.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <h4>
            <strong>{data.text6}</strong>
          </h4>
          <p>{data.description6}</p>
          <h4>
            <strong>{data.text7}</strong>
          </h4>
          <p>{data.description7}</p>
          <h4>
            <strong>{data.text8}</strong>
          </h4>
          <p>{data.description8}</p>
          <ul>
            {data.items5.map((item, index) => (
              <li key={index}>{item.text}</li>
            ))}
          </ul>
          <h4>
            <strong>{data.text9}</strong>
          </h4>
          <p>{data.description9}</p>
          <h4>
            <strong>{data.text10}</strong>
          </h4>
          <p>{data.description10}</p>
          <h4>
            <strong>{data.text11}</strong>
          </h4>
          <p>{data.description11}</p>
          <p>
            <strong>{data.text12}</strong>
            <br />
            {data.description12}
            <br />
            {data.description13}
            <br />
            {data.description14}
            <AppLink
              href={data.link2}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.label2}
            </AppLink>
          </p>
          <h4>
            <strong>{data.text13}</strong>
          </h4>
          <p>{data.description15}</p>
        </div>
      </div>
    </section>
  );
}
