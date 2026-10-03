import { AppLink } from "@/components/ui";

export default function AboutSection({ data }) {
  return (
    <section className="section home-about-content">
      <div className="container">
        <div className="w-layout-grid h-about-content-grid">
          <div className="h-about-content-left">
            <div className="h-about-content-image">
              <img
                alt={data.imageAlt}
                className="image"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, 579px"
                src={data.image}
                width="579"
              />
            </div>
          </div>
          <div
            className="h-about-content-right"
            id="w-node-f07c7ffa-595c-5d23-d001-9a22499bdd99-c1e57074"
          >
            <div className="badge">{data.text}</div>
            <div className="spacer _1-rem" />
            <h2 className="h3">
              {data.heading}
              <span className="secondary-700">{data.text2}</span>
              {data.heading2}
            </h2>
            <div className="spacer _1-5-rem" />
            <p className="text-base">{data.description}</p>
            <div className="h-about-items-wrap">
              <div className="h-about-item">
                <img
                  alt={data.imageAlt2}
                  height="24"
                  loading="lazy"
                  src={data.image2}
                  width="24.5"
                />
                <div className="text-lg medium text-color-800">
                  {data.text3}
                </div>
              </div>
              <div className="h-about-item center">
                <img
                  alt={data.imageAlt3}
                  height="24"
                  loading="lazy"
                  src={data.image3}
                  width="24.5"
                />
                <div className="text-lg medium text-color-800">
                  {data.text4}
                </div>
              </div>
              <div className="h-about-item">
                <img
                  alt={data.imageAlt4}
                  height="24"
                  loading="lazy"
                  src={data.image4}
                  width="24.5"
                />
                <div className="text-lg medium text-color-800">
                  {data.text5}
                </div>
              </div>
            </div>
            <AppLink className="btn-primary w-button" href={data.link}>
              {data.label}
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  );
}
