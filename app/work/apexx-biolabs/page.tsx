import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  ["47", "Products"],
  ["Custom", "E-Commerce"],
  ["Built-In", "Affiliate System"],
  ["Automated", "Operations"],
];

const platformFeatures = [
  {
    number: "01",
    title: "Online Store",
    description:
      "A custom storefront built to make browsing, purchasing, and product discovery simple.",
    items: [
      "47 Products",
      "Product Pages",
      "Shopping Cart",
      "Promo Codes",
      "COA Library",
      "Mobile Optimized",
    ],
  },
  {
    number: "02",
    title: "Customer Accounts",
    description:
      "Customers have their own account where they can manage orders, rewards, and saved products.",
    items: [
      "Account Creation",
      "Order Tracking",
      "Previous Orders",
      "Points & Rewards",
      "Favorites",
      "Account Dashboard",
    ],
  },
  {
    number: "03",
    title: "Affiliate System",
    description:
      "A complete affiliate program built directly into the platform for tracking referrals and commissions.",
    items: [
      "Affiliate Accounts",
      "Unique Promo Codes",
      "Commission Tracking",
      "Affiliate Dashboard",
      "Automated Emails",
      "Admin Management",
    ],
  },
  {
    number: "04",
    title: "Business Dashboard",
    description:
      "Custom tools make it easy to manage the business without relying on multiple disconnected systems.",
    items: [
      "Order Management",
      "Inventory Tracking",
      "Product Management",
      "Customer Management",
      "Revenue Tracking",
      "Promo Management",
    ],
  },
];

const automationFeatures = [
  "Order Confirmations",
  "Payment Confirmations",
  "Shipping Updates",
  "Tracking Emails",
  "Inventory Updates",
  "Affiliate Emails",
  "Promotional Campaigns",
  "Subscriber Workflows",
];

