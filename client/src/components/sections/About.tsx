import { motion } from "framer-motion";
import { Check } from "lucide-react";
import audienceBg from "@/assets/audience-bg.jpg";

const bullets = [
  "Recognized SEO & Digital Marketing Expert",
  "Speaker at conferences across North America, Asia and Europe",
  "Award-winning agency leader — Two to Watch Local SEO firms",
  "Building practical AI tools for marketers",
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.97), rgba(5,5,5,0.97)), url(${audienceBg})` }}
    >
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] leading-[0.95] tracking-tight uppercase text-white font-[100]">
            ABOUT ADAM
          </h2>
          <p className="mt-4 text-sm sm:text-base tracking-[0.28em] uppercase text-white font-semibold">
            FOUNDER OF <span className="text-[#FDD835] font-bold">ENLEAF</span>
          </p>
          <div className="mt-8 max-w-xl text-foreground/80 leading-7 space-y-6">
            <p>
              I'm an entrepreneur, speaker, and digital marketer who believes tech should empower people, not confuse them.
              Over the last 15+ years, I've helped businesses turn complex marketing challenges into massive growth
              opportunities.
            </p>
            <p>
              Today, I focus on making AI practical, data-driven, and wildly profitable — whether that's on stage, in
              client work, or through the apps and frameworks I build under the Authority Engineering banner.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:pt-20"
        >
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-5">
              <div className="w-9 h-9 flex-shrink-0 rounded-full bg-[#FDD835] flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-black" />
              </div>
              <p className="text-white text-lg font-medium leading-snug">{b}</p>
            </div>
          ))}
          <div className="pt-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-3">As a contributor to</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-80">
              {["SEMRUSH", "DIGITALMARKETER", "SURFER", "MarketMuse"].map((b) => (
                <span key={b} className="text-sm font-semibold text-foreground/80">{b}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}