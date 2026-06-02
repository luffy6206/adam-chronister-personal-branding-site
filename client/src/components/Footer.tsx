import audienceBg from "@/assets/audience-bg.jpg";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 mt-0 bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(180deg, rgba(5,5,5,0.95), rgba(5,5,5,0.98)), url(${audienceBg})` }}
    >
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem" }}>Adam Chronister</div>
          <p className="text-muted-foreground text-sm mt-4 max-w-sm">
            Helping brands build authority in the age of AI. Speaker, author, and founder of Enleaf.
          </p>
        </div>
        <FooterCol title="Site" items={["Home", "About", "Book", "Podcast"]} />
        <FooterCol title="Authority" items={["The Book", "Apps", "Speaking", "Press"]} />
        <FooterCol title="Connect" items={["Twitter", "LinkedIn", "Instagram", "YouTube"]} />
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Adam Chronister. All rights reserved.</p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Facebook className="w-4 h-4 hover:text-gold cursor-pointer" />
          <Twitter className="w-4 h-4 hover:text-gold cursor-pointer" />
          <Instagram className="w-4 h-4 hover:text-gold cursor-pointer" />
          <Linkedin className="w-4 h-4 hover:text-gold cursor-pointer" />
          <Youtube className="w-4 h-4 hover:text-gold cursor-pointer" />
        </div>
        <p className="text-xs text-muted-foreground">
          Powered by <span className="text-gold font-semibold">ENLEAF</span>
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs tracking-widest text-gold uppercase font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
        ))}
      </ul>
    </div>
  );
}