"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#171717]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="border-b border-black/10 px-6 pb-16 pt-36 sm:px-10 lg:px-16 lg:pb-20 lg:pt-44 xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-black/35" />

                <p className="text-[9px] font-medium uppercase tracking-[0.34em] text-black/55">
                  Jovavo Concepts
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <h1 className="max-w-[850px] font-serif text-[3.7rem] leading-[0.93] tracking-[-0.055em] sm:text-[4.8rem] lg:text-[6.2rem] xl:text-[7rem]">
                Ideas, brought
                <br />
                <span className="italic text-black/45">to life.</span>
              </h1>

              <p className="mt-7 max-w-[580px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                A collection of self-initiated digital concepts exploring
                brand, design, e-commerce, and the different ways a thoughtful
                online experience can take shape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED — VERRA
      ===================================================== */}

      <section className="px-5 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          {/* PROJECT META */}

          <div className="mb-7 flex items-end justify-between border-b border-black/10 pb-5">
            <div className="flex items-center gap-5">
              <span className="font-serif text-[13px] italic text-black/35">
                01
              </span>

              <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-black/55">
                Featured Concept
              </p>
            </div>

            <p className="hidden text-[8px] uppercase tracking-[0.25em] text-black/40 sm:block">
              Skincare · E-commerce
            </p>
          </div>

          {/* MOCKUP */}

          <Link
            href="/preview/verra"
            className="group relative block overflow-hidden bg-[#E8E4DE]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
              <Image
                src="/images/concepts/verra.png"
                alt="Verra skincare website concept"
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
              />

              {/* VERY LIGHT HOVER OVERLAY */}

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.025]" />

              {/* VIEW BUTTON */}

              <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-sm transition-all duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.4}
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* PROJECT INFORMATION */}

          <div className="grid gap-8 border-b border-black/10 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-10">
            {/* TITLE */}

            <div>
              <p className="mb-3 text-[8px] font-medium uppercase tracking-[0.3em] text-black/45 sm:hidden">
                Skincare · E-commerce
              </p>

              <h2 className="font-serif text-[3rem] leading-none tracking-[-0.045em] sm:text-[3.8rem] lg:text-[4.5rem]">
                Verra
              </h2>

              <p className="mt-3 font-serif text-[17px] italic text-black/45 sm:text-[19px]">
                Natural skincare, reimagined.
              </p>
            </div>

            {/* DESCRIPTION */}

            <div className="lg:pt-2">
              <p className="max-w-[650px] text-[14px] leading-7 text-black/60 sm:text-[15px]">
                A self-initiated e-commerce concept created for a modern
                skincare brand. Verra explores a soft, editorial approach to
                digital retail through refined typography, product-focused
                storytelling, thoughtful spacing, and a clean shopping
                experience.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                  Web Design
                </span>

                <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                  E-commerce
                </span>

                <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                  Responsive Design
                </span>

                <span className="text-[8px] uppercase tracking-[0.25em] text-black/45">
                  Concept Development
                </span>
              </div>

              <Link
                href="/preview/verra"
                className="group mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-[9px] font-medium uppercase tracking-[0.26em]"
              >
                View Concept

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT CONCEPT WORK
      ===================================================== */}

      <section className="bg-[#EEECE7] px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto grid max-w-[1450px] gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-black/45">
              About Concept Work
            </p>
          </div>

          <div>
            <h2 className="max-w-[850px] font-serif text-[2.7rem] leading-[1.02] tracking-[-0.04em] sm:text-[3.4rem] lg:text-[4rem]">
              Exploring what a brand
              <br />
              <span className="italic text-black/40">could become.</span>
            </h2>

            <div className="mt-7 grid max-w-[800px] gap-6 sm:grid-cols-2 sm:gap-10">
              <p className="text-[13px] leading-7 text-black/55 sm:text-[14px]">
                Concept projects give us the freedom to explore new visual
                directions, industries, layouts, and digital experiences
                outside the boundaries of client work.
              </p>

              <p className="text-[13px] leading-7 text-black/55 sm:text-[14px]">
                Each concept is self-initiated by Jovavo and created to
                demonstrate our approach to strategy, design, development,
                and digital storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MORE CONCEPTS
      ===================================================== */}

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1450px]">
          <div className="flex items-end justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-black/45">
                More Concepts
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] tracking-[-0.04em] sm:text-[3.2rem]">
                More in the works.
              </h2>
            </div>

            <span className="hidden text-[8px] uppercase tracking-[0.25em] text-black/35 sm:block">
              Coming Soon
            </span>
          </div>

          <div className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {[2, 3, 4].map((number) => (
              <div
                key={number}
                className="flex aspect-[4/3] flex-col justify-between border border-black/10 bg-[#F3F1EC] p-6 sm:p-7"
              >
                <span className="font-serif text-[12px] italic text-black/30">
                  0{number}
                </span>

                <div>
                  <p className="font-serif text-[1.5rem] text-black/35">
                    Coming soon
                  </p>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.28em] text-black/30">
                    New Concept
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="border-t border-black/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-20">
        <div className="mx-auto max-w-[1450px] text-center">
          <p className="text-[8px] font-medium uppercase tracking-[0.34em] text-black/45">
            Have Something in Mind?
          </p>

          <h2 className="mx-auto mt-5 max-w-[850px] font-serif text-[3rem] leading-[0.98] tracking-[-0.045em] sm:text-[4rem] lg:text-[5rem]">
            Your brand could be
            <br />
            <span className="italic text-black/40">next.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[500px] text-[14px] leading-7 text-black/55">
            Tell us what you are building, and we will help turn the idea into
            a thoughtful digital experience.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 text-[8px] font-medium uppercase tracking-[0.27em] text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Start a Project

            <ArrowUpRight
              size={14}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}