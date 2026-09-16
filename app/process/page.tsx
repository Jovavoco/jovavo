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
    eyebrow: "Step One",
    icon: Compass,
    image: "/images/process/discover.jpg",
    description:
      "We clarify your goals, audience, brand direction, website needs, timeline, and what success should look like.",
    details: ["Business Goals", "Audience", "Project Scope"],
  },
  {
    number: "02",
    title: "Structure",
    eyebrow: "Step Two",
    icon: LayoutTemplate,
    image: "/images/process/structure.jpg",
    description:
      "We plan the pages, user flow, content sections, calls-to-action, and the overall experience before design begins.",
    details: ["Sitemap", "Page Flow", "Content Direction"],
  },
  {
    number: "03",
    title: "Design",
    eyebrow: "Step Three",
    icon: Sparkles,
    image: "/images/process/design.jpg",
    description:
      "Your website begins to take shape through refined layouts, typography, spacing, colors, and visual direction.",
    details: ["Visual Style", "Responsive Layout", "User Experience"],
  },
  {
    number: "04",
    title: "Develop",
    eyebrow: "Step Four",
    icon: Code2,
    image: "/images/process/develop.jpg",
    description:
      "The design is built into a fast, responsive, functional website with clean structure and scalable foundations.",
    details: ["Frontend Build", "Integrations", "Mobile Optimization"],
  },
  {
    number: "05",
    title: "Launch",
    eyebrow: "Step Five",
    icon: Rocket,
    image: "/images/process/launch.jpg",
    description:
      "Your site is tested, optimized, connected to your domain, and prepared for a smooth public launch.",
    details: ["Testing", "Deployment", "Domain Setup"],
  },
  {
    number: "06",
    title: "Support",
    eyebrow: "Step Six",
    icon: Headphones,
    image: "/images/process/support.jpg",
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

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 md:pt-40">
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
              clarity, collaboration, and execution — so your website feels
              intentional from the first conversation to the final launch.
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
          PROCESS INTRO
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 sm:pb-16">
        <Reveal>
          <div className="grid gap-7 rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 sm:rounded-[2rem] sm:p-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:p-10 lg:gap-14 lg:p-12">
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
                first understand the business, organize the experience, and
                establish the direction before bringing everything together.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                Each stage builds on the one before it, creating a more focused
                process from the first conversation through launch and
                continued support.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          STEPS
      ========================================================= */}

      <section
        id="process"
        className="scroll-mt-28 px-5 pb-20 sm:px-6 md:pb-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 80}>
                  <div className="group overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fffdf9] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1b1713]/15 sm:rounded-[2rem]">
                    <div
                      className={`grid lg:grid-cols-2 ${
                        index % 2 === 1
                          ? "lg:[&>*:first-child]:order-2"
                          : ""
                      }`}
                    >
                      {/* IMAGE */}

                      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[340px] lg:min-h-[430px]">
                        <img
                          src={step.image}
                          alt={`${step.title} process step`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1713]/25 via-transparent to-transparent" />

                        {/* STEP NUMBER */}

                        <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#fffdf9]/90 px-3.5 py-2 backdrop-blur-md sm:left-6 sm:top-6">
                          <span className="text-[12px] font-semibold text-[#1b1713]/45">
                            {step.number}
                          </span>

                          <span className="h-3 w-px bg-[#1b1713]/15" />

                          <span className="text-[12px] font-medium text-[#1b1713]/60">
                            {step.eyebrow}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                          <Icon size={19} strokeWidth={1.6} />
                        </div>

                        <h2 className="mt-6 font-serif text-[2.5rem] font-light leading-none tracking-[-0.035em] sm:text-[3rem]">
                          {step.title}
                        </h2>

                        <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                          {step.description}
                        </p>

                        {/* DETAILS */}

                        <div className="mt-7 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                          {step.details.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-2.5 rounded-xl bg-[#f8f5ef] px-3.5 py-3"
                            >
                              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fffdf9] text-[#1b1713]/55">
                                <Check size={13} strokeWidth={1.8} />
                              </div>

                              <span className="text-[12px] font-medium leading-5 text-[#1b1713]/55">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          AFTER LAUNCH
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.6rem] bg-[#f1ece3] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12">
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

              <div>
                <p className="text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                  Launch doesn&apos;t have to be the end of the relationship.
                  As your business changes, Jovavo can continue supporting your
                  website with updates, new functionality, performance
                  improvements, and digital growth.
                </p>

                <Link
                  href="/services#website-care"
                  className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#1b1713]/65 transition-colors hover:text-[#1b1713]"
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