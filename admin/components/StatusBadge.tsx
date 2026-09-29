export function statusTone(status: string) {
  return (
    (
      {
        New: "blue",
        Contacted: "blue",
        "In Progress": "amber",
        Converted: "green",
        Closed: "gray",
        Reviewing: "amber",
        Shortlisted: "blue",
        Selected: "green",
        Rejected: "red",
        Active: "green",
        Inactive: "gray",
      } as Record<string, string>
    )[status] || "gray"
  );
}
export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`status-badge tone-${statusTone(status)}`}>
      <i aria-hidden="true" />
      {status}
    </span>
  );
}
