/* ==========================================================================
   PROJECTS — single source of truth
   Edit this file to add / change projects. Each entry drives BOTH the
   home-page gallery card and its detail page at /projects/<slug>.
   ========================================================================== */

// Each project has its OWN UX process. Edit a project's process.steps
// array to change its steps or how many there are — the detail page
// numbers and renders however many you list.

// The 4 real case studies. Projects 5–8 reuse these as placeholders until
// real content is added (see the `projects` array at the bottom).
const nimbus = {
  category: 'Website · Sports',
  title: 'Sporship Website - Finf Fitness Coaches',
  sub: "A Redesign for Sporship official website.",
  info: [
    { k: 'Role', v: 'Senior Product Designer' },
    { k: 'Timeline', v: '6 months' },
    { k: 'Tools', v: 'Figma' },
    { k: 'Old Site', v: 'sporship.net', href: 'https://sporship.net/' },
  ],
  overview: [
    "Sporship is a plarform that helps user find fitness coaches and choose the suitable place to exercise in Home, Gym or online",
  
  ],
  challenge: {
    intro: 'The core challenge was making the process of finding a trainer easy as possible.',
    list: [
      'User enters his basic information, location and training type',
      'Trainers are displayed according to the user inputs and user can filter or select trainer.',
      'User Selects the subscription plan.',
      'User schedule sessions.',
      'User pays and Done.',
    ],
  },
  process: {
    intro: 'I started with two weeks of user interviews and session recordings, then moved into low-fidelity flows before touching visual design. Every major screen was prototyped in the browser to test real data, not filler content.',
    steps: [
      { title: 'Research', desc: 'Interviewed trainees and coaches to understand how people currently search for and book fitness coaching.' },
      { title: 'User Flows', desc: 'Mapped the guided funnel: basic info → location → training type → coach selection → subscription → scheduling.' },
      { title: 'Wireframing', desc: 'Sketched low-fidelity flows for onboarding, coach discovery, filtering, and booking.' },
      { title: 'UI Design', desc: 'Designed the high-fidelity screens with a clean, motivating visual language.' },
      { title: 'Prototype & Test', desc: 'Built an interactive prototype and validated the full booking journey with real users.' },
    ],
  },
  results: {
    intro: 'Three months after launch, the numbers spoke for themselves:',
    cards: [
      { num: '47%', label: 'Faster time-to-insight' },
      { num: '3.2x', label: 'Faster chart rendering' },
      { num: '+22 NPS', label: 'Points after launch' },
    ],
  },
};

const fathom = {
  category: 'Fintech · Mobile · UX Research',
  title: 'Fathom — mobile banking that over 200k people use daily.',
  sub: 'End-to-end design of a mobile-first banking experience, from onboarding to everyday card controls, across iOS and Android.',
  info: [
    { k: 'Role', v: 'Product Designer' },
    { k: 'Timeline', v: 'Mar 2021 – Nov 2023' },
    { k: 'Tools', v: 'Figma, ProtoPie, Maze' },
    { k: 'Live Site', v: 'fathom.money', href: '#' },
  ],
  overview: [
    'Fathom set out to build a banking app that felt less like a bank and more like a tool people actually wanted to open. I joined as the second designer and owned the mobile experience for two and a half years.',
    'The scope covered onboarding and KYC, card controls, budgeting tools, and the visual language that tied it all together.',
  ],
  challenge: {
    intro: 'Banking apps live or die on trust, but most feel cold and bureaucratic. We needed an experience that felt warm and modern without ever feeling less secure.',
    list: [
      'Onboarding drop-off was above 60% before a redesign.',
      'Card controls were buried three levels deep in settings.',
      'Budgeting tools needed to work for both spreadsheet lovers and total beginners.',
    ],
  },
  process: {
    intro: 'I ran the redesign in close partnership with a researcher, testing prototypes with real account holders every two weeks. We rebuilt onboarding as a single guided flow and surfaced card controls as a first-class home screen action.',
    steps: [
      { title: 'Discovery', desc: 'Partnered with a researcher to uncover the trust barriers that make banking apps feel cold.' },
      { title: 'Define', desc: 'Mapped the onboarding and card-control journeys and set clear drop-off targets.' },
      { title: 'Ideate', desc: 'Explored a single guided onboarding flow and a home screen built around quick card actions.' },
      { title: 'Prototype', desc: 'Built high-fidelity prototypes in ProtoPie to nail the flows and micro-interactions.' },
      { title: 'Test & Iterate', desc: 'Ran biweekly usability tests with real account holders and refined each release.' },
    ],
  },
  results: {
    intro: 'The redesign shipped in phases over 2022, with measurable gains at each stage:',
    cards: [
      { num: '+38%', label: 'Onboarding completion' },
      { num: '200k+', label: 'Active monthly users' },
      { num: '4.7★', label: 'App store rating' },
    ],
  },
};

