import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  Box,
  Check,
  CircleDollarSign,
  Clock3,
  Code2,
  Gift,
  Heart,
  LayoutDashboard,
  Mail,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
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
    description:
      "Customers can create their own account and manage their experience in one place.",
  },
  {
    icon: Gift,
    title: "Points & Rewards",
    description:
      "A built-in rewards system lets customers earn points and use them on future orders.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description:
      "Customers can follow active orders and access shipping information from their dashboard.",
  },
  {
    icon: PackageCheck,
    title: "Order History",
    description:
      "Previous purchases stay organized and easy to access from the customer's account.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description:
      "Products can be saved to a personal favorites list for quick access later.",
  },
  {
    icon: BadgePercent,
    title: "Promotions",
    description:
      "Promo codes, rewards, discounts, and offers connect directly with the shopping experience.",
  },
];

const affiliateFeatures = [
  {
    icon: BadgePercent,
    title: "Unique Codes",
    description: "Dedicated promotional codes for each affiliate.",
  },
  {
    icon: CircleDollarSign,
    title: "Commissions",
    description: "Affiliate commissions are calculated and tracked.",
  },
  {
    icon: BarChart3,
    title: "Live Dashboard",
    description: "Affiliates can view their activity and performance.",
  },
  {
    icon: ShoppingBag,
    title: "Order Attribution",
    description: "Qualifying orders connect back to the correct affiliate.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Affiliate communication is built into automated workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Control",
    description: "Affiliate activity can be managed from the admin side.",
  },
];

const adminFeatures = [
  {
    icon: ShoppingBag,
    title: "Orders",
    description: "Manage orders and fulfillment.",
  },
  {
    icon: Box,
    title: "Inventory",
    description: "Track inventory across the catalog.",
  },
  {
    icon: Users,
    title: "Customers",
    description: "Manage customer accounts and activity.",
  },
  {
    icon: BarChart3,
    title: "Revenue",
    description: "Keep business performance visible.",
  },
  {
    icon: BadgePercent,
    title: "Promotions",
    description: "Create and manage promotional offers.",
  },
  {
    icon: Star,
    title: "Reviews",
    description: "Manage customer reviews from one place.",
  },
];

