import { HomePage } from "@/components/home/page";
import { AboutPage } from "@/components/about/page";
import { ResumePage } from "@/components/resume/page";
import { ContactPage } from "@/components/contact/page";

export default function Home() {
  return (
    <main className="min-h-screen smooth-transition">
      <HomePage />
      <AboutPage />
      <ResumePage />
      <ContactPage />
    </main>
  );
}
