import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  Box,
  Check,
  CircleDollarSign,
  Gift,
  Heart,
  LayoutDashboard,
  Mail,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  UserRound,
  Users,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const customerFeatures = [
  {
    icon: UserRound,
    title: "Customer Accounts",
    description: "Create and manage a personal account.",
  },
  {
    icon: Gift,
    title: "Points & Rewards",
    description: "Earn points and use rewards on future orders.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description: "Follow active orders and shipping progress.",
  },
  {
    icon: PackageCheck,
    title: "Order History",
    description: "View previous purchases from the account dashboard.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description: "Save products for quick access later.",
  },
];

const businessFeatures = [
  {
    icon: ShoppingBag,
    title: "Products",
    description: "Manage a growing 47-product catalog.",
  },
  {
    icon: PackageCheck,
    title: "Orders",
    description: "Manage orders and fulfillment in one place.",
  },
  {
    icon: Box,
    title: "Inventory",
    description: "Keep product inventory organized and up to date.",
  },
  {
    icon: Users,
    title: "Customers",
    description: "Manage customer accounts and activity.",
  },
  {
    icon: BadgePercent,
    title: "Promotions",
    description: "Manage promo codes, discounts, and offers.",
  },
  {
    icon: BarChart3,
    title: "Business Dashboard",
    description: "Keep important business activity easy to manage.",
  },
];

const affiliateFeatures = [
  {
    icon: BadgePercent,
    title: "Affiliate Codes",
  },
  {
    icon: ShoppingBag,
    title: "Order Tracking",
  },
  {
    icon: CircleDollarSign,
    title: "Commissions",
  },
  {
    icon: Mail,
    title: "Automated Emails",
  },
];

