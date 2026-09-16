import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  ["Industry", "Biotechnology"],
  ["Platform", "Custom E-Commerce"],
  ["Catalog", "47 Products"],
  ["Role", "Design · Development · Deployment"],
];

const capabilities = [
  {
    number: "01",
    title: "Commerce",
    description:
      "A complete storefront designed around the brand and its growing product catalog.",
    items: [
      "47 Product Catalog",
      "Product Pages",
      "Shopping Cart",
      "Promo Codes",
      "COA Library",
      "Responsive Design",
    ],
  },
  {
    number: "02",
    title: "Customer Experience",
    description:
      "Dedicated account tools give customers a simple way to manage their experience after checkout.",
    items: [
      "Customer Accounts",
      "Customer Dashboard",
      "Points & Rewards",
      "Order Tracking",
      "Order History",
      "Favorites",
    ],
  },
  {
    number: "03",
    title: "Affiliate System",
    description:
      "Custom affiliate infrastructure connects promo codes, commissions, communication, and reporting.",
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
    title: "Operations",
    description:
      "Centralized business tools make products, customers, orders, inventory, and promotions easier to manage.",
    items: [
      "Admin Dashboard",
      "Inventory Tracking",
      "Order Management",
      "Product Management",
      "Customer Management",
      "Revenue Tracking",
    ],
  },
  {
    number: "05",
    title: "Automation",
    description:
      "Automated workflows connect customer communication with orders, shipping, inventory, and marketing.",
    items: [
      "Order Emails",
      "Payment Emails",
      "Shipping Updates",
      "Tracking Emails",
      "Inventory Updates",
      "Email Campaigns",
    ],
  },
  {
    number: "06",
    title: "Technology",
    description:
      "A modern custom stack provides the foundation for performance, flexibility, and continued development.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Resend",
      "Vercel",
      "Cloudflare",
    ],
  },
];

