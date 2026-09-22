import Label from "./Label";
import { EXPERIENCE, SECTION_LABELS, type ExperienceItem } from "./data";

function ExperienceRow({ item, isFirst }: { item: ExperienceItem; isFirst: boolean }) {
  const hasBody = item.description.length > 0 || item.skills.length > 0;

  return (
    <div
      className={
        isFirst
          ? "border-t border-b border-hairline py-5 dark:border-hairline-dark"
          : "border-b border-hairline py-5 dark:border-hairline-dark"
      }
    >
      <div className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 ${hasBody ? "mb-3" : ""}`}>
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <h3 className="text-[15px] font-normal tracking-[-0.01em] text-ink dark:text-ink-dark">{item.role}</h3>
          <span className="text-[13px] font-light text-muted dark:text-muted-dark">— {item.company}</span>
        </div>
        <span className="shrink-0 font-mono text-[11px] font-light text-muted dark:text-muted-dark">
          {item.startDate} –{" "}
          <span className={item.endDate === "Present" ? "text-online dark:text-accent" : undefined}>{item.endDate}</span>
          {" · "}
          {item.duration}
          {item.employmentType !== "Full-time" ? ` · ${item.employmentType}` : ""}
        </span>
      </div>

      {item.description.length > 0 && (
        <ul className={`flex max-w-[540px] flex-col gap-2 ${item.skills.length > 0 ? "mb-3" : ""}`}>
          {item.description.map((line) => (
            <li key={line} className="flex gap-2.5 text-[13px] font-light leading-[1.75] text-muted dark:text-muted-dark">
              <span aria-hidden="true" className="mt-[2px] shrink-0 text-hairline dark:text-hairline-dark">
                —
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}

      {item.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {item.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-hairline bg-surface px-2 py-0.5 font-mono text-[10px] font-light text-muted dark:border-hairline-dark dark:bg-hairline-dark dark:text-muted-dark"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-20">
      <Label>{SECTION_LABELS.experience}</Label>
      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <ExperienceRow key={`${item.company}-${item.role}`} item={item} isFirst={i === 0} />
        ))}
      </div>
    </section>
  );
}
