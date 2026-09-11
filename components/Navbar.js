import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <img src="/assets/logos/logo.svg" alt="" aria-hidden="true" />
        </Link>
        <nav className="nav-links" id="navLinks">
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#showcase">Showcase</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="nav-cta">
          <Link href="/#contact" className="btn btn-ghost">Let&apos;s Talk</Link>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
