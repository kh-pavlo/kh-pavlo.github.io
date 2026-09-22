import { NAV_LINKS, SITE_INFO, SOCIALS } from "./data";

export default function Sidebar() {
  return (
    <aside className="relative flex w-full flex-col gap-8 border-b border-hairline bg-surface-alt px-6 py-8 dark:border-hairline-dark dark:bg-surface-dark sm:px-10 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[340px] lg:justify-between lg:gap-0 lg:border-b-0 lg:border-r lg:py-13">
      <div>
        <h1 className="mb-0.5 font-display text-xl font-normal tracking-tight text-ink dark:text-ink-dark">
          {SITE_INFO.name}
        </h1>
        <p className="mb-6 text-xs font-light text-muted dark:text-muted-dark lg:mb-10">{SITE_INFO.title}</p>

        <nav className="flex flex-wrap gap-x-5 gap-y-1 lg:flex-col lg:gap-px">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="py-1.5 text-[13px] font-light text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-1.5 lg:mb-6">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-online dark:bg-accent" />
          <span className="text-[11px] font-light text-muted dark:text-muted-dark">{SITE_INFO.availability}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-light text-muted transition-colors hover:text-ink dark:text-muted-dark dark:hover:text-ink-dark"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
