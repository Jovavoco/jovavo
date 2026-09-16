import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Jovavo",
  description:
    "Explore websites, ecommerce experiences, and digital platforms designed and developed by Jovavo.",
};

const projects = [
  {
    title: "Apexx Biolabs",
    category: "E-Commerce · Web Design · Development",
    description:
      "A custom e-commerce platform designed around a growing research brand, combining a refined storefront with customer accounts, promotions, loyalty features, automated workflows, and custom business tools.",
    href: "/work/apexx-biolabs",
    status: "Live",
    image: "/images/work/apexx-biolabs-homepage.png",
    services: ["Web Design", "E-Commerce", "Custom Development"],
  },
  {
    title: "Willow & Tallow",
    category: "E-Commerce · Web Design · Brand Experience",
    description:
      "A warm, refined e-commerce experience created for a natural skincare brand, with an emphasis on thoughtful storytelling, effortless shopping, and a cohesive visual identity.",
    href: "/work/willow-and-tallow",
    status: "In Development",
    image: "/images/work/willow-and-tallow-homepage.png",
    services: ["Web Design", "E-Commerce", "Brand Experience"],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-5 text-[9px] uppercase tracking-[0.36em] text-[#1b1713]/40 sm:text-[10px] sm:tracking-[0.42em]">
              Selected Work
            </p>

            <h1 className="font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.02em] text-[#1b1713] sm:text-[3.5rem] md:text-[4.4rem] lg:text-[5rem]">
              Websites built around
              <br />
              <span className="italic text-[#1b1713]/55">
                the business behind them.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-base sm:leading-7">
              A selection of websites and digital experiences thoughtfully
              designed around each brand, its customers, and the way the
              business works.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-28">
        <div className="space-y-10 md:space-y-12">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <Link
                href={project.href}
                className="group block overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] transition-colors duration-300 hover:bg-white md:rounded-[2.5rem]"
              >
                {/* PROJECT IMAGE */}
                <div className="relative overflow-hidden border-b border-[#1b1713]/10 bg-[#eee8de] p-4 sm:p-6 md:p-8">
                  <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] border border-[#1b1713]/10 bg-white sm:rounded-[1.5rem]">
                    <img
                      src={project.image}
                      alt={`${project.title} website preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="px-6 py-8 sm:px-9 sm:py-10 md:px-12 md:py-12">
                  <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">

                    {/* LEFT */}
                    <div>
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <p className="text-[9px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:text-[10px]">
                          {project.category}
                        </p>

                        <span className="h-1 w-1 rounded-full bg-[#1b1713]/20" />

                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#1b1713]/35 sm:text-[10px]">
                          {project.status}
                        </span>
                      </div>

                      <h2 className="font-serif text-[2.35rem] font-light leading-none tracking-[-0.02em] text-[#1b1713] sm:text-[2.8rem] md:text-[3.3rem]">
                        {project.title}
                      </h2>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="rounded-full border border-[#1b1713]/10 px-4 py-2 text-[9px] uppercase tracking-[0.17em] text-[#1b1713]/45 sm:text-[10px]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>
                      <p className="max-w-xl text-[14px] leading-6 text-[#1b1713]/55 sm:text-[15px] sm:leading-7">
                        {project.description}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.24em] text-[#1b1713]/50 transition-colors duration-300 group-hover:text-[#1b1713] sm:text-[10px]">
                        View Case Study

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.5}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-28">
        <Reveal>
          <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] px-6 py-12 text-center sm:px-10 sm:py-14 md:rounded-[2.5rem] md:px-14 md:py-16">
            <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              Start a Project
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-[2.3rem] font-light leading-[1.04] tracking-[-0.02em] sm:text-[2.8rem] md:text-[3.4rem]">
              Have something{" "}
              <span className="italic text-[#1b1713]/55">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-[#1b1713]/55 sm:text-[15px] sm:leading-7">
              Tell us about your business, what you&apos;re building, and where
              you&apos;d like to take it.
            </p>

            <div className="mt-7">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1b1713] px-7 py-3.5 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:px-8 sm:text-[10px]"
              >
                Start a Project

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
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