import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  ["Industry", "Biotechnology"],
  ["Project Type", "Custom Ecommerce Platform"],
  ["Products", "47 Active Products"],
  ["Role", "Design • Development • Deployment"],
];

const capabilities = [
  {
    title: "Storefront",
    items: [
      "Custom ecommerce website",
      "47 active products",
      "Product catalog",
      "Product pages",
      "Shopping cart",
      "Customer accounts",
      "Customer portal",
      "Product reviews",
      "Newsletter signup",
      "COA library",
      "Responsive design",
    ],
  },
  {
    title: "Customer Experience",
    items: [
      "Account creation",
      "Customer dashboard",
      "Points & rewards",
      "Points history",
      "Order tracking",
      "Previous order history",
      "Favorites",
      "Promo codes",
      "Order status updates",
      "Account management",
    ],
  },
  {
    title: "Affiliate System",
    items: [
      "Affiliate accounts",
      "Unique affiliate promo codes",
      "Commission tracking",
      "Affiliate dashboards",
      "Affiliate order tracking",
      "Automated affiliate emails",
      "Affiliate management tools",
      "Admin affiliate dashboard",
    ],
  },
  {
    title: "Business Operations",
    items: [
      "Custom admin dashboard",
      "Inventory tracking",
      "Product management",
      "Order management",
      "Revenue tracking",
      "Customer management",
      "Subscriber management",
      "Review moderation",
      "Promo code system",
      "Affiliate management",
    ],
  },
  {
    title: "Automation",
    items: [
      "Order confirmation emails",
      "Payment confirmation emails",
      "Shipping notifications",
      "Tracking emails",
      "Promotional email campaigns",
      "Affiliate emails",
      "Automatic inventory deduction",
      "Order quantity updates",
      "Subscriber workflows",
    ],
  },
  {
    title: "Technology",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Resend",
      "GitHub",
      "Vercel",
      "Cloudflare",
      "Google Analytics",
    ],
  },
];