const delivered = [
  "Custom Website Design",
  "Full E-Commerce Development",
  "47-Product Catalog",
  "Customer Accounts",
  "Points & Rewards",
  "Order Tracking",
  "Order History",
  "Favorites",
  "Affiliate System",
  "Affiliate Promo Codes",
  "Commission Tracking",
  "Affiliate Dashboards",
  "Affiliate Admin Tools",
  "Automated Affiliate Emails",
  "Inventory Tracking",
  "Custom Admin Dashboard",
  "Promo Code System",
  "Transactional Emails",
  "Email Campaign Workflows",
  "Review Management",
  "Newsletter Signup",
  "Analytics Setup",
  "SEO Foundation",
  "Cloudflare Setup",
  "Vercel Deployment",
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="group mb-12 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.24em] text-[#1b1713]/40 transition-colors hover:text-[#1b1713] sm:text-[10px]"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to Work
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.75fr] lg:items-end lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.36em] text-[#1b1713]/40 sm:text-[10px] sm:tracking-[0.42em]">
                Case Study · E-Commerce
              </p>

              <h1 className="font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] text-[#1b1713] sm:text-[4.5rem] md:text-[5.8rem] lg:text-[6.7rem]">
                Apexx
                <br />
                <span className="italic text-[#1b1713]/55">Biolabs.</span>
              </h1>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-base sm:leading-7">
                A custom e-commerce platform connecting a 47-product
                storefront with customer accounts, rewards, order management,
                affiliate infrastructure, automation, and business operations.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/60 transition-colors hover:text-[#1b1713] sm:text-[10px]"
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

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 border-y border-[#1b1713]/10 md:mt-16 md:grid-cols-4">
          {stats.map(([label, value], index) => (
            <Reveal key={label} delay={index * 70}>
              <div
                className={`py-6 sm:py-7 md:px-6 ${
                  index % 2 === 0 ? "pr-4" : "pl-4"
                } ${
                  index !== 0
                    ? "md:border-l md:border-[#1b1713]/10"
                    : ""
                }`}
              >
                <p className="mb-2 text-[8px] uppercase tracking-[0.22em] text-[#1b1713]/35 sm:text-[9px]">
                  {label}
                </p>

                <p className="text-[13px] leading-5 text-[#1b1713]/75 sm:text-sm">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOMEPAGE */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-5 flex items-end justify-between gap-4">
            <p className="text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              Homepage
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.2em] text-[#1b1713]/30 sm:block">
              Desktop Experience
            </p>
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

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="border-y border-[#1b1713]/10 py-14 sm:py-16 md:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                  Overview
                </p>

                <h2 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.8rem]">
                  More than
                  <br />
                  <span className="italic text-[#1b1713]/55">
                    a storefront.
                  </span>
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                <p className="text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                  Apexx Biolabs was developed as a complete digital platform
                  connecting a polished customer-facing storefront with the
                  operational systems required to manage 47 products, orders,
                  customers, inventory, promotions, affiliates, and
                  communication.
                </p>

                <p className="text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                  Customers can create accounts, earn and manage points, save
                  favorites, track active orders, and review previous orders
                  through their own portal, while automated workflows handle
                  key processes behind the scenes.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#1b1713]/10 md:grid-cols-2 md:rounded-[2rem]">
          <Reveal>
            <div className="h-full bg-[#fbf8f2] p-7 sm:p-9 md:p-11">
              <p className="mb-8 text-[9px] uppercase tracking-[0.32em] text-[#1b1713]/35 sm:text-[10px]">
                01 · The Challenge
              </p>

              <h2 className="max-w-lg font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] sm:text-[2.5rem]">
                A premium storefront with{" "}
                <span className="italic text-[#1b1713]/55">
                  serious infrastructure.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#1b1713]/55">
                The platform needed to go far beyond product browsing. It had
                to support a growing catalog, customer accounts, rewards,
                orders, inventory, promotions, affiliates, reviews,
                subscribers, and ongoing customer communication.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full bg-[#efe9df] p-7 sm:p-9 md:p-11">
              <p className="mb-8 text-[9px] uppercase tracking-[0.32em] text-[#1b1713]/35 sm:text-[10px]">
                02 · The Solution
              </p>

              <h2 className="max-w-lg font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] sm:text-[2.5rem]">
                One system built around{" "}
                <span className="italic text-[#1b1713]/55">
                  the business.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#1b1713]/55">
                Jovavo created a tailored e-commerce ecosystem connecting the
                storefront, customer portal, rewards, affiliate infrastructure,
                inventory, promotions, automated communication, analytics, and
                administrative tools.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              Platform Capabilities
            </p>

            <h2 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.2rem] md:text-[3.8rem]">
              Everything connected.
              <br />
              <span className="italic text-[#1b1713]/55">
                Nothing off the shelf.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid border-t border-[#1b1713]/10 md:grid-cols-2">
          {capabilities.map((section, index) => (
            <Reveal key={section.title} delay={(index % 2) * 80}>
              <div
                className={`h-full border-b border-[#1b1713]/10 py-9 sm:py-10 md:p-10 ${
                  index % 2 !== 0
                    ? "md:border-l md:border-[#1b1713]/10"
                    : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-[9px] tracking-[0.2em] text-[#1b1713]/30">
                    {section.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-[1.8rem] font-light tracking-[-0.02em] sm:text-[2rem]">
                      {section.title}
                    </h3>

                    <p className="mt-3 max-w-md text-[13px] leading-6 text-[#1b1713]/50 sm:text-[14px]">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1b1713]/10 px-3.5 py-2 text-[8px] uppercase tracking-[0.15em] text-[#1b1713]/45 sm:text-[9px]"
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
          <div className="overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] md:rounded-[2rem]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="border-b border-[#1b1713]/10 p-7 sm:p-9 md:p-11 lg:border-b-0 lg:border-r">
                <p className="mb-6 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                  Affiliate Infrastructure
                </p>

                <h2 className="font-serif text-[2.4rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[2.9rem] md:text-[3.3rem]">
                  Growth tools,
                  <br />
                  <span className="italic text-[#1b1713]/55">
                    built in.
                  </span>
                </h2>
              </div>

              <div className="p-7 sm:p-9 md:p-11">
                <p className="max-w-2xl text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                  The platform includes a custom affiliate system with unique
                  promotional codes, commission tracking, dedicated affiliate
                  dashboards, automated email communication, and centralized
                  administrative tools for managing affiliate activity.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Unique Affiliate Codes",
                    "Commission Tracking",
                    "Affiliate Dashboards",
                    "Order Attribution",
                    "Automated Emails",
                    "Admin Management",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-[#1b1713]/10 pt-3 text-[10px] uppercase tracking-[0.15em] text-[#1b1713]/50"
                    >
                      <Check
                        size={13}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#1b1713]/40"
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

      {/* DELIVERED */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="grid gap-10 border-y border-[#1b1713]/10 py-14 sm:py-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                What We Delivered
              </p>

              <h2 className="font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3rem]">
                Strategy.
                <br />
                Storefront.
                <br />
                <span className="italic text-[#1b1713]/55">Systems.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2">
              {delivered.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-[#1b1713]/10 py-3.5 text-[9px] uppercase tracking-[0.15em] text-[#1b1713]/50 sm:text-[10px]"
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

      {/* RESULT */}
      <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-6">
        <Reveal>
          <div className="rounded-[1.75rem] border border-[#1b1713]/10 bg-[#efe9df] p-7 sm:p-10 md:rounded-[2rem] md:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
                  The Result
                </p>

                <h2 className="max-w-3xl font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.1rem] md:text-[3.6rem]">
                  One platform.
                  <br />
                  <span className="italic text-[#1b1713]/55">
                    Built to grow.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                  Apexx Biolabs now operates on a custom e-commerce platform
                  supporting 47 products alongside customer accounts, rewards,
                  order history, order tracking, affiliate management,
                  inventory operations, promotional tools, automated
                  communication, and centralized administrative workflows.
                </p>

                <a
                  href="https://apexxbiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2.5 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/60 transition-colors hover:text-[#1b1713] sm:text-[10px]"
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
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-4 sm:px-6 sm:pb-24 md:pb-28">
        <Reveal>
          <div className="px-4 py-12 text-center sm:py-16">
            <p className="mb-4 text-[9px] uppercase tracking-[0.34em] text-[#1b1713]/40 sm:text-[10px]">
              Start a Project
            </p>

            <h2 className="font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem] md:text-[3.5rem]">
              Need something{" "}
              <span className="italic text-[#1b1713]/55">this custom?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[14px] leading-6 text-[#1b1713]/50 sm:text-[15px]">
              Tell us what you&apos;re building and what your business needs
              behind the scenes.
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