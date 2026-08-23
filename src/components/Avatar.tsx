import { useState } from "react";

/**
 * Mostra a foto em /public/images/<src> se ela existir; caso contrário,
 * cai graciosamente para um monograma em gradiente — assim o site nunca
 * quebra enquanto as fotos reais não são adicionadas.
 */
export default function Avatar({
  src,
  alt,
  initials = "D",
  className = "",
}: {
  src: string;
  alt: string;
  initials?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-coral via-violet to-gold ${className}`}
      >
        <span className="font-display text-6xl text-ink/90">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}
