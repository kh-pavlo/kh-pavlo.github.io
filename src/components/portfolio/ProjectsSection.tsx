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
      className="group grid grid-cols-[148px_1fr] overflow-hidden rounded-xl border border-[#e5e5ea] bg-white transition-shadow hover:shadow-[0_2px_16px_rgba(0,0,0,0.07)] dark:border-[#1e1e1e] dark:bg-[#111111] dark:hover:shadow-[0_2px_16px_rgba(0,0,0,0.35)]"
    >
      <div className="h-full min-h-[130px] w-[148px] shrink-0 overflow-hidden bg-[#f5f5f7] dark:bg-[#1e1e1e]">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="block h-full w-full object-cover transition-transform duration-[350ms] ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-between px-[22px] py-5">
        <div>
          <div className="mb-[7px] flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[10px] font-light text-[#6e6e73] dark:text-[#888888]">
                {project.number}
              </span>
              <h3 className="text-[15px] font-normal tracking-[-0.01em] text-[#1d1d1f] dark:text-[#f0ede6]">
                {project.name}
              </h3>
            </div>
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
          <p className="mb-3.5 text-xs font-light leading-[1.65] text-[#6e6e73] dark:text-[#888888]">
            {project.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e5e5ea] bg-[#f5f5f7] px-2 py-0.5 font-mono text-[10px] font-light text-[#6e6e73] dark:border-[#1e1e1e] dark:bg-[#1e1e1e] dark:text-[#888888]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-[11px] font-light text-[#6e6e73] dark:text-[#888888]">{project.year}</span>
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
