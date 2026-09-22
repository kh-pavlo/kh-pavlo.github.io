interface PillProps {
  children: string;
  active: boolean;
  onClick: () => void;
}

export default function Pill({ children, active, onClick }: PillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "rounded-full border border-ink bg-ink px-3 py-1 text-[11px] font-light text-white transition-all dark:border-accent dark:bg-accent dark:text-canvas-dark"
          : "rounded-full border border-hairline bg-transparent px-3 py-1 text-[11px] font-light text-muted transition-all hover:border-ink hover:text-ink dark:border-hairline-dark dark:text-muted-dark dark:hover:border-ink-dark dark:hover:text-ink-dark"
      }
    >
      {children}
    </button>
  );
}
