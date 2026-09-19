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
            EXPERIENCE
        ===================================================== */}

        <section id="experience" className="bg-[#1E1D19] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="group relative min-h-[520px] overflow-hidden md:min-h-[700px] lg:min-h-[760px]">
              <img
                src="/previews/house-of-laser/treatment-room.jpg"
                alt="House of Laser & Spa treatment room"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="flex min-h-[600px] items-center px-8 py-20 sm:px-10 md:px-16 lg:px-20 xl:px-24">
              <div className="max-w-[520px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#C7B29F]">
                  Inside The Spa
                </p>

                <h2
                  className={`${bodoni.className} hls-bodoni mt-8 text-[52px] font-normal leading-[0.94] tracking-[-0.045em] sm:text-[66px] md:text-[76px]`}
                >
                  Come in.
                  <br />
                  Slow down.
                  <br />
                  <span className="italic text-[#C7B29F]">
                    Stay awhile.
                  </span>
                </h2>

                <p className="mt-8 max-w-[440px] text-[14px] leading-7 text-white/55">
                  Warm lighting, thoughtful details, and an intimate
                  treatment space make every appointment feel like time
                  genuinely set aside for you.
                </p>

                <a
                  href="#services"
                  className="group mt-10 inline-flex items-center gap-4 border-b border-white/25 pb-2 text-[8px] uppercase tracking-[0.26em] text-white"
                >
                  Explore Treatments

                  <ArrowRight
                    size={13}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

{/* =====================================================
    SERVICES — EDITORIAL LAYOUT
===================================================== */}

<section
  id="services"
  className="relative overflow-hidden bg-[#F4EFE9]"
