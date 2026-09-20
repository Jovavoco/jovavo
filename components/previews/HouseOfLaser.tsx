"use client";

import { useState } from "react";
import { Bodoni_Moda } from "next/font/google";
import {
  ArrowRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const services = [
  {
    number: "01",
    title: "Laser Hair Removal",
    description:
      "Professional laser hair removal tailored to your skin, your goals, and your routine.",
    href: "#laser",
  },
  {
    number: "02",
    title: "Facials & Skincare",
    description:
      "Thoughtful facial and skincare treatments designed around what your skin needs.",
    href: "#facials",
  },
  {
    number: "03",
    title: "Beauty & Self-Care",
    description:
      "A warm, intimate space for beauty, skincare, and a little time set aside for yourself.",
    href: "#experience",
  },
];

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3EEE8] text-[#28231F]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        @keyframes hlsHeroImage {
          from {
            opacity: 0;
            transform: scale(1.02);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hlsHeroText {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hlsFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .hls-hero-image {
          animation: hlsHeroImage 1.8s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hls-hero-text {
          animation: hlsHeroText 1.35s
            cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
        }

        .hls-hero-nav {
          animation: hlsFade 1.3s ease 0.1s both;
        }

        .hls-bodoni {
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: geometricPrecision;
        }

        .hls-hero-thin {
          display: inline-block;
          transform: scaleX(0.93);
          transform-origin: center center;
        }

        @media (max-width: 640px) {
          .hls-hero-thin {
            transform: scaleX(0.96);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hls-hero-image,
          .hls-hero-text,
          .hls-hero-nav {
            animation: none !important;
          }
        }
      `}</style>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          id="home"
          className="relative min-h-[100svh] overflow-hidden bg-[#17130F]"
        >
          <img
            src="/previews/house-of-laser/spa-hero.png"
            alt="House of Laser & Spa treatment room"
            className="hls-hero-image absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />

          {/* LIGHT OVERLAYS */}

          <div className="absolute inset-0 bg-black/[0.04]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/[0.08]" />

          {/* =====================================================
              DESKTOP NAV
          ===================================================== */}

          <div className="hls-hero-nav absolute left-0 right-0 top-0 z-30 hidden px-10 pt-12 lg:block xl:px-16 xl:pt-14">
            <div className="relative mx-auto flex max-w-[1500px] items-start justify-between">
              {/* LOCATION */}

              <p className="text-[8px] font-light uppercase tracking-[0.34em] text-white/75">
                Brooklyn, NY
              </p>

              {/* CENTER BRAND */}

              <a
                href="#home"
                className="absolute left-1/2 -translate-x-1/2 text-center"
              >
                <p className="whitespace-nowrap text-[9px] font-light uppercase tracking-[0.46em] text-white/90">
                  House of Laser &amp; Spa
                </p>

                <div className="mx-auto mt-5 h-px w-10 bg-white/40" />
              </a>

              {/* NAV LINKS */}

              <nav className="flex items-center gap-9">
                <a
                  href="#services"
                  className="text-[8px] font-light uppercase tracking-[0.3em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="text-[8px] font-light uppercase tracking-[0.3em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="text-[8px] font-light uppercase tracking-[0.3em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* =====================================================
              MOBILE NAV
          ===================================================== */}

          <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-5 pt-6 lg:hidden">
            <a href="#home">
              <p className="text-[11px] font-light uppercase tracking-[0.24em] text-white">
                House of Laser &amp; Spa
              </p>

              <p className="mt-1.5 text-[6px] uppercase tracking-[0.36em] text-white/55">
                Brooklyn, New York
              </p>
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-10 w-10 items-center justify-center border border-white/30 text-white backdrop-blur-sm"
            >
              {menuOpen ? (
                <X size={17} strokeWidth={1.1} />
              ) : (
                <Menu size={17} strokeWidth={1.1} />
              )}
            </button>
          </div>

          {/* =====================================================
              MOBILE MENU
          ===================================================== */}

          {menuOpen && (
            <div className="absolute left-0 right-0 top-0 z-30 bg-[#17130F]/95 px-6 pb-10 pt-24 text-white backdrop-blur-xl lg:hidden">
              <div className="flex flex-col">
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className={`${bodoni.className} border-b border-white/10 py-4 text-[26px]`}
                >
                  Services
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className={`${bodoni.className} border-b border-white/10 py-4 text-[26px]`}
                >
                  About
                </a>

                <a
                  href="#laser"
                  onClick={() => setMenuOpen(false)}
                  className={`${bodoni.className} border-b border-white/10 py-4 text-[26px]`}
                >
                  Laser Hair Removal
                </a>

                <a
                  href="#facials"
                  onClick={() => setMenuOpen(false)}
                  className={`${bodoni.className} border-b border-white/10 py-4 text-[26px]`}
                >
                  Facials &amp; Skincare
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className={`${bodoni.className} border-b border-white/10 py-4 text-[26px]`}
                >
                  Contact
                </a>

                <a
                  href="#book"
                  onClick={() => setMenuOpen(false)}
                  className="mt-7 flex items-center justify-center border border-white/35 px-6 py-4 text-[7px] font-light uppercase tracking-[0.3em]"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          )}

          {/* =====================================================
              HERO CENTER
          ===================================================== */}

          <div className="absolute inset-0 z-20 flex items-center justify-center px-5 pt-14 text-center sm:pt-16 lg:pt-20">
            <div className="hls-hero-text flex w-full max-w-[950px] flex-col items-center">
              {/* MAIN TITLE */}

              <h1
                className={`${bodoni.className} hls-bodoni text-center font-normal text-[#FAF7F3]`}
              >
                <span className="hls-hero-thin">
                  <span className="block text-[50px] leading-[0.9] tracking-[-0.03em] sm:text-[62px] md:text-[74px] lg:text-[82px] xl:text-[88px]">
                    Beauty
                  </span>

                  <span className="mt-2 block whitespace-nowrap text-[37px] leading-[0.92] tracking-[-0.03em] sm:text-[46px] md:text-[56px] lg:text-[62px] xl:text-[66px]">
                    <span className="italic">without</span>
                    <span className="not-italic"> limits.</span>
                  </span>
                </span>
              </h1>

              {/* FINE DIVIDER */}

              <div className="mt-8 h-px w-9 bg-white/40 sm:mt-9" />

              {/* SERVICES */}

              <div className="mt-5 flex items-center justify-center gap-3 sm:mt-6 sm:gap-4">
                <span className="text-[6px] font-light uppercase tracking-[0.42em] text-white/75 sm:text-[7px]">
                  Laser
                </span>

                <span className="text-[5px] text-white/35">•</span>

                <span className="text-[6px] font-light uppercase tracking-[0.42em] text-white/75 sm:text-[7px]">
                  Skincare
                </span>

                <span className="text-[5px] text-white/35">•</span>

                <span className="text-[6px] font-light uppercase tracking-[0.42em] text-white/75 sm:text-[7px]">
                  Self-Care
                </span>
              </div>

              {/* BUTTON */}

              <a
                href="#book"
                className="group mt-8 inline-flex items-center justify-center gap-5 border border-white/45 px-7 py-[13px] text-[7px] font-light uppercase tracking-[0.3em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-[#28231F] sm:px-8"
              >
                Book an Appointment

                <ArrowRight
                  size={10}
                  strokeWidth={1}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              HERO BOTTOM
          ===================================================== */}

          <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:right-16">
            <div className="h-px w-7 bg-white/45" />

            <p className="text-[7px] font-light uppercase tracking-[0.34em] text-white/65">
              A calmer, brighter you
            </p>
          </div>

          <div className="absolute bottom-7 left-6 z-20 lg:hidden">
            <p className="text-[6px] font-light uppercase tracking-[0.32em] text-white/55">
              A calmer, brighter you
            </p>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

{/* =====================================================
    ABOUT — THE HOUSE
===================================================== */}

<section
  id="about"
  className="relative overflow-hidden bg-[#F6F2EC]"
>
  {/* LARGE DECORATIVE ARC */}
  <div className="pointer-events-none absolute -right-[230px] -top-[260px] hidden h-[1050px] w-[1050px] rounded-full border border-[#8E8177]/25 xl:block" />

  <div className="relative mx-auto grid min-h-[820px] max-w-[1500px] lg:grid-cols-[1.08fr_0.92fr]">

    {/* =====================================================
        LEFT SIDE
    ===================================================== */}

    <div className="flex items-center px-6 py-20 sm:px-10 md:px-14 lg:px-16 lg:py-24 xl:px-20">
      <div className="w-full max-w-[650px]">

        {/* EYEBROW */}

        <div className="flex items-center gap-5">
          <span className="h-px w-16 bg-[#8E8177]/55" />

          <p className="text-[8px] font-normal uppercase tracking-[0.48em] text-[#4D4742] sm:text-[9px]">
            The House
          </p>
        </div>

        {/* TITLE */}

        <h2
          className={`${bodoni.className} hls-bodoni mt-14 font-normal tracking-[-0.045em] text-[#211C18]`}
        >
          <span className="block text-[50px] leading-[0.92] sm:text-[62px] md:text-[72px] lg:text-[68px] xl:text-[78px]">
            Beauty should feel
          </span>

          <span className="mt-1 block text-[58px] italic leading-[0.9] text-[#917C6D] sm:text-[70px] md:text-[82px] lg:text-[78px] xl:text-[88px]">
            personal.
          </span>
        </h2>

        {/* COPY */}

        <div className="mt-12 max-w-[570px] space-y-6">
          <p className="text-[12px] font-light leading-[1.9] tracking-[0.09em] text-[#514B46] sm:text-[13px]">
            House of Laser &amp; Spa brings together laser hair removal,
            skincare, beauty, and self-care in an intimate Brooklyn setting.
          </p>

          <p className="text-[12px] font-light leading-[1.9] tracking-[0.09em] text-[#514B46] sm:text-[13px]">
            Every treatment is approached with intention — creating an
            experience that feels comfortable, considered, and entirely
            your own.
          </p>
        </div>

        {/* DIVIDER */}

        <div className="mt-12 h-px w-full bg-[#6F655D]/25" />

        {/* CATEGORIES */}

        <div className="grid grid-cols-3 py-8">
          <div className="flex items-center">
            <p className="text-[8px] font-normal uppercase tracking-[0.4em] text-[#39332E]">
              Laser
            </p>
          </div>

          <div className="flex items-center border-l border-[#6F655D]/25 pl-8 sm:pl-10">
            <p className="text-[8px] font-normal uppercase tracking-[0.4em] text-[#39332E]">
              Skincare
            </p>
          </div>

          <div className="flex items-center border-l border-[#6F655D]/25 pl-8 sm:pl-10">
            <p className="text-[8px] font-normal uppercase tracking-[0.4em] text-[#39332E]">
              Self-Care
            </p>
          </div>
        </div>

        {/* BUTTON */}

        <a
          href="#services"
          className="group mt-7 inline-flex min-w-[310px] items-center justify-between border border-[#4E4741]/65 px-7 py-[18px] text-[8px] font-normal uppercase tracking-[0.36em] text-[#312C28] transition-all duration-500 hover:bg-[#2A2521] hover:text-[#F6F2EC] sm:min-w-[360px]"
        >
          <span>Discover Our Treatments</span>

          <ArrowRight
            size={15}
            strokeWidth={1}
            className="ml-8 transition-transform duration-500 group-hover:translate-x-1"
          />
        </a>

        {/* SMALL BOTTOM TEXT */}

        <p className="mt-16 text-[7px] font-normal uppercase tracking-[0.52em] text-[#9B8374]">
          Beauty Lives Here
        </p>
      </div>
    </div>

    {/* =====================================================
        RIGHT IMAGE
    ===================================================== */}

    <div className="relative px-6 pb-8 sm:px-10 lg:px-0 lg:py-[58px] lg:pr-[58px]">
      <div className="group relative h-[570px] overflow-hidden sm:h-[680px] lg:h-full lg:min-h-[700px]">

        <img
          src="/previews/house-of-laser/about-woman.png"
          alt="House of Laser & Spa beauty and self-care"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
        />

        {/* VERY SUBTLE IMAGE TONE */}
        <div className="absolute inset-0 bg-[#392C23]/[0.03]" />

        {/* IMAGE WORDS */}

        <div className="absolute left-[15%] top-[20%] hidden text-white lg:block">
          <div className="space-y-3">
            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-white/85">
              Confidence
            </p>

            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-white/85">
              Care
            </p>

            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-white/85">
              Beauty
            </p>

            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-white/85">
              You
            </p>
          </div>

          <div className="ml-1 mt-5 h-16 w-px bg-white/65" />
        </div>
      </div>
    </div>
  </div>
</section>

{/* =====================================================
    SERVICES — EDITORIAL LAYOUT
===================================================== */}

{/* =====================================================
    SERVICES
===================================================== */}

<section
  id="services"
  className="relative overflow-hidden bg-[#F4EFE9]"
>
  <div className="mx-auto max-w-[1700px]">
    {/* =====================================================
        TOP / EDITORIAL INTRO
    ===================================================== */}

    <div className="grid lg:grid-cols-[42%_58%]">
      {/* =====================================================
          LEFT — FEATURE IMAGE
      ===================================================== */}

      <div className="relative bg-[#DDD3CA]">
        <div className="relative h-[520px] overflow-hidden sm:h-[620px] md:h-[700px] lg:h-full lg:min-h-[760px]">
          <img
            src="/previews/house-of-laser/services-main.png"
            alt="House of Laser and Spa treatment space"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* VERY LIGHT IMAGE TONE */}
          <div className="absolute inset-0 bg-[#34271F]/[0.04]" />

          {/* LARGE EDITORIAL CURVE */}
          <div className="pointer-events-none absolute -right-[72%] -top-[58%] hidden h-[105%] w-[125%] rounded-full bg-[#F4EFE9] lg:block" />

          {/* THIN CURVE LINE */}
          <div className="pointer-events-none absolute -right-[75%] -top-[61%] hidden h-[109%] w-[130%] rounded-full border border-[#75685E]/30 lg:block" />

          {/* IMAGE WORDS */}
          <div className="absolute bottom-10 left-8 z-20 sm:bottom-12 sm:left-10 lg:bottom-14 lg:left-12">
            <div className="space-y-2">
              <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/85">
                Confidence
              </p>

              <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/85">
                Care
              </p>

              <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/85">
                Beauty
              </p>

              <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/85">
                You
              </p>
            </div>

            <div className="ml-[2px] mt-5 h-12 w-px bg-white/55" />
          </div>
        </div>
      </div>

      {/* =====================================================
          RIGHT — INTRO
      ===================================================== */}

      <div className="relative flex items-center px-7 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
        <div className="w-full">
          <div className="flex items-center gap-5">
            <p className="text-[8px] font-normal uppercase tracking-[0.46em] text-[#665950]">
              Services
            </p>

            <div className="h-px w-20 bg-[#665950]/35" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-9 font-normal tracking-[-0.055em]`}
          >
            <span className="block text-[58px] leading-[0.88] text-[#211C19] sm:text-[70px] md:text-[82px] lg:text-[72px] xl:text-[86px] 2xl:text-[96px]">
              Treatments,
            </span>

            <span className="mt-2 block text-[61px] italic leading-[0.88] text-[#927C6D] sm:text-[73px] md:text-[85px] lg:text-[75px] xl:text-[89px] 2xl:text-[99px]">
              your way.
            </span>
          </h2>

          <div className="mt-10 grid gap-8 border-t border-[#5E5148]/20 pt-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <p className="max-w-[420px] text-[12px] font-light leading-[1.95] tracking-[0.045em] text-[#625951] sm:text-[13px]">
              Laser, skincare, and beauty treatments thoughtfully brought
              together in one warm, personal Brooklyn space.
            </p>

            <p className="hidden text-right text-[7px] font-light uppercase leading-[2] tracking-[0.4em] text-[#8A786C] sm:block">
              Real Results
              <br />
              A More You
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* =====================================================
        SERVICE MENU
    ===================================================== */}

    <div className="border-t border-[#493E36]/20">
      <div className="grid lg:grid-cols-3">
        {/* =====================================================
            01 — LASER
        ===================================================== */}

        <a
          href="#laser"
          className="group relative border-b border-[#493E36]/20 px-6 py-10 transition-colors duration-500 hover:bg-[#EFE8E1] sm:px-9 sm:py-12 lg:border-b-0 lg:border-r lg:px-8 xl:px-10"
        >
          <div className="flex items-start justify-between">
            <p className="text-[8px] font-light tracking-[0.3em] text-[#796A60]">
              01
            </p>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#493E36]/45 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
              <ArrowRight
                size={13}
                strokeWidth={1.1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="mx-auto mt-8 w-full max-w-[270px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
              <img
                src="/previews/house-of-laser/services-laser.png"
                alt="Laser hair removal"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
            </div>
          </div>

          {/* COPY */}
          <div className="mt-8">
            <h3
              className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.94] tracking-[-0.045em] text-[#241E1A] sm:text-[44px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]`}
            >
              Laser Hair
              <br />
              Removal
            </h3>

            <p className="mt-5 max-w-[330px] text-[11px] font-light leading-[1.85] tracking-[0.05em] text-[#655C55] xl:text-[12px]">
              Smooth, long-lasting results with advanced laser technology
              in a comfortable, private setting.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#907D70]/45 transition-all duration-500 group-hover:w-20" />
            </div>
          </div>
        </a>

        {/* =====================================================
            02 — FACIALS
        ===================================================== */}

        <a
          href="#facials"
          className="group relative border-b border-[#493E36]/20 px-6 py-10 transition-colors duration-500 hover:bg-[#EFE8E1] sm:px-9 sm:py-12 lg:border-b-0 lg:border-r lg:px-8 xl:px-10"
        >
          <div className="flex items-start justify-between">
            <p className="text-[8px] font-light tracking-[0.3em] text-[#796A60]">
              02
            </p>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#493E36]/45 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
              <ArrowRight
                size={13}
                strokeWidth={1.1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[270px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
              <img
                src="/previews/house-of-laser/services-facial.png"
                alt="Facials and skincare"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3
              className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.94] tracking-[-0.045em] text-[#241E1A] sm:text-[44px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]`}
            >
              Facials &amp;
              <br />
              Skincare
            </h3>

            <p className="mt-5 max-w-[330px] text-[11px] font-light leading-[1.85] tracking-[0.05em] text-[#655C55] xl:text-[12px]">
              Customized treatments to cleanse, restore, and reveal your
              healthiest skin.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#907D70]/45 transition-all duration-500 group-hover:w-20" />
            </div>
          </div>
        </a>

        {/* =====================================================
            03 — BEAUTY
        ===================================================== */}

        <a
          href="#experience"
          className="group relative px-6 py-10 transition-colors duration-500 hover:bg-[#EFE8E1] sm:px-9 sm:py-12 lg:px-8 xl:px-10"
        >
          <div className="flex items-start justify-between">
            <p className="text-[8px] font-light tracking-[0.3em] text-[#796A60]">
              03
            </p>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#493E36]/45 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
              <ArrowRight
                size={13}
                strokeWidth={1.1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 w-full max-w-[270px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
              <img
                src="/previews/house-of-laser/services-beauty.png"
                alt="Beauty and self-care"
                className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3
              className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.94] tracking-[-0.045em] text-[#241E1A] sm:text-[44px] lg:text-[38px] xl:text-[44px] 2xl:text-[48px]`}
            >
              Beauty &amp;
              <br />
              Self-Care
            </h3>

            <p className="mt-5 max-w-[330px] text-[11px] font-light leading-[1.85] tracking-[0.05em] text-[#655C55] xl:text-[12px]">
              Thoughtful treatments and enhancements designed to help you
              look and feel your best.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#907D70]/45 transition-all duration-500 group-hover:w-20" />
            </div>
          </div>
        </a>
      </div>
    </div>

    {/* =====================================================
        BOTTOM EDITORIAL DETAIL
    ===================================================== */}

    <div className="flex items-center justify-end gap-6 border-t border-[#493E36]/20 px-6 py-8 sm:px-10">
      <div className="h-px w-20 bg-[#75685E]/30 sm:w-28" />

      <p className="text-right text-[7px] uppercase tracking-[0.42em] text-[#796A60]">
        Real Results. A More You.
      </p>
    </div>
  </div>
</section>

{/* =====================================================
    LASER HAIR REMOVAL
===================================================== */}

<section
  id="laser"
  className="relative overflow-hidden bg-[#F3EEE8]"
>
  <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[42%_58%]">

    {/* =====================================================
        LEFT — EDITORIAL CONTENT
    ===================================================== */}

    <div className="relative flex min-h-[620px] flex-col px-7 py-12 sm:min-h-[650px] sm:px-10 sm:py-14 md:px-14 lg:min-h-[700px] lg:px-14 lg:py-14 xl:min-h-[730px] xl:px-20 xl:py-16">

      {/* TOP DECORATIVE LINE */}
      <div className="absolute left-10 top-0 hidden h-16 w-px bg-[#9A8576]/35 lg:block xl:left-14" />

      {/* TOP LABEL */}
      <div className="lg:pt-7">
        <div className="flex items-center gap-5">
          <p className="text-[8px] font-light uppercase tracking-[0.48em] text-[#927C6D]">
            Laser Hair Removal
          </p>

          <div className="h-px w-14 bg-[#927C6D]/35" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 items-center py-12 sm:py-14 lg:py-10">
        <div className="w-full">
          <h2
            className={`${bodoni.className} hls-bodoni font-normal tracking-[-0.05em] text-[#211C18]`}
          >
            <span className="block text-[52px] leading-[0.9] sm:text-[60px] md:text-[66px] lg:text-[62px] xl:text-[70px]">
              Smooth,
            </span>

            <span className="mt-1 block text-[54px] italic leading-[0.9] text-[#9A8373] sm:text-[62px] md:text-[68px] lg:text-[64px] xl:text-[72px]">
              simplified.
            </span>
          </h2>

          <p className="mt-8 max-w-[375px] text-[12px] font-light leading-[1.9] tracking-[0.02em] text-[#6D6660] sm:text-[13px]">
            Professional laser hair removal in a comfortable setting,
            with care tailored around you and your routine.
          </p>

          <a
            href="#book"
            className="group mt-9 inline-flex min-w-[235px] items-center justify-between border border-[#39322D]/60 px-7 py-4 text-[8px] font-normal uppercase tracking-[0.34em] text-[#302A26] transition-all duration-500 hover:bg-[#2A2521] hover:text-[#F4EFE9]"
          >
            <span>Book Laser</span>

            <ArrowRight
              size={13}
              strokeWidth={1}
              className="ml-10 transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* BOTTOM DETAIL */}
      <div className="flex items-end justify-between">
        <div>
          <div className="space-y-[6px]">
            {["Confidence", "Care", "Beauty", "You"].map((word) => (
              <p
                key={word}
                className="text-[6px] font-light uppercase tracking-[0.43em] text-[#82756B]"
              >
                {word}
              </p>
            ))}
          </div>

          <div className="mt-4 h-8 w-px bg-[#9A8576]/40" />
        </div>

        <p className="hidden text-right text-[6px] uppercase leading-[1.9] tracking-[0.38em] text-[#9A8373]/70 sm:block">
          Thoughtful Care
          <br />
          Lasting Results
        </p>
      </div>
    </div>

    {/* =====================================================
        RIGHT — ROUNDED EDITORIAL IMAGE
    ===================================================== */}

    <div className="relative flex min-h-[570px] items-center justify-center overflow-hidden px-5 py-8 sm:min-h-[620px] sm:px-8 sm:py-10 lg:min-h-[700px] lg:justify-start lg:px-0 lg:py-10 xl:min-h-[730px]">

      {/* BACKGROUND CIRCLE */}
      <div className="pointer-events-none absolute -right-[18%] top-[4%] h-[520px] w-[520px] rounded-full bg-[#DED4CB]/45 lg:h-[620px] lg:w-[620px]" />

      {/* LARGE THIN DECORATIVE ARC */}
      <div className="pointer-events-none absolute -right-[10%] -top-[18%] hidden h-[760px] w-[760px] rounded-full border border-[#8D796B]/20 lg:block" />

      {/* =====================================================
          ROUNDED IMAGE FRAME
      ===================================================== */}

      <div className="group relative z-10 h-[500px] w-full max-w-[680px] overflow-hidden rounded-[180px_180px_70px_180px] sm:h-[550px] sm:rounded-[220px_220px_90px_220px] lg:h-[620px] lg:w-[92%] lg:max-w-none lg:rounded-[300px_90px_90px_300px] xl:h-[650px] xl:w-[94%]">

        <img
          src="/previews/house-of-laser/laser-client.jpg"
          alt="Laser hair removal treatment"
          className="absolute inset-0 h-full w-full object-cover object-[52%_center] transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
        />

        {/* VERY LIGHT WARM TONE */}
        <div className="pointer-events-none absolute inset-0 bg-[#6C5545]/[0.025]" />

        {/* SUBTLE LEFT FADE */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-[#E1D7CE]/15 to-transparent" />

        {/* INNER CURVE */}
        <div className="pointer-events-none absolute -left-[27%] -top-[13%] h-[90%] w-[72%] rounded-full border border-white/45" />

        {/* IMAGE WORDS */}
        <div className="absolute right-[7%] top-[9%] hidden lg:block">
          <div className="space-y-[8px]">
            {["Smoother", "Brighter", "Confident", "You"].map((word) => (
              <p
                key={word}
                className="text-[6px] font-light uppercase tracking-[0.44em] text-[#5F5148]/65"
              >
                {word}
              </p>
            ))}
          </div>

          <div className="mt-5 h-px w-9 bg-[#695B52]/35" />
        </div>

        {/* BOTTOM DETAIL */}
        <div className="absolute bottom-[8%] right-[7%] hidden lg:block">
          <p className="text-right text-[6px] font-light uppercase leading-[2] tracking-[0.42em] text-[#5F5148]/65">
            Feel Good
            <br />
            In Your Skin
          </p>

          <div className="ml-auto mt-4 h-px w-9 bg-[#695B52]/35" />
        </div>
      </div>

      {/* =====================================================
          FLOATING SMALL CIRCLE
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-[7%] left-[2%] z-20 hidden h-24 w-24 rounded-full border border-[#8D796B]/25 lg:block xl:h-28 xl:w-28">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-center text-[5px] uppercase leading-[2.1] tracking-[0.35em] text-[#7C6A5F]/65">
            Smooth
            <br />
            Skin
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* =====================================================
    FACIALS & SKINCARE
===================================================== */}

<section
  id="facials"
  className="relative overflow-hidden bg-[#1D1C19]"
>
  <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[58%_42%]">

    {/* =====================================================
        LEFT — ROUNDED EDITORIAL IMAGE
    ===================================================== */}

    <div className="relative flex min-h-[570px] items-center justify-center overflow-hidden px-5 py-8 sm:min-h-[620px] sm:px-8 sm:py-10 lg:min-h-[700px] lg:justify-end lg:px-0 lg:py-10 xl:min-h-[730px]">

      {/* SOFT BACKGROUND SHAPE */}
      <div className="pointer-events-none absolute -left-[18%] top-[4%] h-[520px] w-[520px] rounded-full bg-[#3A332E]/70 lg:h-[620px] lg:w-[620px]" />

      {/* LARGE OUTER ARC */}
      <div className="pointer-events-none absolute -left-[10%] -top-[18%] hidden h-[760px] w-[760px] rounded-full border border-[#C9AD98]/15 lg:block" />

      {/* SECOND ABSTRACT CIRCLE */}
      <div className="pointer-events-none absolute -bottom-[28%] left-[16%] hidden h-[420px] w-[420px] rounded-full border border-[#C9AD98]/10 lg:block" />

      {/* =====================================================
          ORGANIC IMAGE FRAME
      ===================================================== */}

      <div className="group relative z-10 h-[500px] w-full max-w-[680px] overflow-hidden rounded-[180px_180px_180px_70px] sm:h-[550px] sm:rounded-[220px_220px_220px_90px] lg:h-[620px] lg:w-[94%] lg:max-w-none lg:rounded-[90px_300px_300px_90px] xl:h-[650px]">

        <img
          src="/previews/house-of-laser/facial-machine.jpg"
          alt="Facial and skincare treatment space"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
        />

        {/* VERY SUBTLE WARM TONE */}
        <div className="pointer-events-none absolute inset-0 bg-[#211A15]/[0.035]" />

        {/* SOFT RIGHT EDGE */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-[#1D1C19]/10 to-transparent" />

        {/* LARGE INNER CURVE */}
        <div className="pointer-events-none absolute -right-[28%] -top-[14%] h-[92%] w-[72%] rounded-full border border-white/35" />

        {/* SECOND INNER CURVE */}
        <div className="pointer-events-none absolute -bottom-[42%] -left-[18%] h-[70%] w-[65%] rounded-full border border-[#F2E7DE]/25" />

        {/* =====================================================
            TOP IMAGE DETAIL
        ===================================================== */}

        <div className="absolute left-[7%] top-[8%] hidden lg:block">
          <div className="space-y-[8px]">
            {["Healthy", "Skin", "Happier", "You"].map((word) => (
              <p
                key={word}
                className="text-[6px] font-light uppercase tracking-[0.44em] text-white/60"
              >
                {word}
              </p>
            ))}
          </div>

          <div className="mt-5 h-px w-9 bg-white/35" />
        </div>

        {/* =====================================================
            BOTTOM IMAGE DETAIL
        ===================================================== */}

        <div className="absolute bottom-[8%] left-[7%] hidden items-end gap-5 lg:flex">
          <div className="h-12 w-px bg-white/55" />

          <div className="space-y-[7px] pb-[1px]">
            <p className="text-[6px] font-light uppercase tracking-[0.44em] text-white/75">
              Restore
            </p>

            <p className="text-[6px] font-light uppercase tracking-[0.44em] text-white/75">
              Refresh
            </p>

            <p className="text-[6px] font-light uppercase tracking-[0.44em] text-white/75">
              Reveal
            </p>
          </div>
        </div>

        {/* SMALL RIGHT DETAIL */}
        <div className="absolute bottom-[8%] right-[8%] hidden lg:block">
          <p className="text-right text-[6px] font-light uppercase leading-[2] tracking-[0.4em] text-white/55">
            Your Skin
            <br />
            Your Ritual
          </p>

          <div className="ml-auto mt-4 h-px w-9 bg-white/30" />
        </div>
      </div>

      {/* =====================================================
          FLOATING DETAIL
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-[6%] right-[2%] z-20 hidden h-24 w-24 rounded-full border border-[#C9AD98]/25 lg:block xl:h-28 xl:w-28">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-center text-[5px] uppercase leading-[2.1] tracking-[0.35em] text-[#C9AD98]/70">
            Glow
            <br />
            Naturally
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        RIGHT — EDITORIAL CONTENT
    ===================================================== */}

    <div className="relative flex min-h-[620px] flex-col bg-[#1D1C19] px-7 py-12 sm:min-h-[650px] sm:px-10 sm:py-14 md:px-14 lg:min-h-[700px] lg:px-14 lg:py-14 xl:min-h-[730px] xl:px-20 xl:py-16">

      {/* TOP DECORATIVE LINE */}
      <div className="absolute right-10 top-0 hidden h-16 w-px bg-[#D3C0B1]/30 lg:block xl:right-14" />

      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div className="lg:pt-7">
        <div className="flex items-center gap-5">
          <p className="text-[8px] font-light uppercase tracking-[0.48em] text-[#C3AA96]">
            Facials &amp; Skincare
          </p>

          <div className="h-px w-14 bg-[#C3AA96]/35" />
        </div>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="flex flex-1 items-center py-12 sm:py-14 lg:py-10">
        <div className="w-full max-w-[470px]">

          {/* HEADING */}
          <h2
            className={`${bodoni.className} hls-bodoni font-normal tracking-[-0.05em]`}
          >
            <span className="block text-[52px] leading-[0.9] text-[#F5F1EC] sm:text-[60px] md:text-[66px] lg:text-[60px] xl:text-[68px]">
              Skin
            </span>

            <span className="block text-[52px] leading-[0.9] text-[#F5F1EC] sm:text-[60px] md:text-[66px] lg:text-[60px] xl:text-[68px]">
              deserves
            </span>

            <span className="mt-1 block text-[54px] italic leading-[0.9] text-[#C9AD98] sm:text-[62px] md:text-[68px] lg:text-[62px] xl:text-[70px]">
              attention.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-[390px] text-[12px] font-light leading-[1.9] tracking-[0.02em] text-[#B1AAA4] sm:text-[13px]">
            Thoughtful facial and skincare treatments in an intimate space
            designed for slowing down and taking care of yourself.
          </p>

          {/* CTA */}
          <a
            href="#book"
            className="group mt-9 inline-flex min-w-[235px] items-center justify-between border border-[#EEE4DB]/55 px-7 py-4 text-[8px] font-light uppercase tracking-[0.34em] text-[#F4EEE8] transition-all duration-500 hover:bg-[#F4EEE8] hover:text-[#201D1A]"
          >
            <span>Book a Facial</span>

            <ArrowRight
              size={13}
              strokeWidth={1}
              className="ml-10 transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}

      <div className="flex items-end justify-between">
        <div>
          <div className="space-y-[6px]">
            {["Restore", "Refresh", "Reveal", "Glow"].map((word) => (
              <p
                key={word}
                className="text-[6px] font-light uppercase tracking-[0.43em] text-[#C5AD99]/75"
              >
                {word}
              </p>
            ))}
          </div>

          <div className="mt-4 h-8 w-px bg-[#C5AD99]/35" />
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          <div className="h-px w-14 bg-[#C5AD99]/35" />

          <p className="text-right text-[6px] uppercase leading-[1.9] tracking-[0.38em] text-[#C5AD99]/75">
            Your Skin
            <br />
            Your Ritual
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* =====================================================
    EXPERIENCE + CONTACT + BOOKING
===================================================== */}

<section
  id="experience"
  className="relative overflow-hidden bg-[#F3EEE8]"
>
  {/* =====================================================
      EXPERIENCE
  ===================================================== */}

  <div className="relative mx-auto max-w-[1600px] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-12 lg:pt-16 xl:px-16">
    <div className="relative min-h-[590px] overflow-hidden rounded-[70px_70px_0_0] sm:min-h-[640px] sm:rounded-[110px_110px_0_0] lg:min-h-[670px] lg:rounded-[210px_210px_0_0]">
      <img
        src="/previews/house-of-laser/experience-background.png"
        alt="House of Laser and Spa experience"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* LIGHT WASH */}
      <div className="absolute inset-0 bg-[#F3EEE8]/52" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,238,232,0.76)_0%,rgba(243,238,232,0.48)_40%,rgba(243,238,232,0.12)_78%,transparent_100%)]" />

      {/* CURVES */}
      <div className="pointer-events-none absolute -left-[17%] -top-[48%] hidden h-[760px] w-[760px] rounded-full border border-[#8F7C6E]/20 lg:block" />

      <div className="pointer-events-none absolute -bottom-[58%] -right-[18%] hidden h-[720px] w-[720px] rounded-full border border-[#8F7C6E]/15 lg:block" />

      {/* TOP LEFT */}
      <div className="absolute left-[6%] top-[11%] hidden lg:block">
        <div className="h-12 w-px bg-[#8F7C6E]/30" />

        <p className="mt-5 text-[6px] font-light uppercase leading-[2] tracking-[0.44em] text-[#79695F]/65">
          Brooklyn
          <br />
          New York
        </p>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute right-[6%] top-[11%] hidden lg:block">
        <p className="text-right text-[6px] font-light uppercase leading-[2] tracking-[0.44em] text-[#79695F]/65">
          Beauty
          <br />
          Care
          <br />
          You
        </p>
      </div>

      {/* CENTER */}
      <div className="relative z-10 flex min-h-[590px] items-center justify-center px-7 py-20 text-center sm:min-h-[640px] sm:px-10 lg:min-h-[670px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#927E70]/25 bg-[#F3EEE8]/20 backdrop-blur-[2px]">
            <Sparkles
              size={13}
              strokeWidth={1}
              className="text-[#927E70]"
            />
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="h-px w-7 bg-[#927E70]/35" />

            <p className="text-[7px] font-light uppercase tracking-[0.5em] text-[#806E62]">
              House of Laser &amp; Spa
            </p>

            <div className="h-px w-7 bg-[#927E70]/35" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.05em]`}
          >
            <span className="block text-[50px] leading-[0.9] text-[#29231F] sm:text-[60px] md:text-[68px] lg:text-[74px] xl:text-[80px]">
              A little time
            </span>

            <span className="mt-1 block text-[52px] italic leading-[0.9] text-[#967E6D] sm:text-[62px] md:text-[70px] lg:text-[76px] xl:text-[82px]">
              just for you.
            </span>
          </h2>

          <div className="mt-8 h-px w-9 bg-[#8E7A6C]/35" />

          <p className="mt-7 max-w-[510px] text-[12px] font-light leading-[1.9] tracking-[0.015em] text-[#625A55] sm:text-[13px]">
            Laser, skincare, beauty, and self-care in a warm Brooklyn
            space designed to feel personal rather than clinical.
          </p>

          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-7 text-[7px] font-light uppercase tracking-[0.4em] text-[#554A43]"
          >
            <span>Visit The House</span>

            <span className="h-px w-10 bg-[#6E5E54]/40 transition-all duration-500 group-hover:w-16" />
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* =====================================================
      CONTACT
  ===================================================== */}

  <div
    id="contact"
    className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16"
  >
    <div className="relative overflow-hidden bg-[#E9E0D8]">
      {/* CONTINUATION CURVE */}
      <div className="pointer-events-none absolute -left-[330px] -bottom-[430px] hidden h-[700px] w-[700px] rounded-full border border-[#8C786B]/10 lg:block" />

      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* =====================================================
            LEFT — CONTACT INTRO
        ===================================================== */}

        <div className="relative flex flex-col justify-between px-7 py-14 sm:px-10 sm:py-16 lg:min-h-[500px] lg:border-r lg:border-[#75675E]/15 lg:px-14 lg:py-16 xl:px-16">
          <div>
            <div className="flex items-center gap-5">
              <p className="text-[7px] font-light uppercase tracking-[0.48em] text-[#8D786A]">
                Visit The House
              </p>

              <div className="h-px w-10 bg-[#8D786A]/35" />
            </div>

            <h3
              className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.05em]`}
            >
              <span className="block text-[47px] leading-[0.9] text-[#29231F] sm:text-[55px] md:text-[62px] lg:text-[58px] xl:text-[66px]">
                Find your
              </span>

              <span className="mt-1 block text-[49px] italic leading-[0.9] text-[#967E6D] sm:text-[57px] md:text-[64px] lg:text-[60px] xl:text-[68px]">
                moment here.
              </span>
            </h3>

            <p className="mt-7 max-w-[390px] text-[12px] font-light leading-[1.9] text-[#665E58] sm:text-[13px]">
              Visit our Brooklyn studio or reach out to plan your
              next treatment.
            </p>
          </div>

          <div className="mt-12 hidden items-center gap-5 lg:flex">
            <div className="h-px w-10 bg-[#8C786B]/30" />

            <p className="text-[6px] font-light uppercase tracking-[0.42em] text-[#8C786B]/65">
              Brooklyn · New York
            </p>
          </div>
        </div>

        {/* =====================================================
            RIGHT — DETAILS
        ===================================================== */}

        <div className="relative px-7 sm:px-10 lg:px-12 xl:px-16">
          {/* LOCATION */}

          <div className="group flex min-h-[230px] items-center border-b border-[#75675E]/15 py-10">
            <div className="grid w-full gap-7 sm:grid-cols-[42px_1fr_auto] sm:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#806E62]/25">
                <MapPin
                  size={13}
                  strokeWidth={1}
                  className="text-[#806E62]"
                />
              </div>

              <div>
                <p className="text-[6px] font-light uppercase tracking-[0.45em] text-[#8D786A]">
                  Location
                </p>

                <p
                  className={`${bodoni.className} hls-bodoni mt-3 text-[25px] font-normal leading-[1.2] tracking-[-0.025em] text-[#302925] sm:text-[28px]`}
                >
                  1690 E 14th St, Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#75675E]/30 text-[#4F453F] transition-all duration-500 hover:bg-[#29231F] hover:text-[#F3EEE8]"
              >
                <ArrowRight
                  size={13}
                  strokeWidth={1}
                />
              </a>
            </div>
          </div>

          {/* CONNECT */}

          <div className="group flex min-h-[230px] items-center py-10">
            <div className="grid w-full gap-7 sm:grid-cols-[42px_1fr_auto] sm:items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#806E62]/25">
                <Phone
                  size={13}
                  strokeWidth={1}
                  className="text-[#806E62]"
                />
              </div>

              <div>
                <p className="text-[6px] font-light uppercase tracking-[0.45em] text-[#8D786A]">
                  Connect
                </p>

                <a
                  href="tel:+19298339197"
                  className={`${bodoni.className} hls-bodoni mt-3 block w-fit text-[26px] font-normal tracking-[-0.025em] text-[#302925] transition-colors duration-300 hover:text-[#967E6D] sm:text-[29px]`}
                >
                  (929) 833-9197
                </a>

                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block w-fit text-[10px] font-light tracking-[0.03em] text-[#6C625C] transition-colors duration-300 hover:text-[#302925]"
                >
                  @houseoflaserspa
                </a>
              </div>

              <a
                href="tel:+19298339197"
                aria-label="Call House of Laser and Spa"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#75675E]/30 text-[#4F453F] transition-all duration-500 hover:bg-[#29231F] hover:text-[#F3EEE8]"
              >
                <ArrowRight
                  size={13}
                  strokeWidth={1}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM TRANSITION */}
      <div className="flex items-center gap-6 border-t border-[#75675E]/15 px-7 py-6 sm:px-10 lg:px-14">
        <p className="text-[6px] font-light uppercase tracking-[0.44em] text-[#8A786C]/65">
          House of Laser &amp; Spa
        </p>

        <div className="h-px flex-1 bg-[#75675E]/15" />

        <p className="hidden text-[6px] font-light uppercase tracking-[0.44em] text-[#8A786C]/65 sm:block">
          Beauty · Care · You
        </p>
      </div>
    </div>
  </div>

  {/* =====================================================
      BOOKING
  ===================================================== */}

  <div
    id="book"
    className="relative mx-auto max-w-[1600px] overflow-hidden bg-[#191815]"
  >
    {/* SOFT GLOW */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(188,158,135,0.12),transparent_42%)]" />

    {/* CONTINUING CURVES */}
    <div className="pointer-events-none absolute -left-[330px] -top-[430px] hidden h-[700px] w-[700px] rounded-full border border-[#C9AD98]/10 lg:block" />

    <div className="pointer-events-none absolute -bottom-[420px] -right-[260px] hidden h-[700px] w-[700px] rounded-full border border-[#C9AD98]/10 lg:block" />

    <div className="relative px-7 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-16 lg:py-24 xl:px-20">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
        {/* COPY */}

        <div>
          <div className="flex items-center gap-5">
            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-[#C3AA96]">
              Your Next Appointment
            </p>

            <div className="h-px w-11 bg-[#C3AA96]/30" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.05em]`}
          >
            <span className="block text-[48px] leading-[0.9] text-[#F6F2EE] sm:text-[58px] md:text-[66px] lg:text-[68px] xl:text-[74px]">
              Make a little time
            </span>

            <span className="mt-1 block text-[50px] italic leading-[0.9] text-[#C7B29F] sm:text-[60px] md:text-[68px] lg:text-[70px] xl:text-[76px]">
              for yourself.
            </span>
          </h2>

          <p className="mt-7 max-w-[500px] text-[12px] font-light leading-[1.9] text-white/45 sm:text-[13px]">
            Choose the treatment that feels right for you and make
            a little room in your routine for yourself.
          </p>
        </div>

        {/* ACTIONS */}

        <div className="lg:pb-1">
          <a
            href="tel:+19298339197"
            className="group flex w-full items-center justify-between border-b border-white/35 pb-5 text-white transition-colors duration-500 hover:border-white"
          >
            <span
              className={`${bodoni.className} hls-bodoni text-[27px] font-normal tracking-[-0.025em] sm:text-[30px]`}
            >
              Book an appointment
            </span>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-500 group-hover:bg-white group-hover:text-[#191815]">
              <ArrowRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </a>

          <a
            href="#services"
            className="group mt-7 flex items-center justify-between text-white/45 transition-colors duration-300 hover:text-white"
          >
            <span className="text-[7px] font-light uppercase tracking-[0.4em]">
              Explore Treatments
            </span>

            <span className="h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-white/50" />
          </a>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="mt-16 flex items-center gap-6 border-t border-white/[0.08] pt-7">
        <p className="text-[6px] font-light uppercase tracking-[0.44em] text-white/25">
          House of Laser &amp; Spa
        </p>

        <div className="h-px flex-1 bg-white/[0.07]" />

        <p className="hidden text-[6px] font-light uppercase tracking-[0.44em] text-white/25 sm:block">
          Brooklyn · New York
        </p>
      </div>
    </div>
  </div>
</section>
      </main>
    </div>
  );
}
