import { NAV_LINKS, SITE_INFO, SOCIALS } from "./data";

export default function Sidebar() {
  return (
    <aside className="relative flex w-full flex-col gap-8 border-b border-[#e5e5ea] bg-[#fbfbfd] px-6 py-8 dark:border-[#1e1e1e] dark:bg-[#111111] sm:px-10 lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[340px] lg:justify-between lg:gap-0 lg:border-b-0 lg:border-r lg:py-13">
      <div>
        <h1 className="mb-0.5 font-display text-xl font-normal tracking-tight text-[#1d1d1f] dark:text-[#f0ede6]">
          {SITE_INFO.name}
        </h1>
        <p className="mb-6 text-xs font-light text-[#6e6e73] dark:text-[#888888] lg:mb-10">{SITE_INFO.title}</p>

        <nav className="flex flex-wrap gap-x-5 gap-y-1 lg:flex-col lg:gap-px">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="py-1.5 text-[13px] font-light text-[#6e6e73] transition-colors hover:text-[#1d1d1f] dark:text-[#888888] dark:hover:text-[#f0ede6]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <div className="mb-3 flex items-center gap-1.5 lg:mb-6">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#34c759] dark:bg-[#b8ff3c]" />
          <span className="text-[11px] font-light text-[#6e6e73] dark:text-[#888888]">{SITE_INFO.availability}</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-light text-[#6e6e73] transition-colors hover:text-[#1d1d1f] dark:text-[#888888] dark:hover:text-[#f0ede6]"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
