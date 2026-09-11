export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>About Me</span>
          <h2>A little about how I work.</h2>
        </div>

        <div className="about-panel reveal">
          <div className="about-tabs-nav-wrap">
            <div className="about-tabs-nav" role="tablist">
              <button className="tab-btn active" data-tab="bio" role="tab" aria-selected="true">Bio</button>
              <button className="tab-btn" data-tab="skills" role="tab" aria-selected="false">Skills</button>
              <button className="tab-btn" data-tab="facts" role="tab" aria-selected="false">Facts</button>
            </div>
          </div>

          <div className="about-tabs-body">
            <div className="tab-panel active" data-panel="bio">
              <p className="lead">I&apos;m <strong>Mahmoud Abdelnasser</strong>, a product and UI/UX designer based in Cairo, working remotely with founders, product teams, and agencies across the globe.</p>
              <p>My focus sits at the intersection of <strong>Design and Experience</strong> — I prototype in the browser, sweat the details of motion and type, and ship interfaces that hold up under real users and real deadlines. Over the last 5 years I&apos;ve helped fintech, health-tech, and e-commerce teams take products from a blank page to launch day, and beyond.</p>
              <p>When I&apos;m not designing, I&apos;m usually writing about design systems, mentoring junior designers, or tinkering with generative art.</p>
            </div>

            <div className="tab-panel" data-panel="skills">
              <div className="skills-group">
                <h4>Design</h4>
                <div className="skills-cloud">
                  <span className="skill-tag">Product Design</span>
                  <span className="skill-tag">UI / UX</span>
                  <span className="skill-tag">Design Systems</span>
                  <span className="skill-tag">User Research</span>
                  <span className="skill-tag">Prototype</span>
                  <span className="skill-tag">Behavior Testing</span>
                  <span className="skill-tag">Wireframing</span>
                  <span className="skill-tag">User Flows</span>
                  <span className="skill-tag">Information Archeticture</span>
                  <span className="skill-tag">Micro Interactions</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">Tailwind</span>
                  <span className="skill-tag">Javascript</span>
                </div>
              </div>
              <div className="skills-group">
                <h4>Tools</h4>
                <div className="skills-cloud">
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Figjam</span>
                  <span className="skill-tag">Miro</span>
                  <span className="skill-tag">AdobeXD</span>
                  <span className="skill-tag">Sketch</span>
                </div>
              </div>
            </div>

            <div className="tab-panel" data-panel="facts">
              <div className="facts-grid">
                <div className="fact-item"><div className="k">Based in</div><div className="v">Cairo, Egypt (Remote)</div></div>
                <div className="fact-item"><div className="k">Focus</div><div className="v">Product &amp; UI/UX Design</div></div>
                <div className="fact-item"><div className="k">Currently</div><div className="v">Senior Designer @ Arcorp</div></div>
                <div className="fact-item"><div className="k">Phone Number</div><div className="v">+20 111 0920 448</div></div>
                <div className="fact-item"><div className="k">Email</div><div className="v">mahmoudabdelnasser153@gmail.com</div></div>
                <div className="fact-item"><div className="k">Resume</div><a href="#" className="v" style={{ color: 'var(--cyan-400)' }}>Download CV ↓</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
