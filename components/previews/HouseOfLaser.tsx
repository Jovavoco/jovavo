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
  {/* =====================================================
      BACKGROUND IMAGE
  ===================================================== */}

  <img
    src="/previews/house-of-laser/spa-hero.png"
    alt="House of Laser & Spa treatment room"
    className="hls-hero-image absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
  />

  {/* LIGHT IMAGE TREATMENT */}
  <div className="absolute inset-0 bg-black/[0.03]" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/[0.07] via-transparent to-black/[0.16]" />

  {/* =====================================================
      MINIMAL EDITORIAL LINEWORK
  ===================================================== */}

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
  >
    {/* ONE LARGE SOFT ARC */}
    <div className="absolute -right-[330px] top-[10%] hidden h-[720px] w-[720px] rounded-full border border-white/[0.10] lg:block xl:-right-[280px] xl:h-[800px] xl:w-[800px]" />

    {/* LEFT VERTICAL LINE */}
    <div className="absolute bottom-[14%] left-[8%] top-[24%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.12] to-transparent lg:block" />

    {/* RIGHT SHORT VERTICAL LINE */}
    <div className="absolute right-[8%] top-[19%] hidden h-24 w-px bg-gradient-to-b from-white/[0.15] to-transparent lg:block" />

    {/* LEFT HORIZONTAL DETAIL */}
    <div className="absolute left-[8%] top-[42%] hidden items-center gap-3 lg:flex">
      <span className="h-px w-10 bg-white/[0.18]" />
      <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
    </div>

    {/* RIGHT HORIZONTAL DETAIL */}
    <div className="absolute bottom-[29%] right-[8%] hidden items-center gap-3 lg:flex">
      <span className="h-[3px] w-[3px] rounded-full bg-white/30" />
      <span className="h-px w-12 bg-white/[0.18]" />
    </div>

    {/* MOBILE ARC */}
    <div className="absolute -right-[210px] top-[18%] h-[380px] w-[380px] rounded-full border border-white/[0.09] lg:hidden" />
  </div>

  {/* =====================================================
      DESKTOP NAV
  ===================================================== */}

  <header className="hls-hero-nav absolute left-0 right-0 top-0 z-30 hidden lg:block">
    <div className="mx-auto max-w-[1600px] px-12 pt-11 xl:px-16 xl:pt-14">
      <div className="grid grid-cols-[1fr_auto_1fr] items-start">

        {/* LOCATION */}

        <div>
          <p className="text-[11px] font-light uppercase tracking-[0.3em] text-white/90">
            Brooklyn
          </p>

          <p className="mt-1.5 text-[9px] font-light uppercase tracking-[0.3em] text-white/60">
            New York
          </p>
        </div>

        {/* BRAND */}

        <a
          href="#home"
          className="group flex flex-col items-center text-center"
        >
          <p className="whitespace-nowrap text-[13px] font-light uppercase tracking-[0.36em] text-white">
            House of Laser &amp; Spa
          </p>

          <span className="mt-5 h-px w-10 bg-white/40 transition-all duration-500 group-hover:w-16" />
        </a>

        {/* LINKS */}

        <nav className="flex items-center justify-end gap-9 xl:gap-11">
          <a
            href="#services"
            className="text-[11px] font-light uppercase tracking-[0.27em] text-white/90 transition-colors duration-300 hover:text-white"
          >
            Services
          </a>

          <a
            href="#about"
            className="text-[11px] font-light uppercase tracking-[0.27em] text-white/90 transition-colors duration-300 hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-[11px] font-light uppercase tracking-[0.27em] text-white/90 transition-colors duration-300 hover:text-white"
          >
            Visit
          </a>
        </nav>
      </div>
    </div>
  </header>

  {/* =====================================================
      MOBILE NAV
  ===================================================== */}

  <div className="hls-hero-nav absolute left-0 right-0 top-0 z-40 flex items-start justify-between px-5 pt-6 lg:hidden">
    <a href="#home">
      <p className="text-[12px] font-light uppercase tracking-[0.22em] text-white sm:text-[13px]">
        House of Laser &amp; Spa
      </p>

      <p className="mt-1.5 text-[8px] font-light uppercase tracking-[0.28em] text-white/65">
        Brooklyn · New York
      </p>
    </a>

    <button
      type="button"
      aria-label="Toggle navigation"
      onClick={() => setMenuOpen((current) => !current)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/[0.04] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#29231F]"
    >
      {menuOpen ? (
        <X size={16} strokeWidth={1} />
      ) : (
        <Menu size={16} strokeWidth={1} />
      )}
    </button>
  </div>

  {/* =====================================================
      MOBILE MENU
  ===================================================== */}

  {menuOpen && (
    <div className="absolute inset-x-0 top-0 z-30 bg-[#191715]/95 px-6 pb-10 pt-24 text-white backdrop-blur-xl lg:hidden">
      <div className="flex flex-col">
        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className={`${bodoni.className} hls-bodoni border-b border-white/10 py-4 text-[28px] font-normal tracking-[-0.025em]`}
        >
          Services
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`${bodoni.className} hls-bodoni border-b border-white/10 py-4 text-[28px] font-normal tracking-[-0.025em]`}
        >
          About
        </a>

        <a
          href="#laser"
          onClick={() => setMenuOpen(false)}
          className={`${bodoni.className} hls-bodoni border-b border-white/10 py-4 text-[28px] font-normal tracking-[-0.025em]`}
        >
          Laser Hair Removal
        </a>

        <a
          href="#facials"
          onClick={() => setMenuOpen(false)}
          className={`${bodoni.className} hls-bodoni border-b border-white/10 py-4 text-[28px] font-normal tracking-[-0.025em]`}
        >
          Facials &amp; Skincare
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`${bodoni.className} hls-bodoni border-b border-white/10 py-4 text-[28px] font-normal tracking-[-0.025em]`}
        >
          Visit
        </a>

        {/* RECTANGULAR MOBILE BUTTON */}

        <a
          href="#book"
          onClick={() => setMenuOpen(false)}
          className="group mt-8 flex w-full items-center justify-between border border-white/55 px-6 py-[17px] text-white transition-all duration-500 hover:bg-white hover:text-[#29231F]"
        >
          <span className="text-[9px] font-light uppercase tracking-[0.3em]">
            Book an Appointment
          </span>

          <ArrowRight
            size={13}
            strokeWidth={1}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  )}

  {/* =====================================================
      HERO CENTER
  ===================================================== */}

  <div className="absolute inset-0 z-20 flex items-center justify-center px-5 pt-20 text-center sm:pt-24 lg:pt-24">
    <div className="hls-hero-text flex w-full max-w-[1000px] flex-col items-center">

      {/* EYEBROW */}

      <div className="mb-7 flex items-center justify-center gap-4">
        <span className="h-px w-8 bg-white/40" />

        <p className="text-[9px] font-light uppercase tracking-[0.32em] text-white/85">
          Beauty · Care · You
        </p>

        <span className="h-px w-8 bg-white/40" />
      </div>

      {/* TITLE */}

      <h1
        className={`${bodoni.className} hls-bodoni font-normal tracking-[-0.055em] text-[#FAF7F3]`}
      >
        <span className="block text-[54px] leading-[0.87] sm:text-[67px] md:text-[80px] lg:text-[90px] xl:text-[98px]">
          Beauty
        </span>

        <span className="mt-1 block text-[51px] italic leading-[0.87] text-[#F5EEE8] sm:text-[64px] md:text-[77px] lg:text-[87px] xl:text-[95px]">
          without limits.
        </span>
      </h1>

      {/* SIMPLE DIVIDER */}

      <div className="mt-8 flex items-center gap-4">
        <span className="h-px w-10 bg-white/35" />

        <span className="h-[3px] w-[3px] rounded-full bg-white/50" />

        <span className="h-px w-10 bg-white/35" />
      </div>

      {/* COPY */}

      <p className="mt-6 max-w-[420px] text-[12px] font-light leading-[1.9] tracking-[0.025em] text-white/80 sm:text-[13px]">
        Laser, skincare, and self-care designed around you.
      </p>

      {/* =====================================================
          RECTANGULAR BOOK AN APPOINTMENT BUTTON
      ===================================================== */}

      <a
        href="#book"
        className="group mt-9 inline-flex min-w-[285px] items-center justify-between border border-white/60 px-7 py-[17px] text-white transition-all duration-500 hover:bg-white hover:text-[#29231F] sm:min-w-[310px] sm:px-8"
      >
        <span className="text-[9px] font-light uppercase tracking-[0.3em] sm:text-[10px]">
          Book an Appointment
        </span>

        <ArrowRight
          size={14}
          strokeWidth={1}
          className="ml-8 transition-transform duration-500 group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>

  {/* =====================================================
      DESKTOP BOTTOM DETAILS
  ===================================================== */}

  <div className="absolute bottom-10 left-12 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:left-16">
    <p className="text-[9px] font-light uppercase tracking-[0.28em] text-white/65">
      Laser · Skincare · Self-Care
    </p>

    <span className="h-px w-9 bg-white/30" />
  </div>

  <div className="absolute bottom-10 right-12 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:right-16">
    <span className="h-px w-9 bg-white/30" />

    <p className="text-[9px] font-light uppercase tracking-[0.28em] text-white/65">
      A calmer, brighter you
    </p>
  </div>

  {/* =====================================================
      MOBILE BOTTOM
  ===================================================== */}

  <div className="absolute bottom-7 left-5 right-5 z-20 flex items-center gap-4 lg:hidden">
    <p className="shrink-0 text-[8px] font-light uppercase tracking-[0.25em] text-white/65">
      Brooklyn · NY
    </p>

    <span className="h-px flex-1 bg-white/25" />

    <p className="shrink-0 text-[8px] font-light uppercase tracking-[0.25em] text-white/65">
      Beauty · Care · You
    </p>
  </div>
