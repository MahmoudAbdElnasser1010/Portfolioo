# Alex Carter — Portfolio (Black & Blue Theme)

A modern, fast, no-build-step portfolio site: plain HTML/CSS/JS, ready to deploy anywhere (GitHub Pages, Netlify, Vercel, or any static host). Everything in this folder is placeholder content — swap it for your own and it's ready to ship.

## Folder structure

```
portfolio/
├── index.html                 ← the landing page (hero, about, experience, projects, showcase, footer)
├── projects/
│   ├── project-1.html         ← "Nimbus Analytics" case study page
│   ├── project-2.html         ← "Fathom Mobile Banking" case study page
│   ├── project-3.html         ← "Solace Commerce" case study page
│   └── project-4.html         ← "Halo Brand System" case study page
├── css/
│   └── style.css              ← the entire design system (colors, layout, components, animations)
├── js/
│   └── main.js                ← navbar behavior, scroll animations, the hero-samples carousel
└── assets/
    ├── logos/                 ← 8 placeholder company logos (SVG) used in the logo slider
    └── projects/              ← placeholder project thumbnails, covers, and gallery images (SVG)
```

## How to preview it locally

No build tools needed. Either:

1. Double-click `index.html` to open it directly in a browser, or
2. Run a tiny local server (recommended, avoids some browser file:// quirks):
   ```
   cd portfolio
   python3 -m http.server 8080
   ```
   then open `http://localhost:8080`.

## How to deploy it

Any static host works — drag-and-drop the whole `portfolio` folder into Netlify, or push it to a GitHub repo and enable GitHub Pages. There's no build step.

## What to customize

**1. Your name & branding** — in `index.html`, replace every instance of "Alex Carter" (the `<title>`, the `.logo` links in the nav and footer) with your name. Update the favicon text/colors in the `<link rel="icon">` tag if you want a custom mark.

**2. Hero section** (`index.html`, `<section class="hero">`) — update the headline, sub-headline, and the four stats (years of experience, projects shipped, companies, satisfaction).

**3. About section** (`index.html`, `<section id="about">`) — replace the bio paragraphs, the skills tags, and the quick-facts card (location, focus, current role, email, résumé link).

**4. Experience / timeline** (`index.html`, `<section id="experience">`) — each `.timeline-item` is one job: role, company, dates, description, and tags. Add or remove `.timeline-item` blocks as needed.

**5. Company logos slider** — replace the SVGs in `assets/logos/` with real company logos (SVG or PNG, ideally on a transparent background), keeping the filenames or updating the `<img>` `src` attributes in the `.marquee-track` in `index.html`. The list is duplicated once in the HTML for a seamless infinite scroll — update both copies (or just remove the duplicate list if you have 10+ logos, since it stops feeling repetitive at that point).

**6. Projects section** — each `.project-card` in `index.html` links to a page in `projects/`. To update a project:
   - Replace the thumbnail image in the card (`assets/projects/project-N.svg`) with a real screenshot.
   - Edit the title, tag, and short description directly in `index.html`.
   - Open the matching `projects/project-N.html` file and edit the case-study content: role, timeline, tools, live link, overview, challenge, approach, gallery images, and results stats.
   - To add a **5th project**, copy an existing `.project-card` block and an existing `projects/project-N.html` file, then update the prev/next links (`.pd-nav` at the bottom of each project page) so the case studies link to each other in the right order.

**7. Hero-samples showcase** (`index.html`, `<section id="showcase">`) — each `.carousel-slide` is a mocked-up browser window showing one hero design sample. Replace the `url` text, eyebrow label, headline, subtext, and button labels with your real project names. If you'd rather show real screenshots instead of the CSS mockups, replace the `.mock-hero` div's contents with an `<img>` tag.

**8. Contact info** — update the `mailto:` links (there are a few — hero card, CTA section, and footer) and the résumé download link (`#` placeholder — point it at a real PDF).

**9. Colors** — everything runs off CSS variables at the top of `css/style.css` under `:root`. The key ones:
   - `--bg`, `--bg-soft`, `--bg-elevated` — the black/near-black backgrounds
   - `--blue-500` / `--blue-600`, `--cyan-400` — the blue accent system
   - `--grad-primary`, `--grad-text` — the gradients used on buttons and headline text
   Change these and the whole site re-themes automatically.

**10. Fonts** — the site uses "Space Grotesk" (headings) and "Inter" (body) from Google Fonts, loaded at the top of `css/style.css`. Swap the `@import` URL and the `font-family` values to change them.

## Notes

- The site is fully responsive with a mobile nav menu (hamburger below 720px).
- Animations (scroll-reveal, marquee, carousel) are handled in `js/main.js` with no external dependencies.
- All icons are inline SVG — no icon font or library required.
