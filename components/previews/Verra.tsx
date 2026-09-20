"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const projects = [
  {
    number: "01",
    title: "Mercer Residence",
    location: "SoHo, New York",
    category: "Full Residence",
    image: "/previews/verra/project-mercer.jpg",
  },
  {
    number: "02",
    title: "Hudson House",
    location: "Hudson Valley, New York",
    category: "Renovation",
    image: "/previews/verra/project-hudson.jpg",
  },
  {
    number: "03",
    title: "Park Avenue",
    location: "Upper East Side, New York",
    category: "Interior Design",
    image: "/previews/verra/project-park.jpg",
  },
];

const services = [
  {
    number: "01",
    title: "Interior Design",
    text: "Complete interior direction from early concepts through the final layer of styling.",
  },
  {
    number: "02",
    title: "Renovation",
    text: "Thoughtful transformations that bring architecture, materiality, and everyday function together.",
  },
  {
    number: "03",
    title: "Kitchens & Baths",
    text: "Highly considered spaces balancing beautiful materials with effortless functionality.",
  },
  {
    number: "04",
    title: "Furnishing & Styling",
    text: "Furniture, lighting, textiles, art, and objects selected to make a home feel complete.",
  },
];

const process = [
  ["01", "Discover", "We begin with your home, your routines, and how you want the space to feel."],
  ["02", "Define", "We establish the creative direction, palette, materials, and overall vision."],
  ["03", "Design", "Every detail is developed into a cohesive and highly considered interior."],
  ["04", "Realize", "We coordinate the final details and bring the finished space together."],
];

export default function Verra() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const original = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = original;
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigateTo = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  return (
    <main className="overflow-hidden bg-[#F1EDE7] text-[#302D29]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        id="home"
        className="relative min-h-[100svh] overflow-hidden bg-[#776554]"
      >
        <img
          src="/previews/verra/verra-hero.png"
          alt="Contemporary neutral living room"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/[0.12]" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(24,18,13,.31) 0%, rgba(24,18,13,.15) 32%, rgba(24,18,13,.025) 72%, rgba(24,18,13,.06) 100%)",
          }}
        />

        {/* NAV */}
        <header className="absolute inset-x-0 top-0 z-40">
          <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 py-7 sm:px-10 md:px-14 lg:px-[5.5rem] lg:py-10">
            <button
              onClick={() => navigateTo("/preview/verra")} 
              className="font-serif text-[28px] tracking-[0.31em] text-white sm:text-[31px] lg:text-[34px]"
            >
              VERRA
            </button>

            <nav className="hidden items-center gap-12 lg:flex xl:gap-[4.5rem]">
              {[
                ["PROJECTS", "/preview/verra/projects"],
                ["SERVICES", "/preview/verra/services"],
                ["STUDIO", "/preview/verra/studio"],
                ["CONTACT", "/preview/verra/contact"],
              ].map(([label, path]) => (
                <button
                  key={path}
                  onClick={() => navigateTo(path)}
                  className="nav-link"
                >
                  {label}
                </button>
              ))}
            </nav>

            <button
              onClick={() => navigateTo("/preview/verra/start-project")}
              className="hidden border border-white/80 px-8 py-[16px] text-[10px] tracking-[0.25em] text-white transition duration-500 hover:bg-white hover:text-[#39312B] lg:block"
            >
              START A PROJECT
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50 flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-px bg-white transition duration-300 ${
                  menuOpen
                    ? "w-7 translate-y-[4px] rotate-45"
                    : "w-7"
                }`}
              />

              <span
                className={`h-px bg-white transition duration-300 ${
                  menuOpen
                    ? "w-7 -translate-y-[4px] -rotate-45"
                    : "w-5"
                }`}
              />
            </button>
          </div>
        </header>

        {/* MOBILE MENU */}
        <div
          className={`fixed inset-0 z-30 flex flex-col bg-[#51473F] px-7 pb-10 pt-32 transition-all duration-500 lg:hidden ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex flex-1 flex-col justify-center">
            {[
              ["Projects", "/preview/verra/projects"],
              ["Services", "/preview/verra/services"],
              ["Studio", "/preview/verra/studio"],
              ["Contact", "/preview/verra/contact"],
            ].map(([label, path]) => (
              <button
                key={path}
                onClick={() => navigateTo(path)}
                className="border-b border-white/15 py-5 text-left font-serif text-[38px] font-light text-white"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => navigateTo("/preview/verra/start-project")}
            className="border border-white/70 px-6 py-5 text-[10px] tracking-[0.25em] text-white"
          >
            START A PROJECT
          </button>
        </div>
{/* =====================================================
    HERO COPY
===================================================== */}
<div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1540px] items-center px-6 pb-24 pt-32 sm:px-10 md:px-14 lg:px-[5.8rem]">
  <div className="max-w-[560px]">
    {/* EYEBROW */}
    <div className="hero-in mb-7 flex items-center gap-4">
      <span className="h-px w-8 bg-white/55" />

      <p className="text-[8px] font-light tracking-[0.34em] text-white/75 sm:text-[9px]">
        INTERIOR DESIGN &amp; RENOVATION
      </p>
    </div>

    {/* MAIN HEADING */}
    <h1
      className="hero-in hero-delay-1 text-[46px] font-extralight leading-[0.98] tracking-[-0.035em] text-[#FFFDF9] sm:text-[56px] md:text-[63px] lg:text-[69px]"
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        fontWeight: 300,
      }}
    >
      <span className="block">
        Designed for
      </span>

      <span className="block italic text-white/90">
        living.
      </span>
    </h1>

    {/* DESCRIPTION */}
    <p
      className="hero-in hero-delay-2 mt-7 max-w-[360px] text-[14px] font-light leading-[1.7] tracking-[0.01em] text-white/70 sm:text-[15px]"
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        fontWeight: 300,
      }}
    >
      Thoughtful interiors shaped around
      <br className="hidden sm:block" /> the way you live.
    </p>

    {/* CTA */}
    <button
      onClick={() => navigateTo("/preview/verra/projects")}
      className="hero-in hero-delay-3 group mt-9 flex items-center gap-4 text-white"
    >
      <span className="text-[8px] font-light tracking-[0.28em] text-white/75 transition-colors duration-500 group-hover:text-white">
        EXPLORE OUR WORK
      </span>

      <span className="h-px w-9 bg-white/50 transition-all duration-500 group-hover:w-14 group-hover:bg-white" />

      <SleekArrow />
    </button>
  </div>
