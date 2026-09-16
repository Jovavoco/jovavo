"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
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

const quickServices = [
  {
    title: "Websites",
    description: "Custom websites designed around your business.",
    href: "#website-design",
    icon: MonitorSmartphone,
  },
  {
    title: "Development",
    description: "Portals, dashboards, e-commerce, and custom systems.",
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
    description: "Updates, performance, maintenance, and support.",
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
        description:
          "A website designed specifically around your brand, audience, goals, and the way you want customers to experience your business.",
      },
      {
        title: "Business Websites",
        icon: Globe2,
        description:
          "Professional websites for service-based and local businesses that clearly explain what you do and make it easy for customers to take the next step.",
      },
      {
        title: "E-Commerce Websites",
        icon: ShoppingBag,
        description:
          "Online stores designed to make browsing, product discovery, purchasing, and customer account management simple across devices.",
      },
      {
        title: "Website Redesigns",
        icon: MonitorSmartphone,
        description:
          "A complete refresh of an existing website to improve its design, structure, messaging, usability, and overall customer experience.",
      },
      {
        title: "Landing Pages",
        icon: Gauge,
        description:
          "Focused pages built around one campaign, service, offer, or action so visitors immediately understand what to do next.",
      },
      {
        title: "Mobile Optimization",
        icon: Zap,
        description:
          "Responsive layouts and interactions designed to work smoothly across phones, tablets, laptops, and desktop screens.",
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
        description:
          "Custom website functionality built around the specific needs of your business instead of forcing your workflow into a generic template.",
      },
      {
        title: "E-Commerce Platforms",
        icon: ShoppingBag,
        description:
          "Custom commerce systems that can include products, customer accounts, orders, promotions, inventory, rewards, and business management tools.",
      },
      {
        title: "Customer Portals",
        icon: Globe2,
        description:
          "Secure customer-facing areas where users can access account information, orders, saved content, services, or other business-specific features.",
      },
      {
        title: "Admin Dashboards",
        icon: BarChart3,
        description:
          "Custom internal dashboards that make it easier to manage customers, orders, products, content, and other day-to-day business operations.",
      },
      {
        title: "Booking Systems",
        icon: Check,
        description:
          "Booking and scheduling experiences that help customers request or reserve services while keeping the process organized for your business.",
      },
      {
        title: "Business Automation",
        icon: Zap,
        description:
          "Automated workflows for repetitive tasks such as emails, customer updates, order notifications, and other routine business processes.",
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
        description:
          "Search advertising designed to put your business in front of people actively looking for the products or services you offer.",
      },
      {
        title: "Meta Ads",
        icon: Megaphone,
        description:
          "Facebook and Instagram advertising for awareness, lead generation, retargeting, and reaching new audiences.",
      },
      {
        title: "Technical SEO",
        icon: Search,
        description:
          "Technical website foundations that help search engines understand, crawl, and index your website properly.",
      },
      {
        title: "Local SEO",
        icon: Globe2,
        description:
          "Search optimization focused on helping local customers discover your business when they search for relevant services in their area.",
      },
      {
        title: "Analytics",
        icon: BarChart3,
        description:
          "Tracking and reporting that helps you understand where visitors come from, what they do on your website, and which efforts are working.",
      },
      {
        title: "Conversion Optimization",
        icon: Gauge,
        description:
          "Improvements to layout, messaging, calls to action, and customer flow designed to make your website easier to use and act on.",
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
        description:
          "Ongoing maintenance to keep your website current, functional, and working as expected after launch.",
      },
      {
        title: "Website Monitoring",
        icon: Gauge,
        description:
          "Routine monitoring to catch website issues and identify areas that may need attention.",
      },
      {
        title: "Content Updates",
        icon: Sparkles,
        description:
          "Updates to website text, images, products, services, pages, and other content as your business changes.",
      },
      {
        title: "Security Updates",
        icon: ShieldCheck,
        description:
          "Ongoing technical updates and maintenance that help keep your website and its dependencies current.",
      },
      {
        title: "Performance",
        icon: Zap,
        description:
          "Continued improvements focused on page speed, responsiveness, and overall website performance.",
      },
      {
        title: "Technical Support",
        icon: HeartHandshake,
        description:
          "Continued support when your website needs troubleshooting, adjustments, new functionality, or technical changes.",
      },
    ],
  },
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setOpenService((current) =>
      current === service ? null : service
    );
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <Sparkles size={21} strokeWidth={1.6} />
            </div>

            <p className="text-[15px] font-semibold text-[#1b1713]/50">
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
              Websites, custom systems, digital growth, and ongoing
              support — built around what your business actually needs.
            </p>
          </div>
        </Reveal>

        {/* QUICK NAVIGATION */}
        <Reveal>
          <div className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickServices.map(
              ({ title, description, href, icon: Icon }) => (
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
                        className="shrink-0 text-[#1b1713]/30 transition-transform duration-300 group-hover:translate-y-1"
                      />
                    </div>

                    <p className="mt-1.5 text-[13px] leading-5 text-[#1b1713]/45">
                      {description}
                    </p>
                  </div>
                </a>
              )
            )}
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          SERVICE SECTIONS
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="space-y-6">
          {capabilities.map((capability, index) => {
            const SectionIcon = capability.icon;

            return (
              <Reveal key={capability.id} delay={index * 70}>
                <article
                  id={capability.id}
                  className="scroll-mt-28 overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] shadow-[0_18px_55px_rgba(27,23,19,0.035)] sm:scroll-mt-32 sm:rounded-[2rem]"
                >
                  <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                    {/* IMAGE */}
                    <div className="relative h-[220px] overflow-hidden bg-[#f1ece3] sm:h-[280px] lg:h-auto lg:min-h-[520px]">
                      <img
                        src={capability.image}
                        alt={capability.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1713]/10 via-transparent to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65">
                        <SectionIcon size={20} strokeWidth={1.6} />
                      </div>

                      <p className="text-[15px] font-semibold text-[#1b1713]/50">
                        {capability.title}
                      </p>

                      <h2 className="mt-3 max-w-2xl font-serif text-[2.15rem] font-light leading-[1.04] tracking-[-0.03em] sm:text-[2.7rem] md:text-[3rem]">
                        {capability.headline}
                      </h2>

                      <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                        {capability.description}
                      </p>

                      {/* INDIVIDUAL SERVICES */}
                      <div className="mt-8 space-y-2.5">
                        {capability.services.map(
                          ({ title, icon: ServiceIcon, description }) => {
                            const isOpen = openService === title;

                            return (
                              <div
                                key={title}
                                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                                  isOpen
                                    ? "border-[#1b1713]/20 bg-[#f1ece3]"
                                    : "border-[#1b1713]/10 bg-[#f8f5ef]"
                                }`}
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleService(title)}
                                  aria-expanded={isOpen}
                                  className="group flex w-full items-center gap-3 px-4 py-3.5 text-left sm:px-5"
                                >
                                  <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                                      isOpen
                                        ? "bg-[#1b1713] text-white"
                                        : "bg-[#fffdf9] text-[#1b1713]/60"
                                    }`}
                                  >
                                    <ServiceIcon
                                      size={17}
                                      strokeWidth={1.6}
                                    />
                                  </div>

                                  <span className="min-w-0 flex-1 text-[14px] font-medium text-[#1b1713]/70">
                                    {title}
                                  </span>

                                  <ChevronDown
                                    size={17}
                                    strokeWidth={1.6}
                                    className={`shrink-0 text-[#1b1713]/35 transition-transform duration-300 ${
                                      isOpen ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>

                                {isOpen && (
                                  <div className="px-4 pb-5 pl-[4.25rem] sm:px-5 sm:pl-[4.75rem]">
                                    <p className="max-w-xl text-[14px] leading-6 text-[#1b1713]/55">
                                      {description}
                                    </p>

                                    <Link
                                      href="/contact"
                                      className="group mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#1b1713]/65 transition-colors hover:text-[#1b1713]"
                                    >
                                      Ask about this service

                                      <ArrowUpRight
                                        size={14}
                                        strokeWidth={1.6}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                      />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            );
                          }
                        )}
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
          SIMPLE EXPLANATION
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.6rem] bg-[#f1ece3] p-6 sm:rounded-[2rem] sm:p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#fffdf9] text-[#1b1713]">
                  <Zap size={19} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
                  Built Around Your Business
                </p>

                <h2 className="mt-2 font-serif text-[2.2rem] font-light leading-[1.04] tracking-[-0.03em] sm:text-[2.8rem]">
                  Start with what
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    you actually need.
                  </span>
                </h2>
              </div>

              <p className="max-w-2xl text-[15px] leading-7 text-[#1b1713]/55">
                You don&apos;t need every service at once. Some businesses
                need a new website. Others need e-commerce, custom
                functionality, advertising, or continued support. We build
                around where your business is now and where you want it to go.
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
                "linear-gradient(rgba(248,245,239,0.84), rgba(248,245,239,0.92)), url('/images/services/lets-talk.jpg')",
            }}
          >
            <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
                  <ArrowUpRight size={18} strokeWidth={1.6} />
                </div>

                <p className="text-[15px] font-semibold text-[#1b1713]/50">
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
                  Tell us what you&apos;re trying to build and we&apos;ll help
                  determine the right approach.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
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