import { Icon, Carousel } from "@/components/ui";

export default function TestimonialsSection({ data }) {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="three-row-title-wrap">
          <div className="three-row-title-top">
            <div className="badge">{data.text}</div>
            <h2 className="h3">
              {data.heading}
              <span className="secondary-700">{data.text2}</span>
            </h2>
          </div>
          <p>{data.description}</p>
        </div>
        <Carousel autoPlay interval={4500} variant="testimonials">
          {data.items.map((item, index) => (
            <div className="slider-item w-slide" key={index}>
              <div className="testimonial-card">
                <Icon name="Quote" />
                <p className="text-base">{item.description}</p>
                <div className="testimoni-profile-wrap">
                  <img
                    alt={item.imageAlt}
                    className="testimoni-profile-image"
                    loading="lazy"
                    src={item.image}
                  />
                  <div className="testimoni-profile-content">
                    <div className="h6">{item.heading}</div>
                    <p className="text-md secondary-700">{item.description2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
