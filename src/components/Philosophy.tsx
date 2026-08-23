import { Quote } from "lucide-react";
import { philosophy } from "../data/content";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="relative py-24 px-6 bg-ink-soft border-y border-white/5">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <Quote className="mx-auto text-coral/60 mb-6" size={36} />
          <p className="font-display text-2xl sm:text-3xl leading-snug italic text-cream/95">
            “{philosophy.quote}”
          </p>
          <p className="mt-3 text-sm text-cream/50 tracking-wide">— {philosophy.author}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-cream/65 leading-relaxed">{philosophy.text}</p>
        </Reveal>
      </div>
    </section>
  );
}
