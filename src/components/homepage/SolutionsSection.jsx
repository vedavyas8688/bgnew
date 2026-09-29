
export default function SolutionsSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="three-row-title-wrap h-blog">
          <div className="three-row-title-top">
            <div className="badge">{data.text}</div>
            <h2 className="h3">{data.heading}</h2>
          </div>
          <p className="text-base">{data.description}</p>
        </div>
        <div className="h-choose-us-our-avaliable-products" role="list">
          <div className="our-avaliable-products">
            <div className="avaliable-products-image">
              <img alt={data.imageAlt} className="avaliableproductsimage" loading="lazy" src={data.image} />
            </div>
            <div className="our-features-details">
              <div className="h4">{data.heading2}</div>
              <p className="text-elevator-sm">{data.description2}</p>
            </div>
          </div>
          {data.items.map((item, index) => (
            <div className="our-avaliable-products background-blue" key={index}>
              <div className="avaliable-products-image">
                <img alt={item.imageAlt} className="avaliableproductsimage" loading="lazy" src={item.image} />
              </div>
              <div className="our-features-details">
                <div className="h4 color-blue">{item.heading}</div>
                <p className="text-elevator-sm color-blue">{item.description}</p>
              </div>
            </div>
          ))}
          <div className="our-avaliable-products">
            <div className="avaliable-products-image">
              <img alt={data.imageAlt2} className="avaliableproductsimage" loading="lazy" src={data.image2} />
            </div>
            <div className="our-features-details">
              <div className="h4">{data.heading3}</div>
              {data.items2.map((item, index) => (
                <p className="text-elevator-sm" key={index}>{item.description}</p>
              ))}
            </div>
          </div>
          <div className="our-avaliable-products">
            <div className="avaliable-products-image">
              <img alt={data.imageAlt3} className="avaliableproductsimage" loading="lazy" src={data.image3} />
            </div>
            <div className="our-features-details">
              <div className="h4">{data.heading4}</div>
              <p className="text-elevator-sm">{data.description3}</p>
            </div>
          </div>
          <div className="our-avaliable-products background-blue">
            <div className="avaliable-products-image">
              <img alt={data.imageAlt4} className="avaliableproductsimage" loading="lazy" src={data.image4} />
            </div>
            <div className="our-features-details">
              <div className="h4 color-blue">{data.heading5}</div>
              {data.items3.map((item, index) => (
                <p className="text-elevator-sm color-blue" key={index}>{item.description}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
