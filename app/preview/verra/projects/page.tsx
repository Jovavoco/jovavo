"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const projects = [
  {
    title: "Mercer Residence",
    location: "SoHo, New York",
    type: "Full Residence",
    description:
      "A warm Manhattan residence shaped through natural stone, soft textiles, and sculptural forms.",
    image: "/previews/verra/project-mercer.jpg",
    layout: "large",
  },
  {
    title: "Hudson House",
    location: "Hudson Valley, New York",
    type: "Renovation",
    description:
      "A quiet retreat grounded in natural materials, expansive views, and a restrained interior palette.",
    image: "/previews/verra/project-hudson.jpg",
    layout: "portrait",
  },
  {
    title: "Park Avenue",
    location: "Upper East Side, New York",
    type: "Interior Design",
    description:
      "A modern interpretation of a classic New York home, balancing architectural character with contemporary restraint.",
    image: "/previews/verra/project-park.jpg",
    layout: "wide",
  },
];

export default function VerraProjectsPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateTo = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-[#F1ECE5] text-[#342F2B]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 py-7 sm:px-10 md:px-14 lg:px-[5.8rem] lg:py-8">
          {/* LOGO */}
          <button
            onClick={() => navigateTo("/preview/verra")}
            className="font-serif text-[26px] font-light tracking-[0.25em] text-white sm:text-[29px]"
          >
            VERRA
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <button className="relative text-[8px] tracking-[0.24em] text-white">
              PROJECTS

              <span className="absolute -bottom-[8px] left-0 h-px w-[calc(100%-0.24em)] bg-white/70" />
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/services")}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              SERVICES
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/studio")}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              STUDIO
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/contact")}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              CONTACT
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/start-project")}
              className="border border-white/55 px-5 py-3 text-[8px] tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-[#39332E]"
            >
              START A PROJECT
            </button>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-[7px] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-px bg-white transition-all duration-300 ${
                menuOpen
                  ? "w-7 translate-y-[4px] rotate-45"
                  : "w-7"
              }`}
            />

            <span
              className={`h-px bg-white transition-all duration-300 ${
                menuOpen
                  ? "w-7 -translate-y-[4px] -rotate-45"
                  : "w-5"
              }`}
            />
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`fixed inset-0 z-40 flex flex-col bg-[#312D29] px-7 pb-10 pt-28 transition-all duration-500 md:hidden ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex flex-1 flex-col justify-center">
            <button
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/15 py-5 text-left font-serif text-[36px] font-light text-white"
            >
              Projects
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/services")}
              className="border-b border-white/15 py-5 text-left font-serif text-[36px] font-light text-white/70 transition-colors hover:text-white"
            >
              Services
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/studio")}
              className="border-b border-white/15 py-5 text-left font-serif text-[36px] font-light text-white/70 transition-colors hover:text-white"
            >
              Studio
            </button>

            <button
              onClick={() => navigateTo("/preview/verra/contact")}
              className="border-b border-white/15 py-5 text-left font-serif text-[36px] font-light text-white/70 transition-colors hover:text-white"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => navigateTo("/preview/verra/start-project")}
            className="border border-white/60 px-6 py-5 text-[9px] tracking-[0.25em] text-white transition-colors hover:bg-white hover:text-[#312D29]"
          >
            START A PROJECT
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-[#6B6259]">
        <img
          src="/previews/verra/project-mercer.jpg"
          alt="Mercer Residence interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#302A25]/75 via-[#302A25]/35 to-[#302A25]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#302A25]/45 via-transparent to-[#302A25]/15" />

        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 pb-16 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-white/60" />

            <p className="text-[8px] tracking-[0.32em] text-white/75">
              SELECTED WORK
            </p>
          </div>

          <h1
            className="max-w-[650px] text-[48px] font-light leading-[0.96] tracking-[-0.035em] text-[#FFFDF9] sm:text-[58px] lg:text-[66px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Spaces shaped
            <br />

            <span className="italic text-white/85">
              with intention.
            </span>
          </h1>

          <p className="mt-6 max-w-[400px] text-[11px] font-light leading-[1.85] text-white/65">
            A collection of residential interiors exploring material,
            proportion, light, and the rhythms of everyday life.
          </p>
        </div>
      </section>

      {/* =====================================================
          PROJECTS INTRO
      ===================================================== */}
      <section className="px-6 py-16 sm:px-10 md:px-14 lg:px-24 lg:py-20">
        <div className="mx-auto grid max-w-[1380px] gap-8 border-b border-[#AAA096]/50 pb-12 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
              OUR PROJECTS
            </p>

            <h2
              className="text-[37px] font-light leading-[1.05] tracking-[-0.035em] text-[#342F2B] sm:text-[43px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              A study in
              <span className="italic text-[#83776C]"> home.</span>
            </h2>
          </div>

          <p className="max-w-[360px] text-[11px] font-light leading-[1.85] text-[#706960] lg:justify-self-end">
            Each project begins with the architecture, the people who live
            there, and a desire to create something that feels natural rather
            than imposed.
          </p>
        </div>
      </section>

      {/* =====================================================
          MERCER RESIDENCE
      ===================================================== */}
      <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-24 lg:pb-32">
        <div className="mx-auto max-w-[1380px]">
          <article className="group">
            {/* IMAGE */}
            <div
              className="relative aspect-[1.6/1] overflow-hidden bg-[#D6CEC4]"
              style={{
                borderRadius: "3px 105px 3px 3px",
              }}
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.015]"
              />

              <div className="absolute inset-0 bg-black/[0.02]" />

              <div className="absolute bottom-5 left-5 bg-[#EEE8E0]/90 px-4 py-2 backdrop-blur-sm sm:bottom-7 sm:left-7">
                <p className="text-[7px] tracking-[0.23em] text-[#615A53]">
                  SOHO · NEW YORK
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-7 grid gap-6 md:grid-cols-[1fr_360px] md:items-start">
              <div>
                <p className="mb-3 text-[7px] tracking-[0.25em] text-[#91877D]">
                  FULL RESIDENCE
                </p>

                <h2
                  className="text-[31px] font-light tracking-[-0.025em] text-[#39342F] sm:text-[35px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Mercer Residence
                </h2>
              </div>

              <div className="md:justify-self-end">
                <p className="max-w-[350px] text-[10.5px] font-light leading-[1.8] text-[#6F6860]">
                  {projects[0].description}
                </p>

                <button className="group/link mt-5 flex items-center gap-4">
                  <span className="text-[7px] tracking-[0.23em] text-[#625C56]">
                    VIEW PROJECT
                  </span>

                  <span className="h-px w-7 bg-[#7D746B] transition-all duration-500 group-hover/link:w-11" />

                  <span className="text-[10px] text-[#625C56]">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          HUDSON HOUSE
      ===================================================== */}
      <section className="bg-[#E5DDD3] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[.68fr_1.32fr] lg:items-center lg:gap-20">
          {/* TEXT */}
          <div className="lg:pr-4">
            <p className="mb-5 text-[7px] tracking-[0.26em] text-[#8A8177]">
              RENOVATION
            </p>

            <h2
              className="text-[37px] font-light leading-[1.04] tracking-[-0.03em] text-[#39342F] sm:text-[43px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Hudson
              <br />

              <span className="italic text-[#81766C]">
                House
              </span>
            </h2>

            <p className="mt-6 max-w-[350px] text-[10.5px] font-light leading-[1.85] text-[#6B645D]">
              {projects[1].description}
            </p>

            <div className="mt-8 border-y border-[#A99F94]/50 py-5">
              <div className="flex justify-between gap-8">
                <div>
                  <p className="text-[7px] tracking-[0.22em] text-[#91887E]">
                    LOCATION
                  </p>

                  <p
                    className="mt-2 text-[13px] text-[#4A443E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Hudson Valley
                  </p>
                </div>

                <div>
                  <p className="text-[7px] tracking-[0.22em] text-[#91887E]">
                    SCOPE
                  </p>

                  <p
                    className="mt-2 text-[13px] text-[#4A443E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Renovation
                  </p>
                </div>
              </div>
            </div>

            <button className="group mt-7 flex items-center gap-4">
              <span className="text-[7px] tracking-[0.23em] text-[#625C56]">
                VIEW PROJECT
              </span>

              <span className="h-px w-8 bg-[#7D746B] transition-all duration-500 group-hover:w-12" />

              <span className="text-[10px] text-[#625C56]">
                ↗
              </span>
            </button>
          </div>

          {/* IMAGE */}
          <div className="group relative">
            <div
              className="aspect-[1.3/1] overflow-hidden bg-[#D3CBC1]"
              style={{
                borderRadius: "100px 3px 3px 3px",
              }}
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARK AVENUE
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
            {/* IMAGE */}
            <div className="group">
              <div
                className="aspect-[1.18/1] overflow-hidden bg-[#D4CCC2]"
                style={{
                  borderRadius: "3px 3px 100px 3px",
                }}
              >
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="pb-2">
              <p className="mb-5 text-[7px] tracking-[0.26em] text-[#8A8177]">
                INTERIOR DESIGN
              </p>

              <h2
                className="text-[37px] font-light leading-[1.04] tracking-[-0.03em] text-[#39342F] sm:text-[43px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Park
                <br />

                <span className="italic text-[#81766C]">
                  Avenue
                </span>
              </h2>

              <p className="mt-6 max-w-[360px] text-[10.5px] font-light leading-[1.85] text-[#6B645D]">
                {projects[2].description}
              </p>

              <div className="mt-8 flex items-center gap-5">
                <span className="h-[5px] w-[5px] rounded-full bg-[#877E75]" />

                <p className="text-[7px] tracking-[0.22em] text-[#857C73]">
                  UPPER EAST SIDE · NEW YORK
                </p>
              </div>

              <button className="group mt-7 flex items-center gap-4">
                <span className="text-[7px] tracking-[0.23em] text-[#625C56]">
                  VIEW PROJECT
                </span>

                <span className="h-px w-8 bg-[#7D746B] transition-all duration-500 group-hover:w-12" />

                <span className="text-[10px] text-[#625C56]">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#49423C] px-6 py-20 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-[8px] tracking-[0.3em] text-white/45">
              START A PROJECT
            </p>

            <h2
              className="text-[38px] font-light leading-[1.05] tracking-[-0.03em] sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Your home,
              <br />

              <span className="italic text-[#C8BDB1]">
                thoughtfully considered.
              </span>
            </h2>
          </div>

          <button
            onClick={() => navigateTo("/preview/verra/start-project")}
            className="group flex items-center gap-5"
          >
            <span className="text-[8px] tracking-[0.24em] text-white/70 transition-colors group-hover:text-white">
              DISCUSS YOUR PROJECT
            </span>

            <span className="h-px w-9 bg-white/40 transition-all duration-500 group-hover:w-14 group-hover:bg-white/70" />

            <span className="text-[11px] text-white/65 transition-colors group-hover:text-white">
              ↗
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#312D29] px-6 pb-8 pt-16 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:pt-20">
        <div className="mx-auto max-w-[1380px]">
          {/* MAIN FOOTER */}
          <div className="grid gap-14 pb-14 md:grid-cols-2 lg:grid-cols-[1.55fr_.7fr_.7fr_.9fr] lg:gap-12 lg:pb-16">
            {/* BRAND */}
            <div>
              <button
                onClick={() => navigateTo("/preview/verra")}
                className="text-left"
              >
                <p className="font-serif text-[34px] font-light tracking-[0.28em] text-[#F4EFE8] sm:text-[38px]">
                  VERRA
                </p>
              </button>

              <p
                className="mt-4 text-[14px] font-light italic text-[#C7BAAC]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                spaces, considered.
              </p>

              <p className="mt-6 max-w-[320px] text-[10px] font-light leading-[1.9] text-white/45">
                Residential interiors shaped through thoughtful materials,
                considered details, and the way you live.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
                EXPLORE
              </p>

              <div className="flex flex-col items-start gap-4">
                <button
                  onClick={() => navigateTo("/preview/verra")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Home
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/projects")}
                  className="text-[10px] font-light text-white transition-colors duration-300"
                >
                  Projects
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/services")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Services
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/studio")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Studio
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/contact")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
                SERVICES
              </p>

              <div className="flex flex-col items-start gap-4">
                <button
                  onClick={() => navigateTo("/preview/verra/services")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Interior Design
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/services")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Renovation
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/services")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Kitchens &amp; Baths
                </button>

                <button
                  onClick={() => navigateTo("/preview/verra/services")}
                  className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Furnishing &amp; Styling
                </button>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
                CONTACT
              </p>

              <div className="space-y-4">
                <p className="text-[10px] font-light text-white/60">
                  New York, NY
                </p>

                <button
                  onClick={() => navigateTo("/preview/verra/contact")}
                  className="block text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
                >
                  Contact the Studio
                </button>

                <button
                  onClick={() =>
                    navigateTo("/preview/verra/start-project")
                  }
                  className="group flex items-center gap-3 text-left"
                >
                  <span className="text-[10px] font-light text-white/60 transition-colors duration-300 group-hover:text-white">
                    Start a Project
                  </span>

                  <span className="h-px w-5 bg-white/35 transition-all duration-300 group-hover:w-8 group-hover:bg-white/70" />

                  <span className="text-[10px] text-white/45 transition-colors duration-300 group-hover:text-white">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px w-full bg-white/[0.12]" />

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[7px] tracking-[0.18em] text-white/30">
              © 2026 VERRA STUDIO. ALL RIGHTS RESERVED.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <p className="text-[7px] tracking-[0.18em] text-white/30">
                INDEPENDENT CONCEPT PROJECT
              </p>

              <span className="hidden h-3 w-px bg-white/15 sm:block" />

              <p className="text-[7px] tracking-[0.18em] text-white/30">
                DESIGNED BY{" "}
                <span className="text-[#C7BAAC]">
                  JOVAVO
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}