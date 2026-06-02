import { FileText, Mic, BookOpen } from "lucide-react";
import { AppCard } from "../AppCard";
import { GoldButton } from "../GoldButton";

export function Apps() {
  return (
    <section id="apps" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold uppercase font-semibold mb-3">Apps & Tools</p>
            <h2 className="display-heading text-4xl md:text-6xl">The Toolkit Behind<br />The Framework</h2>
          </div>
          <GoldButton href="#">See All Apps</GoldButton>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <AppCard icon={FileText} i={0} title="Press Release Generator" description="Turn brand wins into newsworthy releases that get picked up by media and AI engines." />
          <AppCard icon={Mic} i={1} title="Podcast Pitch Studio" description="Find, vet, and pitch the right podcasts in minutes — with personalized angles." />
          <AppCard icon={BookOpen} i={2} title="Ebook Generator" description="Produce authority-building ebooks AI search loves to cite, in days not months." />
        </div>
      </div>
    </section>
  );
}