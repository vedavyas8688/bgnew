import { Carousel } from '@/components/ui';

export default function ContentSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="title-center our-benefit">
          <div className="badge">{data.text}</div>
          <h2 className="h2">
            <span className="secondary-700">{data.text2}</span>
            {data.heading}
            <span className="secondary-700">{data.text3}</span>
            {data.heading2}
          </h2>
        </div>
        <Carousel>
          {data.items.map((item, index) => (
            <div className="slider-item w-slide" key={index}>
              <div className="item">
                <img alt={item.imageAlt} src={item.image} />
              </div>
              <h5 className="font-weight-6 margin-bottom-2">{item.heading}</h5>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
