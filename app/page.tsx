import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Websites & Digital Advertising",
  description:
    "Jovavo creates custom websites and manages Google and Meta advertising for businesses looking to grow online, generate leads, and convert more customers.",
};

const services = [
  "Custom Websites",
  "Landing Pages",
  "Ecommerce",
  "Google Ads",
  "Meta Ads",
  "SEO & Growth",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, goals, current website, and what growth looks like for you.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a refined visual direction, clear page structure, and conversion-focused user experience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build a fast, responsive, polished website with clean code, strong performance, and scalable foundations.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We help support your launch with analytics, SEO foundations, and Google or Meta advertising strategy.",
  },
];

const growthServices = [
  {
    title: "Website Creation",
    description:
      "Custom websites, landing pages, ecommerce experiences, and redesigns built to look premium and perform well.",
  },
  {
    title: "Google Advertising",
    description:
      "Search-focused campaigns designed to help people find your business when they are actively looking for what you offer.",
  },
  {
    title: "Meta Advertising",
    description:
      "Facebook and Instagram campaigns built for awareness, retargeting, lead generation, and customer growth.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/images/jovavo-hero-bg.png')",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#1b1713]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#f5f1e8]/10" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 text-center text-white">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/75">
              Websites & Digital Advertising
            </p>

            <h1 className="mx-auto max-w-6xl font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.1em] md:text-7xl">
              Websites built
              <br />
              to grow your
              <br />
              business.
            </h1>

            <div className="mx-auto mt-8 h-px w-24 bg-white/50" />

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed tracking-[0.1em] text-white/80 md:text-lg">
              Jovavo creates custom websites and helps businesses attract more
              customers through Google Ads, Meta advertising, and
              conversion-focused digital strategy.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 border border-white/50 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#1b1713]"
              >
                View Services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                Jovavo
              </p>

              <h2 className="font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
                Designed
                <br />
                to convert.
                <br />
                Built to grow.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
              Jovavo helps businesses turn their online presence into a growth
              engine through custom websites, thoughtful design, modern
              development, and digital advertising strategies built to attract
              and convert customers.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 80}>
              <div className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-7 py-5 text-center text-xs uppercase tracking-[0.24em] text-[#1b1713]/60 shadow-[0_15px_50px_rgba(27,23,19,0.04)] transition hover:-translate-y-1 hover:bg-white">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GROWTH SERVICES */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/35">
                  What We Do
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
                  Build the site.
                  <br />
                  Drive the traffic.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                A beautiful website is only the beginning. Jovavo helps you
                create the digital foundation, then supports growth through
                strategy, analytics, and advertising.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {growthServices.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group min-h-[360px] rounded-[2rem] border border-[#1b1713]/10 bg-[#f8f4ec] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(27,23,19,0.07)]">
                  <div className="mb-14 flex items-center justify-between">
                    <p className="font-serif text-5xl text-[#1b1713]/20">
                      0{index + 1}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="text-[#1b1713]/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1b1713]"
                    />
                  </div>

                  <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-base leading-relaxed text-[#1b1713]/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

{/* PROCESS PREVIEW */}
<section className="mx-auto max-w-7xl px-6 py-36">
  <Reveal>
    <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/8 bg-gradient-to-br from-[#fdfcf9] to-[#f7f3ec] shadow-[0_40px_120px_rgba(27,23,19,0.08)]">

      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

        {/* LEFT */}
        <div className="flex flex-col justify-between p-12 lg:p-16">

          <div>

            <span className="inline-flex items-center rounded-full border border-[#1b1713]/10 bg-white px-5 py-2 text-[10px] font-medium uppercase tracking-[0.35em] text-[#1b1713]/55">
              Our Process
            </span>

            <h2 className="mt-8 font-serif text-[54px] leading-[0.95] tracking-[-0.04em] text-[#1b1713] md:text-7xl">
              Beautiful
              <br />
              websites
              <br />
              built with
              <br />
              purpose.
            </h2>

            <div className="mt-10 h-px w-20 bg-[#1b1713]/15" />

            <p className="mt-10 max-w-lg text-[18px] leading-8 text-[#1b1713]/60">
              Every project follows a refined process—from learning about your
              business to launching a website that's designed to grow with it.
              You'll always know what's happening, what comes next, and what to
              expect.
            </p>

          </div>

          <Link
            href="/process"
            className="group mt-14 inline-flex w-fit items-center gap-3 rounded-full border border-[#1b1713]/12 bg-white px-7 py-3 text-[11px] font-medium uppercase tracking-[0.3em] transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/20 hover:bg-[#1b1713] hover:text-white"
          >
            View Our Process

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-px bg-[#1b1713]/8">

          {[
            {
              title: "Discover",
              text: "Learn about your business, audience, and goals.",
            },
            {
              title: "Strategy",
              text: "Plan the structure, content, and user experience.",
            },
            {
              title: "Design",
              text: "Create a refined interface tailored to your brand.",
            },
            {
              title: "Develop",
              text: "Build a fast, responsive website with clean code.",
            },
            {
              title: "Launch",
              text: "Deploy your site with testing, SEO, and optimization.",
            },
            {
              title: "Grow",
              text: "Support, updates, analytics, and continuous improvement.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="group bg-[#fcfaf6] p-10 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >

              <div className="flex items-center justify-between">

                <span className="text-[12px] font-medium tracking-[0.3em] text-[#1b1713]/30">
                  0{index + 1}
                </span>

                <div className="h-px w-10 bg-[#1b1713]/10 transition-all group-hover:w-16" />

              </div>

              <h3 className="mt-8 font-serif text-3xl tracking-[-0.03em] text-[#1b1713]">
                {step.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#1b1713]/55">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  </Reveal>
</section>

      {/* NYC SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_100px_rgba(27,23,19,0.06)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[520px] flex-col justify-between p-10 md:p-14">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                    New York Studio
                  </p>

                  <h2 className="font-serif text-4xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-6xl">
                    Built in
                    <br />
                    New York.
                    <br />
                    Made for
                    <br />
                    anywhere.
                  </h2>

                  <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
                    Rooted in a city built on ambition, Jovavo creates refined
                    websites and digital growth systems for businesses ready to
                    look better, perform better, and reach more customers.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-12 inline-flex w-fit items-center gap-3 rounded-full border border-[#1b1713]/15 px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition hover:bg-[#1b1713] hover:text-white"
                >
                  About Jovavo
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <img
                src="/images/services/nyc-skyline.jpg"
                alt="New York City skyline"
                className="h-[420px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/35">
                  Process
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
                  From idea
                  <br />
                  to growth.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/50">
                A clear workflow built to move your project from first
                conversation to polished launch, with the right foundation for
                ongoing visibility, traffic, and results.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="group rounded-[1.75rem] border border-[#1b1713]/10 bg-[#f8f4ec]/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(27,23,19,0.07)]">
                  <div className="mb-16 flex items-center justify-between">
                    <p className="font-serif text-4xl text-[#1b1713]/25">
                      {step.number}
                    </p>

                    <div className="h-px w-12 bg-[#1b1713]/15 transition-all duration-500 group-hover:w-20 group-hover:bg-[#1b1713]/35" />
                  </div>

                  <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">
                    {step.title}
                  </h3>

                  <p className="mt-6 text-base leading-relaxed text-[#1b1713]/50">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-10 shadow-[0_30px_100px_rgba(27,23,19,0.06)] md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Your website
                  <br />
                  should do more
                  <br />
                  than look good.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-[#1b1713]/60">
                  Whether you're launching a new business, redesigning your
                  current site, or looking to bring in more leads through Google
                  and Meta advertising, Jovavo helps you build a stronger
                  digital foundation.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1b1713] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90"
              >
                Start Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}