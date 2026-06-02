import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  children,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center" : ""}
    >
      {eyebrow && (
        <div className="text-xs tracking-[0.25em] font-semibold text-gold uppercase mb-4">{eyebrow}</div>
      )}
      <h2
        className={`display-heading text-4xl md:text-5xl lg:text-6xl ${
          light ? "text-[color:var(--surface-light-foreground)]" : "text-foreground"
        }`}
      >
        {children}
      </h2>
    </motion.div>
  );
}