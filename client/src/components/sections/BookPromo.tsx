import { motion } from "framer-motion";
import bookCover from "@/assets/book-cover.png";
import { GoldButton } from "../GoldButton";

export function BookPromo() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full" />
            <img src={bookCover} alt="Authority Engineering book" loading="lazy" width={400} height={600} className="relative w-[280px] md:w-[360px] drop-shadow-2xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mb-4">New Book</p>
          <h2 className="display-heading text-4xl md:text-6xl text-[color:var(--surface-light-foreground)]">
            Author of<br />Authority Engineering
          </h2>
          <p className="mt-6 text-black/70 leading-relaxed max-w-lg">
            The framework for building the distributed signals AI search engines, journalists, and customers use to decide
            who to trust. Built from fifteen years of client work and hundreds of brands navigating the same shift.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <GoldButton href="/authority-book">Pre Order</GoldButton>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-md border border-black/20 text-black hover:bg-black hover:text-white transition">
              Sample Chapter →
            </a>
          </div>
          <p className="mt-8 text-xs tracking-widest uppercase text-black/50">Available on</p>
          <div className="mt-3 flex flex-wrap items-center gap-6 text-black/80">
            <span className="font-bold text-lg">amazon</span>
            <span className="font-bold text-lg italic">audible</span>
            <span className="font-bold text-lg">Apple Books</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}