import Link from 'next/link';
import { getAdjacent, sliderImages } from '@/lib/projects';
import CTA from './CTA';

export default function ProjectDetail({ project }) {
  const { prev, next } = getAdjacent(project.slug);
  const slides = sliderImages(project.imageBase);

  return (
    <main id="top">
      <section className="pd-hero">
        <div className="container">
          <Link href="/#projects" className="pd-back reveal in-view">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Back to all projects
          </Link>
          <div className="pd-meta-top reveal in-view"><span>{project.category}</span></div>
          <h1 className="reveal in-view">{project.title}</h1>
          <p className="pd-sub reveal in-view reveal-delay-1">{project.sub}</p>
          <div className="pd-info-bar reveal in-view reveal-delay-2">
            {project.info.map((cell) => (
              <div className="pd-info-cell" key={cell.k}>
                <div className="k">{cell.k}</div>
                {cell.href ? <a href={cell.href} className="v">{cell.v}</a> : <div className="v">{cell.v}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <div className="pd-content">
          <aside className="pd-toc reveal">
            <div className="label">On this page</div>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#challenge">The Challenge</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#screens">Screens</a></li>
              <li><a href="#results">Results</a></li>
            </ul>
          </aside>

          <div className="pd-main">
            <div className="pd-block reveal" id="overview">
              <h2>Overview</h2>
              {project.overview.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="pd-block reveal" id="challenge">
              <h2>The Challenge</h2>
              <p>{project.challenge.intro}</p>
              <ul className="pd-list">
                {project.challenge.list.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            </div>

            <div className="pd-block reveal" id="process">
              <h2>Process</h2>
              {project.process.intro && <p>{project.process.intro}</p>}
              <ol className="pd-process">
                {project.process.steps.map((step, i) => (
                  <li className="pd-step" key={i}>
                    <span className="pd-step-num">{i + 1}</span>
                    <div className="pd-step-body">
                      <h3>{step.title}</h3>
                      {step.desc && <p>{step.desc}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="pd-block reveal" id="screens">
              <h2>Screens</h2>
              <p>A closer look at a few key screens from the final product.</p>
              <div className="pd-slider" data-pd-slider aria-roledescription="carousel" aria-label={`${project.card.title} screens`}>
                <div className="pd-slider-counter"><span className="cur">1</span> / <span className="total">{slides.length}</span></div>
                <div className="pd-slider-viewport">
                  <div className="pd-slider-track">
                    {slides.map((src, i) => (
                      <div className="pd-slide" key={i}><img src={src} alt={`${project.card.title} screen ${i + 1}`} /></div>
                    ))}
                  </div>
                </div>
                <button className="pd-slider-arrow prev" aria-label="Previous image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="pd-slider-arrow next" aria-label="Next image">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
                <div className="pd-slider-dots"></div>
              </div>
            </div>

            <div className="pd-block reveal" id="results">
              <h2>Results</h2>
              <p>{project.results.intro}</p>
              <div className="pd-results">
                {project.results.cards.map((c, i) => (
                  <div className="pd-result-card" key={i}><div className="num">{c.num}</div><div className="label">{c.label}</div></div>
                ))}
              </div>
            </div>

            <div className="pd-nav">
              <Link href={`/projects/${prev.slug}`} className="pd-nav-card reveal">
                <div className="dir">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                  Previous project
                </div>
                <h4>{prev.card.title}</h4>
              </Link>
              <Link href={`/projects/${next.slug}`} className="pd-nav-card next reveal">
                <div className="dir">
                  Next project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
                <h4>{next.card.title}</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTA variant="project" />
    </main>
  );
}
