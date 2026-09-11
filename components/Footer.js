import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <img src="/assets/logos/logo.svg" alt="" aria-hidden="true" />
            </Link>
            <p>Product designer &amp; UI/UX Designer helping startups and teams design and ship better digital products.</p>
            <div className="footer-social">
              <a href="#" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /><path d="M10 9h3.6v2.1h.05c.5-.95 1.75-2.1 3.6-2.1 3.85 0 4.75 2.5 4.75 5.8V21H18v-6.6c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V21H10z" /></svg></a>
              <a href="#" aria-label="X / Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4l16 16M20 4L4 20" /></svg></a>
              <a href="#" aria-label="Dribbble"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M4.5 9c4 1.5 9 1.7 14.8.7M3.5 15c5-1.3 9.7-1 14 1.5M11 3c2.7 3.5 4.5 8 4.5 13.5" /></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#experience">Experience</Link></li>
              <li><Link href="/#projects">Projects</Link></li>
              <li><Link href="/#showcase">Showcase</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Projects</h4>
            <ul>
              <li><Link href="/projects/project-1">Nimbus Analytics</Link></li>
              <li><Link href="/projects/project-2">Fathom Banking</Link></li>
              <li><Link href="/projects/project-3">Solace Commerce</Link></li>
              <li><Link href="/projects/project-4">Halo Brand System</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:mahmoudabdelnasser153@gmail.com">mahmoudabdelnasser153@gmail.com</a></li>
              <li><a href="#">+20 111 0920 448</a></li>
              <li><Link href="/#contact">Cairo, Egypt</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© <span id="year"></span> Mahmoud Abdelnasser. All rights reserved.</span>
          <a href="#top" className="back-to-top">Back to top
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
