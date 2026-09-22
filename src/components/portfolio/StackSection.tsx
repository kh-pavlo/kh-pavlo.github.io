import { useState } from "react";
import Label from "./Label";
import Pill from "./Pill";
import { CATEGORY_LABELS, SECTION_LABELS, STACK, STACK_FILTER_ALL_LABEL } from "./data";

export default function StackSection() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = Array.from(new Set(STACK.map((s) => s.category)));
  const filteredStack = activeFilter ? STACK.filter((s) => s.category === activeFilter) : STACK;

  return (
    <section id="stack" className="mb-20">
      <Label>{SECTION_LABELS.stack}</Label>
      <div className="mb-4 flex flex-wrap gap-1.5">
        <Pill active={activeFilter === null} onClick={() => setActiveFilter(null)}>
          {STACK_FILTER_ALL_LABEL}
        </Pill>
        {categories.map((cat) => (
          <Pill
            key={cat}
            active={activeFilter === cat}
            onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
          >
            {CATEGORY_LABELS[cat]}
          </Pill>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(116px,1fr))] gap-px overflow-hidden rounded-[10px] border border-hairline bg-hairline dark:border-hairline-dark dark:bg-hairline-dark">
        {filteredStack.map((item) => (
          <div
            key={item.label}
            className="bg-canvas px-[15px] py-[13px] font-mono text-[13px] font-light text-body transition-colors hover:bg-surface dark:bg-surface-dark dark:text-ink-dark dark:hover:bg-hairline-dark"
          >
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
