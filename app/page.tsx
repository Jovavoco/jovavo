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
      <section className="bg-[#ece5da] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Process
            </p>

            <h2 className="font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
              From idea
              <br />
              to launch.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {process.map(([number, title], index) => (
              <Reveal key={title} delay={index * 100}>
                <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#f5f1e8] p-8">
                  <p className="font-serif text-4xl text-[#1b1713]/35">
                    {number}
                  </p>

                  <h3 className="mt-10 font-serif text-3xl uppercase tracking-[0.08em]">
                    {title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-[#1b1713]/55">
                    A clear, thoughtful step designed to bring your website to
                    life with structure, polish, and intention.
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
          <div className="rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
                  Ready to build something that works beautifully?
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Whether you need a website, ecommerce platform, digital
                  system, or long-term growth support, Jovavo can help bring
                  your vision to life.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
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