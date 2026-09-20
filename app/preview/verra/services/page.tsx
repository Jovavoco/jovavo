"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const services = [
  {
    title: "Interior Design",
    eyebrow: "COMPLETE INTERIORS",
    description:
      "A complete design service for homes requiring a cohesive vision from the earliest concepts through final styling.",
    details: [
      "Space planning",
      "Material & finish selection",
      "Custom millwork",
      "Furniture & lighting",
      "Textiles & styling",
      "Art & accessories",
    ],
  },
  {
    title: "Renovation",
    eyebrow: "TRANSFORMATION",
    description:
      "Thoughtful renovation direction that considers architecture, materiality, function, and the way each space connects.",
    details: [
      "Design direction",
      "Finish specifications",
      "Fixture selection",
      "Architectural details",
      "Kitchen & bath design",
      "Construction coordination",
    ],
  },
  {
    title: "Kitchens & Baths",
    eyebrow: "FUNCTION & MATERIAL",
    description:
      "Highly considered kitchens and bathrooms designed around natural materials, thoughtful details, and everyday function.",
    details: [
      "Layout development",
      "Cabinetry direction",
      "Stone selection",
      "Plumbing fixtures",
      "Lighting",
      "Hardware & finishes",
    ],
  },
  {
    title: "Furnishing & Styling",
    eyebrow: "THE FINAL LAYER",
    description:
      "A focused service for finished spaces that need furniture, lighting, textiles, art, and objects to bring the home together.",
    details: [
      "Furniture selection",
      "Lighting",
      "Rugs & textiles",
      "Window treatments",
      "Art direction",
      "Final styling",
    ],
  },
];

