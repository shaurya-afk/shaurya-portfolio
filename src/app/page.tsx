import { HomePage } from "@/components/home/page";
import { HomeNavbar } from "@/components/Navbar";
import { TitleText } from "@/components/TextHover";
import { SkillsPage } from "@/components/skills/page";
import { ProjectsPage } from "@/components/projects/page";
import { Contact } from "@/components/contact/page";

export default function Home() {
  return (
    <>
      <HomeNavbar />

      <TitleText text="About Me" />
      <HomePage />

      <SkillsPage />

      <TitleText text="Projects" />
      <ProjectsPage />

      <TitleText text="Contact"/>
      <Contact/>
    </>
  );
}
