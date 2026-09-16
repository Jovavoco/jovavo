import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BarChart3,
  Code2,
  Gauge,
  Globe2,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Search,
  ShieldCheck,
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
        {/* OVERLAYS */}

        <div className="absolute inset-0 bg-[#1b1713]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[#f8f5ef]/10" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pb-14 pt-44 text-center text-white sm:pt-40 md:min-h-screen md:pb-0 md:pt-32">
          <Reveal>
            <p className="mb-5 px-2 text-[11px] font-medium tracking-[0.08em] text-white/75 sm:text-[12px] md:mb-7">
              Web Design · E-Commerce · Digital Growth
            </p>

            <h1 className="mx-auto max-w-5xl font-serif text-[2.7rem] font-light leading-[0.98] tracking-[-0.025em] sm:text-[3.8rem] md:text-[5rem] lg:text-[5.6rem]">
              Digital experiences
              <br />
              built around
              <br />
              <span className="italic text-white/70">
                your business.
              </span>
            </h1>

            <div className="mx-auto mt-6 h-px w-14 bg-white/45 sm:mt-8 sm:w-20" />

            <p className="mx-auto mt-6 max-w-2xl px-2 text-[15px] leading-7 text-white/80 sm:text-[16px] md:mt-7 md:px-0 md:text-[17px]">
              Jovavo designs and develops custom websites and e-commerce
              experiences, then helps businesses grow through digital
              advertising, search visibility, analytics, and strategy.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[13px] font-medium text-[#1b1713] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f8f5ef] sm:w-auto"
              >
                Start a Project

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/work"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/45 px-7 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1b1713] sm:w-auto"
              >
                View Our Work

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BUILD
      ========================================================= */}

      <section className="px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1713] text-white">
                <Sparkles size={20} strokeWidth={1.6} />
              </div>

              <p className="text-[15px] font-semibold text-[#1b1713]/50">
                What We Build
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.035em] sm:text-[3.3rem] md:text-[4rem]">
                Built around{" "}
                <span className="italic text-[#1b1713]/50">
                  your brand.
                </span>
                <br />
                Designed to work.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                From your website and storefront to the systems behind them,
                Jovavo builds digital experiences around how your business
                actually works.
              </p>
            </div>
          </Reveal>

          {/* QUICK CAPABILITIES */}

          <Reveal>
            <div className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-2.5">
              {[
                {
                  icon: MonitorSmartphone,
                  label: "Web Design",
                  href: "/services#website-design",
                },
                {
                  icon: ShoppingBag,
                  label: "E-Commerce",
                  href: "/services#web-development",
                },
                {
                  icon: Code2,
                  label: "Development",
                  href: "/services#web-development",
                },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="group flex items-center gap-2.5 rounded-full border border-[#1b1713]/10 bg-[#fffdf9] px-4 py-2.5 text-[13px] font-medium text-[#1b1713]/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1b1713]/20 hover:text-[#1b1713]"
                >
                  <Icon size={15} strokeWidth={1.6} />

                  {label}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#1b1713]/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </Reveal>

          {/* =====================================================
              WHAT WE DO
          ===================================================== */}

          <Reveal>
            <div className="mt-16 border-t border-[#1b1713]/10 pt-14 text-center sm:mt-20 sm:pt-16">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]">
                <Zap size={20} strokeWidth={1.6} />
              </div>

              <p className="text-[15px] font-semibold text-[#1b1713]/50">
                What We Do
              </p>

              <h2 className="mt-3 font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.035em] sm:text-[3.3rem] md:text-[4rem]">
                Build the site.
                <br />
                <span className="italic text-[#1b1713]/50">
                  Drive the growth.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
                Your website is the foundation. We can take it further with
                custom development, e-commerce, advertising, search visibility,
                analytics, and ongoing support.
              </p>
            </div>
          </Reveal>

          {/* =====================================================
              SERVICE CARDS
          ===================================================== */}

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featurePanels.map((panel, index) => {
              const MainIcon = panel.icon;

              return (
                <Reveal key={panel.title} delay={index * 90}>
                  <div className="flex h-full flex-col rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fffdf9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/15 sm:p-7 md:p-8">
                    {/* ICON */}

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/70">
                      <MainIcon size={21} strokeWidth={1.6} />
                    </div>

                    {/* CONTENT */}

                    <p className="mt-6 text-[14px] font-semibold text-[#1b1713]/45">
                      {panel.eyebrow}
                    </p>

                    <h3 className="mt-2 font-serif text-[1.8rem] font-light leading-[1.06] tracking-[-0.025em] text-[#1b1713] sm:text-[2rem]">
                      {panel.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-[#1b1713]/55">
                      {panel.description}
                    </p>

                    {/* FEATURES */}

                    <div className="mt-7 space-y-2">
                      {panel.features.map((feature) => {
                        const FeatureIcon = feature.icon;

                        return (
                          <div
                            key={feature.label}
                            className="flex items-center gap-3 rounded-xl bg-[#f8f5ef] px-4 py-3"
                          >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fffdf9] text-[#1b1713]/55">
                              <FeatureIcon
                                size={15}
                                strokeWidth={1.6}
                              />
                            </div>

                            <span className="text-[13px] font-medium text-[#1b1713]/60">
                              {feature.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* BUTTON */}

                    <div className="mt-auto pt-7">
                      <Link
                        href={panel.link}
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-5 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24]"
                      >
                        {panel.linkText}

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.6}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* =====================================================
              SMALL GROWTH STRIP
          ===================================================== */}

          <Reveal>
            <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-[#f1ece3] p-5 sm:grid-cols-3 sm:p-6">
              {[
                {
                  icon: Search,
                  title: "Search Visibility",
                  description: "SEO foundations built into your website.",
                },
                {
                  icon: Megaphone,
                  title: "Digital Advertising",
                  description: "Google and Meta campaigns built for growth.",
                },
                {
                  icon: BarChart3,
                  title: "Analytics",
                  description: "Understand what visitors do and what works.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-xl bg-[#fffdf9]/70 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#1b1713]/65">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[14px] font-semibold text-[#1b1713]/70">
                      {title}
                    </p>

                    <p className="mt-1 text-[12px] leading-5 text-[#1b1713]/45">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] px-6 py-12 text-center sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-14 md:py-16">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]">
              <Globe2 size={19} strokeWidth={1.6} />
            </div>

            <p className="text-[15px] font-semibold text-[#1b1713]/45">
              Start a Project
            </p>

            <h2 className="mx-auto mt-3 max-w-4xl font-serif text-[2.4rem] font-light leading-[1.04] tracking-[-0.03em] text-[#1b1713] sm:text-[3rem] md:text-[3.6rem]">
              Your website should do more
              <br className="hidden sm:block" />
              {" "}than{" "}
              <span className="italic text-[#1b1713]/50">
                look good.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              From custom websites and e-commerce to digital advertising,
              Jovavo creates thoughtful digital experiences built around your
              business and its growth.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}