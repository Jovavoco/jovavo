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
  {
    title: "Custom Websites",
    text: "Premium websites designed to build trust, look refined, and convert visitors into customers.",
  },
  {
    title: "Ecommerce",
    text: "Modern online stores built with clear product pages, smooth shopping flows, and scalable foundations.",
  },
  {
    title: "Digital Ads",
    text: "Google and Meta campaigns designed to help businesses generate more traffic, leads, and sales.",
  },
];

const process = [
  "Discover",
  "Strategy",
  "Design",
  "Develop",
  "Launch",
  "Grow",
];

const benefits = [
  "Custom design",
  "Mobile optimized",
  "Fast loading",
  "SEO foundations",
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
        }}
      >
        <div className="absolute inset-0 bg-[#1b1713]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#f5f1e8]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 text-white">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/70">
                Websites & Digital Advertising
              </p>

              <h1 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl lg:text-8xl">
                Websites that
                <br />
                look premium
                <br />
                and perform.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
                Jovavo designs and develops custom websites for businesses that
                want a stronger digital presence, better customer trust, and
                more room to grow.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
                >
                  Start a Project
                  <ArrowUpRight size={15} />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-white/40 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:bg-white hover:text-[#1b1713]"
                >
                  View Work
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                Jovavo
              </p>

              <h2 className="font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-7xl">
                Digital design
                <br />
                built for
                <br />
                business growth.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
              We combine design, development, strategy, and advertising to help
              businesses create websites that feel elevated, work smoothly, and
              support real growth.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 100}>
              <div className="group min-h-[340px] rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_25px_80px_rgba(27,23,19,0.05)] transition-all duration-500 hover:-translate-y-1 hover:bg-white">
                <div className="mb-16 flex items-center justify-between">
                  <p className="font-serif text-5xl text-[#1b1713]/20">
                    0{index + 1}
                  </p>

                  <ArrowUpRight
                    size={20}
                    className="text-[#1b1713]/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1b1713]"
                  />
                </div>

                <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">
                  {service.title}
                </h3>

                <p className="mt-6 leading-relaxed text-[#1b1713]/55">
                  {service.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[2.5rem] bg-[#fbf8f2] p-10 shadow-[0_30px_100px_rgba(27,23,19,0.06)] md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                Websites
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-6xl">
                Designed to
                <br />
                make your brand
                <br />
                feel credible.
              </h2>

              <p className="mt-8 leading-relaxed text-[#1b1713]/55">
                Every website is built with clean layouts, clear messaging,
                mobile responsiveness, performance, and a visual direction that
                helps your business look established.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2.5rem] bg-[#1b1713] p-10 text-white shadow-[0_30px_100px_rgba(27,23,19,0.12)] md:p-14">
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40">
                Growth
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-6xl">
                Built to
                <br />
                turn attention
                <br />
                into action.
              </h2>

              <p className="mt-8 leading-relaxed text-white/60">
                After launch, your website can become the foundation for Google
                Ads, Meta campaigns, SEO, analytics, retargeting, and long-term
                digital growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                Process
              </p>

              <h2 className="font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-7xl">
                Clear from
                <br />
                start to launch.
              </h2>
            </div>

            <Link
              href="/process"
              className="inline-flex w-fit items-center gap-3 rounded-full border border-[#1b1713]/15 px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition hover:bg-[#1b1713] hover:text-white"
            >
              View Process
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2]">
          {process.map((step, index) => (
            <div
              key={step}
              className="grid border-b border-[#1b1713]/10 p-8 transition hover:bg-white md:grid-cols-[160px_1fr_auto] md:items-center md:p-10 last:border-b-0"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#1b1713]/35">
                0{index + 1}
              </p>

              <h3 className="mt-4 font-serif text-3xl uppercase tracking-[0.08em] md:mt-0">
                {step}
              </h3>

              <ArrowUpRight size={18} className="mt-6 text-[#1b1713]/30 md:mt-0" />
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                  Why It Works
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-7xl">
                  Built with
                  <br />
                  intention.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-full border border-[#1b1713]/10 bg-[#f8f4ec] px-6 py-5 text-sm uppercase tracking-[0.22em] text-[#1b1713]/60"
                  >
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NYC / ABOUT */}
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
      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <div className="rounded-[3rem] bg-[#1b1713] p-10 text-white shadow-[0_40px_120px_rgba(27,23,19,0.18)] md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/45">
              Start a Project
            </p>

            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Your website should
                  <br />
                  feel as strong as
                  <br />
                  your business.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Let’s create a polished digital presence that helps people
                  understand your brand, trust your business, and take action.
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