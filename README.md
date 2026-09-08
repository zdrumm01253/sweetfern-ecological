# Sweetfern Ecological Design

A photographic portfolio and interactive landscape design website for Sweetfern Ecological Design. Includes Morningside, Pool Terrace, Meadow & Paths, Pond Restoration, Bowman Residence, and Bell’s Pond, plus landscape design, project management, stewardship, approach, about, and contact pages.

The Bowman and Bell’s Pond case studies include concept comparisons, interactive plans, zoomable illustrations, planting reference mosaics, and searchable planting palettes. Original documents and collaboration credits accompany the work. Sedum-roof and path-light images are generated placeholders awaiting project photography.

## Development

Requires Node.js 22.13 or later and npm.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

Next.js exports all routes into `out/`. Interactive features run in the browser; no application server, database, or secret environment variables are required. Project and service routes are generated from `lib/projects.ts` and `lib/services.ts`. The contact form prepares a message for the visitor’s email application; it does not send mail from a server.

## GitHub Pages

The workflow builds pull requests for review. Publishing is restricted to the owner's repository on `main`; pull requests and forks do not publish the site. In repository Settings → Pages, select **GitHub Actions** as the build source. The existing custom domain, `sweetfernecodesign.com`, is preserved in `CNAME` and `public/CNAME`. The site uses root-relative URLs and is configured for that custom domain, rather than a repository subpath.

The existing `CODEOWNERS` file remains in place. The repository owner controls review, merging, Pages settings, and domain activation. Private Sites hosting identifiers and credentials are not included.

## Content

- Project content: `lib/projects.ts`, `lib/project-details.ts`, `lib/plan-studies.ts`, and `lib/study-narratives.ts`.
- Service content: `lib/services.ts`.
- Photography and drawings: `public/images`, `public/studies`, `public/portfolio`, and `public/plansets`.
- Replace the generated placeholders at `public/images/placeholders/` when project photos are available, then update the corresponding image descriptions and notes in `lib/services.ts`.

Retain the design and image credits when editing project content.
