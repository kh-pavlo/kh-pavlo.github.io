import Label from "./Label";
import { CURRENTLY, SECTION_LABELS, SITE_INFO } from "./data";

export default function CurrentlySection() {
  return (
    <section className="pb-13">
      <Label>{SECTION_LABELS.currently}</Label>
      <div className="flex flex-col">
        {CURRENTLY.map((item, i) => (
          <div
            key={item.label}
            className={
              i === 0
                ? "grid grid-cols-[80px_1fr] items-baseline gap-4 border-t border-b border-[#e5e5ea] py-3.5 dark:border-[#1e1e1e]"
                : "grid grid-cols-[80px_1fr] items-baseline gap-4 border-b border-[#e5e5ea] py-3.5 dark:border-[#1e1e1e]"
            }
          >
            <span className="text-[11px] font-light text-[#6e6e73] dark:text-[#888888]">{item.label}</span>
            <span className="text-[13px] font-light leading-[1.5] text-[#3a3a3c] dark:text-[#f0ede6]">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href={`mailto:${SITE_INFO.email}`}
          className="text-[13px] font-light text-[#0071e3] transition-opacity hover:opacity-70 dark:text-[#b8ff3c]"
        >
          {SITE_INFO.email} →
        </a>
      </div>
    </section>
  );
}
