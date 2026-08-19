# diogomonica.com

Static personal hub for Diogo Mónica. Replaces the abandoned 2015 Jekyll tree.

Essays live on [blog.diogomonica.com](https://blog.diogomonica.com). This repo is the apex site only.

## Stack

Astro 5, static output, Geist, dark canvas. Same family as the blog.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`. The homepage, `/llms.txt`, `/robots.txt`, and `/sitemap.xml` are real files in that directory (not an empty `#root` shell).

## Cloudflare Pages

Create a Pages project pointed at this repository (Jane will attach the custom domain after merge).

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | `22` |

`wrangler.toml` sets `pages_build_output_dir = "./dist"` so Wrangler and Pages agree on the output folder.

Preview the built site locally:

```bash
npm run build
npx wrangler pages dev dist
```