</div>

        {/* BOTTOM DETAILS */}
        <button
          onClick={() => scrollTo("projects")}
          className="absolute bottom-9 left-[5.8rem] z-20 hidden text-left text-white lg:block"
        >
          <span className="mb-3 block h-9 w-px bg-white/80" />
          <span className="text-[9px] tracking-[0.3em]">SCROLL</span>
        </button>

        <div className="absolute bottom-10 right-[6rem] z-20 hidden items-center gap-4 text-[9px] tracking-[0.2em] text-white/65 lg:flex">
          <span className="text-white">01</span>
          <span className="h-px w-12 bg-white/70" />
          <span>02</span>
          <span>03</span>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
{/* =====================================================
    PHILOSOPHY
===================================================== */}
{/* =====================================================
    PHILOSOPHY — COMPACT
===================================================== */}
<section className="relative overflow-hidden bg-[#EEE9E2] px-6 py-16 sm:px-10 md:px-14 lg:px-24 lg:py-20">
  {/* SUBTLE ABSTRACT ARCH */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-[120px] bottom-[-220px] hidden h-[470px] w-[390px] border border-[#B9AFA4]/25 lg:block"
    style={{
      borderRadius: "210px 210px 0 0",
    }}
  />

  <div className="relative mx-auto max-w-[1380px]">
    {/* LABEL */}
    <div className="mb-9 flex items-center gap-4">
      <p className="text-[8px] tracking-[0.32em] text-[#746D65]">
        OUR PHILOSOPHY
      </p>

      <span className="h-px w-10 bg-[#A39A90]" />
    </div>

    {/* MAIN CONTENT */}
    <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center lg:gap-16">
      {/* LEFT */}
      <div>
        <h2 className="max-w-[620px] font-serif text-[36px] font-light leading-[1.08] tracking-[-0.035em] text-[#342F2B] sm:text-[42px] lg:text-[47px]">
          A home should feel
          <br />

          <span className="italic text-[#83786E]">
            natural to you.
          </span>
        </h2>

        {/* KEY WORDS */}
        <div className="mt-8 flex max-w-[520px] items-center gap-4">
          <span className="font-serif text-[13px] italic text-[#756C64]">
            quiet
          </span>

          <span className="h-px flex-1 bg-[#B5ACA2]/70" />

          <span className="font-serif text-[13px] italic text-[#756C64]">
            warm
          </span>

          <span className="h-px flex-1 bg-[#B5ACA2]/70" />

          <span className="font-serif text-[13px] italic text-[#756C64]">
            enduring
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="lg:border-l lg:border-[#B5ACA2]/55 lg:pl-9">
        <p className="max-w-[360px] text-[11px] font-light leading-[1.85] text-[#69625B]">
          We create interiors through proportion, natural materials, and
          thoughtful restraint — allowing each space to feel collected rather
          than composed.
        </p>

        <p className="mt-4 max-w-[360px] text-[11px] font-light leading-[1.85] text-[#69625B]">
          The result is a home that feels considered, comfortable, and
          unmistakably personal.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="h-px w-8 bg-[#8E857C]" />

          <p className="text-[7px] tracking-[0.25em] text-[#817970]">
            VERRA · NEW YORK
          </p>
        </div>
      </div>
    </div>

    {/* BOTTOM */}
    <div className="mt-12 flex items-center justify-between border-t border-[#B5ACA2]/50 pt-5">
      <p className="text-[7px] tracking-[0.24em] text-[#8D857C]">
        RESIDENTIAL INTERIOR DESIGN
      </p>

      <p className="font-serif text-[14px] italic text-[#746A61]">
        spaces, considered.
      </p>
    </div>
  </div>
</section>

      {/* =====================================================
          SELECTED PROJECTS
      ===================================================== */}
   {/* =====================================================
    SELECTED WORK — ABSTRACT EDITORIAL
===================================================== */}
<section
  id="projects"
  className="relative scroll-mt-0 overflow-hidden bg-[#E8E1D8] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-28"
>
  {/* BACKGROUND ABSTRACT DETAILS */}
  <div className="pointer-events-none absolute -left-[190px] top-[34%] hidden h-[380px] w-[380px] rounded-full border border-[#AFA59A]/25 lg:block" />

  <div className="pointer-events-none absolute -right-[230px] bottom-[16%] hidden h-[500px] w-[500px] rounded-full border border-[#AFA59A]/20 lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="mb-16 grid gap-7 md:grid-cols-[1fr_auto] md:items-end lg:mb-20">
      <div>
        <div className="mb-5 flex items-center gap-4">
          <p className="text-[8px] tracking-[0.32em] text-[#716A63]">
            SELECTED WORK
          </p>

          <span className="h-px w-11 bg-[#9D948A]" />
        </div>

        <h2 className="font-serif text-[40px] font-light leading-[1.05] tracking-[-0.035em] text-[#332F2B] sm:text-[47px] lg:text-[52px]">
          Recent
          <span className="italic text-[#82776D]"> spaces.</span>
        </h2>
      </div>

      <p className="max-w-[300px] text-[11px] font-light leading-[1.85] text-[#706960] md:text-right">
        Residences shaped through material, light, proportion, and the way
        everyday life unfolds.
      </p>
    </div>

    {/* =====================================================
        MERCER RESIDENCE
    ===================================================== */}
    {projects[0] && (
      <article className="relative mb-24 lg:mb-32">
        <div className="grid gap-9 lg:grid-cols-[1.35fr_.65fr] lg:items-center lg:gap-16">
          {/* IMAGE COMPOSITION */}
          <div className="group relative">
            {/* LARGE OUTLINE CIRCLE */}
            <div className="pointer-events-none absolute -left-10 -top-10 z-20 hidden h-[145px] w-[145px] rounded-full border border-[#8F857B]/45 lg:block" />

            {/* SMALL FILLED CIRCLE */}
            <div className="pointer-events-none absolute -left-3 top-[45%] z-20 hidden h-5 w-5 rounded-full bg-[#C6BCAF] lg:block" />

            {/* VERTICAL LINE */}
            <div className="pointer-events-none absolute -bottom-12 left-[18%] z-20 hidden h-20 w-px bg-[#9C9288]/60 lg:block" />

            {/* IMAGE */}
            <div
              className="relative aspect-[1.45/1] overflow-hidden bg-[#D3CBC1]"
              style={{
                borderRadius: "4px 125px 4px 4px",
              }}
            >
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
              />
            </div>

            {/* HORIZONTAL LINE OVER IMAGE EDGE */}
            <div className="pointer-events-none absolute -right-14 bottom-[18%] z-20 hidden items-center lg:flex">
              <span className="h-px w-24 bg-[#857C73]/65" />
              <span className="h-[6px] w-[6px] rounded-full bg-[#857C73]" />
            </div>
          </div>

          {/* COPY */}
          <div className="lg:pr-6">
            <p className="mb-4 text-[8px] tracking-[0.26em] text-[#8C837A]">
              FULL RESIDENCE
            </p>

            <h3 className="font-serif text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#37322E] sm:text-[39px]">
              Mercer
              <br />
              <span className="italic text-[#82776D]">
                Residence
              </span>
            </h3>

            <p className="mt-6 max-w-[300px] text-[11px] font-light leading-[1.85] text-[#706960]">
              A warm Manhattan residence grounded in natural stone,
              sculptural forms, and soft layers of texture.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-9 bg-[#8D847B]" />

              <p className="text-[8px] tracking-[0.22em] text-[#81786F]">
                SOHO · NEW YORK
              </p>
            </div>
          </div>
        </div>
      </article>
    )}

    {/* =====================================================
        HUDSON HOUSE
    ===================================================== */}
    {projects[1] && (
      <article className="relative mb-24 lg:mb-32">
        <div className="grid gap-9 lg:grid-cols-[.65fr_1.35fr] lg:items-center lg:gap-16">
          {/* COPY */}
          <div className="order-2 lg:order-1 lg:pl-8">
            <p className="mb-4 text-[8px] tracking-[0.26em] text-[#8C837A]">
              RENOVATION
            </p>

            <h3 className="font-serif text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#37322E] sm:text-[39px]">
              Hudson
              <br />
              <span className="italic text-[#82776D]">
                House
              </span>
            </h3>

            <p className="mt-6 max-w-[300px] text-[11px] font-light leading-[1.85] text-[#706960]">
              A quiet country home where warm oak, linen, stone, and the
              surrounding landscape become part of the interior.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-9 bg-[#8D847B]" />

              <p className="text-[8px] tracking-[0.22em] text-[#81786F]">
                HUDSON VALLEY · NEW YORK
              </p>
            </div>
          </div>

          {/* IMAGE COMPOSITION */}
          <div className="group relative order-1 lg:order-2">
            {/* OFFSET ARCH OUTLINE */}
            <div
              className="pointer-events-none absolute -right-5 -top-5 hidden h-full w-[72%] border border-[#9E9489]/35 lg:block"
              style={{
                borderRadius: "190px 190px 5px 5px",
              }}
            />

            {/* IMAGE */}
            <div
              className="relative aspect-[1.5/1] overflow-hidden bg-[#D3CBC1]"
              style={{
                borderRadius: "115px 4px 4px 4px",
              }}
            >
              <img
                src={projects[1].image}
                alt={projects[1].title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
              />
            </div>

            {/* FLOATING CIRCLE */}
            <div className="pointer-events-none absolute -bottom-9 right-[14%] z-20 hidden h-[90px] w-[90px] rounded-full border border-[#8F857B]/45 lg:block">
              <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F857B]" />
            </div>

            {/* SHORT LINE */}
            <div className="pointer-events-none absolute -left-12 top-[30%] hidden h-px w-20 bg-[#958B81]/60 lg:block" />
          </div>
        </div>
      </article>
    )}

    {/* =====================================================
        PARK AVENUE
    ===================================================== */}
    {projects[2] && (
      <article className="relative">
        <div className="grid gap-9 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:gap-20">
          {/* IMAGE COMPOSITION */}
          <div className="group relative lg:ml-[7%]">
            {/* LARGE FAINT CIRCLE */}
            <div className="pointer-events-none absolute -bottom-16 -left-16 hidden h-[180px] w-[180px] rounded-full border border-[#A59B90]/35 lg:block" />

            <div className="pointer-events-none absolute -bottom-9 -left-9 hidden h-[95px] w-[95px] rounded-full border border-[#A59B90]/30 lg:block" />

            {/* IMAGE */}
            <div
              className="relative aspect-[1.28/1] overflow-hidden bg-[#D3CBC1]"
              style={{
                borderRadius: "4px 4px 110px 4px",
              }}
            >
              <img
                src={projects[2].image}
                alt={projects[2].title}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
              />
            </div>

            {/* LINE THROUGH EDGE */}
            <div className="pointer-events-none absolute -right-16 top-[20%] z-20 hidden items-center lg:flex">
              <span className="h-[5px] w-[5px] rounded-full bg-[#8D847A]" />
              <span className="h-px w-24 bg-[#8D847A]/60" />
            </div>
          </div>

          {/* COPY */}
          <div>
            <p className="mb-4 text-[8px] tracking-[0.26em] text-[#8C837A]">
              INTERIOR DESIGN
            </p>

            <h3 className="font-serif text-[34px] font-light leading-[1.05] tracking-[-0.03em] text-[#37322E] sm:text-[39px]">
              Park Avenue
              <br />
              <span className="italic text-[#82776D]">
                Residence
              </span>
            </h3>

            <p className="mt-6 max-w-[300px] text-[11px] font-light leading-[1.85] text-[#706960]">
              Classic Manhattan architecture softened with sculptural
              furniture, warm textiles, and contemporary restraint.
            </p>

            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-9 bg-[#8D847B]" />

              <p className="text-[8px] tracking-[0.22em] text-[#81786F]">
                UPPER EAST SIDE · NEW YORK
              </p>
            </div>
          </div>
        </div>
      </article>
    )}
  </div>
</section>

{/* =====================================================
    VERRA STATEMENT — COMPACT TRANSITION
===================================================== */}
<section className="relative overflow-hidden bg-[#4B443D] px-6 py-20 text-[#F5F1EA] sm:px-10 md:px-14 lg:px-24 lg:py-24">
  {/* ABSTRACT CIRCLES */}
  <div className="pointer-events-none absolute -left-[160px] -top-[220px] h-[420px] w-[420px] rounded-full border border-white/[0.07]" />

  <div className="pointer-events-none absolute -left-[90px] -top-[150px] h-[280px] w-[280px] rounded-full border border-white/[0.05]" />

  {/* RIGHT LINE */}
  <div className="pointer-events-none absolute right-[13%] top-0 hidden h-[80px] w-px bg-white/[0.12] lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-20">
      {/* LEFT */}
      <div>
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[8px] tracking-[0.3em] text-white/45">
            THE VERRA APPROACH
          </p>

          <span className="h-px w-10 bg-white/25" />
        </div>

        <p className="max-w-[720px] font-serif text-[37px] font-light leading-[1.1] tracking-[-0.03em] text-[#F5F1EA] sm:text-[44px] lg:text-[49px]">
          A home should feel
          <span className="italic text-[#C8BDB1]">
            {" "}collected,
          </span>
          <br className="hidden sm:block" />
          not decorated.
        </p>
      </div>

      {/* RIGHT */}
      <div className="lg:border-l lg:border-white/[0.14] lg:pl-9">
        <p className="max-w-[340px] text-[11px] font-light leading-[1.9] text-white/55">
          We design with restraint, warmth, and longevity in mind — allowing
          every material and object to have a reason for being there.
        </p>

        <div className="mt-6 flex items-center gap-4">
          <span className="h-[4px] w-[4px] rounded-full bg-[#C8BDB1]" />

          <p className="text-[7px] tracking-[0.24em] text-white/40">
            WARM · PERSONAL · ENDURING
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
{/* =====================================================
    SERVICES — CLEAN / EDITORIAL / ABSTRACT
===================================================== */}
<section
  id="services"
  className="relative overflow-hidden bg-[#F2EEE8] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24"
>
  {/* =====================================================
      LARGE BACKGROUND CURVE
  ===================================================== */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-[230px] -top-[260px] hidden h-[520px] w-[520px] rounded-full border border-[#A99F94]/20 lg:block"
  />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="grid gap-7 border-b border-[#AAA196]/50 pb-10 md:grid-cols-[1fr_360px] md:items-end">
      <div>
        <div className="mb-5 flex items-center gap-4">
          <p className="text-[8px] tracking-[0.32em] text-[#716A63]">
            WHAT WE DO
          </p>

          <span className="h-px w-10 bg-[#9B9288]" />
        </div>

        <h2 className="font-serif text-[38px] font-light leading-[1.07] tracking-[-0.035em] text-[#332F2B] sm:text-[44px] lg:text-[48px]">
          Design for the way
          <br />
          <span className="italic text-[#82776D]">
            you want to live.
          </span>
        </h2>
      </div>

      <p className="max-w-[340px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
        From early concepts through the final layer, we shape every part of
        the home as one considered whole.
      </p>
    </div>

    {/* =====================================================
        SERVICES
    ===================================================== */}
    <div className="relative mt-12 lg:mt-14">
      {/* CONTINUOUS ABSTRACT LINE */}
      <div className="pointer-events-none absolute left-[6%] right-[6%] top-[48px] hidden items-center lg:flex">
        <span className="h-px flex-1 bg-[#AAA196]/45" />

        <span className="mx-3 h-[7px] w-[7px] rounded-full border border-[#8E857B]" />

        <span className="h-px flex-1 bg-[#AAA196]/45" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {services.map((service, index) => {
          const labels = [
            "COMPLETE INTERIORS",
            "TRANSFORMATION",
            "FUNCTION & MATERIAL",
            "FINAL LAYER",
          ];

          const radius =
            index === 0
              ? "4px 55px 4px 4px"
              : index === 1
              ? "55px 4px 4px 4px"
              : index === 2
              ? "4px 4px 55px 4px"
              : "4px 4px 4px 55px";

          return (
            <article
              key={service.title}
              onClick={() => navigateTo("/preview/verra/services")}
              className="group relative cursor-pointer pt-7 lg:pt-20"
            >
              {/* SMALL CONNECTION DOT */}
              <div className="absolute left-1/2 top-[45px] z-10 hidden h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#8E857B] lg:block" />

              {/* SERVICE PANEL */}
              <div
                className="relative flex min-h-[270px] flex-col justify-between overflow-hidden border border-[#AAA196]/45 bg-[#EAE5DE]/50 px-7 py-8 transition-all duration-500 hover:bg-[#E5DED5]/75 sm:min-h-[285px] lg:min-h-[300px] lg:px-8 lg:py-9"
                style={{
                  borderRadius: radius,
                }}
              >
                {/* VERY SUBTLE CIRCLE — SAME ON EVERY CARD */}
                <div className="pointer-events-none absolute -right-[55px] -top-[55px] h-[125px] w-[125px] rounded-full border border-[#A99F94]/20" />

                {/* TOP */}
                <div className="relative z-10">
                  <p className="text-[7px] tracking-[0.24em] text-[#91887F]">
                    {labels[index]}
                  </p>
                </div>

                {/* BOTTOM */}
                <div className="relative z-10">
                  <h3 className="max-w-[220px] font-serif text-[25px] font-light leading-[1.08] tracking-[-0.025em] text-[#39342F] sm:text-[27px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-[250px] text-[10.5px] font-light leading-[1.8] text-[#706960]">
                    {service.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-7 bg-[#8D847A] transition-all duration-500 group-hover:w-11" />

                    <span className="text-[7px] tracking-[0.22em] text-[#81786F]">
                      EXPLORE
                    </span>

                    <SleekArrow />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>

    {/* =====================================================
        FOOTER
    ===================================================== */}
    <div className="mt-12 flex flex-col gap-5 border-t border-[#AAA196]/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[7px] tracking-[0.24em] text-[#8C847B]">
        FULL-SERVICE RESIDENTIAL DESIGN
      </p>

      <button
        onClick={() => navigateTo("/preview/verra/start-project")}
        className="group flex w-fit items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.22em] text-[#625C56]">
          DISCUSS YOUR PROJECT
        </span>

        <span className="h-px w-8 bg-[#7C746C] transition-all duration-500 group-hover:w-12" />

        <SleekArrow />
      </button>
    </div>
  </div>
</section>

      {/* =====================================================
          FEATURED PROJECT
      ===================================================== */}
     {/* =====================================================
    FEATURED PROJECT — EDITORIAL / REFINED
===================================================== */}
<section className="relative overflow-hidden bg-[#DCD4CA] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
  {/* LARGE BACKGROUND CIRCLE */}
  <div className="pointer-events-none absolute -right-[210px] -top-[210px] hidden h-[460px] w-[460px] rounded-full border border-[#A69C91]/25 lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        TOP LABEL
    ===================================================== */}
    <div className="mb-10 flex items-center gap-4 lg:mb-12">
      <p className="text-[8px] tracking-[0.32em] text-[#6F675F]">
        FEATURED PROJECT
      </p>

      <span className="h-px w-11 bg-[#948A80]" />
    </div>

    {/* =====================================================
        MAIN COMPOSITION
    ===================================================== */}
    <div className="grid gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-center lg:gap-20">
      {/* =====================================================
          IMAGE
      ===================================================== */}
      <div className="group relative">
        {/* OFFSET OUTLINE */}
        <div
          className="pointer-events-none absolute -left-4 -top-4 hidden h-full w-full border border-[#9F958A]/35 lg:block"
          style={{
            borderRadius: "4px 130px 4px 4px",
          }}
        />

        {/* IMAGE */}
        <div
          className="relative aspect-[1.35/1] overflow-hidden bg-[#CFC6BB]"
          style={{
            borderRadius: "4px 130px 4px 4px",
          }}
        >
          <img
            src="/previews/verra/featured-project.jpg"
            alt="Mercer Residence"
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
          />

          {/* SUBTLE WARM OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-[#55483C]/[0.025]" />
        </div>

        {/* ABSTRACT CIRCLE */}
        <div className="pointer-events-none absolute -bottom-9 -right-9 hidden h-[110px] w-[110px] rounded-full border border-[#81776D]/50 lg:block">
          <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#81776D]" />
        </div>

        {/* LINE COMING FROM IMAGE */}
        <div className="pointer-events-none absolute -right-16 top-[26%] z-20 hidden items-center lg:flex">
          <span className="h-px w-20 bg-[#81776D]/55" />
          <span className="h-[5px] w-[5px] rounded-full bg-[#81776D]" />
        </div>

        {/* IMAGE CAPTION */}
        <div className="absolute bottom-5 left-5 bg-[#E8E1D8]/90 px-4 py-2 backdrop-blur-sm sm:bottom-6 sm:left-6">
          <p className="text-[7px] tracking-[0.23em] text-[#6F675F]">
            SOHO · NEW YORK
          </p>
        </div>
      </div>

      {/* =====================================================
          PROJECT DETAILS
      ===================================================== */}
      <div className="relative lg:pl-2">
        <p className="mb-5 text-[8px] tracking-[0.27em] text-[#81786F]">
          FULL RESIDENCE
        </p>

        <h2 className="font-serif text-[38px] font-light leading-[1.03] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[49px]">
          Mercer
          <br />

          <span className="italic text-[#80756B]">
            Residence
          </span>
        </h2>

        {/* SHORT DESCRIPTION */}
        <p className="mt-7 max-w-[390px] text-[11px] font-light leading-[1.9] text-[#625C55]">
          A warm, restrained Manhattan residence where natural stone,
          soft textiles, and sculptural forms create an atmosphere that
          feels elevated yet deeply comfortable.
        </p>

        {/* DETAILS */}
        <div className="mt-8 border-y border-[#A79D92]/55 py-5">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-[7px] tracking-[0.24em] text-[#8B8278]">
                LOCATION
              </p>

              <p className="mt-2 font-serif text-[14px] font-light text-[#48413B]">
                SoHo, New York
              </p>
            </div>

            <div>
              <p className="text-[7px] tracking-[0.24em] text-[#8B8278]">
                SCOPE
              </p>

              <p className="mt-2 font-serif text-[14px] font-light text-[#48413B]">
                Full Residence
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigateTo("/preview/verra/start-project")}
          className="group mt-7 flex items-center gap-4"
        >
          <span className="text-[8px] tracking-[0.23em] text-[#625C56]">
            DISCUSS A SIMILAR PROJECT
          </span>

          <span className="h-px w-8 bg-[#746B63] transition-all duration-500 group-hover:w-12" />

          <SleekArrow />
        </button>

        {/* SMALL SIGNATURE */}
        <div className="mt-10 flex items-center gap-4">
          <span className="h-[4px] w-[4px] rounded-full bg-[#8A8178]" />

          <p className="font-serif text-[12px] italic text-[#81776D]">
            spaces, considered.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          STUDIO
      ===================================================== */}
      {/* =====================================================
    THE STUDIO — EDITORIAL / REFINED
===================================================== */}
<section
  id="studio"
  className="relative overflow-hidden bg-[#F3EFE9] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24"
>
  {/* =====================================================
      BACKGROUND DETAIL
  ===================================================== */}
  <div className="pointer-events-none absolute -left-[210px] bottom-[-250px] hidden h-[470px] w-[470px] rounded-full border border-[#AAA095]/20 lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        TOP LABEL
    ===================================================== */}
    <div className="mb-10 flex items-center gap-4 lg:mb-12">
      <p className="text-[8px] tracking-[0.32em] text-[#716A63]">
        THE STUDIO
      </p>

      <span className="h-px w-11 bg-[#9D948A]" />
    </div>

    {/* =====================================================
        MAIN COMPOSITION
    ===================================================== */}
    <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-center lg:gap-20">
      {/* =====================================================
          LEFT — COPY
      ===================================================== */}
      <div className="relative z-20">
        <p className="mb-5 text-[8px] tracking-[0.26em] text-[#91887F]">
          VERRA · NEW YORK
        </p>

        <h2 className="max-w-[500px] font-serif text-[38px] font-light leading-[1.07] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[49px]">
          Design rooted in
          <br />
          <span className="italic text-[#82776D]">
            how you live.
          </span>
        </h2>

        {/* SMALL ACCENT */}
        <div className="my-7 flex items-center gap-4">
          <span className="h-[5px] w-[5px] rounded-full bg-[#887F76]" />

          <span className="h-px w-12 bg-[#9C9389]" />
        </div>

        <p className="max-w-[430px] text-[11px] font-light leading-[1.9] text-[#69635C]">
          VERRA is a residential interior design studio creating calm,
          layered spaces with a distinctly modern sensibility.
        </p>

        <p className="mt-4 max-w-[430px] text-[11px] font-light leading-[1.9] text-[#69635C]">
          We believe the most enduring interiors begin with listening —
          understanding not only what our clients love, but how they
          actually live.
        </p>

        {/* BOTTOM THOUGHT */}
        <div className="mt-8 border-l border-[#9E958B]/60 pl-5">
          <p className="max-w-[320px] font-serif text-[15px] font-light italic leading-[1.5] text-[#766C63]">
            Refined without feeling precious.
            <br />
            Personal without relying on trends.
          </p>
        </div>
      </div>

      {/* =====================================================
          RIGHT — IMAGE COMPOSITION
      ===================================================== */}
      <div className="relative lg:pl-5">
        {/* OFFSET OUTLINE */}
        <div
          className="pointer-events-none absolute -right-4 -top-4 hidden h-full w-[92%] border border-[#A79D92]/35 lg:block"
          style={{
            borderRadius: "115px 4px 115px 4px",
          }}
        />

        {/* IMAGE */}
        <div
          className="group relative aspect-[1.25/1] overflow-hidden bg-[#D9D2C8]"
          style={{
            borderRadius: "115px 4px 115px 4px",
          }}
        >
          <img
            src="/previews/verra/studio.jpg"
            alt="Verra design studio"
            className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-[1.02]"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#564A3E]/[0.025]" />
        </div>

        {/* =====================================================
            CIRCLE OVERLAP
        ===================================================== */}
        <div className="pointer-events-none absolute -left-8 top-[18%] z-20 hidden h-[105px] w-[105px] rounded-full border border-[#887E74]/45 lg:block">
          <div className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#887E74]" />
        </div>

        {/* SMALL LINE */}
        <div className="pointer-events-none absolute -left-16 top-[calc(18%+52px)] z-20 hidden items-center lg:flex">
          <span className="h-px w-10 bg-[#887E74]/55" />
        </div>

        {/* =====================================================
            FLOATING IMAGE NOTE
        ===================================================== */}
        <div className="relative -mt-7 ml-auto mr-5 w-[82%] bg-[#E7E0D7] px-6 py-5 shadow-[0_14px_35px_rgba(62,54,47,0.05)] sm:w-[68%] lg:-mt-8 lg:mr-8 lg:w-[58%]">
          <div className="flex items-start gap-4">
            <span className="mt-[7px] h-px w-8 shrink-0 bg-[#8F867D]" />

            <div>
              <p className="font-serif text-[14px] font-light italic leading-[1.5] text-[#625A53]">
                A thoughtful home begins with understanding the life
                happening inside it.
              </p>

              <p className="mt-3 text-[7px] tracking-[0.24em] text-[#928980]">
                THE VERRA APPROACH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* =====================================================
        BOTTOM DETAIL
    ===================================================== */}
    <div className="mt-14 flex items-center justify-between border-t border-[#AAA196]/50 pt-5">
      <p className="text-[7px] tracking-[0.24em] text-[#8D857C]">
        RESIDENTIAL INTERIORS · NEW YORK
      </p>

      <div className="hidden items-center gap-4 sm:flex">
        <span className="h-px w-8 bg-[#A0988E]" />

        <p className="font-serif text-[12px] italic text-[#81776D]">
          spaces, considered.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
     {/* =====================================================
    PROCESS — REFINED / CONNECTED
===================================================== */}
<section className="relative overflow-hidden bg-[#E6DED4] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
  {/* =====================================================
      BACKGROUND DETAIL
  ===================================================== */}
  <div className="pointer-events-none absolute -right-[210px] bottom-[-270px] hidden h-[470px] w-[470px] rounded-full border border-[#A69C91]/20 lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        HEADER
    ===================================================== */}
    <div className="grid gap-7 md:grid-cols-[1fr_330px] md:items-end">
      <div>
        <div className="mb-5 flex items-center gap-4">
          <p className="text-[8px] tracking-[0.32em] text-[#716A63]">
            OUR PROCESS
          </p>

          <span className="h-px w-10 bg-[#9B9288]" />
        </div>

        <h2 className="font-serif text-[38px] font-light leading-[1.07] tracking-[-0.035em] text-[#332F2B] sm:text-[44px] lg:text-[48px]">
          From idea
          <span className="italic text-[#82776D]"> to home.</span>
        </h2>
      </div>

      <p className="max-w-[330px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
        A clear, collaborative process designed to make creating your home
        feel as considered as the finished space.
      </p>
    </div>

    {/* =====================================================
        PROCESS PATH
    ===================================================== */}
    <div className="relative mt-14 lg:mt-16">
      {/* CONTINUOUS LINE — DESKTOP */}
      <div className="pointer-events-none absolute left-[10%] right-[10%] top-[28px] hidden h-px bg-[#968C82]/55 lg:block" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
        {process.map(([number, title, text], index) => (
          <article
            key={title}
            className="group relative lg:pt-[58px]"
          >
            {/* =================================================
                STEP MARKER
            ================================================= */}
            <div className="relative z-10 mb-5 flex items-center gap-4 lg:absolute lg:left-7 lg:top-0 lg:mb-0">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#91877D]/65 bg-[#E6DED4] transition-all duration-500 group-hover:bg-[#D9D0C5]">
                <span className="h-[5px] w-[5px] rounded-full bg-[#7E756C]" />
              </div>

              {/* MOBILE LINE */}
              <span className="h-px w-10 bg-[#9C9288]/55 lg:hidden" />
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}
            <div
              className="relative min-h-[220px] overflow-hidden border border-[#A79D92]/45 bg-[#EAE3DA]/55 px-7 py-8 transition-colors duration-500 group-hover:bg-[#EDE7DF]/90 lg:min-h-[235px]"
              style={{
                borderRadius:
                  index === 0
                    ? "4px 38px 4px 4px"
                    : index === 3
                    ? "4px 4px 38px 4px"
                    : "4px",
              }}
            >
              {/* VERY SUBTLE INTERNAL ARC */}
              {index === 0 && (
                <div className="pointer-events-none absolute -right-12 -top-12 h-[110px] w-[110px] rounded-full border border-[#A79D92]/20" />
              )}

              {index === 3 && (
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-[110px] w-[110px] rounded-full border border-[#A79D92]/20" />
              )}

              <div className="relative z-10 flex h-full min-h-[160px] flex-col justify-between">
                <div>
                  <p className="text-[7px] tracking-[0.25em] text-[#91887F]">
                    {index === 0
                      ? "UNDERSTAND"
                      : index === 1
                      ? "ESTABLISH"
                      : index === 2
                      ? "CREATE"
                      : "COMPLETE"}
                  </p>

                  <h3 className="mt-5 font-serif text-[27px] font-light tracking-[-0.025em] text-[#3C3732]">
                    {title}
                  </h3>
                </div>

                <p className="mt-6 max-w-[240px] text-[10.5px] font-light leading-[1.8] text-[#6D665E]">
                  {text}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* =====================================================
        BOTTOM DETAIL
    ===================================================== */}
    <div className="mt-12 flex flex-col gap-4 border-t border-[#9E9589]/50 pt-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <span className="h-[4px] w-[4px] rounded-full bg-[#857C73]" />

        <p className="text-[7px] tracking-[0.24em] text-[#8D857C]">
          THOUGHTFUL FROM START TO FINISH
        </p>
      </div>

      <button
        onClick={() => navigateTo("/preview/verra/start-project")}
        className="group flex w-fit items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.22em] text-[#625C56]">
          START A PROJECT
        </span>

        <span className="h-px w-8 bg-[#7C746C] transition-all duration-500 group-hover:w-12" />

        <SleekArrow />
      </button>
    </div>
  </div>
</section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
{/* =====================================================
    CONTACT — REFINED / EDITORIAL
===================================================== */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#49423C] px-6 py-20 text-[#F6F1EA] sm:px-10 md:px-14 lg:px-24 lg:py-24"
>
  {/* =====================================================
      BACKGROUND DETAILS
  ===================================================== */}

  {/* LARGE PARTIAL CIRCLE */}
  <div className="pointer-events-none absolute -left-[260px] -top-[270px] hidden h-[540px] w-[540px] rounded-full border border-white/[0.07] lg:block" />

  {/* SMALLER INNER CIRCLE */}
  <div className="pointer-events-none absolute -left-[145px] -top-[155px] hidden h-[310px] w-[310px] rounded-full border border-white/[0.05] lg:block" />

  {/* RIGHT VERTICAL LINE */}
  <div className="pointer-events-none absolute right-[10%] top-0 hidden h-[85px] w-px bg-white/[0.12] lg:block" />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        TOP LABEL
    ===================================================== */}
    <div className="mb-12 flex items-center gap-4">
      <p className="text-[8px] tracking-[0.32em] text-white/50">
        START A PROJECT
      </p>

      <span className="h-px w-10 bg-white/25" />
    </div>

    {/* =====================================================
        MAIN GRID
    ===================================================== */}
    <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:items-start lg:gap-20">
      {/* =====================================================
          LEFT
      ===================================================== */}
      <div className="lg:pt-5">
        <p className="mb-5 text-[8px] tracking-[0.25em] text-white/35">
          LET&apos;S BEGIN
        </p>

        <h2 className="max-w-[520px] font-serif text-[39px] font-light leading-[1.06] tracking-[-0.035em] text-[#F6F1EA] sm:text-[46px] lg:text-[51px]">
          Let&apos;s create a home
          <br />
          <span className="italic text-[#C8BDB1]">
            that feels like you.
          </span>
        </h2>

        <p className="mt-7 max-w-[390px] text-[11px] font-light leading-[1.9] text-white/55">
          Tell us a little about your home, your ideas, and what you&apos;re
          hoping to create. We&apos;ll be in touch to begin the conversation.
        </p>

        {/* SMALL EDITORIAL DETAIL */}
        <div className="mt-10 flex items-center gap-5">
          <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/25">
            <span className="h-[4px] w-[4px] rounded-full bg-[#C8BDB1]" />
          </div>

          <div>
            <p className="text-[7px] tracking-[0.24em] text-white/45">
              BASED IN NEW YORK
            </p>

            <p className="mt-1 font-serif text-[12px] italic text-white/65">
              Available for select projects.
            </p>
          </div>
        </div>

        {/* SMALL LINE */}
        <div className="mt-10 hidden items-center gap-4 lg:flex">
          <span className="h-px w-14 bg-white/20" />

          <p className="font-serif text-[12px] italic text-white/35">
            spaces, considered.
          </p>
        </div>
      </div>

      {/* =====================================================
          FORM PANEL
      ===================================================== */}
      <div className="relative">
        {/* OFFSET OUTLINE */}
        <div
          className="pointer-events-none absolute -right-3 -top-3 hidden h-full w-full border border-white/[0.09] lg:block"
          style={{
            borderRadius: "4px 65px 4px 4px",
          }}
        />

        <form
          onSubmit={(event) => event.preventDefault()}
          className="relative grid gap-x-8 gap-y-8 border border-white/[0.12] bg-white/[0.035] px-6 py-8 backdrop-blur-[2px] sm:grid-cols-2 sm:px-8 sm:py-9 lg:px-10 lg:py-10"
          style={{
            borderRadius: "4px 65px 4px 4px",
          }}
        >
          {/* NAME */}
          <label>
            <span className="mb-3 block text-[7px] tracking-[0.24em] text-white/40">
              NAME
            </span>

            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-white/25 bg-transparent py-3 text-[12px] font-light text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/65"
            />
          </label>

          {/* EMAIL */}
          <label>
            <span className="mb-3 block text-[7px] tracking-[0.24em] text-white/40">
              EMAIL
            </span>

            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-white/25 bg-transparent py-3 text-[12px] font-light text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/65"
            />
          </label>

          {/* LOCATION */}
          <label>
            <span className="mb-3 block text-[7px] tracking-[0.24em] text-white/40">
              LOCATION
            </span>

            <input
              type="text"
              placeholder="Project location"
              className="w-full border-b border-white/25 bg-transparent py-3 text-[12px] font-light text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/65"
            />
          </label>

          {/* PROJECT TYPE */}
          <label>
            <span className="mb-3 block text-[7px] tracking-[0.24em] text-white/40">
              PROJECT TYPE
            </span>

            <input
              type="text"
              placeholder="Interior / Renovation"
              className="w-full border-b border-white/25 bg-transparent py-3 text-[12px] font-light text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/65"
            />
          </label>

          {/* PROJECT DETAILS */}
          <label className="sm:col-span-2">
            <span className="mb-3 block text-[7px] tracking-[0.24em] text-white/40">
              TELL US ABOUT YOUR PROJECT
            </span>

            <textarea
              rows={3}
              placeholder="A little about your space, timeline, and vision..."
              className="w-full resize-none border-b border-white/25 bg-transparent py-3 text-[12px] font-light leading-6 text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white/65"
            />
          </label>

          {/* =================================================
              SUBMIT
          ================================================= */}
          <div className="flex flex-col gap-4 pt-1 sm:col-span-2 sm:flex-row sm:items-end sm:justify-between">
            <button
              type="submit"
              className="group flex w-full items-center justify-between border border-white/35 px-6 py-4 transition-all duration-500 hover:bg-[#F3EEE7] hover:text-[#49423C] sm:w-[225px]"
            >
              <span className="text-[8px] tracking-[0.24em]">
                SEND INQUIRY
              </span>

              <span className="flex items-center gap-0">
                <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-9" />

                <span className="-ml-[3px] text-[11px]">
                  
                </span>
              </span>
            </button>

            <p className="max-w-[250px] text-[7px] leading-[1.7] tracking-[0.16em] text-white/25 sm:text-right">
              CONCEPT DEMONSTRATION
              <br />
              SUBMISSIONS ARE DISABLED.
            </p>
          </div>

          {/* SUBTLE INTERNAL CIRCLE */}
          <div className="pointer-events-none absolute -bottom-[65px] -right-[65px] h-[145px] w-[145px] rounded-full border border-white/[0.06]" />
        </form>
      </div>
    </div>

    {/* =====================================================
        BOTTOM
    ===================================================== */}
    <div className="mt-16 flex flex-col gap-4 border-t border-white/[0.14] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-[7px] tracking-[0.24em] text-white/30">
        VERRA · INTERIOR DESIGN STUDIO
      </p>

      <div className="flex items-center gap-4">
        <span className="h-[4px] w-[4px] rounded-full bg-[#C8BDB1]/70" />

        <p className="text-[7px] tracking-[0.22em] text-white/30">
          NEW YORK
        </p>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
{/* =====================================================
    FOOTER
===================================================== */}
<footer className="bg-[#312D29] px-6 pb-8 pt-16 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24 lg:pt-20">
  <div className="mx-auto max-w-[1380px]">
    {/* =====================================================
        MAIN FOOTER
    ===================================================== */}
    <div className="grid gap-14 pb-14 md:grid-cols-2 lg:grid-cols-[1.55fr_.7fr_.7fr_.9fr] lg:gap-12 lg:pb-16">
      {/* =====================================================
          BRAND
      ===================================================== */}
      <div>
        <button
          onClick={() => navigateTo("/preview/verra")}
          className="text-left"
          aria-label="Back to top"
        >
          <p className="font-serif text-[34px] font-light tracking-[0.28em] text-[#F4EFE8] sm:text-[38px]">
            VERRA
          </p>
        </button>

        <p className="mt-4 font-serif text-[14px] font-light italic text-[#C7BAAC]">
          spaces, considered.
        </p>

        <p className="mt-6 max-w-[320px] text-[10px] font-light leading-[1.9] text-white/45">
          Residential interiors shaped through thoughtful materials,
          considered details, and the way you live.
        </p>
      </div>

      {/* =====================================================
          EXPLORE
      ===================================================== */}
      <div>
        <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
          EXPLORE
        </p>

        <div className="flex flex-col items-start gap-4">
          {[
            ["Home", "/preview/verra"],
            ["Projects", "/preview/verra/projects"],
            ["Services", "/preview/verra/services"],
            ["Studio", "/preview/verra/studio"],
            ["Contact", "/preview/verra/contact"],
          ].map(([label, path]) => (
            <button
              key={path}
              onClick={() => navigateTo(path)}
              className="text-[10px] font-light text-white/60 transition-colors duration-300 hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <div>
        <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
          SERVICES
        </p>

        <div className="flex flex-col gap-4 text-[10px] font-light text-white/60">
          <p>Interior Design</p>
          <p>Renovation</p>
          <p>Kitchens &amp; Baths</p>
          <p>Furnishing &amp; Styling</p>
        </div>
      </div>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <div>
        <p className="mb-6 text-[7px] tracking-[0.28em] text-white/30">
          CONTACT
        </p>

        <div className="space-y-4">
          <p className="text-[10px] font-light text-white/60">
            New York, NY
          </p>

          <button
            onClick={() => navigateTo("/preview/verra/start-project")}
            className="group flex items-center gap-3 text-left"
          >
            <span className="text-[10px] font-light text-white/60 transition-colors duration-300 group-hover:text-white">
              Start a Project
            </span>

            <span className="h-px w-5 bg-white/35 transition-all duration-300 group-hover:w-8 group-hover:bg-white/70" />

            <SleekArrow />
          </button>
        </div>
      </div>
    </div>

    {/* =====================================================
        DIVIDER
    ===================================================== */}
    <div className="h-px w-full bg-white/[0.12]" />

    {/* =====================================================
        BOTTOM FOOTER
    ===================================================== */}
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

      {/* =====================================================
          STYLES
      ===================================================== */}
      <style jsx>{`
        .nav-link {
          position: relative;
          padding: 8px 0;
          font-size: 10px;
          letter-spacing: 0.24em;
          color: rgba(255, 255, 255, 0.92);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 1px;
          width: 0;
          height: 1px;
          background: white;
          transition: width 400ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .nav-link:hover::after {
          width: calc(100% - 0.24em);
        }

        .section-label {
          font-size: 9px;
          letter-spacing: 0.3em;
          color: #777067;
        }

        .body-copy {
          font-size: 12px;
          line-height: 1.9;
          color: #6d675f;
        }

        .detail-label {
          margin-bottom: 8px;
          font-size: 8px;
          letter-spacing: 0.23em;
          color: #837a70;
        }

        .detail-value {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
        }

        .hero-in {
          opacity: 0;
          transform: translateY(14px);
          animation: heroIn 1.05s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .hero-delay-1 {
          animation-delay: 120ms;
        }

        .hero-delay-2 {
          animation-delay: 230ms;
        }

        .hero-delay-3 {
          animation-delay: 340ms;
        }

        @keyframes heroIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-in {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */


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

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`relative flex w-7 items-center ${
        dark ? "text-[#39332E]" : "text-current"
      }`}
    >
      <span className="h-px w-6 bg-current" />
      <span className="absolute right-0 h-[7px] w-[7px] rotate-45 border-r border-t border-current" />
    </span>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <label>
      <span className="mb-3 block text-[8px] tracking-[0.24em] text-white/45">
        {label}
      </span>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-b border-white/30 bg-transparent py-3 text-[13px] text-white outline-none placeholder:text-white/30 focus:border-white/70"
      />
    </label>
  );
}