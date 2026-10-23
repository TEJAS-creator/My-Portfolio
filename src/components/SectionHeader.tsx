interface SectionHeaderProps {
  label: string;
  id?: string;
}

export function SectionHeader({ label, id }: SectionHeaderProps) {
  return (
    <div id={id} className="w-full flex flex-col relative select-none">
      {/* Hatched divider with top and bottom borders */}
      <div
        className="h-[20px] w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] -mx-4 sm:-mx-6 pattern-hatch border-y border-[var(--border)]"
        aria-hidden="true"
      />
      {/* Section label strip */}
      <div className="h-[30px] w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] -mx-4 sm:-mx-6 bg-[var(--panel)] border-b border-[var(--border)] flex items-center justify-start px-4 sm:px-6">
        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--muted)] font-medium">
          {label}
        </span>
      </div>
    </div>
  );
}
