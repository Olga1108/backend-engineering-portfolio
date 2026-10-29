# Olha Razvaliaieva — Backend Engineering Portfolio

A lightweight personal portfolio built with Next.js App Router, TypeScript and CSS Modules. The homepage covers the hero, Selected Impact, engineering work, engineering principles, system-design patterns, product context, mentorship and experience, with responsive navigation and a contact footer.

## Development

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js (usually http://localhost:3000).

```sh
npm run build
npm start
```

## Structure

- `src/app/` — route composition, metadata and global design tokens.
- `src/components/layout/` — site header and footer.
- `src/components/sections/` — hero, impact metrics and engineering work.
- `src/components/diagrams/` — accessible SVG architecture diagrams and card illustrations.
- `src/components/ui/` — small shared elements.
- `src/data/` — JSON content and TypeScript content types.
- `public/documents/` — downloadable resume.

Content renders on the server. Only the responsive navigation needs a client component. Engineering notes use native HTML disclosure controls. There are no runtime content requests, animation libraries, UI frameworks or backend services.

## Content conventions

Metrics and engineering notes are grounded in the supplied CV. Universal Versioning Platform is explicitly marked as implementation in progress. Diagrams are simplified explanations, not production infrastructure specifications. Full case-study routes are planned for a later iteration. System-design cards and experience entries expose short notes through native disclosure controls.

Update the JSON files to edit text, metrics, technologies and professional links. Local component styles live beside each component; shared palette and layout tokens live in `src/app/globals.css`. The `--section-space` token sets section padding on desktop and mobile; adjacent sections combine to create the space between logical blocks.

## Vercel

The project uses the standard Next.js build and can be imported into Vercel from GitHub. Configure the canonical URL and social preview image when the deployment domain is selected. No environment variables are required. Deployment has not been configured in this iteration.
