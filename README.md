# Sheyra's Birthday Surprise 🎂

A personal birthday surprise website built with React, TanStack Start, and Tailwind CSS.

## Editing content

All personal content — name, photos, letter, wishes, and messages — lives in one file:

```
src/data/birthday.ts
```

Put the six photos in `public/photos/` named `sheyra-1.jpg` through `sheyra-6.jpg`
(or update the paths in `birthday.ts`). Put the background music file in
`public/music/` and reference it via `musicSrc`.

## Development

Requires Node.js (or Bun).

```sh
npm i
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploy

This project deploys as a standard Vite + TanStack Start app — compatible with
Vercel, Netlify, or any Node-based host.
