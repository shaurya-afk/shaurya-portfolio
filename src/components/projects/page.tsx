"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function ProjectsPage() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="projects-heading" className="sr-only">
          Featured Projects and Portfolio Work
        </h2>
        
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0">
          <InfiniteMovingCards
            items={projects}
            direction="right"
            speed="slow"
          />
        </div>
        
        {/* Additional SEO content */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6">Project Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h4 className="font-medium mb-2">E-commerce & Shopping</h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                SwiftCart - Android e-commerce platform with real-time inventory tracking
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h4 className="font-medium mb-2">Social & Community</h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                Awaaz - Voice-driven social platform for anonymous audio interactions
              </p>
            </div>
            <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <h4 className="font-medium mb-2">Healthcare & Wellness</h4>
              <p className="text-neutral-600 dark:text-neutral-400">
                FailForward - Mental health journaling app and Hospital Management System
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    quote: "A seamless shopping experience with real-time inventory tracking and efficient cart management.",
    name: "SwiftCart",
    title: "E-commerce Shopping Platform",
    github: "https://github.com/shaurya-afk/swiftcart-android",
    technologies: ["Android", "Kotlin", "Java", "SQLite", "REST APIs"]
  },
  {
    quote: "A mental health journaling app focused on turning failures into insights through reflective prompts.",
    name: "FailForward",
    title: "Mental Wellness Journal",
    github: "https://github.com/shaurya-afk/FailForward",
    demo: "https://failforward-demo.vercel.app",
    technologies: ["Android", "Java", "SQLite", "UI/UX Design", "Mental Health"]
  },
  {
    quote: "A voice-based community app built to empower the unheard with anonymous audio interactions.",
    name: "Awaaz",
    title: "Voice-Driven Social Platform",
    github: "https://github.com/shaurya-afk/Awaaz",
    technologies: ["Android", "Kotlin", "Firebase", "Real-time Audio", "Social Features"]
  },
  {
    quote: "Centralized notification system for microservices—built with Kafka, Redis, and Spring Boot.",
    name: "NotifyX",
    title: "Notification Middleware",
    github: "https://github.com/shaurya-afk/notifyx-cli",
    demo: "https://notifyx-demo.vercel.app",
    technologies: ["Java", "Spring Boot", "Kafka", "Redis", "Microservices"]
  },
  {
    quote: "Manages bookings, schedules, and aircraft data for airlines with secure backend operations.",
    name: "Flight Management System",
    title: "Airline Backend Solution",
    github: "https://github.com/shaurya-afk/Flight-Management-System",
    technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Backend Development"]
  },
  {
    quote: "Handles patient records, doctor schedules, and appointments with a robust backend stack.",
    name: "Hospital Management System",
    title: "Healthcare Admin System",
    github: "https://github.com/shaurya-afk/Healthcare-Management-System",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Healthcare", "Admin System"]
  },
];
