# Portfólio — Daniela Batiston

Site pessoal em React + TypeScript, feito para funcionar como portfólio de Social
Media: apresenta seu posicionamento, trajetória, cases com resultado e contato.

## Stack

- **React 19 + TypeScript** (via Vite)
- **Tailwind CSS v4** para estilo
- **Framer Motion** para as animações de entrada
- **lucide-react** para ícones

## Como rodar na sua máquina

Pré-requisitos: Node.js já instalado (confirmado nesta máquina).

```bash
cd daniela-portfolio
npm install       # só na primeira vez, ou se adicionar novas bibliotecas
npm run dev        # abre em http://localhost:5173, com hot-reload
```

Para gerar a versão final otimizada (a que vai para o ar):

```bash
npm run build       # gera a pasta dist/
npm run preview      # visualiza o build de produção localmente
```

## Como editar o conteúdo

Praticamente todo o texto do site (nome, resumo, experiências, cases,
competências, contato) fica centralizado em:

```
src/data/content.ts
```

Edite os textos ali — os componentes em `src/components/` só exibem o que
estiver nesse arquivo, então normalmente você não precisa mexer no resto do
código para atualizar informações.

## Como adicionar suas fotos reais

Coloque os arquivos em `public/images/` com estes nomes exatos:

- `daniela-hero.jpg` — foto de destaque da primeira seção
- `daniela-about.jpg` — foto da seção "Sobre mim"

Enquanto esses arquivos não existirem, o site mostra um monograma "D" em
gradiente no lugar da foto — nada quebra, mas fica bem mais pessoal com fotos
suas. Use fotos verticais (proporção 4:5), boa resolução (mín. 1000px de
largura).

## Como publicar o site (deixar no ar com um link)

A forma mais simples e gratuita é a **Vercel** ou o **Netlify**:

1. Crie uma conta gratuita em vercel.com (ou netlify.com).
2. Suba esta pasta para um repositório no GitHub (ou arraste a pasta
   `dist/` — gerada pelo `npm run build` — direto na Netlify, no modo
   "deploy manual").
3. Conecte o repositório e clique em "Deploy" — em 1 a 2 minutos você recebe
   um link público (ex: `daniela-batiston.vercel.app`), que depois pode
   trocar por um domínio próprio (ex: `danielabatiston.com`).

Posso te ajudar a fazer esse deploy quando quiser — é só pedir.

## Estrutura do projeto

```
src/
  components/   componentes de cada seção da página (Hero, About, Experience...)
  data/         content.ts — todo o conteúdo textual do site
  index.css     paleta de cores, fontes e estilos globais
  App.tsx       monta as seções na ordem em que aparecem na página
public/
  images/       coloque suas fotos aqui (veja seção acima)
  favicon.svg   ícone da aba do navegador
```
