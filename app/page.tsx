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
  ShoppingBag,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Websites & Digital Advertising",
  description:
    "Jovavo creates custom websites and manages Google and Meta advertising for businesses looking to grow online, generate leads, and convert more customers.",
};

const featurePanels = [
  {
    eyebrow: "Web Design & Development",
    icon: MonitorSmartphone,
    title: "Custom websites built around your business.",
    description:
      "From the first impression to the final interaction, we design and develop responsive websites that feel polished, communicate clearly, and give your business a professional presence online.",
    link: "/services",
    linkText: "Explore Websites",
    features: [
      { icon: Sparkles, label: "Custom Design" },
      { icon: Gauge, label: "Fast Performance" },
      { icon: ShieldCheck, label: "SEO Foundations" },
    ],
  },
  {
    eyebrow: "E-Commerce",
    icon: ShoppingBag,
    title: "Online stores designed around the way customers shop.",
    description:
      "We build e-commerce experiences that make it easy to discover products, navigate collections, shop across devices, and move smoothly from browsing to checkout.",
    link: "/services",
    linkText: "Explore E-Commerce",
    features: [
      { icon: MonitorSmartphone, label: "Custom Storefronts" },
      { icon: MousePointerClick, label: "Shopping Experience" },
      { icon: Gauge, label: "Mobile Optimized" },
    ],
  },
  {
    eyebrow: "Digital Advertising",
    icon: Megaphone,
    title: "Bring the right audience to what you've built.",
    description:
      "Jovavo supports your digital presence with Google Ads, Meta advertising, analytics, and conversion-focused strategy designed to turn visibility into meaningful customer action.",
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
  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-[#1b1713]/50" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[#f5f1e8]/10" />

  {/* CONTENT */}
  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pb-14 pt-44 text-center text-white sm:pt-40 md:min-h-screen md:pb-0 md:pt-32">
    <Reveal>
      {/* EYEBROW */}
      <p className="mb-5 px-2 text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/75 sm:text-[10px] sm:tracking-[0.28em] md:mb-8 md:text-xs md:tracking-[0.45em]">
        Web Design · E-Commerce · Digital Growth
      </p>

      {/* HEADING */}
      <h1 className="mx-auto max-w-6xl font-serif text-[2.45rem] font-light uppercase leading-[1.02] tracking-[0.045em] sm:text-5xl sm:tracking-[0.07em] md:text-7xl md:tracking-[0.1em]">
        Digital experiences
        <br />
        built around
        <br />
        your business.
      </h1>

      {/* DIVIDER */}
      <div className="mx-auto mt-6 h-px w-16 bg-white/50 sm:mt-8 sm:w-24" />

      {/* DESCRIPTION */}
      <p className="mx-auto mt-6 max-w-3xl px-2 text-sm leading-6 tracking-[0.01em] text-white/80 sm:text-base sm:leading-7 md:mt-8 md:px-0 md:text-lg md:leading-relaxed md:tracking-[0.04em]">
        Jovavo designs and develops custom websites and e-commerce
        experiences, then helps businesses grow through digital advertising,
        search visibility, analytics, and strategy.
      </p>

      {/* BUTTONS */}
      <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition duration-300 hover:-translate-y-1 hover:bg-[#f5f1e8] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
        >
          Start a Project
          <ArrowUpRight size={15} />
        </Link>

        <Link
          href="/work"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/50 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-[#1b1713] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
        >
          View Our Work
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
{/* INTRO HEADER */}
<Reveal>
  <div className="mx-auto max-w-5xl px-2 pb-12 pt-6 text-center sm:pb-14 sm:pt-8 md:pb-16">
    <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px] sm:tracking-[0.42em]">
      What We Build
    </p>

    <h2 className="font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.02em] text-[#1b1713] sm:text-[3rem] md:text-[3.6rem] lg:text-[4rem]">
      Built around{" "}
      <span className="italic text-[#1b1713]/60">
        your brand.
      </span>
      <br className="hidden sm:block" />
      {" "}Designed to work.
    </h2>

    <div className="mx-auto mt-6 h-px w-12 bg-[#1b1713]/20" />

    <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-base sm:leading-7">
      Jovavo designs and develops custom websites and e-commerce experiences
      around your business — from how your brand looks to how customers browse,
      interact, and take action.
    </p>

    <div className="mt-7 flex flex-wrap justify-center gap-2">
      {["Web Design", "E-Commerce", "Development"].map((item) => (
        <div
          key={item}
          className="rounded-full border border-[#1b1713]/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-[#1b1713]/50 sm:px-5 sm:text-[10px]"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</Reveal>

      {/* CARD 2 */}
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_90px_rgba(27,23,19,0.06)] sm:mt-10 md:mt-12 md:rounded-[3rem] md:shadow-[0_40px_120px_rgba(27,23,19,0.07)]">
        {/* IMAGE HEADER */}
        <div className="relative h-[300px] overflow-hidden sm:h-[380px] md:h-[520px]">
          <img
            src="/images/jovavo-digital-growth.png"
            alt="Digital growth and advertising strategy"
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
            Your website is the foundation. Jovavo can take it further with
            Google Ads, Meta advertising, search visibility, analytics, and
            conversion-focused strategy designed to bring more of the right
            people to your business.
          </p>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {["Google Ads", "Meta Ads", "Analytics"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#1b1713]/10 bg-white px-4 py-3 text-center text-[10px] uppercase tracking-[0.18em] text-[#1b1713]/55 sm:px-5 sm:text-[11px] sm:tracking-[0.22em]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-px bg-[#1b1713]/10 lg:grid-cols-3">
          {featurePanels.map((panel, index) => {
            const MainIcon = panel.icon;

            return (
              <Reveal key={panel.title} delay={index * 120}>
                <div className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden bg-[#fbf8f2] p-6 transition-all duration-500 hover:bg-white sm:p-8 md:min-h-[610px] lg:p-9 xl:p-10">
                    {/* SOFT BACKGROUND GLOW */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1b1713]/5 blur-3xl transition duration-500 group-hover:bg-[#1b1713]/10" />

                    {/* ICON */}
                    <div className="relative z-10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b1713] text-white shadow-[0_18px_45px_rgba(27,23,19,0.18)]">
                        <MainIcon size={24} />
                      </div>

                      <div className="mt-8 h-px w-16 bg-[#1b1713]/12 md:mt-10 md:w-20" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 mt-8">
                      <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.3em]">
                        {panel.eyebrow}
                      </p>

                      <h3 className="max-w-xl font-serif text-[1.85rem] font-light leading-[1.08] tracking-[-0.03em] text-[#1b1713] sm:text-3xl xl:text-[2.35rem]">
                        {panel.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#1b1713]/60">
                        {panel.description}
                      </p>
                    </div>

                    {/* FEATURES */}
                    <div className="relative z-10 mt-7 grid gap-2.5">
                      {panel.features.map((feature) => {
                        const FeatureIcon = feature.icon;

                        return (
                          <div
                            key={feature.label}
                            className="flex min-h-[68px] items-center justify-between rounded-2xl border border-[#1b1713]/10 bg-white/60 px-4 py-3 transition group-hover:bg-[#f8f4ec]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f3eee6] text-[#1b1713]/70">
                                <FeatureIcon
                                  size={16}
                                  strokeWidth={1.8}
                                />
                              </div>

                              <span className="text-[10px] uppercase tracking-[0.13em] text-[#1b1713]/60 xl:text-[11px] xl:tracking-[0.16em]">
                                {feature.label}
                              </span>
                            </div>

                            <ArrowUpRight
                              size={14}
                              className="shrink-0 text-[#1b1713]/25"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* BUTTON */}
                    <div className="relative z-10 mt-8 md:mt-auto md:pt-10">
                      <Link
                        href={panel.link}
                        className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-5 py-3.5 text-[9px] uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90 xl:px-6 xl:text-[10px] xl:tracking-[0.22em]"
                      >
                        {panel.linkText}
                        <ArrowUpRight size={14} />
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

{/* CTA */}
<section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-28">
  <Reveal>
    <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#f5f1e8] md:rounded-[2.5rem]">
      <div className="px-6 py-12 text-center sm:px-10 sm:py-14 md:px-14 md:py-16">

        {/* EYEBROW */}
        <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px] sm:tracking-[0.4em]">
          Start a Project
        </p>

        {/* HEADING */}
        <h2 className="mx-auto max-w-4xl font-serif text-[2.4rem] font-light leading-[1.04] tracking-[-0.02em] text-[#1b1713] sm:text-[2.9rem] md:text-[3.5rem] lg:text-[3.8rem]">
          Your website should do more
          <br className="hidden sm:block" />
          {" "}than{" "}
          <span className="italic text-[#1b1713]/55">
            look good.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-base">
          From custom websites and e-commerce to digital advertising,
          Jovavo creates thoughtful digital experiences built around
          your business and its growth.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#1b1713] px-7 py-3.5 text-[9px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:px-8 sm:py-4 sm:text-[10px]"
          >
            Start a Project

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

      </div>
    </div>
  </Reveal>
</section>
    </main>
  );
}