import { profile, stats, summary } from "../data/content";
import Avatar from "./Avatar";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <Reveal>
          <div className="relative w-full max-w-xs mx-auto md:mx-0">
            <div className="absolute -inset-3 rounded-3xl border border-coral/30" />
            <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-white/10">
              <Avatar
                src="/images/daniela-about.png"
                alt={profile.name}
                initials="D"
                className="h-full w-full"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold">Sobre mim</span>
            <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-6 leading-tight">
              Estratégia com <span className="italic text-gradient">alma</span>, não só métrica.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-cream/75 text-lg leading-relaxed">{summary}</p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-coral/50 pl-4">
                  <p className="font-display text-3xl text-gradient">{s.value}</p>
                  <p className="text-sm text-cream/60 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