</section>

 {/* =====================================================
    ABOUT — THE HOUSE
===================================================== */}

<section
  id="about"
  className="relative overflow-hidden bg-[#F6F2EC]"
>
  {/* =====================================================
      LARGE BACKGROUND LINEWORK
  ===================================================== */}

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 overflow-hidden"
  >
    {/* HUGE RIGHT CIRCLE */}
    <div className="absolute -right-[420px] -top-[360px] hidden h-[1120px] w-[1120px] rounded-full border border-[#8E8177]/20 lg:block" />

    {/* SECOND OFFSET CIRCLE */}
    <div className="absolute -right-[255px] -top-[185px] hidden h-[760px] w-[760px] rounded-full border border-[#8E8177]/10 xl:block" />

    {/* BOTTOM LEFT SWEEP */}
    <div className="absolute -bottom-[480px] -left-[360px] hidden h-[800px] w-[800px] rounded-full border border-[#8E8177]/14 lg:block" />

    {/* LONG VERTICAL GUIDE */}
    <div className="absolute bottom-[10%] left-[4.5%] top-[13%] hidden w-px bg-gradient-to-b from-transparent via-[#8E8177]/20 to-transparent xl:block" />

    {/* TOP HORIZONTAL DETAIL */}
    <div className="absolute left-[5%] top-[11%] hidden items-center gap-4 xl:flex">
      <span className="h-[3px] w-[3px] rounded-full bg-[#8E8177]/45" />
      <span className="h-px w-16 bg-[#8E8177]/25" />
    </div>

    {/* MOBILE ARC */}
    <div className="absolute -right-[230px] top-[3%] h-[440px] w-[440px] rounded-full border border-[#8E8177]/12 lg:hidden" />
  </div>

  {/* =====================================================
      MAIN LAYOUT
  ===================================================== */}

  <div className="relative mx-auto grid min-h-[850px] max-w-[1500px] lg:grid-cols-[1.03fr_0.97fr]">

    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}

    <div className="relative z-20 flex items-center px-6 py-20 sm:px-10 md:px-14 lg:px-16 lg:py-24 xl:px-20">
      <div className="w-full max-w-[650px]">

        {/* EYEBROW */}
        <div className="flex items-center gap-5">
          <span className="h-px w-14 bg-[#8E8177]/50" />

          <p className="text-[7px] font-normal uppercase tracking-[0.48em] text-[#4D4742] sm:text-[8px]">
            The House
          </p>

          <span className="h-[3px] w-[3px] rounded-full bg-[#9B8374]/55" />
        </div>

        {/* TITLE */}
        <h2
          className={`${bodoni.className} hls-bodoni mt-14 font-normal tracking-[-0.05em] text-[#211C18]`}
        >
          <span className="block text-[50px] leading-[0.91] sm:text-[62px] md:text-[72px] lg:text-[69px] xl:text-[79px]">
            Beauty should
          </span>

          <span className="block text-[50px] leading-[0.91] sm:text-[62px] md:text-[72px] lg:text-[69px] xl:text-[79px]">
            feel{" "}
            <span className="italic text-[#917C6D]">
              personal.
            </span>
          </span>
        </h2>

        {/* ABSTRACT TITLE DETAIL */}
        <div className="mt-9 flex items-center gap-4">
          <span className="h-px w-12 bg-[#8E8177]/35" />
          <span className="h-[3px] w-[3px] rounded-full bg-[#8E8177]/50" />
          <span className="h-px w-5 bg-[#8E8177]/25" />
        </div>

        {/* COPY */}
        <div className="mt-9 max-w-[550px] space-y-5">
          <p className="text-[12px] font-light leading-[1.95] tracking-[0.055em] text-[#514B46] sm:text-[13px]">
            House of Laser &amp; Spa brings together laser hair removal,
            skincare, beauty, and self-care in an intimate Brooklyn setting.
          </p>

          <p className="text-[12px] font-light leading-[1.95] tracking-[0.055em] text-[#514B46] sm:text-[13px]">
            Every treatment is approached with intention — creating an
            experience that feels comfortable, considered, and entirely
            your own.
          </p>
        </div>

        {/* =====================================================
            SERVICE LABELS
        ===================================================== */}

        <div className="mt-11 border-y border-[#6F655D]/20">
          <div className="grid grid-cols-3 py-7">
            <div>
              <p className="text-[7px] font-normal uppercase tracking-[0.38em] text-[#39332E] sm:text-[8px]">
                Laser
              </p>
            </div>

            <div className="border-l border-[#6F655D]/20 pl-6 sm:pl-9">
              <p className="text-[7px] font-normal uppercase tracking-[0.38em] text-[#39332E] sm:text-[8px]">
                Skincare
              </p>
            </div>

            <div className="border-l border-[#6F655D]/20 pl-6 sm:pl-9">
              <p className="text-[7px] font-normal uppercase tracking-[0.38em] text-[#39332E] sm:text-[8px]">
                Self-Care
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <a
          href="#services"
          className="group mt-9 inline-flex items-center gap-6 text-[#312C28]"
        >
          <span className="text-[7px] font-normal uppercase tracking-[0.4em]">
            Discover Our Treatments
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#665B53]/35 transition-all duration-500 group-hover:bg-[#2A2521] group-hover:text-[#F6F2EC]">
            <ArrowRight
              size={13}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-x-[2px]"
            />
          </div>
        </a>

        {/* BOTTOM DETAIL */}
        <div className="mt-16 flex items-center gap-5">
          <p className="text-[6px] font-normal uppercase tracking-[0.5em] text-[#9B8374]">
            Beauty Lives Here
          </p>

          <span className="h-px w-12 bg-[#9B8374]/25" />
        </div>
      </div>
    </div>

    {/* =====================================================
        RIGHT VISUAL
    ===================================================== */}

    <div className="relative z-10 px-6 pb-10 sm:px-10 lg:px-0 lg:py-[54px] lg:pr-[58px]">

      {/* LARGE CIRCLE BEHIND IMAGE */}
      <div className="pointer-events-none absolute -right-[12%] top-[7%] hidden h-[82%] aspect-square rounded-full bg-[#E9E0D8]/70 lg:block" />

      {/* OFFSET OUTLINE */}
      <div className="pointer-events-none absolute -right-[18%] top-[3%] hidden h-[88%] aspect-square rounded-full border border-[#8E8177]/16 lg:block" />

      {/* =====================================================
          IMAGE — ORGANIC SHAPE
      ===================================================== */}

      <div className="group relative h-[560px] overflow-hidden rounded-[180px_180px_60px_180px] sm:h-[670px] sm:rounded-[240px_240px_80px_240px] lg:h-full lg:min-h-[710px] lg:rounded-[330px_70px_70px_330px]">

        <img
          src="/previews/house-of-laser/about-woman.png"
          alt="House of Laser & Spa beauty and self-care"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
        />

        <div className="absolute inset-0 bg-[#392C23]/[0.025]" />

        {/* INNER CURVED LINE */}
        <div className="pointer-events-none absolute -left-[45%] top-[11%] hidden h-[78%] w-[82%] rounded-[50%] border border-white/30 lg:block" />

        {/* IMAGE TEXT */}
        <div className="absolute left-[14%] top-[18%] hidden text-white lg:block">
          <p className="text-[6px] font-light uppercase tracking-[0.5em] text-white/85">
            Confidence
          </p>

          <p className="mt-3 text-[6px] font-light uppercase tracking-[0.5em] text-white/85">
            Care
          </p>

          <p className="mt-3 text-[6px] font-light uppercase tracking-[0.5em] text-white/85">
            Beauty
          </p>

          <p className="mt-3 text-[6px] font-light uppercase tracking-[0.5em] text-white/85">
            You
          </p>

          <div className="ml-[2px] mt-5 h-14 w-px bg-white/50" />
        </div>

        {/* BOTTOM IMAGE DETAIL */}
        <div className="absolute bottom-[8%] right-[9%] hidden items-center gap-3 lg:flex">
          <span className="h-px w-8 bg-white/45" />

          <p className="text-[6px] font-light uppercase tracking-[0.42em] text-white/70">
            Brooklyn
          </p>
        </div>
      </div>

      {/* =====================================================
          FLOATING CIRCLE
      ===================================================== */}

      <div className="absolute -left-1 top-[49%] z-20 hidden h-[105px] w-[105px] items-center justify-center rounded-full border border-[#8D796B]/30 bg-[#F6F2EC]/90 backdrop-blur-sm lg:flex xl:-left-5 xl:h-[118px] xl:w-[118px]">
        <div className="text-center">
          <p
            className={`${bodoni.className} hls-bodoni text-[18px] italic leading-none text-[#806B5D]`}
          >
            Made
          </p>

          <div className="mx-auto my-2 h-px w-5 bg-[#8D796B]/30" />

          <p className="text-[5px] font-normal uppercase tracking-[0.38em] text-[#62574F]">
            For You
          </p>
        </div>
      </div>

      {/* =====================================================
          IMAGE-EDGE LINE
      ===================================================== */}

      <div className="absolute -left-[7%] bottom-[12%] hidden items-center gap-4 lg:flex">
        <span className="h-[3px] w-[3px] rounded-full bg-[#8E8177]/45" />
        <span className="h-px w-16 bg-[#8E8177]/25" />
      </div>
    </div>
  </div>

  {/* =====================================================
      BOTTOM ABSTRACT DETAIL
  ===================================================== */}

  <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex">
    <span className="h-px w-8 bg-[#8E8177]/20" />
    <span className="h-[3px] w-[3px] rounded-full bg-[#8E8177]/35" />
    <span className="h-px w-8 bg-[#8E8177]/20" />
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

