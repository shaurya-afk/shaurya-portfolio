import { SiAndroid, SiApachekafka, SiKotlin, SiMysql, SiNextdotjs, SiPostgresql, SiReact, SiRedis, SiSpring, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SkillCard } from "../SkillCard";

export function SkillsPage() {
    const skills = [
        { name: "Java", icon: <DiJava />, category: "Backend Development" },
        { name: "Kotlin", icon: <SiKotlin/>, category: "Mobile Development" },
        { name: "Spring Boot", icon: <SiSpring />, category: "Backend Development" },
        { name: "Android", icon: <SiAndroid />, category: "Mobile Development" },
        { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
        { name: "MySQL", icon: <SiMysql />, category: "Database" },
        { name: "Kafka", icon: <SiApachekafka />, category: "Message Queue" },
        { name: "Redis", icon: <SiRedis />, category: "Cache & Database" },
        { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend Development" },
    ];

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 id="skills-heading" className="sr-only">
                    Technical Skills and Technologies
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center pt-10">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={skill.name}
                            skillName={skill.name} 
                            icon={skill.icon}
                            category={skill.category}
                        />
                    ))}
                </div>
                
                {/* Additional SEO content */}
                <div className="mt-12 text-center">
                    <h3 className="text-lg font-semibold mb-4">Technical Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div>
                            <h4 className="font-medium mb-2">Backend Development</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Java, Spring Boot, Microservices, REST APIs, Server-side development
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Frontend Development</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                React, Next.js, TypeScript, Modern JavaScript, Responsive design
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Mobile Development</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                Android, Kotlin, Java, Mobile UI/UX, Native app development
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Database & Infrastructure</h4>
                            <p className="text-neutral-600 dark:text-neutral-400">
                                PostgreSQL, MySQL, Redis, Kafka, Cloud deployment, DevOps
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}       