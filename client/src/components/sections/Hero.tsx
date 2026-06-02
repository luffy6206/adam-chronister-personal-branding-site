import { motion } from "framer-motion";
import heroImg from "@/assets/hero-speaker.jpg";
import audienceBg from "@/assets/audience-bg.jpg";
import { GoldButton } from "../GoldButton";

const featured = ["WIRED", "MarketWatch", "TechCrunch", "Business Insider", "WSJ"];

export function Hero() {
    return (
        <section
            className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.95) 100%), url(${audienceBg})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background pointer-events-none" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                        <h1
  className="
    text-4xl
    sm:text-5xl
    md:text-[4rem]
    lg:text-[5rem]
    uppercase
    text-white
  "
  style={{
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 200,
    lineHeight: 0.92,
    letterSpacing: "-0.02em",
  }}
>
  <span className="text-[#E8C13A]">I'M</span> ADAM
  <br />
  CHRONISTER
</h1>
                    <p className="mt-6 max-w-2xl text-base md:text-lg text-white leading-relaxed">
                        I help <span className="text-[#FDD835]">businesses grow</span> smarter with
                        <br />
                        <span className="text-[#FDD835]">data-driven, AI-backed marketing.</span>
                    </p>
                    <div className="mt-8 space-y-2">
                        <p className="text-base md:text-lg text-white">Digital Marketing Expert</p>
                        <p className="text-sm md:text-base text-white tracking-wider font-semibold uppercase">
                            AI INNOVATOR <span className="text-white">|</span> INVESTOR
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <GoldButton href="/authority-book">READ THE BOOK</GoldButton>
                        <GoldButton href="#about" variant="outline">ABOUT AUTHOR</GoldButton>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 bg-gold/20 blur-3xl rounded-full" />
                    <img
                        src={heroImg}
                        alt="Adam Chronister speaking on stage"
                        width={1024}
                        height={1024}
                        className="relative rounded-2xl object-cover w-full max-w-[28rem] sm:max-w-[32rem] md:max-w-[36rem] h-auto mx-auto"
                    />
                </motion.div>
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-border/60">
                <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center justify-between">
                    <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">As featured in:</span>

                    <div className="flex-1 min-w-0 overflow-hidden">
                        <div className="marquee flex gap-12 items-center whitespace-nowrap opacity-90">
                            {featured.concat(featured).map((f, i) => (
                                <span key={`${f}-${i}`} className="text-white font-bold text-sm md:text-base tracking-wider px-2">{f}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .marquee { display: inline-flex; animation: marquee 20s linear infinite; }
                @media (prefers-reduced-motion: reduce) { .marquee { animation: none; } }`}</style>
            </div>
        </section>
    );
}