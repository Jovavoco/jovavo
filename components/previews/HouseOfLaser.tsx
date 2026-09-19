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
    SERVICES — REFERENCE MATCH
===================================================== */}

<section
  id="services"
  className="relative overflow-hidden bg-[#F4EFE9]"
>
  {/* =====================================================
      DESKTOP / LARGE SCREEN
  ===================================================== */}

  <div className="relative mx-auto hidden min-h-[1020px] max-w-[1600px] lg:block">
    {/* LARGE LEFT IMAGE */}
    <div className="absolute bottom-0 left-0 top-[130px] w-[32%] overflow-hidden">
      <img
        src="/previews/house-of-laser/services-main.png"
        alt="House of Laser and Spa treatment space"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#4C392C]/[0.04]" />

      {/* IMAGE COPY */}
      <div className="absolute bottom-[8%] left-[9%] z-10">
        <div className="space-y-[9px]">
          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-white/80">
            Confidence
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-white/80">
            Care
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-white/80">
            Beauty
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.42em] text-white/80">
            You
          </p>
        </div>

        <div className="ml-1 mt-5 h-12 w-px bg-white/55" />
      </div>
    </div>

    {/* LARGE DECORATIVE ARC */}
    <div className="pointer-events-none absolute -left-[510px] -top-[545px] z-20 h-[990px] w-[990px] rounded-full border border-[#665A51]/50" />

    {/* =====================================================
        INTRO — CENTER LEFT
    ===================================================== */}

    <div className="absolute left-[24%] top-[115px] w-[25%]">
      {/* SERVICES LABEL */}
      <div className="flex items-center gap-6">
        <p className="text-[8px] font-normal uppercase tracking-[0.46em] text-[#51463F]">
          Services
        </p>

        <div className="h-px w-[130px] bg-[#51463F]/45" />
      </div>

      {/* TITLE */}
      <h2
        className={`${bodoni.className} hls-bodoni mt-12 font-normal tracking-[-0.055em]`}
      >
        <span className="block whitespace-nowrap text-[70px] leading-[0.87] text-[#211B18] xl:text-[78px] 2xl:text-[84px]">
          Treatments,
        </span>

        <span className="mt-3 block whitespace-nowrap text-[72px] italic leading-[0.87] text-[#8F7B6D] xl:text-[82px] 2xl:text-[88px]">
          your way.
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="ml-[14%] mt-12 max-w-[260px] text-[12px] font-light leading-[1.95] tracking-[0.13em] text-[#554E48]">
        Laser, skincare, and beauty
        <br />
        treatments thoughtfully
        <br />
        brought together under
        <br />
        one roof.
      </p>
    </div>

    {/* =====================================================
        SERVICE LIST — RIGHT
    ===================================================== */}

    <div className="absolute bottom-[48px] right-[4%] top-[78px] w-[49%]">
      {/* SERVICE 01 */}
      <a
        href="#laser"
        className="group grid h-[29.5%] grid-cols-[38px_180px_1fr_48px] items-center gap-5 border-b border-[#493E36]/25 transition-opacity duration-500 hover:opacity-75 xl:grid-cols-[40px_190px_1fr_50px]"
      >
        {/* NUMBER */}
        <p className="self-start pt-[55px] text-[8px] font-light tracking-[0.28em] text-[#796A60]">
          01
        </p>

        {/* IMAGE */}
        <div className="relative h-[240px] w-[178px] self-center overflow-hidden rounded-t-[90px] xl:h-[245px] xl:w-[184px] xl:rounded-t-[94px]">
          <img
            src="/previews/house-of-laser/services-laser.png"
            alt="Laser hair removal"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}
        <div className="pl-4 xl:pl-7">
          <h3
            className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.9] tracking-[-0.04em] text-[#241E1A] xl:text-[44px]`}
          >
            Laser Hair
            <br />
            Removal
          </h3>

          <p className="mt-4 max-w-[280px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Smooth, long-lasting results
            <br />
            with advanced laser technology
            <br />
            in a comfortable, private setting.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-[74px] bg-[#907D70]/50" />
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

      {/* SERVICE 02 */}
      <a
        href="#facials"
        className="group grid h-[29.5%] grid-cols-[38px_180px_1fr_48px] items-center gap-5 border-b border-[#493E36]/25 transition-opacity duration-500 hover:opacity-75 xl:grid-cols-[40px_190px_1fr_50px]"
      >
        {/* NUMBER */}
        <p className="self-start pt-[55px] text-[8px] font-light tracking-[0.28em] text-[#796A60]">
          02
        </p>

        {/* IMAGE */}
        <div className="relative h-[240px] w-[178px] self-center overflow-hidden rounded-t-[90px] xl:h-[245px] xl:w-[184px] xl:rounded-t-[94px]">
          <img
            src="/previews/house-of-laser/services-facial.png"
            alt="Facials and skincare"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}
        <div className="pl-4 xl:pl-7">
          <h3
            className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.9] tracking-[-0.04em] text-[#241E1A] xl:text-[44px]`}
          >
            Facials &amp;
            <br />
            Skincare
          </h3>

          <p className="mt-4 max-w-[280px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Customized treatments to
            <br />
            cleanse, restore, and reveal
            <br />
            your healthiest skin.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-[74px] bg-[#907D70]/50" />
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

      {/* SERVICE 03 */}
      <a
        href="#experience"
        className="group grid h-[29.5%] grid-cols-[38px_180px_1fr_48px] items-center gap-5 border-b border-[#493E36]/25 transition-opacity duration-500 hover:opacity-75 xl:grid-cols-[40px_190px_1fr_50px]"
      >
        {/* NUMBER */}
        <p className="self-start pt-[55px] text-[8px] font-light tracking-[0.28em] text-[#796A60]">
          03
        </p>

        {/* IMAGE */}
        <div className="relative h-[240px] w-[178px] self-center overflow-hidden rounded-t-[90px] xl:h-[245px] xl:w-[184px] xl:rounded-t-[94px]">
          <img
            src="/previews/house-of-laser/services-beauty.png"
            alt="Beauty and self-care"
            className="h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025]"
          />
        </div>

        {/* COPY */}
        <div className="pl-4 xl:pl-7">
          <h3
            className={`${bodoni.className} hls-bodoni text-[40px] font-normal leading-[0.9] tracking-[-0.04em] text-[#241E1A] xl:text-[44px]`}
          >
            Beauty &amp;
            <br />
            Self-Care
          </h3>

          <p className="mt-4 max-w-[280px] text-[11px] font-light leading-[1.75] tracking-[0.08em] text-[#655C55] xl:text-[12px]">
            Thoughtful treatments and
            <br />
            enhancements designed to help
            <br />
            you look and feel your best.
          </p>

          <div className="mt-5 flex items-center gap-5">
            <span className="text-[7px] uppercase tracking-[0.38em] text-[#907D70]">
              Explore
            </span>

            <span className="h-px w-[74px] bg-[#907D70]/50" />
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

      {/* BOTTOM DETAIL */}
      <div className="flex h-[11.5%] items-end justify-end gap-7 pb-1">
        <div className="h-px w-[185px] bg-[#75685E]/40" />

        <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.42em] text-[#796A60]">
          Real Results. A More You.
        </p>
      </div>
    </div>
  </div>

  {/* =====================================================
      MOBILE / TABLET
  ===================================================== */}

  <div className="lg:hidden">
    {/* MAIN IMAGE */}
    <div className="relative h-[520px] overflow-hidden sm:h-[620px]">
      <img
        src="/previews/house-of-laser/services-main.png"
        alt="House of Laser and Spa treatment space"
        className="h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[#49382D]/[0.04]" />
    </div>

    {/* CONTENT */}
    <div className="px-6 py-16 sm:px-10 sm:py-20">
      <div className="flex items-center gap-5">
        <p className="text-[8px] uppercase tracking-[0.45em] text-[#51463F]">
          Services
        </p>

        <div className="h-px w-20 bg-[#51463F]/40" />
      </div>

      <h2
        className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.05em]`}
      >
        <span className="block text-[56px] leading-[0.9] text-[#211B18] sm:text-[68px]">
          Treatments,
        </span>

        <span className="block text-[60px] italic leading-[0.9] text-[#8F7B6D] sm:text-[72px]">
          your way.
        </span>
      </h2>

      <p className="mt-8 max-w-[360px] text-[12px] font-light leading-[1.9] tracking-[0.1em] text-[#554E48]">
        Laser, skincare, and beauty treatments thoughtfully brought
        together under one roof.
      </p>

      {/* MOBILE SERVICE 01 */}
      <a
        href="#laser"
        className="group mt-14 grid grid-cols-[30px_120px_1fr] gap-4 border-t border-[#493E36]/20 py-8"
      >
        <p className="pt-2 text-[8px] tracking-[0.25em] text-[#796A60]">
          01
        </p>

        <div className="h-[165px] w-[115px] overflow-hidden rounded-t-[58px]">
          <img
            src="/previews/house-of-laser/services-laser.png"
            alt="Laser hair removal"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3
            className={`${bodoni.className} hls-bodoni text-[31px] leading-[0.95] tracking-[-0.035em]`}
          >
            Laser Hair
            <br />
            Removal
          </h3>

          <p className="mt-3 text-[11px] leading-[1.7] text-[#655C55]">
            Smooth, long-lasting results with advanced laser technology.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#907D70]">
              Explore
            </span>

            <ArrowRight size={12} strokeWidth={1} />
          </div>
        </div>
      </a>

      {/* MOBILE SERVICE 02 */}
      <a
        href="#facials"
        className="group grid grid-cols-[30px_120px_1fr] gap-4 border-t border-[#493E36]/20 py-8"
      >
        <p className="pt-2 text-[8px] tracking-[0.25em] text-[#796A60]">
          02
        </p>

        <div className="h-[165px] w-[115px] overflow-hidden rounded-t-[58px]">
          <img
            src="/previews/house-of-laser/services-facial.png"
            alt="Facials and skincare"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3
            className={`${bodoni.className} hls-bodoni text-[31px] leading-[0.95] tracking-[-0.035em]`}
          >
            Facials &amp;
            <br />
            Skincare
          </h3>

          <p className="mt-3 text-[11px] leading-[1.7] text-[#655C55]">
            Customized treatments to cleanse, restore, and reveal your
            healthiest skin.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#907D70]">
              Explore
            </span>

            <ArrowRight size={12} strokeWidth={1} />
          </div>
        </div>
      </a>

      {/* MOBILE SERVICE 03 */}
      <a
        href="#experience"
        className="group grid grid-cols-[30px_120px_1fr] gap-4 border-y border-[#493E36]/20 py-8"
      >
        <p className="pt-2 text-[8px] tracking-[0.25em] text-[#796A60]">
          03
        </p>

        <div className="h-[165px] w-[115px] overflow-hidden rounded-t-[58px]">
          <img
            src="/previews/house-of-laser/services-beauty.png"
            alt="Beauty and self-care"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3
            className={`${bodoni.className} hls-bodoni text-[31px] leading-[0.95] tracking-[-0.035em]`}
          >
            Beauty &amp;
            <br />
            Self-Care
          </h3>

          <p className="mt-3 text-[11px] leading-[1.7] text-[#655C55]">
            Thoughtful treatments designed to help you look and feel
            your best.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-[7px] uppercase tracking-[0.3em] text-[#907D70]">
              Explore
            </span>

            <ArrowRight size={12} strokeWidth={1} />
          </div>
        </div>
      </a>
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
  <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[41%_59%]">

    {/* =====================================================
        LEFT — EDITORIAL CONTENT
    ===================================================== */}

    <div className="relative flex min-h-[760px] flex-col bg-[#F3EEE8] px-8 py-16 sm:px-12 sm:py-20 md:px-16 lg:min-h-[900px] lg:px-[72px] lg:py-[72px] xl:min-h-[960px] xl:px-[105px] xl:py-[82px]">

      {/* TOP DECORATIVE LINE */}
      <div className="absolute left-[52px] top-0 hidden h-[95px] w-px bg-[#9A8576]/35 lg:block xl:left-[82px]" />

      {/* =====================================================
          TOP LABEL
      ===================================================== */}

      <div className="pt-4 lg:pt-[62px]">
        <p className="text-[8px] font-light uppercase tracking-[0.5em] text-[#927C6D] sm:text-[9px]">
          Laser Hair Removal
        </p>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="my-auto py-16 sm:py-20 lg:py-24">

        {/* TITLE */}
        <h2
          className={`${bodoni.className} hls-bodoni font-normal tracking-[-0.045em] text-[#211C18]`}
        >
          <span className="block text-[58px] leading-[0.9] sm:text-[70px] md:text-[78px] lg:text-[74px] xl:text-[84px]">
            Smooth,
          </span>

          <span className="mt-2 block text-[60px] italic leading-[0.9] text-[#9A8373] sm:text-[72px] md:text-[80px] lg:text-[76px] xl:text-[86px]">
            simplified.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-12 max-w-[430px] text-[13px] font-light leading-[2] tracking-[0.015em] text-[#6D6660] sm:text-[14px]">
          Professional laser hair removal in a comfortable setting with
          care tailored around you and your routine.
        </p>

        {/* CTA */}
        <a
          href="#book"
          className="group mt-12 inline-flex min-w-[285px] items-center justify-between border border-[#39322D]/70 px-9 py-[20px] text-[8px] font-normal uppercase tracking-[0.38em] text-[#302A26] transition-all duration-500 hover:bg-[#2A2521] hover:text-[#F4EFE9]"
        >
          <span>Book Laser</span>

          <ArrowRight
            size={14}
            strokeWidth={1}
            className="ml-12 transition-transform duration-500 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* =====================================================
          BOTTOM EDITORIAL DETAIL
      ===================================================== */}

      <div className="mt-auto pb-3">
        <div className="space-y-[9px]">
          <p className="text-[7px] font-light uppercase tracking-[0.46em] text-[#82756B]">
            Confidence
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.46em] text-[#82756B]">
            Care
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.46em] text-[#82756B]">
            Beauty
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.46em] text-[#82756B]">
            You
          </p>
        </div>

        <div className="mt-7 h-[58px] w-px bg-[#9A8576]/40" />
      </div>
    </div>

    {/* =====================================================
        RIGHT — LASER IMAGE
    ===================================================== */}

    <div className="group relative min-h-[600px] overflow-hidden sm:min-h-[700px] lg:min-h-[900px] xl:min-h-[960px]">
      <img
        src="/previews/house-of-laser/laser-client.jpg"
        alt="Laser hair removal treatment"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.012]"
      />

      {/* VERY SUBTLE WARM OVERLAY */}
      <div className="absolute inset-0 bg-[#4A372A]/[0.035]" />

      {/* =====================================================
          IMAGE DETAIL
      ===================================================== */}

      <div className="absolute right-[7%] top-[7%] hidden lg:block">
        <div className="space-y-[10px]">
          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-[#695B52]/55">
            Smoother
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-[#695B52]/55">
            Brighter
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-[#695B52]/55">
            Confident
          </p>

          <p className="text-[7px] font-light uppercase tracking-[0.44em] text-[#695B52]/55">
            You
          </p>
        </div>

        <div className="mt-6 h-px w-10 bg-[#695B52]/30" />
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
    EXPERIENCE + CONTACT + BOOKING
===================================================== */}

<section
  id="experience"
  className="relative overflow-hidden bg-[#F3EEE8]"
>
  {/* =====================================================
      BACKGROUND
  ===================================================== */}

  <img
    src="/previews/house-of-laser/experience-background.png"
    alt=""
    className="absolute inset-x-0 top-0 h-[720px] w-full object-cover object-center"
  />

  <div className="absolute inset-x-0 top-0 h-[720px] bg-[#F3EEE8]/20" />

  {/* =====================================================
      EXPERIENCE INTRO
  ===================================================== */}

  <div className="relative z-10">
    <div className="relative flex min-h-[700px] items-center justify-center px-6 py-24 sm:px-8 md:px-12">
      {/* LEFT DECORATIVE LINE */}
      <div className="absolute left-[6%] top-[14%] hidden h-[100px] w-px bg-[#8F7C6E]/30 lg:block" />

      {/* RIGHT DETAIL */}
      <div className="absolute right-[7%] top-[14%] hidden lg:block">
        <p className="text-[7px] font-light uppercase leading-[2.15] tracking-[0.44em] text-[#8B796C]/60">
          Beauty
          <br />
          Care
          <br />
          You
        </p>

        <div className="mt-5 h-px w-9 bg-[#8B796C]/25" />
      </div>

      {/* CENTER CONTENT */}
      <div className="mx-auto flex w-full max-w-[950px] flex-col items-center text-center">
        <Sparkles
          size={14}
          strokeWidth={1}
          className="text-[#A38D7D]"
        />

        <p className="mt-7 text-[7px] font-light uppercase tracking-[0.5em] text-[#927E70] sm:text-[8px]">
          House of Laser &amp; Spa
        </p>

        <h2
          className={`${bodoni.className} hls-bodoni mt-9 font-normal tracking-[-0.045em]`}
        >
          <span className="block text-[52px] leading-[0.9] text-[#29231F] sm:text-[66px] md:text-[76px] lg:text-[84px]">
            A little time
          </span>

          <span className="mt-2 block text-[54px] italic leading-[0.9] text-[#967E6D] sm:text-[68px] md:text-[78px] lg:text-[86px]">
            just for you.
          </span>
        </h2>

        <div className="mt-9 h-px w-10 bg-[#8E7A6C]/40" />

        <p className="mt-8 max-w-[590px] text-[13px] font-light leading-[2] text-[#68615C] sm:text-[14px]">
          Laser, skincare, beauty, and self-care in a warm Brooklyn
          space designed to feel personal rather than clinical.
        </p>
      </div>
    </div>

    {/* =====================================================
        VISIT / CONTACT
    ===================================================== */}

    <div
      id="contact"
      className="border-t border-[#7D6D62]/15 bg-[#E5DDD5]/85 backdrop-blur-[2px]"
    >
      <div className="mx-auto grid max-w-[1450px] lg:grid-cols-[1.25fr_0.55fr_0.6fr]">
        {/* COME SEE US */}
        <div className="relative px-8 py-16 sm:px-12 md:px-16 lg:min-h-[340px] lg:border-r lg:border-[#7D6D62]/15 lg:px-20 lg:py-16">
          <p className="text-[7px] font-light uppercase tracking-[0.46em] text-[#8B796C]">
            Visit The House
          </p>

          <h3
            className={`${bodoni.className} hls-bodoni mt-7 font-normal tracking-[-0.045em]`}
          >
            <span className="block text-[48px] leading-[0.92] text-[#29231F] sm:text-[56px] md:text-[62px]">
              Come see us
            </span>

            <span className="mt-1 block text-[50px] italic leading-[0.92] text-[#967E6D] sm:text-[58px] md:text-[64px]">
              in Brooklyn.
            </span>
          </h3>

          <div className="mt-9 flex items-center gap-5">
            <div className="h-px w-10 bg-[#8E7A6C]/35" />

            <p className="text-[7px] font-light uppercase tracking-[0.4em] text-[#8B796C]/75">
              Beauty Lives Here
            </p>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="border-t border-[#7D6D62]/15 px-8 py-14 sm:px-12 lg:min-h-[340px] lg:border-r lg:border-t-0 lg:px-12 lg:py-16">
          <MapPin
            size={17}
            strokeWidth={1}
            className="text-[#8B796C]"
          />

          <p className="mt-8 text-[7px] font-light uppercase tracking-[0.4em] text-[#927E70]">
            Visit
          </p>

          <p
            className={`${bodoni.className} hls-bodoni mt-5 text-[25px] font-normal leading-[1.22] tracking-[-0.02em] text-[#302A26]`}
          >
            1690 E 14th St
            <br />
            Unit 2
            <br />
            Brooklyn, NY
            <br />
            11229
          </p>

          <a
            href="https://maps.google.com/?q=1690+E+14th+St+Unit+2+Brooklyn+NY+11229"
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex items-center gap-4 border-b border-[#6F6258]/35 pb-2 text-[7px] font-medium uppercase tracking-[0.35em] text-[#62574F]"
          >
            Directions

            <ArrowRight
              size={11}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* CONTACT */}
        <div className="border-t border-[#7D6D62]/15 px-8 py-14 sm:px-12 lg:min-h-[340px] lg:border-t-0 lg:px-12 lg:py-16">
          <Phone
            size={17}
            strokeWidth={1}
            className="text-[#8B796C]"
          />

          <p className="mt-8 text-[7px] font-light uppercase tracking-[0.4em] text-[#927E70]">
            Connect
          </p>

          <a
            href="tel:+19298339197"
            className={`${bodoni.className} hls-bodoni mt-5 block whitespace-nowrap text-[25px] font-normal tracking-[-0.02em] text-[#302A26] transition-colors duration-300 hover:text-[#967E6D]`}
          >
            (929) 833-9197
          </a>

          <a
            href="https://www.instagram.com/houseoflaserspa/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 block text-[11px] font-light tracking-[0.02em] text-[#716861] transition-colors duration-300 hover:text-[#302A26]"
          >
            @houseoflaserspa
          </a>

          <div className="mt-9 h-px w-10 bg-[#8E7A6C]/30" />

          <p className="mt-5 text-[7px] font-light uppercase leading-[2] tracking-[0.4em] text-[#8B796C]/70">
            Brooklyn
            <br />
            New York
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        FINAL BOOKING BAND
    ===================================================== */}

    <div
      id="book"
      className="relative overflow-hidden bg-[#191815] px-6 py-24 text-white sm:px-8 md:py-28 lg:px-14 lg:py-32"
    >
      {/* SOFT WARM GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(177,150,126,0.10),transparent_48%)]" />

      {/* TOP DECORATIVE DETAILS */}
      <div className="absolute left-[6%] top-[12%] hidden h-[70px] w-px bg-white/15 lg:block" />
      <div className="absolute right-[6%] top-[12%] hidden h-[70px] w-px bg-[#C7B29F]/25 lg:block" />

      <div className="relative z-10 mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <p className="text-[7px] font-light uppercase tracking-[0.5em] text-[#C7B29F] sm:text-[8px]">
          Your Next Appointment
        </p>

        <h2
          className={`${bodoni.className} hls-bodoni mt-8 font-normal tracking-[-0.045em]`}
        >
          <span className="block text-[50px] leading-[0.92] text-[#F6F2EE] sm:text-[64px] md:text-[76px] lg:text-[82px]">
            Make a little time
          </span>

          <span className="mt-1 block text-[52px] italic leading-[0.92] text-[#C7B29F] sm:text-[66px] md:text-[78px] lg:text-[84px]">
            for yourself.
          </span>
        </h2>

        <p className="mt-9 max-w-[550px] text-[13px] font-light leading-[2] text-white/50">
          Choose the treatment that feels right for you and make a
          little room in your routine for yourself.
        </p>

        <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="tel:+19298339197"
            className="group inline-flex min-w-[250px] items-center justify-between border border-white/55 px-8 py-[18px] text-[7px] font-light uppercase tracking-[0.38em] text-white transition-all duration-500 hover:bg-white hover:text-[#211E1B]"
          >
            <span>Book an Appointment</span>

            <ArrowRight
              size={12}
              strokeWidth={1}
              className="ml-8 transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#services"
            className="group inline-flex items-center gap-5 py-[18px] text-[7px] font-light uppercase tracking-[0.38em] text-white/55 transition-colors duration-300 hover:text-white"
          >
            View Treatments

            <ArrowRight
              size={11}
              strokeWidth={1}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-20 flex w-full items-center gap-7">
          <div className="h-px flex-1 bg-white/10" />

          <p className="text-[6px] font-light uppercase tracking-[0.5em] text-white/30">
            House of Laser &amp; Spa
          </p>

          <div className="h-px flex-1 bg-white/10" />
        </div>
      </div>
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
      </main>
    </div>
  );
}