export default function VerraServicesPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => router.push("/preview/verra");
  const goProjects = () => router.push("/preview/verra/projects");
  const goStudio = () => router.push("/preview/verra/studio");

  const goContact = () => {
    router.push("/preview/verra#contact");
  };

  return (
    <main className="min-h-screen bg-[#F2EEE8] text-[#342F2B]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 py-7 sm:px-10 md:px-14 lg:px-[5.8rem] lg:py-8">
          {/* LOGO */}
          <button
            onClick={goHome}
            className="font-serif text-[26px] font-light tracking-[0.25em] text-white sm:text-[29px]"
          >
            VERRA
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={goProjects}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors hover:text-white"
            >
              PROJECTS
            </button>

            <button className="text-[8px] tracking-[0.24em] text-white">
              SERVICES
            </button>

            <button
              onClick={goStudio}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors hover:text-white"
            >
              STUDIO
            </button>

            <button
              onClick={goContact}
              className="border border-white/55 px-5 py-3 text-[8px] tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-[#39332E]"
            >
              START A PROJECT
            </button>
          </nav>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Toggle navigation"
          >
            <span className="h-px w-6 bg-white" />
            <span className="h-px w-6 bg-white" />
          </button>
        </div>

        {/* MOBILE NAV */}
        {menuOpen && (
          <div className="mx-6 border-t border-white/15 bg-[#312D29]/95 px-6 py-7 backdrop-blur-md sm:mx-10 md:hidden">
            <div className="flex flex-col items-start gap-5">
              <button
                onClick={goProjects}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
                PROJECTS
              </button>

              <button className="text-[9px] tracking-[0.24em] text-white">
                SERVICES
              </button>

              <button
                onClick={goStudio}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
                STUDIO
              </button>

              <button
                onClick={goContact}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
                START A PROJECT
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[70svh] items-end overflow-hidden bg-[#625950]">
        <img
          src="/previews/verra/project-park.jpg"
          alt="Verra interior design services"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2F2924]/30" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2621]/75 via-[#2B2621]/30 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2621]/45 via-transparent to-[#2B2621]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 pb-16 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-white/55" />

            <p className="text-[8px] tracking-[0.32em] text-white/75">
              OUR SERVICES
            </p>
          </div>

          <h1
            className="max-w-[680px] text-[48px] font-normal leading-[0.97] tracking-[-0.04em] text-[#FFFDF9] sm:text-[58px] md:text-[64px] lg:text-[69px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Designed around
            <br />

            <span className="italic text-white/90">
              the way you live.
            </span>
          </h1>

          <p className="mt-6 max-w-[400px] text-[11px] font-light leading-[1.85] text-white/70">
            From complete residences to carefully considered individual
            spaces, our work brings architecture, material, and everyday
            function together.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[8px] tracking-[0.3em] text-[#80776E]">
                WHAT WE DO
              </p>

              <span className="h-px w-10 bg-[#A39A90]" />
            </div>
          </div>

          <div>
            <h2
              className="max-w-[750px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[49px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Every room is part of
              <br />

              <span className="italic text-[#81766C]">
                a larger story.
              </span>
            </h2>

            <div className="mt-9 grid gap-7 sm:grid-cols-2 sm:gap-10">
              <p className="text-[11px] font-light leading-[1.9] text-[#6D665F]">
                Our services are designed to support a project from its
                earliest ideas through the details that make a home feel
                complete.
              </p>

              <p className="text-[11px] font-light leading-[1.9] text-[#6D665F]">
                Whether shaping an entire residence or refining an existing
                space, we approach architecture, furnishings, materials, and
                styling as one connected whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 01 — INTERIOR DESIGN
      ===================================================== */}
      <section className="bg-[#E1D9CF] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-20">
          {/* IMAGE */}
          <div className="group relative">
            <div
              className="aspect-[1.32/1] overflow-hidden bg-[#CDC5BB]"
              style={{
                borderRadius: "4px 105px 4px 4px",
              }}
            >
              <img
                src="/previews/verra/project-mercer.jpg"
                alt="Verra interior design"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-full w-full border border-[#A0968B]/35 lg:block"
              style={{
                borderRadius: "4px 105px 4px 4px",
              }}
            />
          </div>

          {/* CONTENT */}
          <ServiceContent service={services[0]} />
        </div>
      </section>

      {/* =====================================================
          SERVICE 02 — RENOVATION
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
          {/* CONTENT */}
          <ServiceContent service={services[1]} />

          {/* IMAGE */}
          <div className="group lg:order-last">
            <div
              className="aspect-[1.3/1] overflow-hidden bg-[#D1C9BF]"
              style={{
                borderRadius: "100px 4px 4px 4px",
              }}
            >
              <img
                src="/previews/verra/project-hudson.jpg"
                alt="Verra residential renovation"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="bg-[#49423C] px-6 py-20 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
          <div>
            <p className="mb-6 text-[8px] tracking-[0.3em] text-white/45">
              ONE COMPLETE VISION
            </p>

            <p
              className="max-w-[760px] text-[38px] font-normal leading-[1.08] tracking-[-0.035em] sm:text-[44px] lg:text-[49px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Architecture and interiors should
              <span className="italic text-[#C8BDB1]"> speak the same language.</span>
            </p>
          </div>

          <div className="lg:border-l lg:border-white/[0.14] lg:pl-9">
            <p className="max-w-[340px] text-[11px] font-light leading-[1.9] text-white/55">
              We consider the home as a whole so that materials, proportions,
              furnishings, and architectural details feel connected rather
              than added one piece at a time.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE 03 + 04
      ===================================================== */}
      <section className="bg-[#E9E3DB] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
            {/* KITCHENS */}
            <article>
              <div
                className="group aspect-[1.28/1] overflow-hidden bg-[#D4CCC2]"
                style={{
                  borderRadius: "4px 75px 4px 4px",
                }}
              >
                <img
                  src="/previews/verra/featured-project.jpg"
                  alt="Verra kitchen and bath design"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-8">
                <ServiceContent service={services[2]} compact />
              </div>
            </article>

            {/* FURNISHING */}
            <article className="lg:pt-20">
              <div
                className="group aspect-[1.28/1] overflow-hidden bg-[#D4CCC2]"
                style={{
                  borderRadius: "75px 4px 4px 4px",
                }}
              >
                <img
                  src="/previews/verra/project-park.jpg"
                  alt="Verra furnishing and styling"
                  className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-8">
                <ServiceContent service={services[3]} compact />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL SERVICE
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                FULL-SERVICE DESIGN
              </p>

              <h2
                className="text-[37px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[43px] lg:text-[47px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                From first idea
                <br />

                <span className="italic text-[#80756B]">
                  to final detail.
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              {[
                [
                  "Concept & Direction",
                  "Establishing the visual language, spatial direction, palette, and overall character of the home.",
                ],
                [
                  "Materials & Details",
                  "Selecting finishes, fixtures, stone, hardware, millwork, lighting, and architectural details.",
                ],
                [
                  "Furniture & Objects",
                  "Developing furniture plans and sourcing lighting, rugs, textiles, art, and decorative objects.",
                ],
                [
                  "Installation & Styling",
                  "Bringing the final layers together so the finished home feels complete, natural, and ready to live in.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-4 border-t border-[#AAA196]/55 py-7 sm:grid-cols-[210px_1fr]"
                >
                  <h3
                    className="text-[20px] font-normal text-[#403A35]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    {title}
                  </h3>

                  <p className="max-w-[480px] text-[10.5px] font-light leading-[1.85] text-[#6B645D]">
                    {text}
                  </p>
                </div>
              ))}

              <div className="border-t border-[#AAA196]/55" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-[#DED6CC] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          {/* HEADER */}
          <div className="grid gap-7 border-b border-[#A99F94]/55 pb-10 md:grid-cols-[1fr_350px] md:items-end">
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                THE PROCESS
              </p>

              <h2
                className="text-[38px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[44px] lg:text-[48px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Clear from
                <span className="italic text-[#81766C]"> the beginning.</span>
              </h2>
            </div>

            <p className="max-w-[340px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
              Our process keeps the project cohesive while leaving room for
              thoughtful decisions to evolve along the way.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Discover",
                "Understanding your home, needs, priorities, and the way you want it to feel.",
              ],
              [
                "Define",
                "Establishing the creative direction, palette, materials, and scope.",
              ],
              [
                "Design",
                "Developing the details into one complete and cohesive interior.",
              ],
              [
                "Realize",
                "Coordinating the final layers and bringing the finished home together.",
              ],
            ].map(([title, text], index) => (
              <article
                key={title}
                className={`py-9 sm:px-7 lg:px-8 lg:py-10 ${
                  index !== 0
                    ? "sm:border-l sm:border-[#A99F94]/40"
                    : ""
                }`}
              >
                <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-full border border-[#91877D]/55">
                  <span className="h-[4px] w-[4px] rounded-full bg-[#81776D]" />
                </div>

                <h3
                  className="text-[25px] font-normal tracking-[-0.025em] text-[#3D3732]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {title}
                </h3>

                <p className="mt-4 max-w-[240px] text-[10.5px] font-light leading-[1.8] text-[#706960]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS CTA
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-20">
          {/* IMAGE */}
          <div
            className="group aspect-[1.45/1] overflow-hidden bg-[#D4CCC2]"
            style={{
              borderRadius: "4px 95px 4px 4px",
            }}
          >
            <img
              src="/previews/verra/project-hudson.jpg"
              alt="Verra selected projects"
              className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="mb-5 text-[8px] tracking-[0.28em] text-[#81786F]">
              OUR WORK
            </p>

            <h2
              className="text-[37px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[43px] lg:text-[47px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              See the details
              <br />

              <span className="italic text-[#80756B]">
                come together.
              </span>
            </h2>

            <p className="mt-6 max-w-[360px] text-[11px] font-light leading-[1.85] text-[#6D665F]">
              Explore residences shaped through the same thoughtful approach
              to architecture, materials, furnishings, and everyday life.
            </p>

            <button
              onClick={goProjects}
              className="group mt-7 flex items-center gap-4"
            >
              <span className="text-[8px] tracking-[0.23em] text-[#625C56]">
                EXPLORE OUR PROJECTS
              </span>

              <span className="h-px w-8 bg-[#7C746C] transition-all duration-500 group-hover:w-12" />

              <SleekArrow />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="bg-[#49423C] px-6 py-20 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-[8px] tracking-[0.3em] text-white/45">
              START A PROJECT
            </p>

            <h2
              className="text-[38px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Have a space
              <br />

              <span className="italic text-[#C8BDB1]">
                in mind?
              </span>
            </h2>
          </div>

          <button
            onClick={goContact}
            className="group flex items-center gap-5"
          >
            <span className="text-[8px] tracking-[0.24em] text-white/70">
              DISCUSS YOUR PROJECT
            </span>

            <span className="h-px w-9 bg-white/40 transition-all duration-500 group-hover:w-14" />

            <SleekArrow />
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#312D29] px-6 pb-8 pt-16 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24">
        <div className="mx-auto max-w-[1380px]">
          {/* MAIN FOOTER */}
          <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_.7fr_.7fr_.9fr]">
            {/* BRAND */}
            <div>
              <button
                onClick={goHome}
                className="font-serif text-[32px] font-light tracking-[0.27em]"
              >
                VERRA
              </button>

              <p
                className="mt-4 text-[13px] italic text-[#C7BAAC]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                thoughtful interiors.
              </p>

              <p className="mt-5 max-w-[300px] text-[9px] font-light leading-[1.85] text-white/40">
                Residential interior design shaped around material,
                proportion, and everyday life.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <p className="mb-5 text-[7px] tracking-[0.27em] text-white/30">
                EXPLORE
              </p>

              <div className="flex flex-col items-start gap-4">
                <button
                  onClick={goHome}
                  className="text-[9px] text-white/55 transition hover:text-white"
                >
                  Home
                </button>

                <button
                  onClick={goProjects}
                  className="text-[9px] text-white/55 transition hover:text-white"
                >
                  Projects
                </button>

                <button className="text-[9px] text-white">
                  Services
                </button>

                <button
                  onClick={goStudio}
                  className="text-[9px] text-white/55 transition hover:text-white"
                >
                  Studio
                </button>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-5 text-[7px] tracking-[0.27em] text-white/30">
                SERVICES
              </p>

              <div className="space-y-4 text-[9px] text-white/55">
                <p>Interior Design</p>
                <p>Renovation</p>
                <p>Kitchens &amp; Baths</p>
                <p>Furnishing</p>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="mb-5 text-[7px] tracking-[0.27em] text-white/30">
                CONTACT
              </p>

              <p className="text-[9px] text-white/55">
                New York, NY
              </p>

              <button
                onClick={goContact}
                className="group mt-5 flex items-center gap-3"
              >
                <span className="text-[9px] text-white/55 transition group-hover:text-white">
                  Start a Project
                </span>

                <span className="h-px w-5 bg-white/30 transition-all duration-500 group-hover:w-8" />

                <SleekArrow />
              </button>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[7px] tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 VERRA STUDIO. ALL RIGHTS RESERVED.
            </p>

            <p>
              INDEPENDENT CONCEPT · DESIGNED BY{" "}
              <span className="text-[#C7BAAC]/70">
                JOVAVO
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}


/* =====================================================
    SLEEK CSS ARROW
===================================================== */

function SleekArrow() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-4 w-8 shrink-0 items-center text-current"
    >
      <span className="h-px w-7 bg-current transition-all duration-500 group-hover:w-8" />
      <span className="absolute right-0 h-[7px] w-[7px] rotate-45 border-r border-t border-current" />
    </span>
  );
}

/* =====================================================
    SERVICE CONTENT
===================================================== */

function ServiceContent({
  service,
  compact = false,
}: {
  service: {
    title: string;
    eyebrow: string;
    description: string;
    details: string[];
  };
  compact?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 text-[7px] tracking-[0.27em] text-[#8A8177]">
        {service.eyebrow}
      </p>

      <h2
        className={`font-normal leading-[1.04] tracking-[-0.03em] text-[#39342F] ${
          compact
            ? "text-[31px] sm:text-[35px]"
            : "text-[37px] sm:text-[43px] lg:text-[46px]"
        }`}
        style={{
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        {service.title}
      </h2>

      <p className="mt-5 max-w-[390px] text-[10.5px] font-light leading-[1.85] text-[#6B645D]">
        {service.description}
      </p>

      <div className="mt-7 grid max-w-[420px] grid-cols-2 gap-x-8 border-t border-[#A99F94]/50 pt-5">
        {service.details.map((detail) => (
          <div
            key={detail}
            className="flex items-center gap-3 border-b border-[#A99F94]/35 py-3"
          >
            <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-[#8A8178]" />

            <p className="text-[8px] font-light tracking-[0.03em] text-[#6D665F]">
              {detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}