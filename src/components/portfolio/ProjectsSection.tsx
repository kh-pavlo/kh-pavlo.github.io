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
      className="group relative block overflow-hidden rounded-xl border border-[#e5e5ea] bg-white px-[22px] py-5 transition-shadow hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)] dark:border-[#1e1e1e] dark:bg-[#111111] dark:hover:shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 right-3 select-none font-display text-[100px] leading-none text-[#f5f5f7] transition-colors duration-300 group-hover:text-[#eeeef0] sm:text-[128px] dark:text-[#161616] dark:group-hover:text-[#1c1c1e]"
      >
        {project.number}
      </span>

      <div className="relative">
        <div className="mb-[7px] flex items-center justify-between">
          <h3 className="text-[15px] font-normal tracking-[-0.01em] text-[#1d1d1f] dark:text-[#f0ede6]">
            {project.name}
          </h3>
          <span
            className={
              project.status === "Live"
                ? "text-[11px] font-normal text-[#15803d] dark:text-[#b8ff3c]"
                : "text-[11px] font-normal text-[#6e6e73] dark:text-[#888888]"
            }
          >
            {project.status}
          </span>
        </div>
        <p className="mb-3.5 max-w-[520px] text-xs font-light leading-[1.65] text-[#6e6e73] dark:text-[#888888]">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e5e5ea] bg-[#f5f5f7] px-2 py-0.5 font-mono text-[10px] font-light text-[#6e6e73] dark:border-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#888888]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="ml-auto shrink-0 text-[11px] font-light text-[#6e6e73] dark:text-[#888888]">{project.year}</span>
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
