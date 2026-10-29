# Faber Concrete

Marketing site for [Faber Concrete](https://faberconcrete.com), a Michigan concrete contractor (driveways, approaches, and flatwork) owned by Matt Faber. Separate brand from Faber Roof.

Built by Stoke Leads. Stack matches the sister site: Astro, static output, deployed later with Wrangler as a Cloudflare Worker serving static assets.

Copy on the site comes from Matt’s call. Nothing here invents a review, a project, a phone number, an address, or a license.

## Run

```bash
npm install
npm run dev
```

Dev server: http://127.0.0.1:43219

```bash
npm run build    # writes ./dist and dist/_redirects
npm run preview  # serve the production build locally
```

## Deploy to Cloudflare

The site is a static Astro build plus a tiny Worker. The Worker only runs for `/photos` and answers with a **302** to the upload link. Every other path is a static asset.

1. Fill the placeholders below. The upload URL lives in one place: `photoUploadUrl` in `src/config/site.ts`.
2. `npx wrangler login` (Mauricio’s Cloudflare account, after Matt adds him).
3. From this directory:

```bash
npm run deploy
```

That runs `astro build` and then `wrangler deploy`. Config is `wrangler.toml` (`assets.directory = ./dist`, `run_worker_first` for `/photos`).

First deploy can pass `--name faberconcrete` if the Worker name needs creating. Attach the `faberconcrete.com` zone and route in the Cloudflare dashboard when the domain is on the account. This repo does not set a production route, so a deploy cannot start serving the live domain by accident.

`/photos` is also written to `dist/_redirects` as a 302, and `astro dev` redirects that path the same way. Change the URL only in `src/config/site.ts`.

## Images

`src/components/Picture.astro` takes an AVIF URL and a WebP URL (plus alt text). Job photos from https://media.stokeleads.com go in `src/data/gallery.ts` as `{ avif, webp, alt, caption }`. The gallery page is an empty state until that list has real photos.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home, spec, spring booking |
| `/services/driveways` | Driveways and approaches |
| `/services/flatwork` | Flatwork |
| `/why-our-concrete-lasts` | 5-inch slab and 21AA base |
| `/gallery` | Photo grid, empty until real jobs are added |
| `/estimate` | Estimate form |
| `/photos` | 302 to the Stoke Leads upload URL |

## Placeholders Mauricio needs to fill

All of these are in `src/config/site.ts` unless noted.

| Token | Where it shows up | Replace with |
| --- | --- | --- |
| `[TOKEN]` | `photoUploadUrl` → `/photos` 302 | The real Stoke Leads upload path, `https://upload.stokeleads.com/c/<TOKEN>` |
| `[LEAD_ENDPOINT]` | `leadEndpoint`, estimate form `action` | CRM or webhook URL that accepts the form `POST` (name, phone, email, city, project, timing, message) |
| `[PHONE]` | Header is not phone-first; footer, estimate page, and LocalBusiness `telephone` once it is a real number | Matt’s concrete line |
| `[EMAIL]` | Footer, estimate page, schema `email` once real | Concrete inbox |
| `[LEGAL_NAME]` | LocalBusiness `legalName` | Legal entity name. Not assumed to match the roofing company. |
| `[STREET_ADDRESS]` | Footer and schema `streetAddress` | Shop or mailing street |
| `[CITY]` | Footer, schema `addressLocality` | City. The site only claims Michigan until this is set. |
| `[ZIP]` | Footer and schema | ZIP |
| `[LICENSE]` | Footer | License number, or remove the line if none is published |

Also still open, not guessed:

- Job photos in `src/data/gallery.ts` (no sample images are shipped).
- A logo file, if Matt wants a mark besides the text wordmark in `src/components/Wordmark.astro`.
- Service-area cities, once Matt names them. Schema currently says the state of Michigan only.
- Business hours. Not stated on the call, so they are omitted.

Do not paste the roofing site’s phone, address, or reviews onto this site. Matt asked for the brands to stay separate.
