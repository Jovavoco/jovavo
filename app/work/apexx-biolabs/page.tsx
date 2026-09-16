import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Work | Jovavo",
  description:
    "Explore websites, e-commerce experiences, and digital platforms designed and developed by Jovavo.",
};

const projects = [
  {
    title: "Apexx Biolabs",
    category: "E-Commerce · Web Design",
    description:
      "A custom e-commerce platform combining a refined storefront with customer accounts, promotions, automated workflows, and custom business tools.",
    href: "/work/apexx-biolabs",
    status: "Live",
    image: "/images/work/apexx-homepagebiolabs.png",
    services: ["Web Design", "E-Commerce", "Development"],
  },
  {
    title: "Willow & Tallow",
    category: "E-Commerce · Brand Experience",
    description:
      "A refined e-commerce experience focused on thoughtful storytelling, effortless shopping, and a cohesive visual identity.",
    href: "/work/willow-and-tallow",
    status: "In Development",
    image: "/images/work/willow-tallow.png",
    services: ["Web Design", "E-Commerce", "Brand Experience"],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-14 pt-32 sm:px-6 sm:pt-36 md:pb-16 md:pt-40">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-[9px] uppercase tracking-[0.36em] text-[#1b1713]/40 sm:text-[10px] sm:tracking-[0.42em]">
              Selected Work
            </p>

            <h1 className="font-serif text-[2.6rem] font-light leading-[1.03] tracking-[-0.02em] text-[#1b1713] sm:text-[3.2rem] md:text-[4rem]">
              Websites built around
              <br />
              <span className="italic text-[#1b1713]/55">
                the business behind them.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-6 text-[#1b1713]/55 sm:text-[15px] sm:leading-7">
              A selection of digital experiences thoughtfully designed around
              each brand, its customers, and the way the business works.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PROJECTS */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <Link
                href={project.href}
                className="group block h-full overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/15 md:rounded-[2rem]"
              >
                {/* PROJECT IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[#1b1713]/10 bg-[#eee8de]">
                  <img
                    src={project.image}
                    alt={`${project.title} website project by Jovavo`}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* PROJECT CONTENT */}
                <div className="p-6 sm:p-7 md:p-8">
                  {/* META */}
                  <div className="mb-4 flex items-start justify-between gap-5">
                    <p className="text-[8px] uppercase leading-4 tracking-[0.24em] text-[#1b1713]/40 sm:text-[9px]">
                      {project.category}
                    </p>

                    <span className="shrink-0 text-[8px] uppercase tracking-[0.18em] text-[#1b1713]/30 sm:text-[9px]">
                      {project.status}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="font-serif text-[2rem] font-light leading-[1.02] tracking-[-0.02em] text-[#1b1713] sm:text-[2.3rem] md:text-[2.5rem]">
                    {project.title}
                  </h2>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#1b1713]/55 sm:text-[14px]">
                    {project.description}
                  </p>

                  {/* SERVICES */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8]/60 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-[#1b1713]/45 sm:text-[9px]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* CASE STUDY LINK */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#1b1713]/10 pt-5">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/50 transition-colors duration-300 group-hover:text-[#1b1713]">
                      View Case Study
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#1b1713]/45 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1b1713]"
                    />
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
          <div className="rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] px-6 py-10 text-center sm:px-10 sm:py-12 md:rounded-[2rem]">
            <p className="mb-3 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40">
              Start a Project
            </p>

            <h2 className="font-serif text-[2.2rem] font-light leading-[1.04] tracking-[-0.02em] text-[#1b1713] sm:text-[2.6rem] md:text-[3rem]">
              Have something{" "}
              <span className="italic text-[#1b1713]/55">in mind?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-[14px] leading-6 text-[#1b1713]/55">
              Tell us about your business, what you&apos;re building, and where
              you&apos;d like to take it.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#1b1713] px-6 py-3 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24]"
            >
              Start a Project

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}