"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerraStudioPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    router.push("/preview/verra");
  };

  const goProjects = () => {
    router.push("/preview/verra/projects");
  };

  const goToHomeSection = (section: string) => {
    router.push(`/preview/verra#${section}`);
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
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              PROJECTS
            </button>

            <button
              onClick={() => goToHomeSection("services")}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              SERVICES
            </button>

            <button className="text-[8px] tracking-[0.24em] text-white">
              STUDIO
            </button>

            <button
              onClick={() => goToHomeSection("contact")}
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

              <button
                onClick={() => goToHomeSection("services")}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
                SERVICES
              </button>

              <button className="text-[9px] tracking-[0.24em] text-white">
                STUDIO
              </button>

              <button
                onClick={() => goToHomeSection("contact")}
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
      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#756B61]">
        <img
          src="/previews/verra/studio.jpg"
          alt="Verra interior design studio"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#302923]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2722]/70 via-[#2D2722]/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2722]/45 via-transparent to-[#2D2722]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 pb-16 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-white/55" />

            <p className="text-[8px] tracking-[0.32em] text-white/75">
              THE STUDIO
            </p>
          </div>

          <h1
            className="max-w-[650px] text-[48px] font-normal leading-[0.97] tracking-[-0.04em] text-[#FFFDF9] sm:text-[58px] md:text-[64px] lg:text-[69px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Design begins
            <br />

            <span className="italic text-white/88">
              with listening.
            </span>
          </h1>

          <p className="mt-6 max-w-[390px] text-[11px] font-light leading-[1.85] text-white/70">
            A New York interior design studio creating warm, enduring homes
            shaped around the people who live in them.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            {/* LABEL */}
            <div>
              <div className="flex items-center gap-4">
                <p className="text-[8px] tracking-[0.3em] text-[#80776E]">
                  ABOUT VERRA
                </p>

                <span className="h-px w-10 bg-[#A39A90]" />
              </div>
            </div>

            {/* COPY */}
            <div>
              <h2
                className="max-w-[720px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[49px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                We create homes that feel
                <br />

                <span className="italic text-[#81766C]">
                  natural to the people within them.
                </span>
              </h2>

              <div className="mt-9 grid gap-6 sm:grid-cols-2 sm:gap-10">
                <p className="text-[11px] font-light leading-[1.9] text-[#6D665F]">
                  VERRA is a residential interior design studio based in New
                  York. Our work is rooted in a belief that beautiful spaces
                  should feel effortless, personal, and deeply connected to
                  everyday life.
                </p>

                <p className="text-[11px] font-light leading-[1.9] text-[#6D665F]">
                  We approach each home individually, allowing architecture,
                  natural materials, proportion, and the character of our
                  clients to guide the design rather than a predetermined
                  aesthetic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE / PHILOSOPHY
      ===================================================== */}
      <section className="overflow-hidden bg-[#DED6CC] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-14 lg:grid-cols-[1.3fr_.7fr] lg:items-center lg:gap-20">
          {/* IMAGE */}
          <div className="group relative">
            <div
              className="relative aspect-[1.3/1] overflow-hidden bg-[#CDC4B9]"
              style={{
                borderRadius: "4px 110px 4px 4px",
              }}
            >
              <img
                src="/previews/verra/featured-project.jpg"
                alt="Verra residential interior"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div
              className="pointer-events-none absolute -bottom-4 -left-4 hidden h-full w-full border border-[#9E9489]/35 lg:block"
              style={{
                borderRadius: "4px 110px 4px 4px",
              }}
            />
          </div>

          {/* COPY */}
          <div className="relative">
            <p className="mb-5 text-[8px] tracking-[0.28em] text-[#81786F]">
              OUR PHILOSOPHY
            </p>

            <h2
              className="text-[37px] font-normal leading-[1.05] tracking-[-0.035em] text-[#37322D] sm:text-[43px] lg:text-[47px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Quiet design.
              <br />

              <span className="italic text-[#7D7268]">
                Lasting character.
              </span>
            </h2>

            <p className="mt-7 max-w-[380px] text-[11px] font-light leading-[1.9] text-[#665F58]">
              We are drawn to interiors that reveal themselves slowly —
              spaces defined by texture, proportion, light, and materials that
              become more beautiful with time.
            </p>

            <p className="mt-4 max-w-[380px] text-[11px] font-light leading-[1.9] text-[#665F58]">
              Rather than designing around trends, we focus on creating a
              foundation that feels relevant now and years from now.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-[5px] w-[5px] rounded-full bg-[#81776D]" />

              <span className="h-px w-10 bg-[#938A81]" />

              <p
                className="text-[13px] italic text-[#756B62]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                thoughtful by nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRINCIPLES
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          {/* HEADER */}
          <div className="grid gap-7 border-b border-[#AAA196]/50 pb-10 md:grid-cols-[1fr_350px] md:items-end">
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                WHAT GUIDES US
              </p>

              <h2
                className="text-[38px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[44px] lg:text-[48px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                A considered
                <span className="italic text-[#81766C]"> approach.</span>
              </h2>
            </div>

            <p className="max-w-[340px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
              Every decision is grounded in how a space feels, functions, and
              will continue to live over time.
            </p>
          </div>

          {/* PRINCIPLES */}
          <div className="grid border-b border-[#AAA196]/50 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Proportion",
                text: "A room begins with balance — how architecture, furniture, and negative space relate to one another.",
              },
              {
                title: "Material",
                text: "Natural stone, wood, plaster, metal, and textiles bring depth through texture rather than decoration.",
              },
              {
                title: "Light",
                text: "We consider how a home changes throughout the day and use light to shape atmosphere and movement.",
              },
              {
                title: "Longevity",
                text: "We favor thoughtful choices and enduring materials over moments that feel tied to a particular trend.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`py-9 sm:px-7 lg:px-8 lg:py-10 ${
                  index !== 0 ? "sm:border-l sm:border-[#AAA196]/40" : ""
                }`}
              >
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#887F76]" />
                  <span className="h-px w-7 bg-[#A0988E]" />
                </div>

                <h3
                  className="text-[25px] font-normal tracking-[-0.025em] text-[#3D3732]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[250px] text-[10.5px] font-light leading-[1.8] text-[#706960]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDIO STATEMENT
      ===================================================== */}
      <section className="bg-[#49423C] px-6 py-20 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-6 text-[8px] tracking-[0.3em] text-white/45">
                OUR PERSPECTIVE
              </p>

              <p
                className="max-w-[760px] text-[38px] font-normal leading-[1.08] tracking-[-0.035em] text-[#F5F1EA] sm:text-[44px] lg:text-[49px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                The most beautiful rooms are not the ones that feel
                <span className="italic text-[#C8BDB1]"> perfect.</span>
                <br />
                They&apos;re the ones that feel lived in.
              </p>
            </div>

            <div className="lg:border-l lg:border-white/[0.14] lg:pl-9">
              <p className="max-w-[340px] text-[11px] font-light leading-[1.9] text-white/55">
                Our goal is not to create a signature VERRA look. It is to
                uncover what feels right for each home and the people who
                inhabit it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ===================================================== */}
      <section className="bg-[#E8E1D8] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
            {/* LEFT */}
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                HOW WE WORK
              </p>

              <h2
                className="text-[37px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[43px] lg:text-[47px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Collaborative
                <br />

                <span className="italic text-[#80756B]">
                  from the start.
                </span>
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              {[
                [
                  "Understand",
                  "We begin by understanding your home, your routines, your priorities, and how you want the space to feel.",
                ],
                [
                  "Develop",
                  "Architecture, materiality, furnishings, and atmosphere are developed together as one cohesive direction.",
                ],
                [
                  "Refine",
                  "Details are considered carefully, from proportion and finish to lighting, textiles, and the objects that complete a room.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-4 border-t border-[#A69C91]/55 py-7 sm:grid-cols-[190px_1fr]"
                >
                  <h3
                    className="text-[20px] font-normal text-[#403A35]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    {title}
                  </h3>

                  <p className="max-w-[470px] text-[10.5px] font-light leading-[1.85] text-[#6B645D]">
                    {text}
                  </p>
                </div>
              ))}

              <div className="border-t border-[#A69C91]/55" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS CTA
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-20">
            {/* IMAGE */}
            <div
              className="group aspect-[1.45/1] overflow-hidden bg-[#D6CEC4]"
              style={{
                borderRadius: "4px 95px 4px 4px",
              }}
            >
              <img
                src="/previews/verra/project-park.jpg"
                alt="Verra selected project"
                className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* COPY */}
            <div>
              <p className="mb-5 text-[8px] tracking-[0.28em] text-[#81786F]">
                SELECTED WORK
              </p>

              <h2
                className="text-[37px] font-normal leading-[1.05] tracking-[-0.035em] sm:text-[43px] lg:text-[47px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                See how our approach
                <br />

                <span className="italic text-[#80756B]">
                  takes shape.
                </span>
              </h2>

              <p className="mt-6 max-w-[360px] text-[11px] font-light leading-[1.85] text-[#6D665F]">
                Explore a collection of residential interiors created through
                material, proportion, and thoughtful restraint.
              </p>

              <button
                onClick={goProjects}
                className="group mt-7 flex items-center gap-4"
              >
                <span className="text-[8px] tracking-[0.23em] text-[#625C56]">
                  VIEW OUR PROJECTS
                </span>

                <span className="h-px w-8 bg-[#7C746C] transition-all duration-500 group-hover:w-12" />

                <span className="text-[11px] text-[#625C56]">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ===================================================== */}
      <section className="bg-[#DCD4CA] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-[8px] tracking-[0.3em] text-[#766E66]">
              START A PROJECT
            </p>

            <h2
              className="text-[38px] font-normal leading-[1.05] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Let&apos;s create a home
              <br />

              <span className="italic text-[#80756B]">
                that feels like yours.
              </span>
            </h2>
          </div>

          <button
            onClick={() => goToHomeSection("contact")}
            className="group flex items-center gap-5"
          >
            <span className="text-[8px] tracking-[0.24em] text-[#625C56]">
              DISCUSS YOUR PROJECT
            </span>

            <span className="h-px w-9 bg-[#746B63] transition-all duration-500 group-hover:w-14" />

            <span className="text-[11px] text-[#625C56]">
              ↗
            </span>
          </button>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#312D29] px-6 pb-8 pt-16 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24">
        <div className="mx-auto max-w-[1380px]">
          {/* MAIN */}
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
                  Studio
                </button>

                <button
                  onClick={() => goToHomeSection("contact")}
                  className="text-[9px] text-white/55 transition hover:text-white"
                >
                  Contact
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
                onClick={() => goToHomeSection("contact")}
                className="group mt-5 flex items-center gap-3"
              >
                <span className="text-[9px] text-white/55 transition group-hover:text-white">
                  Start a Project
                </span>

                <span className="h-px w-5 bg-white/30 transition-all duration-500 group-hover:w-8" />

                <span className="text-[10px] text-white/45">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[7px] tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 VERRA STUDIO. ALL RIGHTS RESERVED.</p>

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