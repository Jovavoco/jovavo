import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Headphones,
  LayoutTemplate,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "See how Jovavo approaches website strategy, design, development, launch, and ongoing support.",
};

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description:
      "We clarify your goals, audience, brand direction, website needs, timeline, and what success should look like.",
    details: ["Business Goals", "Audience", "Project Scope"],
  },
  {
    number: "02",
    title: "Structure",
    icon: LayoutTemplate,
    description:
      "We plan the pages, user flow, content sections, calls-to-action, and the overall experience before design begins.",
    details: ["Sitemap", "Page Flow", "Content Direction"],
  },
  {
    number: "03",
    title: "Design",
    icon: Sparkles,
    description:
      "Your website begins to take shape through refined layouts, typography, spacing, colors, and visual direction.",
    details: ["Visual Style", "Responsive Layout", "User Experience"],
  },
  {
    number: "04",
    title: "Develop",
    icon: Code2,
    description:
      "The design is built into a fast, responsive, functional website with clean structure and scalable foundations.",
    details: ["Frontend Build", "Integrations", "Mobile Optimization"],
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description:
      "Your site is tested, optimized, connected to your domain, and prepared for a smooth public launch.",
    details: ["Testing", "Deployment", "Domain Setup"],
  },
  {
    number: "06",
    title: "Support",
    icon: Headphones,
    description:
      "After launch, Jovavo can help with maintenance, updates, performance improvements, and ongoing growth support.",
    details: ["Maintenance", "Updates", "Growth Support"],
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:pt-40">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <Target size={20} strokeWidth={1.6} />
            </div>

            <p className="text-[15px] font-semibold text-[#1b1713]/50">
              Our Process
            </p>

            <h1 className="mt-3 font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.04em] sm:text-[4rem] md:text-[4.8rem]">
              A clear path from
              <br />
              concept to{" "}
              <span className="italic text-[#1b1713]/50">
                launch.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Every project follows a thoughtful workflow built around
              clarity, collaboration, and execution — from the first
              conversation through launch and continued support.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <a
                href="#process"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#1b1713]/15 px-7 py-3.5 text-[14px] font-medium text-[#1b1713]/60 transition-all duration-300 hover:border-[#1b1713] hover:text-[#1b1713] sm:w-auto"
              >
                See How It Works
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 sm:pb-20">
        <Reveal>
          <div className="grid gap-8 rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 sm:rounded-[2rem] sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-10 lg:gap-14 lg:p-12">
            <div>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                <Compass size={19} strokeWidth={1.6} />
              </div>

              <p className="text-[15px] font-semibold text-[#1b1713]/50">
                How We Work
              </p>

              <h2 className="mt-3 font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem]">
                Thoughtful at
                <br />
                <span className="italic text-[#1b1713]/50">
                  every stage.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                Building a strong website starts long before development. We
                first understand your business, organize the experience, and
                establish the direction before bringing everything together.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                Each stage builds on the one before it, giving the project a
                clear structure while leaving room to build around what your
                business actually needs.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        id="process"
        className="scroll-mt-28 px-5 pb-20 sm:px-6 md:pb-24"
      >
        <div className="mx-auto max-w-6xl">
          {/* SECTION HEADING */}

          <Reveal>
            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
              <p className="text-[15px] font-semibold text-[#1b1713]/50">
                From Start to Launch
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.035em] sm:text-[3.3rem] md:text-[3.8rem]">
                Six steps. One
                <br />
                <span className="italic text-[#1b1713]/50">
                  focused process.
                </span>
              </h2>
            </div>
          </Reveal>

          {/* PROCESS GRID */}

          <div className="relative grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 70}>
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/15 sm:p-7 md:p-8">
                    {/* TOP */}

                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70 transition-all duration-300 group-hover:bg-[#1b1713] group-hover:text-white">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>

                      <span className="font-serif text-[2.6rem] font-light leading-none text-[#1b1713]/10 sm:text-[3rem]">
                        {step.number}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-7 font-serif text-[2rem] font-light leading-none tracking-[-0.03em] sm:text-[2.3rem]">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-4 max-w-lg text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                      {step.description}
                    </p>

                    {/* DIVIDER */}

                    <div className="my-6 h-px w-full bg-[#1b1713]/10" />

                    {/* DETAILS */}

                    <div className="mt-auto grid gap-2 sm:grid-cols-3">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-2 rounded-xl bg-[#f8f5ef] px-3 py-3"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#fffdf9] text-[#1b1713]/50">
                            <Check size={12} strokeWidth={1.8} />
                          </div>

                          <span className="text-[12px] font-medium leading-5 text-[#1b1713]/55">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* =====================================================
              SIMPLE PROCESS FLOW
          ===================================================== */}

          <Reveal>
            <div className="mt-5 hidden rounded-[1.5rem] bg-[#f1ece3] px-7 py-6 md:block">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex flex-1 items-center"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fffdf9] text-[11px] font-semibold text-[#1b1713]/55">
                        {step.number}
                      </div>

                      <span className="text-[12px] font-medium text-[#1b1713]/55">
                        {step.title}
                      </span>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="mx-3 h-px flex-1 bg-[#1b1713]/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          AFTER LAUNCH
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.6rem] bg-[#f1ece3] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-9 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-14">
              {/* LEFT */}

              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fffdf9] text-[#1b1713]">
                  <Headphones size={19} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
                  After Launch
                </p>

                <h2 className="mt-3 font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem]">
                  Your website can
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    keep evolving.
                  </span>
                </h2>
              </div>

              {/* RIGHT */}

              <div>
                <p className="text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                  Launch doesn&apos;t have to be the end of the relationship.
                  As your business changes, Jovavo can continue supporting your
                  website with updates, new functionality, performance
                  improvements, and digital growth.
                </p>

                <Link
                  href="/services#website-care"
                  className="group mt-6 inline-flex items-center gap-2.5 text-[14px] font-semibold text-[#1b1713]/65 transition-colors duration-300 hover:text-[#1b1713]"
                >
                  Explore Website Care

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] px-6 py-12 text-center sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-14 md:py-16">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <ArrowUpRight size={18} strokeWidth={1.6} />
            </div>

            <p className="text-[15px] font-semibold text-[#1b1713]/45">
              Next Step
            </p>

            <h2 className="mx-auto mt-3 max-w-4xl font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.1rem] md:text-[3.7rem]">
              Ready to start the
              <br />
              <span className="italic text-[#1b1713]/50">
                conversation?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Tell us about your business, what you&apos;re looking to build,
              and where you&apos;d like to take it.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}