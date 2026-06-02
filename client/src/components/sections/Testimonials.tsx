import { SectionTitle } from "../SectionTitle";
import { TestimonialCard, type Testimonial } from "../TestimonialCard";
import { GoldButton } from "../GoldButton";

export const testimonials: Testimonial[] = [
  {
    name: "J.C. Hight",
    title: "Founder, Hight & Co.",
    quote: "Adam Chronister is a true thought leader in our industry. His insights are second to none.",
    initials: "JC",
  },
  {
    name: "Kyle Roof",
    title: "Founder, PageOptimizer Pro",
    quote: "His ability as an engaging speaker will be a real asset for your conference.",
    initials: "KR",
  },
  {
    name: "Marty Surgery",
    title: "CEO, Authority Media",
    quote: "I was really impressed with his stage presence, speaking style, and valuable insights.",
    initials: "MS",
  },
];

export function Testimonials({ light = true }: { light?: boolean }) {
  return (
    <section className={light ? "bg-surface-light py-24 md:py-32" : "py-24 md:py-32"}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs tracking-[0.25em] text-gold uppercase font-semibold mb-3">Industry Leaders</p>
            <SectionTitle light={light}>
              What people say<br />after sharing the stage
            </SectionTitle>
          </div>
          <GoldButton href="#">Read All Reviews</GoldButton>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} i={i} light={light} />)}
        </div>
      </div>
    </section>
  );
}