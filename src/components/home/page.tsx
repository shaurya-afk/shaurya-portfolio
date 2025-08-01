"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Hi I'm Shaurya, a Backend engineer specializing in Java, Spring Boot, and PostgreSQL. I build scalable systems with Redis, Kafka, and event-driven architectures, focusing on clean APIs and optimized databases.`;

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
