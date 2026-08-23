import { caseStudies, type CaseStudy } from "../data/content";
import Reveal from "./Reveal";

const colorMap: Record<CaseStudy["color"], { text: string; bg: string; border: string }> = {
  coral: { text: "text-coral", bg: "bg-coral/10", border: "border-coral/30" },
  violet: { text: "text-violet", bg: "bg-violet/10", border: "border-violet/30" },
  gold: { text: "text-gold", bg: "bg-gold/10", border: "border-gold/30" },
};

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const c = colorMap[cs.color];
  return (
    <Reveal delay={index * 0.1}>
      <article
        className={`relative overflow-hidden rounded-3xl border ${c.border} bg-ink-soft/60 p-8 sm:p-10 h-full flex flex-col`}
      >
        {cs.background && (
          <div className="absolute inset-0">
            <img src={cs.background} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-15 blur-[2px] scale-110" />
            <div className="absolute inset-0 bg-ink-soft/85" />
          </div>
        )}
        <div className="relative flex flex-col h-full">
        <span className={`inline-block w-fit text-xs font-semibold uppercase tracking-wide ${c.text} ${c.bg} rounded-full px-3 py-1 mb-5`}>
          {cs.tag}
        </span>

        <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-2">{cs.title}</h3>
        <p className="text-sm text-cream/50 mb-6">{cs.client}</p>

        <div className="mb-6">
          <p className="text-xs uppercase tracking-wide text-cream/40 mb-1.5">O desafio</p>
          <p className="text-cream/75 text-sm leading-relaxed">{cs.challenge}</p>
        </div>

        <div className="mb-8">
          <p className="text-xs uppercase tracking-wide text-cream/40 mb-2">A estratégia</p>
          <ul className="space-y-1.5">
            {cs.approach.map((a) => (
              <li key={a} className="text-cream/75 text-sm leading-relaxed flex gap-2">
                <span className={c.text}>—</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {cs.proof && cs.proof.length > 0 && (
          <div className="mb-8">
            <p className="text-xs uppercase tracking-wide text-cream/40 mb-2">Prova</p>
            <div
              className={`grid gap-3 ${
                cs.proof.length >= 3 ? "grid-cols-3" : cs.proof.length > 1 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {cs.proof.map((p) => (
                <figure key={p.src} className={`rounded-xl overflow-hidden border ${c.border} bg-black/20`}>
                  <img src={p.src} alt={p.alt} className="w-full h-24 sm:h-32 object-cover" loading="lazy" />
                  <figcaption className="text-[10px] sm:text-[11px] text-cream/50 px-2 py-1.5 leading-snug">
                    {p.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {cs.testimonials && cs.testimonials.length > 0 && (
          <div className="mb-8 space-y-3">
            {cs.testimonials.map((t) => (
              <blockquote
                key={t.quote}
                className={`rounded-xl border-l-2 ${c.border} bg-white/[0.03] pl-4 pr-3 py-3`}
              >
                <p className="text-cream/85 text-sm italic leading-relaxed">“{t.quote}”</p>
                <cite className={`block not-italic text-xs mt-1.5 ${c.text}`}>— {t.source}</cite>
              </blockquote>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
          {cs.results.map((r) => (
            <div key={r.label}>
              <p className={`font-display text-2xl ${c.text}`}>{r.value}</p>
              <p className="text-xs text-cream/55 mt-0.5 leading-snug">{r.label}</p>
            </div>
          ))}
        </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-28 px-6 bg-ink-soft/40">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold">Resultados</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-4">Cases que contam a história</h2>
          <p className="text-cream/65">
            Desafio, estratégia e resultado — do jeito que qualquer contratante quer ver antes de bater o martelo.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <CaseCard key={cs.title} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
