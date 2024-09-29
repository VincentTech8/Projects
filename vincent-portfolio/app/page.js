import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#000000]">
      <NavBar />
      <div className="container mt-14 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
