import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Variant = "gold" | "outline" | "dark";

export function GoldButton({
  children,
  variant = "gold",
  className = "",
  ...rest
}: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3 text-sm font-bold rounded-lg transition-all duration-200 hover:-translate-y-1 uppercase tracking-wider";
  const styles: Record<Variant, string> = {
    gold: "bg-[#FDD835] text-black hover:brightness-110 shadow-lg shadow-gold/50",
    outline: "border-2 border-white text-white hover:bg-white/10",
    dark: "bg-secondary text-foreground hover:bg-secondary/80 border border-border",
  };
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...rest}>
      {children}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  );
}