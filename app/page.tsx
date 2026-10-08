import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Compass,
  Gauge,
  Globe2,
  Headphones,
  LayoutTemplate,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

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
    link: "/services#website-design",
    linkText: "Explore Websites",
    features: [
      {
        icon: Sparkles,
        label: "Custom Design",
      },
      {
        icon: MonitorSmartphone,
        label: "Mobile Friendly",
      },
      {
        icon: Gauge,
        label: "Fast Performance",
      },
    ],
  },
  {
    eyebrow: "E-Commerce",
    icon: ShoppingBag,
    title: "Online stores designed around the way customers shop.",
    description:
      "We build e-commerce experiences that make it easy to discover products, navigate collections, shop across devices, and move smoothly from browsing to checkout.",
    link: "/services#web-development",
    linkText: "Explore E-Commerce",
    features: [
      {
        icon: ShoppingBag,
        label: "Custom Storefronts",
      },
      {
        icon: MousePointerClick,
        label: "Shopping Experience",
      },
      {
        icon: Code2,
        label: "Custom Functionality",
      },
    ],
  },
  {
    eyebrow: "Digital Growth",
    icon: Megaphone,
    title: "Bring the right audience to what you've built.",
    description:
      "Jovavo supports your digital presence with Google Ads, Meta advertising, search visibility, analytics, and conversion-focused strategy.",
    link: "/services#digital-growth",
    linkText: "Explore Growth",
    features: [
      {
        icon: Search,
        label: "Google Ads",
      },
      {
        icon: Megaphone,
        label: "Meta Ads",
      },
      {
        icon: BarChart3,
        label: "Analytics",
      },
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discover",
    icon: Compass,
    description: "Understand your business, goals, and audience.",
  },
  {
    number: "02",
    title: "Structure",
    icon: LayoutTemplate,
    description: "Plan the pages, content, and customer journey.",
  },
  {
    number: "03",
    title: "Design",
    icon: Sparkles,
    description: "Shape the visual direction and user experience.",
  },
  {
    number: "04",
    title: "Develop",
    icon: Code2,
    description: "Build the responsive website and functionality.",
  },
  {
    number: "05",
    title: "Launch",
    icon: Rocket,
    description: "Test, optimize, connect, and go live.",
  },
  {
    number: "06",
    title: "Support",
    icon: Headphones,
    description: "Continue improving as your business grows.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
{/* =========================================================
    HERO
========================================================= */}

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
  {/* =====================================================
      OVERLAYS
  ===================================================== */}

  <div className="absolute inset-0 bg-[#17130f]/48" />

  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-[#17130f]/20" />

  {/* subtle center glow */}
  <div
    className="pointer-events-none absolute inset-0 opacity-60"
    style={{
      background:
        "radial-gradient(circle at 50% 47%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 28%, transparent 58%)",
    }}
  />

  {/* =====================================================
      HERO CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center pb-20 pt-40 text-center text-white sm:pt-36 md:min-h-screen md:pb-10 md:pt-28">
   <Reveal>
  <p className="mb-5 px-2 text-[9px] font-medium uppercase tracking-[0.22em] text-white/65 sm:text-[10px] md:mb-6">
    Web Design · E-Commerce · Digital Growth
  </p>

  <h1 className="mx-auto max-w-4xl font-serif text-[2.35rem] font-light leading-[1.02] tracking-[-0.03em] antialiased sm:text-[3rem] md:text-[3.65rem] lg:text-[4.15rem]">
    Digital experiences
    <br />
    built around
    <br />
    <span className="italic font-light text-white/70">
      your business.
    </span>
  </h1>

  <div className="mx-auto mt-6 h-px w-12 bg-white/35 sm:mt-7 sm:w-14" />

  <p className="mx-auto mt-5 max-w-xl px-3 text-[13px] font-normal leading-[1.7] tracking-[0.005em] text-white/70 sm:text-[14px] md:mt-6 md:px-0">
    Jovavo designs and develops custom websites and e-commerce
    experiences, then helps businesses grow through digital
    advertising, search visibility, analytics, and strategy.
  </p>

  <div className="mx-auto mt-7 flex w-full max-w-sm flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center">
    <Link
      href="/consultation"
      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#1b1713] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f8f5ef] sm:w-auto"
    >
      Book a Consultation

      <ArrowUpRight
        size={13}
        strokeWidth={1.6}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>

    <Link
      href="/work"
      className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/40 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1b1713] sm:w-auto"
    >
      View Our Work

      <ArrowUpRight
        size={13}
        strokeWidth={1.6}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  </div>
</Reveal>

    {/* =====================================================
        SCROLL INDICATOR
    ===================================================== */}

    <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
      <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/40">
        Scroll
      </span>

      <div className="relative h-10 w-px overflow-hidden bg-white/20">
        <div className="absolute left-0 top-0 h-4 w-px animate-pulse bg-white/70" />
      </div>
    </div>
  </div>
</section>

{/* =========================================================
    SELECTED WORK
========================================================= */}

<section className="bg-[#f8f5ef] px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    {/* TOP RULE */}
    <div className="mb-10 h-px w-full bg-[#1b1713]/10 md:mb-12" />

    <div className="grid gap-10 lg:grid-cols-[0.58fr_2.42fr] lg:gap-14">

      {/* =====================================================
          INTRO
      ===================================================== */}

      <Reveal>
        <div className="flex h-full flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#1b1713]/45">
                Selected Work
              </p>

              <span className="h-px w-8 bg-[#1b1713]/20" />
            </div>

            <h2 className="mt-5 max-w-[260px] font-serif text-[2.35rem] font-light leading-[0.98] tracking-[-0.035em] text-[#1b1713] sm:text-[2.65rem] lg:text-[2.9rem]">
              Real brands.
              <br />
              Real results.
            </h2>

            <p className="mt-5 max-w-[245px] text-[12px] font-light leading-[1.7] text-[#1b1713]/55">
              Selected businesses we&apos;ve partnered with to design,
              develop, and strengthen their online presence.
            </p>
          </div>

          <Link
            href="/work"
            className="group mt-8 inline-flex w-fit items-center gap-2.5 text-[8px] font-medium uppercase tracking-[0.22em] text-[#1b1713]/70 transition-colors duration-300 hover:text-[#1b1713]"
          >
            <span className="border-b border-[#1b1713]/25 pb-1.5 transition-colors duration-300 group-hover:border-[#1b1713]">
              View All Work
            </span>

            <ArrowUpRight
              size={11}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </Reveal>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <div className="grid gap-8 md:grid-cols-2 md:gap-6">

        {/* ===================================================
            WILLOW & TALLOW
        =================================================== */}

        <Reveal>
          <Link
            href="/work/willow-and-tallow"
            className="group block"
          >
            {/* IMAGE */}

            <div className="relative aspect-[1.5/1] overflow-hidden bg-[#e9e3da]">
              <img
                src="/images/work/willow-tallow.png"
                alt="Willow & Tallow website designed by Jovavo"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.018]"
              />

              {/* SUBTLE HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#1b1713]/0 transition-colors duration-500 group-hover:bg-[#1b1713]/[0.025]" />
            </div>

            {/* INFO */}

            <div className="flex items-start justify-between gap-5 pt-4">
              <div>
                <h3 className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#1b1713]">
                  Willow &amp; Tallow
                </h3>

                <p className="mt-1.5 text-[8px] uppercase tracking-[0.16em] text-[#1b1713]/40">
                  E-Commerce · Branding · Web Design
                </p>
              </div>

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1b1713]/20 text-[#1b1713]/65 transition-all duration-300 group-hover:border-[#1b1713] group-hover:bg-[#1b1713] group-hover:text-white">
                <ArrowUpRight
                  size={10}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* ===================================================
            APEXX BIOLABS
        =================================================== */}

        <Reveal>
          <Link
            href="/work/apexx-biolabs"
            className="group block"
          >
            {/* IMAGE */}

            <div className="relative aspect-[1.5/1] overflow-hidden bg-[#171411]">
              <img
                src="/images/work/apexx-biolabs.png"
                alt="Apexx Biolabs website designed and developed by Jovavo"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.018]"
              />

              {/* SUBTLE HOVER OVERLAY */}
              <div className="absolute inset-0 bg-[#1b1713]/0 transition-colors duration-500 group-hover:bg-[#1b1713]/[0.025]" />
            </div>

            {/* INFO */}

            <div className="flex items-start justify-between gap-5 pt-4">
              <div>
                <h3 className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#1b1713]">
                  Apexx Biolabs
                </h3>

                <p className="mt-1.5 text-[8px] uppercase tracking-[0.16em] text-[#1b1713]/40">
                  Web Design · Development · E-Commerce
                </p>
              </div>

              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1b1713]/20 text-[#1b1713]/65 transition-all duration-300 group-hover:border-[#1b1713] group-hover:bg-[#1b1713] group-hover:text-white">
                <ArrowUpRight
                  size={10}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </div>
  </div>
</section>

{/* =========================================================
    WHAT WE DO
========================================================= */}

<section className="bg-[#f8f5ef] px-5 pb-20 pt-6 sm:px-8 md:px-12 md:pb-24 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <Reveal>
      <div className="flex items-center gap-5 border-t border-[#1b1713]/10 pt-7">
        <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.3em] text-[#1b1713]/40">
          What We Do
        </p>

        <div className="h-px flex-1 bg-[#1b1713]/10" />

        <Link
          href="/services"
          className="group hidden shrink-0 items-center gap-2 text-[8px] font-medium uppercase tracking-[0.22em] text-[#1b1713]/45 transition-colors duration-300 hover:text-[#1b1713] sm:flex"
        >
          Explore Services

          <ArrowUpRight
            size={10}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Reveal>

    {/* =====================================================
        INTRO
    ===================================================== */}

    <Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <h2 className="max-w-[570px] font-serif text-[2.4rem] font-light leading-[0.98] tracking-[-0.04em] text-[#1b1713] sm:text-[2.75rem] md:text-[3.05rem]">
            Built for the way
            <br />
            business moves today.
          </h2>
        </div>

        <div className="md:flex md:justify-end">
          <p className="max-w-[430px] text-[11.5px] font-light leading-[1.75] text-[#1b1713]/50">
            Design, technology, and digital strategy brought together
            to create a stronger, smarter online presence.
          </p>
        </div>
      </div>
    </Reveal>

    {/* =====================================================
        SERVICES
    ===================================================== */}

    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4">

      {/* ===================================================
          WEB DESIGN
      =================================================== */}

      <Reveal>
        <Link
          href="/services#website-design"
          className="group block border-b border-[#1b1713]/10 py-9 md:border-b-0 md:border-r md:px-5 md:first:pl-0 lg:py-0"
        >
          {/* COPY */}

          <div className="h-[125px]">
            <h3 className="font-serif text-[1.75rem] font-light leading-none tracking-[-0.035em] text-[#1b1713] transition-transform duration-500 ease-out group-hover:translate-x-1">
              Web Design
            </h3>

            <p className="mt-4 max-w-[230px] text-[10.5px] font-light leading-[1.7] text-[#1b1713]/50">
              Distinctive websites built to make your business feel
              polished, memorable, and easy to trust.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative mt-6 h-[330px] overflow-hidden rounded-t-[999px] bg-[#e9e3da] lg:h-[350px] xl:h-[370px]">
            <img
              src="/images/services/web-design.jpg"
              alt="Custom web design by Jovavo"
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* HOVER TINT */}

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            {/* HOVER CTA */}

            <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white">
                  Explore Web Design
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* LABEL */}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/30">
              Design · UX · Mobile
            </p>

            <ArrowUpRight
              size={10}
              strokeWidth={1.2}
              className="shrink-0 translate-y-1 text-[#1b1713]/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-[#1b1713]/45"
            />
          </div>
        </Link>
      </Reveal>

      {/* ===================================================
          E-COMMERCE
      =================================================== */}

      <Reveal>
        <Link
          href="/services#web-development"
          className="group block border-b border-[#1b1713]/10 py-9 md:border-b-0 md:px-5 lg:border-r lg:py-0"
        >
          {/* COPY */}

          <div className="h-[125px]">
            <h3 className="font-serif text-[1.75rem] font-light leading-none tracking-[-0.035em] text-[#1b1713] transition-transform duration-500 ease-out group-hover:translate-x-1">
              E-Commerce
            </h3>

            <p className="mt-4 max-w-[230px] text-[10.5px] font-light leading-[1.7] text-[#1b1713]/50">
              Refined online stores designed to make shopping effortless
              and give your business room to grow.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative mt-6 h-[330px] overflow-hidden rounded-t-[999px] bg-[#e9e3da] lg:h-[350px] xl:h-[370px]">
            <img
              src="/images/services/ecommerce.jpg"
              alt="E-commerce website design by Jovavo"
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* HOVER TINT */}

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            {/* HOVER CTA */}

            <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white">
                  Explore E-Commerce
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* LABEL */}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/30">
              Storefront · Checkout · Commerce
            </p>

            <ArrowUpRight
              size={10}
              strokeWidth={1.2}
              className="shrink-0 translate-y-1 text-[#1b1713]/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-[#1b1713]/45"
            />
          </div>
        </Link>
      </Reveal>

      {/* ===================================================
          DEVELOPMENT
      =================================================== */}

      <Reveal>
        <Link
          href="/services#web-development"
          className="group block border-b border-[#1b1713]/10 py-9 md:border-b-0 md:border-r md:px-5 lg:py-0"
        >
          {/* COPY */}

          <div className="h-[125px]">
            <h3 className="font-serif text-[1.75rem] font-light leading-none tracking-[-0.035em] text-[#1b1713] transition-transform duration-500 ease-out group-hover:translate-x-1">
              Development
            </h3>

            <p className="mt-4 max-w-[230px] text-[10.5px] font-light leading-[1.7] text-[#1b1713]/50">
              Custom systems and functionality built around the way
              your business actually operates.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative mt-6 h-[330px] overflow-hidden rounded-t-[999px] bg-[#e9e3da] lg:h-[350px] xl:h-[370px]">
            <img
              src="/images/services/development.jpg"
              alt="Custom web development by Jovavo"
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* HOVER TINT */}

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            {/* HOVER CTA */}

            <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white">
                  Explore Development
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* LABEL */}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/30">
              Systems · Automation · Integrations
            </p>

            <ArrowUpRight
              size={10}
              strokeWidth={1.2}
              className="shrink-0 translate-y-1 text-[#1b1713]/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-[#1b1713]/45"
            />
          </div>
        </Link>
      </Reveal>

      {/* ===================================================
          DIGITAL GROWTH
      =================================================== */}

      <Reveal>
        <Link
          href="/services#digital-growth"
          className="group block py-9 md:px-5 md:last:pr-0 lg:py-0"
        >
          {/* COPY */}

          <div className="h-[125px]">
            <h3 className="font-serif text-[1.75rem] font-light leading-none tracking-[-0.035em] text-[#1b1713] transition-transform duration-500 ease-out group-hover:translate-x-1">
              Digital Growth
            </h3>

            <p className="mt-4 max-w-[230px] text-[10.5px] font-light leading-[1.7] text-[#1b1713]/50">
              Search and advertising strategies built to turn visibility
              into measurable business growth.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative mt-6 h-[330px] overflow-hidden rounded-t-[999px] bg-[#e9e3da] lg:h-[350px] xl:h-[370px]">
            <img
              src="/images/services/digital-growth.jpg"
              alt="Digital marketing and growth by Jovavo"
              className="h-full w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* HOVER TINT */}

            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

            {/* HOVER CTA */}

            <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-5 pb-5 pt-20 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-white">
                  Explore Growth
                </span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.3}
                  className="text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* LABEL */}

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/30">
              SEO · Google Ads · Meta Ads
            </p>

            <ArrowUpRight
              size={10}
              strokeWidth={1.2}
              className="shrink-0 translate-y-1 text-[#1b1713]/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-[#1b1713]/45"
            />
          </div>
        </Link>
      </Reveal>
    </div>

    {/* =====================================================
        MOBILE SERVICES LINK
    ===================================================== */}

    <div className="mt-8 sm:hidden">
      <Link
        href="/services"
        className="group inline-flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.22em] text-[#1b1713]/55 transition-colors duration-300 hover:text-[#1b1713]"
      >
        Explore Services

        <ArrowUpRight
          size={10}
          strokeWidth={1.3}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </div>

  </div>
