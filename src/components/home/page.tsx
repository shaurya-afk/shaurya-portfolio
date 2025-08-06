"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi I'm Shaurya, a Full-Stack Developer transforming ideas into scalable digital experiences. I build with Java, Spring Boot, PostgreSQL, React, and Next.js, leveraging Redis and Kafka for high-performance applications.`;

export function HomePage() {
    return (
        <section className="flex flex-col items-center justify-start px-12 py-12">
            <div className="max-w-4xl mx-auto text-center">
                <h1 id="about-heading" className="sr-only">
                    About Shaurya Sharma - Full Stack Developer
                </h1>
                <div className="text-base sm:text-lg leading-relaxed">
                    <TextGenerateEffect words={words} />
                </div>
                
                {/* Additional SEO-friendly content */}
                <div className="mt-8 text-sm text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    <p>
                        Specializing in modern web technologies, mobile app development, and scalable backend solutions. 
                        Currently pursuing Computer Science Engineering at KIIT University with a focus on software engineering 
                        and innovative digital solutions.
                    </p>
                </div>
                
                {/* Key highlights for SEO */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                        <h3 className="font-semibold mb-2">Backend Development</h3>
                        <p>Java, Spring Boot, PostgreSQL, Redis, Kafka</p>
                    </div>
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                        <h3 className="font-semibold mb-2">Frontend Development</h3>
                        <p>React, Next.js, TypeScript, Tailwind CSS</p>
                    </div>
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
                        <h3 className="font-semibold mb-2">Mobile Development</h3>
                        <p>Android, Kotlin, Java, Mobile UI/UX</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
