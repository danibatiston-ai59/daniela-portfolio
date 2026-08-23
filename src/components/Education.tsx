import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "../data/content";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="relative py-28 px-6 bg-ink-soft/40 border-y border-white/5">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="text-coral" size={20} />
              <h2 className="font-display text-3xl">Formação acadêmica</h2>
            </div>
          </Reveal>
          <div className="space-y-6">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 p-6 bg-ink/40">
                  <p className="text-xs text-coral font-semibold uppercase tracking-wide mb-1">{e.period}</p>
                  <h3 className="font-display text-xl">{e.degree}</h3>
                  <p className="text-cream/60 text-sm mt-1">{e.school}</p>
                  {e.detail && <p className="text-cream/70 text-sm mt-3 leading-relaxed">🏆 {e.detail}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-8">
              <Award className="text-coral" size={20} />
              <h2 className="font-display text-3xl">Certificações & cursos</h2>
            </div>
          </Reveal>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 p-5 bg-ink/40 flex items-start gap-3">
                  <span className="text-coral mt-0.5">✦</span>
                  <div>
                    <p className="text-cream/90 font-medium leading-snug">{c.name}</p>
                    <p className="text-cream/50 text-sm mt-0.5">{c.school}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
