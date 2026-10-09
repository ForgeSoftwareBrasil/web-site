# Forge Software — Landing Page

Landing page da Forge Software, uma software house e consultoria em tecnologia. Construída com Next.js (App Router), TypeScript estrito e SASS/CSS Modules.

## Stack

- **Next.js 16** (App Router)
- **TypeScript** (strict mode)
- **SASS** (variáveis, mixins e CSS Modules por componente)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — serve o build de produção
- `npm run lint` — ESLint

## Estrutura

```
src/
  app/            # layout.tsx, page.tsx, globals.scss
  components/     # um componente por seção (Hero, About, Services, ...)
  data/           # conteúdo tipado (serviços, diferenciais, depoimentos)
  hooks/          # useScrollReveal (Intersection Observer)
  lib/            # constantes (WhatsApp, contato, redes sociais)
  styles/         # variáveis e mixins SASS compartilhados
  types/          # interfaces TypeScript
```

## Placeholders a substituir

- Fotos de depoimentos em `src/data/testimonials.ts` (Assim que fecharmos com os primeiros clientes)

## Deploy

Otimizado para deploy direto na [Vercel](https://vercel.com/new).
