import { Mail, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";
import Reveal from "./Reveal";

const cards = [
  {
    icon: Mail,
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}?subject=Vamos%20conversar%20sobre%20um%20projeto`,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: profile.phone,
    href: `tel:+${profile.whatsapp}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chamar no WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: profile.instagramHandle,
    href: profile.instagram,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/danibatiston",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-28 px-6 grain overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[28rem] w-[40rem] rounded-full bg-violet/20 blur-[130px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] text-coral font-semibold">Contato</span>
          <h2 className="font-display text-4xl sm:text-5xl mt-3 mb-5">
            Bora criar a próxima <span className="italic text-gradient">grande história</span> de marca?
          </h2>
          <p className="text-cream/65 max-w-xl mx-auto">
            {profile.availability}. Me chama e vamos entender o desafio da sua marca.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-soft/50 p-5 text-left hover:border-coral/50 hover:bg-coral/5 transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-coral group-hover:bg-coral group-hover:text-ink transition-colors">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-cream/40">{label}</span>
                  <span className="block text-cream/90 font-medium">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
