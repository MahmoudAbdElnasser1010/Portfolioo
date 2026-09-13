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

      <div className="cta-contacts">
        <div className="cta-contact">
          <span className="cta-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          </span>
          <a href="tel:+201110920448">+20 111 092 0448</a>
          <button type="button" className="copy-btn" data-copy="+20 111 092 0448" aria-label="Copy phone number">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </button>
        </div>

        <div className="cta-contact">
          <span className="cta-contact-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg>
          </span>
          <a href="mailto:mahmoudabdelnasser153@gmail.com">mahmoudabdelnasser153@gmail.com</a>
          <button type="button" className="copy-btn" data-copy="mahmoudabdelnasser153@gmail.com" aria-label="Copy email address">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </button>
        </div>
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
