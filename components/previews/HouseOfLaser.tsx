"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

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
      "Professional laser hair removal personalized around your skin, your goals, and your routine.",
    href: "#laser",
  },
  {
    number: "02",
    title: "Facials & Skincare",
    description:
      "Thoughtful facial and skincare treatments designed to give your skin the attention it deserves.",
    href: "#facials",
  },
  {
    number: "03",
    title: "Beauty & Self-Care",
    description:
      "Beauty and self-care brought together in one intimate Brooklyn destination.",
    href: "#experience",
  },
];

/* =========================================================
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`${className} transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F3EEE8] text-[#26221F]">
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

        @keyframes hlsHeroReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hlsHeroImage {
          from {
            transform: scale(1.035);
          }

          to {
            transform: scale(1);
          }
        }

        .hls-hero-copy {
          animation: hlsHeroReveal 1.2s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .hls-hero-image {
          animation: hlsHeroImage 2s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hls-hero-copy,
          .hls-hero-image {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#171613]/85 shadow-[0_10px_40px_rgba(0,0,0,0.15)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-14 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* BRAND */}

          <a
            href="#home"
            aria-label="House of Laser & Spa home"
            className="relative z-10"
          >
            <div className="flex flex-col text-white">
              <span className="font-serif text-[20px] tracking-[0.03em] sm:text-[22px]">
                House of Laser
              </span>

              <span className="mt-0.5 text-[7px] uppercase tracking-[0.38em] text-white/60">
                & Spa · Brooklyn
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-9 lg:flex">
            {[
              ["Treatments", "#services"],
              ["Laser", "#laser"],
              ["Skincare", "#facials"],
              ["The Spa", "#experience"],
              ["Visit", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-[8px] uppercase tracking-[0.24em] text-white/70 transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {label}
              </a>
            ))}

            <a
              href="#book"
              className="group inline-flex items-center gap-3 border border-white/50 px-6 py-3.5 text-[8px] uppercase tracking-[0.23em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-[#26221F]"
            >
              Book Appointment

              <ArrowRight
                size={12}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </nav>

          {/* MOBILE MENU */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="relative z-10 flex h-11 w-11 items-center justify-center border border-white/25 text-white lg:hidden"
          >
            {menuOpen ? (
              <X size={19} strokeWidth={1.3} />
            ) : (
              <Menu size={19} strokeWidth={1.3} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#171613]/95 px-6 py-8 text-white backdrop-blur-xl lg:hidden">
            <div className="flex flex-col">
              {[
                ["Treatments", "#services"],
                ["Laser Hair Removal", "#laser"],
                ["Facials & Skincare", "#facials"],
                ["The Spa", "#experience"],
                ["Visit", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-4 font-serif text-[26px] font-light"
                >
                  {label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-between border border-white/30 px-6 py-4 text-[8px] uppercase tracking-[0.23em]"
              >
                Book Appointment

                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          id="home"
          className="relative min-h-[100svh] overflow-hidden bg-[#1D1B18]"
        >
          {/* BACKGROUND */}

          <img
            src="/previews/house-of-laser/spa-hero.png"
            alt="House of Laser & Spa treatment room"
            className="hls-hero-image absolute inset-0 h-full w-full object-cover object-[60%_center] md:object-center"
          />

          {/* OVERLAYS */}

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/5" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/30" />

          {/* CONTENT */}

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-6 pb-16 pt-32 sm:px-8 sm:pb-20 md:px-12 lg:items-center lg:px-14 lg:pb-0">
            <div className="max-w-[800px] hls-hero-copy">
              <div className="mb-7 flex items-center gap-4">
                <div className="h-px w-10 bg-[#E2D3C3]/70" />

                <p className="text-[8px] uppercase tracking-[0.36em] text-white/70">
                  Brooklyn · New York
                </p>
              </div>

              <h1 className="font-serif text-[60px] font-light leading-[0.9] tracking-[-0.045em] text-white sm:text-[76px] md:text-[94px] lg:text-[108px] xl:text-[118px]">
                Beauty,
                <br />

                <span className="italic text-[#E2D3C3]">
                  your way.
                </span>
              </h1>

              <p className="mt-8 max-w-[510px] text-[14px] leading-7 text-white/70 md:text-[15px]">
                Laser hair removal, skincare, and beauty treatments
                in an intimate Brooklyn spa designed around you.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="group inline-flex items-center justify-center gap-3 bg-[#F1EBE4] px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-[#26221F] transition-all duration-500 hover:bg-white"
                >
                  Book an Appointment

                  <ArrowRight
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-white/40 bg-black/10 px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-white backdrop-blur-[3px] transition-all duration-500 hover:border-white hover:bg-white hover:text-[#26221F]"
                >
                  Explore Treatments
                </a>
              </div>
            </div>

            {/* BOTTOM RIGHT */}

            <div className="absolute bottom-10 right-12 hidden text-right lg:block">
              <p className="text-[7px] uppercase tracking-[0.32em] text-white/45">
                House of Laser &amp; Spa
              </p>

              <p className="mt-2 font-serif text-[18px] italic text-white/80">
                Laser · Skin · Self-Care
              </p>
            </div>

            {/* SCROLL */}

            <a
              href="#intro"
              aria-label="Scroll to explore"
              className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
            >
              <span className="text-[7px] uppercase tracking-[0.32em] text-white/40">
                Explore
              </span>

              <span className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
            </a>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section
          id="intro"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40"
        >
          <div className="mx-auto max-w-[1250px]">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[0.42fr_1.58fr] lg:gap-24">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.34em] text-[#84776D]">
                    The House
                  </p>
                </div>

                <div>
                  <h2 className="max-w-[930px] font-serif text-[42px] font-light leading-[1.06] tracking-[-0.035em] sm:text-[52px] md:text-[66px]">
                    A different kind of
                    <br className="hidden sm:block" /> beauty{" "}

                    <span className="italic text-[#877465]">
                      experience.
                    </span>
                  </h2>

                  <div className="mt-10 grid gap-7 border-t border-black/10 pt-8 md:grid-cols-2 md:gap-14">
                    <p className="text-[14px] leading-7 text-[#6E6660]">
                      House of Laser &amp; Spa brings laser hair
                      removal, skincare, beauty, and self-care
                      together in one intimate Brooklyn destination.
                    </p>

                    <p className="text-[14px] leading-7 text-[#6E6660]">
                      Warm lighting, rich textures, and thoughtful
                      treatments create an experience that feels
                      personal from the moment you walk through the
                      door.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="bg-[#1E211D] text-white"
        >
          <div className="grid lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="group relative min-h-[560px] overflow-hidden md:min-h-[720px]">
                <img
                  src="/previews/house-of-laser/treatment-room.jpg"
                  alt="House of Laser & Spa treatment room"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>
            </Reveal>

            <div className="flex min-h-[600px] items-center px-8 py-20 sm:px-10 md:px-16 lg:px-20 xl:px-24">
              <Reveal>
                <div className="max-w-[520px]">
                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#C9B6A3]">
                    Inside The Spa
                  </p>

                  <h2 className="mt-7 font-serif text-[50px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[72px]">
                    Come in.
                    <br />
                    Slow down.
                    <br />

                    <span className="italic text-[#C9B6A3]">
                      Stay awhile.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-[440px] text-[14px] leading-7 text-white/55">
                    A warm, personal treatment space where beauty,
                    skincare, and a little time away from everything
                    else come together.
                  </p>

                  <a
                    href="#services"
                    className="group mt-10 inline-flex items-center gap-4 border-b border-white/25 pb-2 text-[8px] uppercase tracking-[0.25em] text-white"
                  >
                    Explore Treatments

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
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
            <Reveal>
              <div className="mb-16 grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-end md:border-b md:border-black/10 md:pb-12">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.34em] text-[#84776D]">
                    Treatments
                  </p>

                  <h2 className="mt-6 font-serif text-[48px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[76px]">
                    Made for
                    <br />

                    <span className="italic text-[#877465]">
                      you.
                    </span>
                  </h2>
                </div>

                <p className="max-w-[390px] text-[14px] leading-7 text-[#6E6660] md:justify-self-end">
                  Laser, skincare, and beauty treatments thoughtfully
                  brought together under one roof.
                </p>
              </div>
            </Reveal>

            <div className="border-t border-black/10 md:border-t-0">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 70}
                >
                  <a
                    href={service.href}
                    className="group grid border-b border-black/10 py-9 transition-colors duration-500 hover:bg-white/40 md:grid-cols-[0.18fr_1fr_0.75fr_auto] md:items-center md:px-5 md:py-10"
                  >
                    <p className="mb-4 text-[8px] tracking-[0.24em] text-[#9B8E84] md:mb-0">
                      {service.number}
                    </p>

                    <h3 className="font-serif text-[31px] font-light tracking-[-0.025em] sm:text-[36px]">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-[390px] text-[13px] leading-6 text-[#756D67] md:mt-0">
                      {service.description}
                    </p>

                    <div className="mt-6 flex h-11 w-11 items-center justify-center border border-black/15 transition-all duration-500 group-hover:border-[#26221F] group-hover:bg-[#26221F] group-hover:text-white md:mt-0">
                      <ArrowRight
                        size={14}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            LASER
        ===================================================== */}

        <section
          id="laser"
          className="bg-[#D8CDC2] px-5 py-5 md:px-8 md:py-8"
        >
          <div className="mx-auto grid max-w-[1450px] overflow-hidden bg-[#E6DDD4] lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <Reveal>
                <div className="max-w-[500px]">
                  <p className="text-[8px] uppercase tracking-[0.34em] text-[#826E60]">
                    Laser Hair Removal
                  </p>

                  <h2 className="mt-7 font-serif text-[50px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[70px]">
                    Smooth,
                    <br />

                    <span className="italic text-[#877465]">
                      simplified.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-[#6E6660]">
                    Professional laser hair removal in a comfortable
                    setting, tailored around you and your routine.
                  </p>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 bg-[#272522] px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-white transition-colors duration-500 hover:bg-[#4A443F]"
                  >
                    Book Laser

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="group relative min-h-[560px] overflow-hidden md:min-h-[720px]">
              <img
                src="/previews/house-of-laser/laser-client.jpg"
                alt="Laser hair removal treatment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* =====================================================
            FACIALS
        ===================================================== */}

        <section
          id="facials"
          className="px-5 py-5 md:px-8 md:py-8"
        >
          <div className="mx-auto grid max-w-[1450px] overflow-hidden bg-[#20221E] text-white lg:grid-cols-[1.15fr_0.85fr]">
            <div className="group relative min-h-[560px] overflow-hidden md:min-h-[720px]">
              <img
                src="/previews/house-of-laser/facial-machine.jpg"
                alt="Facial and skincare treatment"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="flex items-center px-8 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <Reveal>
                <div className="max-w-[500px]">
                  <p className="text-[8px] uppercase tracking-[0.34em] text-[#C9B6A3]">
                    Facials &amp; Skincare
                  </p>

                  <h2 className="mt-7 font-serif text-[50px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[70px]">
                    Give your skin
                    <br />

                    <span className="italic text-[#C9B6A3]">
                      some attention.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-white/55">
                    Thoughtful facial and skincare treatments in an
                    intimate space designed for slowing down and
                    taking care of yourself.
                  </p>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 bg-[#EFE8E0] px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-[#25231F] transition-colors duration-500 hover:bg-white"
                  >
                    Book a Facial

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDITORIAL STATEMENT
        ===================================================== */}

        <section className="px-6 py-28 md:px-10 md:py-40 lg:px-14">
          <Reveal>
            <div className="mx-auto max-w-[1000px] text-center">
              <Sparkles
                size={16}
                strokeWidth={1}
                className="mx-auto text-[#8A796B]"
              />

              <p className="mt-7 text-[8px] uppercase tracking-[0.36em] text-[#84776D]">
                House of Laser &amp; Spa
              </p>

              <h2 className="mt-7 font-serif text-[44px] font-light leading-[1.04] tracking-[-0.04em] sm:text-[56px] md:text-[72px]">
                Your appointment should
                <br className="hidden sm:block" /> feel like{" "}

                <span className="italic text-[#877465]">
                  your time.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-[570px] text-[14px] leading-7 text-[#6E6660]">
                Beauty, skincare, and self-care in a warm Brooklyn
                space designed to feel personal rather than clinical.
              </p>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            VISIT
        ===================================================== */}

        <section
          id="contact"
          className="border-y border-black/10 bg-[#E5DDD5]"
        >
          <div className="mx-auto grid max-w-[1250px] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="px-7 py-20 sm:px-10 md:px-14 lg:border-r lg:border-black/10 lg:px-16 lg:py-24">
              <Reveal>
                <p className="text-[8px] uppercase tracking-[0.34em] text-[#84776D]">
                  Visit The House
                </p>

                <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] md:text-[64px]">
                  Come see us
                  <br />

                  <span className="italic text-[#877465]">
                    in Brooklyn.
                  </span>
                </h2>

                <p className="mt-7 max-w-[430px] text-[14px] leading-7 text-[#6E6660]">
                  Laser, skincare, beauty, and self-care in an
                  intimate space designed around your experience.
                </p>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2">
              <div className="border-t border-black/10 px-7 py-14 sm:border-r sm:border-t-0 md:px-10 lg:px-12">
                <MapPin
                  size={18}
                  strokeWidth={1.2}
                  className="text-[#796A5E]"
                />

                <p className="mt-7 text-[7px] uppercase tracking-[0.3em] text-[#84776D]">
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

                <p className="mt-7 text-[7px] uppercase tracking-[0.3em] text-[#84776D]">
                  Connect
                </p>

                <a
                  href="tel:+19298339197"
                  className="mt-4 block font-serif text-[21px] font-light transition-colors hover:text-[#877465]"
                >
                  (929) 833-9197
                </a>

                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 block text-[12px] text-[#6E6660] transition-colors hover:text-[#26221F]"
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
          className="relative overflow-hidden bg-[#191A17] px-6 py-28 text-white md:px-10 md:py-36 lg:px-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(160,137,117,0.10),transparent_55%)]" />

          <Reveal>
            <div className="relative z-10 mx-auto max-w-[900px] text-center">
              <p className="text-[8px] uppercase tracking-[0.36em] text-[#C9B6A3]">
                Your Next Appointment
              </p>

              <h2 className="mt-7 font-serif text-[48px] font-light leading-[0.98] tracking-[-0.04em] sm:text-[60px] md:text-[78px]">
                Make a little time
                <br />

                <span className="italic text-[#C9B6A3]">
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
                  className="group inline-flex min-w-[225px] items-center justify-center gap-3 bg-[#EEE6DE] px-8 py-4 text-[8px] uppercase tracking-[0.23em] text-[#26221F] transition-all duration-500 hover:bg-white"
                >
                  Book an Appointment

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#services"
                  className="inline-flex min-w-[185px] items-center justify-center border border-white/20 px-7 py-4 text-[8px] uppercase tracking-[0.23em] text-white/70 transition-all duration-500 hover:border-white/50 hover:text-white"
                >
                  View Treatments
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#191A17] px-6 pb-10 text-white md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1250px] border-t border-white/10 pt-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <p className="font-serif text-[27px] font-light">
                House of Laser
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.4em] text-white/40">
                &amp; Spa · Brooklyn
              </p>

              <p className="mt-6 max-w-[330px] text-[12px] leading-6 text-white/40">
                Laser, skincare, beauty, and self-care in Brooklyn,
                New York.
              </p>
            </div>

            <div>
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#C9B6A3]">
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
              <p className="text-[7px] uppercase tracking-[0.3em] text-[#C9B6A3]">
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