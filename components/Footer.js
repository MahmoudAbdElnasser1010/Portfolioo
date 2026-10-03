import Link from 'next/link';
import { projects } from '@/lib/projects';

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
              <a href="https://www.behance.net/mahmoudabdelnasser" target="_blank" rel="noopener" aria-label="Behance"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.211 8.061zM3 11h3.586c2.442 0 2.84-3-.397-3H3v3zm3.194 3H3v3.016h3.186c3.071 0 2.884-3.016.008-3.016z" /></svg></a>
              <a href="https://www.linkedin.com/in/mahmoud-abd-elnasser-58349919b/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
              <a href="https://github.com/mahmoudabdelnasserr" target="_blank" rel="noopener" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
              <a href="https://dribbble.com/mahmoudabdelnasser" target="_blank" rel="noopener" aria-label="Dribbble"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" /></svg></a>
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
              {projects.slice(0, 4).map((p) => (
                <li key={p.slug}><Link href={`/projects/${p.slug}`}>{p.card.title}</Link></li>
              ))}
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