</section>

{/* =========================================================
    OUR PROCESS
========================================================= */}

<section className="relative overflow-hidden bg-[#f8f5ef] px-5 pb-20 sm:px-8 md:px-12 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    {/* =====================================================
        SECTION HEADER
    ===================================================== */}

    <Reveal>
      <div className="flex items-center gap-5 border-t border-[#1b1713]/10 pt-7">
        <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.32em] text-[#1b1713]/55">
          Our Process
        </p>

        <div className="h-px flex-1 bg-[#1b1713]/10" />

        <Link
          href="/process"
          className="group hidden shrink-0 items-center gap-3 text-[8px] font-medium uppercase tracking-[0.28em] text-[#1b1713]/55 transition-colors duration-300 hover:text-[#1b1713] sm:flex"
        >
          About Our Process

          <ArrowUpRight
            size={11}
            strokeWidth={1.2}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Reveal>

    {/* =====================================================
        DESKTOP
    ===================================================== */}

    <div className="relative mt-7 hidden min-h-[720px] lg:block">

      {/* ===================================================
          LEFT INTRO
      =================================================== */}

      <Reveal>
        <div className="absolute left-0 top-[175px] z-10 w-[42%]">

          <h2 className="max-w-[520px] font-serif text-[5rem] font-light leading-[0.88] tracking-[-0.055em] text-[#1b1713] xl:text-[5.8rem] 2xl:text-[6.15rem]">
            From idea
            <br />

            <span className="italic">
              to impact.
            </span>
          </h2>

          <div className="mt-14 h-px w-[58px] bg-[#1b1713]/50" />

          <p className="mt-7 max-w-[390px] text-[13px] font-light leading-[1.8] text-[#1b1713]/55 xl:text-[14px]">
            A clear process built around
            <br />
            your business — from understanding
            <br />
            the goal to launching the final product.
          </p>

        </div>
      </Reveal>

      {/* ===================================================
          TIMELINE AREA
      =================================================== */}

      <div className="absolute bottom-0 right-0 top-0 w-[61%]">

        {/* =================================================
            SVG CURVE + NODES

            SVG coordinates:
            01 = 225, 70
            02 = 390, 205
            03 = 225, 325
            04 = 395, 445
            05 = 225, 555
            06 = 475, 675
        ================================================= */}

        <svg
          viewBox="0 0 760 740"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {/* MAIN FLOWING LINE */}

          <path
            d="
              M 225 70

              C 220 125,
                235 155,
                315 178

              C 350 188,
                375 193,
                390 205

              C 430 235,
                430 270,
                365 290

              C 315 305,
                265 305,
                225 325

              C 200 345,
                205 380,
                260 400

              C 310 418,
                360 420,
                395 445

              C 425 470,
                420 505,
                350 525

              C 300 540,
                255 540,
                225 555

              C 195 575,
                215 610,
                290 625

              C 365 640,
                435 645,
                475 675
            "
            fill="none"
            stroke="rgba(27,23,19,0.27)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />

          {/* =================================================
              NODE HALOS
          ================================================= */}

          {[
            [225, 70],
            [390, 205],
            [225, 325],
            [395, 445],
            [225, 555],
            [475, 675],
          ].map(([cx, cy], index) => (
            <g key={index}>

              <circle
                cx={cx}
                cy={cy}
                r="13"
                fill="#f8f5ef"
                stroke="rgba(27,23,19,0.08)"
                strokeWidth="1"
              />

              <circle
                cx={cx}
                cy={cy}
                r="8"
                fill="#f8f5ef"
                stroke="rgba(27,23,19,0.25)"
                strokeWidth="1"
              />

              <circle
                cx={cx}
                cy={cy}
                r="4.5"
                fill="#1b1713"
              />

            </g>
          ))}
        </svg>

        {/* =================================================
            01 — DISCOVER
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[5%] top-[12px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              01
            </span>

            <div className="absolute left-[178px] top-[45px] flex items-start">

              <div className="mt-[7px] h-px w-[62px] bg-[#1b1713]/35" />

              <div className="ml-4 w-[190px]">
                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                  Discover
                </p>

                <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                  Understand the business,
                  <br />
                  goals, and audience.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* =================================================
            02 — STRUCTURE
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[48%] top-[145px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              02
            </span>

            <div className="absolute left-[176px] top-[44px] w-[210px]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                Structure
              </p>

              <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                Define the pages, content,
                <br />
                and customer journey.
              </p>

            </div>
          </div>
        </Reveal>

        {/* =================================================
            03 — DESIGN
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[5%] top-[265px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              03
            </span>

            <div className="absolute left-[178px] top-[45px] flex items-start">

              <div className="mt-[7px] h-px w-[62px] bg-[#1b1713]/35" />

              <div className="ml-4 w-[190px]">
                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                  Design
                </p>

                <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                  Create the visual direction
                  <br />
                  and user experience.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* =================================================
            04 — DEVELOP
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[49%] top-[385px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              04
            </span>

            <div className="absolute left-[176px] top-[44px] w-[210px]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                Develop
              </p>

              <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                Build the website and
                <br />
                custom functionality.
              </p>

            </div>
          </div>
        </Reveal>

        {/* =================================================
            05 — LAUNCH
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[5%] top-[495px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              05
            </span>

            <div className="absolute left-[178px] top-[45px] flex items-start">

              <div className="mt-[7px] h-px w-[62px] bg-[#1b1713]/35" />

              <div className="ml-4 w-[180px]">
                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                  Launch
                </p>

                <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                  Test, refine, optimize,
                  <br />
                  and go live.
                </p>
              </div>

            </div>
          </div>
        </Reveal>

        {/* =================================================
            06 — SUPPORT
        ================================================= */}

        <Reveal>
          <div className="group absolute left-[58%] top-[610px]">

            <span className="block font-serif text-[6.8rem] font-light leading-none tracking-[-0.07em] text-[#cfc7ba]/75 transition-colors duration-500 group-hover:text-[#bcb2a3]">
              06
            </span>

            <div className="absolute left-[176px] top-[43px] w-[205px]">

              <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#1b1713]">
                Support
              </p>

              <p className="mt-3 text-[11px] font-light leading-[1.65] text-[#1b1713]/55">
                Improve and evolve
                <br />
                as your business grows.
              </p>

            </div>
          </div>
        </Reveal>

      </div>
    </div>

    {/* =====================================================
        TABLET + MOBILE
    ===================================================== */}

    <div className="mt-12 lg:hidden">

      {/* INTRO */}

      <Reveal>
        <div>

          <h2 className="font-serif text-[3.25rem] font-light leading-[0.9] tracking-[-0.05em] text-[#1b1713] sm:text-[4.2rem]">
            From idea
            <br />

            <span className="italic">
              to impact.
            </span>
          </h2>

          <div className="mt-9 h-px w-12 bg-[#1b1713]/45" />

          <p className="mt-6 max-w-[390px] text-[11.5px] font-light leading-[1.75] text-[#1b1713]/55">
            A clear process built around your business — from understanding
            the goal to launching the final product.
          </p>

        </div>
      </Reveal>

      {/* ===================================================
          MOBILE FLOW
      =================================================== */}

      <div className="relative mt-14">

        {/* CURVED / VERTICAL LINE */}

        <svg
          viewBox="0 0 80 760"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 top-0 h-full w-[55px]"
          aria-hidden="true"
        >
          <path
            d="
              M 27 25
              C 50 85, 50 120, 27 150
              C 4 185, 4 225, 27 260
              C 50 295, 50 335, 27 370
              C 4 405, 4 445, 27 480
              C 50 515, 50 555, 27 590
              C 4 625, 4 675, 27 720
            "
            fill="none"
            stroke="rgba(27,23,19,0.18)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {[
          {
            number: "01",
            title: "Discover",
            description:
              "Understand the business, goals, and audience.",
          },
          {
            number: "02",
            title: "Structure",
            description:
              "Define the pages, content, and customer journey.",
          },
          {
            number: "03",
            title: "Design",
            description:
              "Create the visual direction and user experience.",
          },
          {
            number: "04",
            title: "Develop",
            description:
              "Build the website and custom functionality.",
          },
          {
            number: "05",
            title: "Launch",
            description:
              "Test, refine, optimize, and go live.",
          },
          {
            number: "06",
            title: "Support",
            description:
              "Improve and evolve as your business grows.",
          },
        ].map((step) => (
          <Reveal key={step.number}>

            <div className="group relative flex min-h-[128px] items-center">

              {/* NODE */}

              <div className="relative z-10 flex w-[55px] shrink-0 justify-center">

                <span className="flex h-[19px] w-[19px] items-center justify-center rounded-full border border-[#1b1713]/20 bg-[#f8f5ef] shadow-[0_0_0_5px_rgba(27,23,19,0.025)]">

                  <span className="h-[6px] w-[6px] rounded-full bg-[#1b1713] transition-transform duration-500 group-hover:scale-[1.4]" />

                </span>

              </div>

              {/* NUMBER */}

              <span className="w-[90px] shrink-0 font-serif text-[4.3rem] font-light leading-none tracking-[-0.06em] text-[#cfc7ba]/70 sm:w-[115px] sm:text-[5rem]">
                {step.number}
              </span>

              {/* TEXT */}

              <div className="border-l border-[#1b1713]/10 pl-5 sm:pl-7">

                <p className="text-[7.5px] font-semibold uppercase tracking-[0.32em] text-[#1b1713]">
                  {step.title}
                </p>

                <p className="mt-2 max-w-[230px] text-[10.5px] font-light leading-[1.65] text-[#1b1713]/55">
                  {step.description}
                </p>

              </div>

            </div>

          </Reveal>
        ))}

      </div>

      {/* MOBILE LINK */}

      <Reveal>
        <Link
          href="/process"
          className="group mt-8 inline-flex items-center gap-3 text-[8px] font-medium uppercase tracking-[0.25em] text-[#1b1713]/55 transition-colors duration-300 hover:text-[#1b1713]"
        >
          About Our Process

          <ArrowUpRight
            size={10}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </Reveal>

    </div>

  </div>
