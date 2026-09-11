import Link from 'next/link';
import { projects } from '@/lib/projects';

const behancePath = 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.211 8.061zM3 11h3.586c2.442 0 2.84-3-.397-3H3v3zm3.194 3H3v3.016h3.186c3.071 0 2.884-3.016.008-3.016z';

function Arrow() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>;
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Selected Work</span>
          <h2>Projects I&apos;m proud to have shipped.</h2>
          <p>A mix of dashboards, mobile apps, and commerce platforms — each with its own set of constraints and a story worth telling.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`work-card reveal${i % 4 === 0 ? '' : ` reveal-delay-${i % 4}`}`}
              aria-label={`${p.card.title} — view project`}
            >
              <div className="work-media"><img src={`/assets/projects/${p.card.image}`} alt={p.card.alt} /></div>
              <div className="work-overlay">
                <span className="work-tag">{p.card.tag}</span>
                <div className="work-foot">
                  <h3 className="work-title">{p.card.title}</h3>
                  <span className="work-cta">View project <Arrow /></span>
                </div>
              </div>
            </Link>
          ))}

          <a href="#" className="work-card work-behance reveal reveal-delay-4" target="_blank" rel="noopener" aria-label="See more work on Behance">
            <span className="behance-dot"></span>
            <div className="behance-logo">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d={behancePath} /></svg>
            </div>
            <div className="behance-foot">
              <span className="behance-eyebrow">More Work</span>
              <h3>Behance</h3>
              <span className="behance-visit">Visit <Arrow /></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
