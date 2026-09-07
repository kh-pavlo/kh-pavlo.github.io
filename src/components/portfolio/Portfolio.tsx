import Sidebar from "./Sidebar";
import AboutSection from "./AboutSection";
import StackSection from "./StackSection";
import ProjectsSection from "./ProjectsSection";
import CurrentlySection from "./CurrentlySection";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1d1d1f] dark:bg-[#0a0a0a] dark:text-[#f0ede6]">
      <Sidebar />
      <main className="max-w-[800px] px-5 py-10 sm:px-8 lg:ml-[340px] lg:px-16 lg:py-13">
        <AboutSection />
        <StackSection />
        <ProjectsSection />
        <CurrentlySection />
      </main>
    </div>
  );
}
