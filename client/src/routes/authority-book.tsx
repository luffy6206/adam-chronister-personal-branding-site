// import { createFileRoute } from "@tanstack/react-router";
// import { motion } from "framer-motion";
// import { Check, FileText, Mic, BookOpen, Download } from "lucide-react";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";
// import { GoldButton } from "@/components/GoldButton";
// import { Testimonials } from "@/components/sections/Testimonials";
// import { Contact } from "@/components/sections/Contact";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import bookCover from "@/assets/book-cover.png";
// import authorImg from "@/assets/author-portrait.png";
// import audienceBg from "@/assets/audience-bg.jpg";

// export const Route = createFileRoute("/authority-book")({
//   head: () => ({
//     meta: [
//       { title: "Authority Engineering — by Adam Chronister" },
//       { name: "description", content: "How to become the brand AI recommends. The framework for building authority in the age of AI search." },
//       { property: "og:title", content: "Authority Engineering — A New Book by Adam Chronister" },
//       { property: "og:description", content: "How to become the brand AI recommends. Pre-order now." },
//       { property: "og:type", content: "book" },
//     ],
//   }),
//   component: BookPage,
// });

// function BookPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />
//       <main>
//         <BookHero />
//         <Problem />
//         <Framework />
//         <WhatsInside />
//         <SampleBanner />
//         <AuthorSection />
//         <Testimonials light={true} />
//         <HowItWorks />
//         <Products />
//         <PickFormat />
//         <FAQ />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// function BookHero() {
//   return (
//     <section
//       className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center"
//       style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.85), rgba(5,5,5,0.97)), url(${audienceBg})` }}
//     >
//       <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">A New Release · Vol. One</p>
//           <h1 className="display-heading text-5xl md:text-7xl">Authority<br />Engineering</h1>
//           <p className="mt-5 text-foreground/80 max-w-md leading-relaxed">
//             How to become the brand <span className="text-gold">AI recommends.</span> The new framework for trust, citation,
//             and growth in AI search.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <GoldButton href="#">Pre Order</GoldButton>
//             <GoldButton href="#sample" variant="outline">Sample Chapter</GoldButton>
//           </div>
//           <div className="mt-10 flex flex-wrap items-center gap-6 text-foreground/80">
//             <span className="text-xs uppercase tracking-widest text-muted-foreground">Available on</span>
//             <span className="font-bold">amazon</span>
//             <span className="font-bold italic">audible</span>
//             <span className="font-bold">Apple Books</span>
//           </div>
//         </motion.div>
//         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center">
//           <div className="relative">
//             <div className="absolute -inset-10 bg-gold/25 blur-3xl rounded-full" />
//             <img src={bookCover} alt="Authority Engineering Book Cover" width={400} height={600} className="relative w-[280px] md:w-[380px] drop-shadow-2xl" />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// function Problem() {
//   return (
//     <section
//       className="py-24 md:py-32 bg-cover bg-center"
//       style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.97), rgba(5,5,5,0.97)), url(${audienceBg})` }}
//     >
//       <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
//         <div>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">The Premise</p>
//           <h2 className="display-heading text-4xl md:text-6xl">The Window is<br />Still Open.<br />But It is Closing.</h2>
//           <a className="mt-8 inline-flex bg-gold text-primary-foreground px-6 py-3 text-sm font-bold rounded-md hover:brightness-110" href="#sample">
//             Download Sample Chapter
//           </a>
//         </div>
//         <div className="space-y-5 text-foreground/75 leading-relaxed text-base">
//           <p>
//             In the next 24 months the way customers discover brands will fundamentally change. AI search is rapidly
//             replacing the blue-link results that built the modern internet.
//           </p>
//           <p>
//             The brands that adapt now — by engineering the signals AI uses to decide who to cite, recommend, and trust —
//             will own the next decade. The ones that don't will quietly disappear from the conversation.
//           </p>
//           <p>This book is your playbook for being in the first group.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Framework() {
//   const shifts = [
//     { n: "01", t: "Distributed Signals Replace Single Sources", d: "AI search reads everywhere your brand shows up, not just your website. Authority is now distributed." },
//     { n: "02", t: "Why Your Business Won't Be Mentioned", d: "Without engineered citations across the right sources, AI will literally not see you." },
//     { n: "03", t: "How To Be The Recommended Brand", d: "A repeatable playbook to become the answer AI returns — every time." },
//   ];
//   return (
//     <section className="bg-surface-light py-24 md:py-32">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="text-center mb-14">
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">Inside the Book</p>
//           <h2 className="display-heading text-4xl md:text-6xl text-[color:var(--surface-light-foreground)]">Three Shifts. One Framework.</h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-6">
//           {shifts.map((s, i) => (
//             <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="bg-white rounded-2xl p-7 border border-black/5">
//               <div className="text-5xl font-black text-gold mb-4 display-heading">{s.n}</div>
//               <h3 className="text-lg font-bold text-black uppercase mb-3">{s.t}</h3>
//               <p className="text-sm text-black/65 leading-relaxed">{s.d}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function WhatsInside() {
//   return (
//     <section className="py-24 md:py-32 bg-background">
//       <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
//           <img src={bookCover} alt="Book preview" loading="lazy" width={400} height={600} className="w-[280px] md:w-[340px] drop-shadow-2xl" />
//         </motion.div>
//         <div>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">Three Parts</p>
//           <h2 className="display-heading text-4xl md:text-6xl">Three Parts.<br />One Framework.</h2>
//           <Accordion type="single" collapsible defaultValue="shift" className="mt-8 space-y-3">
//             {[
//               { v: "shift", t: "The Shift", c: "Why the search game has fundamentally changed and what disappearing from AI recommendations actually costs you." },
//               { v: "framework", t: "The Framework", c: "The repeatable Authority Engineering process: signals, sources, citations, and the order they need to land." },
//               { v: "playbook", t: "The Playbook", c: "Tactical chapters on press, podcasts, ebooks, and product placement designed to be cited by LLMs." },
//             ].map((i) => (
//               <AccordionItem key={i.v} value={i.v} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold">
//                 <AccordionTrigger className="font-bold uppercase text-base hover:no-underline">{i.t}</AccordionTrigger>
//                 <AccordionContent className="text-muted-foreground leading-relaxed">{i.c}</AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SampleBanner() {
//   return (
//     <section id="sample" className="bg-gold py-16 md:py-20 relative overflow-hidden">
//       <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center relative">
//         <div>
//           <p className="text-xs tracking-[0.25em] uppercase font-bold text-primary-foreground/70 mb-3">Free Sample</p>
//           <h2 className="display-heading text-3xl md:text-5xl text-primary-foreground">Read Chapter One<br />Before You Buy.</h2>
//         </div>
//         <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="flex-1 bg-black/20 border border-black/30 px-5 py-3 rounded-md text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-black"
//           />
//           <button className="bg-black text-gold px-6 py-3 rounded-md font-bold inline-flex items-center gap-2 justify-center hover:bg-black/90">
//             <Download className="w-4 h-4" /> Send Me Chapter
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// function AuthorSection() {
//   return (
//     <section
//       className="py-24 md:py-32 bg-cover bg-center"
//       style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.93), rgba(5,5,5,0.98)), url(${audienceBg})` }}
//     >
//       <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
//         <motion.img
//           initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
//           src={authorImg} alt="Adam Chronister" loading="lazy" width={1024} height={1024} className="rounded-2xl w-full max-w-md mx-auto"
//         />
//         <div>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">About the Author</p>
//           <h2 className="display-heading text-4xl md:text-6xl">Adam Chronister</h2>
//           <div className="mt-6 space-y-4 text-foreground/75 leading-relaxed">
//             <p>
//               For 15 years, Adam has run Enleaf — a digital marketing agency that has helped hundreds of brands rank,
//               get cited, and become category leaders.
//             </p>
//             <p>
//               He has been featured in WSJ, Wired, MarketWatch, TechCrunch, and Business Insider. Authority Engineering is
//               the framework distilled from that work.
//             </p>
//           </div>
//           <div className="mt-8"><GoldButton href="/">Explore More →</GoldButton></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function HowItWorks() {
//   const steps = [
//     { n: "01", t: "Buy The Book", d: "Order in your favorite format from Amazon, Audible, or Apple Books." },
//     { n: "02", t: "Open To A Page", d: "Every chapter has a self-contained playbook ready to action today." },
//     { n: "03", t: "Use The Apps", d: "Tools at the back of the book turn frameworks into output in minutes." },
//   ];
//   return (
//     <section className="py-24 md:py-32 bg-background">
//       <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
//         <div>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">How It Works</p>
//           <h2 className="display-heading text-4xl md:text-6xl">Order Today.<br />Run It Monday.</h2>
//           <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
//             The book is built to be operational from page one — no fluff, just the framework and the tools to execute it.
//           </p>
//         </div>
//         <div className="space-y-4">
//           {steps.map((s, i) => (
//             <motion.div key={s.n} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="flex items-start gap-5 p-6 bg-card border border-border rounded-2xl hover:border-gold/60 transition">
//               <div className="text-3xl font-black text-gold display-heading">{s.n}</div>
//               <div>
//                 <h3 className="font-bold uppercase text-foreground">{s.t}</h3>
//                 <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{s.d}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function Products() {
//   const products = [
//     {
//       icon: FileText, title: "Press Release Generator",
//       desc: "Turn your wins into AI-grade press in minutes.",
//       features: ["AI-tuned headlines optimized for cite-ability", "Newswire-ready formatting in one click", "Wire-style distribution checklist included", "Brand voice profiles for consistency"],
//     },
//     {
//       icon: Mic, title: "Podcast Pitch Studio",
//       desc: "Find shows, build pitches, book conversations.",
//       features: ["Searchable database of relevant podcasts", "Personalized AI-generated pitch drafts", "Track outreach and bookings in one place", "Episode angle generator for each show"],
//     },
//     {
//       icon: BookOpen, title: "Ebook Generator",
//       desc: "Long-form authority content AI loves to cite.",
//       features: ["Full ebook structure from a single prompt", "Chapter-level drafts in your brand voice", "Export to PDF, EPUB, and Kindle-ready", "Built-in citation and source management"],
//     },
//   ];
//   return (
//     <section className="py-24 md:py-32 bg-background">
//       <div className="mx-auto max-w-7xl px-6 space-y-16">
//         {products.map((p, idx) => (
//           <motion.div
//             key={p.title}
//             initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
//             className={`grid lg:grid-cols-2 gap-10 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
//           >
//             <div>
//               <div className="w-12 h-12 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-5">
//                 <p.icon className="w-6 h-6" />
//               </div>
//               <h3 className="display-heading text-3xl md:text-4xl">{p.title}</h3>
//               <p className="mt-4 text-muted-foreground">{p.desc}</p>
//               <ul className="mt-6 space-y-3">
//                 {p.features.map((f) => (
//                   <li key={f} className="flex items-start gap-3 text-sm text-foreground/80">
//                     <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" /> {f}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-7 flex gap-3">
//                 <GoldButton href="#">Try It Free</GoldButton>
//                 <GoldButton href="#" variant="outline">Watch Demo</GoldButton>
//               </div>
//             </div>
//             <div className="bg-card border border-border rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
//               <p.icon className="w-24 h-24 text-gold/30" />
//               <div className="absolute top-4 left-4 right-4 h-6 rounded-md bg-secondary/60" />
//               <div className="absolute bottom-6 left-6 right-6 space-y-2">
//                 <div className="h-2 rounded bg-secondary/60 w-1/2" />
//                 <div className="h-2 rounded bg-secondary/60 w-3/4" />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function PickFormat() {
//   const formats = [
//     { name: "amazon", label: "Hardcover & Kindle" },
//     { name: "audible", label: "Narrated by the Author" },
//     { name: "Apple Books", label: "iOS & macOS" },
//   ];
//   return (
//     <section className="py-24 md:py-32 bg-card relative overflow-hidden">
//       <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gold opacity-90 [clip-path:polygon(30%_0,100%_0,100%_100%,0%_100%)] hidden lg:block">
//         <div className="rotate-90 h-full flex items-center justify-center display-heading text-7xl text-primary-foreground opacity-40 whitespace-nowrap">AUTHORITY</div>
//       </div>
//       <div className="mx-auto max-w-7xl px-6 relative">
//         <div className="text-center mb-12">
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">Choose Your Format</p>
//           <h2 className="display-heading text-4xl md:text-6xl">Pick Your Format</h2>
//           <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Available wherever books are sold — pick the one that fits your workflow.</p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
//           {formats.map((f) => (
//             <div key={f.name} className="bg-background border border-border rounded-2xl p-8 text-center hover:border-gold/60 transition">
//               <div className="text-2xl font-bold mb-1">{f.name}</div>
//               <p className="text-xs text-muted-foreground">{f.label}</p>
//               <button className="mt-5 bg-gold text-primary-foreground px-5 py-2 rounded-md text-sm font-bold w-full hover:brightness-110">Buy Now</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FAQ() {
//   const faqs = [
//     { q: "Is this for me if I don't do SEO?", a: "Yes. Authority Engineering applies to any brand or business that wants to be visible in AI-driven search and recommendation surfaces — not just SEOs." },
//     { q: "Will this be outdated in 6 months?", a: "The tactics evolve; the framework doesn't. The book focuses on the underlying signals AI systems rely on, which are durable." },
//     { q: "How long is the book?", a: "Around 220 pages — short enough to read in a weekend, dense enough to reference for years." },
//     { q: "Do I need to be technical?", a: "Not at all. The book and the included apps are written for marketers, founders, and operators." },
//   ];
//   return (
//     <section
//       className="py-24 md:py-32 bg-cover bg-center"
//       style={{ backgroundImage: `linear-gradient(rgba(5,5,5,0.95), rgba(5,5,5,0.98)), url(${audienceBg})` }}
//     >
//       <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-start">
//         <div>
//           <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">Honest Answers</p>
//           <h2 className="display-heading text-4xl md:text-6xl">Questions, Before You Click Buy.</h2>
//           <img src={bookCover} alt="" aria-hidden="true" className="w-40 mt-10 opacity-90" />
//         </div>
//         <Accordion type="single" collapsible defaultValue="0" className="space-y-3">
//           {faqs.map((f, i) => (
//             <AccordionItem key={i} value={String(i)} className="border border-border rounded-xl bg-card px-5 data-[state=open]:border-gold">
//               <AccordionTrigger className="font-bold text-left hover:no-underline">{f.q}</AccordionTrigger>
//               <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </div>
//     </section>
//   );
// }