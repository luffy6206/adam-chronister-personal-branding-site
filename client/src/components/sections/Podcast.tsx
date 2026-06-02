import { motion } from "framer-motion";
import { Play, Pause, Headphones } from "lucide-react";
import audienceBg from "@/assets/audience-bg.jpg";
import { GoldButton } from "../GoldButton";

const episodes = [
  { title: "Authority Engineering: Why AI Search is the New SEO", duration: "42:13" },
  { title: "Building Brands That Algorithms Actually Recommend", duration: "38:05" },
  { title: "Marketing in the Age of LLMs with Marty Surgery", duration: "51:22" },
  { title: "The Death of Traditional SEO is Greatly Exaggerated", duration: "29:48" },
  { title: "How To Become a Cited Source for ChatGPT", duration: "44:11" },
  { title: "Inside Enleaf: Scaling a Modern Agency", duration: "36:30" },
];

export function Podcast() {
  return (
    <section
      id="podcast"
      className="relative py-24 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.92), rgba(5,5,5,0.98)), url(${audienceBg})` }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold uppercase font-semibold mb-3">Podcast Appearances</p>
            <h2 className="display-heading text-4xl md:text-6xl">Featured Conversation</h2>
          </div>
          <GoldButton href="#"><Headphones className="w-4 h-4 mr-1" />Listen Now</GoldButton>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-card/80 backdrop-blur border border-border overflow-hidden"
        >
          <div className="p-6 flex items-center gap-4 border-b border-border">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-gold to-amber-700 flex items-center justify-center text-primary-foreground font-bold">
              AC
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold truncate">Adam Chronister · Podcast Appearances</div>
              <div className="text-xs text-muted-foreground mt-1">Spreaker · 12 episodes</div>
            </div>
            <button className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-primary-foreground hover:scale-105 transition">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </button>
          </div>
          <ul className="divide-y divide-border">
            {episodes.map((ep, i) => (
              <li key={ep.title} className="flex items-center gap-4 px-6 py-4 hover:bg-secondary/40 transition group">
                <span className="text-xs text-muted-foreground w-6">{i + 1}</span>
                <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-gold group-hover:text-gold transition">
                  {i === 0 ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 ml-0.5 fill-current" />}
                </button>
                <span className="flex-1 text-sm text-foreground/90 truncate">{ep.title}</span>
                <span className="text-xs text-muted-foreground">{ep.duration}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}