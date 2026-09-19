"use client";

import { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3EEE8] text-[#28231F]">
      {/* =====================================================
          GLOBAL
      ===================================================== */}

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
            transform: scale(1.025);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hlsHeroText {
          from {
            opacity: 0;
            transform: translateY(18px);
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
          animation: hlsHeroText 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) 0.15s both;
        }

        .hls-hero-nav {
          animation: hlsFade 1.2s ease 0.15s both;
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
          {/* BACKGROUND IMAGE */}

          <img
            src="/previews/house-of-laser/spa-hero.png"
            alt="House of Laser & Spa treatment room"
            className="hls-hero-image absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />

          {/* IMAGE SHADING */}

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/30" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.18)_100%)]" />

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hls-hero-nav absolute left-0 right-0 top-0 z-30 hidden px-10 pt-12 lg:block xl:px-16 xl:pt-16">
            <div className="relative mx-auto flex max-w-[1500px] items-start justify-between">
              {/* LOCATION */}

              <p className="text-[9px] uppercase tracking-[0.36em] text-white/90">
                Brooklyn, NY
              </p>

              {/* CENTER BRAND */}

              <a
                href="#home"
                className="absolute left-1/2 -translate-x-1/2 text-center"
              >
                <p className="whitespace-nowrap font-serif text-[15px] uppercase tracking-[0.42em] text-[#F5EFE9]">
                  House of Laser &amp; Spa
                </p>

                <div className="mx-auto mt-7 h-px w-16 bg-white/55" />
              </a>

              {/* NAV */}

              <nav className="flex items-center gap-10">
                <a
                  href="#services"
                  className="text-[9px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-50"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="text-[9px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-50"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="text-[9px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-50"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-5 pt-6 lg:hidden">
            <a href="#home">
              <p className="font-serif text-[14px] uppercase tracking-[0.2em] text-white">
                House of Laser
              </p>

              <p className="mt-1 text-[6px] uppercase tracking-[0.38em] text-white/60">
                &amp; Spa · Brooklyn
              </p>
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center border border-white/35 text-white backdrop-blur-sm"
            >
              {menuOpen ? (
                <X size={18} strokeWidth={1.3} />
              ) : (
                <Menu size={18} strokeWidth={1.3} />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}

          {menuOpen && (
            <div className="absolute left-0 right-0 top-0 z-30 bg-[#17130F]/95 px-6 pb-10 pt-24 text-white backdrop-blur-xl lg:hidden">
              <div className="flex flex-col">
                {[
                  ["Services", "#services"],
                  ["About", "#about"],
                  ["Laser Hair Removal", "#laser"],
                  ["Facials & Skincare", "#facials"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                  >
                    {label}
                  </a>
                ))}

                <a
                  href="#book"
                  onClick={() => setMenuOpen(false)}
                  className="mt-7 flex items-center justify-between border border-white/40 px-6 py-4 text-[8px] uppercase tracking-[0.28em]"
                >
                  Book an Appointment

                  <ArrowRight size={13} strokeWidth={1.3} />
                </a>
              </div>
            </div>
          )}

          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="relative z-20 flex min-h-[100svh] items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8">
            <div className="hls-hero-text w-full max-w-[1050px]">
              <h1 className="font-serif text-[56px] font-light leading-[0.92] tracking-[-0.045em] text-[#F7F1EA] sm:text-[76px] md:text-[92px] lg:text-[104px] xl:text-[116px]">
                Beauty
                <br className="sm:hidden" />{" "}
                <span className="italic font-light">
                  without
                </span>{" "}
                limits.
              </h1>

              {/* SERVICE LABELS */}

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[8px] uppercase tracking-[0.4em] text-white/85 sm:gap-x-7 sm:text-[9px]">
                <span>Laser</span>

                <span className="text-white/45">·</span>

                <span>Skincare</span>

                <span className="text-white/45">·</span>

                <span>Self-Care</span>
              </div>

              {/* CTA */}

              <a
                href="#book"
                className="group mx-auto mt-10 inline-flex min-w-[270px] items-center justify-center border border-white/70 bg-black/5 px-8 py-[18px] text-[8px] uppercase tracking-[0.34em] text-white backdrop-blur-[2px] transition-all duration-500 hover:bg-white hover:text-[#28231F] sm:min-w-[350px]"
              >
                Book an Appointment

                <ArrowRight
                  size={12}
                  strokeWidth={1.3}
                  className="ml-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>

          {/* BOTTOM TAGLINE */}

          <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:right-16">
            <div className="h-px w-7 bg-white/55" />

            <p className="text-[8px] uppercase tracking-[0.35em] text-white/80">
              A calmer, brighter you
            </p>
          </div>

          {/* MOBILE LOCATION */}

          <div className="absolute bottom-7 left-6 z-20 lg:hidden">
            <p className="text-[7px] uppercase tracking-[0.32em] text-white/60">
              Brooklyn, New York
            </p>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
          <div className="mx-auto max-w-[1250px]">
            <div className="grid gap-12 lg:grid-cols-[0.36fr_1.64fr] lg:gap-24">
              <div>
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#897A6E]">
                  The House
                </p>
              </div>

              <div>
                <h2 className="max-w-[950px] font-serif text-[44px] font-light leading-[1.03] tracking-[-0.04em] sm:text-[56px] md:text-[68px] lg:text-[76px]">
                  Beauty should feel
                  <br className="hidden sm:block" />{" "}
                  <span className="italic text-[#8B7565]">
                    personal.
                  </span>
                </h2>

                <div className="mt-11 grid gap-8 border-t border-black/10 pt-9 md:grid-cols-2 md:gap-14">
                  <p className="text-[14px] leading-7 text-[#6E6660]">
                    House of Laser &amp; Spa brings laser hair
                    removal, skincare, beauty, and self-care together
                    in one intimate Brooklyn destination.
                  </p>

                  <p className="text-[14px] leading-7 text-[#6E6660]">
                    Every visit is centered around thoughtful care, a
                    comfortable atmosphere, and treatments designed
                    around you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="bg-[#1E1D19] text-white"
        >
          <div className="grid lg:grid-cols-2">
            {/* IMAGE */}

            <div className="group relative min-h-[520px] overflow-hidden md:min-h-[700px] lg:min-h-[760px]">
              <img
                src="/previews/house-of-laser/treatment-room.jpg"
                alt="House of Laser & Spa treatment room"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* COPY */}

            <div className="flex min-h-[600px] items-center px-8 py-20 sm:px-10 md:px-16 lg:px-20 xl:px-24">
              <div className="max-w-[520px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#C7B29F]">
                  Inside The Spa
                </p>

                <h2 className="mt-8 font-serif text-[50px] font-light leading-[0.97] tracking-[-0.04em] sm:text-[62px] md:text-[72px]">
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
                  treatment space make every appointment feel like
                  time genuinely set aside for you.
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

        <section
          id="services"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
          <div className="mx-auto max-w-[1250px]">
            {/* HEADER */}

            <div className="mb-16 grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end md:border-b md:border-black/10 md:pb-12">
              <div>
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#897A6E]">
                  Services
                </p>

                <h2 className="mt-6 font-serif text-[50px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[62px] md:text-[76px]">
                  Treatments,
                  <br />

                  <span className="italic text-[#8B7565]">
                    your way.
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-[14px] leading-7 text-[#6E6660] md:justify-self-end">
                Laser, skincare, and beauty treatments thoughtfully
                brought together under one roof.
              </p>
            </div>

            {/* SERVICE ROWS */}

            <div className="border-t border-black/10 md:border-t-0">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group grid border-b border-black/10 py-9 transition-colors duration-500 hover:bg-white/40 md:grid-cols-[0.15fr_0.9fr_0.8fr_auto] md:items-center md:px-5 md:py-11"
                >
                  <p className="mb-4 text-[8px] tracking-[0.25em] text-[#A09287] md:mb-0">
                    {service.number}
                  </p>

                  <h3 className="font-serif text-[30px] font-light tracking-[-0.025em] sm:text-[36px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#756D67] md:mt-0">
                    {service.description}
                  </p>

                  <div className="mt-6 flex h-11 w-11 items-center justify-center border border-black/15 transition-all duration-500 group-hover:border-[#28231F] group-hover:bg-[#28231F] group-hover:text-white md:mt-0">
                    <ArrowRight
                      size={14}
                      strokeWidth={1.3}
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            LASER
        ===================================================== */}

        <section
          id="laser"
          className="bg-[#D9CEC3] px-5 py-5 md:px-8 md:py-8"
        >
          <div className="mx-auto grid max-w-[1450px] bg-[#E6DDD4] lg:grid-cols-[0.8fr_1.2fr]">
            {/* COPY */}

            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[500px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#826E60]">
                  Laser Hair Removal
                </p>

                <h2 className="mt-7 font-serif text-[50px] font-light leading-[0.97] tracking-[-0.04em] sm:text-[62px] md:text-[72px]">
                  Smooth,
                  <br />

                  <span className="italic text-[#8B7565]">
                    simplified.
                  </span>
                </h2>

                <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-[#6E6660]">
                  Professional laser hair removal in a comfortable
                  setting with care tailored around you and your
                  routine.
                </p>

                <a
                  href="#book"
                  className="group mt-9 inline-flex items-center gap-3 border border-[#28231F] px-7 py-4 text-[8px] uppercase tracking-[0.25em] text-[#28231F] transition-all duration-500 hover:bg-[#28231F] hover:text-white"
                >
                  Book Laser

                  <ArrowRight
                    size={13}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* IMAGE */}

            <div className="group relative min-h-[540px] overflow-hidden md:min-h-[700px]">
              <img
                src="/previews/house-of-laser/laser-client.jpg"
                alt="Laser hair removal treatment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* =====================================================
            FACIALS
        ===================================================== */}

        <section
          id="facials"
          className="bg-[#F3EEE8] px-5 py-5 md:px-8 md:py-8"
        >
          <div className="mx-auto grid max-w-[1450px] bg-[#201F1B] text-white lg:grid-cols-[1.15fr_0.85fr]">
            {/* IMAGE */}

            <div className="group relative min-h-[540px] overflow-hidden md:min-h-[700px]">
              <img
                src="/previews/house-of-laser/facial-machine.jpg"
                alt="Facial and skincare treatment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* COPY */}

            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[500px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#C7B29F]">
                  Facials &amp; Skincare
                </p>

                <h2 className="mt-7 font-serif text-[50px] font-light leading-[0.97] tracking-[-0.04em] sm:text-[62px] md:text-[72px]">
                  Skin deserves
                  <br />

                  <span className="italic text-[#C7B29F]">
                    attention.
                  </span>
                </h2>

                <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-white/55">
                  Thoughtful facial and skincare treatments in an
                  intimate space designed for slowing down and taking
                  care of yourself.
                </p>

                <a
                  href="#book"
                  className="group mt-9 inline-flex items-center gap-3 border border-white/45 px-7 py-4 text-[8px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-[#28231F]"
                >
                  Book a Facial

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
            EDITORIAL STATEMENT
        ===================================================== */}

        <section className="px-6 py-28 md:px-10 md:py-40 lg:px-14">
          <div className="mx-auto max-w-[1000px] text-center">
            <Sparkles
              size={16}
              strokeWidth={1}
              className="mx-auto text-[#8A796B]"
            />

            <p className="mt-7 text-[8px] uppercase tracking-[0.36em] text-[#897A6E]">
              House of Laser &amp; Spa
            </p>

            <h2 className="mt-7 font-serif text-[44px] font-light leading-[1.03] tracking-[-0.04em] sm:text-[56px] md:text-[72px]">
              A little time
              <br className="hidden sm:block" />{" "}
              <span className="italic text-[#8B7565]">
                just for you.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-[560px] text-[14px] leading-7 text-[#6E6660]">
              Beauty, skincare, and self-care in a warm Brooklyn
              space designed to feel personal rather than clinical.
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
            {/* INTRO */}

            <div className="px-7 py-20 sm:px-10 md:px-14 lg:border-r lg:border-black/10 lg:px-16 lg:py-24">
              <p className="text-[8px] uppercase tracking-[0.35em] text-[#897A6E]">
                Visit The House
              </p>

              <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] md:text-[64px]">
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

            {/* DETAILS */}

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

                <p className="mt-4 font-serif text-[21px] font-light leading-8">
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
                  className="mt-4 block font-serif text-[21px] font-light transition-colors hover:text-[#8B7565]"
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
            FINAL CTA
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

            <h2 className="mt-7 font-serif text-[48px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[78px]">
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
                className="group inline-flex min-w-[225px] items-center justify-center gap-3 border border-white/60 px-8 py-4 text-[8px] uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-[#28231F]"
              >
                Book an Appointment

                <ArrowRight
                  size={13}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
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
            {/* BRAND */}

            <div>
              <p className="font-serif text-[26px] font-light">
                House of Laser
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/35">
                &amp; Spa · Brooklyn
              </p>

              <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-white/40">
                Laser, skincare, beauty, and self-care in Brooklyn,
                New York.
              </p>
            </div>

            {/* ADDRESS */}

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

            {/* CONNECT */}

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

          {/* BOTTOM */}

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-[7px] uppercase tracking-[0.24em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser &amp; Spa</p>

            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </div>
  );
}