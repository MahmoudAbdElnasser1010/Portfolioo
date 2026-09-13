'use client';

/* ==========================================================================
   CLIENT SCRIPTS
   Ported 1:1 from the original js/main.js so every animation and interaction
   behaves identically. Runs on mount and re-runs on route change, cleaning
   up its listeners/observers each time.
   ========================================================================== */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups = [];

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
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
      const toggle = () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
      };
      const close = () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      };
      navToggle.addEventListener('click', toggle);
      const anchors = Array.from(navLinks.querySelectorAll('a'));
      anchors.forEach((a) => a.addEventListener('click', close));
      cleanups.push(() => {
        navToggle.removeEventListener('click', toggle);
        anchors.forEach((a) => a.removeEventListener('click', close));
      });
    }

    /* ---------- Active nav link on scroll ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links a');
    if (sections.length && navAnchors.length) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navAnchors.forEach((a) => {
                a.classList.toggle('active', a.getAttribute('href') === `#${id}` || a.getAttribute('href') === `/#${id}`);
              });
            }
          });
        },
        { rootMargin: '-50% 0px -45% 0px', threshold: 0 }
      );
      sections.forEach((s) => spy.observe(s));
      cleanups.push(() => spy.disconnect());
    }

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    /* ---------- Project-detail TOC scrollspy ---------- */
    const toc = document.querySelector('.pd-toc');
    if (toc) {
      const tocLinks = Array.from(toc.querySelectorAll('a'));
      const sections = tocLinks
        .map((a) => document.getElementById(a.getAttribute('href').slice(1)))
        .filter(Boolean);
      if (sections.length) {
        const tocSpy = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.id;
                tocLinks.forEach((a) =>
                  a.classList.toggle('active', a.getAttribute('href') === `#${id}`)
                );
              }
            });
          },
          { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
        );
        sections.forEach((s) => tocSpy.observe(s));
        cleanups.push(() => tocSpy.disconnect());
      }
    }

    /* ---------- About section tabs ---------- */
    const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
    if (tabBtns.length) {
      const handlers = [];
      tabBtns.forEach((btn) => {
        const onClick = () => {
          const targetTab = btn.dataset.tab;
          const panelGroup = btn.closest('.about-panel');
          if (!panelGroup) return;
          panelGroup.querySelectorAll('.tab-btn').forEach((b) => {
            const isActive = b === btn;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-selected', isActive ? 'true' : 'false');
          });
          panelGroup.querySelectorAll('.tab-panel').forEach((p) => {
            p.classList.toggle('active', p.dataset.panel === targetTab);
          });
        };
        btn.addEventListener('click', onClick);
        handlers.push([btn, onClick]);
      });
      cleanups.push(() => handlers.forEach(([b, h]) => b.removeEventListener('click', h)));
    }

    /* ---------- Hero-samples carousel (autoplay) ---------- */
    const track = document.getElementById('carouselTrack');
    if (track) {
      const slides = Array.from(track.children);
      const dotsWrap = document.getElementById('carouselDots');
      const prevBtn = document.getElementById('carouselPrev');
      const nextBtn = document.getElementById('carouselNext');
      const titleEl = document.getElementById('carouselTitle');
      let index = 0;
      let autoTimer = null;

      const titles = slides.map((slide) => {
        if (slide.dataset.title) return slide.dataset.title;
        const eyebrow = slide.querySelector('.mock-eyebrow');
        return eyebrow ? eyebrow.textContent.trim() : '';
      });

      if (dotsWrap) dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        if (dotsWrap) dotsWrap.appendChild(dot);
      });
      const dots = dotsWrap ? Array.from(dotsWrap.children) : [];

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
      function restartAuto() {
        if (autoTimer) clearInterval(autoTimer);
        autoTimer = setInterval(next, 5500);
      }

      if (nextBtn) nextBtn.addEventListener('click', next);
      if (prevBtn) prevBtn.addEventListener('click', prev);

      const carousel = track.closest('.carousel');
      const onEnter = () => autoTimer && clearInterval(autoTimer);
      if (carousel) {
        carousel.addEventListener('mouseenter', onEnter);
        carousel.addEventListener('mouseleave', restartAuto);
      }

      let touchStartX = 0;
      const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
      const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
      };
      track.addEventListener('touchstart', onTouchStart, { passive: true });
      track.addEventListener('touchend', onTouchEnd, { passive: true });

      render();
      restartAuto();

      cleanups.push(() => {
        if (autoTimer) clearInterval(autoTimer);
        if (nextBtn) nextBtn.removeEventListener('click', next);
        if (prevBtn) prevBtn.removeEventListener('click', prev);
        if (carousel) {
          carousel.removeEventListener('mouseenter', onEnter);
          carousel.removeEventListener('mouseleave', restartAuto);
        }
        track.removeEventListener('touchstart', onTouchStart);
        track.removeEventListener('touchend', onTouchEnd);
      });
    }

    /* ---------- Project-detail image slider (manual, no autoplay) ---------- */
    document.querySelectorAll('[data-pd-slider]').forEach((slider) => {
      const sTrack = slider.querySelector('.pd-slider-track');
      const slides = sTrack ? Array.from(sTrack.children) : [];
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
        dotsWrap.innerHTML = '';
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
        sTrack.style.transform = `translateX(-${index * 100}%)`;
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

      slider.setAttribute('tabindex', '0');
      const onKey = (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      };
      slider.addEventListener('keydown', onKey);

      let touchStartX = 0;
      const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
      const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) (dx > 0 ? prev() : next());
      };
      sTrack.addEventListener('touchstart', onTouchStart, { passive: true });
      sTrack.addEventListener('touchend', onTouchEnd, { passive: true });

      render();

      cleanups.push(() => {
        if (nextBtn) nextBtn.removeEventListener('click', next);
        if (prevBtn) prevBtn.removeEventListener('click', prev);
        slider.removeEventListener('keydown', onKey);
        sTrack.removeEventListener('touchstart', onTouchStart);
        sTrack.removeEventListener('touchend', onTouchEnd);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
