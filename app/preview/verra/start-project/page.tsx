"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function VerraStartProjectPage() {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const goHome = () => router.push("/preview/verra");
  const goProjects = () => router.push("/preview/verra/projects");
  const goServices = () => router.push("/preview/verra/services");
  const goStudio = () => router.push("/preview/verra/studio");
  const goContact = () => router.push("/preview/verra/contact");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Concept project only — nothing is actually submitted.
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
              onClick={goServices}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              SERVICES
            </button>

            <button
              onClick={goStudio}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              STUDIO
            </button>

            <button
              onClick={goContact}
              className="text-[8px] tracking-[0.24em] text-white/70 transition-colors duration-300 hover:text-white"
            >
              CONTACT
            </button>

            <span className="border border-white/70 bg-white px-5 py-3 text-[8px] tracking-[0.22em] text-[#39332E]">
              START A PROJECT
            </span>
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
          <div className="mx-6 bg-[#312D29]/95 px-6 py-7 backdrop-blur-md sm:mx-10 md:hidden">
            <div className="flex flex-col items-start gap-5">
              <button
                onClick={goProjects}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
                PROJECTS
              </button>

              <button
                onClick={goServices}
                className="text-[9px] tracking-[0.24em] text-white/65"
              >
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
                CONTACT
              </button>

              <span className="text-[9px] tracking-[0.24em] text-white">
                START A PROJECT
              </span>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[58svh] items-end overflow-hidden bg-[#625950]">
        <img
          src="/previews/verra/project-hudson.jpg"
          alt="Verra residential interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2C2722]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#29231F]/80 via-[#29231F]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/45 via-transparent to-[#29231F]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 pb-14 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-white/55" />

            <p className="text-[8px] tracking-[0.32em] text-white/75">
              NEW PROJECT INQUIRY
            </p>
          </div>

          <h1
            className="max-w-[680px] text-[48px] font-normal leading-[0.97] tracking-[-0.04em] text-[#FFFDF9] sm:text-[58px] md:text-[64px] lg:text-[69px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Let&apos;s begin with
            <br />

            <span className="italic text-white/90">
              your home.
            </span>
          </h1>

          <p className="mt-6 max-w-[420px] text-[11px] font-light leading-[1.85] text-white/70">
            Tell us about your space, your priorities, and what you&apos;re
            hoping to create. This helps us understand your project before
            our first conversation.
          </p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-16 sm:px-10 md:px-14 lg:px-24 lg:py-20">
        <div className="mx-auto grid max-w-[1380px] gap-10 border-b border-[#AAA196]/50 pb-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-4">
              <p className="text-[8px] tracking-[0.3em] text-[#80776E]">
                START A PROJECT
              </p>

              <span className="h-px w-10 bg-[#A39A90]" />
            </div>
          </div>

          <div>
            <h2
              className="max-w-[720px] text-[38px] font-normal leading-[1.07] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Every project begins
              <br />

              <span className="italic text-[#81766C]">
                with understanding.
              </span>
            </h2>

            <p className="mt-7 max-w-[600px] text-[11px] font-light leading-[1.9] text-[#6D665F]">
              The information below gives our studio a first look at your
              home, project scope, timing, and priorities. You don&apos;t need
              to have every detail figured out — this is simply where the
              conversation begins.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FORM
      ===================================================== */}
      <section className="px-6 pb-24 sm:px-10 md:px-14 lg:px-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[.62fr_1.38fr] lg:gap-24">
          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}
          <aside>
            <div className="lg:sticky lg:top-12">
              <p className="text-[7px] tracking-[0.28em] text-[#91887F]">
                PROJECT INQUIRY
              </p>

              <h3
                className="mt-5 max-w-[310px] text-[29px] font-normal leading-[1.08] tracking-[-0.025em] text-[#403A35]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                A few details about
                <span className="italic text-[#81766C]">
                  {" "}
                  what you&apos;re imagining.
                </span>
              </h3>

              <p className="mt-5 max-w-[320px] text-[10px] font-light leading-[1.85] text-[#706960]">
                VERRA works on select residential projects with an emphasis
                on thoughtful, highly considered interiors.
              </p>

              {/* DETAILS */}
              <div className="mt-9 border-t border-[#AAA196]/50 pt-6">
                <p className="text-[7px] tracking-[0.24em] text-[#91887F]">
                  PROJECT TYPES
                </p>

                <div className="mt-4 space-y-2 text-[10px] font-light text-[#665F58]">
                  <p>Full Residence</p>
                  <p>Renovation</p>
                  <p>Kitchens &amp; Baths</p>
                  <p>Furnishing &amp; Styling</p>
                </div>
              </div>

              <div className="mt-7 border-t border-[#AAA196]/50 pt-6">
                <p className="text-[7px] tracking-[0.24em] text-[#91887F]">
                  LOCATION
                </p>

                <p
                  className="mt-3 text-[14px] text-[#514A44]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  New York
                </p>

                <p className="mt-2 text-[9px] font-light leading-[1.7] text-[#7A726A]">
                  Available for select projects beyond New York.
                </p>
              </div>

              <div className="mt-7 border-t border-[#AAA196]/50 pt-6">
                <p className="text-[7px] tracking-[0.24em] text-[#91887F]">
                  GENERAL QUESTIONS
                </p>

                <button
                  onClick={goContact}
                  className="group mt-3 flex items-center gap-3"
                >
                  <span className="text-[10px] font-light text-[#625C56]">
                    Visit Contact
                  </span>

                  <span className="h-px w-6 bg-[#8D847A] transition-all duration-500 group-hover:w-9" />

                  <SleekArrow />
                </button>
              </div>
            </div>
          </aside>

          {/* =================================================
              FORM
          ================================================= */}
          <form onSubmit={handleSubmit}>
            {/* =================================================
                01 — ABOUT YOU
            ================================================= */}
            <FormSection
              eyebrow="ABOUT YOU"
              title="First, tell us a little about yourself."
            >
              <div className="grid gap-x-9 gap-y-9 sm:grid-cols-2">
                <ProjectField
                  label="FIRST NAME"
                  placeholder="First name"
                  required
                />

                <ProjectField
                  label="LAST NAME"
                  placeholder="Last name"
                  required
                />

                <ProjectField
                  label="EMAIL"
                  placeholder="Email address"
                  type="email"
                  required
                />

                <ProjectField
                  label="PHONE"
                  placeholder="Phone number"
                  type="tel"
                />
              </div>
            </FormSection>

            {/* =================================================
                02 — PROPERTY
            ================================================= */}
            <FormSection
              eyebrow="YOUR HOME"
              title="Tell us about the property."
            >
              <div className="grid gap-x-9 gap-y-9 sm:grid-cols-2">
                <ProjectField
                  label="PROJECT LOCATION"
                  placeholder="City, State"
                  required
                />

                <ProjectSelect
                  label="PROPERTY TYPE"
                  required
                  options={[
                    ["", "Select property type"],
                    ["apartment", "Apartment"],
                    ["townhouse", "Townhouse"],
                    ["single-family", "Single-Family Home"],
                    ["vacation", "Vacation Home"],
                    ["other", "Other"],
                  ]}
                />

                <ProjectField
                  label="APPROXIMATE SIZE"
                  placeholder="Approx. square footage"
                />

                <ProjectSelect
                  label="PROPERTY STATUS"
                  options={[
                    ["", "Select status"],
                    ["owned", "Currently Owned"],
                    ["contract", "Under Contract"],
                    ["purchasing", "Planning to Purchase"],
                    ["other", "Other"],
                  ]}
                />
              </div>
            </FormSection>

            {/* =================================================
                03 — SCOPE
            ================================================= */}
            <FormSection
              eyebrow="PROJECT SCOPE"
              title="What would you like us to help with?"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <ProjectChoice
                  value="Full Residence"
                  description="Complete interior design for the home."
                />

                <ProjectChoice
                  value="Renovation"
                  description="Interior transformation and renovation."
                />

                <ProjectChoice
                  value="Kitchens & Baths"
                  description="Focused kitchen or bathroom design."
                />

                <ProjectChoice
                  value="Furnishing & Styling"
                  description="Furniture, lighting, textiles, and styling."
                />
              </div>
            </FormSection>

            {/* =================================================
                04 — DETAILS
            ================================================= */}
            <FormSection
              eyebrow="PROJECT DETAILS"
              title="A little more about the project."
            >
              <div className="grid gap-x-9 gap-y-9 sm:grid-cols-2">
                <ProjectSelect
                  label="PROJECT STAGE"
                  options={[
                    ["", "Select project stage"],
                    ["planning", "Early Planning"],
                    ["property", "Property Secured"],
                    ["architect", "Working With an Architect"],
                    ["construction", "Construction Underway"],
                    ["furnishing", "Ready for Furnishings"],
                  ]}
                />

                <ProjectSelect
                  label="DESIRED START"
                  options={[
                    ["", "Select timing"],
                    ["0-3", "Within 3 months"],
                    ["3-6", "3–6 months"],
                    ["6-12", "6–12 months"],
                    ["12-plus", "12+ months"],
                    ["flexible", "Flexible"],
                  ]}
                />

                <ProjectSelect
                  label="ESTIMATED PROJECT INVESTMENT"
                  options={[
                    ["", "Select range"],
                    ["50-100", "$50,000 – $100,000"],
                    ["100-250", "$100,000 – $250,000"],
                    ["250-500", "$250,000 – $500,000"],
                    ["500-1m", "$500,000 – $1M"],
                    ["1m-plus", "$1M+"],
                    ["unsure", "Not sure yet"],
                  ]}
                />

                <ProjectSelect
                  label="HOW DID YOU FIND VERRA?"
                  options={[
                    ["", "Select one"],
                    ["referral", "Referral"],
                    ["instagram", "Instagram"],
                    ["pinterest", "Pinterest"],
                    ["search", "Online Search"],
                    ["publication", "Publication"],
                    ["other", "Other"],
                  ]}
                />
              </div>
            </FormSection>

            {/* =================================================
                05 — VISION
            ================================================= */}
            <FormSection
              eyebrow="YOUR VISION"
              title="What are you hoping to create?"
            >
              <label className="block">
                <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
                  TELL US ABOUT YOUR PROJECT *
                </span>

                <textarea
                  rows={6}
                  required
                  placeholder="Tell us about your home, what you love, what isn't working, and how you'd like the space to feel..."
                  className="w-full resize-none border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light leading-[1.8] text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/55 focus:border-[#5D554E]"
                />
              </label>

              <label className="mt-9 block">
                <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
                  ANYTHING ELSE WE SHOULD KNOW?
                </span>

                <textarea
                  rows={3}
                  placeholder="Architects, contractors, special requirements, timing considerations..."
                  className="w-full resize-none border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light leading-[1.8] text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/55 focus:border-[#5D554E]"
                />
              </label>
            </FormSection>

            {/* =================================================
                SUBMIT
            ================================================= */}
            <div className="border-t border-[#AAA196]/55 pt-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#49423C] px-7 py-[18px] text-[#F5F1EA] transition-colors duration-500 hover:bg-[#342F2B] sm:w-[255px]"
                >
                  <span className="text-[8px] tracking-[0.25em]">
                    SUBMIT INQUIRY
                  </span>

                  <span className="flex items-center">
                    <span className="h-px w-7 bg-current transition-all duration-500 group-hover:w-10" />

                    <span className="-ml-[2px] text-[10px]">
                      
                    </span>
                  </span>
                </button>

                <p className="max-w-[270px] text-[7px] leading-[1.7] tracking-[0.14em] text-[#91887F] sm:text-right">
                  CONCEPT DEMONSTRATION
                  <br />
                  SUBMISSIONS ARE DISABLED.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* =====================================================
          AFTER SUBMISSION MESSAGE
      ===================================================== */}
      {submitted && (
        <section className="bg-[#DED6CC] px-6 py-16 sm:px-10 md:px-14 lg:px-24">
          <div className="mx-auto max-w-[1380px]">
            <div className="flex max-w-[700px] items-start gap-5">
              <span className="mt-3 h-px w-10 shrink-0 bg-[#8E857B]" />

              <div>
                <p className="text-[7px] tracking-[0.26em] text-[#81786F]">
                  THANK YOU
                </p>

                <p
                  className="mt-4 text-[28px] italic leading-[1.15] text-[#4D4640]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Your project sounds like the beginning of something
                  beautiful.
                </p>

                <p className="mt-4 text-[10px] font-light leading-[1.8] text-[#706960]">
                  This is a concept demonstration, so no information was
                  actually submitted.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          WHAT TO EXPECT
      ===================================================== */}
      <section className="bg-[#E1D9CF] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          <div className="grid gap-7 border-b border-[#A99F94]/55 pb-10 md:grid-cols-[1fr_350px] md:items-end">
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                WHAT TO EXPECT
              </p>

              <h2
                className="text-[38px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[44px] lg:text-[48px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                From inquiry
                <span className="italic text-[#81766C]">
                  {" "}
                  to introduction.
                </span>
              </h2>
            </div>

            <p className="max-w-[340px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
              The first step is simply determining whether the project and
              studio are a good fit for one another.
            </p>
          </div>

          <div className="grid sm:grid-cols-3">
            {[
              {
                title: "Inquiry",
                text: "Share the details of your home, project scope, timeline, and what you're hoping to create.",
              },
              {
                title: "Introduction",
                text: "Aligned projects move into an introductory conversation to discuss priorities and expectations.",
              },
              {
                title: "Proposal",
                text: "We define the appropriate scope, design services, and next steps for moving the project forward.",
              },
            ].map((item, index) => (
              <article
                key={item.title}
                className={`py-9 sm:px-8 lg:px-10 lg:py-11 ${
                  index !== 0
                    ? "sm:border-l sm:border-[#A99F94]/40"
                    : ""
                }`}
              >
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#81776D]" />

                  <span className="h-px w-8 bg-[#A0988E]" />
                </div>

                <h3
                  className="text-[25px] font-normal tracking-[-0.025em] text-[#3D3732]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[290px] text-[10.5px] font-light leading-[1.85] text-[#706960]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="bg-[#312D29] px-6 pb-8 pt-16 text-[#F4EFE8] sm:px-10 md:px-14 lg:px-24">
        <div className="mx-auto max-w-[1380px]">
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

                <button
                  onClick={goServices}
                  className="text-[9px] text-white/55 transition hover:text-white"
                >
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
                className="mt-4 text-[9px] text-white/55 transition hover:text-white"
              >
                General Contact
              </button>

              <p className="mt-4 text-[9px] text-white">
                Start a Project
              </p>
            </div>
          </div>

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
    FORM SECTION
===================================================== */

function FormSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-[#AAA196]/55 py-10 first:border-t-0 first:pt-0">
      <p className="text-[7px] tracking-[0.28em] text-[#91887F]">
        {eyebrow}
      </p>

      <h2
        className="mt-4 mb-8 text-[25px] font-normal leading-[1.1] tracking-[-0.025em] text-[#403A35] sm:text-[28px]"
        style={{
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        {title}
      </h2>

      {children}
    </section>
  );
}

/* =====================================================
    TEXT FIELD
===================================================== */

function ProjectField({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
        {label}
        {required && <span className="ml-1">*</span>}
      </span>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/55 focus:border-[#5D554E]"
      />
    </label>
  );
}

/* =====================================================
    SELECT
===================================================== */

function ProjectSelect({
  label,
  options,
  required = false,
}: {
  label: string;
  options: [string, string][];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
        {label}
        {required && <span className="ml-1">*</span>}
      </span>

      <select
        defaultValue=""
        required={required}
        className="w-full appearance-none border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light text-[#625B54] outline-none transition-colors duration-300 focus:border-[#5D554E]"
      >
        {options.map(([value, label]) => (
          <option
            key={`${value}-${label}`}
            value={value}
            disabled={value === ""}
            className="bg-[#F2EEE8] text-[#423C37]"
          >
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

/* =====================================================
    PROJECT TYPE CHOICE
===================================================== */

function ProjectChoice({
  value,
  description,
}: {
  value: string;
  description: string;
}) {
  return (
    <label className="group cursor-pointer">
      <input
        type="checkbox"
        name="projectType"
        value={value}
        className="peer sr-only"
      />

      <div className="min-h-[115px] border border-[#AAA196]/55 px-5 py-5 transition-all duration-300 hover:border-[#756D65] peer-checked:border-[#49423C] peer-checked:bg-[#E6DED5]">
        <div className="flex items-start justify-between gap-5">
          <div>
            <p
              className="text-[17px] text-[#443E38]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              {value}
            </p>

            <p className="mt-2 max-w-[260px] text-[9px] font-light leading-[1.7] text-[#756E66]">
              {description}
            </p>
          </div>

          <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center border border-[#9C9389] transition-all duration-300 peer-checked:border-[#49423C]">
            <span className="h-[6px] w-[6px] bg-transparent transition-colors duration-300 group-has-[:checked]:bg-[#49423C]" />
          </span>
        </div>
      </div>
    </label>
  );
}