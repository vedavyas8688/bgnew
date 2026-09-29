
export default function MapSection({ data }) {
  return (
    <section className="section">
      <div className="container">
        <div className="two-row-title-wrap">
          <div className="badge">{data.text}</div>
          <h1 className="h3">{data.heading}</h1>
        </div>
        <div className="map-embed-wrap">
          <div className="map-embed">
            <iframe allowFullScreen className="image" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={data.source} style={{"border": "0"}} width="100%" title="BG Elevators location" />
          </div>
        </div>
      </div>
    </section>
  );
}
