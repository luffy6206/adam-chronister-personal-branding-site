import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/.+@.+\..+/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent! Adam will be in touch.");
    }, 700);
  };

  return (
    <section id="contact" className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem" }} className="text-black/80">Adam Chronister</p>
          <p className="text-xs tracking-[0.25em] text-gold uppercase font-bold mt-4 mb-3">Connect with Adam</p>
          <h2 className="display-heading text-4xl md:text-6xl text-[color:var(--surface-light-foreground)]">Let's Talk<br />Authority</h2>
          <p className="mt-6 text-black/70 max-w-md leading-relaxed">
            Speaking inquiries, consulting, podcast bookings, or just to say hello — the fastest way to reach me is below.
          </p>
          <p className="text-xs tracking-widest uppercase text-black/50 mt-10 mb-3">Connect with Adam</p>
          <div className="flex gap-3 text-gold">
            <Facebook className="w-5 h-5 hover:scale-110 transition cursor-pointer" />
            <Twitter className="w-5 h-5 hover:scale-110 transition cursor-pointer" />
            <Instagram className="w-5 h-5 hover:scale-110 transition cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:scale-110 transition cursor-pointer" />
            <Youtube className="w-5 h-5 hover:scale-110 transition cursor-pointer" />
          </div>
        </div>

        <form onSubmit={onSubmit} className="bg-[#1a1a1a] rounded-2xl p-8 border border-black/40">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Query</h3>
          <Field label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          <div className="mb-5">
            <label className="text-xs tracking-widest uppercase text-white/60 font-semibold">Message</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-2 text-white"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-primary-foreground font-bold py-3 rounded-md hover:brightness-110 transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="mb-5">
      <label className="text-xs tracking-widest uppercase text-white/60 font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-transparent border-b border-white/20 focus:border-gold outline-none py-2 text-white"
        placeholder={label}
      />
    </div>
  );
}