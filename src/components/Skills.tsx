import { languages, skillGroups, softSkills, tools } from "../data/content";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="competencias" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold">Competências</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3">O que eu entrego</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-8 mb-14">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="rounded-2xl border border-white/10 p-7 h-full bg-ink-soft/40">
                <h3 className="font-display text-xl mb-4 text-gradient">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-cream/80 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-8">
          <Reveal>
            <div className="rounded-2xl border border-white/10 p-7 bg-ink-soft/40 h-full">
              <h3 className="font-display text-xl mb-4">Plataformas & Ferramentas</h3>
              <ul className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="text-sm text-ink font-medium bg-gradient-to-br from-coral-soft to-gold rounded-full px-3 py-1.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-xl mt-8 mb-4">Comportamentais</h3>
              <ul className="space-y-2">
                {softSkills.map((s) => (
                  <li key={s} className="text-sm text-cream/75 flex gap-2">
                    <span className="text-coral">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 p-7 bg-ink-soft/40 h-full">
              <h3 className="font-display text-xl mb-4">Idiomas</h3>
              <ul className="space-y-4">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-center justify-between">
                    <span className="text-cream/85">{l.name}</span>
                    <span className="text-xs uppercase tracking-wide text-coral bg-coral/10 rounded-full px-3 py-1">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
