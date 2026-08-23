import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-cream/40">
        <p>
          © {new Date().getFullYear()} {profile.fullName}. Todos os direitos reservados.
        </p>
        <p>Feito com React, Tailwind CSS e Framer Motion.</p>
      </div>
    </footer>
  );
}
