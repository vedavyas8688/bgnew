import { StatisticCard } from "@/components/ui";

export default function StatisticsSection({ data }) {
  return (
    <section className="section statistic">
      <div className="container">
        <div className="stat-cards-wrap">
          <StatisticCard data={data.statistic} />
          <StatisticCard data={data.statistic2} />
          <StatisticCard data={data.statistic3} />
        </div>
      </div>
    </section>
  );
}
