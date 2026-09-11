/* ==========================================================================
   PORTFOLIO — MAIN JS
   Handles: navbar scroll state, mobile nav, scroll-reveal, active link
   highlighting, and the hero-samples carousel.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 30) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  if (sections.length && navAnchors.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-50% 0px -45% 0px', threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revealObserver.observe(el));
  }

  /* ---------- About section tabs ---------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        const panelGroup = btn.closest('.about-panel');
        if (!panelGroup) return;

        panelGroup.querySelectorAll('.tab-btn').forEach(b => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        panelGroup.querySelectorAll('.tab-panel').forEach(p => {
          p.classList.toggle('active', p.dataset.panel === targetTab);
        });
      });
    });
  }

  /* ---------- Hero-samples carousel ---------- */
  const track = document.getElementById('carouselTrack');
  if (track) {
    const slides = Array.from(track.children);
    const dotsWrap = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    const titleEl = document.getElementById('carouselTitle');
    let index = 0;
    let autoTimer = null;

    const titles = slides.map(slide => {
      if (slide.dataset.title) return slide.dataset.title;
      const eyebrow = slide.querySelector('.mock-eyebrow');
      return eyebrow ? eyebrow.textContent.trim() : '';
    });

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      if (titleEl) titleEl.textContent = titles[index] || '';
    }

    function goTo(i) {
      index = (i + slides.length) % slides.length;
      render();
      restartAuto();
    }

    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    function restartAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(next, 5500);
    }

    const carousel = track.closest('.carousel');
    if (carousel) {
      carousel.addEventListener('mouseenter', () => autoTimer && clearInterval(autoTimer));
      carousel.addEventListener('mouseleave', restartAuto);
    }

    // Basic touch swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    }, { passive: true });

    render();
    restartAuto();
  }

  /* ---------- Project-detail image slider (manual, no autoplay) ---------- */
  document.querySelectorAll('[data-pd-slider]').forEach(slider => {
    const track = slider.querySelector('.pd-slider-track');
    const slides = Array.from(track.children);
    if (!slides.length) return;

    const prevBtn = slider.querySelector('.pd-slider-arrow.prev');
    const nextBtn = slider.querySelector('.pd-slider-arrow.next');
    const dotsWrap = slider.querySelector('.pd-slider-dots');
    const curEl = slider.querySelector('.pd-slider-counter .cur');
    const totalEl = slider.querySelector('.pd-slider-counter .total');
    let index = 0;

    if (totalEl) totalEl.textContent = slides.length;

    let dots = [];
    if (dotsWrap) {
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'pd-slider-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to image ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsWrap.appendChild(dot);
      });
      dots = Array.from(dotsWrap.children);
    }

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      if (curEl) curEl.textContent = index + 1;
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === slides.length - 1;
    }

    function goTo(i) {
      index = Math.max(0, Math.min(i, slides.length - 1));
      render();
    }
    const next = () => goTo(index + 1);
    const prev = () => goTo(index - 1);

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    // Keyboard support when the slider is focused
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    });

    // Touch swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    }, { passive: true });

    render();
  });

});
