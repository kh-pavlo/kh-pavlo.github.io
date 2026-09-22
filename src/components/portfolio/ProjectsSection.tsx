import Label from "./Label";
import { PROJECTS, SECTION_LABELS, type Project } from "./data";

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.href ? "a" : "div";
  const wrapperProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block overflow-hidden rounded-xl border border-hairline bg-canvas px-[22px] py-5 transition-shadow hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)] dark:border-hairline-dark dark:bg-surface-dark dark:hover:shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-3 select-none font-display text-[100px] leading-none text-watermark transition-colors duration-300 group-hover:text-watermark-hover sm:text-[128px] dark:text-watermark-dark dark:group-hover:text-watermark-dark-hover"
      >
        {project.number}
      </span>

      <div className="relative">
        <div className="mb-[7px] flex items-center justify-between">
          <h3 className="text-[15px] font-normal tracking-[-0.01em] text-ink dark:text-ink-dark">
            {project.name}
          </h3>
          <span
            className={
              project.status === "Live"
                ? "text-[11px] font-normal text-success dark:text-accent"
                : "text-[11px] font-normal text-muted dark:text-muted-dark"
            }
          >
            {project.status}
          </span>
        </div>
        <p className="mb-3.5 max-w-[520px] text-xs font-light leading-[1.65] text-muted dark:text-muted-dark">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hairline bg-surface px-2 py-0.5 font-mono text-[10px] font-light text-muted dark:border-hairline-dark dark:bg-hairline-dark dark:text-muted-dark"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="ml-auto shrink-0 text-[11px] font-light text-muted dark:text-muted-dark">{project.year}</span>
        </div>
      </div>
    </Wrapper>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-20">
      <Label>{SECTION_LABELS.projects}</Label>
      <div className="flex flex-col gap-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
