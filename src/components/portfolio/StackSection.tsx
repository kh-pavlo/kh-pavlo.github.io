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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(116px,1fr))] gap-px overflow-hidden rounded-[10px] border border-[#e5e5ea] bg-[#e5e5ea] dark:border-[#1e1e1e] dark:bg-[#1e1e1e]">
        {filteredStack.map((item) => (
          <div
            key={item.label}
            className="bg-white px-[15px] py-[13px] font-mono text-[13px] font-light text-[#3a3a3c] transition-colors hover:bg-[#f5f5f7] dark:bg-[#111111] dark:text-[#f0ede6] dark:hover:bg-[#1e1e1e]"
          >
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
