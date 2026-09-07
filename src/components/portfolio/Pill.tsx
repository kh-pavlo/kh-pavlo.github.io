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
          ? "rounded-full border border-[#1d1d1f] bg-[#1d1d1f] px-3 py-1 text-[11px] font-light text-white transition-all dark:border-[#b8ff3c] dark:bg-[#b8ff3c] dark:text-[#0a0a0a]"
          : "rounded-full border border-[#e5e5ea] bg-transparent px-3 py-1 text-[11px] font-light text-[#6e6e73] transition-all hover:border-[#1d1d1f] hover:text-[#1d1d1f] dark:border-[#1e1e1e] dark:text-[#888888] dark:hover:border-[#f0ede6] dark:hover:text-[#f0ede6]"
      }
    >
      {children}
    </button>
  );
}
