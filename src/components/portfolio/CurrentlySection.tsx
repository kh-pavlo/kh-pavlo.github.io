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
                ? "grid grid-cols-[80px_1fr] items-baseline gap-4 border-t border-b border-hairline py-3.5 dark:border-hairline-dark"
                : "grid grid-cols-[80px_1fr] items-baseline gap-4 border-b border-hairline py-3.5 dark:border-hairline-dark"
            }
          >
            <span className="text-[11px] font-light text-muted dark:text-muted-dark">{item.label}</span>
            <span className="text-[13px] font-light leading-[1.5] text-body dark:text-ink-dark">
              {item.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <a
          href={`mailto:${SITE_INFO.email}`}
          className="text-[13px] font-light text-link transition-opacity hover:opacity-70 dark:text-accent"
        >
          {SITE_INFO.email} →
        </a>
      </div>
    </section>
  );
}
