import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shauryasha.com"),
  title: {
    default: "Shaurya Sharma - Software Engineer | Backend Developer | AI Developer",
    template: "%s | Shaurya Sharma"
  },
  description: "I'm a Software Engineer with internship experience building asynchronous, cloud-deployed backend services using Python and Java. I build backend and full-stack applications, AI-powered coding workflows, requirements and test-generation tools, and developer context services using FastAPI, Spring Boot, Next.js, PostgreSQL, AWS, and LangGraph.",
  keywords: [
    "Shaurya Sharma",
    "Software Engineer",
    "Backend Engineer",
    "Full Stack Developer",
    "AI Developer",
    "AI-Powered Applications",
    "Java Developer",
    "Spring Boot Developer",
    "Python Developer",
    "FastAPI Developer",
    "Next.js Developer",
    "React Developer",
    "PostgreSQL",
    "AWS",
    "LLM Applications",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "Retrieval-Augmented Generation",
    "Developer Tools",
    "REST APIs",
    "Microservices",
    "Apache Kafka",
    "Redis",
    "Android Development",
    "Kotlin",
    "AI Coding Agents",
    "Software Engineering Automation",
    "Requirements Engineering",
    "Test Asset Generation",
    "Model Context Protocol",
    "Developer Context Services",
    "Nascent AI",
    "Specforge",
    "Unbiased",
    "KIIT University",
    "Portfolio",
    "Projects"
  ],
  authors: [{ name: "Shaurya Sharma", url: "https://shauryasha.com" }],
  creator: "Shaurya Sharma",
  publisher: "Shaurya Sharma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shauryasha.com",
    siteName: "Shaurya Sharma Portfolio",
    title: "Shaurya Sharma - Software Engineer | Backend Developer | AI Developer",
    description: "I'm a Software Engineer with internship experience building asynchronous, cloud-deployed backend services using Python and Java. I build backend and full-stack applications, AI-powered coding workflows, requirements and test-generation tools, and developer context services using FastAPI, Spring Boot, Next.js, PostgreSQL, AWS, and LangGraph.",
    images: [
      {
        url: "https://shauryasha.com/portfolio_preview.png",
        width: 1200,
        height: 630,
        alt: "Shaurya Sharma - Software Engineer Portfolio",
        type: "image/png",
      },
      {
        url: "https://shauryasha.com/nice_pic.png",
        width: 400,
        height: 400,
        alt: "Shaurya Sharma - Profile Picture",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shauryadotafk",
    creator: "@shauryadotafk",
    title: "Shaurya Sharma - Software Engineer | Backend Developer | AI Developer",
    description: "I'm a Software Engineer with internship experience building asynchronous, cloud-deployed backend services using Python and Java. I build backend and full-stack applications, AI-powered coding workflows, requirements and test-generation tools, and developer context services using FastAPI, Spring Boot, Next.js, PostgreSQL, AWS, and LangGraph.",
    images: ["https://shauryasha.com/portfolio_preview.png"],
  },
  verification: {
    google: "gJruHD5wKJTggpkREnbKbzR5KAytowu5rjSr1S5N8j4",
  },
  alternates: {
    canonical: "https://shauryasha.com",
  },
  category: "Portfolio",
  other: {
    "theme-color": "#000000",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Shaurya Sharma",
    "application-name": "Shaurya Sharma Portfolio",
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="canonical" href="https://shauryasha.com" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Shaurya Sharma" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Social Media Meta Tags */}
        <meta property="og:site_name" content="Shaurya Sharma Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:site" content="@shauryadotafk" />
        <meta name="twitter:creator" content="@shauryadotafk" />
        
        {/* Additional Keywords */}
        <meta name="keywords" content="Shaurya Sharma, Software Engineer, Backend Engineer, Full Stack Developer, AI Developer, Java, Spring Boot, Python, FastAPI, React, Next.js, PostgreSQL, AWS, LLM Applications, AI Agents, LangGraph, Developer Tools, REST APIs, Microservices, Requirements Engineering, Test Generation, Model Context Protocol, Nascent AI, Specforge, Unbiased" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="preconnect" href="https://x.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaurya Sharma",
              "url": "https://shauryasha.com",
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://shauryasha.com/portfolio_preview.png",
                  "width": 1200,
                  "height": 630
                },
                {
                  "@type": "ImageObject",
                  "url": "https://shauryasha.com/nice_pic.png",
                  "width": 400,
                  "height": 400
                }
              ],
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "KIIT University"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "KIIT University"
              },
              "knowsAbout": [
                "Software Engineering",
                "Backend Engineering",
                "Full-Stack Development",
                "AI-Powered Applications",
                "AI Agents",
                "Large Language Models",
                "Retrieval-Augmented Generation",
                "LangChain",
                "LangGraph",
                "Python",
                "FastAPI",
                "Java",
                "Spring Boot",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Kotlin",
                "Android Development",
                "PostgreSQL",
                "DynamoDB",
                "Redis",
                "Apache Kafka",
                "AWS",
                "Microservices Architecture",
                "RESTful APIs",
                "Database Design",
                "API Development",
                "Developer Tools",
                "E-commerce Development",
                "Healthcare Systems",
                "Real-Time Systems"
              ],
              "sameAs": [
                "https://github.com/shaurya-afk",
                "https://linkedin.com/in/shaurya-afk",
                "https://x.com/shauryadotafk"
              ],
              "email": "shauryasha090@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "description": "I'm a Software Engineer with internship experience building asynchronous, cloud-deployed backend services using Python and Java. I build backend and full-stack applications, AI-powered coding workflows, requirements and test-generation tools, and developer context services using FastAPI, Spring Boot, Next.js, PostgreSQL, AWS, and LangGraph."
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Shaurya Sharma Portfolio",
              "url": "https://shauryasha.com",
              "description": "Portfolio of Shaurya Sharma, showcasing software engineering, backend development, full-stack applications, AI-powered systems, and developer tools.",
              "author": {
                "@type": "Person",
                "name": "Shaurya Sharma"
              },
              "publisher": {
                "@type": "Person",
                "name": "Shaurya Sharma"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://shauryasha.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Projects Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Portfolio Projects",
              "description": "Featured projects by Shaurya Sharma",
              "itemListElement": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Nascent AI",
                  "description": "AI-powered software engineering automation platform that uses a LangGraph pipeline to clone GitHub repositories, summarize files with an LLM, plan changes from natural-language requests, generate diffs, and open commits and pull requests through a GitHub App. Includes an asynchronous FastAPI backend with JWT authentication and a Next.js dashboard.",
                  "applicationCategory": "DeveloperApplication",
                  "programmingLanguage": ["Python", "TypeScript", "JavaScript"]
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Specforge",
                  "description": "Requirements-engineering tool with a FastAPI backend and Next.js dashboard that converts varied inputs into structured requirements and test artifacts. Includes automated tests with 85% PyTest coverage and continuous integration through GitHub Actions.",
                  "applicationCategory": "DeveloperApplication",
                  "programmingLanguage": ["Python", "TypeScript", "JavaScript"]
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Unbiased",
                  "description": "Developer context service built around a FastAPI and FastMCP server that exposes task-aware tools over REST and MCP. Its get_context_for tool uses Gemini to filter stored context for a given task, backed by PostgreSQL and secured with OAuth 2.1 and JWT-based sessions.",
                  "applicationCategory": "DeveloperApplication",
                  "programmingLanguage": ["Python", "TypeScript", "JavaScript"]
                }
              ]
            })
          }}
        />

        {/* Work Experience Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaurya Sharma",
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Freelance Backend Developer",
                "description": "Developed backend for car wash management platform with booking, payments, and role-based access",
                "dateOccupied": {
                  "@type": "DateRange",
                  "startDate": "2025-07-01",
                  "endDate": "2025-08-31"
                },
                "skills": ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"]
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black dark:bg-black dark:text-white`}
        style={{ backgroundColor: '#F9EFE7' }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
