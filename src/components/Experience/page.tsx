"use client";

import { FiExternalLink, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";

export function ExperiencePage() {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-center">
                    <div className="group relative max-w-2xl w-full">
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                                                 <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] shadow-2xl">
                             {/* Live Demo Link */}
                             <a
                                 href={experience.demo}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="absolute top-6 right-6 text-white/90 hover:text-white transition-colors duration-200"
                                 title="Live Demo"
                             >
                                 <FiExternalLink className="w-5 h-5" />
                             </a>

                             {/* Title */}
                             <div className="text-left mb-8">
                                 <h3 className="text-3xl font-bold text-white mb-2">
                                     {experience.title}
                                 </h3>
                                 <p className="text-sm text-white/60 mb-4">
                                     {experience.duration}
                                 </p>
                                 <p className="text-base text-white/75 leading-relaxed">
                                     {experience.description}
                                 </p>
                             </div>

                             {/* Technologies */}
                             <div className="absolute bottom-6 left-6">
                                 <p className="text-white/60 text-sm">
                                     Tech Stack: {experience.technologies.join(", ")}
                                 </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const experience = {
    title: "Freelance - Backend Developer",
    duration: "July 2025 – Aug 2025",
    description: "Developed the backend for a UAE-based car wash management platform with booking, payments, and role-based access. Built REST APIs using Next.js, PostgreSQL, and Prisma. Collaborated with a frontend developer to deliver a seamless client solution.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    demo: "https://vwashcar1.vercel.app/"
};
