import { Admin, CareerApplication, Lead } from "./models";
export async function enrichActivities(activities: any[]) {
  const byType = (kind: string) =>
    activities.filter((x) => x.entityType === kind).map((x) => x.entityId);
  const [leads, careers, team] = await Promise.all([
    Lead.find({ _id: { $in: byType("lead") } })
      .select("name")
      .lean(),
    CareerApplication.find({ _id: { $in: byType("career") } })
      .select("name")
      .lean(),
    Admin.find({ _id: { $in: byType("team") } })
      .select("name")
      .lean(),
  ]);
  const names = new Map(
    [...leads, ...careers, ...team].map((x: any) => [String(x._id), x.name]),
  );
  return activities.map((x) => ({
    ...x,
    entityName: x.entityName || names.get(String(x.entityId)),
    deleted: !names.has(String(x.entityId)),
  }));
}
