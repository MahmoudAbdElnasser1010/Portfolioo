export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow"></div>
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="reveal in-view">I design &amp; build <span className="text-gradient">digital products</span> that move fast and feel alive.</h1>
            <p className="hero-sub reveal in-view reveal-delay-1">Product designer &amp; UI/UX Designer with 5+ years turning ambiguous ideas into sharp, usable interfaces for startups, scale-ups, and everything in between.</p>
            <div className="hero-actions reveal in-view reveal-delay-2">
              <a href="#projects" className="btn btn-primary">
                View my work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7V16" /></svg>
              </a>
              <a href="/assets/Mahmoud.N.pdf" className="btn btn-ghost" download>Download résumé</a>
            </div>
          </div>
          <div className="hero-image reveal in-view reveal-delay-2">
            <img className="hero-illustration" src="/assets/illustrations/hero-guy.png" alt="Illustration of Mahmoud Abdelnasser standing casually with his laptop" width="420" height="520" />
          </div>
        </div>
        <div className="hero-stats reveal in-view reveal-delay-3">
          <div className="hero-stat"><div className="num">7+</div><div className="label">Years Experience</div></div>
          <div className="hero-stat"><div className="num">40+</div><div className="label">Projects Shipped</div></div>
          <div className="hero-stat"><div className="num">12</div><div className="label">Companies &amp; Startups</div></div>
          <div className="hero-stat"><div className="num">98%</div><div className="label">Client Satisfaction</div></div>
        </div>
      </div>
    </section>
  );
}
