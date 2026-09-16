import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  Code2,
  Gauge,
  Globe2,
  HeartHandshake,
  Megaphone,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Website Design & Development Services",
  description:
    "Explore Jovavo's website design, ecommerce development, SEO optimization, website redesigns, digital advertising, and custom digital solutions.",
};

const quickServices = [
  {
    title: "Websites",
    description: "Custom websites designed around your business.",
    href: "#website-design",
    icon: MonitorSmartphone,
  },
  {
    title: "Development",
    description: "Custom systems, portals, dashboards, and e-commerce.",
    href: "#web-development",
    icon: Code2,
  },
  {
    title: "Digital Growth",
    description: "SEO, Google Ads, Meta Ads, and analytics.",
    href: "#digital-growth",
    icon: Megaphone,
  },
  {
    title: "Website Care",
    description: "Ongoing updates, performance, and support.",
    href: "#website-care",
    icon: Wrench,
  },
];

const capabilities = [
  {
    id: "website-design",
    title: "Website Design",
    icon: MonitorSmartphone,
    image: "/images/services/website-design.jpg",
    headline: "A website designed around your business.",
    description:
      "We create responsive websites that feel polished, communicate clearly, and give your business a professional presence online.",
    services: [
      {
        title: "Custom Website Design",
        icon: Sparkles,
      },
      {
        title: "Business Websites",
        icon: Globe2,
      },
      {
        title: "E-Commerce Websites",
        icon: ShoppingBag,
      },
      {
        title: "Website Redesigns",
        icon: MonitorSmartphone,
      },
      {
        title: "Landing Pages",
        icon: Gauge,
      },
      {
        title: "Mobile Optimization",
        icon: Zap,
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: Code2,
    image: "/images/services/web-development.jpg",
    headline: "Systems built around the way your business works.",
    description:
      "When your business needs more than standard pages, we build custom functionality around your customers, operations, and workflow.",
    services: [
      {
        title: "Custom Development",
        icon: Code2,
      },
      {
        title: "E-Commerce Platforms",
        icon: ShoppingBag,
      },
      {
        title: "Customer Portals",
        icon: Globe2,
      },
      {
        title: "Admin Dashboards",
        icon: BarChart3,
      },
      {
        title: "Booking Systems",
        icon: Check,
      },
      {
        title: "Business Automation",
        icon: Zap,
      },
    ],
  },
  {
    id: "digital-growth",
    title: "Digital Growth",
    icon: Megaphone,
    image: "/images/services/digital-growth.jpg",
    headline: "Turn your website into a tool for growth.",
    description:
      "Once your digital foundation is in place, we can help bring the right people to it through search, advertising, analytics, and conversion-focused strategy.",
    services: [
      {
        title: "Google Ads",
        icon: Search,
      },
      {
        title: "Meta Ads",
        icon: Megaphone,
      },
      {
        title: "Technical SEO",
        icon: Search,
      },
      {
        title: "Local SEO",
        icon: Globe2,
      },
      {
        title: "Analytics",
        icon: BarChart3,
      },
      {
        title: "Conversion Optimization",
        icon: Gauge,
      },
    ],
  },
  {
    id: "website-care",
    title: "Website Care",
    icon: HeartHandshake,
    image: "/images/services/website-care.jpg",
    headline: "Support that continues after launch.",
    description:
      "Your website should keep working after it goes live. We can help manage updates, performance, security, content changes, and ongoing improvements.",
    services: [
      {
        title: "Website Maintenance",
        icon: Wrench,
      },
      {
        title: "Website Monitoring",
        icon: Gauge,
      },
      {
        title: "Content Updates",
        icon: Sparkles,
      },
      {
        title: "Security Updates",
        icon: ShieldCheck,
      },
      {
        title: "Performance",
        icon: Zap,
      },
      {
        title: "Technical Support",
        icon: HeartHandshake,
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <Sparkles size={19} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#1b1713]/50">
              What We Do
            </p>

            <h1 className="mt-3 font-serif text-[3rem] font-light leading-[0.97] tracking-[-0.04em] sm:text-[4rem] md:text-[4.8rem]">
              Build the website.
              <br />
              <span className="italic text-[#1b1713]/50">
                Grow the business.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              From custom websites and e-commerce to digital systems,
              advertising, and ongoing support, Jovavo builds around what your
              business actually needs.
            </p>
          </div>
        </Reveal>

        {/* QUICK NAVIGATION */}
        <Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickServices.map(({ title, description, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="group flex items-start gap-4 rounded-[1.25rem] border border-[#1b1713]/10 bg-[#fffdf9] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#1b1713]/20 hover:shadow-[0_15px_40px_rgba(27,23,19,0.05)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65 transition-colors group-hover:bg-[#1b1713] group-hover:text-white">
                  <Icon size={18} strokeWidth={1.6} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-serif text-[1.2rem] font-light">
                      {title}
                    </h2>

                    <ArrowDown
                      size={14}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#1b1713]/30 transition-transform group-hover:translate-y-1"
                    />
                  </div>

                  <p className="mt-1.5 text-[13px] leading-5 text-[#1b1713]/45">
                    {description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="space-y-5 sm:space-y-6">
          {capabilities.map((capability, index) => {
            const SectionIcon = capability.icon;

            return (
              <Reveal key={capability.id} delay={index * 80}>
                <article
                  id={capability.id}
                  className="scroll-mt-28 overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] shadow-[0_18px_55px_rgba(27,23,19,0.035)] sm:scroll-mt-32 sm:rounded-[2rem]"
                >
                  <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                    {/* IMAGE */}
                    <div className="relative h-[230px] overflow-hidden bg-[#f1ece3] sm:h-[300px] lg:h-auto lg:min-h-[520px]">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1713]/15 via-transparent to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65">
                        <SectionIcon size={20} strokeWidth={1.6} />
                      </div>

                      <p className="text-sm font-semibold text-[#1b1713]/50">
                        {capability.title}
                      </p>

                      <h2 className="mt-3 max-w-2xl font-serif text-[2.15rem] font-light leading-[1.04] tracking-[-0.03em] sm:text-[2.7rem] md:text-[3rem]">
                        {capability.headline}
                      </h2>

                      <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                        {capability.description}
                      </p>

                      {/* RELATED SERVICES */}
                      <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
                        {capability.services.map(
                          ({ title, icon: ServiceIcon }) => (
                            <a
                              key={title}
                              href={`#${capability.id}`}
                              className="group flex items-center gap-3 rounded-xl border border-[#1b1713]/10 bg-[#f8f5ef] px-4 py-3.5 transition-all duration-200 hover:border-[#1b1713]/20 hover:bg-[#f1ece3]"
                            >
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fffdf9] text-[#1b1713]/55">
                                <ServiceIcon
                                  size={16}
                                  strokeWidth={1.6}
                                />
                              </div>

                              <span className="min-w-0 flex-1 text-[13px] font-medium text-[#1b1713]/60">
                                {title}
                              </span>
                            </a>
                          )
                        )}
                      </div>

                      {/* CONTACT CTA */}
                      <div className="mt-8 border-t border-[#1b1713]/10 pt-6">
                        <Link
                          href="/contact"
                          className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1b1713]/65 transition-colors hover:text-[#1b1713]"
                        >
                          Ask about {capability.title}

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.6}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          HOW IT FITS TOGETHER
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.6rem] bg-[#f1ece3] p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-14">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fffdf9] text-[#1b1713]">
                  <Zap size={19} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#1b1713]/50">
                  Built Around Your Business
                </p>

                <h2 className="mt-2 font-serif text-[2.2rem] font-light leading-[1.04] tracking-[-0.03em] sm:text-[2.8rem]">
                  You don&apos;t need
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    everything at once.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-[15px] leading-7 text-[#1b1713]/55">
                Some businesses need a new website. Others need e-commerce,
                custom functionality, advertising, or continued support. We
                build the scope around where your business is now and what it
                needs next.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] bg-cover bg-center px-6 py-12 sm:rounded-[2rem] sm:px-10 sm:py-14 md:px-12"
            style={{
              backgroundImage:
                "linear-gradient(rgba(248,245,239,0.82), rgba(248,245,239,0.9)), url('/images/services/lets-talk.jpg')",
            }}
          >
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
                  <ArrowUpRight size={18} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#1b1713]/50">
                  Start a Project
                </p>

                <h2 className="mt-2 max-w-3xl font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.6rem]">
                  Not sure what your
                  <br className="hidden sm:block" />
                  <span className="italic text-[#1b1713]/50">
                    {" "}
                    business needs?
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#1b1713]/55">
                  Tell us what you&apos;re trying to accomplish and we&apos;ll
                  help determine the right approach.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
              >
                Start a Project

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
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