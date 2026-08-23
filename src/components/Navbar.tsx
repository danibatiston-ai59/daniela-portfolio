import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#cases", label: "Cases" },
  { href: "#competencias", label: "Competências" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight text-cream">
          daniela<span className="text-coral">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-cream/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-coral transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-cream/70 hover:text-coral transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-cream/70 hover:text-coral transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="#contato"
            className="rounded-full bg-coral text-ink text-sm font-semibold px-5 py-2 hover:bg-coral-soft transition-colors"
          >
            Vamos conversar
          </a>
        </div>

        <button
          className="md:hidden text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ink border-b border-white/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-cream/85 hover:text-coral"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-4 pt-3">
                <a href={profile.instagram} target="_blank" rel="noreferrer" className="text-cream/70">
                  <InstagramIcon size={18} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-cream/70">
                  <LinkedinIcon size={18} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
