import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Heart,
  Leaf,
  MonitorSmartphone,
  Palette,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: Palette,
    title: "Brand-Led Design",
    description:
      "A visual experience designed around Willow & Tallow's natural, refined identity.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "A simple shopping experience that keeps products easy to discover and purchase.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile Friendly",
    description:
      "Designed to feel polished and easy to navigate across phones, tablets, and desktop.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description:
      "Clear navigation and thoughtful layouts keep the experience simple for customers.",
  },
];

export default function WillowAndTallowCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1b1713]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1b1713]/50 transition-colors duration-300 hover:text-[#1b1713]"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#59624a] text-white">
                  <Leaf size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#59624a]">
                    Willow &amp; Tallow
                  </p>

                  <p className="mt-0.5 text-[13px] text-[#1b1713]/45">
                    E-Commerce · Web Design · Brand Experience
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-[3.4rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-[4.2rem] md:text-[5rem]">
                A thoughtful home
                <br />
                <span className="italic text-[#687357]/70">
                  for the brand.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-lg text-[16px] leading-7 text-[#1b1713]/60">
                We created a refined e-commerce experience for Willow &amp;
                Tallow that brings its visual identity, products, and story
                together in one simple shopping experience.
              </p>

              <a
                href="https://willowandtallow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#59624a] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#687357] sm:w-auto"
              >
                Visit Live Website

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT THEY NEEDED / WHAT WE CREATED */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fffdf9] shadow-[0_18px_55px_rgba(27,23,19,0.035)] md:grid-cols-2">
          <Reveal>
            <div className="h-full p-7 sm:p-9 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#59624a]">
                <Sparkles size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-semibold text-[#59624a]">
                What They Needed
              </p>

              <h2 className="mt-3 font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] sm:text-[2.5rem]">
                A website that felt
                <br />
                <span className="italic text-[#687357]/70">
                  like the brand.
                </span>
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#1b1713]/55">
                Willow &amp; Tallow needed an online presence that could
                introduce the brand, showcase its products, and create a
                shopping experience that felt cohesive with its natural and
                refined visual identity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="h-full border-t border-[#1b1713]/10 bg-[#e9eadf] p-7 sm:p-9 md:border-l md:border-t-0 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#59624a] text-white">
                <Leaf size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-semibold text-[#59624a]">
                What We Created
              </p>

              <h2 className="mt-3 font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] text-[#353b2d] sm:text-[2.5rem]">
                A cohesive
                <br />
                <span className="italic text-[#687357]/80">
                  e-commerce experience.
                </span>
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#59624a]/70">
                We designed an e-commerce website that combines product
                discovery, brand storytelling, and shopping into one clean,
                easy-to-navigate experience.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WEBSITE */}
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-[#59624a]">
              The Website
            </p>

            <h2 className="mt-2 font-serif text-[2.3rem] font-light tracking-[-0.03em] sm:text-[2.8rem]">
              Natural. Refined.{" "}
              <span className="italic text-[#687357]/75">
                Easy to shop.
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#1b1713]/50">
              A calm visual experience designed to let the brand and products
              take center stage.
            </p>
          </div>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#ebe8dd] shadow-[0_20px_60px_rgba(27,23,19,0.08)] sm:rounded-[1.75rem]">
            <img
              src="/images/work/willow-tallow.png"
              alt="Willow and Tallow homepage"
              className="block h-auto w-full object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* WHAT WE BUILT */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-9 max-w-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9eadf] text-[#59624a]">
              <ShoppingBag size={21} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#59624a]">
              What We Built
            </p>

            <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.1rem]">
              Simple for customers.
              <br />
              <span className="italic text-[#687357]/70">
                True to the brand.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 50}>
              <div className="h-full rounded-[1.4rem] border border-[#1b1713]/10 bg-[#fffdf9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#59624a]/25 hover:shadow-[0_15px_40px_rgba(27,23,19,0.05)]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9eadf] text-[#59624a]">
                  <Icon size={19} strokeWidth={1.6} />
                </div>

                <h3 className="font-serif text-[1.3rem] font-light leading-tight">
                  {title}
                </h3>

                <p className="mt-2 text-[13px] leading-5 text-[#1b1713]/45">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESULT */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-[#e9eadf] p-7 sm:p-9 md:p-11">
            <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-14">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#59624a] text-white">
                  <Leaf size={21} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#59624a]">
                  The Result
                </p>

                <h2 className="mt-2 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] text-[#353b2d] sm:text-[3.5rem]">
                  A digital home
                  <br />
                  <span className="italic text-[#687357]/80">
                    built for the brand.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-[#59624a]/70">
                  Willow &amp; Tallow now has a cohesive e-commerce experience
                  that brings its products, visual identity, and brand story
                  together while keeping the customer journey simple.
                </p>

                <a
                  href="https://willowandtallow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#59624a] transition-opacity duration-300 hover:opacity-60"
                >
                  Explore Willow &amp; Tallow

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-6 md:pb-28">
        <Reveal>
          <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fffdf9] px-6 py-12 text-center sm:px-10 sm:py-14">
            <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9eadf] text-[#59624a]">
              <ArrowUpRight size={19} strokeWidth={1.6} />
            </div>

            <h2 className="font-serif text-[2.6rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.3rem]">
              Have a project{" "}
              <span className="italic text-[#687357]/75">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-[#1b1713]/50">
              Tell us what your business needs. We&apos;ll build around it.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#35302a] sm:w-auto"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}