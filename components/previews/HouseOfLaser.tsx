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
    title: "Laser Hair Removal",
    description:
      "Professional laser hair removal in a comfortable, elevated setting.",
    href: "#laser",
  },
  {
    title: "Facials & Skincare",
    description:
      "Thoughtful facial and skincare treatments made for time spent on you.",
    href: "#facials",
  },
  {
    title: "Beauty & Self-Care",
    description:
      "Beauty and self-care brought together in one warm Brooklyn destination.",
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
        threshold: 0.1,
        rootMargin: "0px 0px -45px 0px",
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
      className={`${className} transition-all duration-[900ms] ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
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
      setScrolled(window.scrollY > 20);
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
    <div className="min-h-screen overflow-x-hidden bg-[#FAF7F2] text-[#28211D]">
      {/* =====================================================
          GLOBAL ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes hlsHeroCopy {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hlsHeroImage {
          from {
            opacity: 0;
            transform: scale(1.07);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes hlsFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes hlsGlow {
          0%,
          100% {
            opacity: 0.22;
            transform: scale(1);
          }

          50% {
            opacity: 0.4;
            transform: scale(1.08);
          }
        }

        .hls-hero-copy {
          animation: hlsHeroCopy 1s ease-out both;
        }

        .hls-hero-image {
          animation: hlsHeroImage 1.35s ease-out both;
        }

        .hls-float {
          animation: hlsFloat 5s ease-in-out infinite;
        }

        .hls-glow {
          animation: hlsGlow 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hls-hero-copy,
          .hls-hero-image,
          .hls-float,
          .hls-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <div className="bg-[#A64C1B] px-6 py-2.5 text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/80">
          House of Laser & Spa · Brooklyn, New York
        </p>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/[0.06] bg-[#FAF7F2]/90 shadow-[0_10px_40px_rgba(40,33,29,0.06)] backdrop-blur-xl"
            : "bg-[#FAF7F2]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1450px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-14 ${
            scrolled ? "py-3" : "py-4"
          }`}
        >
          <a
            href="#home"
            aria-label="House of Laser & Spa home"
            className="flex items-center"
          >
            <div
              className={`relative transition-all duration-500 ${
                scrolled
                  ? "h-[54px] w-[160px]"
                  : "h-[64px] w-[185px]"
              }`}
            >
              <img
                src="/previews/house-of-laser/logo.jpg"
                alt="House of Laser & Spa"
                className="h-full w-full object-contain object-left"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {[
              ["Services", "#services"],
              ["Laser", "#laser"],
              ["Facials", "#facials"],
              ["The Spa", "#experience"],
              ["Visit", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-[10px] uppercase tracking-[0.2em] text-[#655951] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#A64C1B] after:transition-all after:duration-300 hover:text-[#28211D] hover:after:w-full"
              >
                {label}
              </a>
            ))}

            <a
              href="#book"
              className="group flex items-center gap-3 rounded-full bg-[#28211D] px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(40,33,29,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A64C1B]"
            >
              Book a Visit

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/[0.06] bg-[#FAF7F2] px-6 py-7 lg:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["Services", "#services"],
                ["Laser Hair Removal", "#laser"],
                ["Facials & Skincare", "#facials"],
                ["The Spa", "#experience"],
                ["Visit", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl"
                >
                  {label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-between rounded-full bg-[#A64C1B] px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-white"
              >
                Book a Visit

                <ArrowRight size={14} />
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
          className="relative px-4 pb-8 pt-4 md:px-6 md:pb-12 lg:px-8"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#A64C1B]/10 blur-[120px] hls-glow" />

          <div className="mx-auto grid min-h-[720px] max-w-[1450px] overflow-hidden rounded-[32px] bg-[#EFE6DC] shadow-[0_25px_80px_rgba(54,44,36,0.09)] lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[42px]">
            <div className="relative z-10 flex items-center px-7 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[590px] hls-hero-copy">
                <div className="mb-7 flex items-center gap-4">
                  <div className="h-px w-9 bg-[#B6956C]" />

                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#8B705C]">
                    Laser · Skin · Beauty
                  </p>
                </div>

                <h1 className="font-serif text-[56px] font-normal leading-[0.94] tracking-[-0.045em] sm:text-[68px] md:text-[82px] lg:text-[76px] xl:text-[92px]">
                  Your beauty.
                  <br />

                  <span className="italic text-[#A64C1B]">
                    Your ritual.
                  </span>
                </h1>

                <p className="mt-8 max-w-[470px] text-[15px] leading-7 text-[#71635B]">
                  Laser hair removal, skincare, and beauty treatments in a
                  warm, distinctive Brooklyn setting.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#book"
                    className="group flex items-center justify-center gap-3 rounded-full bg-[#A64C1B] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(166,76,27,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#843B14]"
                  >
                    Book an Appointment

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#services"
                    className="flex items-center justify-center rounded-full border border-[#28211D]/15 bg-white/40 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    Explore Services
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap gap-3">
                  <div className="rounded-full border border-black/[0.07] bg-white/55 px-5 py-3 backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#806F63]">
                      Brooklyn, NY
                    </p>
                  </div>

                  <div className="rounded-full border border-black/[0.07] bg-white/55 px-5 py-3 backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#806F63]">
                      Laser · Skin · Self-Care
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[500px] overflow-hidden lg:m-4 lg:ml-0 lg:min-h-[690px] lg:rounded-[34px]">
              <img
                src="/previews/house-of-laser/waiting-area.jpg"
                alt="House of Laser & Spa interior"
                className="hls-hero-image absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <div className="hls-float inline-flex max-w-[340px] items-center gap-4 rounded-[24px] border border-white/20 bg-black/25 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                  <Sparkles
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-[#E4C39F]"
                  />

                  <div>
                    <p className="font-serif text-xl italic">
                      House of Laser & Spa
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/65">
                      Beauty with character
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
                <div>
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={14}
                      strokeWidth={1.3}
                      className="text-[#A64C1B]"
                    />

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#A64C1B]">
                      The House Experience
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="max-w-[850px] font-serif text-4xl leading-[1.08] tracking-[-0.035em] md:text-6xl">
                    Beauty and self-care in a space that feels{" "}

                    <span className="italic text-[#A64C1B]">
                      unmistakably yours.
                    </span>
                  </h2>

                  <div className="mt-9 grid gap-6 md:grid-cols-2">
                    <p className="text-sm leading-7 text-[#675D55]">
                      House of Laser & Spa brings together laser hair removal,
                      skincare, beauty, and self-care in one distinctive
                      Brooklyn destination.
                    </p>

                    <p className="text-sm leading-7 text-[#675D55]">
                      Warm textures, rich green details, vintage touches, and
                      thoughtful treatments create an experience that feels
                      personal from the moment you walk in.
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
          className="px-4 pb-24 md:px-6 md:pb-32 lg:px-8"
        >
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[32px] bg-[#2D473C] text-white shadow-[0_25px_80px_rgba(36,31,27,0.13)] lg:grid-cols-[1.15fr_0.85fr] lg:rounded-[42px]">
              <div className="group relative min-h-[500px] overflow-hidden md:min-h-[650px]">
                <img
                  src="/previews/house-of-laser/treatment-room.jpg"
                  alt="Treatment room at House of Laser & Spa"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1F352C]/25" />
              </div>

              <div className="relative flex items-center px-8 py-16 md:px-12 lg:px-14 xl:px-20">
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-[280px] w-[280px] rounded-full border border-[#D7BB95]/10" />

                <div className="relative z-10 max-w-[480px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#D7BB95]">
                    Welcome In
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.035em] md:text-6xl">
                    Come in.
                    <br />
                    Slow down.
                    <br />

                    <span className="italic text-[#D7BB95]">
                      Feel beautiful.
                    </span>
                  </h2>

                  <p className="mt-7 text-sm leading-7 text-white/65">
                    A calm treatment space designed to make your appointment
                    feel like time set aside just for you.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-3">
                    {["Warm", "Personal", "Elevated"].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/15 bg-white/[0.07] px-5 py-3"
                      >
                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#services"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#2D473C] transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Treatments

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section
          id="services"
          className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[#A64C1B]/10 blur-[120px]" />

          <div className="relative mx-auto max-w-[1280px]">
            <Reveal>
              <div className="mx-auto mb-16 max-w-[850px] text-center md:mb-20">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="h-px w-9 bg-[#B6956C]" />

                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#A64C1B]">
                    Our Treatments
                  </p>

                  <div className="h-px w-9 bg-[#B6956C]" />
                </div>

                <h2 className="font-serif text-5xl leading-[1.04] tracking-[-0.04em] md:text-7xl">
                  Everything{" "}

                  <span className="italic text-[#A64C1B]">
                    beauty.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-[570px] text-sm leading-7 text-[#70665F]">
                  Laser, skincare, and beauty treatments brought together in
                  one warm and personal space.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 90}
                  className="h-full"
                >
                  <a
                    href={service.href}
                    className="group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[30px] border border-black/[0.055] bg-[#EFE6DC] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_55px_rgba(54,44,36,0.09)] md:p-9"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#A64C1B] shadow-[0_8px_25px_rgba(54,44,36,0.06)] transition-all duration-500 group-hover:bg-[#A64C1B] group-hover:text-white">
                      <Sparkles
                        size={16}
                        strokeWidth={1.2}
                      />
                    </div>

                    <h3 className="mt-9 font-serif text-[31px] leading-tight tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#A64C1B]">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-[330px] text-sm leading-6 text-[#70665F]">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center gap-2 pt-9 text-[9px] uppercase tracking-[0.2em] text-[#A64C1B]">
                      Explore Treatment

                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
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
          className="px-4 py-20 md:px-6 md:py-28 lg:px-8"
        >
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="flex items-center rounded-[32px] bg-[#E9D8C9] px-8 py-16 md:px-12 lg:rounded-[42px] lg:px-16">
                <div className="max-w-[500px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#A64C1B]">
                    Laser Hair Removal
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
                    Smooth,
                    <br />

                    <span className="italic text-[#A64C1B]">
                      simplified.
                    </span>
                  </h2>

                  <p className="mt-7 text-sm leading-7 text-[#675D55]">
                    Professional laser hair removal in a comfortable setting,
                    designed to fit naturally into your beauty routine.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Personalized",
                      "Comfortable",
                      "Brooklyn",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#A64C1B]/10 bg-white/45 px-4 py-2.5 text-[8px] uppercase tracking-[0.18em] text-[#80533C]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#28211D] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A64C1B]"
                  >
                    Book Laser

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              <div className="group relative min-h-[540px] overflow-hidden rounded-[32px] bg-[#D8CEC5] lg:min-h-[680px] lg:rounded-[42px]">
                <img
                  src="/previews/house-of-laser/laser-client.jpg"
                  alt="Client receiving a laser treatment"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <div className="rounded-full border border-white/20 bg-black/25 px-5 py-3 backdrop-blur-lg">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white">
                      Your routine, simplified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            FACIALS
        ===================================================== */}

        <section
          id="facials"
          className="px-4 py-20 md:px-6 md:py-28 lg:px-8"
        >
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="group relative min-h-[540px] overflow-hidden rounded-[32px] bg-[#E4DDD5] lg:min-h-[680px] lg:rounded-[42px]">
                <img
                  src="/previews/house-of-laser/facial-machine.jpg"
                  alt="Facial treatment at House of Laser & Spa"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                  <div className="rounded-full border border-white/20 bg-black/25 px-5 py-3 backdrop-blur-lg">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white">
                      Skin · Care · Ritual
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center overflow-hidden rounded-[32px] bg-[#2D473C] px-8 py-16 text-white md:px-12 lg:rounded-[42px] lg:px-16">
                <div className="pointer-events-none absolute -right-24 -top-24 h-[280px] w-[280px] rounded-full border border-white/10" />

                <div className="relative z-10 max-w-[500px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#D7BB95]">
                    Facials & Skincare
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
                    Give your skin
                    <br />

                    <span className="italic text-[#D7BB95]">
                      a little attention.
                    </span>
                  </h2>

                  <p className="mt-7 text-sm leading-7 text-white/65">
                    Thoughtful skincare and facial treatments in a calm,
                    intimate space designed for slowing down and taking care of
                    yourself.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Skincare",
                      "Facials",
                      "Self-Care",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-[8px] uppercase tracking-[0.18em] text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#2D473C] transition-all duration-300 hover:-translate-y-1"
                  >
                    Book a Facial

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            THE HOUSE — NO SECOND WAITING ROOM PHOTO
        ===================================================== */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] bg-[#EFE6DC] px-8 py-20 md:px-14 md:py-24 lg:rounded-[42px] lg:px-20">
                <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#A64C1B]/10 blur-[110px]" />

                <div className="pointer-events-none absolute -bottom-40 -left-24 h-[380px] w-[380px] rounded-full bg-[#2D473C]/10 blur-[110px]" />

                <div className="relative z-10 mx-auto max-w-[900px] text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-[#A64C1B] shadow-[0_10px_30px_rgba(54,44,36,0.06)]">
                    <Sparkles
                      size={17}
                      strokeWidth={1.2}
                    />
                  </div>

                  <p className="mt-7 text-[9px] uppercase tracking-[0.32em] text-[#A64C1B]">
                    The House
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-7xl">
                    Beauty feels
                    <br />

                    <span className="italic text-[#A64C1B]">
                      better here.
                    </span>
                  </h2>

                  <p className="mx-auto mt-7 max-w-[560px] text-sm leading-7 text-[#675D55]">
                    A distinctive Brooklyn space where treatments, self-care,
                    and a little time away from everything else come together.
                  </p>

                  <div className="mt-9 flex flex-wrap justify-center gap-3">
                    {[
                      "Laser",
                      "Skincare",
                      "Beauty",
                      "Self-Care",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-[#A64C1B]/10 bg-white/50 px-5 py-3"
                      >
                        <p className="text-[8px] uppercase tracking-[0.2em] text-[#80533C]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#book"
                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#28211D] px-8 py-4 text-[9px] uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(40,33,29,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A64C1B]"
                  >
                    Plan Your Visit

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            VISIT
        ===================================================== */}

        <section className="px-4 pb-8 md:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-[1400px] rounded-[32px] bg-[#F0E9E0] px-7 py-14 md:px-12 md:py-16 lg:rounded-[42px] lg:px-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#A64C1B]">
                    Visit The House
                  </p>

                  <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.035em] md:text-5xl">
                    Your next beauty ritual
                    <br />

                    <span className="italic text-[#A64C1B]">
                      starts in Brooklyn.
                    </span>
                  </h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] bg-white/60 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A64C1B]/10 text-[#A64C1B]">
                      <MapPin
                        size={16}
                        strokeWidth={1.3}
                      />
                    </div>

                    <p className="mt-5 text-[8px] uppercase tracking-[0.22em] text-[#A64C1B]">
                      Visit
                    </p>

                    <p className="mt-3 text-sm leading-6 text-[#675D55]">
                      1690 E 14th St
                      <br />
                      Unit 2
                      <br />
                      Brooklyn, NY 11229
                    </p>
                  </div>

                  <div className="rounded-[24px] bg-white/60 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A64C1B]/10 text-[#A64C1B]">
                      <Phone
                        size={16}
                        strokeWidth={1.3}
                      />
                    </div>

                    <p className="mt-5 text-[8px] uppercase tracking-[0.22em] text-[#A64C1B]">
                      Contact
                    </p>

                    <a
                      href="tel:+19298339197"
                      className="mt-3 block text-sm text-[#675D55] transition-colors duration-300 hover:text-[#A64C1B]"
                    >
                      (929) 833-9197
                    </a>

                    <a
                      href="https://www.instagram.com/houseoflaserspa/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-sm text-[#675D55] transition-colors duration-300 hover:text-[#A64C1B]"
                    >
                      @houseoflaserspa
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* =====================================================
            FINAL CTA — SLEEK FOREST GREEN
        ===================================================== */}

        <section
          id="book"
          className="px-4 pb-8 pt-12 md:px-6 lg:px-8"
        >
          <Reveal>
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#35483F] px-6 py-20 text-white shadow-[0_24px_70px_rgba(40,50,44,0.12)] md:px-10 md:py-24 lg:rounded-[42px]">
              <div className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-white/[0.06]" />

              <div className="pointer-events-none absolute -bottom-52 -left-24 h-[420px] w-[420px] rounded-full bg-[#D5B996]/[0.06] blur-[100px]" />

              <div className="relative z-10 mx-auto max-w-[850px] text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#E7D8C5]/20 bg-white/[0.06]">
                  <Sparkles
                    size={16}
                    strokeWidth={1.15}
                    className="text-[#E2C9A8]"
                  />
                </div>

                <p className="mt-7 text-[8px] uppercase tracking-[0.34em] text-[#DCC6AA]">
                  Your Next Appointment
                </p>

                <h2 className="mt-6 font-serif text-[46px] font-normal leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl">
                  Make a little time
                  <br />

                  <span className="italic text-[#E4C9A8]">
                    for yourself.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-[510px] text-[13px] leading-7 text-white/60">
                  Laser, skincare, beauty, and self-care — thoughtfully brought
                  together in one distinctive Brooklyn space.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="group inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full bg-[#F5EFE7] px-8 py-4 text-[9px] uppercase tracking-[0.2em] text-[#35483F] shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                  >
                    Book an Appointment

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white/75 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.09] hover:text-white"
                  >
                    View Treatments
                  </a>
                </div>

                <div className="mx-auto mt-12 flex max-w-[430px] items-center gap-5">
                  <div className="h-px flex-1 bg-white/10" />

                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/35">
                    House of Laser & Spa
                  </span>

                  <div className="h-px flex-1 bg-white/10" />
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        id="contact"
        className="px-6 py-14 md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1280px] border-t border-black/[0.08] pt-10">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {/* FULL LOGO — NO CROPPING */}

            <div>
              <div className="relative h-[90px] w-[220px]">
                <img
                  src="/previews/house-of-laser/logo.jpg"
                  alt="House of Laser & Spa"
                  className="h-full w-full object-contain object-left"
                />
              </div>

              <p className="mt-5 max-w-[340px] text-xs leading-6 text-[#776B62]">
                Laser, skincare, beauty, and self-care in Brooklyn, New York.
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#A64C1B]">
                Visit
              </p>

              <div className="mt-5 flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#A64C1B]/10">
                  <MapPin
                    size={14}
                    strokeWidth={1.3}
                    className="text-[#A64C1B]"
                  />
                </div>

                <p className="text-xs leading-6 text-[#776B62]">
                  1690 E 14th St
                  <br />
                  Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#A64C1B]">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-xs text-[#776B62] transition-colors duration-300 hover:text-[#A64C1B]"
                >
                  @houseoflaserspa
                </a>

                <a
                  href="tel:+19298339197"
                  className="inline-flex w-fit items-center gap-3 text-xs text-[#776B62] transition-colors duration-300 hover:text-[#A64C1B]"
                >
                  <Phone
                    size={14}
                    strokeWidth={1.3}
                  />

                  (929) 833-9197
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-black/[0.07] pt-7 text-[8px] uppercase tracking-[0.22em] text-[#A19388] sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser & Spa</p>

            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </div>
  );
}