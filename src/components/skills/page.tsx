import { SiNextdotjs, SiPostgresql, SiReact, SiSpring, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SkillCard } from "../SkillCard";

export function SkillsPage() {
    return (
        <section id="skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center pt-10">
                <SkillCard skillName="Java" icon={<DiJava />} />
                <SkillCard skillName="Spring Boot" icon={<SiSpring />} />
                <SkillCard skillName="PostgreSQL" icon={<SiPostgresql />} />
                <SkillCard skillName="React.js" icon={<SiReact />} />
                <SkillCard skillName="Next.js" icon={<SiNextdotjs />} />
                <SkillCard skillName="Tailwind" icon={<SiTailwindcss />} />
            </div>
        </section>
    );
}       