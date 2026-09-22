import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Gauge,
  Globe2,
  HeartHandshake,
  Layers3,
  Megaphone,
  MonitorSmartphone,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Jovavo",
  description:
    "Learn about Jovavo, our approach to design, development, performance, and building websites that help businesses grow.",
};

/* =========================================================
   VALUES
========================================================= */

const values = [
  {
    title: "Purposeful Design",
    icon: Target,
    description:
      "Every project begins with purpose. Design should make your business clear, guide customers naturally, and create a strong first impression.",
  },
  {
    title: "Custom Development",
    icon: Code2,
    description:
      "We build around the business itself, from custom websites and e-commerce to customer portals, dashboards, and tailored functionality.",
  },
  {
    title: "Built to Grow",
    icon: Zap,
    description:
      "Your digital presence should be able to evolve with your business through new functionality, integrations, advertising, and continued improvements.",
  },
];

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    title: "Custom Websites",
    icon: MonitorSmartphone,
  },
  {
    title: "E-Commerce",
    icon: ShoppingBag,
  },
  {
    title: "Custom Development",
    icon: Code2,
  },
  {
    title: "Admin Dashboards",
    icon: BarChart3,
  },
  {
    title: "Customer Portals",
    icon: Globe2,
  },
  {
    title: "Business Automation",
    icon: Workflow,
  },
  {
    title: "Google Ads",
    icon: Search,
  },
  {
    title: "Meta Ads",
    icon: Megaphone,
  },
  {
    title: "SEO",
    icon: Gauge,
  },
  {
    title: "Website Care",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto max-w-[1320px] px-5 pb-16 pt-24 sm:px-7 sm:pb-20 sm:pt-28 lg:px-10 lg:pt-32 xl:px-12">
        <Reveal>
          <div className="grid gap-9 lg:grid-cols-[0.74fr_1.26fr] lg:items-stretch lg:gap-10 xl:gap-12">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center py-2 lg:py-4">
              <div className="flex items-center gap-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#28231f]/75 sm:text-[10px]">
                  About Jovavo
                </p>
                <span className="h-px w-16 bg-[#28231f]/30 sm:w-20" />
              </div>

              <h1 className="mt-7 max-w-[560px] font-serif font-light tracking-[-0.055em] text-[#17130f]">
                <span className="block text-[3.35rem] leading-[0.88] sm:text-[4rem] lg:text-[4.25rem] xl:text-[4.9rem]">
                  More than
                </span>
                <span className="block text-[3.35rem] leading-[0.88] sm:text-[4rem] lg:text-[4.25rem] xl:text-[4.9rem]">
                  websites.
                </span>
                <span className="mt-2 block text-[3.45rem] italic leading-[0.9] text-[#8f8176] sm:text-[4.1rem] lg:text-[4.35rem] xl:text-[5rem]">
                  Real growth.
                </span>
              </h1>

              <div className="mt-7 max-w-[520px] space-y-4">
                <p className="text-[13px] leading-[1.75] text-[#28231f]/65 sm:text-[14px]">
                  Jovavo is a digital studio creating custom websites, e-commerce
                  experiences, and digital systems built around the businesses
                  that use them.
                </p>
                <p className="text-[13px] leading-[1.75] text-[#28231f]/65 sm:text-[14px]">
                  We combine design, strategy, and development to create a
                  polished online presence that not only looks professional,
                  but helps you grow.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 border-y border-[#28231f]/15 sm:grid-cols-4">
                {[
                  ["Custom", "Design"],
                  ["Strategic", "Approach"],
                  ["Ongoing", "Support"],
                  ["Real", "Results"],
                ].map(([top, bottom], index) => (
                  <div
                    key={`${top}-${bottom}`}
                    className={`flex min-h-[78px] items-center justify-center px-3 text-center ${
                      index % 2 !== 0 ? "border-l border-[#28231f]/15" : ""
                    } ${
                      index > 1 ? "border-t border-[#28231f]/15 sm:border-t-0" : ""
                    } ${
                      index === 2 ? "sm:border-l sm:border-[#28231f]/15" : ""
                    }`}
                  >
                    <p className="text-[8px] font-medium uppercase leading-[1.65] tracking-[0.27em] text-[#28231f]/80">
                      {top}
                      <br />
                      {bottom}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[205px] items-center justify-between rounded-full bg-[#17130f] px-7 py-[14px] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24]"
                >
                  <span className="text-[8px] font-medium uppercase tracking-[0.28em]">
                    Start a Project
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/work"
                  className="group inline-flex min-w-[205px] items-center justify-between rounded-full border border-[#28231f]/20 px-7 py-[14px] text-[#28231f]/70 transition-all duration-300 hover:border-[#28231f]/45 hover:text-[#28231f]"
                >
                  <span className="text-[8px] font-medium uppercase tracking-[0.28em]">
                    View Our Work
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.7rem] sm:min-h-[520px] lg:min-h-[620px] xl:min-h-[680px]">
              <img
                src="/images/about/jovavo-about-workspace.png"
                alt="Jovavo creative workspace"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1200ms] ease-out hover:scale-[1.015]"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <p className="shrink-0 text-[7px] font-medium uppercase tracking-[0.34em] text-[#8f8176] sm:text-[8px]">
              Ideas → Websites → Growth
            </p>
            <span className="h-px flex-1 bg-[#28231f]/15" />
            <p className="hidden shrink-0 text-[7px] font-medium uppercase tracking-[0.34em] text-[#8f8176] sm:block sm:text-[8px]">
              Built with intention
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              {/* LEFT */}

              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                  <Target size={21} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
                  Our Philosophy
                </p>

                <h2 className="mt-3 font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.035em] sm:text-[3.1rem]">
                  More than
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    a good-looking website.
                  </span>
                </h2>
              </div>

              {/* RIGHT */}

              <div className="flex flex-col justify-center">
                <p className="text-[16px] leading-7 text-[#1b1713]/60">
                  A website should do more than exist online. It should make
                  your business easy to understand, create trust, and give
                  customers a clear path forward.
                </p>

                <div className="my-6 h-px w-full bg-[#1b1713]/10" />

                <p className="text-[16px] leading-7 text-[#1b1713]/60">
                  That&apos;s why Jovavo combines thoughtful design with modern
                  development. We focus on how everything looks, how it works,
                  and how it supports the business behind it.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]">
              <Layers3 size={20} strokeWidth={1.6} />
            </div>

            <p className="text-[15px] font-semibold text-[#1b1713]/50">
              What We Believe
            </p>

            <h2 className="mt-3 font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.035em] sm:text-[3.3rem] md:text-[3.8rem]">
              Thoughtful from
              <br />
              <span className="italic text-[#1b1713]/50">
                beginning to launch.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              The best digital experiences balance design, functionality, and
              the goals of the business behind them.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.title} delay={index * 90}>
                <div className="h-full rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/15 sm:p-7 md:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-6 font-serif text-[1.7rem] font-light leading-tight tracking-[-0.02em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 text-[#1b1713]/55">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.6rem] bg-[#f1ece3] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fffdf9] text-[#1b1713]">
                  <Workflow size={19} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
                  How We Work
                </p>

                <h2 className="mt-3 font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem]">
                  Built around
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    your business.
                  </span>
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Understand",
                    description:
                      "We start with your business, audience, goals, and what the website needs to accomplish.",
                  },
                  {
                    number: "02",
                    title: "Design",
                    description:
                      "We shape the structure, visual direction, and customer experience around your brand.",
                  },
                  {
                    number: "03",
                    title: "Build",
                    description:
                      "The experience is developed for performance, responsiveness, and the functionality you need.",
                  },
                  {
                    number: "04",
                    title: "Grow",
                    description:
                      "After launch, your website can evolve through advertising, SEO, new features, and continued support.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[1.15rem] bg-[#fffdf9]/75 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1b1713] text-[12px] font-medium text-white">
                        {step.number}
                      </span>

                      <h3 className="font-serif text-[1.3rem] font-light">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-[13px] leading-6 text-[#1b1713]/50">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            <div className="grid gap-8 border-b border-[#1b1713]/10 pb-8 md:grid-cols-[0.8fr_1.2fr] md:items-end md:pb-10">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                  <Globe2 size={19} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
                  Capabilities
                </p>

                <h2 className="mt-3 font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem]">
                  From the website
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    to what powers it.
                  </span>
                </h2>
              </div>

              <p className="max-w-xl text-[15px] leading-7 text-[#1b1713]/55 md:justify-self-end">
                Projects can range from a focused business website to a
                complete digital platform with e-commerce, custom systems,
                marketing, and ongoing support.
              </p>
            </div>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.map(({ title, icon: Icon }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-xl bg-[#f8f5ef] px-4 py-3.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fffdf9] text-[#1b1713]/55">
                    <Icon size={15} strokeWidth={1.6} />
                  </div>

                  <span className="text-[13px] font-medium leading-5 text-[#1b1713]/60">
                    {title}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#1b1713]/65 transition-colors hover:text-[#1b1713]"
              >
                Explore All Services

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
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
              Let&apos;s Build Together
            </p>

            <h2 className="mx-auto mt-3 max-w-4xl font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.1rem] md:text-[3.7rem]">
              Every great project starts
              <br className="hidden sm:block" />
              {" "}with a{" "}
              <span className="italic text-[#1b1713]/50">
                conversation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Whether you&apos;re launching something new or improving an
              existing digital presence, tell us what you&apos;re looking to
              build.
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