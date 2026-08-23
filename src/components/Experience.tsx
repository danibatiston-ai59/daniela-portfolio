import { Briefcase } from "lucide-react";
import { experiences } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="relative py-28 px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold">Trajetória</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">Experiência profissional</h2>
        </Reveal>

        <div className="relative border-l border-white/10 ml-3 sm:ml-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08} className="relative pl-10 sm:pl-12 pb-14 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-ink border-2 border-coral" />
              {exp.current && (
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-coral animate-ping opacity-40" />
              )}

              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-coral bg-coral/10 rounded-full px-3 py-1">
                  {exp.period}
                </span>
                {exp.current && (
                  <span className="text-xs font-semibold text-gold bg-gold/10 rounded-full px-3 py-1">
                    Atual
                  </span>
                )}
              </div>

              <h3 className="font-display text-2xl">{exp.role}</h3>
              <p className="text-cream/70 mt-1 flex items-center gap-2">
                <Briefcase size={14} className="text-cream/40" />
                <span className="font-medium text-cream/90">{exp.company}</span>
                {exp.companyDetail && <span className="text-cream/50">· {exp.companyDetail}</span>}
              </p>

              {exp.context && (
                <p className="mt-3 text-sm text-cream/50 italic border-l-2 border-white/10 pl-3">
                  {exp.context}
                </p>
              )}

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-cream/75 text-sm leading-relaxed flex gap-2">
                    <span className="text-coral mt-1.5">✦</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
