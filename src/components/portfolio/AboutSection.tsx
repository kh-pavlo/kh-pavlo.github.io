import Label from "./Label";
import { ABOUT_CONTENT, SECTION_LABELS } from "./data";

export default function AboutSection() {
  return (
    <section id="about" className="mb-20">
      <Label>{SECTION_LABELS.about}</Label>
      <p className="mb-3.5 text-xl font-light tracking-[-0.015em] text-ink dark:text-ink-dark">
        {ABOUT_CONTENT.heading}
      </p>
      <p className="text-sm font-light leading-[1.75] text-muted dark:text-muted-dark">{ABOUT_CONTENT.body}</p>
    </section>
  );
}
