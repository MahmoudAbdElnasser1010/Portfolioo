const experience = [
  { role: 'Senior User Experience Designer', company: 'Arcorp', date: 'Sep 2025 . Present', tags: ['Design Systems', 'Prototyping', 'User Research'] },
  { role: 'Senior Product Designer', company: 'Sporship . Part Time', date: 'Jun 2025 — Jul 2026', tags: ['User Research', 'Wireframes', 'Prototype'] },
  { role: 'Senior Product Designer', company: 'Eltizam', date: 'Jun 2024 — Sep 2025', tags: ['User Research', 'Behavioral Testing', 'Usability Testing'] },
  { role: 'Seniro Product Designer', company: 'Yallacompare', date: 'Jan 2023 — Jun 2024', tags: ['User Research', 'Behavioral Testing', 'Webflow'] },
  { role: 'Product Designer', company: 'Faydety', date: 'Jan 2022 — Jan 2023', tags: ['UI Design', 'Usability Testing'] },
  { role: 'User Experience Designer', company: 'Ischool . Part Time', date: 'Sep 2022 . Dec 2022', tags: ['Wireframes', 'Prototyping', 'User Research'] },
  { role: 'Product Designer', company: 'Euro-Asia . Project Based', date: 'May 2022 . Oct 2022', tags: ['Wireframes', 'Prototyping', 'User Research'] },
  { role: 'Product Designer', company: 'DNA GmbH', date: 'Oct 2020 . Jul 2021', tags: ['Wireframes', 'Prototyping', 'User Research'] },
  { role: 'UI/UX Designer', company: 'Al-Murafik . Internship', date: 'Nov 2019 . Dec 2019', tags: ['Wireframes', 'Prototyping', 'User Research'] },
];

const logos = [1, 2, 3, 4, 5, 6, 7, 8];
const logoAlts = {
  1: 'Nimbus logo', 2: 'Vertex Labs logo', 3: 'Northwind logo', 4: 'Solace logo',
  5: 'Quantify logo', 6: 'Fathom logo', 7: 'Halo Systems logo', 8: 'Modulate logo',
};

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Experience</span>
          <h2>Companies I&apos;ve helped build products.</h2>
          <p>A quick look at where I&apos;ve worked and what I focused on at each stop.</p>
        </div>
        <div className="exp-grid">
          {experience.map((job, i) => (
            <article key={i} className={`exp-card reveal${i >= 1 && i <= 3 ? ` reveal-delay-${i}` : ''}`}>
              <div className="exp-card-top">
                <div className="exp-info">
                  <div className="exp-role">{job.role}</div>
                  <div className="exp-company">{job.company}</div>
                </div>
                <div className="exp-date">{job.date}</div>
              </div>
              <div className="exp-tags">{job.tags.map((t, j) => <span key={j}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>

      {/* Logo marquee */}
      <div className="marquee-wrap reveal" style={{ marginTop: 80 }}>
        <div className="marquee-track" id="marqueeTrack">
          {logos.map((n) => (
            <img key={`a-${n}`} src={`/assets/logos/logo-${n}.svg`} alt={logoAlts[n]} />
          ))}
          {logos.map((n) => (
            <img key={`b-${n}`} src={`/assets/logos/logo-${n}.svg`} alt="" aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
