import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, FileText, Mic, BookOpen, Download } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoldButton } from "@/components/GoldButton";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import bookCover from "@/assets/book-cover.png";
import authorImg from "@/assets/author-portrait.png";
import audienceBg from "@/assets/audience-bg.jpg";

export default function AuthorityBook() {
  useEffect(() => {
    // Set page meta tags
    document.title = "Authority Engineering — by Adam Chronister";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "How to become the brand AI recommends. The framework for building authority in the age of AI search."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "How to become the brand AI recommends. The framework for building authority in the age of AI search.";
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Authority Engineering — A New Book by Adam Chronister");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = "Authority Engineering — A New Book by Adam Chronister";
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", "How to become the brand AI recommends. Pre-order now.");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = "How to become the brand AI recommends. Pre-order now.";
      document.head.appendChild(meta);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "book");
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = "book";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <BookHero />
        <Problem />
        <Framework />
        <WhatsInside />
        <SampleBanner />
        <AuthorSection />
        <Testimonials light={true} />
        <HowItWorks />
        <Products />
        <PickFormat />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BookHero() {
  return (
    <section
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.85), rgba(5,5,5,0.97)), url(${audienceBg})` }}
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">A New Release · Vol. One</p>
          <h1 className="display-heading text-5xl md:text-7xl">Authority<br />Engineering</h1>
          <p className="mt-5 text-foreground/80 max-w-md leading-relaxed">
            How to become the brand <span className="text-gold">AI recommends.</span> The new framework for trust, citation,
            and growth in AI search.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GoldButton href="#">Pre Order</GoldButton>
            <GoldButton href="#sample" variant="outline">Sample Chapter</GoldButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-foreground/80">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Available on</span>
            <span className="font-bold">amazon</span>
            <span className="font-bold italic">audible</span>
            <span className="font-bold">Apple Books</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-gold/25 blur-3xl rounded-full" />
            <img src={bookCover} alt="Authority Engineering Book Cover" width={400} height={600} className="relative w-[280px] md:w-[380px] drop-shadow-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section
      className="py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.97), rgba(5,5,5,0.97)), url(${audienceBg})` }}
    >
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">The Premise</p>
          <h2 className="display-heading text-4xl md:text-6xl">The Window is<br />Still Open.<br />But It is Closing.</h2>
          <a className="mt-8 inline-flex bg-gold text-primary-foreground px-6 py-3 text-sm font-bold rounded-md hover:brightness-110" href="#sample">
            Download Sample Chapter
          </a>
        </div>
        <div className="space-y-5 text-foreground/75 leading-relaxed text-base">
          <p>
            In 2024 and beyond, the rules of visibility are changing. As AI search becomes the default way people find solutions, brands that have built genuine authority will dominate the recommendations.
          </p>
          <p>
            <strong>But most brands aren't ready.</strong> They're still operating under the old SEO playbook, chasing keywords instead of earning authority.
          </p>
          <p>
            If your brand doesn't move now, by 2026 you'll be invisible to the next generation of digital discovery.
          </p>
        </div>
      </div>
    </section>
  );
}

