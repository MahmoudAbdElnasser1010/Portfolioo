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
  title: 'Sporship Website',
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
      { title: 'User Flows', desc: 'Mapped the guided funnel: basic info → location → training type → coach selection → subscription → scheduling → Also the profile management for the trainee.' },
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
  category: 'Dashboard · UX Research',
  title: 'PPK — Price Per Kilometer (Altalayi - Bridgestone).',
  sub: 'End-to-end design of strategic financial solution tailored for fleet operators.',
  info: [
    { k: 'Role', v: 'Product Designer' },
    { k: 'Timeline', v: 'Mar 2021 – Nov 2022' },
    { k: 'Tools', v: 'Figma, ProtoPie' },
    { k: 'Live Site', v: 'PPK', href: 'https://al-talayi.com.sa/products/fleet-solution/price-per-kilometer-ppk/' },
  ],
overview: [
  `Al Talayi’s Price Per Kilometer (PPK) Platform offers a strategic financial solution tailored for fleet operators.
Instead of traditional upfront tire investments, our model allows you to pay only for the distance your fleet travels each month, ensuring cost alignment with actual usage.
Paired with Bridgestone’s premium quality, long-lasting tires, the PPK Platform delivers exceptional performance, durability, and financial efficiency.
It’s a smarter way to manage tire expenses while maintaining the highest standards of safety and reliability.`,
],
  challenge: {
    intro: 'Managing fleet tires involves complex data, costs, maintenance, and performance tracking. The challenge was to turn this complexity into a simple, intuitive experience that helps fleet managers easily monitor tire performance and understand their Price Per Kilometer (PPK) costs.',
    list: [
      'Admin Uploads or adds tire families.',
      'Admin Uploads or adds list of trucks and companies.',
      'Admin assigns tires on each truck.',
      'The system tracks truck\'s milage.',
      'System calculates the PPK for each truck and fleet.',
    ],
  },
  process: {
    intro: 'I worked closely with stakeholders to validate the PPK experience, testing and refining the product around real fleet management needs. We simplified complex tire and cost data into a clear workflow, making key PPK insights and actions easier to access and understand.',
    steps: [
      { title: 'Discovery', desc: 'Worked closely with stakeholders to understand fleet managers’ workflows, challenges, and the complexity of tire and PPK data.' },
      { title: 'Define', desc: 'Mapped key PPK workflows, from fleet and tire management to cost tracking, and identified opportunities to simplify complex information.' },
      { title: 'Ideate', desc: 'Explored dashboard structures and workflows that make tire performance, costs, and PPK insights easier to understand and act on.' },
      { title: 'Prototype', desc: 'Built high-fidelity prototypes in ProtoPie to nail the flows and micro-interactions.' },
      { title: 'Test & Iterate', desc: 'Tested the experience with stakeholders, gathered feedback, and iterated on the workflows to create a clearer and more efficient PPK platform.' },
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
    card: { title: 'Nimbus Analytics', tag: 'SaaS · Analytics', image: 'project-1.svg', alt: 'Nimbus Analytics dashboard preview' },
    ...nimbus,
  },
  {
    slug: 'PPK',
    order: 2,
    card: { title: 'Fathom Mobile Banking', tag: 'Fintech · Mobile', image: 'project-2.svg', alt: 'Fathom mobile banking app preview' },
    ...fathom,
  },
  {
    slug: 'project-3',
    order: 3,
    card: { title: 'Solace Commerce', tag: 'E-commerce', image: 'project-3.svg', alt: 'Solace Commerce platform preview' },
    ...solace,
  },
  {
    slug: 'project-4',
    order: 4,
    card: { title: 'Halo Brand System', tag: 'Brand System', image: 'project-4.svg', alt: 'Halo Systems brand identity preview' },
    ...halo,
  },
  {
    slug: 'project-5',
    order: 5,
    card: { title: 'Project Five', tag: 'Product Design', image: 'project-5.svg', alt: 'Project five preview' },
    ...nimbus,
  },
  {
    slug: 'project-6',
    order: 6,
    card: { title: 'Project Six', tag: 'Mobile App', image: 'project-6.svg', alt: 'Project six preview' },
    ...fathom,
  },
  {
    slug: 'project-7',
    order: 7,
    card: { title: 'Project Seven', tag: 'Web App', image: 'project-7.svg', alt: 'Project seven preview' },
    ...solace,
  },
  {
    slug: 'project-8',
    order: 8,
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
