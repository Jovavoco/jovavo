"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-[1000ms]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Laser Hair Removal",
    description:
      "Professional laser hair removal in a comfortable, elevated setting.",
    href: "#laser",
  },
  {
    number: "02",
    title: "Facials & Skincare",
    description:
      "Thoughtful skincare treatments designed around time for you.",
    href: "#book",
  },
  {
    number: "03",
    title: "Beauty & Self-Care",
    description:
      "Beauty services brought together in one warm Brooklyn destination.",
    href: "#book",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8F4] text-[#28211D] selection:bg-[#A64C1B] selection:text-white">
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes hlsHeroZoom {
          from {
            transform: scale(1.03);
          }

          to {
            transform: scale(1.09);
          }
        }

        @keyframes hlsFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hlsLine {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        .hls-hero-image {
          animation: hlsHeroZoom 16s ease-out forwards;
        }

        .hls-hero-1 {
          opacity: 0;
          animation: hlsFadeUp 0.9s 0.15s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hls-hero-2 {
          opacity: 0;
          animation: hlsFadeUp 1s 0.28s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hls-hero-3 {
          opacity: 0;
          animation: hlsFadeUp 1s 0.42s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hls-hero-4 {
          opacity: 0;
          animation: hlsFadeUp 1s 0.56s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hls-line {
          transform-origin: left center;
          animation: hlsLine 1.1s 0.1s
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hls-hero-image,
          .hls-hero-1,
          .hls-hero-2,
          .hls-hero-3,
          .hls-hero-4,
          .hls-line {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="relative z-[70] bg-[#A64C1B] px-5 py-[9px] text-center">
        <p className="text-[8px] uppercase tracking-[0.3em] text-white/85 sm:text-[9px]">
          House of Laser & Spa · Brooklyn, New York
        </p>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className={`sticky top-0 z-[60] transition-all duration-500 ${
          scrolled
            ? "border-b border-[#28211D]/10 bg-[#FAF8F4]/90 shadow-[0_10px_35px_rgba(40,33,29,0.035)] backdrop-blur-xl"
            : "border-b border-[#28211D]/10 bg-[#FAF8F4]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-500 md:px-9 lg:px-14 ${
            scrolled ? "h-[76px]" : "h-[92px]"
          }`}
        >
          {/* LOGO — CROPPED TIGHTER */}

          <a
            href="#home"
            className="flex items-center"
            aria-label="House of Laser & Spa home"
          >
            <div
              className={`relative overflow-hidden transition-all duration-500 ${
                scrolled
                  ? "h-[52px] w-[145px]"
                  : "h-[64px] w-[165px]"
              }`}
            >
              <img
                src="/previews/house-of-laser/logo.jpg"
                alt="House of Laser & Spa"
                className="absolute left-1/2 top-1/2 h-[135%] w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-9 lg:flex">
            {[
              ["Services", "#services"],
              ["Laser", "#laser"],
              ["The Spa", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative py-3 text-[9px] uppercase tracking-[0.2em] text-[#655951]"
              >
                {label}

                <span className="absolute bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#A64C1B] transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}

            <a
              href="#book"
              className="group flex items-center gap-4 bg-[#28211D] px-6 py-[15px] text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#A64C1B]"
            >
              Book a Visit

              <ArrowRight
                size={13}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </a>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-[#28211D]/15 transition-colors hover:border-[#A64C1B] lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE MENU */}

        <div
          className={`absolute left-0 top-full w-full overflow-hidden bg-[#FAF8F4] shadow-xl transition-all duration-500 lg:hidden ${
            menuOpen
              ? "max-h-[520px] border-t border-[#28211D]/10 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <nav className="px-6 pb-8">
            {[
              ["Services", "#services"],
              ["Laser Hair Removal", "#laser"],
              ["The Spa", "#experience"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-[#28211D]/10 py-5 font-serif text-[24px]"
              >
                {label}

                <ArrowRight size={14} className="text-[#A64C1B]" />
              </a>
            ))}

            <a
              href="#book"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-center gap-3 bg-[#A64C1B] px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-white"
            >
              Book a Visit
              <ArrowRight size={13} />
            </a>
          </nav>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section id="home">
        <div className="mx-auto grid max-w-[1600px] lg:min-h-[760px] lg:grid-cols-[0.88fr_1.12fr]">
          {/* HERO COPY */}

          <div className="relative flex items-center px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-24">
            <div className="relative z-10 max-w-[590px]">
              <div className="hls-hero-1 mb-7 flex items-center gap-4">
                <span className="hls-line h-px w-10 bg-[#B6956C]" />

                <p className="text-[9px] uppercase tracking-[0.32em] text-[#8B786C]">
                  Laser · Skin · Beauty
                </p>
              </div>

              <h1 className="hls-hero-2 font-serif text-[clamp(4rem,6.1vw,7rem)] leading-[0.88] tracking-[-0.05em]">
                Your beauty.
                <br />

                <span className="italic text-[#A64C1B]">
                  Your ritual.
                </span>
              </h1>

              <p className="hls-hero-3 mt-8 max-w-[440px] text-[14px] leading-[1.9] text-[#71635B] md:text-[15px]">
                Laser hair removal, skincare, and beauty treatments in a warm,
                distinctive Brooklyn setting.
              </p>

              <div className="hls-hero-4 mt-9 flex flex-wrap gap-3">
                <a
                  href="#book"
                  className="group flex items-center gap-4 bg-[#A64C1B] px-7 py-[17px] text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#843B14]"
                >
                  Book an Appointment

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                  />
                </a>

                <a
                  href="#services"
                  className="group flex items-center gap-4 border border-[#28211D]/20 px-7 py-[17px] text-[9px] uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#A64C1B] hover:text-[#A64C1B]"
                >
                  Explore Services
                </a>
              </div>

              <a
                href="#services"
                className="hls-hero-4 mt-14 inline-flex items-center gap-3 text-[8px] uppercase tracking-[0.24em] text-[#8A7A70]"
              >
                Scroll to discover
                <ArrowDown size={12} />
              </a>
            </div>

            <span className="pointer-events-none absolute bottom-8 right-8 hidden font-serif text-[150px] italic leading-none text-[#A64C1B]/[0.035] xl:block">
              H
            </span>
          </div>

          {/* =================================================
              HERO IMAGE — OVERLAP FIXED
          ================================================= */}

          <div className="relative min-h-[570px] pb-12 lg:min-h-[760px]">
            <div className="relative h-full min-h-[570px] overflow-hidden lg:min-h-[760px]">
              <img
                src="/previews/house-of-laser/waiting-area.jpg"
                alt="House of Laser & Spa waiting area"
                className="hls-hero-image absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#201814]/40 via-transparent to-transparent" />

              <div className="pointer-events-none absolute inset-5 border border-white/30 md:inset-8" />

              {/* TEXT MOVED HIGHER */}

              <div className="absolute bottom-28 left-9 right-9 text-white md:bottom-32 md:left-12 md:right-12">
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/65">
                  Welcome In
                </p>

                <p className="mt-2 font-serif text-[27px] italic">
                  House of Laser & Spa
                </p>
              </div>
            </div>

            {/* FLOATING CARD */}

            <div className="absolute bottom-0 left-7 z-20 md:left-12">
              <div className="flex items-center gap-4 rounded-[16px] border border-[#B6956C]/20 bg-[#FAF8F4] px-5 py-4 shadow-[0_15px_45px_rgba(40,33,29,0.12)]">
                <Sparkles
                  size={14}
                  strokeWidth={1.3}
                  className="shrink-0 text-[#A64C1B]"
                />

                <div>
                  <p className="font-serif text-[19px] italic leading-tight text-[#A64C1B]">
                    Your beauty ritual.
                  </p>

                  <p className="mt-1.5 text-[7px] uppercase tracking-[0.23em] text-[#8B7A70]">
                    Brooklyn, New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL INTRO
      ===================================================== */}

      <section className="border-b border-[#28211D]/10 bg-[#EFE8DF] px-6 py-16 md:px-10 md:py-20">
        <Reveal>
          <div className="mx-auto grid max-w-[1250px] items-end gap-10 md:grid-cols-[1.25fr_0.75fr]">
            <p className="max-w-[800px] font-serif text-[32px] leading-[1.15] tracking-[-0.025em] md:text-[45px]">
              Beauty and self-care in a space that feels{" "}
              <span className="italic text-[#A64C1B]">
                unmistakably yours.
              </span>
            </p>

            <p className="max-w-[330px] text-[12px] leading-6 text-[#76685F] md:ml-auto">
              A warm, polished setting for laser, skincare, and beauty in
              Brooklyn.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-[9px] uppercase tracking-[0.32em] text-[#A64C1B]">
                  Treatments
                </p>

                <h2 className="mt-6 font-serif text-[46px] leading-[0.98] tracking-[-0.04em] md:text-[58px]">
                  Made for
                  <br />
                  <span className="italic">your routine.</span>
                </h2>

                <p className="mt-6 max-w-[350px] text-[13px] leading-7 text-[#75675E]">
                  Thoughtful beauty services in a warm and personal
                  environment.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-[#28211D]/15">
              {services.map((service, index) => (
                <Reveal key={service.number} delay={index * 100}>
                  <a
                    href={service.href}
                    className="group grid gap-5 border-b border-[#28211D]/15 py-9 transition-colors duration-500 md:grid-cols-[65px_1fr_0.8fr_50px] md:items-center md:gap-7"
                  >
                    <span className="font-serif text-[16px] italic text-[#A64C1B]">
                      {service.number}
                    </span>

                    <h3 className="font-serif text-[29px] tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-1 md:text-[34px]">
                      {service.title}
                    </h3>

                    <p className="max-w-[290px] text-[12px] leading-6 text-[#786A61]">
                      {service.description}
                    </p>

                    <span className="flex h-11 w-11 items-center justify-center border border-[#28211D]/15 transition-all duration-500 group-hover:border-[#A64C1B] group-hover:bg-[#A64C1B] group-hover:text-white">
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="relative overflow-hidden bg-[#2D473C] text-white"
      >
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          {/* IMAGE */}

          <div className="group relative min-h-[570px] overflow-hidden lg:min-h-[760px]">
            <img
              src="/previews/house-of-laser/waiting-area.jpg"
              alt="House of Laser & Spa interior"
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.12]"
            />

            <div className="absolute inset-0 bg-[#1F352C]/10" />

            <div className="pointer-events-none absolute inset-6 border border-white/25 md:inset-8" />
          </div>

          {/* COPY */}

          <div className="relative flex items-center px-6 py-24 md:px-12 md:py-28 lg:px-20 xl:px-24">
            <Reveal className="relative z-10 max-w-[580px]">
              <p className="text-[9px] uppercase tracking-[0.32em] text-[#D7BB95]">
                The Experience
              </p>

              <h2 className="mt-6 font-serif text-[48px] leading-[0.96] tracking-[-0.04em] md:text-[66px]">
                Come in.
                <br />
                Slow down.
                <br />

                <span className="italic text-[#D7BB95]">
                  Feel beautiful.
                </span>
              </h2>

              <p className="mt-8 max-w-[460px] text-[14px] leading-7 text-white/65">
                Rich green, warm wood, gold details, and a welcoming atmosphere
                give House of Laser a character all its own.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-7">
                {["Warm", "Personal", "Elevated"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="text-[7px] text-[#D7BB95]">
                      ✦
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.24em] text-white/55">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="group mt-10 inline-flex items-center gap-4 border-b border-[#D7BB95]/60 pb-2 text-[9px] uppercase tracking-[0.2em] text-[#E4CEB0]"
              >
                Plan Your Visit

                <ArrowRight
                  size={13}
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                />
              </a>
            </Reveal>

            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full border border-[#D7BB95]/10" />

            <div className="pointer-events-none absolute -bottom-20 -right-20 h-[300px] w-[300px] rounded-full border border-[#D7BB95]/10" />
          </div>
        </div>
      </section>

      {/* =====================================================
          LASER FEATURE
      ===================================================== */}

      <section
        id="laser"
        className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1320px] items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-28">
          {/* PHOTO */}

          <Reveal>
            <div className="group relative pb-7 pr-5 md:pb-9 md:pr-8">
              <div className="relative h-[550px] overflow-hidden md:h-[690px]">
                <img
                  src="/previews/house-of-laser/laser.jpg"
                  alt="Laser hair removal treatment at House of Laser & Spa"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-5 border border-white/40 md:inset-7" />
              </div>

              <div className="absolute bottom-0 right-0 -z-10 h-[72%] w-[58%] bg-[#A64C1B]" />
            </div>
          </Reveal>

          {/* COPY */}

          <Reveal delay={150}>
            <div className="max-w-[500px]">
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#B6956C]" />

                <p className="text-[9px] uppercase tracking-[0.32em] text-[#A64C1B]">
                  Laser Hair Removal
                </p>
              </div>

              <h2 className="mt-7 font-serif text-[50px] leading-[0.94] tracking-[-0.045em] md:text-[67px]">
                Smooth,
                <br />

                <span className="italic text-[#A64C1B]">
                  simplified.
                </span>
              </h2>

              <p className="mt-8 max-w-[450px] text-[14px] leading-7 text-[#74665D]">
                Professional laser hair removal in a comfortable environment,
                designed to fit naturally into your beauty routine.
              </p>

              <div className="mt-10 border-t border-[#28211D]/15">
                {[
                  "Personalized experience",
                  "Comfortable treatment setting",
                  "Brooklyn location",
                ].map((item) => (
                  <div
                    key={item}
                    className="group flex items-center justify-between border-b border-[#28211D]/15 py-5"
                  >
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#62564F] transition-transform duration-500 group-hover:translate-x-1">
                      {item}
                    </p>

                    <span className="text-[8px] text-[#A64C1B]">
                      ✦
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                className="group mt-10 inline-flex items-center gap-4 bg-[#28211D] px-7 py-[17px] text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#A64C1B]"
              >
                Book Laser

                <ArrowRight
                  size={13}
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          BEAUTY SECTION
      ===================================================== */}

      <section className="bg-[#EEE6DC] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1250px]">
          <Reveal>
            <div className="grid items-end gap-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[9px] uppercase tracking-[0.32em] text-[#A64C1B]">
                  More Than Laser
                </p>

                <h2 className="mt-6 max-w-[700px] font-serif text-[48px] leading-[0.98] tracking-[-0.04em] md:text-[65px]">
                  Your beauty ritual,
                  <br />

                  <span className="italic text-[#A64C1B]">
                    all in one place.
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-[13px] leading-7 text-[#73655D] md:ml-auto">
                From skincare to beauty and self-care, make a little more room
                in your routine for yourself.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-y border-[#28211D]/15 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Skin",
                description:
                  "Facials and skincare in a calm, polished setting.",
              },
              {
                number: "02",
                title: "Beauty",
                description:
                  "Beauty services with a personal, considered approach.",
              },
              {
                number: "03",
                title: "Self-Care",
                description:
                  "A space that makes your appointment feel like time away.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 120}>
                <div
                  className={`group min-h-[270px] py-10 md:px-9 ${
                    index !== 2
                      ? "border-b border-[#28211D]/15 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <span className="font-serif text-[15px] italic text-[#A64C1B]">
                    {item.number}
                  </span>

                  <h3 className="mt-10 font-serif text-[32px] transition-transform duration-500 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-[270px] text-[12px] leading-6 text-[#74665D]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND / LOGO
          SAME SECTION, TIGHTER LOGO CROP
      ===================================================== */}

      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-28">
          <Reveal>
            <div className="group relative flex min-h-[470px] items-center justify-center overflow-hidden bg-[#F5F0E9] px-8 py-12">
              <div className="pointer-events-none absolute inset-6 border border-[#28211D]/10 transition-all duration-700 group-hover:inset-8" />

              {/* TIGHTER CROPPED LOGO */}

              <div className="relative z-10 h-[320px] w-full max-w-[440px] overflow-hidden">
                <img
                  src="/previews/house-of-laser/logo.jpg"
                  alt="House of Laser & Spa logo"
                  className="absolute left-1/2 top-1/2 h-[135%] w-[135%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="max-w-[530px]">
              <Sparkles
                size={17}
                strokeWidth={1.2}
                className="text-[#A64C1B]"
              />

              <h2 className="mt-8 font-serif text-[49px] leading-[0.98] tracking-[-0.04em] md:text-[64px]">
                A little luxury,
                <br />

                <span className="italic text-[#A64C1B]">
                  made personal.
                </span>
              </h2>

              <p className="mt-8 max-w-[450px] text-[14px] leading-7 text-[#73655D]">
                House of Laser & Spa brings together laser, skincare, beauty,
                and a distinctive atmosphere in Brooklyn.
              </p>

              <a
                href="#book"
                className="group mt-10 inline-flex items-center gap-4 border-b border-[#A64C1B] pb-2 text-[9px] uppercase tracking-[0.2em] text-[#A64C1B]"
              >
                Plan Your Visit

                <ArrowRight
                  size={13}
                  className="transition-transform duration-500 group-hover:translate-x-1.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section id="book" className="overflow-hidden bg-[#A64C1B] text-white">
        <div className="relative mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-28 lg:px-20">
          <Reveal>
            <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <p className="text-[9px] uppercase tracking-[0.32em] text-white/60">
                  Your Next Appointment
                </p>

                <h2 className="mt-6 max-w-[820px] font-serif text-[52px] leading-[0.94] tracking-[-0.045em] md:text-[74px]">
                  Make a little time
                  <br />

                  <span className="italic text-[#F0D4BC]">
                    for yourself.
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-[380px] text-[13px] leading-7 text-white/65">
                  Explore treatments and plan your next visit to House of Laser
                  & Spa.
                </p>

                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-4 bg-[#FAF8F4] px-7 py-[17px] text-[9px] uppercase tracking-[0.2em] text-[#A64C1B] transition-transform duration-500 hover:-translate-y-1"
                >
                  Book an Appointment

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-500 group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>

          <span className="pointer-events-none absolute -bottom-20 right-4 font-serif text-[300px] italic leading-none text-white/[0.035] md:right-14 md:text-[420px]">
            H
          </span>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        id="contact"
        className="bg-[#28211D] px-6 pb-8 pt-16 text-white md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {/* BRAND */}

            <div>
              {/* TIGHT CROPPED LOGO */}

              <div className="relative h-[82px] w-[180px] overflow-hidden">
                <img
                  src="/previews/house-of-laser/logo.jpg"
                  alt="House of Laser & Spa"
                  className="absolute left-1/2 top-1/2 h-[138%] w-[138%] max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
                />
              </div>

              <p className="mt-6 max-w-[340px] text-[12px] leading-6 text-white/45">
                Laser, skincare, beauty, and self-care in Brooklyn, New York.
              </p>
            </div>

            {/* VISIT */}

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#D5B58D]">
                Visit
              </p>

              <div className="mt-6 flex items-start gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#D5B58D]"
                />

                <p className="text-[12px] leading-6 text-white/50">
                  1690 E 14th St
                  <br />
                  Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>
            </div>

            {/* CONNECT */}

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#D5B58D]">
                Connect
              </p>

              <div className="mt-6 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[12px] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  @houseoflaserspa
                </a>

                <a
                  href="tel:+19298339197"
                  className="inline-flex w-fit items-center gap-3 text-[12px] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  <Phone size={14} strokeWidth={1.4} />

                  (929) 833-9197
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-7 text-[7px] uppercase tracking-[0.22em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser & Spa</p>

            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </main>
  );
}