"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import { initScrollAnimations } from '@/lib/scrollAnimations';

export function AboutPage() {
    useEffect(() => {
        const cleanup = initScrollAnimations();
        return cleanup;
    }, []);
    return (
        <div id="about" className="min-h-screen relative overflow-hidden noise-texture" style={{ backgroundColor: '#F9EFE7' }}>
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9EFE7] via-[#F2E5D8] to-[#F9EFE7] opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-radial from-[#F2E5D8]/40 via-transparent to-transparent"></div>

            <div className="relative z-10 min-h-screen about-page">

                {/* Desktop Portrait - Right Side */}
                <div className="hidden lg:block absolute md:top-30 right-10 w-1/4 h-1/2 z-20 scroll-animate-right">
                    <Image
                        src="/self.jpg"
                        alt="Shaurya Sharma"
                        width={400}
                        height={600}
                        className="w-full h-full object-cover rounded-2xl hover-lift smooth-transition"
                        priority
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-12 lg:py-20 relative lg:pr-[calc(33.333%+2rem)]">
                    {/* Main content */}
                    <div className="max-w-2xl ml-0 sm:ml-8 md:ml-12 lg:ml-20">
                        {/* Mobile/Tablet Header with Image */}
                        <div className="lg:hidden mb-6 sm:mb-8 scroll-animate-left">
                            {/* Mobile/Tablet Square Image - aligned next to text */}
                            <div className="flex items-start gap-4 mb-4">
                                <Image
                                    src="/self.jpg"
                                    alt="Shaurya Sharma"
                                    width={96}
                                    height={96}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full flex-shrink-0 hover-lift smooth-transition"
                                />
                                <div className="flex-1">
                                    <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Hello!</h1>
                                    <h2 className="text-2xl sm:text-2xl font-bold mb-2" style={{ color: '#1a1a1a' }}>I&apos;m Shaurya Sharma</h2>
                                    <p className="text-base sm:text-lg italic" style={{ color: '#3C3C3C' }}>
                                        4th year Computer Science Engineering student at KIIT University, Bhubaneswar, India.
                                    </p>
                                    <p className="text-xs sm:text-sm mt-2 italic smooth-transition" style={{ color: '#3C3C3C' }}>
                                        Currently a Full-Stack Developer Intern at VIAI Beauty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Hello! and name */}
                        <div className="hidden lg:block mb-22 sm:mb-10 md:mb-12 scroll-animate">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#1a1a1a' }}>Hello!</h1>
                            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3" style={{ color: '#1a1a1a' }}>I&apos;m Shaurya Sharma</h2>
                            <p className="text-base sm:text-lg italic" style={{ color: '#3C3C3C' }}>
                                4th year Computer Science Engineering student at KIIT University, Bhubaneswar, India.
                            </p>
                        </div>

                        {/* About paragraphs */}
                        <div className="space-y-12 sm:space-y-5 md:space-y-6 text-sm sm:text-base leading-relaxed stagger-animate" style={{ color: '#3C3C3C' }}>
                            <p className="hover-lift smooth-transition">
                                I build scalable, backend-driven systems and developer-focused platforms that turn complex ideas into reliable, production-ready software. My work spans API design, cloud infrastructure, and full-stack applications, with an emphasis on performance, observability, and maintainable architecture.
                            </p>

                            <p className="hover-lift smooth-transition">
                                I specialize in Python, FastAPI, Java, and cloud-native tooling, designing systems that handle real-world scale through clean architecture, efficient data modeling, and automation-first workflows. My focus lies in backend engineering, distributed systems, and creating seamless interactions between services and users.
                            </p>

                            <p className="hover-lift smooth-transition">
                                As a Computer Science Engineering student, I continuously explore modern infrastructure patterns, event-driven systems, and DevOps practices to build resilient and future-ready solutions. My objective is to engineer systems that are not only functional, but dependable, scalable, and impactful.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