{/* =====================================================
    EXPERIENCE + CONTACT
===================================================== */}

<section
  id="experience"
  className="relative overflow-hidden bg-[#F3EEE8]"
>
  <div className="mx-auto max-w-[1600px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16">

    {/* =====================================================
        EXPERIENCE IMAGE
    ===================================================== */}

    <div className="relative min-h-[610px] overflow-hidden rounded-[72px_72px_28px_28px] sm:min-h-[650px] sm:rounded-[120px_120px_32px_32px] lg:min-h-[690px] lg:rounded-[220px_220px_40px_40px]">
      <img
        src="/previews/house-of-laser/experience-background.png"
        alt="House of Laser and Spa experience"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* SOFT WASH */}
      <div className="absolute inset-0 bg-[#F3EEE8]/54" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(243,238,232,0.82)_0%,rgba(243,238,232,0.50)_40%,rgba(243,238,232,0.14)_76%,transparent_100%)]" />

      {/* ABSTRACT CURVES */}
      <div className="pointer-events-none absolute -left-[17%] -top-[46%] hidden h-[760px] w-[760px] rounded-full border border-[#8F7C6E]/20 lg:block" />

      <div className="pointer-events-none absolute -bottom-[58%] -right-[17%] hidden h-[720px] w-[720px] rounded-full border border-[#8F7C6E]/15 lg:block" />

      {/* LEFT MICRO DETAIL */}
      <div className="absolute left-[6%] top-[12%] z-10 hidden lg:block">
        <div className="h-12 w-px bg-[#8F7C6E]/30" />

        <p className="mt-5 text-[6px] font-light uppercase leading-[2] tracking-[0.44em] text-[#79695F]/65">
          Brooklyn
          <br />
          New York
        </p>
      </div>

      {/* RIGHT MICRO DETAIL */}
      <div className="absolute right-[6%] top-[12%] z-10 hidden lg:block">
        <p className="text-right text-[6px] font-light uppercase leading-[2.1] tracking-[0.44em] text-[#79695F]/65">
          Relax
          <br />
          Restore
          <br />
          Renew
        </p>

        <div className="ml-auto mt-5 h-px w-9 bg-[#8F7C6E]/30" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex min-h-[610px] items-center justify-center px-7 py-20 text-center sm:min-h-[650px] sm:px-10 lg:min-h-[690px]">
        <div className="mx-auto flex max-w-[760px] flex-col items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#927E70]/25 bg-[#F3EEE8]/20 backdrop-blur-[2px]">
            <Sparkles
              size={13}
              strokeWidth={1}
              className="text-[#927E70]"
            />
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-8 bg-[#927E70]/35" />

            <p className="text-[7px] font-light uppercase tracking-[0.5em] text-[#806E62]">
              The Experience
            </p>

            <span className="h-px w-8 bg-[#927E70]/35" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.055em]`}
          >
            <span className="block text-[50px] leading-[0.89] text-[#29231F] sm:text-[60px] md:text-[69px] lg:text-[76px] xl:text-[82px]">
              A little time
            </span>

            <span className="mt-1 block text-[52px] italic leading-[0.89] text-[#967E6D] sm:text-[62px] md:text-[71px] lg:text-[78px] xl:text-[84px]">
              just for you.
            </span>
          </h2>

          <div className="mt-8 h-px w-10 bg-[#8E7A6C]/35" />

          <p className="mt-7 max-w-[510px] text-[12px] font-light leading-[1.95] tracking-[0.015em] text-[#625A55] sm:text-[13px]">
            Laser, skincare, beauty, and self-care in a warm Brooklyn
            space designed to make every visit feel personal.
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        CONTACT / VISIT
    ===================================================== */}

    <div
      id="contact"
      className="relative mx-auto max-w-[1320px] px-1 pb-4 pt-16 sm:pt-20 lg:pt-24"
    >
      {/* TOP */}
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-24">
        <div>
          <div className="flex items-center gap-5">
            <p className="text-[7px] font-light uppercase tracking-[0.48em] text-[#8D786A]">
              Visit The House
            </p>

            <span className="h-px w-10 bg-[#8D786A]/35" />
          </div>

          <h3
            className={`${bodoni.className} hls-bodoni mt-7 font-normal tracking-[-0.05em]`}
          >
            <span className="block text-[45px] leading-[0.92] text-[#29231F] sm:text-[54px] lg:text-[61px]">
              Come find us
            </span>

            <span className="mt-1 block text-[47px] italic leading-[0.92] text-[#967E6D] sm:text-[56px] lg:text-[63px]">
              in Brooklyn.
            </span>
          </h3>
        </div>

        <div className="lg:pb-1">
          <p className="max-w-[440px] text-[12px] font-light leading-[1.95] text-[#665E58] sm:text-[13px]">
            Visit our Brooklyn studio for personalized laser, skincare,
            beauty, and self-care treatments.
          </p>
        </div>
      </div>

      {/* DETAILS */}
      <div className="mt-12 border-y border-[#75675E]/15 lg:mt-16">
        <div className="grid lg:grid-cols-2">

          {/* LOCATION */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-8 border-b border-[#75675E]/15 py-9 transition-opacity duration-300 hover:opacity-70 lg:border-b-0 lg:border-r lg:py-11 lg:pr-12"
          >
            <div>
              <div className="flex items-center gap-3">
                <MapPin
                  size={12}
                  strokeWidth={1}
                  className="text-[#8D786A]"
                />

                <p className="text-[6px] font-light uppercase tracking-[0.45em] text-[#8D786A]">
                  Location
                </p>
              </div>

              <p
                className={`${bodoni.className} hls-bodoni mt-4 text-[23px] font-normal leading-[1.22] tracking-[-0.025em] text-[#302925] sm:text-[27px]`}
              >
                1690 E 14th St, Unit 2
                <br />
                Brooklyn, NY 11229
              </p>

              <p className="mt-4 text-[6px] font-light uppercase tracking-[0.38em] text-[#77685E]/65">
                Get Directions
              </p>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#75675E]/25 text-[#514741] transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight size={13} strokeWidth={1} />
            </div>
          </a>

          {/* CONNECT */}
          <div className="flex items-center justify-between gap-8 py-9 lg:py-11 lg:pl-12">
            <div>
              <div className="flex items-center gap-3">
                <Phone
                  size={12}
                  strokeWidth={1}
                  className="text-[#8D786A]"
                />

                <p className="text-[6px] font-light uppercase tracking-[0.45em] text-[#8D786A]">
                  Connect
                </p>
              </div>

              <a
                href="tel:+19298339197"
                className={`${bodoni.className} hls-bodoni mt-4 block w-fit text-[24px] font-normal tracking-[-0.025em] text-[#302925] transition-colors duration-300 hover:text-[#967E6D] sm:text-[28px]`}
              >
                (929) 833-9197
              </a>

              <a
                href="https://www.instagram.com/houseoflaserspa/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block w-fit text-[10px] font-light text-[#665D57] transition-colors duration-300 hover:text-[#302925]"
              >
                @houseoflaserspa
              </a>
            </div>

            <a
              href="tel:+19298339197"
              aria-label="Call House of Laser and Spa"
              className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#75675E]/25 text-[#514741] transition-all duration-500 hover:bg-[#29231F] hover:text-[#F3EEE8]"
            >
              <ArrowRight
                size={13}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* SMALL BOTTOM DETAIL */}
      <div className="mt-7 flex items-center gap-5">
        <p className="text-[6px] font-light uppercase tracking-[0.42em] text-[#8A786C]/55">
          House of Laser &amp; Spa
        </p>

        <span className="h-px flex-1 bg-[#75675E]/12" />

        <p className="hidden text-[6px] font-light uppercase tracking-[0.42em] text-[#8A786C]/55 sm:block">
          Brooklyn · New York
        </p>
      </div>
    </div>
  </div>