function Framework() {
  const pillars = [
    {
      title: "Foundation",
      description: "Build credibility signals that make you quotable",
      items: ["Expertise demonstration", "Audience building", "Content systems"]
    },
    {
      title: "Amplification",
      description: "Get mentioned where AI looks for answers",
      items: ["Strategic partnerships", "Media placement", "Authority networks"]
    },
    {
      title: "Integration",
      description: "Ensure your authority flows into AI systems",
      items: ["Citation optimization", "Data structure", "Platform strategy"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">The Framework</p>
          <h2 className="display-heading text-4xl md:text-6xl">Authority Engineering in<br />Three Pillars</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-secondary rounded-lg border border-gold/20"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-foreground/70 mb-6">{pillar.description}</p>
              <ul className="space-y-3">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsInside() {
  const sections = [
    {
      icon: FileText,
      title: "The 5 Authority Principles",
      description: "Core truths about how authority works in the AI age"
    },
    {
      icon: BookOpen,
      title: "The Authority Engineering System",
      description: "Step-by-step playbook for your brand"
    },
    {
      icon: Mic,
      title: "Case Studies",
      description: "Real examples of brands winning with Authority Engineering"
    },
    {
      icon: Download,
      title: "Downloadable Tools",
      description: "Worksheets, templates, and frameworks you can use immediately"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">What's Inside</p>
          <h2 className="display-heading text-4xl md:text-6xl">Everything You Need<br />to Build Authority</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-4"
              >
                <Icon className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-foreground">{section.title}</h3>
                  <p className="text-foreground/70">{section.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SampleBanner() {
  return (
    <section id="sample" className="py-16 bg-gradient-to-r from-gold/10 to-gold/5 border-y border-gold/20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">Get a Free Sample Chapter</h3>
        <p className="text-foreground/80 mb-6">Read the first chapter and discover the Authority Engineering framework</p>
        <GoldButton href="#">Download Sample Chapter</GoldButton>
      </div>
    </section>
  );
}

function AuthorSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <img src={authorImg} alt="Adam Chronister" className="w-full rounded-lg" />
        </motion.div>
        <div>
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">About the Author</p>
          <h2 className="display-heading text-4xl md:text-5xl mb-6">Adam Chronister</h2>
          <p className="text-foreground/80 text-lg leading-relaxed mb-4">
            Adam is a digital marketing strategist, AI innovator, and founder of Enleaf. He helps brands build authority and visibility in the age of AI-driven search.
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed">
            With over 15 years of experience in digital marketing, Adam has worked with Fortune 500 companies and innovative startups to develop strategies that create genuine authority and sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">The Process</p>
          <h2 className="display-heading text-4xl md:text-6xl">How Authority Engineering Works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Assess", description: "Analyze your current authority position" },
            { step: "02", title: "Plan", description: "Design your Authority Engineering strategy" },
            { step: "03", title: "Build", description: "Execute the framework with proven tactics" },
            { step: "04", title: "Measure", description: "Track authority growth and AI visibility" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 border border-gold/20 rounded-lg"
            >
              <div className="text-4xl font-bold text-gold mb-4">{item.step}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="display-heading text-4xl md:text-6xl">Available Formats</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { format: "Hardcover", price: "$27.99" },
            { format: "Paperback", price: "$16.99" },
            { format: "eBook", price: "$12.99" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 border-2 border-gold/30 rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{item.format}</h3>
              <p className="text-3xl font-bold text-gold mb-6">{item.price}</p>
              <GoldButton href="#">Pre-Order</GoldButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PickFormat() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="display-heading text-4xl md:text-6xl mb-8">Choose Your Format</h2>
        <p className="text-foreground/80 text-lg mb-12 max-w-2xl mx-auto">
          Authority Engineering is available in multiple formats. Choose what works best for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <GoldButton href="#">Amazon Hardcover</GoldButton>
          <GoldButton href="#">Amazon Kindle</GoldButton>
          <GoldButton href="#">Apple Books</GoldButton>
          <GoldButton href="#">Audible</GoldButton>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "Who is this book for?",
      answer: "Authority Engineering is for brand leaders, founders, marketers, and content creators who want to build genuine authority in the age of AI search."
    },
    {
      question: "How is this different from traditional SEO?",
      answer: "Traditional SEO focuses on ranking for keywords. Authority Engineering focuses on building the credibility signals that AI systems use to recommend you."
    },
    {
      question: "Can I apply this to my industry?",
      answer: "Yes! The Authority Engineering framework applies across industries and business models. We include case studies from diverse sectors."
    },
    {
      question: "What should I read first?",
      answer: "Start with the sample chapter to understand the core principles, then get the full book for the complete framework and case studies."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <h2 className="display-heading text-4xl md:text-6xl">Frequently Asked<br />Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