const solace = {
  category: 'E-commerce · Conversion · Webflow',
  title: 'Solace Commerce — a storefront rebuilt for speed and clarity.',
  sub: "A full redesign of Solace's storefront and checkout, focused on cutting friction and giving the brand room to breathe.",
  info: [
    { k: 'Role', v: 'UI/UX Designer' },
    { k: 'Timeline', v: 'Apr 2019 – Feb 2021' },
    { k: 'Tools', v: 'Webflow, Figma, GSAP' },
    { k: 'Live Site', v: 'solacecommerce.com', href: '#' },
  ],
  overview: [
    "Solace's storefront was converting well below category benchmarks, and the checkout flow — spread across five separate pages — was the biggest suspect.",
    'I led the redesign of the storefront, product pages, and checkout, and laid the groundwork for a component library the marketing team could reuse for campaigns.',
  ],
  challenge: {
    intro: "The existing site was fast to browse but slow to buy — every added click in checkout was measurably losing sales, and the visual design didn't match the quality of the product itself.",
    list: [
      'Five-step checkout with a 68% abandonment rate.',
      'Product pages reused a generic template that undersold hero products.',
      'No shared component library, so every campaign page was built from scratch.',
    ],
  },
  process: {
    intro: 'I mapped the full purchase funnel and worked with the founders to compress checkout into a single page with inline validation. Product pages were rebuilt around large imagery and social proof placed where hesitation was highest.',
    steps: [
      { title: 'Audit', desc: 'Mapped the full purchase funnel and pinpointed where the multi-step checkout was losing sales.' },
      { title: 'Define', desc: 'Set conversion goals and reframed checkout as a single-page, inline-validated experience.' },
      { title: 'Design', desc: 'Rebuilt product pages around large imagery and social proof placed where hesitation peaked.' },
      { title: 'Build', desc: 'Shipped a reusable Webflow component library so campaign pages launch in days.' },
      { title: 'Measure', desc: 'Tracked conversion and cart abandonment after launch and iterated on the data.' },
    ],
  },
  results: {
    intro: 'Within the first quarter after launch:',
    cards: [
      { num: '+31%', label: 'Checkout conversion' },
      { num: '-42%', label: 'Cart abandonment' },
      { num: '2.1x', label: 'Faster campaign builds' },
    ],
  },
};

