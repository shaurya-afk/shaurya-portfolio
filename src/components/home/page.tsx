"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi I'm Shaurya, a Full-Stack Developer transforming ideas into scalable digital experiences. I build with Java, Spring Boot, PostgreSQL, React, and Next.js, leveraging Redis and Kafka for high-performance applications.`;

export function HomePage() {
    return (
        <section id="about">
            <div className="flex flex-col items-center justify-start px-12 py-12">
                <div className="text-base sm:text-lg">
                    <TextGenerateEffect words={words} />
                </div>
            </div>
        </section>
    );
}