</section>

{/* =========================================================
    LEAD GENERATION — START HERE
========================================================= */}

<section className="bg-[#f8f5ef] px-5 pb-20 sm:px-8 md:px-12 md:pb-24 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <Reveal>
      <div className="grid gap-8 border-t border-[#1b1713]/10 pt-9 md:grid-cols-[1.05fr_0.95fr] md:items-end md:gap-16">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-5">
            <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.28em] text-[#1b1713]/45">
              Start Here
            </p>

            <div className="h-px w-[120px] bg-[#1b1713]/10" />
          </div>

          <h2 className="mt-6 max-w-[560px] font-serif text-[2.75rem] font-light leading-[0.96] tracking-[-0.045em] text-[#1b1713] sm:text-[3.25rem] md:text-[3.7rem] lg:text-[4rem]">
            Not sure what
            <br />
            you need yet?
          </h2>
        </div>

        {/* RIGHT */}
        <div className="md:pb-3">
          <p className="max-w-[500px] text-[12px] font-light leading-[1.8] text-[#1b1713]/55 sm:text-[13px]">
            You don&apos;t need to have everything figured out before
            reaching out. Tell us where your business is now, and
            we&apos;ll help you identify the right next step.
          </p>
        </div>
      </div>
    </Reveal>


    {/* =====================================================
        OPTION CARDS
    ===================================================== */}

    <div className="mt-10 grid gap-5 md:grid-cols-3">

      {/* ===================================================
          01 — WEBSITE
      =================================================== */}

      <Reveal>
        <Link
          href="/consultation?project=website"
          className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-[#fbf9f5] shadow-[0_10px_30px_rgba(27,23,19,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,23,19,0.075)]"
        >

          {/* IMAGE */}
          <div className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[205px] lg:h-[220px]">
            <img
              src="/images/start-website.png"
              alt="Website planning and wireframe sketches"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>

          {/* CONTENT */}
          <div className="flex min-h-[255px] flex-1 flex-col px-7 pb-7 pt-6 sm:px-8">

            <span className="text-[8px] font-medium tracking-[0.2em] text-[#1b1713]/38">
              01
            </span>

            <h3 className="mt-4 font-serif text-[1.8rem] font-light leading-[1.05] tracking-[-0.03em] text-[#1b1713] sm:text-[1.95rem]">
              I need a website.
            </h3>

            <p className="mt-4 max-w-[320px] text-[11px] font-light leading-[1.7] text-[#1b1713]/50 sm:text-[11.5px]">
              Starting from scratch or ready to replace a site that
              no longer represents your business.
            </p>

            <div className="mt-auto flex items-center gap-3 pt-8 text-[8px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/65">
              Tell Us About It

              <ArrowUpRight
                size={12}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </Link>
      </Reveal>


      {/* ===================================================
          02 — REDESIGN
      =================================================== */}

      <Reveal>
        <Link
          href="/consultation?project=redesign"
          className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-[#fbf9f5] shadow-[0_10px_30px_rgba(27,23,19,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,23,19,0.075)]"
        >

          {/* IMAGE */}
          <div className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[205px] lg:h-[220px]">
            <img
              src="/images/start-redesign.png"
              alt="Website redesign displayed on a laptop"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>

          {/* CONTENT */}
          <div className="flex min-h-[255px] flex-1 flex-col px-7 pb-7 pt-6 sm:px-8">

            <span className="text-[8px] font-medium tracking-[0.2em] text-[#1b1713]/38">
              02
            </span>

            <h3 className="mt-4 font-serif text-[1.8rem] font-light leading-[1.05] tracking-[-0.03em] text-[#1b1713] sm:text-[1.95rem]">
              My website needs work.
            </h3>

            <p className="mt-4 max-w-[330px] text-[11px] font-light leading-[1.7] text-[#1b1713]/50 sm:text-[11.5px]">
              Improve the design, mobile experience, functionality,
              speed, or overall direction of your existing site.
            </p>

            <div className="mt-auto flex items-center gap-3 pt-8 text-[8px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/65">
              Explore a Redesign

              <ArrowUpRight
                size={12}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </Link>
      </Reveal>


      {/* ===================================================
          03 — GROWTH
      =================================================== */}

      <Reveal>
        <Link
          href="/consultation?project=growth"
          className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-[#fbf9f5] shadow-[0_10px_30px_rgba(27,23,19,0.045)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,23,19,0.075)]"
        >

          {/* IMAGE */}
          <div className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[205px] lg:h-[220px]">
            <img
              src="/images/start-growth.png"
              alt="Digital marketing and website growth analytics"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </div>

          {/* CONTENT */}
          <div className="flex min-h-[255px] flex-1 flex-col px-7 pb-7 pt-6 sm:px-8">

            <span className="text-[8px] font-medium tracking-[0.2em] text-[#1b1713]/38">
              03
            </span>

            <h3 className="mt-4 font-serif text-[1.8rem] font-light leading-[1.05] tracking-[-0.03em] text-[#1b1713] sm:text-[1.95rem]">
              I want more customers.
            </h3>

            <p className="mt-4 max-w-[330px] text-[11px] font-light leading-[1.7] text-[#1b1713]/50 sm:text-[11.5px]">
              Build visibility through search, Google Ads, Meta Ads,
              analytics, and a stronger digital strategy.
            </p>

            <div className="mt-auto flex items-center gap-3 pt-8 text-[8px] font-medium uppercase tracking-[0.2em] text-[#1b1713]/65">
              Talk About Growth

              <ArrowUpRight
                size={12}
                strokeWidth={1.3}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </Link>
      </Reveal>
    </div>


    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

    <Reveal>
      <div className="mt-9 flex flex-col gap-6 border-t border-[#1b1713]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

        <p className="max-w-[520px] text-[11px] font-light leading-[1.7] text-[#1b1713]/45">
          Still unsure? Send us your current website or tell us about
          your business and we&apos;ll point you in the right direction.
        </p>

        <Link
          href="/consultation"
          className="group inline-flex w-fit shrink-0 items-center gap-5 rounded-full bg-[#1b1713] px-7 py-4 text-[8px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:px-8"
        >
          Get a Free Recommendation

          <ArrowUpRight
            size={12}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </Reveal>
  </div>
</section>

{/* =========================================================
    WORKING WITH JOVAVO
========================================================= */}

<section className="bg-[#f8f5ef] px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    {/* =====================================================
        TOP — INTRO + FEATURE IMAGE
    ===================================================== */}

    <Reveal>
      <div className="grid gap-8 border-t border-[#1b1713]/10 pt-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-end lg:gap-14">

        {/* LEFT — INTRO */}
        <div className="lg:pb-3">
          <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#1b1713]/42">
            Working With Jovavo
          </p>

          <h2 className="mt-6 max-w-[540px] font-serif text-[3rem] font-light leading-[0.92] tracking-[-0.045em] text-[#1b1713] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.25rem]">
            Built efficiently.
            <br />
            Communicated
            <br />
            clearly.
          </h2>

          {/* LARGER DESCRIPTION */}
          <p className="mt-7 max-w-[560px] text-[13px] font-light leading-[1.75] text-[#1b1713]/55 sm:text-[14px]">
            A straightforward process built around clear communication,
            thoughtful design, and getting your business online without
            unnecessary delays.
          </p>
        </div>

        {/* RIGHT — FEATURE IMAGE */}
        <div className="relative overflow-hidden rounded-[7px]">
          <div className="relative aspect-[1.95/1]">
            <img
              src="/images/process/process-hero.png"
              alt="Jovavo website strategy, design, and development"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </Reveal>


    {/* =====================================================
        FOUR COLUMN BENEFIT GRID
    ===================================================== */}

    <div className="mt-8 grid border-y border-[#1b1713]/10 sm:grid-cols-2 lg:grid-cols-4">

      {/* ===================================================
          01 — COMMUNICATION
      =================================================== */}

      <Reveal>
        <div className="flex h-full flex-col border-b border-[#1b1713]/10 py-6 sm:border-r lg:border-b-0 lg:pr-6">

          {/* IMAGE */}
          <div className="relative aspect-[2.05/1] overflow-hidden rounded-[5px]">
            <img
              src="/images/process/communication.png"
              alt="Clear client communication"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col px-1 pt-5">

            <p className="text-[8px] font-medium uppercase tracking-[0.26em] text-[#1b1713]/45">
              Communication
            </p>

            <h3 className="mt-4 font-serif text-[2.05rem] font-light leading-[0.98] tracking-[-0.035em] text-[#1b1713] sm:text-[2.15rem]">
              Same-day
              <span className="block text-[#1b1713]/48">
                responses
              </span>
            </h3>

            {/* LARGER DESCRIPTION */}
            <p className="mt-5 max-w-[270px] text-[12px] font-light leading-[1.7] text-[#1b1713]/55 sm:text-[13px]">
              Questions and project updates answered without leaving
              you waiting for days.
            </p>

            {/* NUMBER */}
            <div className="mt-auto flex items-center gap-5 pt-7">
              <span className="text-[8px] text-[#1b1713]/35">
                01
              </span>

              <div className="h-px flex-1 bg-[#1b1713]/10" />
            </div>

          </div>
        </div>
      </Reveal>


      {/* ===================================================
          02 — TIMELINE
      =================================================== */}

      <Reveal>
        <div className="flex h-full flex-col border-b border-[#1b1713]/10 py-6 sm:pl-6 lg:border-b-0 lg:border-r lg:pr-6">

          {/* IMAGE */}
          <div className="relative aspect-[2.05/1] overflow-hidden rounded-[5px]">
            <img
              src="/images/process/timeline.png"
              alt="Jovavo website project timeline"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col px-1 pt-5">

            <p className="text-[8px] font-medium uppercase tracking-[0.26em] text-[#1b1713]/45">
              Typical Timeline
            </p>

            <h3 className="mt-4 font-serif text-[2.05rem] font-light leading-[0.98] tracking-[-0.035em] text-[#1b1713] sm:text-[2.15rem]">
              ~2 weeks
              <span className="block text-[#1b1713]/48">
                average build
              </span>
            </h3>

            {/* LARGER DESCRIPTION */}
            <p className="mt-5 max-w-[270px] text-[12px] font-light leading-[1.7] text-[#1b1713]/55 sm:text-[13px]">
              Many standard website projects move from kickoff to
              launch in around two weeks.
            </p>

            {/* NUMBER */}
            <div className="mt-auto flex items-center gap-5 pt-7">
              <span className="text-[8px] text-[#1b1713]/35">
                02
              </span>

              <div className="h-px flex-1 bg-[#1b1713]/10" />
            </div>

          </div>
        </div>
      </Reveal>


      {/* ===================================================
          03 — DESIGN
      =================================================== */}

      <Reveal>
        <div className="flex h-full flex-col border-b border-[#1b1713]/10 py-6 sm:border-r sm:pr-6 lg:border-b-0 lg:pl-6">

          {/* IMAGE */}
          <div className="relative aspect-[2.05/1] overflow-hidden rounded-[5px]">
            <img
              src="/images/process/custom-design.png"
              alt="Custom brand and website design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col px-1 pt-5">

            <p className="text-[8px] font-medium uppercase tracking-[0.26em] text-[#1b1713]/45">
              Design
            </p>

            <h3 className="mt-4 font-serif text-[2.05rem] font-light leading-[0.98] tracking-[-0.035em] text-[#1b1713] sm:text-[2.15rem]">
              100%
              <span className="block text-[#1b1713]/48">
                custom
              </span>
            </h3>

            {/* LARGER DESCRIPTION */}
            <p className="mt-5 max-w-[270px] text-[12px] font-light leading-[1.7] text-[#1b1713]/55 sm:text-[13px]">
              Designed around your brand and business instead of
              forcing you into a generic template.
            </p>

            {/* NUMBER */}
            <div className="mt-auto flex items-center gap-5 pt-7">
              <span className="text-[8px] text-[#1b1713]/35">
                03
              </span>

              <div className="h-px flex-1 bg-[#1b1713]/10" />
            </div>

          </div>
        </div>
      </Reveal>


      {/* ===================================================
          04 — SUPPORT
      =================================================== */}

      <Reveal>
        <div className="flex h-full flex-col py-6 sm:pl-6">

          {/* IMAGE */}
          <div className="relative aspect-[2.05/1] overflow-hidden rounded-[5px]">
            <img
              src="/images/process/support.png"
              alt="Ongoing website support"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-1 flex-col px-1 pt-5">

            <p className="text-[8px] font-medium uppercase tracking-[0.26em] text-[#1b1713]/45">
              After Launch
            </p>

            <h3 className="mt-4 font-serif text-[2.05rem] font-light leading-[0.98] tracking-[-0.035em] text-[#1b1713] sm:text-[2.15rem]">
              Ongoing
              <span className="block text-[#1b1713]/48">
                support
              </span>
            </h3>

            {/* LARGER DESCRIPTION */}
            <p className="mt-5 max-w-[270px] text-[12px] font-light leading-[1.7] text-[#1b1713]/55 sm:text-[13px]">
              Your relationship with Jovavo doesn&apos;t have to end
              the moment your website goes live.
            </p>

            {/* NUMBER */}
            <div className="mt-auto flex items-center gap-5 pt-7">
              <span className="text-[8px] text-[#1b1713]/35">
                04
              </span>

              <div className="h-px flex-1 bg-[#1b1713]/10" />
            </div>

          </div>
        </div>
      </Reveal>

    </div>


    {/* =====================================================
        BOTTOM CTA
    ===================================================== */}

    <Reveal>
      <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">

        <p className="text-[10px] font-light leading-[1.65] text-[#1b1713]/40 sm:text-[11px]">
          Timelines vary depending on project size, content, and functionality.
        </p>

        <Link
          href="/consultation"
          className="group inline-flex w-fit items-center gap-4 text-[8px] font-medium uppercase tracking-[0.24em] text-[#1b1713]/55 transition-colors duration-300 hover:text-[#1b1713]"
        >
          Discuss Your Project

          <ArrowUpRight
            size={11}
            strokeWidth={1.3}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

      </div>
    </Reveal>

  </div>
</section>

      {/* =========================================================
          CTA
      ========================================================= */}

{/* =========================================================
    HERO
========================================================= */}

<section className="bg-[#f8f5ef] px-5 pb-16 pt-14 sm:px-8 sm:pt-16 md:px-12 md:pb-20 md:pt-20 lg:px-16">
  <div className="mx-auto max-w-[1440px]">

    <Reveal>
      <div className="overflow-hidden rounded-[32px] border border-[#1b1713]/10 bg-[#fbfaf7]">

        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative px-7 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">

            {/* EYEBROW */}

            <div className="flex items-center gap-5">

              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[15px] bg-[#f0ece4]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[19px] w-[19px]"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M7.8 7.7c1.1.2 2 .8 2.5 1.8.6 1.2.2 2.3-.3 3.2-.4.8-.3 1.7.4 2.4.6.6 1.5.9 2.4 1.1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.3 4.2c-.2 1.3.2 2.3 1.2 3 .7.5 1.6.6 2.4.9 1 .4 1.7 1.2 1.9 2.3"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5 13.1c-1 .1-1.7.6-2.1 1.4-.5 1-.2 2 .2 2.9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#1b1713]/55">
                  Start a Project
                </p>

                <div className="hidden h-px w-[55px] bg-[#1b1713]/35 sm:block" />
              </div>

            </div>


            {/* HEADLINE */}

            <h1 className="mt-10 max-w-[680px] font-serif text-[3.7rem] font-light leading-[0.9] tracking-[-0.055em] text-[#1b1713] sm:text-[4.6rem] md:text-[5.2rem] lg:text-[4.7rem] xl:text-[5.4rem] 2xl:text-[5.8rem]">
              Your website
              <br />
              should do more
              <br />
              than{" "}

              <span className="italic text-[#1b1713]/48">
                look good.
              </span>
            </h1>


            {/* DESCRIPTION */}

            <p className="mt-8 max-w-[570px] text-[12.5px] font-light leading-[1.75] text-[#1b1713]/55 sm:text-[13px] xl:text-[14px]">
              From custom websites and e-commerce to digital advertising,
              Jovavo creates thoughtful digital experiences built around
              your business and its growth.
            </p>


            {/* CTA */}

            <Link
              href="/consultation"
              className="group mt-8 inline-flex items-center gap-8 rounded-full bg-[#1b1713] px-7 py-[15px] text-[10px] font-medium text-[#f8f5ef] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a2520]"
            >
              Start a Project

              <ArrowUpRight
                size={13}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="relative border-t border-[#1b1713]/10 px-7 py-4 sm:px-10 md:px-14 lg:border-l lg:border-t-0 lg:px-12 lg:py-16 xl:px-16 xl:py-20">

            <div className="flex h-full flex-col justify-center">

              {/* =================================================
                  DRIVE GROWTH
              ================================================= */}

              <div className="group grid grid-cols-[58px_1fr] gap-5 border-b border-[#1b1713]/10 py-7 first:pt-3 lg:grid-cols-[62px_1fr] lg:gap-6 lg:py-8">

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#f0ece4] transition-transform duration-500 group-hover:-translate-y-1 lg:h-[58px] lg:w-[58px]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[20px] w-[20px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 19v-5h4v5H5ZM10 19V9h4v10h-4ZM15 19V4h4v15h-4Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                <div className="pt-1">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#1b1713] sm:text-[8.5px]">
                    Drive Growth
                  </p>

                  <p className="mt-3 max-w-[330px] text-[12px] font-light leading-[1.65] text-[#1b1713]/55 sm:text-[12.5px]">
                    Websites and advertising designed to bring in more
                    customers.
                  </p>

                </div>

              </div>


              {/* =================================================
                  BUILT AROUND YOU
              ================================================= */}

              <div className="group grid grid-cols-[58px_1fr] gap-5 border-b border-[#1b1713]/10 py-7 lg:grid-cols-[62px_1fr] lg:gap-6 lg:py-8">

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#f0ece4] transition-transform duration-500 group-hover:-translate-y-1 lg:h-[58px] lg:w-[58px]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[21px] w-[21px]"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M6.5 19c.5-3.1 2.5-5 5.5-5s5 1.9 5.5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />

                    <path
                      d="M5.5 10.5c-1.7.7-2.7 2.1-3 4M18.5 10.5c1.7.7 2.7 2.1 3 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <div className="pt-1">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#1b1713] sm:text-[8.5px]">
                    Built Around You
                  </p>

                  <p className="mt-3 max-w-[330px] text-[12px] font-light leading-[1.65] text-[#1b1713]/55 sm:text-[12.5px]">
                    A tailored approach based on your goals, audience,
                    and industry.
                  </p>

                </div>

              </div>


              {/* =================================================
                  THOUGHTFUL DESIGN
              ================================================= */}

              <div className="group grid grid-cols-[58px_1fr] gap-5 border-b border-[#1b1713]/10 py-7 lg:grid-cols-[62px_1fr] lg:gap-6 lg:py-8">

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#f0ece4] transition-transform duration-500 group-hover:-translate-y-1 lg:h-[58px] lg:w-[58px]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[21px] w-[21px]"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="5"
                      width="16"
                      height="11"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />

                    <path
                      d="M2.5 19h19"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <div className="pt-1">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#1b1713] sm:text-[8.5px]">
                    Thoughtful Design
                  </p>

                  <p className="mt-3 max-w-[330px] text-[12px] font-light leading-[1.65] text-[#1b1713]/55 sm:text-[12.5px]">
                    Clean, modern, and strategic design that builds trust
                    and converts.
                  </p>

                </div>

              </div>


              {/* =================================================
                  REAL SUPPORT
              ================================================= */}

              <div className="group grid grid-cols-[58px_1fr] gap-5 py-7 last:pb-3 lg:grid-cols-[62px_1fr] lg:gap-6 lg:py-8">

                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#f0ece4] transition-transform duration-500 group-hover:-translate-y-1 lg:h-[58px] lg:w-[58px]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-[21px] w-[21px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.2 2.8 6.5 13h5l-.7 8.2L17.5 11h-5l.7-8.2Z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>

                <div className="pt-1">

                  <p className="text-[8px] font-semibold uppercase tracking-[0.32em] text-[#1b1713] sm:text-[8.5px]">
                    Real Support
                  </p>

                  <p className="mt-3 max-w-[330px] text-[12px] font-light leading-[1.65] text-[#1b1713]/55 sm:text-[12.5px]">
                    A long-term partner invested in your success after
                    launch.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </Reveal>

  </div>
</section>
    </main>
  );
}
