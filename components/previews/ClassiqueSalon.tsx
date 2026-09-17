"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    title: "Cut & Style",
    description:
      "Precision cuts, blowouts, styling, and finishing tailored to you.",
  },
  {
    title: "Color",
    description:
      "Dimensional color, highlights, balayage, gloss, and corrective color.",
  },
  {
    title: "Texture",
    description:
      "Keratin treatments, smoothing services, perms, and professional care.",
  },
  {
    title: "Nails",
    description:
      "Classic manicures, pedicures, gel services, and nail enhancements.",
  },
  {
    title: "Skin & Beauty",
    description:
      "Facials, waxing, makeup, and beauty treatments in one destination.",
  },
  {
    title: "Bridal",
    description:
      "Hair and makeup services designed for weddings and special occasions.",
  },
];

const hours = [
  ["Tuesday", "10 AM – 7 PM"],
  ["Wednesday", "10 AM – 7 PM"],
  ["Thursday", "10 AM – 8 PM"],
  ["Friday", "10 AM – 9 PM"],
  ["Saturday", "9 AM – 6 PM"],
];

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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
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

export default function ClassiqueSalon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F5F0] text-[#241F1B]">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes classiqueHeroIn {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes classiqueImageIn {
          from {
            opacity: 0;
            transform: scale(1.08);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes classiqueFloat {
          0%,
          100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes classiqueGlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(1.06);
          }
        }

        .classique-hero-copy {
          animation: classiqueHeroIn 1s ease-out both;
        }

        .classique-hero-image {
          animation: classiqueImageIn 1.4s ease-out both;
        }

        .classique-float {
          animation: classiqueFloat 5s ease-in-out infinite;
        }

        .classique-glow {
          animation: classiqueGlow 7s ease-in-out infinite;
        }
      `}</style>

      {/* TOP BAR */}
      <div className="bg-[#28211D] px-6 py-2.5 text-center text-[9px] uppercase tracking-[0.3em] text-white/70">
        Staten Island, New York · Established for over 30 years
      </div>

      {/* NAVIGATION */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/[0.06] bg-[#F8F5F0]/90 shadow-[0_10px_40px_rgba(36,31,27,0.06)] backdrop-blur-xl"
            : "bg-[#F8F5F0]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1450px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-14 ${
            scrolled ? "py-4" : "py-5"
          }`}
        >
          <a href="#home">
            <p className="font-serif text-[27px] leading-none tracking-[-0.025em]">
              Classique
            </p>

            <p className="mt-1.5 text-[8px] uppercase tracking-[0.42em] text-[#947761]">
              Salon & Spa
            </p>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Experience", "#experience"],
              ["Visit", "#visit"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-[10px] uppercase tracking-[0.2em] text-[#5F554D] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#A98A72] after:transition-all after:duration-300 hover:text-[#241F1B] hover:after:w-full"
              >
                {label}
              </a>
            ))}

            <a
              href="tel:7186677600"
              className="group flex items-center gap-3 rounded-full bg-[#28211D] px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(40,33,29,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9A7963]"
            >
              Book Appointment

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/[0.06] bg-[#F8F5F0] px-6 py-7 lg:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Experience", "#experience"],
                ["Visit", "#visit"],
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
                href="tel:7186677600"
                className="mt-2 flex items-center justify-between rounded-full bg-[#28211D] px-6 py-4 text-[10px] uppercase tracking-[0.18em] text-white"
              >
                Book Appointment
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative px-4 pb-8 pt-4 md:px-6 md:pb-12 lg:px-8"
        >
          <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#D8C2AF]/20 blur-[120px] classique-glow" />

          <div className="mx-auto grid min-h-[720px] max-w-[1450px] overflow-hidden rounded-[32px] bg-[#EEE7DF] shadow-[0_25px_80px_rgba(54,44,36,0.09)] lg:grid-cols-[0.82fr_1.18fr] lg:rounded-[42px]">
            <div className="relative z-10 flex items-center px-7 py-20 sm:px-10 md:px-14 lg:px-16 xl:px-20">
              <div className="max-w-[580px] classique-hero-copy">
                <div className="mb-7 flex items-center gap-4">
                  <div className="h-px w-9 bg-[#A98A72]" />

                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#8B705C]">
                    Classique Salon & Spa
                  </p>
                </div>

                <h1 className="font-serif text-[56px] font-normal leading-[0.94] tracking-[-0.045em] sm:text-[68px] md:text-[82px] lg:text-[76px] xl:text-[92px]">
                  Beauty,
                  <br />
                  <span className="italic text-[#9C7B64]">
                    refined.
                  </span>
                </h1>

                <p className="mt-8 max-w-[470px] text-[15px] leading-7 text-[#675D55]">
                  More than three decades of artistry, experience, and
                  personalized beauty care in Staten Island.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:7186677600"
                    className="group flex items-center justify-center gap-3 rounded-full bg-[#28211D] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(40,33,29,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#9C7B64]"
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
                      30+ Years
                    </p>
                  </div>

                  <div className="rounded-full border border-black/[0.07] bg-white/55 px-5 py-3 backdrop-blur-sm">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#806F63]">
                      Full Service Salon & Spa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO PHOTO */}
            <div className="relative min-h-[500px] overflow-hidden lg:m-4 lg:ml-0 lg:min-h-[690px] lg:rounded-[34px]">
              <img
                src="/previews/classique/hero.jpg"
                alt="Classique Salon & Spa"
                className="classique-hero-image absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                <div className="classique-float inline-flex max-w-[330px] items-center gap-4 rounded-[24px] border border-white/20 bg-black/25 px-5 py-4 text-white shadow-xl backdrop-blur-xl">
                  <Sparkles
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-white/80"
                  />

                  <div>
                    <p className="font-serif text-xl">
                      Staten Island
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/65">
                      Style with experience behind it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
                <div>
                  <div className="flex items-center gap-3">
                    <Sparkles
                      size={14}
                      strokeWidth={1.3}
                      className="text-[#A98A72]"
                    />

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#8B705C]">
                      The Classique Experience
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="max-w-[850px] font-serif text-4xl leading-[1.08] tracking-[-0.035em] md:text-6xl">
                    An established salon built on{" "}
                    <span className="italic text-[#9C7B64]">
                      artistry & expertise.
                    </span>
                  </h2>

                  <div className="mt-9 grid gap-6 md:grid-cols-2">
                    <p className="text-sm leading-7 text-[#675D55]">
                      For over 30 years, Classique Salon & Spa has provided
                      professional beauty services to clients throughout the
                      New York Tri-State Area.
                    </p>

                    <p className="text-sm leading-7 text-[#675D55]">
                      From precision cutting and advanced color to nails,
                      skincare, and special occasions, every visit is centered
                      around personalized service.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTERIOR FEATURE */}
        <section className="px-4 pb-24 md:px-6 md:pb-32 lg:px-8">
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[32px] bg-[#28211D] text-white shadow-[0_25px_80px_rgba(36,31,27,0.12)] lg:grid-cols-[1.15fr_0.85fr] lg:rounded-[42px]">
              <div className="group relative min-h-[480px] overflow-hidden md:min-h-[620px]">
                <img
                  src="/previews/classique/interior.jpg"
                  alt="Inside Classique Salon & Spa"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/15" />
              </div>

              <div className="flex items-center px-8 py-16 md:px-12 lg:px-14 xl:px-20">
                <div className="max-w-[480px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#CBB19D]">
                    Welcome to Classique
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.035em] md:text-6xl">
                    Your beauty
                    <br />
                    <span className="italic text-[#CBB19D]">
                      destination.
                    </span>
                  </h2>

                  <p className="mt-7 text-sm leading-7 text-white/65">
                    A full-service salon and spa bringing hair, beauty,
                    skincare, nails, and special occasion services together in
                    one Staten Island destination.
                  </p>

                  <div className="mt-9 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                      <MapPin
                        size={16}
                        strokeWidth={1.3}
                      />
                    </div>

                    <div>
                      <p className="font-serif text-lg">
                        1961 Hylan Boulevard
                      </p>

                      <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/45">
                        Staten Island, New York
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative overflow-hidden px-6 py-24 md:px-10 md:py-32 lg:px-14"
        >
          <div className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[#DCC9BA]/20 blur-[120px]" />

          <div className="relative mx-auto max-w-[1280px]">
            <Reveal>
              <div className="mx-auto mb-16 max-w-[850px] text-center md:mb-20">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <div className="h-px w-9 bg-[#B49780]" />

                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#8B705C]">
                    Our Services
                  </p>

                  <div className="h-px w-9 bg-[#B49780]" />
                </div>

                <h2 className="font-serif text-5xl leading-[1.04] tracking-[-0.04em] md:text-7xl">
                  Everything you need to
                  <br className="hidden sm:block" />{" "}
                  <span className="italic text-[#9C7B64]">
                    look & feel your best.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-[560px] text-sm leading-7 text-[#70665F]">
                  From signature cuts and dimensional color to skincare,
                  nails, and special occasions, discover personalized beauty
                  services designed around you.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <Reveal
                  key={service.title}
                  delay={index * 70}
                  className="h-full"
                >
                  <div className="group relative h-full min-h-[285px] overflow-hidden rounded-[28px] border border-black/[0.055] bg-[#EEE7DF] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_22px_55px_rgba(54,44,36,0.09)] md:p-9">
                    <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#CDB7A5]/0 blur-2xl transition-all duration-500 group-hover:bg-[#CDB7A5]/25" />

                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#9C7B64] shadow-[0_8px_25px_rgba(54,44,36,0.06)] transition-all duration-500 group-hover:bg-[#28211D] group-hover:text-white">
                      {index === 0 ? (
                        <Scissors
                          size={17}
                          strokeWidth={1.3}
                        />
                      ) : (
                        <Sparkles
                          size={16}
                          strokeWidth={1.2}
                        />
                      )}
                    </div>

                    <h3 className="relative mt-8 font-serif text-[30px] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#9C7B64]">
                      {service.title}
                    </h3>

                    <p className="relative mt-4 max-w-[330px] text-sm leading-6 text-[#70665F]">
                      {service.description}
                    </p>

                    <div className="relative mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#8B705C]">
                      Learn More

                      <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1.5"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={150}>
              <div className="mt-12 flex justify-center">
                <a
                  href="tel:7186677600"
                  className="group inline-flex items-center gap-3 rounded-full border border-[#28211D]/10 bg-white/60 px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#28211D] shadow-[0_10px_35px_rgba(54,44,36,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#28211D] hover:text-white"
                >
                  Book Your Appointment

                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SALON FEATURE */}
        <section
          id="experience"
          className="px-4 py-20 md:px-6 md:py-28 lg:px-8"
        >
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="flex items-center rounded-[32px] bg-[#E9DED3] px-8 py-16 md:px-12 lg:rounded-[42px] lg:px-16">
                <div className="max-w-[500px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#8B705C]">
                    Hair · Color · Style
                  </p>

                  <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
                    Confidence
                    <br />
                    <span className="italic text-[#9C7B64]">
                      starts here.
                    </span>
                  </h2>

                  <p className="mt-7 text-sm leading-7 text-[#675D55]">
                    From a fresh cut and blowout to dimensional color and
                    corrective services, Classique brings decades of
                    professional experience to every appointment.
                  </p>

                  <a
                    href="tel:7186677600"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#28211D] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#9C7B64]"
                  >
                    Schedule a Consultation

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              <div className="group relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#D8CEC5] lg:min-h-[680px] lg:rounded-[42px]">
                <img
                  src="/previews/classique/salon.jpg"
                  alt="Professional salon services"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
                  <div className="inline-flex rounded-full border border-white/20 bg-black/25 px-5 py-3 backdrop-blur-lg">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white">
                      Personalized beauty care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* VISIT */}
        <section
          id="visit"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="rounded-[32px] border border-black/[0.06] bg-white/55 p-7 shadow-[0_20px_70px_rgba(54,44,36,0.06)] backdrop-blur-sm md:p-12 lg:rounded-[42px] lg:p-16">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#8B705C]">
                      Visit Classique
                    </p>

                    <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-6xl">
                      Your next look
                      <br />
                      <span className="italic text-[#9C7B64]">
                        starts here.
                      </span>
                    </h2>

                    <div className="mt-10 space-y-5">
                      <div className="flex items-center gap-4 rounded-[20px] bg-[#F3EEE8] p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                          <MapPin
                            size={16}
                            strokeWidth={1.3}
                            className="text-[#9C7B64]"
                          />
                        </div>

                        <div>
                          <p className="font-serif text-lg">
                            1961 Hylan Boulevard
                          </p>

                          <p className="mt-1 text-xs text-[#70665F]">
                            Staten Island, NY 10305
                          </p>
                        </div>
                      </div>

                      <a
                        href="tel:7186677600"
                        className="flex items-center gap-4 rounded-[20px] bg-[#F3EEE8] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EDE4DC]"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                          <Phone
                            size={16}
                            strokeWidth={1.3}
                            className="text-[#9C7B64]"
                          />
                        </div>

                        <div>
                          <p className="text-[8px] uppercase tracking-[0.18em] text-[#8B705C]">
                            Appointments
                          </p>

                          <p className="mt-1 font-serif text-lg">
                            (718) 667-7600
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <Clock3
                        size={15}
                        strokeWidth={1.3}
                        className="text-[#9C7B64]"
                      />

                      <p className="text-[9px] uppercase tracking-[0.25em] text-[#8B705C]">
                        Salon Hours
                      </p>
                    </div>

                    <div className="overflow-hidden rounded-[24px] bg-[#F3EEE8]">
                      {hours.map(([day, time], index) => (
                        <div
                          key={day}
                          className={`flex items-center justify-between px-6 py-4 text-sm ${
                            index !== hours.length - 1
                              ? "border-b border-black/[0.06]"
                              : ""
                          }`}
                        >
                          <span className="text-[#675D55]">
                            {day}
                          </span>

                          <span className="font-medium">
                            {time}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="tel:7186677600"
                      className="group mt-6 flex w-full items-center justify-between rounded-full bg-[#28211D] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#9C7B64]"
                    >
                      Book an Appointment

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-4 pb-8 md:px-6 lg:px-8">
          <Reveal>
            <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[32px] bg-[#A68770] px-6 py-24 text-center text-white shadow-[0_25px_80px_rgba(54,44,36,0.12)] md:px-10 md:py-28 lg:rounded-[42px]">
              <div className="pointer-events-none absolute -left-20 -top-32 h-[350px] w-[350px] rounded-full bg-white/10 blur-[90px]" />

              <div className="pointer-events-none absolute -bottom-40 -right-20 h-[350px] w-[350px] rounded-full bg-[#3A2D25]/15 blur-[100px]" />

              <div className="relative z-10 mx-auto max-w-[800px]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Sparkles
                    size={18}
                    strokeWidth={1.2}
                  />
                </div>

                <p className="mt-7 text-[9px] uppercase tracking-[0.32em] text-white/65">
                  Classique Salon & Spa
                </p>

                <h2 className="mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.04em] md:text-7xl">
                  Make time for
                  <br />
                  <span className="italic">
                    yourself.
                  </span>
                </h2>

                <p className="mx-auto mt-7 max-w-[500px] text-sm leading-7 text-white/75">
                  Hair, beauty, skincare, nails, and more—experience Classique
                  in Staten Island.
                </p>

                <a
                  href="tel:7186677600"
                  className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#28211D] shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  Call (718) 667-7600

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 py-14 md:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-9 border-t border-black/[0.08] pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-[-0.025em]">
              Classique
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.38em] text-[#8B705C]">
              Salon & Spa
            </p>

            <p className="mt-5 max-w-[340px] text-xs leading-6 text-[#776B62]">
              Professional hair, beauty, nail, and skincare services in Staten
              Island, New York.
            </p>
          </div>

          <div className="md:text-right">
            <p className="text-xs text-[#776B62]">
              1961 Hylan Blvd · Staten Island, NY
            </p>

            <a
              href="tel:7186677600"
              className="mt-2 block text-xs text-[#776B62] transition-colors hover:text-[#241F1B]"
            >
              (718) 667-7600
            </a>

            <p className="mt-6 text-[8px] uppercase tracking-[0.22em] text-[#A19388]">
              Classique Salon & Spa
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}