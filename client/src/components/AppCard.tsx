import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export function AppCard({
  icon: Icon,
  title,
  description,
  i = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  i?: number;
}) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group block rounded-2xl p-6 bg-card border border-border hover:border-gold/60 transition-all"
    >
      <div className="w-11 h-11 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-5">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>
      <div className="text-gold inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all">
        Open tool <ArrowRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
}