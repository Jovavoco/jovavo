"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import {
  ArrowRight,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
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
            transform: translateY(12px);
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
          animation: hlsHeroImage 1.8s cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        .hls-hero-text {
          animation: hlsHeroText 1.2s cubic-bezier(0.22, 1, 0.36, 1)
            0.15s both;
        }

        .hls-hero-nav {
          animation: hlsFade 1.2s ease 0.1s both;
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

          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/[0.06] to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.22)_100%)]" />

          {/* DESKTOP NAV */}

          <div className="hls-hero-nav absolute left-0 right-0 top-0 z-30 hidden px-10 pt-12 lg:block xl:px-16 xl:pt-16">
            <div className="relative mx-auto flex max-w-[1500px] items-start justify-between">
              <p className="text-[9px] font-light uppercase tracking-[0.36em] text-white/80">
                Brooklyn, NY
              </p>

              <a
                href="#home"
                className="absolute left-1/2 -translate-x-1/2 text-center"
              >
                <p className="whitespace-nowrap font-serif text-[15px] font-light uppercase tracking-[0.42em] text-[#F5EFE9]">
                  House of Laser &amp; Spa
                </p>

                <div className="mx-auto mt-7 h-px w-16 bg-white/45" />
              </a>

              <nav className="flex items-center gap-10">
                <a
                  href="#services"
                  className="text-[9px] font-light uppercase tracking-[0.32em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  Services
                </a>

                <a
                  href="#about"
                  className="text-[9px] font-light uppercase tracking-[0.32em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  About
                </a>

                <a
                  href="#contact"
                  className="text-[9px] font-light uppercase tracking-[0.32em] text-white/80 transition-opacity duration-300 hover:opacity-50"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>

          {/* MOBILE NAV */}

          <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-5 pt-6 lg:hidden">
            <a href="#home">
              <p className="font-serif text-[14px] font-light uppercase tracking-[0.2em] text-white">
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
              className="flex h-11 w-11 items-center justify-center border border-white/30 text-white backdrop-blur-sm"
            >
              {menuOpen ? (
                <X size={18} strokeWidth={1.2} />
              ) : (
                <Menu size={18} strokeWidth={1.2} />
              )}
            </button>
          </div>

          {/* MOBILE MENU */}

          {menuOpen && (
            <div className="absolute left-0 right-0 top-0 z-30 bg-[#17130F]/95 px-6 pb-10 pt-24 text-white backdrop-blur-xl lg:hidden">
              <div className="flex flex-col">
                <a
                  href="#services"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                >
                  Services
                </a>

                <a
                  href="#about"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                >
                  About
                </a>

                <a
                  href="#laser"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                >
                  Laser Hair Removal
                </a>

                <a
                  href="#facials"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                >
                  Facials &amp; Skincare
                </a>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
                >
                  Contact
                </a>

                <a
                  href="#book"
                  onClick={() => setMenuOpen(false)}
                  className="mt-7 flex items-center justify-center border border-white/40 px-6 py-4 text-[8px] font-light uppercase tracking-[0.28em]"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          )}

          {/* HERO CENTER */}

          <div className="absolute inset-0 z-20 flex items-center justify-center px-5 text-center">
            <div className="hls-hero-text flex w-full max-w-[1100px] flex-col items-center justify-center">
              <h1
                className={`${cormorant.className} text-center font-light text-[#F8F3ED]`}
              >
                <span className="block text-[64px] font-light leading-[0.82] tracking-[-0.025em] sm:text-[82px] md:text-[100px] lg:text-[116px] xl:text-[126px]">
                  Beauty
                </span>

                <span className="mt-3 block whitespace-nowrap text-[52px] font-light leading-[0.86] tracking-[-0.025em] sm:text-[69px] md:text-[84px] lg:text-[98px] xl:text-[108px]">
                  <span className="italic font-light">without</span>
                  <span className="font-light not-italic"> limits.</span>
                </span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-11 sm:gap-x-7">
                <span className="text-[8px] font-light uppercase tracking-[0.42em] text-white/85 sm:text-[9px]">
                  Laser
                </span>

                <span className="text-[7px] text-white/45">•</span>

                <span className="text-[8px] font-light uppercase tracking-[0.42em] text-white/85 sm:text-[9px]">
                  Skincare
                </span>

                <span className="text-[7px] text-white/45">•</span>

                <span className="text-[8px] font-light uppercase tracking-[0.42em] text-white/85 sm:text-[9px]">
                  Self-Care
                </span>
              </div>

              <a
                href="#book"
                className="mt-9 inline-flex min-w-[280px] items-center justify-center border border-white/60 bg-transparent px-10 py-[17px] text-[8px] font-light uppercase tracking-[0.34em] text-white transition-all duration-500 hover:bg-white hover:text-[#28231F] sm:min-w-[350px]"
              >
                Book an Appointment
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:right-16">
            <div className="h-px w-7 bg-white/50" />

            <p className="text-[8px] font-light uppercase tracking-[0.35em] text-white/75">
              A calmer, brighter you
            </p>
          </div>

          <div className="absolute bottom-7 left-6 z-20 lg:hidden">
            <p className="text-[7px] font-light uppercase tracking-[0.32em] text-white/60">
              Brooklyn, New York
            </p>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section
          id="about"
          className="relative overflow-hidden bg-[#F3EEE8] px-6 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16 lg:py-40"
        >
          <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full bg-[#D8CBC0]/20 blur-[120px]" />

          <div className="relative mx-auto max-w-[1280px]">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#9A897B]/60" />

              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#8A796C]">
                The House
              </p>
            </div>

            <div className="mt-10 max-w-[1050px] md:mt-14">
              <h2
                className={`${cormorant.className} text-[52px] font-light leading-[0.92] tracking-[-0.025em] text-[#2D2925] sm:text-[66px] md:text-[82px] lg:text-[94px]`}
              >
                Beauty should feel
                <br />

                <span className="italic font-light text-[#8B7565]">
                  personal.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-10 border-t border-[#2D2925]/10 pt-9 md:mt-20 md:grid-cols-[0.75fr_1fr_1fr] md:gap-12 md:pt-11 lg:gap-16">
              <div>
                <p className="max-w-[190px] text-[9px] uppercase leading-[2] tracking-[0.25em] text-[#9A897B]">
                  Laser
                  <br />
                  Skincare
                  <br />
                  Self-Care
                </p>
              </div>

              <div>
                <p className="max-w-[390px] text-[14px] font-light leading-[1.9] text-[#655E58]">
                  House of Laser &amp; Spa brings together laser hair
                  removal, skincare, beauty, and self-care in an intimate
                  Brooklyn setting.
                </p>
              </div>

              <div>
                <p className="max-w-[390px] text-[14px] font-light leading-[1.9] text-[#655E58]">
                  Every treatment is approached with intention — creating
                  an experience that feels comfortable, considered, and
                  entirely your own.
                </p>

                <a
                  href="#services"
                  className="group mt-8 inline-flex items-center gap-4 text-[8px] font-medium uppercase tracking-[0.28em] text-[#4E4741]"
                >
                  Discover Our Treatments

                  <ArrowRight
                    size={13}
                    strokeWidth={1.2}
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-[#2D2925]/[0.06] pt-6 md:mt-20">
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#9A897B]/70">
                Brooklyn, New York
              </p>

              <p className="hidden text-[7px] uppercase tracking-[0.3em] text-[#9A897B]/70 sm:block">
                House of Laser &amp; Spa
              </p>
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
                  className={`${cormorant.className} mt-8 text-[54px] font-light leading-[0.92] tracking-[-0.025em] sm:text-[66px] md:text-[76px]`}
                >
                  Come in.
                  <br />
                  Slow down.
                  <br />

                  <span className="italic font-light text-[#C7B29F]">
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

        <section
          id="services"
          className="bg-[#F3EEE8] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
          <div className="mx-auto max-w-[1250px]">
            <div className="mb-16 grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end md:border-b md:border-black/10 md:pb-12">
              <div>
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#897A6E]">
                  Services
                </p>

                <h2
                  className={`${cormorant.className} mt-6 text-[54px] font-light leading-[0.92] tracking-[-0.025em] sm:text-[68px] md:text-[82px]`}
                >
                  Treatments,
                  <br />

                  <span className="italic font-light text-[#8B7565]">
                    your way.
                  </span>
                </h2>
              </div>

              <p className="max-w-[390px] text-[14px] leading-7 text-[#6E6660] md:justify-self-end">
                Laser, skincare, and beauty treatments thoughtfully
                brought together under one roof.
              </p>
            </div>

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

                  <h3
                    className={`${cormorant.className} text-[34px] font-light tracking-[-0.02em] sm:text-[40px]`}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#756D67] md:mt-0">
                    {service.description}
                  </p>

                  <div className="mt-6 flex h-11 w-11 items-center justify-center border border-black/15 transition-all duration-500 group-hover:border-[#28231F] group-hover:bg-[#28231F] group-hover:text-white md:mt-0">
                    <ArrowRight size={14} strokeWidth={1.3} />
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
            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[500px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#826E60]">
                  Laser Hair Removal
                </p>

                <h2
                  className={`${cormorant.className} mt-7 text-[54px] font-light leading-[0.92] tracking-[-0.025em] sm:text-[68px] md:text-[78px]`}
                >
                  Smooth,
                  <br />

                  <span className="italic font-light text-[#8B7565]">
                    simplified.
                  </span>
                </h2>

                <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-[#6E6660]">
                  Professional laser hair removal in a comfortable setting
                  with care tailored around you and your routine.
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
            <div className="group relative min-h-[540px] overflow-hidden md:min-h-[700px]">
              <img
                src="/previews/house-of-laser/facial-machine.jpg"
                alt="Facial and skincare treatment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[500px]">
                <p className="text-[8px] uppercase tracking-[0.35em] text-[#C7B29F]">
                  Facials &amp; Skincare
                </p>

                <h2
                  className={`${cormorant.className} mt-7 text-[54px] font-light leading-[0.92] tracking-[-0.025em] sm:text-[68px] md:text-[78px]`}
                >
                  Skin deserves
                  <br />

                  <span className="italic font-light text-[#C7B29F]">
                    attention.
                  </span>
                </h2>

                <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-white/55">
                  Thoughtful facial and skincare treatments in an intimate
                  space designed for slowing down and taking care of
                  yourself.
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
              className={`${cormorant.className} mt-7 text-[50px] font-light leading-[0.94] tracking-[-0.025em] sm:text-[64px] md:text-[78px]`}
            >
              A little time
              <br className="hidden sm:block" />{" "}
              <span className="italic font-light text-[#8B7565]">
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
                className={`${cormorant.className} mt-6 text-[52px] font-light leading-[0.92] tracking-[-0.025em] md:text-[70px]`}
              >
                Come see us
                <br />

                <span className="italic font-light text-[#8B7565]">
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
                  className={`${cormorant.className} mt-4 text-[24px] font-light leading-8`}
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
                  className={`${cormorant.className} mt-4 block text-[24px] font-light transition-colors hover:text-[#8B7565]`}
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
              className={`${cormorant.className} mt-7 text-[52px] font-light leading-[0.92] tracking-[-0.025em] sm:text-[66px] md:text-[84px]`}
            >
              Make a little time
              <br />

              <span className="italic font-light text-[#C7B29F]">
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
                className={`${cormorant.className} text-[30px] font-light`}
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