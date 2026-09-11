const slides = [
  { title: 'Orbit Finance', url: 'orbitfinance.com', bg: 'radial-gradient(circle at 30% 20%, #f6bf1d 0%, #04060c 65%)', img: '/assets/hero-samples/VYE.svg' },
  { title: 'Lumen Health', url: 'lumenhealth.io', bg: 'radial-gradient(circle at 70% 30%, #ffe066 0%, #04060c 65%)', img: '/assets/hero-samples/fahm.svg' },
  { title: 'Drift Travel', url: 'drifttravel.co', bg: 'linear-gradient(135deg, #a17908 0%, #04060c 70%)', img: '/assets/hero-samples/Sporship.svg' },
  { title: 'Fuse Studio', url: 'fusestudio.design', bg: 'radial-gradient(circle at 20% 80%, #fad668 0%, #04060c 65%)', img: '/assets/hero-samples/eltizam.svg' },
  { title: 'Nova Robotics', url: 'novarobotics.ai', bg: 'radial-gradient(circle at 50% 10%, #fff3c4 0%, #04060c 60%)', img: '/assets/hero-samples/ho.png' },
];

export default function Showcase() {
  return (
    <section className="section section-alt" id="showcase">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Design Showcase</span>
          <h2>Hero sections I&apos;ve designed.</h2>
          <p>A few samples of landing page hero sections from recent projects — swipe through to see the range.</p>
        </div>

        <div className="carousel reveal">
          <div className="carousel-viewport">
            <div className="carousel-track" id="carouselTrack">
              {slides.map((s) => (
                <div key={s.title} className="carousel-slide" data-title={s.title}>
                  <div className="browser-mock">
                    <div className="bar"><span></span><span></span><span></span><div className="url">{s.url}</div></div>
                    <div className="mock-hero" style={{ background: s.bg }}>
                      <img className="mock-img" src={s.img} alt={`${s.title} hero design`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <div className="carousel-caption"><strong id="carouselTitle">Orbit Finance</strong> — hero concept</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div className="carousel-dots" id="carouselDots"></div>
              <div className="carousel-arrows">
                <button className="carousel-arrow" id="carouselPrev" aria-label="Previous slide">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="carousel-arrow" id="carouselNext" aria-label="Next slide">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
