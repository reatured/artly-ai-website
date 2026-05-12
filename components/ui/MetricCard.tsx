interface MetricCardProps {
  label: string;
  value: string;
  description: string;
}

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-on-surface-variant"></span>
        <span className="font-label-caps text-[10px] text-on-surface-variant uppercase">{label}</span>
      </div>
      <div className="font-headline-md text-headline-md text-primary-fixed">{value}</div>
      <div className="font-body-md text-[12px] text-on-surface-variant">{description}</div>
    </div>
  );
}
