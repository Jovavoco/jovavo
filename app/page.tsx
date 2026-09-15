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

{/* WHAT WE DO — COMBINED SECTION */}
<section className="px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 md:pb-28 md:pt-16">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] md:rounded-[2.5rem]">

        {/* TOP INTRO */}
        <div className="border-b border-[#1b1713]/10 px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14">
          <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-end md:gap-14">

            <div>
              <p className="mb-4 text-[9px] uppercase tracking-[0.36em] text-[#1b1713]/40 sm:text-[10px]">
                What We Do
              </p>

              <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.02em] text-[#1b1713] sm:text-[3rem] md:text-[3.6rem]">
                Built around{" "}
                <span className="italic text-[#1b1713]/55">
                  your brand.
                </span>
                <br />
                Designed to work.
              </h2>
            </div>

            <p className="max-w-xl text-[14px] leading-6 text-[#1b1713]/55 sm:text-[15px] sm:leading-7">
              Jovavo builds custom websites and e-commerce experiences, then
              helps businesses grow through digital advertising, search
              visibility, analytics, and strategy.
            </p>

          </div>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-3">

          {/* WEB DESIGN */}
          <div className="group border-b border-[#1b1713]/10 p-6 sm:p-8 md:border-b-0 md:border-r md:p-9 lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#1b1713]/35">
                01
              </span>

              <MonitorSmartphone
                size={19}
                strokeWidth={1.4}
                className="text-[#1b1713]/45"
              />
            </div>

            <h3 className="font-serif text-[1.7rem] font-light leading-tight text-[#1b1713] sm:text-[1.9rem]">
              Web Design
              <br />
              & Development
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-[#1b1713]/55">
              Custom, responsive websites designed around your brand,
              customers, and business goals.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition hover:text-[#1b1713]"
            >
              Explore Websites
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* E-COMMERCE */}
          <div className="group border-b border-[#1b1713]/10 p-6 sm:p-8 md:border-b-0 md:border-r md:p-9 lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#1b1713]/35">
                02
              </span>

              <ShoppingBag
                size={19}
                strokeWidth={1.4}
                className="text-[#1b1713]/45"
              />
            </div>

            <h3 className="font-serif text-[1.7rem] font-light leading-tight text-[#1b1713] sm:text-[1.9rem]">
              E-Commerce
              <br />
              Experiences
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-[#1b1713]/55">
              Thoughtful online stores that make discovering products,
              shopping, and checkout feel effortless.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition hover:text-[#1b1713]"
            >
              Explore E-Commerce
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* DIGITAL GROWTH */}
          <div className="group p-6 sm:p-8 md:p-9 lg:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#1b1713]/35">
                03
              </span>

              <Megaphone
                size={19}
                strokeWidth={1.4}
                className="text-[#1b1713]/45"
              />
            </div>

            <h3 className="font-serif text-[1.7rem] font-light leading-tight text-[#1b1713] sm:text-[1.9rem]">
              Digital
              <br />
              Growth
            </h3>

            <p className="mt-4 text-[14px] leading-6 text-[#1b1713]/55">
              Google Ads, Meta advertising, analytics, and strategy designed
              to bring the right audience to your business.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition hover:text-[#1b1713]"
            >
              Explore Growth
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

        </div>
      </div>
    </Reveal>
  </div>
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