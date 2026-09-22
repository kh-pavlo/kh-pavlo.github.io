import Sidebar from "./Sidebar";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import StackSection from "./StackSection";
import ProjectsSection from "./ProjectsSection";
import CurrentlySection from "./CurrentlySection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-canvas font-sans text-ink dark:bg-canvas-dark dark:text-ink-dark">
      <Sidebar />
      <main className="max-w-[800px] px-5 py-10 sm:px-8 lg:ml-[340px] lg:px-16 lg:py-13">
        <AboutSection />
        <ExperienceSection />
        <StackSection />
        <ProjectsSection />
        <CurrentlySection />
      </main>
    </div>
  );
}
