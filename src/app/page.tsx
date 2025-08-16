import { HomePage } from "@/components/home/page";
import { HomeNavbar } from "@/components/Navbar";
import { TitleText } from "@/components/TextHover";
import { SkillsPage } from "@/components/skills/page";
import { ProjectsPage } from "@/components/projects/page";
import { ExperiencePage } from "@/components/Experience/page";
import { Contact } from "@/components/contact/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeNavbar />

      <article id="about" aria-labelledby="about-heading">
        <TitleText text="About Me" />
        <HomePage />
      </article>

      <section id="skills" aria-labelledby="skills-heading">
        <SkillsPage />
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <TitleText text="Projects" />
        <ProjectsPage />
      </section>

      <section id="experience" aria-labelledby="experience-heading">
        <TitleText text="Experience" />
        <ExperiencePage />
      </section>

      <section id="contact" aria-labelledby="contact-heading">
        <TitleText text="Contact"/>
        <Contact/>
      </section>

      <Footer/>
    </main>
  );
}
