import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  initials: string;
}

export function TestimonialCard({ t, i = 0, light = true }: { t: Testimonial; i?: number; light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`rounded-2xl p-7 border ${
        light ? "bg-white border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]" : "bg-card border-border"
      }`}
    >
      <div className="flex gap-0.5 text-gold mb-4">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
      </div>
      <Quote className="w-6 h-6 text-gold/40 mb-3" />
      <p className={`text-sm leading-relaxed mb-6 ${light ? "text-black/70" : "text-muted-foreground"}`}>"{t.quote}"</p>
      <div className="flex items-center gap-3 pt-4 border-t border-current/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center text-primary-foreground font-bold text-sm">
          {t.initials}
        </div>
        <div>
          <div className={`text-sm font-semibold ${light ? "text-black" : "text-foreground"}`}>{t.name}</div>
          <div className="text-xs text-gold">{t.title}</div>
        </div>
      </div>
    </motion.div>
  );
}