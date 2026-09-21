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
    SERVICES — SEAMLESS EDITORIAL
===================================================== */}

<section
  id="services"
  className="relative overflow-hidden bg-[#F5F0EA]"
>
  {/* =====================================================
      DESKTOP
  ===================================================== */}

  <div className="relative hidden min-h-[900px] lg:block xl:min-h-[960px]">

    {/* BACKGROUND */}
    <img
      src="/previews/house-of-laser/services-background.png"
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* =====================================================
        LEFT COPY
    ===================================================== */}

    <div className="absolute left-[6.4%] top-[10.5%] z-20 w-[29%] max-w-[470px]">
      <div className="flex items-center gap-5">
        <p className="text-[7px] font-light uppercase tracking-[0.48em] text-white/90">
          Services
        </p>

        <span className="h-px w-[86px] bg-white/45" />
      </div>

      <h2
        className={`${bodoni.className} hls-bodoni mt-10 font-normal tracking-[-0.055em] text-[#FBF8F4]`}
      >
        <span className="block text-[57px] leading-[0.9] xl:text-[66px] 2xl:text-[74px]">
          Treatments,
        </span>

        <span className="mt-3 block text-[59px] italic leading-[0.9] text-[#F4EBE4] xl:text-[68px] 2xl:text-[76px]">
          your way.
        </span>
      </h2>

      <p className="mt-8 max-w-[390px] text-[11px] font-light leading-[1.9] tracking-[0.045em] text-white/85 xl:text-[12px]">
        Laser, skincare, and beauty treatments thoughtfully brought
        together in one warm, personal space.
      </p>

      <a
        href="#laser"
        className="group mt-8 inline-flex min-w-[220px] items-center justify-between rounded-full bg-[#F8F4EF] px-7 py-[15px] text-[#302923] shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:bg-white"
      >
        <span className="text-[7px] font-normal uppercase tracking-[0.34em]">
          Explore Services
        </span>

        <ArrowRight
          size={13}
          strokeWidth={1}
          className="transition-transform duration-500 group-hover:translate-x-1"
        />
      </a>
    </div>

    {/* =====================================================
        LEFT BOTTOM WORDS
    ===================================================== */}

    <div className="absolute bottom-[8.5%] left-[4.4%] z-20">
      <div className="space-y-[7px]">
        {["Confidence", "Care", "Beauty", "You"].map((word) => (
          <p
            key={word}
            className="text-[6px] font-light uppercase tracking-[0.48em] text-white/85"
          >
            {word}
          </p>
        ))}
      </div>

      <div className="ml-[2px] mt-5 h-11 w-px bg-white/55" />
    </div>

    {/* =====================================================
        TOP RIGHT DETAIL
    ===================================================== */}

    <div className="absolute right-[4.2%] top-[4.8%] z-20 text-right">
      <p className="text-[6px] font-light uppercase leading-[2.1] tracking-[0.46em] text-[#89766A]">
        Real Results
        <br />
        A More You
      </p>

      <div className="ml-auto mt-4 h-px w-10 bg-[#89766A]/35" />
    </div>

    {/* =====================================================
        SERVICES
    ===================================================== */}

    <div className="absolute left-[41.3%] right-[3.5%] top-[15.5%] z-20">
      <div className="grid grid-cols-3 gap-[4.5%]">

        {/* =================================================
            LASER HAIR REMOVAL
        ================================================= */}

        <a
          href="#laser"
          className="group min-w-0"
        >
          {/* ARROW */}
          <div className="flex items-center justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5E5249]/40 text-[#302A25] transition-all duration-500 group-hover:bg-[#2C2622] group-hover:text-[#F6F1EB]">
              <ArrowRight
                size={12}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-2">
            <div className="mx-auto w-full max-w-[250px]">
              <div className="overflow-hidden rounded-t-[999px] shadow-[0_14px_40px_rgba(92,72,56,0.055)]">
                <div className="aspect-[0.70]">
                  <img
                    src="/previews/house-of-laser/services-laser.png"
                    alt="Laser hair removal"
                    className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COPY */}
          <div className="mt-5">
            <h3
              className={`${bodoni.className} hls-bodoni text-[34px] font-normal leading-[0.88] tracking-[-0.05em] text-[#251F1B] xl:text-[39px] 2xl:text-[44px]`}
            >
              Laser Hair
              <br />
              Removal
            </h3>

            <p className="mt-4 max-w-[255px] text-[9px] font-light leading-[1.85] tracking-[0.035em] text-[#6A615A] xl:text-[10px] 2xl:text-[11px]">
              Smooth, long-lasting results with advanced laser technology
              in a comfortable, private setting.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-[6px] uppercase tracking-[0.43em] text-[#8D786B]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#8D786B]/40 transition-all duration-500 group-hover:w-[72px]" />
            </div>
          </div>
        </a>

        {/* =================================================
            FACIALS & SKINCARE
        ================================================= */}

        <a
          href="#facials"
          className="group min-w-0"
        >
          {/* ARROW */}
          <div className="flex items-center justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5E5249]/40 text-[#302A25] transition-all duration-500 group-hover:bg-[#2C2622] group-hover:text-[#F6F1EB]">
              <ArrowRight
                size={12}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-2">
            <div className="mx-auto w-full max-w-[250px]">
              <div className="overflow-hidden rounded-t-[999px] shadow-[0_14px_40px_rgba(92,72,56,0.055)]">
                <div className="aspect-[0.70]">
                  <img
                    src="/previews/house-of-laser/services-facial.png"
                    alt="Facials and skincare"
                    className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COPY */}
          <div className="mt-5">
            <h3
              className={`${bodoni.className} hls-bodoni text-[34px] font-normal leading-[0.88] tracking-[-0.05em] text-[#251F1B] xl:text-[39px] 2xl:text-[44px]`}
            >
              Facials &amp;
              <br />
              Skincare
            </h3>

            <p className="mt-4 max-w-[255px] text-[9px] font-light leading-[1.85] tracking-[0.035em] text-[#6A615A] xl:text-[10px] 2xl:text-[11px]">
              Customized treatments to cleanse, restore, and reveal your
              healthiest skin.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-[6px] uppercase tracking-[0.43em] text-[#8D786B]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#8D786B]/40 transition-all duration-500 group-hover:w-[72px]" />
            </div>
          </div>
        </a>

        {/* =================================================
            BEAUTY & SELF-CARE
        ================================================= */}

        <a
          href="#experience"
          className="group min-w-0"
        >
          {/* ARROW */}
          <div className="flex items-center justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5E5249]/40 text-[#302A25] transition-all duration-500 group-hover:bg-[#2C2622] group-hover:text-[#F6F1EB]">
              <ArrowRight
                size={12}
                strokeWidth={1}
                className="transition-transform duration-500 group-hover:translate-x-[2px]"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-2">
            <div className="mx-auto w-full max-w-[250px]">
              <div className="overflow-hidden rounded-t-[999px] shadow-[0_14px_40px_rgba(92,72,56,0.055)]">
                <div className="aspect-[0.70]">
                  <img
                    src="/previews/house-of-laser/services-beauty.png"
                    alt="Beauty and self-care"
                    className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COPY */}
          <div className="mt-5">
            <h3
              className={`${bodoni.className} hls-bodoni text-[34px] font-normal leading-[0.88] tracking-[-0.05em] text-[#251F1B] xl:text-[39px] 2xl:text-[44px]`}
            >
              Beauty &amp;
              <br />
              Self-Care
            </h3>

            <p className="mt-4 max-w-[255px] text-[9px] font-light leading-[1.85] tracking-[0.035em] text-[#6A615A] xl:text-[10px] 2xl:text-[11px]">
              Thoughtful treatments and enhancements designed to help you
              look and feel your best.
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-[6px] uppercase tracking-[0.43em] text-[#8D786B]">
                Explore
              </span>

              <span className="h-px w-14 bg-[#8D786B]/40 transition-all duration-500 group-hover:w-[72px]" />
            </div>
          </div>
        </a>
      </div>
    </div>

    {/* =====================================================
        BOTTOM TAGLINE
    ===================================================== */}

    <div className="absolute bottom-[4.5%] left-[41%] right-[3%] z-20 text-center">
      <p className="text-[6px] font-light uppercase tracking-[0.5em] text-[#947D6F]">
        More Than Treatments
      </p>

      <p
        className={`${bodoni.className} hls-bodoni mt-2 text-[27px] italic tracking-[-0.03em] text-[#A08877] xl:text-[30px]`}
      >
        A more confident you.
      </p>
    </div>
  </div>

  {/* =====================================================
      MOBILE / TABLET
  ===================================================== */}

  <div className="lg:hidden">

    {/* =====================================================
        MOBILE INTRO
    ===================================================== */}

    <div className="relative min-h-[560px] overflow-hidden">
      <img
        src="/previews/house-of-laser/services-background.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-left"
      />

      <div className="absolute inset-0 bg-black/[0.06]" />

      <div className="relative z-10 flex min-h-[560px] flex-col justify-between px-7 py-11 sm:px-10">
        <div>
          <div className="flex items-center gap-4">
            <p className="text-[7px] uppercase tracking-[0.46em] text-white">
              Services
            </p>

            <span className="h-px w-14 bg-white/50" />
          </div>

          <h2
            className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.055em] text-white`}
          >
            <span className="block text-[55px] leading-[0.88] sm:text-[66px]">
              Treatments,
            </span>

            <span className="mt-2 block text-[58px] italic leading-[0.88] text-[#F4E9E1] sm:text-[69px]">
              your way.
            </span>
          </h2>

          <p className="mt-6 max-w-[330px] text-[11px] font-light leading-[1.9] tracking-[0.035em] text-white/90">
            Laser, skincare, and beauty treatments thoughtfully brought
            together in one warm, personal space.
          </p>

          <a
            href="#laser"
            className="mt-7 inline-flex min-w-[215px] items-center justify-between rounded-full bg-[#F8F4EF] px-6 py-4 text-[#302923]"
          >
            <span className="text-[7px] uppercase tracking-[0.32em]">
              Explore Services
            </span>

            <ArrowRight size={12} strokeWidth={1} />
          </a>
        </div>

        <div>
          <div className="space-y-[7px]">
            {["Confidence", "Care", "Beauty", "You"].map((word) => (
              <p
                key={word}
                className="text-[6px] uppercase tracking-[0.46em] text-white/85"
              >
                {word}
              </p>
            ))}
          </div>

          <div className="mt-4 h-10 w-px bg-white/50" />
        </div>
      </div>
    </div>

    {/* =====================================================
        MOBILE SERVICES
    ===================================================== */}

    <div className="bg-[#F5F0EA] px-6 pb-16 pt-14 sm:px-9">
      {[
        {
          title: "Laser Hair Removal",
          image: "/previews/house-of-laser/services-laser.png",
          description:
            "Smooth, long-lasting results with advanced laser technology in a comfortable, private setting.",
          href: "#laser",
        },
        {
          title: "Facials & Skincare",
          image: "/previews/house-of-laser/services-facial.png",
          description:
            "Customized treatments to cleanse, restore, and reveal your healthiest skin.",
          href: "#facials",
        },
        {
          title: "Beauty & Self-Care",
          image: "/previews/house-of-laser/services-beauty.png",
          description:
            "Thoughtful treatments and enhancements designed to help you look and feel your best.",
          href: "#experience",
        },
      ].map((service, index) => (
        <a
          key={service.title}
          href={service.href}
          className={`group block ${
            index !== 0 ? "mt-14" : ""
          }`}
        >
          {/* ARROW */}
          <div className="flex justify-end">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5E5249]/40 text-[#302A25] transition-all duration-500 group-hover:bg-[#2C2622] group-hover:text-[#F6F1EB]">
              <ArrowRight
                size={12}
                strokeWidth={1}
              />
            </div>
          </div>

          {/* IMAGE */}
          <div className="mx-auto mt-2 max-w-[340px]">
            <div className="overflow-hidden rounded-t-[999px] shadow-[0_14px_40px_rgba(92,72,56,0.055)]">
              <div className="aspect-[0.72]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </div>

          {/* COPY */}
          <h3
            className={`${bodoni.className} hls-bodoni mt-6 max-w-[360px] text-[43px] font-normal leading-[0.9] tracking-[-0.05em] text-[#251F1B] sm:text-[50px]`}
          >
            {service.title}
          </h3>

          <p className="mt-4 max-w-[390px] text-[11px] font-light leading-[1.85] tracking-[0.035em] text-[#6A615A]">
            {service.description}
          </p>

          {/* EXPLORE */}
          <div className="mt-5 flex items-center gap-4">
            <span className="text-[6px] uppercase tracking-[0.43em] text-[#8D786B]">
              Explore
            </span>

            <span className="h-px w-14 bg-[#8D786B]/40 transition-all duration-500 group-hover:w-[72px]" />
          </div>
        </a>
      ))}

      {/* =====================================================
          MOBILE TAGLINE
      ===================================================== */}

      <div className="mt-16 text-center">
        <p className="text-[6px] uppercase tracking-[0.48em] text-[#947D6F]">
          More Than Treatments
        </p>

        <p
          className={`${bodoni.className} hls-bodoni mt-3 text-[29px] italic tracking-[-0.03em] text-[#A08877]`}
        >
          A more confident you.
        </p>
      </div>
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
        {["Smoother", "Brighter", "Confident"].map((word) => (
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

  {/* FLOATING DETAIL */}
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
            {["Healthy", "Radiant", "Refreshed"].map((word) => (
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
      </div>

      {/* =====================================================
          FLOATING GLOW DETAIL
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

      {/* TOP LABEL */}
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

          <p className="mt-8 max-w-[390px] text-[12px] font-light leading-[1.9] tracking-[0.02em] text-[#B1AAA4] sm:text-[13px]">
            Thoughtful facial and skincare treatments in an intimate space
            designed for slowing down and taking care of yourself.
          </p>

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
          BOTTOM DETAIL — NO DUPLICATE WORDS
      ===================================================== */}

      <div className="flex items-end justify-between border-t border-[#C5AD99]/15 pt-6">

        <p className="text-[6px] font-light uppercase tracking-[0.42em] text-[#C5AD99]/65">
          Personalized Skincare
        </p>

        <div className="flex items-center gap-4">
          <div className="h-px w-10 bg-[#C5AD99]/30" />

          <p className="text-[6px] font-light uppercase tracking-[0.42em] text-[#C5AD99]/65">
            Brooklyn · NY
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
    CONTACT / VISIT — COMPACT
===================================================== */}

<div
  id="contact"
  className="relative w-full overflow-hidden bg-[#F4EEE7]"
>
  {/* =====================================================
      DESKTOP
  ===================================================== */}

  <div className="relative hidden h-[680px] w-full lg:block xl:h-[720px]">

    {/* BACKGROUND */}
    <img
      src="/previews/house-of-laser/contact-background.png"
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* FADED BROOKLYN */}
    <p
      aria-hidden="true"
      className={`${bodoni.className} hls-bodoni pointer-events-none absolute right-[3%] top-[2%] select-none whitespace-nowrap text-[118px] font-normal italic leading-none tracking-[-0.065em] text-[#9A887B]/[0.07] xl:text-[140px]`}
    >
      Brooklyn.
    </p>

    {/* ===================================================
        INTRO
    =================================================== */}

    <div className="absolute left-[5.5%] top-[11%] w-[46%] max-w-[650px]">
      <div className="flex items-center gap-4">
        <span className="h-px w-12 bg-[#8D786A]/40" />

        <p className="text-[6px] font-light uppercase tracking-[0.48em] text-[#806C60]">
          Visit The House
        </p>
      </div>

      <h3
        className={`${bodoni.className} hls-bodoni mt-6 font-normal tracking-[-0.06em]`}
      >
        <span className="block text-[55px] leading-[0.88] text-[#27211D] xl:text-[63px]">
          Your beauty
        </span>

        <span className="mt-1 block text-[57px] italic leading-[0.88] text-[#9B826F] xl:text-[65px]">
          destination.
        </span>
      </h3>

      <p className="mt-5 max-w-[430px] text-[10px] font-light leading-[1.8] tracking-[0.02em] text-[#625A54] xl:text-[11px]">
        A warm Brooklyn studio for personalized laser, skincare,
        beauty, and self-care treatments.
      </p>

      <p className="mt-4 text-[6px] font-light uppercase tracking-[0.46em] text-[#9A8171]">
        Brooklyn · New York
      </p>
    </div>

    {/* ===================================================
        CONTACT DETAILS
    =================================================== */}

    <div className="absolute bottom-[10%] left-[5.5%] grid w-[54%] grid-cols-2">

      {/* LOCATION */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
        target="_blank"
        rel="noreferrer"
        className="group pr-[10%]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8D786A]/25">
            <MapPin
              size={10}
              strokeWidth={1}
              className="text-[#8D786A]"
            />
          </div>

          <p className="text-[6px] uppercase tracking-[0.45em] text-[#806C60]">
            Our Location
          </p>
        </div>

        <p
          className={`${bodoni.className} hls-bodoni mt-5 font-normal tracking-[-0.045em]`}
        >
          <span className="block text-[29px] leading-[0.95] text-[#29231F] xl:text-[33px]">
            1690 E 14th St
          </span>

          <span className="mt-1 block text-[27px] italic leading-[0.95] text-[#9B826F] xl:text-[31px]">
            Unit 2 · Brooklyn
          </span>
        </p>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-[6px] uppercase tracking-[0.42em] text-[#806C60]">
            Get Directions
          </span>

          <span className="h-px w-10 bg-[#8D786A]/30 transition-all duration-500 group-hover:w-14" />

          <ArrowRight
            size={10}
            strokeWidth={1}
            className="text-[#806C60]"
          />
        </div>
      </a>

      {/* CONNECT */}
      <div className="border-l border-[#75675E]/15 pl-[10%]">
        <div className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8D786A]/25">
            <Phone
              size={10}
              strokeWidth={1}
              className="text-[#8D786A]"
            />
          </div>

          <p className="text-[6px] uppercase tracking-[0.45em] text-[#806C60]">
            Let&apos;s Connect
          </p>
        </div>

        <a
          href="tel:+19298339197"
          className="group mt-5 block"
        >
          <p
            className={`${bodoni.className} hls-bodoni text-[28px] tracking-[-0.04em] text-[#29231F] transition-colors duration-300 group-hover:text-[#9B826F] xl:text-[32px]`}
          >
            (929) 833-9197
          </p>
        </a>

        <div className="my-5 h-px w-full bg-[#75675E]/15" />

        <a
          href="https://www.instagram.com/houseoflaserspa/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between gap-5"
        >
          <div>
            <p className="text-[6px] uppercase tracking-[0.42em] text-[#806C60]/65">
              Follow Along
            </p>

            <p
              className={`${bodoni.className} hls-bodoni mt-2 text-[21px] italic tracking-[-0.03em] text-[#29231F] xl:text-[24px]`}
            >
              @houseoflaserspa
            </p>
          </div>

          <ArrowRight
            size={11}
            strokeWidth={1}
            className="text-[#806C60] transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>

    {/* BOTTOM DETAIL */}
    <div className="absolute bottom-[3%] left-[4%] right-[4%] flex items-center gap-5">
      <p className="shrink-0 text-[5px] uppercase tracking-[0.45em] text-[#806C60]/55">
        House of Laser &amp; Spa
      </p>

      <span className="h-px flex-1 bg-[#75675E]/12" />

      <p className="shrink-0 text-[5px] uppercase tracking-[0.45em] text-[#806C60]/55">
        Beauty · Care · You
      </p>
    </div>
  </div>

  {/* =====================================================
      MOBILE
  ===================================================== */}

  <div className="relative lg:hidden">

    {/* INTRO */}
    <div className="relative overflow-hidden px-6 pb-8 pt-11 sm:px-9">

      <p
        aria-hidden="true"
        className={`${bodoni.className} hls-bodoni pointer-events-none absolute -right-8 top-1 select-none whitespace-nowrap text-[68px] italic leading-none tracking-[-0.06em] text-[#9A887B]/[0.06]`}
      >
        Brooklyn.
      </p>

      <div className="relative z-10 flex items-center gap-3">
        <span className="h-px w-8 bg-[#8D786A]/40" />

        <p className="text-[6px] uppercase tracking-[0.42em] text-[#806C60]">
          Visit The House
        </p>
      </div>

      <h3
        className={`${bodoni.className} hls-bodoni relative z-10 mt-6 font-normal tracking-[-0.06em]`}
      >
        <span className="block text-[43px] leading-[0.88] text-[#29231F] sm:text-[50px]">
          Your beauty
        </span>

        <span className="mt-1 block text-[45px] italic leading-[0.88] text-[#9B826F] sm:text-[52px]">
          destination.
        </span>
      </h3>

      <p className="relative z-10 mt-5 max-w-[350px] text-[10px] font-light leading-[1.8] text-[#625A54]">
        A warm Brooklyn studio for personalized laser, skincare,
        beauty, and self-care treatments.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative h-[300px] w-full overflow-hidden sm:h-[360px]">
      <img
        src="/previews/house-of-laser/contact-background.png"
        alt="House of Laser and Spa studio"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F4EEE7] to-transparent" />
    </div>

    {/* CONTACT INFO */}
    <div className="px-6 py-9 sm:px-9">

      {/* LOCATION */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
        target="_blank"
        rel="noreferrer"
        className="group block border-b border-[#75675E]/15 pb-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8D786A]/25">
            <MapPin
              size={10}
              strokeWidth={1}
              className="text-[#8D786A]"
            />
          </div>

          <p className="text-[6px] uppercase tracking-[0.4em] text-[#806C60]">
            Our Location
          </p>
        </div>

        <p
          className={`${bodoni.className} hls-bodoni mt-5 tracking-[-0.045em]`}
        >
          <span className="block text-[30px] leading-[0.95] text-[#29231F]">
            1690 E 14th St
          </span>

          <span className="mt-1 block text-[28px] italic leading-[0.95] text-[#9B826F]">
            Unit 2 · Brooklyn
          </span>
        </p>

        <div className="mt-5 flex items-center gap-4">
          <span className="text-[6px] uppercase tracking-[0.4em] text-[#806C60]">
            Get Directions
          </span>

          <ArrowRight
            size={10}
            strokeWidth={1}
            className="text-[#806C60]"
          />
        </div>
      </a>

      {/* CONNECT */}
      <div className="pt-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8D786A]/25">
            <Phone
              size={10}
              strokeWidth={1}
              className="text-[#8D786A]"
            />
          </div>

          <p className="text-[6px] uppercase tracking-[0.4em] text-[#806C60]">
            Let&apos;s Connect
          </p>
        </div>

        <a
          href="tel:+19298339197"
          className="mt-5 block"
        >
          <p
            className={`${bodoni.className} hls-bodoni text-[29px] tracking-[-0.04em] text-[#29231F]`}
          >
            (929) 833-9197
          </p>
        </a>

        <a
          href="https://www.instagram.com/houseoflaserspa/"
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-between border-t border-[#75675E]/15 pt-5"
        >
          <div>
            <p className="text-[5px] uppercase tracking-[0.4em] text-[#806C60]/60">
              Instagram
            </p>

            <p
              className={`${bodoni.className} hls-bodoni mt-1 text-[21px] italic text-[#29231F]`}
            >
              @houseoflaserspa
            </p>
          </div>

          <ArrowRight
            size={11}
            strokeWidth={1}
            className="text-[#806C60]"
          />
        </a>
      </div>
    </div>
  </div>
</div>


{/* =====================================================
    BOOKING + FOOTER
===================================================== */}

<section
  id="book"
  className="relative overflow-hidden bg-[#191815] text-white"
>
  {/* =====================================================
      ABSTRACT BACKGROUND
  ===================================================== */}

  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(199,178,159,0.10),transparent_34%)]"
  />

  {/* LARGE GHOST WORD */}
  <p
    aria-hidden="true"
    className={`${bodoni.className} hls-bodoni pointer-events-none absolute -right-[3%] top-[1%] hidden select-none whitespace-nowrap text-[150px] italic leading-none tracking-[-0.07em] text-white/[0.025] lg:block xl:text-[190px]`}
  >
    The House.
  </p>

  {/* LARGE ABSTRACT ARC — LEFT */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-[430px] -top-[520px] hidden h-[760px] w-[760px] rounded-full border border-[#C7B29F]/[0.08] lg:block"
  />

  {/* LARGE ABSTRACT ARC — RIGHT */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-[460px] right-[-280px] hidden h-[720px] w-[720px] rounded-full border border-[#C7B29F]/[0.09] lg:block"
  />

  {/* SMALL FLOATING CIRCLE */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[8%] top-[22%] hidden h-3 w-3 rounded-full border border-[#C7B29F]/30 lg:block"
  />

  {/* =====================================================
      BOOKING
  ===================================================== */}

  <div className="relative mx-auto max-w-[1450px] px-6 pb-16 pt-16 sm:px-9 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-20 lg:pt-24 xl:px-20">

    {/* TOP EDITORIAL DETAIL */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <p className="text-[6px] font-light uppercase tracking-[0.5em] text-[#C7B29F]">
          Your Next Visit
        </p>

        <span className="h-px w-12 bg-[#C7B29F]/25" />
      </div>

      <p className="hidden text-[6px] font-light uppercase tracking-[0.45em] text-white/20 md:block">
        Brooklyn · New York
      </p>
    </div>

    {/* MAIN BOOKING LAYOUT */}
    <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-24">

      {/* =================================================
          LEFT
      ================================================= */}

      <div className="relative">

        {/* SMALL VERTICAL LINE */}
        <div className="absolute -left-6 top-1 hidden h-20 w-px bg-[#C7B29F]/15 xl:block" />

        <h2
          className={`${bodoni.className} hls-bodoni font-normal tracking-[-0.065em]`}
        >
          <span className="block text-[49px] leading-[0.88] text-[#F4F0EC] sm:text-[60px] md:text-[68px] lg:text-[72px] xl:text-[80px]">
            Ready when
          </span>

          <span className="mt-1 block text-[51px] italic leading-[0.88] text-[#C7B29F] sm:text-[62px] md:text-[70px] lg:text-[74px] xl:text-[82px]">
            you are.
          </span>
        </h2>

        <div className="mt-7 flex items-start gap-5">
          <span className="mt-[8px] hidden h-px w-9 shrink-0 bg-[#C7B29F]/25 sm:block" />

          <p className="max-w-[430px] text-[11px] font-light leading-[1.9] text-white/40 sm:text-[12px]">
            Find your treatment, choose a time, and we&apos;ll take care
            of the rest.
          </p>
        </div>
      </div>

      {/* =================================================
          RIGHT / BOOKING ACTION
      ================================================= */}

      <div className="relative lg:pb-1">

        <p className="text-[6px] font-light uppercase tracking-[0.46em] text-[#C7B29F]">
          Online Booking
        </p>

        {/* MAIN CTA */}
        <a
          href="#booking"
          className="group mt-5 flex items-center justify-between border-y border-white/[0.12] py-6 transition-colors duration-500 hover:border-white/30 sm:py-7"
        >
          <span
            className={`${bodoni.className} hls-bodoni text-[28px] font-normal tracking-[-0.035em] text-[#F5F1ED] sm:text-[32px] lg:text-[34px]`}
          >
            Book an appointment
          </span>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C7B29F]/35 text-[#E4D4C6] transition-all duration-500 group-hover:bg-[#F3EEE8] group-hover:text-[#191815]">
            <ArrowRight
              size={12}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-x-[2px]"
            />
          </div>
        </a>

        {/* SECONDARY ACTION */}
        <a
          href="#services"
          className="group mt-6 flex items-center justify-between"
        >
          <span className="text-[6px] font-light uppercase tracking-[0.43em] text-white/30 transition-colors duration-300 group-hover:text-[#C7B29F]">
            Explore Treatments
          </span>

          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/15 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C7B29F]/50" />

            <ArrowRight
              size={9}
              strokeWidth={1}
              className="text-white/30 transition-all duration-500 group-hover:translate-x-1 group-hover:text-[#C7B29F]"
            />
          </div>
        </a>
      </div>
    </div>

    {/* ABSTRACT TRANSITION LINE */}
    <div className="relative mt-16 lg:mt-20">
      <div className="h-px w-full bg-white/[0.07]" />

      <div className="absolute -top-[3px] left-[31%] h-[7px] w-[7px] rounded-full border border-[#C7B29F]/30 bg-[#191815]" />
    </div>

    {/* =====================================================
        FOOTER
    ===================================================== */}

    <footer className="relative pt-12 lg:pt-14">

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.75fr_0.75fr] lg:gap-20">

        {/* =================================================
            BRAND
        ================================================= */}

        <div>
          <p
            className={`${bodoni.className} hls-bodoni text-[31px] font-normal tracking-[-0.045em] text-[#F4F0EC] sm:text-[35px]`}
          >
            House of Laser
          </p>

          <div className="mt-2 flex items-center gap-4">
            <p className="text-[6px] font-light uppercase tracking-[0.45em] text-[#C7B29F]/70">
              &amp; Spa · Brooklyn
            </p>

            <span className="h-px w-8 bg-[#C7B29F]/20" />
          </div>

          <p className="mt-5 max-w-[300px] text-[10px] font-light leading-[1.85] text-white/30 sm:text-[11px]">
            Laser, skincare, beauty, and self-care in Brooklyn, New York.
          </p>
        </div>

        {/* =================================================
            VISIT
        ================================================= */}

        <div>
          <div className="flex items-center gap-3">
            <p className="text-[6px] font-light uppercase tracking-[0.43em] text-[#C7B29F]">
              Visit
            </p>

            <span className="h-px w-7 bg-[#C7B29F]/20" />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
            target="_blank"
            rel="noreferrer"
            className="group mt-5 block w-fit"
          >
            <p className="text-[10px] font-light leading-[1.9] text-white/35 transition-colors duration-300 group-hover:text-white/60 sm:text-[11px]">
              1690 E 14th St
              <br />
              Unit 2
              <br />
              Brooklyn, NY 11229
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-[5px] uppercase tracking-[0.4em] text-white/20 transition-colors duration-300 group-hover:text-[#C7B29F]">
                Directions
              </span>

              <ArrowRight
                size={8}
                strokeWidth={1}
                className="text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#C7B29F]"
              />
            </div>
          </a>
        </div>

        {/* =================================================
            CONNECT
        ================================================= */}

        <div>
          <div className="flex items-center gap-3">
            <p className="text-[6px] font-light uppercase tracking-[0.43em] text-[#C7B29F]">
              Connect
            </p>

            <span className="h-px w-7 bg-[#C7B29F]/20" />
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href="tel:+19298339197"
              className="w-fit text-[10px] font-light text-white/35 transition-colors duration-300 hover:text-white sm:text-[11px]"
            >
              (929) 833-9197
            </a>

            <a
              href="https://www.instagram.com/houseoflaserspa/"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 text-[10px] font-light text-white/35 transition-colors duration-300 hover:text-white sm:text-[11px]"
            >
              <span>@houseoflaserspa</span>

              <ArrowRight
                size={8}
                strokeWidth={1}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      {/* =================================================
          BOTTOM SIGNATURE
      ================================================= */}

      <div className="mt-12 flex items-center gap-5 border-t border-white/[0.06] pt-6">

        <p className="shrink-0 text-[5px] font-light uppercase tracking-[0.45em] text-white/15 sm:text-[6px]">
          House of Laser &amp; Spa
        </p>

        <span className="h-px flex-1 bg-white/[0.05]" />

        <p className="hidden shrink-0 text-[5px] font-light uppercase tracking-[0.45em] text-white/15 sm:block sm:text-[6px]">
          Beauty · Care · You
        </p>
      </div>
    </footer>
  </div>
</section>
        
      </main>
    </div>
  );
}
