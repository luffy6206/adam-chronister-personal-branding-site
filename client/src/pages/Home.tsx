import { useEffect } from "react";
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

export default function Home() {
  useEffect(() => {
    // Set page meta tags
    document.title = "Adam Chronister — Digital Marketing Expert, AI Innovator & Author.";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Adam Chronister helps brands build authority in the age of AI. Speaker, founder of Enleaf, and author of Authority Engineering."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Adam Chronister helps brands build authority in the age of AI. Speaker, founder of Enleaf, and author of Authority Engineering.";
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Adam Chronister — Authority in the Age of AI");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Adam Chronister — Authority in the Age of AI";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Speaker, author, and founder of Enleaf. Helping brands become the ones AI recommends."
      );
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = "Speaker, author, and founder of Enleaf. Helping brands become the ones AI recommends.";
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "website");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = "website";
      document.head.appendChild(meta);
    }
  }, []);

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