const technology = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Resend",
  "Vercel",
  "Cloudflare",
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.24em] text-[#1b1713]/40 transition hover:text-[#1b1713] sm:text-[10px]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Work
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.75fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.38em] text-[#1b1713]/40 sm:text-[10px]">
                E-Commerce · Web Design · Development
              </p>

              <h1 className="font-serif text-[3.7rem] font-light leading-[0.9] tracking-[-0.045em] sm:text-[4.8rem] md:text-[6rem] lg:text-[7rem]">
                Apexx
                <br />
                <span className="italic text-[#1b1713]/50">Biolabs.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="text-[15px] leading-7 text-[#1b1713]/55 sm:text-base">
                A custom e-commerce platform built to handle the entire
                customer journey — from browsing and ordering to rewards,
                affiliates, automation, and business management.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/60 transition hover:text-[#1b1713] sm:text-[10px]"
              >
                Visit Live Website
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* QUICK STATS */}
        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] md:mt-16 md:grid-cols-4">
          {stats.map(([value, label], index) => (
            <Reveal key={label} delay={index * 60}>
              <div
                className={`p-5 sm:p-6 md:p-7 ${
                  index !== 0 ? "md:border-l md:border-[#1b1713]/10" : ""
                } ${
                  index >= 2
                    ? "border-t border-[#1b1713]/10 md:border-t-0"
                    : ""
                }`}
              >
                <p className="font-serif text-[1.7rem] font-light leading-none tracking-[-0.02em] sm:text-[2rem]">
                  {value}
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#1b1713]/40 sm:text-[9px]">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOMEPAGE IMAGE */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              The Website
            </p>

            <span className="text-[8px] uppercase tracking-[0.18em] text-[#1b1713]/25 sm:text-[9px]">
              Desktop Experience
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#081526] sm:rounded-[2rem]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs homepage"
              className="h-auto w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="grid gap-10 border-y border-[#1b1713]/10 py-14 sm:py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                The Project
              </p>

              <h2 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.8rem]">
                More than
                <br />
                <span className="italic text-[#1b1713]/50">
                  an online store.
                </span>
              </h2>
            </div>

            <div className="max-w-2xl">
              <p className="text-[15px] leading-7 text-[#1b1713]/55">
                Apexx Biolabs needed one platform capable of handling both the
                customer experience and the systems running behind it.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#1b1713]/55">
                Jovavo designed and developed a custom e-commerce experience
                connecting a 47-product storefront with customer accounts,
                rewards, order tracking, affiliates, inventory, promotions,
                automated communication, and administrative tools.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CUSTOMER EXPERIENCE HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] md:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-[#efe9df] p-7 sm:p-9 md:p-12">
                <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                  Customer Experience
                </p>

                <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3rem] md:text-[3.5rem]">
                  Their account.
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    Their experience.
                  </span>
                </h2>

                <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                  Customers can create their own accounts and manage everything
                  they need after placing an order.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#1b1713]/10">
                {[
                  ["01", "Earn Points"],
                  ["02", "Track Orders"],
                  ["03", "View Past Orders"],
                  ["04", "Save Favorites"],
                  ["05", "Manage Account"],
                  ["06", "Use Rewards"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="bg-[#fbf8f2] p-5 sm:p-7 md:p-8"
                  >
                    <span className="text-[8px] tracking-[0.2em] text-[#1b1713]/25">
                      {number}
                    </span>

                    <p className="mt-5 font-serif text-[1.25rem] font-light leading-tight sm:text-[1.5rem]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PLATFORM */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              The Platform
            </p>

            <h2 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.8rem]">
              One website.
              <br />
              <span className="italic text-[#1b1713]/50">
                Four connected systems.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-[#1b1713]/50 sm:text-[15px]">
              The platform was built around four core parts of the business.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {platformFeatures.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 2) * 80}>
              <div className="group h-full rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-8 md:rounded-[1.75rem]">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-serif text-[1.9rem] font-light tracking-[-0.02em] sm:text-[2.2rem]">
                    {feature.title}
                  </h3>

                  <span className="pt-1 text-[9px] tracking-[0.2em] text-[#1b1713]/25">
                    {feature.number}
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-[13px] leading-6 text-[#1b1713]/50 sm:text-[14px]">
                  {feature.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {feature.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8]/60 px-3.5 py-2 text-[8px] uppercase tracking-[0.15em] text-[#1b1713]/45 sm:text-[9px]"
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

      {/* AFFILIATE SYSTEM */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.75rem] bg-[#1b1713] p-7 text-white sm:p-10 md:rounded-[2rem] md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-white/35 sm:text-[10px]">
                  Affiliate System
                </p>

                <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3rem] md:text-[3.5rem]">
                  Affiliate growth,
                  <br />
                  <span className="italic text-white/50">built in.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-xl text-[14px] leading-7 text-white/55 sm:text-[15px]">
                  Affiliates receive their own promotional codes and dashboards
                  where referrals and commissions can be tracked, while
                  administrative tools keep the entire program organized behind
                  the scenes.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Unique Promo Codes",
                    "Commission Tracking",
                    "Affiliate Dashboards",
                    "Order Attribution",
                    "Automated Emails",
                    "Admin Dashboard",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-white/10 pt-3 text-[9px] uppercase tracking-[0.16em] text-white/55 sm:text-[10px]"
                    >
                      <Check
                        size={13}
                        strokeWidth={1.5}
                        className="shrink-0 text-white/35"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AUTOMATION */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="grid gap-10 border-y border-[#1b1713]/10 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                Automation
              </p>

              <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3rem]">
                Less manual work.
                <br />
                <span className="italic text-[#1b1713]/50">
                  More automation.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-[14px] leading-7 text-[#1b1713]/50">
                Key customer and business workflows happen automatically as
                orders move through the platform.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {automationFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[#1b1713]/10 py-4 text-[9px] uppercase tracking-[0.16em] text-[#1b1713]/50 sm:text-[10px]"
                >
                  <Check
                    size={13}
                    strokeWidth={1.5}
                    className="shrink-0 text-[#1b1713]/35"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[1.75rem] border border-[#1b1713]/10 bg-[#efe9df] p-7 sm:p-9 md:rounded-[2rem] md:p-11">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="mb-3 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                  Technology
                </p>

                <h2 className="font-serif text-[2rem] font-light tracking-[-0.02em] sm:text-[2.4rem]">
                  Custom from front to back.
                </h2>
              </div>

              <div className="flex max-w-2xl flex-wrap gap-2">
                {technology.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-4 py-2 text-[8px] uppercase tracking-[0.15em] text-[#1b1713]/45 sm:text-[9px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* RESULT */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-6">
        <Reveal>
          <div className="grid gap-10 rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7 sm:p-10 md:rounded-[2rem] md:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                The Result
              </p>

              <h2 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.7rem]">
                One platform.
                <br />
                <span className="italic text-[#1b1713]/50">
                  Built to grow.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                Apexx Biolabs now operates through one custom platform
                connecting its 47-product storefront, customer experience,
                rewards, affiliate program, inventory, order management,
                promotions, and automated communication.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/60 transition hover:text-[#1b1713] sm:text-[10px]"
              >
                Visit Apexx Biolabs
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-6 sm:pb-24 md:pb-28">
        <Reveal>
          <div className="py-12 text-center sm:py-16">
            <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              Start a Project
            </p>

            <h2 className="font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem] md:text-[3.5rem]">
              Have a business that needs{" "}
              <span className="italic text-[#1b1713]/50">more?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[14px] leading-6 text-[#1b1713]/50 sm:text-[15px]">
              Tell us what you&apos;re building. We&apos;ll design the
              experience around the way your business actually works.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:text-[10px]"
            >
              Start a Project

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}