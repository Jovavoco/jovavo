import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jovavo",
  description:
    "Learn about Jovavo, our approach to design, development, performance, and building websites that help businesses grow.",
};

import Link from "next/link";
import Reveal from "@/components/Reveal";

const values = [
  {
    title: "Purposeful Design",
    description:
      "Every project begins with strategy. Beautiful design should guide users, build trust, and support business goals—not simply look good.",
  },
  {
    title: "Custom Development",
    description:
      "Every website is built around the business itself, from ecommerce platforms and customer portals to admin dashboards and custom functionality.",
  },
  {
    title: "Built to Grow",
    description:
      "Jovavo creates scalable digital foundations that evolve alongside your business through automation, integrations, and continuous improvements.",
  },
];

const numbers = [
  ["100%", "Custom Built"],
  ["Next.js", "Modern Framework"],
  ["New York", "Based"],
  ["Design + Development", "Every Project"],
];

const capabilities = [
  "Custom Websites",
  "Ecommerce",
  "Admin Dashboards",
  "Customer Portals",
  "Business Automation",
  "Inventory Systems",
  "Email Marketing",
  "Google Ads",
  "Meta Ads",
  "SEO",
  "Website Maintenance",
  "Analytics",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-28">
        {/* Hero */}

        <Reveal>
          <section className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                About Jovavo
              </p>

              <h1 className="font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
                Building digital
                <br />
                experiences with
                <br />
                intention.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
                Jovavo is a digital studio focused on creating premium websites,
                ecommerce platforms, and custom business systems that help
                modern companies establish a stronger online presence and
                operate more efficiently.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex w-fit rounded-full border border-[#1b1713]/15 px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#1b1713] hover:text-white"
              >
                Start a Project
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_100px_rgba(27,23,19,0.08)]">
              <img
                src="/images/about/about-hero.jpg"
                alt="About Jovavo workspace"
                className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 md:h-[620px]"
              />
            </div>
          </section>
        </Reveal>

        {/* Philosophy */}

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Our Philosophy
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
              Great websites are
              <br />
              built for people—
              <br />
              and for business.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/60">
                A website should be more than a digital brochure. It should
                create trust, communicate your brand clearly, and simplify the
                way your business operates.
              </p>

              <p className="text-lg leading-relaxed text-white/60">
                Jovavo combines thoughtful design with modern development to
                create digital platforms that are elegant, scalable, and built
                around the unique needs of every client.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Values */}

        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              What We Believe
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
              Design, development,
              <br />
              and long-term growth.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 120}>
                <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_35px_100px_rgba(27,23,19,0.08)]">
                  <h3 className="font-serif text-3xl font-light uppercase tracking-[0.08em]">
                    {value.title}
                  </h3>

                  <p className="mt-6 text-lg leading-relaxed text-[#1b1713]/55">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Stats */}

        <section className="mt-24 grid gap-5 md:grid-cols-4">
          {numbers.map(([value, label], index) => (
            <Reveal key={value} delay={index * 120}>
              <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7 shadow-[0_20px_70px_rgba(27,23,19,0.04)]">
                <h2 className="font-serif text-3xl font-light uppercase tracking-[0.08em]">
                  {value}
                </h2>

                <p className="mt-3 text-sm uppercase tracking-[0.25em] text-[#1b1713]/45">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Capabilities */}

        <Reveal>
          <section className="mt-24 rounded-[3rem] border border-[#1b1713]/10 bg-[#efe9df] p-10">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
              Capabilities
            </p>

            <div className="flex flex-wrap gap-3">
              {capabilities.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#1b1713]/55"
                >
                  {service}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CTA */}

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  Let's Build Together
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
                  Every great project
                  <br />
                  starts with a
                  <br />
                  conversation.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Whether you're launching a new business or modernizing an
                  existing one, Jovavo can help turn your vision into a polished
                  digital experience.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Start a Project
              </Link>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}