>
  {/* LARGE DECORATIVE ARC */}
  <div className="pointer-events-none absolute -left-[370px] -top-[560px] z-20 hidden h-[980px] w-[980px] rounded-full border border-[#776A60]/35 xl:block" />

  <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.31fr_0.69fr]">
    {/* =====================================================
        LEFT — LARGE IMAGE
    ===================================================== */}

    <div className="relative min-h-[560px] overflow-hidden lg:min-h-[980px]">
      <img
        src="/previews/house-of-laser/services-main.png"
        alt="House of Laser and Spa treatment space"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* VERY LIGHT WARM TONE */}
      <div className="absolute inset-0 bg-[#5A4638]/[0.04]" />

      {/* IMAGE WORDS */}
      <div className="absolute bottom-[9%] left-[10%] z-10 hidden lg:block">
        <div className="space-y-[9px]">
          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Confidence
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Care
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Beauty
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            You
          </p>
        </div>

        <div className="ml-1 mt-5 h-12 w-px bg-white/55" />
      </div>
    </div>

    {/* =====================================================
        RIGHT CONTENT
    ===================================================== */}

    <div className="relative px-6 py-20 sm:px-10 md:px-14 md:py-24 lg:px-14 lg:py-20 xl:px-20 xl:py-24">
      {/* =====================================================
          TOP INTRO
      ===================================================== */}

      <div className="grid gap-12 border-b border-[#493E36]/20 pb-14 md:grid-cols-[0.72fr_1fr] md:gap-14 lg:pb-16">
        {/* TITLE */}

        <div>
          <div className="flex items-center gap-5">
            <p className="text-[8px] font-normal uppercase tracking-[0.45em] text-[#51463F]">
              Services
            </p>

            <div className="h-px w-20 bg-[#51463F]/40" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-9 font-normal tracking-[-0.045em] text-[#211B18]`}
          >
            <span className="block text-[54px] leading-[0.9] sm:text-[66px] md:text-[72px] lg:text-[66px] xl:text-[76px]">
              Treatments,
            </span>

            <span className="mt-1 block text-[58px] italic leading-[0.9] text-[#907D70] sm:text-[70px] md:text-[78px] lg:text-[72px] xl:text-[82px]">
              your way.
            </span>
          </h2>
        </div>

        {/* INTRO COPY */}

        <div className="flex items-end md:justify-end">
          <p className="max-w-[300px] text-[12px] font-light leading-[1.85] tracking-[0.11em] text-[#554E48]">
            Laser, skincare, and beauty treatments thoughtfully brought
            together under one roof.
          </p>
        </div>
      </div>

      {/* =====================================================
          SERVICE 01 — LASER
      ===================================================== */}

      <a
        href="#laser"
        className="group grid gap-6 border-b border-[#493E36]/20 py-8 transition-opacity duration-500 hover:opacity-75 md:grid-cols-[34px_160px_1fr_48px] md:items-center lg:grid-cols-[34px_145px_1fr_48px] xl:grid-cols-[34px_175px_1fr_48px]"
      >
        {/* NUMBER */}

        <p className="self-start pt-2 text-[8px] font-light tracking-[0.28em] text-[#796A60] md:self-center md:pt-0">
          01
        </p>

        {/* IMAGE */}

        <div className="relative h-[230px] w-[165px] overflow-hidden rounded-t-[82px] md:h-[185px] md:w-[135px] md:rounded-t-[68px] lg:h-[190px] lg:w-[140px] xl:h-[215px] xl:w-[158px]">
          <img
            src="/previews/house-of-laser/services-laser.png"
            alt="Laser hair removal"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}

        <div className="md:px-3 lg:px-4">
          <h3
            className={`${bodoni.className} hls-bodoni text-[38px] font-normal leading-[0.93] tracking-[-0.035em] text-[#241E1A] md:text-[35px] lg:text-[37px] xl:text-[43px]`}
          >
            Laser Hair
            <br />
            Removal
          </h3>

          <p className="mt-4 max-w-[315px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Smooth, long-lasting results with advanced laser technology in
            a comfortable, private setting.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-14 bg-[#907D70]/50" />
          </div>
        </div>

        {/* ARROW */}

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493E36]/55 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
          <ArrowRight
            size={14}
            strokeWidth={1.1}
            className="transition-transform duration-500 group-hover:translate-x-[2px]"
          />
        </div>
      </a>

      {/* =====================================================
          SERVICE 02 — FACIALS
      ===================================================== */}

      <a
        href="#facials"
        className="group grid gap-6 border-b border-[#493E36]/20 py-8 transition-opacity duration-500 hover:opacity-75 md:grid-cols-[34px_160px_1fr_48px] md:items-center lg:grid-cols-[34px_145px_1fr_48px] xl:grid-cols-[34px_175px_1fr_48px]"
      >
        {/* NUMBER */}

        <p className="self-start pt-2 text-[8px] font-light tracking-[0.28em] text-[#796A60] md:self-center md:pt-0">
          02
        </p>

        {/* IMAGE */}

        <div className="relative h-[230px] w-[165px] overflow-hidden rounded-t-[82px] md:h-[185px] md:w-[135px] md:rounded-t-[68px] lg:h-[190px] lg:w-[140px] xl:h-[215px] xl:w-[158px]">
          <img
            src="/previews/house-of-laser/services-facial.png"
            alt="Facials and skincare treatment"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}

        <div className="md:px-3 lg:px-4">
          <h3
            className={`${bodoni.className} hls-bodoni text-[38px] font-normal leading-[0.93] tracking-[-0.035em] text-[#241E1A] md:text-[35px] lg:text-[37px] xl:text-[43px]`}
          >
            Facials &amp;
            <br />
            Skincare
          </h3>

          <p className="mt-4 max-w-[315px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Customized treatments to cleanse, restore, and reveal your
            healthiest skin.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-14 bg-[#907D70]/50" />
          </div>
        </div>

        {/* ARROW */}

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493E36]/55 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
          <ArrowRight
            size={14}
            strokeWidth={1.1}
            className="transition-transform duration-500 group-hover:translate-x-[2px]"
          />
        </div>
      </a>

      {/* =====================================================
          SERVICE 03 — BEAUTY
      ===================================================== */}

      <a
        href="#experience"
        className="group grid gap-6 border-b border-[#493E36]/20 py-8 transition-opacity duration-500 hover:opacity-75 md:grid-cols-[34px_160px_1fr_48px] md:items-center lg:grid-cols-[34px_145px_1fr_48px] xl:grid-cols-[34px_175px_1fr_48px]"
      >
        {/* NUMBER */}

        <p className="self-start pt-2 text-[8px] font-light tracking-[0.28em] text-[#796A60] md:self-center md:pt-0">
          03
        </p>

        {/* IMAGE */}

        <div className="relative h-[230px] w-[165px] overflow-hidden rounded-t-[82px] md:h-[185px] md:w-[135px] md:rounded-t-[68px] lg:h-[190px] lg:w-[140px] xl:h-[215px] xl:w-[158px]">
          <img
            src="/previews/house-of-laser/services-beauty.png"
            alt="Beauty and self-care"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}

        <div className="md:px-3 lg:px-4">
          <h3
            className={`${bodoni.className} hls-bodoni text-[38px] font-normal leading-[0.93] tracking-[-0.035em] text-[#241E1A] md:text-[35px] lg:text-[37px] xl:text-[43px]`}
          >
            Beauty &amp;
            <br />
            Self-Care
          </h3>

          <p className="mt-4 max-w-[315px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Thoughtful treatments and enhancements designed to help you
            look and feel your best.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-14 bg-[#907D70]/50" />
          </div>
        </div>

        {/* ARROW */}

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493E36]/55 text-[#342B26] transition-all duration-500 group-hover:bg-[#2C2521] group-hover:text-[#F4EFE9]">
          <ArrowRight
            size={14}
            strokeWidth={1.1}
            className="transition-transform duration-500 group-hover:translate-x-[2px]"
          />
        </div>
      </a>

      {/* =====================================================
          BOTTOM DETAIL
      ===================================================== */}

      <div className="mt-8 flex items-center justify-end gap-6">
        <div className="hidden h-px w-24 bg-[#75685E]/35 sm:block" />

        <p className="text-[7px] uppercase tracking-[0.42em] text-[#796A60]">
          Real Results. A More You.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* =====================================================
            LASER
        ===================================================== */}

