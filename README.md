# diogomonica.com

Static personal hub for Diogo Mónica. Replaces the abandoned 2015 Jekyll tree.

Essays live on [blog.diogomonica.com](https://blog.diogomonica.com). This repo is the apex site only.

## Stack

Astro, static output, Geist, dark canvas. Same family as the blog.

Agent Markdown is negotiated at the Cloudflare Pages edge by `functions/_middleware.ts`. The Astro app stays `output: "static"`. Middleware does not run on prerendered HTML at request time, so converting the whole site to `output: "server"` is unnecessary. Cloudflare "Markdown for Agents" is a dashboard toggle and is not enabled from this repo.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/`. The homepage, trust pages, `/llms.txt`, `/robots.txt`, `/sitemap.xml`, and sibling `.md` files are real files in that directory (not an empty `#root` shell).

## Test

```bash
npm test
```

## Cloudflare Pages

Create a Pages project pointed at this repository (Jane will attach the custom domain after merge).

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js version | `22` |

`wrangler.toml` sets `pages_build_output_dir = "./dist"` so Wrangler and Pages agree on the output folder. Deploy also uploads `functions/`.

Preview the built site locally:

```bash
npm run build
npx wrangler pages dev dist
```
