import Link from 'next/link';

function Box({ variant }) {
  return (
    <div className="cta-box reveal">
      <span className="eyebrow" style={{ justifyContent: 'center' }}>Let&apos;s Work Together</span>
      <h2>Have a project in mind? <br />Let&apos;s build something powerful.</h2>
      <p>I&apos;m currently taking on a limited number of freelance projects and full-time opportunities for Q3 2026.</p>
      <div className="cta-actions">
        <a href="mailto:mahmoudabdelnasser153@gmail.com" className="btn btn-primary">
          Email me
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
        </a>
        {variant === 'project' ? (
          <Link href="/#projects" className="btn btn-ghost">See all projects</Link>
        ) : (
          <a href="/assets/Mahmoud.N.pdf" className="btn btn-ghost" download>Download résumé</a>
        )}
      </div>
    </div>
  );
}

export default function CTA({ variant }) {
  if (variant === 'project') {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <Box variant="project" />
      </div>
    );
  }
  return (
    <section className="section" id="contact">
      <div className="container">
        <Box />
      </div>
    </section>
  );
}
