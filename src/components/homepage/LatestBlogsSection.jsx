import { AppLink, Icon } from '@/components/ui';

export default function LatestBlogsSection({ data }) {
  return (
    <section className="section primary-200">
      <div className="container">
        <div className="three-row-title-wrap h-blog">
          <div className="three-row-title-top">
            <div className="badge">{data.text}</div>
            <h2 className="h3">{data.heading}</h2>
          </div>
          <p className="text-base">{data.description}</p>
        </div>
        <div className="w-dyn-list">
          <div className="h-blog-list w-dyn-items" role="list">
            {data.items.map((item, index) => (
              <div className="h-blog-list-item w-dyn-item" role="listitem" key={index}>
                <AppLink className="blog-card w-inline-block" href={item.link}>
                  <div className="blog-card-image">
                    <img alt={item.imageAlt} className="image" loading="lazy" src={item.image} />
                  </div>
                  <div className="blog-card-center">
                    <div className="blog-card-title-wrap">
                      <div className="text-md secondary-700">{item.text}</div>
                      <div className="h5">{item.heading}</div>
                    </div>
                    <Icon name="CircleArrowOutUpRight" className="blog-card-svg" />
                  </div>
                  <p className="text-lg">{item.description}</p>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