const halo = {
  category: 'Brand Identity · Design System',
  title: 'Halo — a visual identity built to scale across every surface.',
  sub: 'A complete brand system and component library for Halo Systems, spanning product, marketing, and pitch decks.',
  info: [
    { k: 'Role', v: 'Front-End Developer & Brand Designer' },
    { k: 'Timeline', v: 'Sep 2018 – Aug 2019' },
    { k: 'Tools', v: 'Illustrator, Figma, Storybook' },
    { k: 'Live Site', v: 'halosystems.dev', href: '#' },
  ],
  overview: [
    'Halo Systems was rebranding ahead of a Series A, and needed an identity that could stretch from the product UI to investor decks without losing coherence.',
    'I led the visual identity work and then built the front-end component library that made the new brand usable by every team, not just design.',
  ],
  challenge: {
    intro: 'The old brand had no real system behind it — every team was recreating buttons, colors, and layouts slightly differently, and it showed in inconsistent decks and a dated product UI.',
    list: [
      'No documented color, type, or spacing system.',
      'Marketing and product used two different visual languages.',
      'Every new deck or one-pager started from a blank file.',
    ],
  },
  process: {
    intro: 'I designed a compact but flexible identity system — a refined mark, a restrained color palette, and a type scale — then translated it directly into a Storybook component library the whole company could pull from.',
    steps: [
      { title: 'Audit', desc: 'Reviewed every existing surface to catalog the inconsistencies across teams.' },
      { title: 'Foundations', desc: 'Defined the core tokens for color, type, spacing, and motion.' },
      { title: 'System', desc: 'Built a shared component library in Storybook, wired directly into the product code.' },
      { title: 'Rollout', desc: 'Created deck and one-pager templates so every team could adopt the new brand.' },
      { title: 'Govern', desc: 'Documented usage guidelines to keep the system consistent as it scales.' },
    ],
  },
  results: {
    intro: "The system shipped ahead of the Series A raise and is still the foundation of Halo's product today:",
    cards: [
      { num: '65+', label: 'Reusable components shipped' },
      { num: '5x', label: 'Faster deck production' },
      { num: '100%', label: 'Team adoption within a quarter' },
    ],
  },
};

export const projects = [
  {
    slug: 'project-1',
    order: 1,
    imageBase: 'project-1',
    card: { title: 'Nimbus Analytics', tag: 'SaaS · Analytics', image: 'project-1.svg', alt: 'Nimbus Analytics dashboard preview' },
    ...nimbus,
  },
  {
    slug: 'project-2',
    order: 2,
    imageBase: 'project-2',
    card: { title: 'Fathom Mobile Banking', tag: 'Fintech · Mobile', image: 'project-2.svg', alt: 'Fathom mobile banking app preview' },
    ...fathom,
  },
  {
    slug: 'project-3',
    order: 3,
    imageBase: 'project-3',
    card: { title: 'Solace Commerce', tag: 'E-commerce', image: 'project-3.svg', alt: 'Solace Commerce platform preview' },
    ...solace,
  },
  {
    slug: 'project-4',
    order: 4,
    imageBase: 'project-4',
    card: { title: 'Halo Brand System', tag: 'Brand System', image: 'project-4.svg', alt: 'Halo Systems brand identity preview' },
    ...halo,
  },
  {
    slug: 'project-5',
    order: 5,
    imageBase: 'project-1',
    card: { title: 'Project Five', tag: 'Product Design', image: 'project-5.svg', alt: 'Project five preview' },
    ...nimbus,
  },
  {
    slug: 'project-6',
    order: 6,
    imageBase: 'project-2',
    card: { title: 'Project Six', tag: 'Mobile App', image: 'project-6.svg', alt: 'Project six preview' },
    ...fathom,
  },
  {
    slug: 'project-7',
    order: 7,
    imageBase: 'project-3',
    card: { title: 'Project Seven', tag: 'Web App', image: 'project-7.svg', alt: 'Project seven preview' },
    ...solace,
  },
  {
    slug: 'project-8',
    order: 8,
    imageBase: 'project-4',
    card: { title: 'Project Eight', tag: 'Design System', image: 'project-8.svg', alt: 'Project eight preview' },
    ...halo,
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

// Previous / next in a ring, ordered by `order`.
export function getAdjacent(slug) {
  const ordered = [...projects].sort((a, b) => a.order - b.order);
  const i = ordered.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  const prev = ordered[(i - 1 + ordered.length) % ordered.length];
  const next = ordered[(i + 1) % ordered.length];
  return { prev, next };
}

// 9 slider images for a detail page: cover + 2 gallery, cycled.
export function sliderImages(imageBase) {
  const set = [
    `/assets/projects/${imageBase}-cover.svg`,
    `/assets/projects/${imageBase}-gallery-1.svg`,
    `/assets/projects/${imageBase}-gallery-2.svg`,
  ];
  return Array.from({ length: 9 }, (_, i) => set[i % set.length]);
}
