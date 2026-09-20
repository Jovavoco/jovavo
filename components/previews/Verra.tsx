"use client";

import { useEffect, useState } from "react";

export default function Verra() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#F1ECE4] text-[#F7F3EC]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-[#8B7866]"
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/previews/verra/verra-hero.png"
          alt="Warm contemporary interior designed by Verra"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* IMAGE OVERLAYS */}
        <div className="absolute inset-0 bg-black/[0.12]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(20,15,11,.30) 0%, rgba(20,15,11,.13) 35%, rgba(20,15,11,.02) 72%, rgba(20,15,11,.06) 100%)",
          }}
        />

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <header className="absolute left-0 right-0 top-0 z-40">
          <div className="mx-auto flex w-full max-w-[1540px] items-center justify-between px-6 py-7 sm:px-10 md:px-14 lg:px-[5.5rem] lg:py-[2.85rem]">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="font-serif text-[32px] font-normal tracking-[0.30em] text-white transition-opacity duration-300 hover:opacity-70 sm:text-[36px] lg:text-[42px]"
              aria-label="Verra home"
            >
              VERRA
            </button>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-12 lg:flex xl:gap-[4.8rem]">
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="nav-link"
              >
                PROJECTS
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="nav-link"
              >
                SERVICES
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("studio")}
                className="nav-link"
              >
                STUDIO
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="nav-link"
              >
                CONTACT
              </button>
            </nav>

            {/* DESKTOP CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group hidden min-w-[230px] border border-white/80 px-8 py-[18px] text-[11px] font-medium tracking-[0.24em] text-white transition-all duration-500 hover:bg-white hover:text-[#3E352E] lg:block"
            >
              START A PROJECT
            </button>

            {/* MOBILE MENU */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen
                    ? "w-7 translate-y-[4px] rotate-45"
                    : "w-7"
                }`}
              />

              <span
                className={`block h-px bg-white transition-all duration-300 ${
                  menuOpen
                    ? "w-7 -translate-y-[4px] -rotate-45"
                    : "w-5"
                }`}
              />
            </button>
          </div>
        </header>

        {/* =====================================================
            MOBILE NAVIGATION
        ===================================================== */}
        <div
          className={`fixed inset-0 z-30 flex flex-col bg-[#55483D] px-7 pb-10 pt-32 transition-all duration-500 lg:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-5 opacity-0"
          }`}
        >
          <div className="flex flex-1 flex-col justify-center gap-7">
            {[
              ["Projects", "projects"],
              ["Services", "services"],
              ["Studio", "studio"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="border-b border-white/20 pb-5 text-left font-serif text-[42px] font-light text-white"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="w-full border border-white px-6 py-5 text-[11px] tracking-[0.25em] text-white"
          >
            START A PROJECT
          </button>
        </div>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1540px] items-center px-6 pb-28 pt-32 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-24 lg:pt-36">
          <div className="w-full max-w-[590px]">
            {/* EYEBROW */}
            <p className="hero-reveal mb-7 text-[10px] font-medium tracking-[0.34em] text-white/95 sm:text-[11px] lg:mb-6 lg:text-[13px]">
              INTERIOR DESIGN &amp; RENOVATION
            </p>

            {/* HEADING */}
            <h1 className="hero-reveal hero-delay-1 font-serif text-[62px] font-light leading-[0.88] tracking-[-0.045em] text-[#FFFDF9] sm:text-[82px] md:text-[96px] lg:text-[112px] xl:text-[118px]">
              <span className="block">Spaces,</span>
              <span className="block">considered.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-reveal hero-delay-2 mt-8 max-w-[430px] font-serif text-[20px] font-light leading-[1.45] tracking-[0.02em] text-white/95 sm:text-[22px] lg:mt-7 lg:text-[23px]">
              Thoughtful design for a more
              <br className="hidden sm:block" /> beautiful everyday.
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="hero-reveal hero-delay-3 group mt-10 flex h-[64px] min-w-[295px] items-center justify-between border border-white/90 px-8 text-white transition-all duration-500 hover:bg-white hover:text-[#3F352D] lg:mt-10"
            >
              <span className="text-[11px] font-medium tracking-[0.24em]">
                EXPLORE OUR WORK
              </span>

              <span className="relative ml-8 flex w-7 items-center">
                <span className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-7" />

                <span className="absolute right-0 h-[7px] w-[7px] rotate-45 border-r border-t border-current" />
              </span>
            </button>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}
        <button
          type="button"
          onClick={() => scrollToSection("projects")}
          className="absolute bottom-8 left-6 z-20 hidden text-left text-white md:block md:left-14 lg:bottom-10 lg:left-[5.8rem]"
        >
          <span className="mb-4 block h-[42px] w-px bg-white/90" />

          <span className="text-[10px] tracking-[0.28em]">
            SCROLL
          </span>
        </button>

        {/* =====================================================
            SLIDE NUMBERS
        ===================================================== */}
        <div className="absolute bottom-9 right-6 z-20 hidden items-center gap-4 text-[10px] tracking-[0.2em] text-white/70 sm:flex sm:right-10 md:right-14 lg:bottom-11 lg:right-[6rem]">
          <span className="text-white">01</span>

          <span className="block h-px w-14 bg-white/75" />

          <span>02</span>

          <span className="mx-1 h-[3px] w-[3px] rounded-full bg-white/45" />

          <span>03</span>
        </div>
      </section>

      {/* =====================================================
          TEMPORARY SECTIONS
          These give every hero button a real destination.
          We'll design these next.
      ===================================================== */}

      <section
        id="projects"
        className="flex min-h-[70vh] scroll-mt-0 items-center bg-[#EEE8DF] px-6 py-28 text-[#39342F] sm:px-10 md:px-14 lg:px-24"
      >
        <div className="mx-auto w-full max-w-[1380px]">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-[#777067]">
            01 / SELECTED WORK
          </p>

          <h2 className="max-w-4xl font-serif text-5xl font-light leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-8xl">
            Homes designed with intention.
          </h2>
        </div>
      </section>

      <section
        id="services"
        className="flex min-h-[70vh] items-center bg-[#D8CFC3] px-6 py-28 text-[#39342F] sm:px-10 md:px-14 lg:px-24"
      >
        <div className="mx-auto w-full max-w-[1380px]">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-[#777067]">
            02 / SERVICES
          </p>

          <h2 className="font-serif text-5xl font-light sm:text-7xl lg:text-8xl">
            From vision to home.
          </h2>
        </div>
      </section>

      <section
        id="studio"
        className="flex min-h-[70vh] items-center bg-[#F3EFE9] px-6 py-28 text-[#39342F] sm:px-10 md:px-14 lg:px-24"
      >
        <div className="mx-auto w-full max-w-[1380px]">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-[#777067]">
            03 / THE STUDIO
          </p>

          <h2 className="max-w-4xl font-serif text-5xl font-light leading-[1.05] sm:text-7xl lg:text-8xl">
            Considered spaces for everyday living.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[70vh] items-center bg-[#4C433B] px-6 py-28 text-white sm:px-10 md:px-14 lg:px-24"
      >
        <div className="mx-auto w-full max-w-[1380px]">
          <p className="mb-6 text-[10px] tracking-[0.3em] text-white/60">
            04 / CONTACT
          </p>

          <h2 className="max-w-4xl font-serif text-5xl font-light leading-[1.05] sm:text-7xl lg:text-8xl">
            Let&apos;s create something considered.
          </h2>

          <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-white/70">
            Tell us about your home, your vision, and how you want your
            space to feel.
          </p>
        </div>
      </section>

      {/* =====================================================
          COMPONENT STYLES
      ===================================================== */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 8px 0;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.24em;
          color: rgba(255, 255, 255, 0.95);
          transition: opacity 300ms ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 0;
          height: 1px;
          background: white;
          transition: width 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .nav-link:hover::after {
          width: calc(100% - 0.24em);
        }

        .hero-reveal {
          opacity: 0;
          transform: translateY(18px);
          animation: heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .hero-delay-1 {
          animation-delay: 120ms;
        }

        .hero-delay-2 {
          animation-delay: 240ms;
        }

        .hero-delay-3 {
          animation-delay: 360ms;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}