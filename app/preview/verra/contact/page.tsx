"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function VerraContactPage() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const goHome = () => router.push("/preview/verra");
  const goProjects = () => router.push("/preview/verra/projects");
  const goServices = () => router.push("/preview/verra/services");
  const goStudio = () => router.push("/preview/verra/studio");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Concept website only — no form submission.
    setSubmitted(true);
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
          <div className="mx-6 border-t border-white/15 bg-[#312D29]/95 px-6 py-7 backdrop-blur-md sm:mx-10 md:hidden">
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
      <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-[#625950]">
        <img
          src="/previews/verra/project-mercer.jpg"
          alt="Verra interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2F2924]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#29231F]/75 via-[#29231F]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#29231F]/50 via-transparent to-[#29231F]/20" />

        <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 pb-14 sm:px-10 md:px-14 lg:px-[5.8rem] lg:pb-18">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-9 bg-white/55" />

            <p className="text-[8px] tracking-[0.32em] text-white/75">
              START A PROJECT
            </p>
          </div>

          <h1
            className="max-w-[650px] text-[48px] font-normal leading-[0.97] tracking-[-0.04em] text-[#FFFDF9] sm:text-[58px] md:text-[64px] lg:text-[69px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Tell us about
            <br />

            <span className="italic text-white/90">
              your space.
            </span>
          </h1>

          <p className="mt-6 max-w-[390px] text-[11px] font-light leading-[1.85] text-white/70">
            Every project begins with a conversation. Share a little about
            your home, your ideas, and what you&apos;re hoping to create.
          </p>
        </div>
      </section>

      {/* =====================================================
          INQUIRY
      ===================================================== */}
      <section className="px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-16 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          {/* =================================================
              LEFT
          ================================================= */}
          <aside>
            <div className="flex items-center gap-4">
              <p className="text-[8px] tracking-[0.3em] text-[#80776E]">
                PROJECT INQUIRY
              </p>

              <span className="h-px w-10 bg-[#A39A90]" />
            </div>

            <h2
              className="mt-7 max-w-[390px] text-[36px] font-normal leading-[1.06] tracking-[-0.035em] text-[#342F2B] sm:text-[41px] lg:text-[45px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              A thoughtful home
              <br />

              <span className="italic text-[#81766C]">
                starts here.
              </span>
            </h2>

            <p className="mt-6 max-w-[350px] text-[11px] font-light leading-[1.9] text-[#6D665F]">
              The details below help us understand your project before we
              begin the conversation.
            </p>

            {/* STUDIO DETAILS */}
            <div className="mt-10 border-t border-[#AAA196]/50 pt-7">
              <p className="text-[7px] tracking-[0.26em] text-[#91887F]">
                STUDIO
              </p>

              <p
                className="mt-3 text-[15px] text-[#49423C]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                New York, NY
              </p>

              <p className="mt-2 text-[9px] font-light leading-[1.7] text-[#7B736B]">
                Residential Interior Design
                <br />
                Available for select projects
              </p>
            </div>

            <div className="mt-7 border-t border-[#AAA196]/50 pt-7">
              <p className="text-[7px] tracking-[0.26em] text-[#91887F]">
                INQUIRIES
              </p>

              <p
                className="mt-3 text-[15px] text-[#49423C]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                New project inquiries
              </p>

              <p className="mt-2 max-w-[290px] text-[9px] font-light leading-[1.7] text-[#7B736B]">
                Complete the form and tell us a little about your project.
              </p>
            </div>
          </aside>

          {/* =================================================
              FORM
          ================================================= */}
          <div>
            <form onSubmit={handleSubmit}>
              {/* CONTACT */}
              <div>
                <p className="mb-7 text-[7px] tracking-[0.28em] text-[#91887F]">
                  YOUR DETAILS
                </p>

                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  <ContactField
                    label="FIRST NAME"
                    placeholder="First name"
                    required
                  />

                  <ContactField
                    label="LAST NAME"
                    placeholder="Last name"
                    required
                  />

                  <ContactField
                    label="EMAIL"
                    placeholder="Email address"
                    type="email"
                    required
                  />

                  <ContactField
                    label="PHONE"
                    placeholder="Phone number"
                    type="tel"
                  />
                </div>
              </div>

              {/* PROJECT */}
              <div className="mt-12 border-t border-[#AAA196]/50 pt-10">
                <p className="mb-7 text-[7px] tracking-[0.28em] text-[#91887F]">
                  YOUR PROJECT
                </p>

                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  <ContactField
                    label="PROJECT LOCATION"
                    placeholder="City, State"
                    required
                  />

                  <SelectField
                    label="PROJECT TYPE"
                    defaultValue=""
                    required
                    options={[
                      ["", "Select a service"],
                      ["interior-design", "Interior Design"],
                      ["renovation", "Renovation"],
                      ["kitchen-bath", "Kitchen / Bath"],
                      ["furnishing", "Furnishing & Styling"],
                      ["other", "Other"],
                    ]}
                  />

                  <SelectField
                    label="PROPERTY TYPE"
                    defaultValue=""
                    options={[
                      ["", "Select property type"],
                      ["apartment", "Apartment"],
                      ["townhouse", "Townhouse"],
                      ["single-family", "Single-Family Home"],
                      ["vacation-home", "Vacation Home"],
                      ["other", "Other"],
                    ]}
                  />

                  <SelectField
                    label="PROJECT STAGE"
                    defaultValue=""
                    options={[
                      ["", "Where are you in the process?"],
                      ["planning", "Early Planning"],
                      ["purchased", "Property Purchased"],
                      ["designing", "Currently Designing"],
                      ["construction", "Construction Underway"],
                    ]}
                  />
                </div>
              </div>

              {/* TIMELINE + BUDGET */}
              <div className="mt-12 border-t border-[#AAA196]/50 pt-10">
                <p className="mb-7 text-[7px] tracking-[0.28em] text-[#91887F]">
                  PROJECT DETAILS
                </p>

                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  <SelectField
                    label="DESIRED TIMELINE"
                    defaultValue=""
                    options={[
                      ["", "Select timeline"],
                      ["0-6", "Within 6 months"],
                      ["6-12", "6–12 months"],
                      ["12-plus", "12+ months"],
                      ["flexible", "Flexible"],
                    ]}
                  />

                  <SelectField
                    label="ESTIMATED INVESTMENT"
                    defaultValue=""
                    options={[
                      ["", "Select range"],
                      ["50-100", "$50,000 – $100,000"],
                      ["100-250", "$100,000 – $250,000"],
                      ["250-500", "$250,000 – $500,000"],
                      ["500-plus", "$500,000+"],
                      ["unsure", "Not sure yet"],
                    ]}
                  />
                </div>

                {/* MESSAGE */}
                <label className="mt-9 block">
                  <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
                    TELL US ABOUT YOUR PROJECT
                  </span>

                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your home, what you're hoping to change, and anything else you'd like us to know..."
                    className="w-full resize-none border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light leading-[1.8] text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/60 focus:border-[#5D554E]"
                  />
                </label>

                {/* REFERRAL */}
                <label className="mt-9 block">
                  <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
                    HOW DID YOU HEAR ABOUT US?
                  </span>

                  <input
                    type="text"
                    placeholder="Instagram, referral, search..."
                    className="w-full border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/60 focus:border-[#5D554E]"
                  />
                </label>
              </div>

              {/* SUBMIT */}
              <div className="mt-10">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-[#49423C] px-7 py-[18px] text-[#F5F1EA] transition-colors duration-500 hover:bg-[#342F2B] sm:w-[250px]"
                >
                  <span className="text-[8px] tracking-[0.25em]">
                    SEND INQUIRY
                  </span>

                  <span className="flex items-center">
                    <span className="h-px w-7 bg-current transition-all duration-500 group-hover:w-10" />

                    <span className="-ml-[2px] text-[10px]">
                      ↗
                    </span>
                  </span>
                </button>

                <p className="mt-4 text-[7px] leading-[1.7] tracking-[0.15em] text-[#91887F]">
                  CONCEPT DEMONSTRATION — SUBMISSIONS ARE DISABLED.
                </p>

                {submitted && (
                  <div className="mt-6 border-l border-[#8F857B] pl-5">
                    <p
                      className="text-[16px] italic text-[#625A53]"
                      style={{
                        fontFamily: '"Times New Roman", Times, serif',
                      }}
                    >
                      Thank you for your interest in VERRA.
                    </p>

                    <p className="mt-2 text-[9px] font-light leading-[1.7] text-[#7B736B]">
                      This is a concept website, so your inquiry has not been
                      submitted.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT HAPPENS NEXT
      ===================================================== */}
      <section className="bg-[#E1D9CF] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-[1380px]">
          {/* HEADER */}
          <div className="grid gap-7 border-b border-[#A99F94]/55 pb-10 md:grid-cols-[1fr_350px] md:items-end">
            <div>
              <p className="mb-5 text-[8px] tracking-[0.3em] text-[#81786F]">
                WHAT HAPPENS NEXT
              </p>

              <h2
                className="text-[38px] font-normal leading-[1.06] tracking-[-0.035em] text-[#342F2B] sm:text-[44px] lg:text-[48px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                The beginning of
                <span className="italic text-[#81766C]">
                  {" "}
                  something thoughtful.
                </span>
              </h2>
            </div>

            <p className="max-w-[340px] text-[11px] font-light leading-[1.85] text-[#706960] md:justify-self-end">
              We review each inquiry personally to understand the project,
              scope, and whether VERRA is the right fit.
            </p>
          </div>

          {/* STEPS */}
          <div className="grid sm:grid-cols-3">
            {[
              {
                title: "We Review",
                text: "We begin by reviewing your project details, location, scope, and timeline.",
              },
              {
                title: "We Connect",
                text: "If the project feels aligned, we arrange an introductory conversation to learn more.",
              },
              {
                title: "We Begin",
                text: "From there, we define the scope and next steps for creating your home together.",
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
          CLOSING
      ===================================================== */}
      <section className="bg-[#49423C] px-6 py-20 text-[#F5F1EA] sm:px-10 md:px-14 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-[1380px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-[8px] tracking-[0.3em] text-white/45">
              VERRA · NEW YORK
            </p>

            <p
              className="max-w-[650px] text-[38px] font-normal leading-[1.06] tracking-[-0.035em] sm:text-[44px] lg:text-[48px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              We&apos;d love to hear
              <br />

              <span className="italic text-[#C8BDB1]">
                what you&apos;re imagining.
              </span>
            </p>
          </div>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-5"
          >
            <span className="text-[8px] tracking-[0.24em] text-white/65">
              BACK TO TOP
            </span>

            <span className="h-px w-9 bg-white/35 transition-all duration-500 group-hover:w-14" />

            <span className="text-[11px] text-white/60">
              ↑
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

              <p className="mt-4 text-[9px] text-white">
                Start a Project
              </p>
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
    CONTACT FIELD
===================================================== */

function ContactField({
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
        {required && <span className="ml-1 text-[#91877D]">*</span>}
      </span>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border-b border-[#A99F94]/70 bg-transparent py-3 text-[11px] font-light text-[#423C37] outline-none transition-colors duration-300 placeholder:text-[#928A82]/60 focus:border-[#5D554E]"
      />
    </label>
  );
}

/* =====================================================
    SELECT FIELD
===================================================== */

function SelectField({
  label,
  options,
  defaultValue,
  required = false,
}: {
  label: string;
  options: [string, string][];
  defaultValue: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-3 block text-[7px] tracking-[0.24em] text-[#81786F]">
        {label}
        {required && <span className="ml-1 text-[#91877D]">*</span>}
      </span>

      <select
        defaultValue={defaultValue}
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