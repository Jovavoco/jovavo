"use client";

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  ArrowRight,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const treatments = [
  {
    number: "01",
    title: "Laser Hair Removal",
    description:
      "Professional laser hair removal personalized around your skin, your goals, and your routine.",
    href: "#laser",
    image: "/previews/house-of-laser/laser-client.jpg",
  },
  {
    number: "02",
    title: "Facials & Skincare",
    description:
      "Thoughtful facial and skincare treatments designed to give your skin the attention it deserves.",
    href: "#facials",
    image: "/previews/house-of-laser/facial-machine.jpg",
  },
  {
    number: "03",
    title: "The Spa Experience",
    description:
      "A warm Brooklyn space created for beauty, self-care, and a little time set aside for yourself.",
    href: "#experience",
    image: "/previews/house-of-laser/treatment-room.jpg",
  },
];

const treatmentDetails = [
  "Personalized care",
  "Thoughtful treatments",
  "Comfortable setting",
  "Brooklyn, New York",
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
      className={`${className} transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
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
    <div className="min-h-screen overflow-x-hidden bg-[#F7F4EF] text-[#292521]">
      {/* =====================================================
          GLOBAL
      ===================================================== */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes spaHeroCopy {
          from {
            opacity: 0;
            transform: translateY(22px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spaHeroImage {
          from {
            opacity: 0;
            transform: scale(1.035);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .spa-hero-copy {
          animation: spaHeroCopy 1.1s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .spa-hero-image {
          animation: spaHeroImage 1.5s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .spa-hero-copy,
          .spa-hero-image {
            animation: none !important;
          }
        }
      `}</style>

      {/* =====================================================
          TOP NOTE
      ===================================================== */}

      <div className="border-b border-[#292521]/[0.07] bg-[#283229] px-5 py-2.5 text-center">
        <p className="text-[9px] uppercase tracking-[0.3em] text-[#F7F4EF]/70">
          House of Laser &amp; Spa · Brooklyn, New York
        </p>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#292521]/[0.07] bg-[#F7F4EF]/95 shadow-[0_10px_35px_rgba(41,37,33,0.04)] backdrop-blur-xl"
            : "bg-[#F7F4EF]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1380px] items-center justify-between px-6 transition-all duration-500 md:px-10 lg:px-12 ${
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
                  ? "h-[52px] w-[155px]"
                  : "h-[60px] w-[180px]"
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
              ["Treatments", "#services"],
              ["Laser", "#laser"],
              ["Skincare", "#facials"],
              ["Our Space", "#experience"],
              ["Visit", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative text-[9px] uppercase tracking-[0.2em] text-[#655F58] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#5F6758] after:transition-all after:duration-300 hover:text-[#283229] hover:after:w-full"
              >
                {label}
              </a>
            ))}

            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-[#283229] px-6 py-3.5 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3E493E]"
            >
              Book Appointment

              <ArrowRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center border border-[#292521]/10 lg:hidden"
          >
            {menuOpen ? (
              <X size={19} strokeWidth={1.4} />
            ) : (
              <Menu size={19} strokeWidth={1.4} />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#292521]/[0.07] bg-[#F7F4EF] px-6 py-8 lg:hidden">
            <div className="flex flex-col">
              {[
                ["Treatments", "#services"],
                ["Laser Hair Removal", "#laser"],
                ["Facials & Skincare", "#facials"],
                ["Our Space", "#experience"],
                ["Visit", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292521]/[0.07] py-4 font-serif text-2xl font-light"
                >
                  {label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-between bg-[#283229] px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-white"
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
          className="px-5 pb-16 pt-7 md:px-8 md:pb-24 lg:px-12"
        >
          <div className="mx-auto grid max-w-[1380px] items-stretch lg:grid-cols-[0.78fr_1.22fr]">
            {/* COPY */}
            <div className="flex items-center bg-[#EEE8DF] px-7 py-20 sm:px-10 md:px-14 lg:min-h-[730px] lg:px-16 xl:px-20">
              <div className="max-w-[540px] spa-hero-copy">
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px w-10 bg-[#8D947F]" />

                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#687060]">
                    Laser · Skin · Self-Care
                  </p>
                </div>

                <h1 className="font-serif text-[56px] font-light leading-[0.95] tracking-[-0.045em] sm:text-[70px] md:text-[82px] lg:text-[76px] xl:text-[90px]">
                  Beauty,
                  <br />
                  <span className="italic text-[#5F6758]">
                    elevated.
                  </span>
                </h1>

                <p className="mt-8 max-w-[440px] text-[15px] leading-7 text-[#6F6861]">
                  Laser hair removal, skincare, and beauty treatments
                  thoughtfully tailored to you in our Brooklyn spa.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#book"
                    className="group inline-flex items-center justify-center gap-3 bg-[#283229] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3E493E]"
                  >
                    Book an Appointment

                    <ArrowRight
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center border border-[#292521]/15 px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#4F4944] transition-all duration-300 hover:bg-[#F7F4EF]"
                  >
                    Explore Treatments
                  </a>
                </div>

                <div className="mt-14 flex items-center gap-4 border-t border-[#292521]/10 pt-6">
                  <MapPin
                    size={14}
                    strokeWidth={1.4}
                    className="text-[#5F6758]"
                  />

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#716A63]">
                    Brooklyn, New York
                  </p>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="group relative min-h-[520px] overflow-hidden lg:min-h-[730px]">
              <img
                src="/previews/house-of-laser/waiting-area.jpg"
                alt="House of Laser & Spa interior"
                className="spa-hero-image absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1E261F]/25 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 sm:left-auto sm:right-8 sm:w-[285px]">
                <div className="border border-white/30 bg-[#F7F4EF]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-md">
                  <p className="text-[8px] uppercase tracking-[0.28em] text-[#697061]">
                    House of Laser &amp; Spa
                  </p>

                  <p className="mt-3 font-serif text-[24px] font-light leading-tight text-[#292521]">
                    A little time
                    <br />
                    <span className="italic text-[#5F6758]">
                      just for you.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="px-6 py-20 md:px-10 md:py-28 lg:px-12">
          <div className="mx-auto max-w-[1220px]">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:gap-20">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E7667]">
                    The Experience
                  </p>
                </div>

                <div>
                  <h2 className="max-w-[900px] font-serif text-[42px] font-light leading-[1.06] tracking-[-0.035em] sm:text-5xl md:text-[64px]">
                    Treatments designed
                    <br className="hidden sm:block" /> around{" "}
                    <span className="italic text-[#687060]">
                      you.
                    </span>
                  </h2>

                  <div className="mt-10 grid gap-7 border-t border-[#292521]/10 pt-8 md:grid-cols-2 md:gap-12">
                    <p className="text-[14px] leading-7 text-[#706A63]">
                      House of Laser &amp; Spa brings laser hair
                      removal, skincare, beauty, and self-care
                      together in one intimate Brooklyn destination.
                    </p>

                    <p className="text-[14px] leading-7 text-[#706A63]">
                      Every visit is centered around thoughtful care,
                      a comfortable experience, and treatments chosen
                      with your individual needs in mind.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            SPA EXPERIENCE
        ===================================================== */}

        <section
          id="experience"
          className="px-5 py-16 md:px-8 md:py-24 lg:px-12"
        >
          <Reveal>
            <div className="mx-auto grid max-w-[1380px] bg-[#283229] text-white lg:grid-cols-[1.1fr_0.9fr]">
              <div className="group relative min-h-[500px] overflow-hidden md:min-h-[650px]">
                <img
                  src="/previews/house-of-laser/treatment-room.jpg"
                  alt="Treatment room at House of Laser & Spa"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="flex items-center px-8 py-16 sm:px-10 md:px-14 lg:px-16 xl:px-20">
                <div className="max-w-[470px]">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#CFC1B1]">
                    Inside The Spa
                  </p>

                  <h2 className="mt-7 font-serif text-[48px] font-light leading-[1] tracking-[-0.035em] md:text-[62px]">
                    Come in.
                    <br />
                    Slow down.
                    <br />

                    <span className="italic text-[#CFC1B1]">
                      Take care.
                    </span>
                  </h2>

                  <p className="mt-8 text-[14px] leading-7 text-white/60">
                    Our treatment space was created to feel calm,
                    personal, and welcoming — somewhere your
                    appointment can feel like time genuinely set
                    aside for you.
                  </p>

                  <a
                    href="#services"
                    className="group mt-10 inline-flex items-center gap-4 border-b border-white/30 pb-2 text-[9px] uppercase tracking-[0.22em] text-white"
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
          className="px-6 py-24 md:px-10 md:py-32 lg:px-12"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="mb-16 grid gap-8 border-b border-[#292521]/10 pb-12 md:grid-cols-[1fr_0.65fr] md:items-end">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#6E7667]">
                    Our Treatments
                  </p>

                  <h2 className="mt-5 font-serif text-[46px] font-light leading-[1] tracking-[-0.04em] sm:text-6xl md:text-[72px]">
                    Care that feels
                    <br />
                    <span className="italic text-[#687060]">
                      personal.
                    </span>
                  </h2>
                </div>

                <p className="max-w-[420px] text-[14px] leading-7 text-[#716B65] md:justify-self-end">
                  Explore laser, skincare, and beauty treatments
                  thoughtfully brought together under one roof.
                </p>
              </div>
            </Reveal>

            <div className="space-y-14 md:space-y-20">
              {treatments.map((treatment, index) => (
                <Reveal
                  key={treatment.title}
                  delay={index * 70}
                >
                  <a
                    href={treatment.href}
                    className="group grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12"
                  >
                    <div
                      className={`relative min-h-[390px] overflow-hidden md:min-h-[500px] ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={treatment.image}
                        alt={treatment.title}
                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
                      />
                    </div>

                    <div
                      className={`py-4 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <p className="text-[9px] tracking-[0.25em] text-[#929789]">
                        {treatment.number}
                      </p>

                      <h3 className="mt-6 max-w-[480px] font-serif text-[40px] font-light leading-[1.03] tracking-[-0.03em] sm:text-5xl">
                        {treatment.title}
                      </h3>

                      <p className="mt-6 max-w-[450px] text-[14px] leading-7 text-[#716B65]">
                        {treatment.description}
                      </p>

                      <div className="mt-8 inline-flex items-center gap-3 border-b border-[#292521]/20 pb-2 text-[9px] uppercase tracking-[0.2em] text-[#4E564A]">
                        Learn More

                        <ArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
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
          className="bg-[#E9E1D7] px-6 py-24 md:px-10 md:py-32 lg:px-12"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#687060]">
                    Laser Hair Removal
                  </p>

                  <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] md:text-[68px]">
                    Smooth.
                    <br />
                    Simple.
                    <br />

                    <span className="italic text-[#687060]">
                      Personalized.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-[#6E6760]">
                    Professional laser hair removal in a comfortable
                    setting, with care tailored around you and your
                    routine.
                  </p>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 bg-[#283229] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3E493E]"
                  >
                    Book Laser

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>

                <div className="group relative min-h-[520px] overflow-hidden md:min-h-[650px]">
                  <img
                    src="/previews/house-of-laser/laser-client.jpg"
                    alt="Client receiving a laser treatment"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.025]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            FACIALS
        ===================================================== */}

        <section
          id="facials"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-12"
        >
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
                <div className="group relative min-h-[520px] overflow-hidden md:min-h-[650px]">
                  <img
                    src="/previews/house-of-laser/facial-machine.jpg"
                    alt="Facial treatment at House of Laser & Spa"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1500ms] ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#687060]">
                    Facials &amp; Skincare
                  </p>

                  <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] md:text-[68px]">
                    Give your skin
                    <br />

                    <span className="italic text-[#687060]">
                      a little attention.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-[430px] text-[14px] leading-7 text-[#6E6760]">
                    Thoughtful skincare and facial treatments in a
                    calm, intimate setting designed for slowing down
                    and taking care of yourself.
                  </p>

                  <a
                    href="#book"
                    className="group mt-9 inline-flex items-center gap-3 bg-[#283229] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#3E493E]"
                  >
                    Book a Facial

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
            DETAILS STRIP
        ===================================================== */}

        <section className="border-y border-[#292521]/[0.08]">
          <div className="mx-auto grid max-w-[1380px] grid-cols-2 md:grid-cols-4">
            {treatmentDetails.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-[130px] items-center justify-center px-5 text-center ${
                  index !== treatmentDetails.length - 1
                    ? "border-r border-[#292521]/[0.08]"
                    : ""
                }`}
              >
                <p className="font-serif text-[18px] font-light italic text-[#5D6258] sm:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            VISIT
        ===================================================== */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-12">
          <div className="mx-auto max-w-[1280px]">
            <Reveal>
              <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#687060]">
                    Visit The Spa
                  </p>

                  <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] md:text-[68px]">
                    Your next ritual
                    <br />
                    <span className="italic text-[#687060]">
                      starts here.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-[450px] text-[14px] leading-7 text-[#706A63]">
                    Visit House of Laser &amp; Spa in Brooklyn for
                    laser, skincare, beauty, and self-care in a
                    setting designed to feel warm and personal.
                  </p>
                </div>

                <div className="grid gap-8 border-t border-[#292521]/10 pt-8 sm:grid-cols-2 lg:border-t-0 lg:pt-0">
                  <div>
                    <MapPin
                      size={19}
                      strokeWidth={1.3}
                      className="text-[#687060]"
                    />

                    <p className="mt-6 text-[8px] uppercase tracking-[0.25em] text-[#777068]">
                      Address
                    </p>

                    <p className="mt-4 font-serif text-[22px] font-light leading-8">
                      1690 E 14th St
                      <br />
                      Unit 2
                      <br />
                      Brooklyn, NY 11229
                    </p>
                  </div>

                  <div>
                    <Phone
                      size={19}
                      strokeWidth={1.3}
                      className="text-[#687060]"
                    />

                    <p className="mt-6 text-[8px] uppercase tracking-[0.25em] text-[#777068]">
                      Contact
                    </p>

                    <a
                      href="tel:+19298339197"
                      className="mt-4 block font-serif text-[22px] font-light transition-colors hover:text-[#687060]"
                    >
                      (929) 833-9197
                    </a>

                    <a
                      href="https://www.instagram.com/houseoflaserspa/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 block text-[13px] text-[#716B65] transition-colors hover:text-[#687060]"
                    >
                      @houseoflaserspa
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section
          id="book"
          className="px-5 pb-10 md:px-8 lg:px-12"
        >
          <Reveal>
            <div className="mx-auto max-w-[1380px] bg-[#283229] px-7 py-20 text-center text-white sm:px-10 md:py-28">
              <div className="mx-auto max-w-[780px]">
                <Sparkles
                  size={18}
                  strokeWidth={1.1}
                  className="mx-auto text-[#CFC1B1]"
                />

                <p className="mt-7 text-[8px] uppercase tracking-[0.34em] text-[#CFC1B1]">
                  Your Next Appointment
                </p>

                <h2 className="mt-6 font-serif text-[48px] font-light leading-[1] tracking-[-0.04em] sm:text-6xl md:text-[76px]">
                  Make a little time
                  <br />
                  <span className="italic text-[#CFC1B1]">
                    for yourself.
                  </span>
                </h2>

                <p className="mx-auto mt-8 max-w-[510px] text-[13px] leading-7 text-white/55">
                  Laser, skincare, beauty, and self-care —
                  thoughtfully brought together in one Brooklyn spa.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="tel:+19298339197"
                    className="group inline-flex min-w-[220px] items-center justify-center gap-3 bg-[#F7F4EF] px-8 py-4 text-[9px] uppercase tracking-[0.2em] text-[#283229] transition-all duration-300 hover:bg-white"
                  >
                    Book an Appointment

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#services"
                    className="inline-flex min-w-[180px] items-center justify-center border border-white/20 px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
                  >
                    View Treatments
                  </a>
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
        className="px-6 py-14 md:px-10 lg:px-12"
      >
        <div className="mx-auto max-w-[1280px] border-t border-[#292521]/10 pt-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            <div>
              <div className="relative h-[85px] w-[215px]">
                <img
                  src="/previews/house-of-laser/logo.jpg"
                  alt="House of Laser & Spa"
                  className="h-full w-full object-contain object-left"
                />
              </div>

              <p className="mt-5 max-w-[340px] text-[12px] leading-6 text-[#777068]">
                Laser, skincare, beauty, and self-care in Brooklyn,
                New York.
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#687060]">
                Visit
              </p>

              <p className="mt-5 text-[12px] leading-6 text-[#777068]">
                1690 E 14th St
                <br />
                Unit 2
                <br />
                Brooklyn, NY 11229
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.27em] text-[#687060]">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-3 text-[12px] text-[#777068] transition-colors duration-300 hover:text-[#687060]"
                >
                  <Instagram
                    size={14}
                    strokeWidth={1.3}
                  />

                  @houseoflaserspa
                </a>

                <a
                  href="tel:+19298339197"
                  className="inline-flex w-fit items-center gap-3 text-[12px] text-[#777068] transition-colors duration-300 hover:text-[#687060]"
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

          <div className="mt-12 flex flex-col gap-3 border-t border-[#292521]/[0.07] pt-7 text-[8px] uppercase tracking-[0.22em] text-[#9B948C] sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser &amp; Spa</p>
            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </div>
  );
}