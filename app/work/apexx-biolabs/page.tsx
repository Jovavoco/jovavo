import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  Gift,
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

const features = [
  {
    icon: ShoppingBag,
    title: "47-Product Store",
    description:
      "A custom storefront built for a growing product catalog.",
  },
  {
    icon: UserRound,
    title: "Customer Accounts",
    description:
      "Customers can create accounts, save favorites, and manage their information.",
  },
  {
    icon: Gift,
    title: "Points & Rewards",
    description:
      "Customers earn points and can redeem rewards on future orders.",
  },
  {
    icon: PackageCheck,
    title: "Order Management",
    description:
      "Customers can track current orders and view their previous purchases.",
  },
  {
    icon: Users,
    title: "Affiliate System",
    description:
      "Affiliate codes, commissions, dashboards, and order tracking are built in.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:
      "Orders, products, customers, inventory, promotions, and affiliates are managed in one place.",
  },
];

const affiliateTools = [
  {
    icon: BadgePercent,
    title: "Unique Promo Codes",
  },
  {
    icon: BarChart3,
    title: "Commission Tracking",
  },
  {
    icon: Users,
    title: "Affiliate Dashboards",
  },
  {
    icon: Mail,
    title: "Automated Emails",
  },
];

const automations = [
  {
    icon: PackageCheck,
    title: "Order Confirmations",
  },
  {
    icon: Truck,
    title: "Shipping Updates",
  },
  {
    icon: Mail,
    title: "Customer Emails",
  },
  {
    icon: Zap,
    title: "Inventory & Order Workflows",
  },
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#fcfbf8] text-[#171717]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#171717]/45 transition hover:text-[#171717]"
          >
            <ArrowLeft
              size={16}
              strokeWidth={1.7}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.8fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#152238] text-white">
                  <ShoppingBag size={19} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-medium text-[#171717]/45">
                  E-Commerce · Web Design · Development
                </p>
              </div>

              <h1 className="font-serif text-[4rem] font-light leading-[0.9] tracking-[-0.045em] sm:text-[5rem] md:text-[6.4rem]">
                Apexx
                <br />
                <span className="italic text-[#28466d]/60">
                  Biolabs.
                </span>
              </h1>
            </div>

            <div className="max-w-lg">
              <p className="font-serif text-[1.45rem] font-light leading-[1.4] text-[#171717]/70">
                A custom e-commerce platform built to run more than an online
                store.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-[#171717]/50">
                47 products, customer accounts, rewards, order tracking,
                affiliates, automation, and business management — all in one
                platform.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#152238] px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#203552]"
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

      {/* WEBSITE */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="mb-5">
            <p className="text-sm font-medium text-[#28466d]">
              The Website
            </p>

            <h2 className="mt-1 font-serif text-[2rem] font-light tracking-[-0.02em] sm:text-[2.4rem]">
              Designed around the brand.
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-[#081526] shadow-[0_30px_90px_rgba(8,21,38,0.13)]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs homepage"
              className="block h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      {/* WHAT WE BUILT */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-medium text-[#28466d]">
              What We Built
            </p>

            <h2 className="mt-2 font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.5rem]">
              One platform for the{" "}
              <span className="italic text-[#28466d]/60">
                entire business.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#171717]/50">
              The customer-facing store and the systems behind it were designed
              to work together from the start.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 60}>
              <div className="h-full rounded-[1.5rem] border border-black/[0.07] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(20,30,45,0.06)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f0fa] text-[#28466d]">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <h3 className="font-serif text-[1.55rem] font-light">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#171717]/45">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AFFILIATES + AUTOMATION */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* AFFILIATES */}
          <Reveal>
            <div className="h-full rounded-[2rem] bg-[#dfeafa] p-7 sm:p-9 md:p-10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-[#28466d] text-white">
                <Users size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-medium text-[#28466d]/60">
                Affiliate System
              </p>

              <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em] text-[#152238]">
                Affiliate growth,
                <br />
                <span className="italic text-[#28466d]/60">
                  built in.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#28466d]/60">
                Affiliates have their own codes and dashboards, while Apexx can
                manage commissions and activity from the admin side.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {affiliateTools.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-xl bg-white/65 px-4 py-4"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#28466d]"
                    />

                    <span className="text-sm font-medium text-[#152238]/70">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* AUTOMATION */}
          <Reveal delay={80}>
            <div className="h-full rounded-[2rem] bg-[#152238] p-7 text-white sm:p-9 md:p-10">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <Zap size={21} strokeWidth={1.6} />
              </div>

              <p className="text-sm font-medium text-white/45">
                Automation
              </p>

              <h2 className="mt-2 font-serif text-[2.5rem] font-light leading-[1.02] tracking-[-0.03em]">
                Less manual work.
                <br />
                <span className="italic text-[#a8c1df]">
                  More automation.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-[14px] leading-7 text-white/50">
                Important customer communication and business workflows happen
                automatically as orders move through the platform.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {automations.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.07] px-4 py-4"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#a8c1df]"
                    />

                    <span className="text-sm font-medium text-white/65">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESULT */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-[#edf3fa] p-8 sm:p-10 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#152238] text-white">
                  <Sparkles size={21} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-medium text-[#28466d]/55">
                  The Result
                </p>

                <h2 className="mt-2 font-serif text-[3rem] font-light leading-[1] tracking-[-0.035em] text-[#152238] sm:text-[3.8rem] md:text-[4.3rem]">
                  47 products.
                  <br />
                  <span className="italic text-[#28466d]/55">
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
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#152238] transition hover:opacity-60"
                >
                  Explore Apexx Biolabs
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-6 md:pb-28">
        <Reveal>
          <div className="py-14 text-center sm:py-16">
            <h2 className="font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.5rem] md:text-[4rem]">
              Have something{" "}
              <span className="italic text-[#28466d]/55">
                in mind?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-7 text-[#171717]/50">
              Tell us about your business and what you want to build.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#152238] px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#203552]"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}