const journey = [
  {
    marker: "Established 1995",
    title: "A foundation built on trust",
    description:
      "BG Elevators began with a clear commitment to dependable vertical transportation and attentive customer service.",
  },
  {
    marker: "Understanding",
    title: "Listen before we engineer",
    description:
      "Every requirement starts with understanding the building, its users and the performance expected from the elevator.",
  },
  {
    marker: "Engineering",
    title: "Design with purpose",
    description:
      "Safety, reliability, function and aesthetics are brought together in a solution suited to the project.",
  },
  {
    marker: "Long-term care",
    title: "Support beyond handover",
    description:
      "Our relationship continues through responsive service and maintenance support after installation.",
  },
];

export default function JourneySection() {
  return (
    <section className="section about-journey-section">
      <div className="container about-journey-layout journey-panel about-principles">
        <div className="about-journey-intro journey-panel__intro about-principles__intro">
          <div className="badge">About BG Elevators</div>
          <h2 className="h3">
            What defines <span className="secondary-700">our approach</span>
          </h2>
          <p className="text-base">
            From the first conversation to long-term support, our approach keeps
            people, performance and reliability at the centre of every project.
          </p>
        </div>

        <ol className="about-journey-timeline journey-panel__timeline about-principles__grid">
          {journey.map((item) => (
            <li
              className="about-journey-step journey-panel__step about-principles__item"
              key={item.title}
            >
              <div
                className="about-journey-marker journey-panel__marker about-principles__label"
                aria-hidden="true"
              >
                {item.marker}
              </div>
              <div className="about-journey-copy journey-panel__copy about-principles__copy">
                <h3 className="h5">{item.title}</h3>
                <p className="text-base">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
