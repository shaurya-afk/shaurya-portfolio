"use client";

import { useEffect } from 'react';
import { initScrollAnimations } from '@/lib/scrollAnimations';
import {
    SiKotlin,
    SiCplusplus,
    SiSharp,
    SiMysql,
    SiSpring,
    SiPrisma,
    SiNextdotjs,
    SiApachekafka,
    SiPostgresql,
    SiRedis,
    SiAmazon,
    SiVercel,
    SiDocker,
    SiGit,
    SiApachemaven,
    SiGradle,
    SiOpenai,
    SiReact,
    SiTypescript,
    SiPython,
    SiFastapi
} from 'react-icons/si';
import { FaDatabase, FaCode, FaCloud, FaTools, FaShieldAlt, FaJava, FaExternalLinkAlt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';

export function ResumePage() {
    useEffect(() => {
        const cleanup = initScrollAnimations();
        return cleanup;
    }, []);
    return (
        <>
            {/* Experience Section - above resume, scroll target for "Explore My Work" */}
            <section id="experience" className="min-h-screen relative overflow-hidden noise-texture scroll-mt-0" style={{ backgroundColor: '#F9EFE7' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9EFE7] via-[#F2E5D8] to-[#F9EFE7] opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-radial from-[#F2E5D8]/40 via-transparent to-transparent"></div>
                <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
                    <div className="max-w-2xl ml-0 sm:ml-8 md:ml-12 lg:ml-20">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 scroll-animate-scale" style={{ color: '#1a1a1a' }}>Experience.</h1>
                        <div className="space-y-10 sm:space-y-8 md:space-y-10 stagger-animate">
                            <div className="hover-lift smooth-transition">
                                <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1a1a1a' }}>VIAI BEAUTY</h3>
                                <p className="text-xs sm:text-sm italic mb-2" style={{ color: '#3C3C3C' }}>Full-Stack Developer Intern (Remote, US) | Oct 2025 – Dec 2025</p>
                                <p className="text-xs sm:text-sm mb-2" style={{ color: '#3C3C3C' }}>Technologies: Python, FastAPI, AWS ECS, DynamoDB, S3, Shopify APIs, Docker</p>
                                <ul className="text-xs sm:text-sm space-y-1" style={{ color: '#3C3C3C' }}>
                                    <li>• Built and deployed backend microservices for an e-commerce analytics platform, automating large-scale customer review ingestion and processing.</li>
                                    <li>• Designed scalable FastAPI services on AWS ECS integrated with DynamoDB and S3 to support high-volume asynchronous data workflows.</li>
                                    <li>• Implemented Shopify API ingestion pipelines, improving data reliability and reducing manual operational overhead.</li>
                                </ul>
                            </div>
                            <div className="hover-lift smooth-transition">
                                <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1a1a1a' }}>THE INNER LABS</h3>
                                <p className="text-xs sm:text-sm italic mb-2" style={{ color: '#3C3C3C' }}>Backend Developer Intern (Remote) | Jan 2026 – Feb 2026</p>
                                <p className="text-xs sm:text-sm mb-2" style={{ color: '#3C3C3C' }}>Technologies: Java, Spring Boot, NextJs</p>
                                <ul className="text-xs sm:text-sm space-y-1" style={{ color: '#3C3C3C' }}>
                                    <li>• Developed and maintained backend services using Java Spring Boot, designing and exposing RESTful APIs for core product features.</li>
                                    <li>• Built and enhanced the product dashboard using Next.js, implementing dynamic UI components and integrating them with backend APIs.</li>
                                    <li>• Resolved production and staging bugs across backend and frontend, improving system stability and reducing recurring issues.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Section */}
            <div id="resume" className="min-h-screen relative overflow-hidden noise-texture" style={{ backgroundColor: '#F9EFE7' }}>
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F9EFE7] via-[#F2E5D8] to-[#F9EFE7] opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-radial from-[#F2E5D8]/40 via-transparent to-transparent"></div>

                <div className="relative z-10 min-h-screen flex flex-col lg:flex-row about-page">
                {/* Left Column */}
                <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-16 lg:py-20 relative scroll-animate-left">
                    {/* Main content */}
                    <div className="max-w-2xl ml-0 sm:ml-8 md:ml-12 lg:ml-20">
                        {/* Resume title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 md:mb-16" style={{ color: '#1a1a1a' }}>Resume.</h1>

                        {/* Education Section */}
                        <div className="mb-4 sm:mb-6 md:mb-12 scroll-animate-scale">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>Education</h2>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex items-start hover-lift smooth-transition">
                                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse-subtle" style={{ backgroundColor: '#2d2d2d' }}></div>
                                    <div>
                                        <h3 className="font-bold text-sm sm:text-base" style={{ color: '#3C3C3C' }}>KIIT University</h3>
                                        <p className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>2022 - 2026</p>
                                        <p className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Computer Science Engineering - B.Tech</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div className="mb-4 sm:mb-6 md:mb-12 scroll-animate-scale">
                            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 md:mb-6" style={{ color: '#1a1a1a' }}>Skills</h2>
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 stagger-animate">
                                {/* Programming Languages & Frameworks */}
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiPython className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Python</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold hover-glow" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaJava className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Java</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiKotlin className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Kotlin</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiCplusplus className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>C++</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaDatabase className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>SQL</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiSpring className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Spring Boot</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiFastapi className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>FastAPI</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaCode className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>JPA Data</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiNextdotjs className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Next.js</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiApachekafka className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Apache Kafka</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiPostgresql className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>PostgreSQL</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiMysql className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>MySQL</span>
                                    </div>
                                </div>

                                {/* Databases, Cloud & Tools */}
                                <div className="space-y-2 sm:space-y-3">
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiRedis className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Redis</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiAmazon className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>AWS (ECS, S3, RDS)</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiVercel className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Vercel</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiDocker className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Docker</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiGit className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Git</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiApachemaven className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Maven</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiGradle className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Gradle</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaTools className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>Agile</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaCode className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>TDD</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <FaShieldAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>OAuth2</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <RiJavascriptFill className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>JWT</span>
                                    </div>
                                    <div className="flex items-center hover-lift smooth-transition">
                                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded mr-2 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#2d2d2d', color: 'white' }}>
                                            <SiOpenai className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </div>
                                        <span className="text-xs sm:text-sm" style={{ color: '#3C3C3C' }}>GenAI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Projects */}
                <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 py-4 sm:py-6 md:py-16 lg:py-20 scroll-animate-right">
                    <div className="max-w-2xl">
                        {/* Projects Section */}
                        <div>
                            <h1 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: '#1a1a1a' }}>Projects</h1>
                            <div className="space-y-12 sm:space-y-5 md:space-y-6 stagger-animate">
                                {/* Stone Age Project */}
                                <div className="hover-lift smooth-transition">
                                    <div className="flex items-center gap-2 flex-wrap mb-1">
                                        <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1a1a1a' }}>STONE AGE</h3>
                                        <a
                                            href="https://stone-age-mu.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200 border border-[#1a1a1a]/25 bg-[#1a1a1a]/[0.08] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#F9EFE7] hover:border-[#1a1a1a] hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9EFE7]"
                                        >
                                            <span>Live</span>
                                            <FaExternalLinkAlt className="w-3 h-3 opacity-80" aria-hidden />
                                        </a>
                                    </div>
                                    <p className="text-xs sm:text-sm italic mb-2" style={{ color: '#3C3C3C' }}>Productivity Platform | Feb 2026</p>
                                    <p className="text-xs sm:text-sm mb-2" style={{ color: '#3C3C3C' }}>Technologies: Python, FastAPI, PostgreSQL, Next.js, OCR (Tesseract), LLM Parsing, Render, Vercel</p>
                                    <ul className="text-xs sm:text-sm space-y-1" style={{ color: '#3C3C3C' }}>
                                        <li>• Architected a FastAPI backend for structured PDF data extraction using OCR, layout parsing, and LLM-based processing to generate validated JSON and Excel outputs.</li>
                                        <li>• Implemented secure authentication and document-processing pipelines with PostgreSQL-backed metadata storage and optimized query performance.</li>
                                        <li>• Deployed containerized backend on Render and integrated a Next.js frontend on Vercel, ensuring reliable production workflows and end-to-end API integration.</li>
                                    </ul>
                                </div>

                                {/* SwiftCart Project */}
                                <div className="hover-lift smooth-transition">
                                    <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1a1a1a' }}>SWIFTCART</h3>
                                    <p className="text-xs sm:text-sm italic mb-2" style={{ color: '#3C3C3C' }}>Mobile E-Commerce Platform with Real-time Processing | Dec 2024 - Jan 2025</p>
                                    <p className="text-xs sm:text-sm mb-2" style={{ color: '#3C3C3C' }}>Technologies: Kotlin, Spring Boot, Docker, AWS ECS, PostgreSQL, Android-SDK</p>
                                    <ul className="text-xs sm:text-sm space-y-1" style={{ color: '#3C3C3C' }}>
                                        <li>• Developed Android e-commerce app using Jetpack Compose for responsive UI</li>
                                        <li>• Integrated Retrofit and Room for API connectivity and offline storage</li>
                                        <li>• Built Spring Boot (Kotlin) backend with Docker for scalable microservices</li>
                                        <li>• Deployed on AWS ECS with S3 and RDS for secure storage and high availability</li>
                                    </ul>
                                </div>

                                {/* NotifyX Project */}
                                <div className="hover-lift smooth-transition">
                                    <h3 className="font-bold text-sm sm:text-base" style={{ color: '#1a1a1a' }}>NOTIFYX</h3>
                                    <p className="text-xs sm:text-sm italic mb-2" style={{ color: '#3C3C3C' }}>Scalable Notification Middleware | Apr 2025 - Jun 2025</p>
                                    <p className="text-xs sm:text-sm mb-2" style={{ color: '#3C3C3C' }}>Technologies: Java, Spring Boot, Kafka, Redis, PostgreSQL, React.js, Event-driven Architecture</p>
                                    <ul className="text-xs sm:text-sm space-y-1" style={{ color: '#3C3C3C' }}>
                                        <li>• Designed high-throughput middleware handling 50K+ events/min with sub-second latency</li>
                                        <li>• Implemented distributed producer-consumer architecture with Kafka and Redis</li>
                                        <li>• Built fault-tolerant, horizontally scalable system for reliable traffic handling</li>
                                        <li>• Developed Next.js frontend for monitoring, integration management, and system insights</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
