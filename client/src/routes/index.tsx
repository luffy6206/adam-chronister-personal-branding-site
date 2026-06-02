import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Podcast } from "@/components/sections/Podcast";
import { Press } from "@/components/sections/Press";
import { BookPromo } from "@/components/sections/BookPromo";
import { Apps } from "@/components/sections/Apps";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Chronister — Digital Marketing Expert, AI Innovator & Author." },
      { name: "description", content: "Adam Chronister helps brands build authority in the age of AI. Speaker, founder of Enleaf, and author of Authority Engineering." },
      { property: "og:title", content: "Adam Chronister — Authority in the Age of AI" },
      { property: "og:description", content: "Speaker, author, and founder of Enleaf. Helping brands become the ones AI recommends." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Podcast />
        <Press />
        <BookPromo />
        <Apps />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}
// jdkfdfdfd