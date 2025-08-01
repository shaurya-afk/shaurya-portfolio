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
  title: "Shaurya Sharma",
  description: "Shaurya's Portfolio",
  openGraph: {
    title: "Shaurya Sharma",
    description: "A clean and fast developer portfolio built with Next.js",
    url: "https://shaurya-afk.vercel.app",
    siteName: "Shaurya Sharma",
    images: [
      {
        url: "https://shaurya-afk.vercel.app/portfolio_preview.png",
        width: 1200,
        height: 630,
        alt: "Shaurya Sharma Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaurya Sharma",
    description: "Check out my portfolio built with Next.js, Tailwind & more.",
    creator: "@shauryadotafk",
    images: ["https://shaurya-afk.vercel.app/portfolio_preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
