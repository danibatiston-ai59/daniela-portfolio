/**
 * Resolve um caminho de imagem em public/ (ex.: "/images/foto.png") levando em
 * conta o `base` configurado no vite.config.ts — necessário porque o site é
 * publicado num subcaminho no GitHub Pages (ex.: /daniela-portfolio/), então
 * um src absoluto começando com "/" apontaria pra fora do subcaminho.
 */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
