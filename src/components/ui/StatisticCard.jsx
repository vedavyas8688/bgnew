export default function StatisticCard({ data }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="counter-wrap">
          <div className="counter-text">{data.value}</div>
        </div>
        <div className="h6 primary-600">{data.label}</div>
      </div>
      <p className="text-base primary-300">{data.description}</p>
    </div>
  );
}
