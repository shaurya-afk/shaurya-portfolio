import { SiAndroid, SiApachekafka, SiKotlin, SiMysql, SiNextdotjs, SiPostgresql, SiReact, SiRedis, SiSpring, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SkillCard } from "../SkillCard";

export function SkillsPage() {
    return (
        <section id="skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center pt-10">
                <SkillCard skillName="Java" icon={<DiJava />} />
                <SkillCard skillName="Kotlin" icon={<SiKotlin/>} />
                <SkillCard skillName="Spring Boot" icon={<SiSpring />} />
                <SkillCard skillName="Android" icon={<SiAndroid />} />
                <SkillCard skillName="PostgreSQL" icon={<SiPostgresql />} />
                <SkillCard skillName="MySQL" icon={<SiMysql />} />
                <SkillCard skillName="Kafka" icon={<SiApachekafka />} />
                <SkillCard skillName="Redis" icon={<SiRedis />} />
                <SkillCard skillName="Next.js" icon={<SiNextdotjs />} />
            </div>
        </section>
    );
}       