{/* =====================================================
    LASER HAIR REMOVAL
===================================================== */}

<section
  id="laser"
  className="relative overflow-hidden bg-[#F2ECE5]"
>
  <div className="mx-auto grid min-h-[760px] max-w-[1600px] lg:grid-cols-[41%_59%]">

    {/* =====================================================
        LEFT — CONTENT
    ===================================================== */}

    <div className="relative flex min-h-[680px] items-center px-7 py-20 sm:px-10 md:px-14 lg:min-h-[760px] lg:px-16 xl:min-h-[850px] xl:px-[100px]">

      {/* TOP DECORATIVE LINE */}
      <div className="absolute left-7 top-[11%] h-[90px] w-px bg-[#9A8576]/40 sm:left-10 md:left-14 lg:left-16 xl:left-[78px]" />

      <div className="w-full max-w-[500px]">

        {/* EYEBROW */}
        <p className="text-[8px] font-light uppercase tracking-[0.48em] text-[#927C6D] sm:text-[9px]">
          Laser Hair Removal
        </p>

        {/* TITLE */}
        <h2
          className={`${bodoni.className} hls-bodoni mt-14 font-normal tracking-[-0.045em] text-[#211C18]`}
        >
          <span className="block text-[58px] leading-[0.88] sm:text-[70px] md:text-[78px] lg:text-[72px] xl:text-[84px]">
            Smooth,
          </span>

          <span className="mt-1 block text-[61px] italic leading-[0.88] text-[#9A8373] sm:text-[73px] md:text-[82px] lg:text-[76px] xl:text-[88px]">
            simplified.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-11 max-w-[430px] text-[13px] font-light leading-[1.85] tracking-[0.025em] text-[#6D6660] sm:text-[14px]">
          Professional laser hair removal in a comfortable setting with
          care tailored around you and your routine.
        </p>

        {/* CTA */}
        <a
          href="#book"
          className="group mt-12 inline-flex min-w-[270px] items-center justify-between border border-[#39322D]/80 px-8 py-[19px] text-[8px] font-normal uppercase tracking-[0.36em] text-[#302A26] transition-all duration-500 hover:bg-[#2A2521] hover:text-[#F4EFE9]"
        >
          <span>Book Laser</span>

          <ArrowRight
            size={14}
            strokeWidth={1}
            className="ml-10 transition-transform duration-500 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* =====================================================
          BOTTOM MICRO COPY
      ===================================================== */}

      <div className="absolute bottom-[8%] left-7 hidden sm:block sm:left-10 md:left-14 lg:left-16 xl:left-[100px]">
        <div className="space-y-[8px]">
          <p className="text-[7px] font-light uppercase tracking-[0.43em] text-[#80736A]">
            Confidence
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.43em] text-[#80736A]">
            Care
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.43em] text-[#80736A]">
            Beauty
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.43em] text-[#80736A]">
            You
          </p>
        </div>

        <div className="mt-6 h-14 w-px bg-[#9A8576]/45" />
      </div>
    </div>

    {/* =====================================================
        RIGHT — IMAGE
    ===================================================== */}

    <div className="group relative min-h-[520px] overflow-hidden sm:min-h-[620px] lg:min-h-[760px] xl:min-h-[850px]">
      <img
        src="/previews/house-of-laser/laser-client.jpg"
        alt="Laser hair removal treatment"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
      />

      {/* SUBTLE WARM TONE */}
      <div className="absolute inset-0 bg-[#4A372A]/[0.04]" />

      {/* IMAGE DETAIL */}
      <div className="absolute right-[9%] top-[9%] hidden lg:block">
        <div className="space-y-[11px]">
          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-[#695B52]/60">
            Smoother
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-[#695B52]/60">
            Brighter
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-[#695B52]/60">
            Confident
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-[#695B52]/60">
            You
          </p>
        </div>

        <div className="mt-5 h-px w-10 bg-[#695B52]/30" />
      </div>
    </div>
  </div>
</section>

        {/* =====================================================
            FACIALS
        ===================================================== */}

{/* =====================================================
    FACIALS & SKINCARE
===================================================== */}

<section
  id="facials"
  className="relative overflow-hidden bg-[#1D1C19]"
>
  <div className="mx-auto grid min-h-[760px] max-w-[1600px] lg:grid-cols-[58%_42%]">

    {/* =====================================================
        LEFT — IMAGE
    ===================================================== */}

    <div className="group relative min-h-[560px] overflow-hidden sm:min-h-[650px] lg:min-h-[800px] xl:min-h-[860px]">
      <img
        src="/previews/house-of-laser/facial-machine.jpg"
        alt="Facial and skincare treatment space"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.012]"
      />

      {/* VERY SUBTLE WARM OVERLAY */}
      <div className="absolute inset-0 bg-[#211A15]/[0.04]" />

      {/* LEFT IMAGE WORDS */}
      <div className="absolute bottom-[7%] left-[6%] z-10 hidden lg:flex lg:items-end lg:gap-5">
        <div className="h-[58px] w-px bg-white/65" />

        <div className="space-y-[8px] pb-[1px]">
          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Restore
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Refresh
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-white/80">
            Reveal
          </p>
        </div>
      </div>

      {/* OPTIONAL TOP-LEFT DETAIL */}
      <div className="absolute left-[7%] top-[7%] hidden lg:block">
        <div className="space-y-[9px]">
          <p className="text-[7px] font-light uppercase tracking-[0.4em] text-[#44372F]/50">
            Healthy
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.4em] text-[#44372F]/50">
            Skin
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.4em] text-[#44372F]/50">
            Happier
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.4em] text-[#44372F]/50">
            You
          </p>
        </div>

        <div className="mt-5 h-px w-9 bg-[#44372F]/25" />
      </div>
    </div>

    {/* =====================================================
        RIGHT — EDITORIAL CONTENT
    ===================================================== */}

    <div className="relative flex min-h-[680px] items-center bg-[#1D1C19] px-8 py-20 sm:px-10 md:px-14 lg:min-h-[800px] lg:px-16 xl:min-h-[860px] xl:px-[78px]">

      {/* TOP RIGHT DECORATIVE LINE */}
      <div className="absolute right-[8%] top-[7%] hidden h-[92px] w-px bg-[#D3C0B1]/45 lg:block" />

      <div className="w-full max-w-[520px]">

        {/* EYEBROW */}
        <p className="text-[8px] font-light uppercase tracking-[0.48em] text-[#C3AA96] sm:text-[9px]">
          Facials &amp; Skincare
        </p>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <h2
          className={`${bodoni.className} hls-bodoni mt-12 font-normal tracking-[-0.045em]`}
        >
          <span className="block text-[60px] leading-[0.88] text-[#F5F1EC] sm:text-[72px] md:text-[80px] lg:text-[74px] xl:text-[86px]">
            Skin
          </span>

          <span className="block text-[60px] leading-[0.88] text-[#F5F1EC] sm:text-[72px] md:text-[80px] lg:text-[74px] xl:text-[86px]">
            deserves
          </span>

          <span className="mt-2 block text-[62px] italic leading-[0.88] text-[#C9AD98] sm:text-[74px] md:text-[82px] lg:text-[76px] xl:text-[88px]">
            attention.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-11 max-w-[470px] text-[13px] font-light leading-[1.9] tracking-[0.015em] text-[#B1AAA4] sm:text-[14px]">
          Thoughtful facial and skincare treatments in an intimate space
          designed for slowing down and taking care of yourself.
        </p>

        {/* BUTTON */}
        <a
          href="#book"
          className="group mt-12 inline-flex min-w-[275px] items-center justify-between border border-[#EEE4DB]/65 px-8 py-[19px] text-[8px] font-light uppercase tracking-[0.37em] text-[#F4EEE8] transition-all duration-500 hover:bg-[#F4EEE8] hover:text-[#201D1A]"
        >
          <span>Book a Facial</span>

          <ArrowRight
            size={14}
            strokeWidth={1}
            className="ml-10 transition-transform duration-500 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* =====================================================
          BOTTOM RIGHT DETAIL
      ===================================================== */}

      <div className="absolute bottom-[7%] right-[7%] hidden items-center gap-6 lg:flex">
        <div className="h-px w-[92px] bg-[#C5AD99]/55" />

        <p className="whitespace-nowrap text-[7px] font-light uppercase tracking-[0.44em] text-[#C5AD99]">
          Your Skin. Your Ritual.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* =====================================================
            STATEMENT
        ===================================================== */}

        <section className="bg-[#F3EEE8] px-6 py-28 md:px-10 md:py-40 lg:px-14">
          <div className="mx-auto max-w-[1000px] text-center">
            <Sparkles
              size={16}
              strokeWidth={1}
              className="mx-auto text-[#8A796B]"
            />

            <p className="mt-7 text-[8px] uppercase tracking-[0.36em] text-[#897A6E]">
              House of Laser &amp; Spa
            </p>

            <h2
              className={`${bodoni.className} hls-bodoni mt-7 text-[50px] font-normal leading-[0.95] tracking-[-0.045em] sm:text-[64px] md:text-[78px]`}
            >
              A little time
              <br className="hidden sm:block" />{" "}
              <span className="italic text-[#8B7565]">
                just for you.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[560px] text-[14px] leading-7 text-[#6E6660]">
              Beauty, skincare, and self-care in a warm Brooklyn space
              designed to feel personal rather than clinical.
            </p>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="border-y border-black/10 bg-[#E4DCD4]"
        >
          <div className="mx-auto grid max-w-[1250px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-7 py-20 sm:px-10 md:px-14 lg:border-r lg:border-black/10 lg:px-16 lg:py-24">
              <p className="text-[8px] uppercase tracking-[0.35em] text-[#897A6E]">
                Visit The House
              </p>

              <h2
                className={`${bodoni.className} hls-bodoni mt-6 text-[52px] font-normal leading-[0.94] tracking-[-0.045em] md:text-[70px]`}
              >
                Come see us
                <br />
                <span className="italic text-[#8B7565]">
                  in Brooklyn.
                </span>
              </h2>

              <p className="mt-7 max-w-[430px] text-[14px] leading-7 text-[#6E6660]">
                Laser, skincare, beauty, and self-care in an intimate
                space designed around your experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              <div className="border-t border-black/10 px-7 py-14 sm:border-r sm:border-t-0 md:px-10 lg:px-12">
                <MapPin
                  size={18}
                  strokeWidth={1.2}
                  className="text-[#796A5E]"
                />

                <p className="mt-7 text-[7px] uppercase tracking-[0.3em] text-[#897A6E]">
                  Visit
                </p>

                <p
                  className={`${bodoni.className} hls-bodoni mt-4 text-[24px] font-normal leading-8`}
                >
                  1690 E 14th St
                  <br />
                  Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>

              <div className="border-t border-black/10 px-7 py-14 sm:border-t-0 md:px-10 lg:px-12">
                <Phone
                  size={18}
                  strokeWidth={1.2}
                  className="text-[#796A5E]"
                />

                <p className="mt-7 text-[7px] uppercase tracking-[0.3em] text-[#897A6E]">
                  Connect
                </p>

                <a
                  href="tel:+19298339197"
                  className={`${bodoni.className} hls-bodoni mt-4 block text-[24px] font-normal transition-colors hover:text-[#8B7565]`}
                >
                  (929) 833-9197
                </a>

                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-[12px] text-[#6E6660] transition-colors hover:text-[#28231F]"
                >
                  @houseoflaserspa
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOOKING CTA
        ===================================================== */}

        <section
          id="book"
          className="relative overflow-hidden bg-[#191815] px-6 py-28 text-white md:px-10 md:py-36 lg:px-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,137,117,0.10),transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-[900px] text-center">
            <p className="text-[8px] uppercase tracking-[0.36em] text-[#C7B29F]">
              Your Next Appointment
            </p>

            <h2
              className={`${bodoni.className} hls-bodoni mt-7 text-[52px] font-normal leading-[0.94] tracking-[-0.045em] sm:text-[66px] md:text-[84px]`}
            >
              Make a little time
              <br />
              <span className="italic text-[#C7B29F]">
                for yourself.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[520px] text-[13px] leading-7 text-white/50">
              Laser, skincare, beauty, and self-care — thoughtfully
              brought together in one Brooklyn space.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+19298339197"
                className="inline-flex min-w-[225px] items-center justify-center border border-white/60 px-8 py-4 text-[8px] font-light uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-[#28231F]"
              >
                Book an Appointment
              </a>

              <a
                href="#services"
                className="inline-flex min-w-[185px] items-center justify-center px-7 py-4 text-[8px] uppercase tracking-[0.25em] text-white/55 transition-colors duration-300 hover:text-white"
              >
                View Treatments
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#191815] px-6 pb-10 text-white md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1250px] border-t border-white/10 pt-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <p
                className={`${bodoni.className} hls-bodoni text-[32px] font-normal tracking-[-0.035em]`}
              >
                House of Laser
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/35">
                &amp; Spa · Brooklyn
              </p>

              <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-white/40">
                Laser, skincare, beauty, and self-care in Brooklyn, New
                York.
              </p>
            </div>

            <div>
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#C7B29F]">
                Visit
              </p>

              <p className="mt-5 text-[12px] leading-6 text-white/45">
                1690 E 14th St
                <br />
                Unit 2
                <br />
                Brooklyn, NY 11229
              </p>
            </div>

            <div>
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#C7B29F]">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[12px] text-white/45 transition-colors hover:text-white"
                >
                  @houseoflaserspa
                </a>

                <a
                  href="tel:+19298339197"
                  className="w-fit text-[12px] text-white/45 transition-colors hover:text-white"
                >
                  (929) 833-9197
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-[7px] uppercase tracking-[0.24em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser &amp; Spa</p>
            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </div>
  );
}