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
  metadataBase: new URL("https://shaurya-afk.vercel.app"),
  title: {
    default: "Shaurya Sharma - Full Stack Developer | Backend Engineer | Mobile App Developer",
    template: "%s | Shaurya Sharma"
  },
  description: "Shaurya Sharma is a Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and Android development. Freelance backend developer with experience in e-commerce, healthcare, and social platforms. Explore innovative projects including SwiftCart, Awaaz, and NotifyX.",
  keywords: [
    "Shaurya Sharma",
    "Full Stack Developer",
    "Backend Engineer",
    "Mobile App Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Next.js Developer",
    "Android Developer",
    "Kotlin Developer",
    "Freelance Developer",
    "E-commerce Developer",
    "Healthcare Developer",
    "Social Platform Developer",
    "SwiftCart",
    "Awaaz",
    "FailForward",
    "NotifyX",
    "Flight Management System",
    "Hospital Management System",
    "Car Wash Management",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Microservices",
    "REST APIs",
    "Mobile Development",
    "Web Development",
    "Software Engineering",
    "KIIT University",
    "Portfolio",
    "Projects"
  ],
  authors: [{ name: "Shaurya Sharma", url: "https://shaurya-afk.vercel.app" }],
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
    url: "https://shaurya-afk.vercel.app",
    siteName: "Shaurya Sharma Portfolio",
    title: "Shaurya Sharma - Full Stack Developer | Backend Engineer | Mobile App Developer",
    description: "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and Android development. Freelance backend developer with experience in e-commerce, healthcare, and social platforms. View projects like SwiftCart, Awaaz, and NotifyX.",
    images: [
      {
        url: "https://shaurya-afk.vercel.app/portfolio_preview.png",
        width: 1200,
        height: 630,
        alt: "Shaurya Sharma - Full Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "https://shaurya-afk.vercel.app/nice_pic.jpg",
        width: 400,
        height: 400,
        alt: "Shaurya Sharma - Profile Picture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shauryadotafk",
    creator: "@shauryadotafk",
    title: "Shaurya Sharma - Full Stack Developer | Backend Engineer | Mobile App Developer",
    description: "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, and Android development. Freelance backend developer with experience in e-commerce, healthcare, and social platforms. Built with Next.js, Tailwind & modern technologies.",
    images: ["https://shaurya-afk.vercel.app/portfolio_preview.png"],
  },
  verification: {
    google: "gJruHD5wKJTggpkREnbKbzR5KAytowu5rjSr1S5N8j4",
  },
  alternates: {
    canonical: "https://shaurya-afk.vercel.app",
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
        <link rel="canonical" href="https://shaurya-afk.vercel.app" />
        
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
        <meta name="keywords" content="Shaurya Sharma, Full Stack Developer, Backend Engineer, Mobile App Developer, Java Developer, Spring Boot, React, Next.js, Android, Kotlin, E-commerce, Healthcare, Social Platforms, Freelance Developer, SwiftCart, Awaaz, FailForward, NotifyX" />
        
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
              "url": "https://shaurya-afk.vercel.app",
              "image": [
                {
                  "@type": "ImageObject",
                  "url": "https://shaurya-afk.vercel.app/portfolio_preview.png",
                  "width": 1200,
                  "height": 630
                },
                {
                  "@type": "ImageObject",
                  "url": "https://shaurya-afk.vercel.app/nice_pic.jpg",
                  "width": 400,
                  "height": 400
                }
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "KIIT University"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "KIIT University"
              },
              "knowsAbout": [
                "Web Development",
                "Software Engineering",
                "Computer Science",
                "Java",
                "Spring Boot",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Kotlin",
                "Android Development",
                "PostgreSQL",
                "Redis",
                "Apache Kafka",
                "Microservices Architecture",
                "RESTful APIs",
                "Mobile App Development",
                "E-commerce Development",
                "Healthcare Systems",
                "Social Platforms",
                "Freelance Development",
                "Backend Engineering",
                "Database Design",
                "API Development"
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
              "description": "Full Stack Developer and freelance backend engineer specializing in Java, Spring Boot, React, Next.js, and Android development. Experience in e-commerce, healthcare, and social platforms with projects like SwiftCart, Awaaz, and NotifyX."
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
              "url": "https://shaurya-afk.vercel.app",
              "description": "Portfolio website showcasing Full Stack Developer projects and skills",
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
                "target": "https://shaurya-afk.vercel.app/search?q={search_term_string}",
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
                  "name": "SwiftCart",
                  "description": "E-commerce shopping platform with real-time inventory tracking",
                  "applicationCategory": "E-commerce",
                  "operatingSystem": "Android",
                  "programmingLanguage": ["Kotlin", "Java"],
                  "url": "https://github.com/shaurya-afk/swiftcart-android"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Awaaz",
                  "description": "Voice-driven social platform for anonymous audio interactions",
                  "applicationCategory": "Social Platform",
                  "operatingSystem": "Android",
                  "programmingLanguage": ["Kotlin"],
                  "url": "https://github.com/shaurya-afk/Awaaz"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "FailForward",
                  "description": "Mental health journaling app focused on turning failures into insights",
                  "applicationCategory": "Healthcare",
                  "operatingSystem": "Android",
                  "programmingLanguage": ["Java"],
                  "url": "https://github.com/shaurya-afk/FailForward"
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "NotifyX",
                  "description": "Centralized notification system for microservices",
                  "applicationCategory": "Backend Service",
                  "programmingLanguage": ["Java"],
                  "url": "https://github.com/shaurya-afk/notifyx-cli"
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-black dark:text-white`}
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
