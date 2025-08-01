"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function ProjectsPage() {
  return (
    <section id="projects">
      <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pt-0">
        <InfiniteMovingCards
          items={projects}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

const projects = [
  {
    quote: "A seamless shopping experience with real-time inventory tracking and efficient cart management.",
    name: "SwiftCart",
    title: "E-commerce Shopping Platform",
    github: "https://github.com/shaurya-afk/swiftcart-android"
  },
  {
    quote: "A voice-based community app built to empower the unheard with anonymous audio interactions.",
    name: "Awaaz",
    title: "Voice-Driven Social Platform",
    github: "https://github.com/shaurya-afk/Awaaz"
  },
  {
    quote: "A mental health journaling app focused on turning failures into insights through reflective prompts.",
    name: "FailForward",
    title: "Mental Wellness Journal",
    github: "https://github.com/shaurya-afk/FailForward"
  },
  {
    quote: "Centralized notification system for microservices—built with Kafka, Redis, and Spring Boot.",
    name: "NotifyX",
    title: "Notification Middleware",
    github: "https://github.com/shaurya-afk/notifyx-cli"
  },
  {
    quote: "Manages bookings, schedules, and aircraft data for airlines with secure backend operations.",
    name: "Flight Management System",
    title: "Airline Backend Solution",
    github: "https://github.com/shaurya-afk/Flight-Management-System"
  },
  {
    quote: "Handles patient records, doctor schedules, and appointments with a robust backend stack.",
    name: "Hospital Management System",
    title: "Healthcare Admin System",
    github: "https://github.com/shaurya-afk/Healthcare-Management-System"
  },
];