const delivered = [
  "Custom website design",
  "Full ecommerce development",
  "47 product catalog",
  "Customer accounts",
  "Customer dashboard",
  "Points & rewards system",
  "Order tracking",
  "Previous order history",
  "Favorites system",
  "Affiliate system",
  "Affiliate promo codes",
  "Commission tracking",
  "Affiliate dashboards",
  "Affiliate admin tools",
  "Automated affiliate emails",
  "Inventory tracking",
  "Custom admin dashboard",
  "Promo code system",
  "Automated transactional emails",
  "Promotional email workflows",
  "Review moderation",
  "Newsletter signup",
  "Google Analytics setup",
  "SEO foundation",
  "Cloudflare domain setup",
  "Vercel deployment",
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pb-28 pt-40">
        <Reveal>
          <Link
            href="/work"
            className="mb-14 inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-[#1b1713]/45 transition hover:text-[#1b1713]"
          >
            ← Back to Work
          </Link>

          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Case Study
          </p>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <h1 className="max-w-6xl font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
              Apexx
              <br />
              Biolabs.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
              A fully custom ecommerce platform built around a 47-product
              catalog, customer accounts, rewards, order tracking, affiliate
              infrastructure, automated communication, inventory management,
              promotions, and custom administrative tools.
            </p>
          </div>
        </Reveal>

        {/* STATS */}
        <div className="mt-20 grid gap-5 md:grid-cols-4">
          {stats.map(([label, value], index) => (
            <Reveal key={label} delay={index * 90}>
              <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7 shadow-[0_20px_70px_rgba(27,23,19,0.04)]">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#1b1713]/35">
                  {label}
                </p>

                <p className="text-lg font-medium leading-snug tracking-tight text-[#1b1713]/80">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* HOMEPAGE IMAGE */}
        <Reveal>
          <section className="mt-20">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Homepage
            </p>

            <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#081526] shadow-[0_40px_120px_rgba(27,23,19,0.14)]">
              <img
                src="/images/work/apexx-homepagebiolabs.png"
                alt="Apexx Biolabs homepage"
                className="h-auto w-full object-cover object-top"
              />
            </div>
          </section>
        </Reveal>

        {/* OVERVIEW */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-8 text-white md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Overview
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
              More than a website.
              <br />
              A complete ecommerce system.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/60">
                Apexx Biolabs was built as a custom digital platform that
                combines a polished customer-facing storefront with the systems
                needed to manage 47 active products, customers, orders,
                inventory, rewards, affiliates, promotions, subscribers, and
                day-to-day business operations.
              </p>

              <p className="text-lg leading-relaxed text-white/60">
                Customers can create their own accounts, earn and manage points,
                track active orders, review previous purchases, save favorites,
                and manage their shopping experience through a dedicated
                customer portal. Behind the storefront, automated workflows
                connect orders, inventory, email communication, promotions, and
                administrative tools.
              </p>
            </div>
          </section>
        </Reveal>

        {/* CHALLENGE / SOLUTION */}
        <section className="mt-24 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] md:p-12">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                The Challenge
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-5xl">
                Create a premium storefront with powerful tools behind it.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#1b1713]/55">
                The project needed to support far more than product browsing.
                Apexx Biolabs required a scalable ecommerce foundation capable
                of managing a growing product catalog, inventory, orders,
                customer accounts, rewards, promotional campaigns, affiliates,
                subscriber workflows, reviews, and customer communication.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 md:p-12">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                The Solution
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-5xl">
                A custom platform designed around real business operations.
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-[#1b1713]/55">
                Jovavo designed and developed a tailored ecommerce ecosystem
                connecting the storefront, customer portal, rewards system,
                affiliate infrastructure, inventory tracking, promotions,
                automated emails, analytics, and administrative tools into one
                cohesive platform.
              </p>
            </div>
          </Reveal>
        </section>

        {/* CAPABILITIES */}
        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Platform Capabilities
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
              Built to support the full ecommerce workflow.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {capabilities.map((section, index) => (
              <Reveal key={section.title} delay={index * 100}>
                <div className="h-full rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_35px_100px_rgba(27,23,19,0.08)] md:p-10">
                  <h3 className="mb-8 font-serif text-3xl font-light uppercase tracking-[0.08em] md:text-4xl">
                    {section.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#1b1713]/55"
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
        <Reveal>
          <section className="mt-24 overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 md:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                  Affiliate Infrastructure
                </p>

                <h2 className="font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Built-in tools
                  <br />
                  for affiliate
                  <br />
                  growth.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                  A custom affiliate system gives affiliates dedicated promo
                  codes, commission tracking, order visibility, automated
                  communication, and their own dashboards. Administrative tools
                  provide centralized visibility into affiliate activity and
                  performance.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Affiliate Accounts",
                    "Unique Promo Codes",
                    "Commission Tracking",
                    "Affiliate Dashboards",
                    "Automated Emails",
                    "Admin Management",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#1b1713]/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* WHAT WE DELIVERED */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] md:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                  What We Delivered
                </p>

                <h2 className="font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
                  Strategy,
                  <br />
                  storefront,
                  <br />
                  systems.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {delivered.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#1b1713]/60"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* RESULT */}
        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  The Result
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
                  A custom platform built for long-term growth.
                </h2>

                <p className="mt-6 max-w-3xl leading-relaxed text-white/60">
                  Apexx Biolabs now operates on a custom ecommerce platform
                  supporting 47 active products alongside customer accounts,
                  rewards, order history, order tracking, affiliate management,
                  inventory operations, promotional tools, automated
                  communication, and centralized administrative workflows.
                </p>
              </div>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Visit Website
                <ArrowUpRight size={15} />
              </a>
            </div>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <section className="mt-10 rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
                  Start Your Build
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Need something
                  <br />
                  this custom?
                </h2>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1b1713] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90"
              >
                Start Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}