</section>


{/* =====================================================
    BOOKING
===================================================== */}

<section
  id="book"
  className="relative overflow-hidden bg-[#191815]"
>
  {/* BACKGROUND GLOW */}
  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_38%,rgba(190,161,138,0.11),transparent_42%)]" />

  {/* ABSTRACT CIRCLES */}
  <div className="pointer-events-none absolute -left-[350px] -top-[440px] hidden h-[700px] w-[700px] rounded-full border border-[#C9AD98]/10 lg:block" />

  <div className="pointer-events-none absolute -bottom-[430px] -right-[270px] hidden h-[700px] w-[700px] rounded-full border border-[#C9AD98]/10 lg:block" />

  <div className="relative mx-auto max-w-[1450px] px-7 py-20 sm:px-10 sm:py-24 md:px-14 lg:px-16 lg:py-28 xl:px-20">

    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-28">

      {/* LEFT */}
      <div>
        <div className="flex items-center gap-5">
          <p className="text-[7px] font-light uppercase tracking-[0.48em] text-[#C3AA96]">
            Your Next Visit
          </p>

          <span className="h-px w-11 bg-[#C3AA96]/30" />
        </div>

        <h2
          className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.055em]`}
        >
          <span className="block text-[48px] leading-[0.9] text-[#F6F2EE] sm:text-[58px] md:text-[66px] lg:text-[70px] xl:text-[76px]">
            Make a little time
          </span>

          <span className="mt-1 block text-[50px] italic leading-[0.9] text-[#C7B29F] sm:text-[60px] md:text-[68px] lg:text-[72px] xl:text-[78px]">
            for yourself.
          </span>
        </h2>

        <p className="mt-7 max-w-[470px] text-[12px] font-light leading-[1.95] text-white/45 sm:text-[13px]">
          Choose the treatment that feels right for you and plan your
          next visit to House of Laser &amp; Spa.
        </p>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="lg:pl-4">
        <a
          href="tel:+19298339197"
          className="group flex items-end justify-between gap-8 border-b border-white/30 pb-6 transition-colors duration-500 hover:border-white/70"
        >
          <div>
            <p className="text-[6px] font-light uppercase tracking-[0.43em] text-[#C3AA96]">
              Call To Book
            </p>

            <p
              className={`${bodoni.className} hls-bodoni mt-3 text-[28px] font-normal tracking-[-0.025em] text-white sm:text-[32px]`}
            >
              Book an appointment
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#191815]">
            <ArrowRight
              size={13}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-x-[2px]"
            />
          </div>
        </a>

        <a
          href="#services"
          className="group mt-7 flex items-center justify-between text-white/40 transition-colors duration-300 hover:text-white"
        >
          <span className="text-[7px] font-light uppercase tracking-[0.4em]">
            Explore Treatments
          </span>

          <span className="h-px w-12 bg-white/20 transition-all duration-500 group-hover:w-20 group-hover:bg-white/45" />
        </a>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="mt-20 flex items-center gap-6 border-t border-white/[0.07] pt-7">
      <p className="text-[6px] font-light uppercase tracking-[0.44em] text-white/20">
        House of Laser &amp; Spa
      </p>

      <div className="h-px flex-1 bg-white/[0.06]" />

      <p className="hidden text-[6px] font-light uppercase tracking-[0.44em] text-white/20 sm:block">
        Beauty · Care · You
      </p>
    </div>
  </div>
</section>
        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="bg-[#191815] px-6 pb-10 text-white md:px-10 lg:px-14">
          <div className="mx-auto max-w-[1250px] border-t border-white/10 pt-12">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
              <div>
                <p className={`${bodoni.className} hls-bodoni text-[32px] font-normal tracking-[-0.035em]`}>
                  House of Laser
                </p>
                <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/35">
                  &amp; Spa · Brooklyn
                </p>
                <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-white/40">
                  Laser, skincare, beauty, and self-care in Brooklyn, New York.
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
                    className="w-fit text-[12px] text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    @houseoflaserspa
                  </a>
                  <a
                    href="tel:+19298339197"
                    className="w-fit text-[12px] text-white/45 transition-colors duration-300 hover:text-white"
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
      </main>
    </div>
  );
}
