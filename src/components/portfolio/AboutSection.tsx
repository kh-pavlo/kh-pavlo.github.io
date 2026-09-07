import Label from "./Label";
import { ABOUT_CONTENT, SECTION_LABELS } from "./data";

export default function AboutSection() {
  return (
    <section id="about" className="mb-20">
      <Label>{SECTION_LABELS.about}</Label>
      <p className="mb-3.5 max-w-[500px] text-xl font-light tracking-[-0.015em] text-[#1d1d1f] dark:text-[#f0ede6]">
        {ABOUT_CONTENT.heading}
      </p>
      <p className="max-w-[460px] text-sm font-light leading-[1.75] text-[#6e6e73] dark:text-[#888888]">
        {ABOUT_CONTENT.body}
      </p>
    </section>
  );
}
