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

const growthServices = [
  {
    title: "Website Creation",
    description:
      "Custom websites, landing pages, ecommerce experiences, and redesigns built to look premium, load fast, and convert visitors into customers.",
  },
  {
    title: "Google Advertising",
    description:
      "Search campaigns designed to help your business appear when customers are actively looking for your products or services.",
  },
  {
    title: "Meta Advertising",
    description:
      "Facebook and Instagram campaigns built for awareness, retargeting, lead generation, and customer growth.",
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "We learn about your business, audience, goals, current website, and what growth means for you.",
  },
  {
    title: "Strategy",
    text: "We plan the structure, content, user experience, and direction before anything is designed.",
  },
  {
    title: "Design",
    text: "We create a polished visual system that feels premium, intentional, and aligned with your brand.",
  },
  {
    title: "Develop",
    text: "We build a fast, responsive website with clean code, strong performance, and scalable foundations.",
  },
  {
    title: "Launch",
    text: "We test, optimize, connect analytics, and prepare your website for a confident launch.",
  },
  {
    title: "Grow",
    text: "We support your next phase with SEO foundations, analytics, updates, and digital advertising.",
  },
];

const benefits = [
  "Custom designed",
  "Mobile optimized",
  "Fast loading",
  "SEO ready",
  "Conversion focused",
  "Built to scale",
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
        <div className="absolute inset-0 bg-[#1b1713]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#f5f1e8]/10" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 text-center text-white">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/75">
              Websites & Digital Advertising
            </p>

            <h1 className="mx-auto max-w-6xl font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.1em] md:text-7xl">
              Premium websites
              <br />
              built to grow
              <br />
              your business.
            </h1>

            <div className="mx-auto mt-8 h-px w-24 bg-white/50" />

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed tracking-[0.08em] text-white/80 md:text-lg">
              Jovavo designs and develops custom websites, then supports growth
              through Google Ads, Meta advertising, SEO foundations, and
              conversion-focused digital strategy.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#1b1713]"
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
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
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
              We help businesses turn their online presence into a stronger
              growth system through custom website design, modern development,
              advertising strategy, and clear digital foundations.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 70}>
              <div className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-7 py-5 text-center text-xs uppercase tracking-[0.24em] text-[#1b1713]/60 shadow-[0_15px_50px_rgba(27,23,19,0.04)] transition hover:-translate-y-1 hover:bg-white">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
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
                <div className="group min-h-[380px] rounded-[2rem] border border-[#1b1713]/10 bg-[#f8f4ec] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(27,23,19,0.07)]">
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

      {/* WHY JOVAVO */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_100px_rgba(27,23,19,0.06)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-10 md:p-14">
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                  Why Jovavo
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.04] tracking-[0.08em] md:text-6xl">
                  More than
                  <br />
                  a pretty
                  <br />
                  homepage.
                </h2>

                <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
                  Your website should feel premium, work smoothly, guide people
                  clearly, and help turn attention into action.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#1b1713]/10">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="bg-[#fcfaf6] p-8 transition hover:bg-white md:p-10"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#1b1713]/30">
                      0{index + 1}
                    </p>

                    <h3 className="mt-8 font-serif text-2xl tracking-[-0.03em] text-[#1b1713]">
                      {benefit}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/35">
                  Our Process
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
                  From idea
                  <br />
                  to launch.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                Every project follows a clear, collaborative process so you
                always know what is happening, what comes next, and how your
                website is moving toward launch.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-gradient-to-br from-[#fdfcf9] to-[#f7f3ec] shadow-[0_40px_120px_rgba(27,23,19,0.08)]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group min-h-[260px] border-b border-r border-[#1b1713]/10 bg-[#fcfaf6] p-8 transition-all duration-300 hover:bg-white md:p-10"
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

          <Reveal>
            <div className="mt-12 flex justify-center">
              <Link
                href="/process"
                className="group inline-flex items-center gap-3 rounded-full border border-[#1b1713]/15 bg-[#f8f4ec] px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition hover:bg-[#1b1713] hover:text-white"
              >
                View Full Process
                <ArrowUpRight
                  size={15}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NYC SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-32">
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

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#1b1713] p-10 text-white shadow-[0_40px_120px_rgba(27,23,19,0.18)] md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/45">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Your website
                  <br />
                  should do more
                  <br />
                  than look good.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Whether you're launching a new business, redesigning your
                  current site, or looking to bring in more leads through Google
                  and Meta advertising, Jovavo helps you build a stronger
                  digital foundation.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
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