const automations = [
  {
    icon: ShoppingCart,
    title: "Order Confirmations",
    description: "Sent automatically after checkout.",
  },
  {
    icon: CircleDollarSign,
    title: "Payment Updates",
    description: "Customers receive payment confirmation.",
  },
  {
    icon: Truck,
    title: "Shipping Updates",
    description: "Shipping communication stays automatic.",
  },
  {
    icon: PackageCheck,
    title: "Tracking Emails",
    description: "Tracking details are sent when available.",
  },
  {
    icon: RefreshCw,
    title: "Inventory Updates",
    description: "Inventory responds to order activity.",
  },
  {
    icon: Users,
    title: "Affiliate Emails",
    description: "Affiliate communication runs automatically.",
  },
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
    <main className="min-h-screen overflow-hidden bg-[#fcfbf8] text-[#171717]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-40">
        {/* subtle decorative glow */}
        <div className="pointer-events-none absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#dce8f7]/45 blur-[110px]" />

        <Reveal>
          <Link
            href="/work"
            className="group relative z-10 inline-flex items-center gap-2 text-[13px] font-medium text-[#171717]/45 transition-colors hover:text-[#171717]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="relative z-10 mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.75fr] lg:items-end lg:gap-24">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#152238] text-white shadow-[0_10px_30px_rgba(21,34,56,0.15)]">
                  <ShoppingBag size={19} strokeWidth={1.6} />
                </div>

                <div>
                  <p className="text-[13px] font-medium text-[#171717]/55">
                    Apexx Biolabs
                  </p>
                  <p className="mt-0.5 text-[12px] text-[#171717]/35">
                    E-Commerce · Design · Development
                  </p>
                </div>
              </div>

              <h1 className="font-serif text-[4.25rem] font-light leading-[0.88] tracking-[-0.05em] sm:text-[5.3rem] md:text-[6.7rem] lg:text-[7.4rem]">
                Commerce,
                <br />
                <span className="italic text-[#28466d]/60">
                  reimagined.
                </span>
              </h1>
            </div>

            <div className="max-w-lg lg:pb-2">
              <p className="font-serif text-[1.5rem] font-light leading-[1.35] tracking-[-0.015em] text-[#171717]/70 sm:text-[1.7rem]">
                A custom digital ecosystem built around the way Apexx actually
                operates.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-[#171717]/50">
                47 products, customer accounts, rewards, affiliates, order
                management, automation, and business tools — connected through
                one platform.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#152238] px-6 py-3.5 text-[13px] font-medium text-white shadow-[0_12px_30px_rgba(21,34,56,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#203552]"
              >
                Visit Live Website
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* HERO METRICS */}
        <Reveal>
          <div className="relative z-10 mt-16 grid overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white shadow-[0_20px_70px_rgba(20,30,45,0.05)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingBag,
                value: "47",
                label: "Active Products",
              },
              {
                icon: UserRound,
                value: "Customer",
                label: "Accounts & Rewards",
              },
              {
                icon: Users,
                value: "Affiliate",
                label: "Program & Dashboards",
              },
              {
                icon: Zap,
                value: "Automated",
                label: "Operational Workflows",
              },
            ].map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`p-6 sm:p-7 ${
                  index !== 0 ? "lg:border-l lg:border-black/[0.07]" : ""
                } ${index >= 2 ? "border-t border-black/[0.07] lg:border-t-0" : ""}`}
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3fa] text-[#28466d]">
                  <Icon size={18} strokeWidth={1.6} />
                </div>

                <p className="font-serif text-[1.65rem] font-light tracking-[-0.02em] text-[#171717]">
                  {value}
                </p>

                <p className="mt-1 text-[13px] text-[#171717]/40">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          WEBSITE SHOWCASE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="mb-6 flex items-end justify-between gap-5">
            <div>
              <p className="text-[13px] font-medium text-[#28466d]">
                The Experience
              </p>

              <h2 className="mt-1 font-serif text-[2rem] font-light tracking-[-0.025em] sm:text-[2.4rem]">
                Designed from the storefront out.
              </h2>
            </div>

            <a
              href="https://apexxbiolabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 text-[13px] font-medium text-[#171717]/45 transition hover:text-[#171717] sm:flex"
            >
              View website
              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#081526] shadow-[0_35px_100px_rgba(8,21,38,0.16)] sm:rounded-[2.25rem]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs homepage"
              className="block h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#152238] px-7 py-10 text-white sm:px-10 sm:py-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#416b9d]/30 blur-[90px]" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles size={21} strokeWidth={1.5} />
                </div>

                <p className="mt-7 text-[13px] font-medium text-white/45">
                  The Brief
                </p>

                <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] sm:text-[3.5rem] md:text-[4rem]">
                  Not another
                  <br />
                  <span className="italic text-[#9eb9da]">
                    template store.
                  </span>
                </h2>
              </div>

              <div className="flex flex-col justify-end">
                <p className="max-w-2xl font-serif text-[1.4rem] font-light leading-[1.45] text-white/80 sm:text-[1.55rem]">
                  The goal was to create one digital experience capable of
                  supporting both the customer and the business behind it.
                </p>

                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/50">
                  Instead of layering disconnected tools onto a basic
                  storefront, Jovavo developed a custom system where commerce,
                  accounts, rewards, affiliates, inventory, communication, and
                  administration work together.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CUSTOMER EXPERIENCE
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="mb-12 grid gap-7 lg:grid-cols-[0.85fr_1fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5eef9] text-[#28466d]">
                <UserRound size={21} strokeWidth={1.6} />
              </div>

              <p className="text-[13px] font-medium text-[#28466d]">
                Customer Experience
              </p>

              <h2 className="mt-3 font-serif text-[2.9rem] font-light leading-[1] tracking-[-0.035em] sm:text-[3.6rem] md:text-[4.1rem]">
                The relationship doesn&apos;t
                <br />
                <span className="italic text-[#28466d]/55">
                  end at checkout.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-[#171717]/50 lg:justify-self-end">
              Customers get a dedicated account experience for managing
              rewards, orders, saved products, and their relationship with the
              store.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {customerFeatures.map(
            ({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={(index % 3) * 60}>
                <div
                  className={`group h-full overflow-hidden rounded-[1.6rem] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
                    index === 0
                      ? "border-[#28466d] bg-[#28466d] text-white shadow-[0_18px_50px_rgba(40,70,109,0.15)]"
                      : "border-black/[0.07] bg-white hover:border-[#28466d]/20 hover:shadow-[0_18px_50px_rgba(20,30,45,0.06)]"
                  }`}
                >
                  <div
                    className={`mb-8 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-white/12 text-white"
                        : "bg-[#edf3fa] text-[#28466d]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-serif text-[1.65rem] font-light tracking-[-0.02em]">
                    {title}
                  </h3>

                  <p
                    className={`mt-3 text-[14px] leading-6 ${
                      index === 0 ? "text-white/60" : "text-[#171717]/45"
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </Reveal>
            )
          )}
        </div>
      </section>

      {/* =========================================================
          AFFILIATE SYSTEM
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[2.25rem] bg-[#dfeafa]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative overflow-hidden p-8 sm:p-10 md:p-14">
                <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/70 blur-[70px]" />

                <div className="relative z-10">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#28466d] text-white shadow-[0_10px_30px_rgba(40,70,109,0.18)]">
                    <Users size={21} strokeWidth={1.6} />
                  </div>

                  <p className="text-[13px] font-medium text-[#28466d]/60">
                    Affiliate Infrastructure
                  </p>

                  <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] text-[#152238] sm:text-[3.5rem]">
                    An affiliate program
                    <br />
                    <span className="italic text-[#28466d]/55">
                      with its own system.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#28466d]/60">
                    Affiliates aren&apos;t managed through spreadsheets or
                    disconnected tools. The program lives inside the platform.
                  </p>
                </div>
              </div>

              <div className="grid gap-px bg-[#28466d]/10 sm:grid-cols-2">
                {affiliateFeatures.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="group bg-white/70 p-6 transition-colors duration-300 hover:bg-white sm:p-7"
                    >
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6eef8] text-[#28466d]">
                        <Icon size={18} strokeWidth={1.6} />
                      </div>

                      <h3 className="font-serif text-[1.45rem] font-light tracking-[-0.02em] text-[#152238]">
                        {title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-6 text-[#28466d]/55">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          BUSINESS OPERATIONS
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#152238] text-white">
                <LayoutDashboard size={21} strokeWidth={1.6} />
              </div>

              <p className="text-[13px] font-medium text-[#171717]/45">
                Business Operations
              </p>

              <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] sm:text-[3.4rem]">
                Powerful on the
                <br />
                <span className="italic text-[#28466d]/55">
                  other side, too.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-7 text-[#171717]/50">
                The customer sees a simple storefront. Behind it sits a custom
                set of tools for managing the business.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {adminFeatures.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group flex gap-5 rounded-[1.4rem] border border-black/[0.07] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#28466d]/20 hover:shadow-[0_15px_40px_rgba(20,30,45,0.05)] sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf3fa] text-[#28466d] transition-colors group-hover:bg-[#28466d] group-hover:text-white">
                    <Icon size={19} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="font-serif text-[1.35rem] font-light">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[13px] leading-5 text-[#171717]/40">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          AUTOMATION
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-28">
        <Reveal>
          <div className="rounded-[2.25rem] border border-black/[0.07] bg-white p-7 shadow-[0_20px_70px_rgba(20,30,45,0.04)] sm:p-10 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0d1] text-[#8b641e]">
                  <Zap size={21} strokeWidth={1.7} />
                </div>

                <p className="text-[13px] font-medium text-[#171717]/45">
                  Automation
                </p>

                <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1] tracking-[-0.035em] sm:text-[3.4rem]">
                  The work that happens
                  <br />
                  <span className="italic text-[#28466d]/55">
                    without being asked.
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-[15px] leading-7 text-[#171717]/50">
                  Routine customer communication and operational updates happen
                  automatically as orders move through the platform.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {automations.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-[1.25rem] bg-[#f6f8fb] p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#28466d] shadow-sm">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="font-serif text-[1.2rem] font-light">
                        {title}
                      </p>

                      <p className="mt-1 text-[12px] leading-5 text-[#171717]/40">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          TECH
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 border-y border-black/[0.08] py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3fa] text-[#28466d]">
                <Code2 size={18} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-[12px] text-[#171717]/35">Technology</p>
                <h2 className="font-serif text-[1.5rem] font-light">
                  Built from the ground up.
                </h2>
              </div>
            </div>

            <div className="flex max-w-2xl flex-wrap gap-x-7 gap-y-3">
              {technology.map((item) => (
                <span
                  key={item}
                  className="text-[13px] font-medium text-[#171717]/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          RESULT
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#e7eff9] p-8 sm:p-10 md:p-14">
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-white/80 blur-[90px]" />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-24">
              <div>
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#152238] text-white">
                  <Sparkles size={21} strokeWidth={1.6} />
                </div>

                <p className="text-[13px] font-medium text-[#28466d]/55">
                  The Result
                </p>

                <h2 className="mt-3 font-serif text-[3.1rem] font-light leading-[0.98] tracking-[-0.04em] text-[#152238] sm:text-[4rem] md:text-[4.7rem]">
                  47 products.
                  <br />
                  <span className="italic text-[#28466d]/55">
                    One ecosystem.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[15px] leading-7 text-[#28466d]/60">
                  Apexx now operates through one connected platform spanning
                  commerce, customer accounts, rewards, order tracking,
                  affiliates, inventory, promotions, administration, and
                  automated communication.
                </p>

                <a
                  href="https://apexxbiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#152238] transition-opacity hover:opacity-60"
                >
                  Explore the live platform
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.6}
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
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-6 md:pb-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#152238] px-7 py-14 text-center text-white sm:px-10 sm:py-16 md:py-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#345b88]/30 blur-[100px]" />

            <div className="relative z-10">
              <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06]">
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </div>

              <p className="text-[13px] font-medium text-white/40">
                Have something in mind?
              </p>

              <h2 className="mx-auto mt-4 max-w-4xl font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.04em] sm:text-[3.8rem] md:text-[4.5rem]">
                Let&apos;s build something
                <br />
                <span className="italic text-[#9eb9da]">
                  made for your business.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-white/50">
                From the customer experience to the systems behind it, Jovavo
                builds digital platforms around what your business actually
                needs.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[13px] font-medium text-[#152238] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#edf3fa]"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  strokeWidth={1.6}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}