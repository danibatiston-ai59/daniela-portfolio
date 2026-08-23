import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";
import Avatar from "./Avatar";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain min-h-screen flex items-center pt-28 pb-20">
      {/* background glow */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full bg-coral/25 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 -left-40 h-[30rem] w-[30rem] rounded-full bg-violet/25 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-wide uppercase text-cream/70 mb-6"
          >
            <MapPin size={12} className="text-coral" />
            {profile.location} · {profile.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            Marcas que as pessoas
            <br />
            <span className="text-gradient italic">sentem</span>, não só veem.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-lg text-cream/70 leading-relaxed"
          >
            Sou <strong className="text-cream">{profile.name}</strong>, {profile.role.toLowerCase()}.
            Transformo posicionamento, storytelling e dados em estratégias de conteúdo que geram
            engajamento real — e faturamento — sem depender de mídia paga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#cases"
              className="rounded-full bg-coral text-ink font-semibold px-7 py-3.5 hover:bg-coral-soft transition-colors"
            >
              Ver cases de resultado
            </a>
            <a
              href="#contato"
              className="rounded-full border border-white/20 px-7 py-3.5 font-medium text-cream/90 hover:border-coral hover:text-coral transition-colors"
            >
              Falar comigo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-cream/60 hover:text-coral transition-colors"
            >
              <InstagramIcon size={16} /> {profile.instagramHandle}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-cream/60 hover:text-coral transition-colors"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-coral via-violet to-gold opacity-40 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/10 overflow-hidden aspect-[4/5] shadow-2xl">
            <Avatar
              src="/images/daniela-hero.png"
              alt={profile.name}
              initials="D"
              className="h-full w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ink-soft/95 border border-white/10 px-5 py-4 backdrop-blur shadow-xl">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-display text-xl text-cream/80">R$0</p>
                <p className="text-[10px] uppercase tracking-wide text-cream/40">em ads</p>
              </div>
              <span className="font-display text-xl text-coral">→</span>
              <div>
                <p className="font-display text-2xl text-gradient">+57%</p>
                <p className="text-[10px] uppercase tracking-wide text-cream/40">em reservas</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 hover:text-coral transition-colors"
        aria-label="Rolar para próxima seção"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