const automationFeatures = [
  "Order confirmations",
  "Payment updates",
  "Shipping notifications",
  "Tracking emails",
  "Inventory updates",
  "Affiliate emails",
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] text-[#171717]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717]/50 transition hover:text-[#171717]"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.7}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-16">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172437] text-white">
                  <ShoppingBag size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#172437]">
                    Apexx Biolabs
                  </p>

                  <p className="mt-0.5 text-[13px] text-[#171717]/45">
                    E-Commerce · Web Design · Development
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-[3.4rem] font-light leading-[0.95] tracking-[-0.04em] sm:text-[4.2rem] md:text-[5rem]">
                A custom platform
                <br />
                <span className="italic text-[#345b88]/65">
                  built to grow.
                </span>
              </h1>
            </div>

            <div>
              <p className="max-w-lg text-[16px] leading-7 text-[#171717]/60">
                We designed and developed a complete e-commerce experience for
                Apexx Biolabs — from the storefront customers see to the tools
                used to run the business behind it.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#172437] px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#28466d]"
              >
                Visit Live Website
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          WHAT THEY NEEDED / WHAT WE CREATED
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white md:grid-cols-2">
          {/* WHAT THEY NEEDED */}
          <Reveal>
            <div className="h-full p-7 sm:p-9 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3f8] text-[#28466d]">
                <Sparkles size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-semibold text-[#28466d]">
                What They Needed
              </p>

              <h2 className="mt-3 font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] sm:text-[2.5rem]">
                More than a basic
                <br />
                online store.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#171717]/55">
                Apexx needed a website that could support a growing product
                catalog while also handling customer accounts, rewards, orders,
                affiliates, inventory, promotions, and everyday business
                operations.
              </p>
            </div>
          </Reveal>

          {/* WHAT WE CREATED */}
          <Reveal delay={80}>
            <div className="h-full border-t border-black/[0.07] bg-[#e8f0fa] p-7 sm:p-9 md:border-l md:border-t-0 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#28466d] text-white">
                <LayoutDashboard size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-semibold text-[#28466d]">
                What We Created
              </p>

              <h2 className="mt-3 font-serif text-[2.1rem] font-light leading-[1.05] tracking-[-0.025em] text-[#172437] sm:text-[2.5rem]">
                One connected
                <br />
                platform.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#28466d]/65">
                We built a custom e-commerce platform that brings the
                storefront, customer experience, affiliate program, automation,
                and business management together in one place.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WEBSITE — SMALLER IMAGE
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-6 text-center">
            <p className="text-sm font-semibold text-[#28466d]">
              The Website
            </p>

            <h2 className="mt-2 font-serif text-[2.3rem] font-light tracking-[-0.03em] sm:text-[2.8rem]">
              Designed for Apexx.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#171717]/50">
              A clean, responsive storefront designed around the brand and its
              growing catalog.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-[#081526] shadow-[0_20px_60px_rgba(8,21,38,0.1)] sm:rounded-[1.75rem]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs homepage"
              className="block h-auto w-full object-top"
            />
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FOR CUSTOMERS
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="mb-9 max-w-2xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f0fa] text-[#28466d]">
              <UserRound size={21} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#28466d]">
              For Customers
            </p>

            <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.1rem]">
              Everything they need
              <br />
              <span className="italic text-[#345b88]/60">
                in one account.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {customerFeatures.map(
            ({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 5) * 50}>
                <div className="h-full rounded-[1.4rem] border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#28466d]/20 hover:shadow-[0_15px_40px_rgba(20,30,45,0.05)]">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef3f8] text-[#28466d]">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-serif text-[1.25rem] font-light leading-tight">
                    {title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-[#171717]/45">
                    {description}
                  </p>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      {/* =========================================================
          FOR APEXX
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[2rem] bg-[#172437] p-7 text-white sm:p-9 md:p-11">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                  <LayoutDashboard size={21} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#a9c2df]">
                  For Apexx
                </p>

                <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3rem]">
                  Simple tools to run
                  <br />
                  <span className="italic text-[#a9c2df]">
                    the business.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-7 text-white/50">
                  The administrative side keeps the important parts of the
                  business organized and easy to manage.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {businessFeatures.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="flex items-start gap-4 rounded-[1.25rem] bg-white/[0.07] p-4 sm:p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a9c2df]">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>

                      <div>
                        <h3 className="font-serif text-[1.2rem] font-light">
                          {title}
                        </h3>

                        <p className="mt-1 text-[13px] leading-5 text-white/45">
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          AFFILIATES
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="rounded-[2rem] bg-[#dfeafa] p-7 sm:p-9 md:p-11">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#28466d] text-white">
                  <Users size={21} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#28466d]">
                  Affiliate System
                </p>

                <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.03] tracking-[-0.03em] text-[#172437] sm:text-[3rem]">
                  Affiliate growth,
                  <br />
                  <span className="italic text-[#345b88]/65">
                    built in.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-7 text-[#28466d]/60">
                  Affiliates have their own promo codes and dashboards while
                  Apexx can track activity and commissions from the admin side.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {affiliateFeatures.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-[1.25rem] bg-white/70 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef3f8] text-[#28466d]">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <p className="font-serif text-[1.2rem] font-light text-[#172437]">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          AUTOMATION
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6 md:pb-24">
        <Reveal>
          <div className="grid gap-10 border-y border-black/[0.08] py-12 sm:py-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0d3] text-[#8a621e]">
                <Zap size={21} strokeWidth={1.7} />
              </div>

              <p className="text-sm font-semibold text-[#171717]/50">
                Automation
              </p>

              <h2 className="mt-2 font-serif text-[2.4rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[2.9rem]">
                Less manual work.
                <br />
                <span className="italic text-[#345b88]/60">
                  More automation.
                </span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {automationFeatures.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-[#f4f6f8] px-4 py-4"
                >
                  <Check
                    size={17}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#28466d]"
                  />

                  <span className="text-[14px] font-medium text-[#171717]/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          RESULT
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-12 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-[#edf3fa] p-7 sm:p-9 md:p-11">
            <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-end md:gap-14">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#172437] text-white">
                  <Sparkles size={21} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-semibold text-[#28466d]">
                  The Result
                </p>

                <h2 className="mt-2 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] text-[#172437] sm:text-[3.5rem]">
                  47 products.
                  <br />
                  <span className="italic text-[#345b88]/60">
                    One platform.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-[#28466d]/60">
                  Apexx now has one connected platform for its storefront,
                  customers, rewards, orders, affiliates, inventory,
                  promotions, and automated communication.
                </p>

                <a
                  href="https://apexxbiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#172437] transition hover:opacity-60"
                >
                  Explore Apexx Biolabs
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-24 pt-8 sm:px-6 md:pb-28">
        <Reveal>
          <div className="py-12 text-center sm:py-14">
            <h2 className="font-serif text-[2.6rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.3rem]">
              Have a project{" "}
              <span className="italic text-[#345b88]/60">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-[#171717]/50">
              Tell us what your business needs. We&apos;ll build around it.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#172437] px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#28466d] sm:w-auto"
            >
              Start a Project
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}