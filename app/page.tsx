import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  MonitorSmartphone,
  Megaphone,
  Search,
  BarChart3,
  Gauge,
  Sparkles,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Websites & Digital Advertising",
  description:
    "Jovavo creates custom websites and manages Google and Meta advertising for businesses looking to grow online, generate leads, and convert more customers.",
};

const featurePanels = [
  {
    eyebrow: "Website Design",
    icon: MonitorSmartphone,
    title: "Custom websites built to make your business look established.",
    description:
      "Polished, responsive websites with clean layouts, strong messaging, fast performance, and a premium visual direction tailored to your brand.",
    link: "/services",
    linkText: "Explore Websites",
    features: [
      { icon: Sparkles, label: "Custom Design" },
      { icon: Gauge, label: "Fast Performance" },
      { icon: ShieldCheck, label: "SEO Ready" },
    ],
  },
  {
    eyebrow: "Digital Advertising",
    icon: Megaphone,
    title: "Campaigns built to turn attention into real customer action.",
    description:
      "Google Ads and Meta campaigns built to drive qualified traffic, generate leads, retarget visitors, and show what is working.",
    link: "/services",
    linkText: "Explore Growth",
    features: [
      { icon: Search, label: "Google Ads" },
      { icon: MousePointerClick, label: "Meta Ads" },
      { icon: BarChart3, label: "Analytics" },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section
        className="relative min-h-[100svh] overflow-hidden bg-cover bg-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('/images/jovavo-hero-bg.png')",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 94%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#1b1713]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[#f5f1e8]/10" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pb-14 pt-44 text-center text-white sm:pt-40 md:min-h-screen md:pb-0 md:pt-32">
          <Reveal>
            <p className="mb-5 px-2 text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/75 sm:text-[10px] sm:tracking-[0.28em] md:mb-8 md:text-xs md:tracking-[0.45em]">
              Websites &amp; Digital Advertising
            </p>

            <h1 className="mx-auto max-w-6xl font-serif text-[2.45rem] font-light uppercase leading-[1.02] tracking-[0.045em] sm:text-5xl sm:tracking-[0.07em] md:text-7xl md:tracking-[0.1em]">
              Premium websites
              <br />
              built to grow
              <br />
              your business.
            </h1>

            <div className="mx-auto mt-6 h-px w-16 bg-white/50 sm:mt-8 sm:w-24" />

            <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-6 tracking-[0.01em] text-white/80 sm:text-base sm:leading-7 md:mt-8 md:px-0 md:text-lg md:leading-relaxed md:tracking-[0.08em]">
              Jovavo designs and develops custom websites, then supports growth
              through Google Ads, Meta advertising, SEO foundations, and
              conversion-focused digital strategy.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/50 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-[#1b1713] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
              >
                View Services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO / WHAT WE DO */}
      <section className="px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            {/* CARD 1 */}
            <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_90px_rgba(27,23,19,0.06)] md:rounded-[3rem] md:shadow-[0_40px_120px_rgba(27,23,19,0.07)]">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-14">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#1b1713]/35 sm:mb-6 sm:text-xs sm:tracking-[0.46em]">
                    Jovavo
                  </p>

                  <h2 className="font-serif text-[2.25rem] font-light uppercase leading-[1.02] tracking-[0.045em] text-[#1b1713] sm:text-5xl sm:tracking-[0.07em] md:text-7xl">
                    Digital
                    <br />
                    experiences
                    <br />
                    built to grow.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-[#1b1713]/60 sm:mt-8 sm:text-lg sm:leading-relaxed">
                    We create polished websites and digital growth systems that
                    help businesses look established, earn trust quickly, and
                    turn visitors into real inquiries.
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3">
                    {["Websites", "Strategy", "Growth"].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#1b1713]/55 sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.22em]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[260px] overflow-hidden sm:h-[340px] lg:h-auto lg:min-h-[620px]">
                  <img
                    src="/images/jovavo-laptop.png"
                    alt="Jovavo website design on laptop"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_90px_rgba(27,23,19,0.06)] sm:mt-10 md:mt-12 md:rounded-[3rem] md:shadow-[0_40px_120px_rgba(27,23,19,0.07)]">
              {/* IMAGE HEADER */}
              <div className="relative h-[300px] overflow-hidden sm:h-[380px] md:h-[520px]">
                <img
                  src="/images/jovavo-digital-growth.png"
                  alt="Abstract digital analytics interface"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f2]/10 via-[#fbf8f2]/35 to-[#fbf8f2]" />

                <div className="absolute bottom-0 left-0 z-10 max-w-4xl p-6 sm:p-8 md:p-14">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:mb-6 sm:text-xs sm:tracking-[0.42em]">
                    What We Do
                  </p>

                  <h3 className="font-serif text-[2.15rem] font-light uppercase leading-[1.03] tracking-[0.045em] text-[#1b1713] sm:text-5xl sm:tracking-[0.08em] md:text-7xl">
                    Build the site.
                    <br />
                    Drive the growth.
                  </h3>
                </div>
              </div>

              {/* INTRO TEXT */}
              <div className="grid gap-7 border-t border-[#1b1713]/10 p-6 sm:p-8 md:p-14 lg:grid-cols-[0.85fr_1fr] lg:items-end">
                <p className="max-w-xl text-base leading-7 text-[#1b1713]/55 sm:text-lg sm:leading-relaxed">
                  A beautiful website is only the beginning. Jovavo pairs
                  premium design with clear strategy, analytics, and advertising
                  foundations so your business has room to grow.
                </p>

                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
                  {["Websites", "Google Ads", "Meta Ads"].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-[#1b1713]/10 bg-white px-4 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#1b1713]/55 sm:px-5 sm:text-[11px] sm:tracking-[0.22em]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* FEATURE CARDS */}
              <div className="grid gap-px bg-[#1b1713]/10 lg:grid-cols-2">
                {featurePanels.map((panel, index) => {
                  const MainIcon = panel.icon;

                  return (
                    <Reveal key={panel.title} delay={index * 120}>
                      <div className="h-full">
                        <div className="group relative flex h-full flex-col overflow-hidden bg-[#fbf8f2] p-6 transition-all duration-500 hover:bg-white sm:p-8 md:min-h-[560px] md:p-12">
                          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1b1713]/5 blur-3xl transition duration-500 group-hover:bg-[#1b1713]/10 md:-right-24 md:-top-24 md:h-72 md:w-72" />

                          <div className="relative z-10">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b1713] text-white shadow-[0_18px_45px_rgba(27,23,19,0.18)] md:h-16 md:w-16">
                              <MainIcon size={25} />
                            </div>

                            <div className="mt-8 h-px w-16 bg-[#1b1713]/12 md:mt-12 md:w-20" />
                          </div>

                          <div className="relative z-10 mt-8 md:mt-14 md:min-h-[250px]">
                            <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.36em] md:mb-6">
                              {panel.eyebrow}
                            </p>

                            <h3 className="max-w-xl font-serif text-[2rem] font-light leading-[1.08] tracking-[-0.03em] text-[#1b1713] sm:text-4xl md:text-5xl">
                              {panel.title}
                            </h3>

                            <p className="mt-5 max-w-xl text-base leading-7 text-[#1b1713]/60 md:mt-7 md:text-[17px] md:leading-8">
                              {panel.description}
                            </p>
                          </div>

                          <div className="relative z-10 mt-7 grid gap-2.5 md:mt-10 md:gap-3">
                            {panel.features.map((feature) => {
                              const FeatureIcon = feature.icon;

                              return (
                                <div
                                  key={feature.label}
                                  className="flex min-h-16 items-center justify-between rounded-2xl border border-[#1b1713]/10 bg-white/60 px-4 py-3 transition group-hover:bg-[#f8f4ec] md:min-h-[78px] md:px-5 md:py-4"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3eee6] text-[#1b1713]/70 md:h-10 md:w-10">
                                      <FeatureIcon
                                        size={17}
                                        strokeWidth={1.8}
                                      />
                                    </div>

                                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#1b1713]/60 sm:text-sm sm:tracking-[0.2em]">
                                      {feature.label}
                                    </span>
                                  </div>

                                  <ArrowUpRight
                                    size={15}
                                    className="text-[#1b1713]/25"
                                  />
                                </div>
                              );
                            })}
                          </div>

                          <div className="relative z-10 mt-8 md:mt-auto md:pt-12">
                            <Link
                              href={panel.link}
                              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90 sm:w-auto sm:px-7 sm:text-[11px] sm:tracking-[0.26em]"
                            >
                              {panel.linkText}
                              <ArrowUpRight size={15} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NYC SECTION */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_90px_rgba(27,23,19,0.06)] md:rounded-[2.5rem] md:shadow-[0_30px_100px_rgba(27,23,19,0.06)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between p-6 sm:p-8 md:min-h-[520px] md:p-14">
                <div>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:mb-6 sm:text-xs sm:tracking-[0.42em]">
                    New York Studio
                  </p>

                  <h2 className="font-serif text-[2.2rem] font-light uppercase leading-[1.03] tracking-[0.045em] sm:text-4xl sm:tracking-[0.08em] md:text-6xl">
                    Built in
                    <br />
                    New York.
                    <br />
                    Made for
                    <br />
                    anywhere.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-[#1b1713]/55 sm:mt-10 sm:text-lg sm:leading-relaxed">
                    Rooted in a city built on ambition, Jovavo creates refined
                    websites and digital growth systems for businesses ready to
                    look better, perform better, and reach more customers.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#1b1713]/15 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#1b1713] hover:text-white sm:mt-12 sm:w-fit sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
                >
                  About Jovavo
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <img
                src="/images/services/nyc-skyline.jpg"
                alt="New York City skyline"
                className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#1b1713] p-6 text-white shadow-[0_30px_90px_rgba(27,23,19,0.16)] sm:p-8 md:rounded-[3rem] md:p-16 md:shadow-[0_40px_120px_rgba(27,23,19,0.18)]">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10">
              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/45 sm:mb-5 sm:text-xs sm:tracking-[0.4em]">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-[2.15rem] font-light uppercase leading-[1.08] tracking-[0.045em] sm:text-4xl sm:tracking-[0.08em] md:text-6xl">
                  Your website
                  <br />
                  should do more
                  <br />
                  than look good.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-relaxed">
                  Whether you&apos;re launching a new business, redesigning your
                  current site, or looking to bring in more leads through Google
                  and Meta advertising, Jovavo helps you build a stronger
                  digital foundation.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8] sm:w-fit sm:px-8 sm:text-[11px] sm:tracking-[0.28em]"
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