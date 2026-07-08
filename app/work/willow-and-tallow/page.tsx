import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  ["Project Type", "Coming Soon Landing Page"],
  ["Role", "Brand • Design • Development"],
  ["Focus", "Waitlist & Brand Launch"],
  ["Status", "In Development"],
];

const sections = [
  {
    title: "Brand Experience",
    items: [
      "Soft visual identity",
      "Nature-inspired direction",
      "Elegant typography",
      "Warm color palette",
      "Launch messaging",
      "Premium simplicity",
    ],
  },
  {
    title: "Website Experience",
    items: [
      "Coming soon page",
      "Waitlist signup",
      "Launch discount message",
      "Responsive design",
      "Social callout",
      "Minimal interface",
    ],
  },
  {
    title: "Customer Journey",
    items: [
      "Clear brand promise",
      "Email capture",
      "Early audience building",
      "Trust-focused copy",
      "Launch anticipation",
      "Simple conversion path",
    ],
  },
  {
    title: "Technology",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Cloudflare",
    ],
  },
];

const delivered = [
  "Coming soon landing page",
  "Waitlist signup experience",
  "Launch discount messaging",
  "Brand positioning",
  "Responsive design",
  "Soft visual direction",
  "Simple conversion flow",
  "Social media callout",
  "Domain setup",
  "Production deployment",
];

export default function WillowAndTallowCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-40">
        <Reveal>
          <Link
            href="/work"
            className="mb-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#1b1713]/45 transition hover:text-[#1b1713]"
          >
            ← Back to Work
          </Link>

          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Case Study
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <h1 className="max-w-6xl font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
              Willow
              <br />& Tallow.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
              A soft, nature-inspired skincare brand currently in development,
              beginning with a refined coming-soon landing page, waitlist
              signup, launch discount messaging, and a calm visual identity
              built around simplicity, tradition, and handcrafted ingredients.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-4">
          {stats.map(([label, value], index) => (
            <Reveal key={label} delay={index * 90}>
              <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7 shadow-[0_20px_70px_rgba(27,23,19,0.04)]">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#1b1713]/35">
                  {label}
                </p>

                <p className="text-lg font-medium leading-snug tracking-tight text-[#1b1713]/80">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* HOMEPAGE IMAGE */}
        <Reveal>
          <section className="mt-20">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Homepage Preview
            </p>

            <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-4 shadow-[0_40px_120px_rgba(27,23,19,0.12)] md:p-5">
              <img
                src="/images/work/willow-and-tallow-homepage.png"
                alt="Willow & Tallow coming soon homepage"
                className="h-auto w-full rounded-[2rem] object-cover"
              />
            </div>
          </section>
        </Reveal>

        {/* OVERVIEW */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-8 text-white md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Overview
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
              A calm launch
              <br />
              experience for a
              <br />
              thoughtful brand.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/60">
                Willow & Tallow is being developed as a skincare brand rooted in
                nature, tradition, and simple ingredients. The first phase of
                the website focuses on establishing the brand presence and
                capturing early interest before the product collection launches.
              </p>

              <p className="text-lg leading-relaxed text-white/60">
                The coming-soon page introduces the visual identity, brand
                promise, social presence, and waitlist offer in a clean,
                calming, and conversion-focused layout designed to feel warm and
                trustworthy.
              </p>
            </div>
          </section>
        </Reveal>

        {/* CHALLENGE / SOLUTION */}
        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] md:p-12">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                The Challenge
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-5xl">
                Launch the brand before the full store is ready.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#1b1713]/55">
                The brand needed a professional online presence before the full
                ecommerce experience was complete. The first step was to create
                a landing page that could communicate the story, introduce the
                aesthetic, grow an email list, and build anticipation for the
                first product collection.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 md:p-12">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                The Solution
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-5xl">
                A refined coming-soon page built to collect early interest.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#1b1713]/55">
                Jovavo created a minimal landing page focused on clarity,
                softness, and conversion. The experience includes a strong brand
                mark, tagline, waitlist signup, launch discount incentive, and
                social media callout to start building an audience before the
                full product launch.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Project Highlights
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
              Built to introduce the brand and prepare for launch.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 100}>
                <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_35px_100px_rgba(27,23,19,0.08)] md:p-10">
                  <h3 className="mb-8 font-serif text-3xl font-light uppercase tracking-[0.08em] md:text-4xl">
                    {section.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#1b1713]/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHAT WE DELIVERED */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] md:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                  What We Delivered
                </p>

                <h2 className="font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
                  Brand,
                  <br />
                  landing page,
                  <br />
                  launch list.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {delivered.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#1b1713]/60"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* DESIGN PRINCIPLES */}
        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Calm Identity",
              text: "A soft visual system with natural tones, elegant typography, and generous spacing to reflect warmth and simplicity.",
            },
            {
              title: "Waitlist Focus",
              text: "The page is structured around a simple email signup flow supported by clear messaging and a launch discount incentive.",
            },
            {
              title: "Launch Ready",
              text: "The foundation is built to expand into a fuller ecommerce experience as products, collections, and brand assets are finalized.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbf8f2] md:p-10">
                <p className="mb-8 font-serif text-5xl text-[#1b1713]/20">
                  0{index + 1}
                </p>

                <h3 className="font-serif text-3xl font-light uppercase tracking-[0.08em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-[#1b1713]/55">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* RESULT */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  The Result
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
                  A polished first impression before launch.
                </h2>

                <p className="mt-6 max-w-3xl leading-relaxed text-white/60">
                  Willow & Tallow now has a calm, branded landing page that
                  introduces the company, communicates the product direction,
                  encourages email signups, promotes the launch incentive, and
                  creates a professional foundation for the upcoming ecommerce
                  experience.
                </p>
              </div>

              <a
                href="https://willowandtallow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Visit Website
                <ArrowUpRight size={15} />
              </a>
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="mt-10 rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                  Start Your Brand
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Launching
                  <br />
                  something new?
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1b1713] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90"
              >
                Start Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}