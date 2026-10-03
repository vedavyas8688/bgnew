export default function PageHeader({
  title,
  description,
  action,
  eyebrow,
}: {
  title: string;
  description: string;
  action?: React.ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className="page-header mb-7 flex items-center justify-between gap-6">
      <div>
        {eyebrow && (
          <div className="eyebrow mb-2.5 text-xs font-[650] tracking-[0.12em] text-admin-brand">
            {eyebrow}
          </div>
        )}
        <h1 className="text-[clamp(1.65rem,2.1vw,2rem)] leading-tight font-[650] tracking-[-0.05em] [overflow-wrap:anywhere]">
          {title}
        </h1>
        <p className="mt-2 text-[0.9375rem] text-admin-muted">{description}</p>
      </div>
      {action && <div className="page-actions">{action}</div>}
    </header>
  );
}
