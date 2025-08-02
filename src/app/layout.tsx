import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shaurya Sharma - Software Developer | CSE Student at KIIT",
    template: "%s | Shaurya Sharma"
  },
  description: "Shaurya Sharma is a Computer Science Engineering student at KIIT University, passionate about web development, software engineering, and creating innovative digital solutions. Explore my portfolio, projects, and technical expertise.",
  keywords: [
    "Shaurya Sharma",
    "Shaurya Sharma CSE",
    "Shaurya Sharma KIIT",
    "Computer Science Engineering",
    "KIIT University",
    "Software Developer",
    "Java",
    "Spring Boot",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Projects",
    "Student Developer"
  ],
  authors: [{ name: "Shaurya Sharma" }],
  creator: "Shaurya Sharma",
  publisher: "Shaurya Sharma",
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
    title: "Shaurya Sharma - Software Developer | CSE Student at KIIT",
    description: "Computer Science Engineering student at KIIT University passionate about web development and software engineering. Explore my projects and technical expertise.",
    images: [
      {
        url: "https://shaurya-afk.vercel.app/portfolio_preview.png",
        width: 1200,
        height: 630,
        alt: "Shaurya Sharma - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Sharma - Software Developer | CSE Student at KIIT",
    description: "Computer Science Engineering student at KIIT University. Check out my portfolio built with Next.js, Tailwind & more.",
    creator: "@shauryadotafk",
    site: "@shauryadotafk",
    images: ["https://shaurya-afk.vercel.app/portfolio_preview.png"],
  },
  verification: {
    google: "gJruHD5wKJTggpkREnbKbzR5KAytowu5rjSr1S5N8j4",
  },
  alternates: {
    canonical: "https://shaurya-afk.vercel.app",
  },
  category: "Portfolio"
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://shaurya-afk.vercel.app" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Shaurya Sharma",
              "url": "https://shaurya-afk.vercel.app",
              "image": "https://shaurya-afk.vercel.app/portfolio_preview.png",
              "jobTitle": "Software Developer",
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
                "TypeScript"
              ],
              "sameAs": [
                "https://twitter.com/shauryadotafk",
                "https://github.com/shaurya-afk",
                "https://linkedin.com/in/shaurya-afk" // Add your actual social media links
              ]
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
