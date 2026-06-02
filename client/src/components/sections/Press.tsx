import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "../SectionTitle";

const press = [
  { outlet: "The Wall Street Journal", date: "Dec 2024", title: "Featured in WSJ for company use of AI generated written content", excerpt: "Adam shares his framework for combining AI tooling with editorial oversight." },
  { outlet: "Search Engine Journal", date: "Nov 2024", title: "Featured in SEJ on AI search and brand authority", excerpt: "How brands are being rebuilt for AI-first discovery channels." },
  { outlet: "AB News Wire", date: "Oct 2024", title: "Featured on AI generated content for brand strategy", excerpt: "Adam's insights on responsible AI workflows for marketing teams." },
  { outlet: "Press Release", date: "Sep 2024", title: "Enleaf announces new AI authority engineering suite", excerpt: "A new toolkit for marketers, journalists and SEOs going to market." },
];

export function Press() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-semibold mb-4">Press & PR</p>
          <h2 className="display-heading text-4xl md:text-6xl text-[color:var(--surface-light-foreground)]">
            Fifteen years at the<br />intersection of SEO, AI & Brand
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {press.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] flex flex-col"
            >
              <div className="h-14 flex items-center mb-3">
                <span className="font-bold text-black/90" style={{ fontFamily: 'Poppins, sans-serif' }}>{p.outlet}</span>
              </div>
              <p className="text-[10px] tracking-[0.2em] text-black/40 uppercase mb-2">{p.date}</p>
              <h3 className="text-sm font-bold text-black mb-2 leading-snug">{p.title}</h3>
              <p className="text-xs text-black/60 leading-relaxed flex-1">{p.excerpt}</p>
              <a className="mt-4 inline-flex w-fit items-center gap-1.5 bg-gold text-primary-foreground px-3 py-1.5 text-xs font-bold rounded-md" href="#">
                Read More <ArrowRight className="w-3 h-3" />
              </a>
            </motion.article>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-10">
          <button className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-black/70 hover:bg-gold hover:text-primary-foreground transition"><ChevronLeft className="w-4 h-4" /></button>
          <button className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-black/70 hover:bg-gold hover:text-primary-foreground transition"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
}