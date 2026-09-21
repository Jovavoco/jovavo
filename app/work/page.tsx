import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Work | Jovavo",
  description:
    "Explore websites and digital experiences designed and developed by Jovavo.",
};

/* =====================================================
   PROJECTS
===================================================== */

const projects = [
  {
    title: "Apexx Biolabs",
    category: "E-Commerce · Web Design",
    description:
      "A custom e-commerce platform with customer accounts, promotions, automated workflows, and business management tools.",
    href: "/work/apexx-biolabs",
    status: "Live",
    image: "/images/work/apexx-biolabs.png",
    services: ["Web Design", "E-Commerce", "Development"],
  },
  {
    title: "Willow & Tallow",
    category: "E-Commerce · Brand Experience",
    description:
      "A refined skincare experience built around thoughtful storytelling, simple shopping, and a cohesive visual identity.",
    href: "/work/willow-and-tallow",
    status: "In Development",
    image: "/images/work/willow-tallow.png",
    services: ["Web Design", "E-Commerce", "Brand Experience"],
  },
];

/* =====================================================
   CONCEPTS
===================================================== */

const concepts = [
  {
    title: "Verra",
    category: "Interior Design · Web Design",
    description:
      "A self-initiated website concept exploring editorial design, immersive imagery, and a refined digital experience for a modern interior studio.",
    href: "/preview/verra",
    status: "Self-Initiated Concept",
    image: "/images/concepts/verra.png",
    services: ["Web Design", "Art Direction", "Responsive Design"],
  },
];

/* =====================================================
   PROJECT CARD
===================================================== */

type Project = {
  title: string;
  category: string;
  description: string;
  href: string;
  status: string;
  image: string;
  services: string[];
};

function ProjectCard({
  project,
  linkText,
}: {
  project: Project;
  linkText: string;
}) {
  return (
    <Link
      href={project.href}
      className="group block h-full overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/20 md:rounded-[2rem]"
    >
      {/* IMAGE */}

      <div className="relative aspect-[16/10] overflow-hidden border-b border-[#1b1713]/10 bg-[#ebe5db]">
        <img
          src={project.image}
          alt={`${project.title} website by Jovavo`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fbf8f2]/95 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-6 sm:p-7 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[8px] uppercase tracking-[0.23em] text-[#1b1713]/40 sm:text-[9px]">
            {project.category}
          </p>

          <span className="shrink-0 text-[8px] uppercase tracking-[0.16em] text-[#1b1713]/35">
            {project.status}
          </span>
        </div>

        <h3 className="mt-5 font-serif text-[2.2rem] font-light leading-none tracking-[-0.025em] text-[#1b1713] sm:text-[2.5rem]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-xl text-[13px] leading-6 text-[#1b1713]/55 sm:text-[14px]">
          {project.description}
        </p>

        {/* SERVICES */}

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="text-[8px] uppercase tracking-[0.18em] text-[#1b1713]/35"
            >
              {service}
            </span>
          ))}
        </div>

        {/* LINK */}

        <div className="mt-7 flex items-center justify-between border-t border-[#1b1713]/10 pt-5">
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition-colors duration-300 group-hover:text-[#1b1713]">
            {linkText}
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.5}
            className="text-[#1b1713]/45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1b1713]"
          />
        </div>
      </div>
    </Link>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e8] text-[#1b1713]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-40">
        {/* ABSTRACT DETAILS */}

        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#1b1713]/5 sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-10 top-48 h-36 w-36 rounded-full border border-[#1b1713]/5" />

        <Reveal>
          <div className="relative mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#1b1713]/25" />

              <p className="text-[9px] uppercase tracking-[0.38em] text-[#1b1713]/40">
                Our Work
              </p>

              <span className="h-px w-7 bg-[#1b1713]/25" />
            </div>

            <h1 className="mt-6 font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.8rem] md:text-[4.7rem]">
              Designed for the brand.
              <br />

              <span className="italic text-[#1b1713]/50">
                Built for the business.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-[14px] leading-7 text-[#1b1713]/55">
              Websites and digital experiences designed around each
              business&apos;s identity, customers, and goals.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CLIENT WORK
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
        {/* HEADER */}

        <Reveal>
          <div className="mb-8 flex items-end justify-between border-b border-[#1b1713]/10 pb-5">
            <div>
              <p className="text-[8px] uppercase tracking-[0.32em] text-[#1b1713]/40">
                Selected Work
              </p>

              <h2 className="mt-3 font-serif text-[2rem] font-light tracking-[-0.02em] sm:text-[2.4rem]">
                Client projects.
              </h2>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.2em] text-[#1b1713]/30 sm:block">
              01 — 02
            </span>
          </div>
        </Reveal>

        {/* PROJECTS */}

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <ProjectCard project={project} linkText="View Case Study" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* =====================================================
          CONCEPT WORK
      ===================================================== */}

      <section className="border-y border-[#1b1713]/10 bg-[#eee9df]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24">
          {/* HEADER */}

          <Reveal>
            <div className="mb-8 grid gap-5 border-b border-[#1b1713]/10 pb-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="text-[8px] uppercase tracking-[0.32em] text-[#1b1713]/40">
                  Concept Work
                </p>

                <h2 className="mt-3 font-serif text-[2rem] font-light tracking-[-0.02em] sm:text-[2.4rem]">
                  Ideas in practice.
                </h2>
              </div>

              <p className="max-w-md text-[12px] leading-6 text-[#1b1713]/50 md:justify-self-end sm:text-[13px]">
                Self-initiated projects created to explore new industries,
                visual directions, and digital experiences.
              </p>
            </div>
          </Reveal>

          {/* CONCEPTS */}

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {concepts.map((concept, index) => (
              <Reveal key={concept.title} delay={index * 100}>
                <ProjectCard project={concept} linkText="View Concept" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-28">
        {/* ABSTRACT DETAILS */}

        <div className="pointer-events-none absolute -bottom-56 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full border border-[#1b1713]/5 sm:h-[600px] sm:w-[600px]" />

        <Reveal>
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-[8px] uppercase tracking-[0.36em] text-[#1b1713]/40">
              Start a Project
            </p>

            <h2 className="mt-5 font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.5rem] md:text-[4rem]">
              Have something{" "}
              <span className="italic text-[#1b1713]/50">in mind?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[13px] leading-6 text-[#1b1713]/50 sm:text-[14px]">
              Tell us about your business and what you&apos;re looking to
              create.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#1b1713] px-6 py-3.5 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24]"
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