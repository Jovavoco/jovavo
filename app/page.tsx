import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  "Custom Websites",
  "Ecommerce",
  "Admin Dashboards",
  "Customer Portals",
  "Digital Growth",
  "Website Care",
];

const process = [
  ["01", "Discover"],
  ["02", "Design"],
  ["03", "Develop"],
  ["04", "Launch"],
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
        <div className="absolute inset-0 bg-[#1b1713]/35" />

  <div
    className="absolute inset-x-0 bottom-0 z-0 h-[420px]"
    style={{
      background:
        "linear-gradient(to bottom, rgba(245,241,232,0) 0%, rgba(245,241,232,0.15) 35%, #f5f1e8 100%)",
    }}
  />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 text-center text-white">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/70">
              Custom Websites & Digital Growth
            </p>

            <h1 className="mx-auto max-w-5xl font-serif text-5xl font-light uppercase leading-[1.08] tracking-[0.12em] md:text-7xl">
              Digital experiences
              <br />
              that elevate your brand.
            </h1>

            <div className="mx-auto mt-8 h-px w-20 bg-white/50" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed tracking-[0.12em] text-white/75 md:text-lg">
              We design and build refined websites, ecommerce systems, and
              digital solutions that help businesses grow with confidence.
            </p>

            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-3 border border-white/50 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#1b1713]"
            >
              View Our Services
              <ArrowUpRight size={15} />
            </Link>
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
                Built with
                <br />
                strategy.
                <br />
                Designed to last.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
              Jovavo helps brands, businesses, creators, and organizations turn
              ideas into polished digital experiences through thoughtful design,
              modern development, and long-term growth support.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 80}>
              <div className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-7 py-5 text-center text-xs uppercase tracking-[0.24em] text-[#1b1713]/55">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NYC SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
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
                    Rooted in a city built on ambition, Jovavo creates digital
                    foundations that feel refined, functional, and ready to grow.
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
            to launch.
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/50">
          A clear, thoughtful workflow built to move your project from first
          conversation to polished launch with structure, clarity, and intention.
        </p>
      </div>
    </Reveal>

    <div className="mt-20 grid gap-4 md:grid-cols-4">
      {process.map(([number, title], index) => (
        <Reveal key={title} delay={index * 100}>
          <div className="group rounded-[1.75rem] border border-[#1b1713]/10 bg-[#f8f4ec]/70 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(27,23,19,0.07)]">
            <div className="mb-16 flex items-center justify-between">
              <p className="font-serif text-4xl text-[#1b1713]/25">
                {number}
              </p>

              <div className="h-px w-12 bg-[#1b1713]/15 transition-all duration-500 group-hover:w-20 group-hover:bg-[#1b1713]/35" />
            </div>

            <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">
              {title}
            </h3>

            <p className="mt-6 text-base leading-relaxed text-[#1b1713]/50">
              {title === "Discover" &&
                "We clarify your goals, audience, timeline, and vision before anything is designed."}

              {title === "Design" &&
                "We shape the visual direction, page structure, user flow, and overall experience."}

              {title === "Develop" &&
                "We build the site with clean structure, responsive design, and scalable foundations."}

              {title === "Launch" &&
                "We test, refine, connect your domain, and prepare your website for a smooth launch."}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<section className="mx-auto max-w-7xl px-6 py-28">
  <Reveal>
<div
  className="absolute inset-x-0 bottom-0 z-0 h-[280px]"
  style={{
    background:
      "linear-gradient(to bottom, rgba(245,241,232,0) 0%, rgba(245,241,232,0.04) 70%, #f5f1e8 100%)",
  }}
/>
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
            Start a Project
          </p>

          <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
            Beautiful websites
            <br />
            begin with great
            <br />
            conversations.
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed text-[#1b1713]/60">
            Whether you're launching your first business or reimagining an
            existing one, Jovavo creates thoughtful digital experiences designed
            to grow with you. 
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
  </Reveal>
</section>
    </main>
  );
}