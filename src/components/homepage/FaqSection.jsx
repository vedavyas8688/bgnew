import { Icon } from "@/components/ui";

export default function FaqSection({ data }) {
  return (
    <section className="section home-faq-section">
      <div className="container home-faq-layout">
        <div className="home-faq-heading">
          <div className="badge">{data.badge}</div>
          <h2 className="h3">
            {data.heading} <span className="secondary-700">{data.accent}</span>
          </h2>
          <p className="text-base text-color-900">{data.description}</p>
        </div>
        <div className="home-faq-list">
          {data.items.map((item, index) => (
            <details
              className="home-faq-item"
              key={item.question}
              name="page-faq"
              open={index === 0}
            >
              <summary>
                <span>{item.question}</span>
                <Icon name="ChevronDown" className="home-faq-icon" />
              </summary>
              <p className="text-base text-color-900">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
