import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgePercent,
  BarChart3,
  Box,
  Check,
  CircleDollarSign,
  Cloud,
  Code2,
  Gift,
  Heart,
  LayoutDashboard,
  Mail,
  PackageCheck,
  RefreshCw,
  Search,
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
      "Customers can create and manage their own secure account.",
  },
  {
    icon: Gift,
    title: "Points & Rewards",
    description:
      "Customers earn points and can use their rewards toward future orders.",
  },
  {
    icon: Truck,
    title: "Order Tracking",
    description:
      "Active orders and shipping progress are accessible from the customer dashboard.",
  },
  {
    icon: PackageCheck,
    title: "Order History",
    description:
      "Customers can easily view their previous orders in one place.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description:
      "Products can be saved for quick access later.",
  },
  {
    icon: BadgePercent,
    title: "Promotions",
    description:
      "Promo codes, discounts, rewards, and offers are integrated into checkout.",
  },
];

const affiliateFeatures = [
  {
    icon: Users,
    title: "Affiliate Accounts",
    description:
      "Dedicated affiliate accounts provide access to program tools and performance.",
  },
  {
    icon: BadgePercent,
    title: "Unique Promo Codes",
    description:
      "Each affiliate can use a dedicated promotional code for customer referrals.",
  },
  {
    icon: CircleDollarSign,
    title: "Commission Tracking",
    description:
      "Affiliate orders and earned commissions are tracked through the platform.",
  },
  {
    icon: LayoutDashboard,
    title: "Affiliate Dashboard",
    description:
      "Affiliates can view their activity and performance from their own dashboard.",
  },
  {
    icon: Mail,
    title: "Automated Emails",
    description:
      "Affiliate communication is connected to automated email workflows.",
  },
  {
    icon: BarChart3,
    title: "Admin Management",
    description:
      "The business can manage affiliates, activity, codes, and commissions centrally.",
  },
];

const adminFeatures = [
  {
    icon: ShoppingBag,
    title: "Orders",
    text: "Manage orders and fulfillment.",
  },
  {
    icon: Box,
    title: "Inventory",
    text: "Track product inventory.",
  },
  {
    icon: Users,
    title: "Customers",
    text: "Manage customer accounts.",
  },
  {
    icon: BarChart3,
    title: "Revenue",
    text: "View business performance.",
  },
  {
    icon: BadgePercent,
    title: "Promotions",
    text: "Manage codes and offers.",
  },
  {
    icon: Star,
    title: "Reviews",
    text: "Manage customer reviews.",
  },
];

const automations = [
  {
    icon: ShoppingCart,
    title: "Order Confirmation",
  },
  {
    icon: CircleDollarSign,
    title: "Payment Confirmation",
  },
  {
    icon: Truck,
    title: "Shipping Updates",
  },
  {
    icon: PackageCheck,
    title: "Tracking Emails",
  },
  {
    icon: RefreshCw,
    title: "Inventory Updates",
  },
  {
    icon: Users,
    title: "Affiliate Emails",
  },
  {
    icon: Mail,
    title: "Email Campaigns",
  },
  {
    icon: Zap,
    title: "Customer Workflows",
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
    <main className="min-h-screen bg-[#fcfbf8] text-[#1b1713]">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 sm:pt-36 md:pb-20 md:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1b1713]/50 transition hover:text-[#1b1713]"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.7}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Work
          </Link>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1b1713] text-white">
                  <ShoppingBag size={18} strokeWidth={1.6} />
                </div>

                <p className="text-sm font-medium text-[#1b1713]/50">
                  E-Commerce · Web Design · Development
                </p>
              </div>

              <h1 className="font-serif text-[4rem] font-light leading-[0.92] tracking-[-0.045em] sm:text-[5rem] md:text-[6.5rem]">
                Apexx
                <br />
                <span className="italic text-[#1b1713]/55">
                  Biolabs.
                </span>
              </h1>
            </div>

            <div className="max-w-lg">
              <p className="text-lg leading-8 text-[#1b1713]/60">
                A fully custom e-commerce platform connecting a 47-product
                storefront with customer accounts, rewards, affiliates,
                automation, and business management.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#1b1713] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302a24]"
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

        {/* PROJECT INFO */}
        <Reveal>
          <div className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-[#1b1713]/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingBag,
                label: "Catalog",
                value: "47 Products",
              },
              {
                icon: Code2,
                label: "Platform",
                value: "Custom E-Commerce",
              },
              {
                icon: UserRound,
                label: "Customer Experience",
                value: "Accounts + Rewards",
              },
              {
                icon: Users,
                label: "Growth",
                value: "Affiliate System",
              },
            ].map(({ icon: Icon, label, value }, index) => (
              <div
                key={label}
                className={`p-6 sm:p-7 ${
                  index !== 0 ? "lg:border-l lg:border-[#1b1713]/10" : ""
                } ${
                  index > 0 ? "border-t sm:border-t-0" : ""
                }`}
              >
                <Icon
                  size={21}
                  strokeWidth={1.5}
                  className="mb-5 text-[#1b1713]/45"
                />

                <p className="text-sm text-[#1b1713]/40">{label}</p>

                <p className="mt-1 font-serif text-xl text-[#1b1713]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* WEBSITE IMAGE */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <Sparkles
              size={18}
              strokeWidth={1.5}
              className="text-[#1b1713]/45"
            />

            <h2 className="font-serif text-2xl font-light">
              The Website
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#081526] shadow-[0_25px_80px_rgba(27,23,19,0.08)]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs homepage"
              className="block h-auto w-full"
            />
          </div>
        </Reveal>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="grid gap-12 rounded-[2rem] bg-[#111b2a] p-8 text-white sm:p-10 md:p-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Code2 size={21} strokeWidth={1.5} />
              </div>

              <p className="text-sm font-medium text-white/45">
                The Project
              </p>

              <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.5rem]">
                More than an
                <br />
                <span className="italic text-white/55">
                  online store.
                </span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-2xl text-base leading-8 text-white/65">
                Apexx Biolabs needed a platform capable of handling both the
                customer experience and the systems running the business
                behind it.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Jovavo built one connected platform for a 47-product catalog,
                customer accounts, points, order tracking, affiliates,
                inventory, promotions, automated communication, and
                administrative management.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CUSTOMER ACCOUNTS */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8eef8]">
                <UserRound
                  size={20}
                  strokeWidth={1.6}
                  className="text-[#243752]"
                />
              </div>

              <p className="text-sm font-medium text-[#1b1713]/50">
                Customer Experience
              </p>
            </div>

            <h2 className="font-serif text-[2.8rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.5rem] md:text-[4rem]">
              Customers have more than
              <br />
              <span className="italic text-[#1b1713]/50">
                a checkout page.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#1b1713]/55">
              Every customer can create their own account and manage their
              experience before and after placing an order.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {customerFeatures.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 70}>
              <div className="h-full rounded-[1.5rem] border border-[#1b1713]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(27,23,19,0.07)]">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f4f8]">
                  <Icon
                    size={19}
                    strokeWidth={1.6}
                    className="text-[#243752]"
                  />
                </div>

                <h3 className="font-serif text-2xl font-light">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#1b1713]/50">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* AFFILIATE SYSTEM */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-[#dfe8f5]">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              <div className="p-8 sm:p-10 md:p-14">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-white/70">
                  <Users
                    size={21}
                    strokeWidth={1.6}
                    className="text-[#243752]"
                  />
                </div>

                <p className="text-sm font-medium text-[#243752]/55">
                  Affiliate System
                </p>

                <h2 className="mt-3 font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.03em] text-[#172437] sm:text-[3.5rem]">
                  A complete affiliate
                  <br />
                  <span className="italic text-[#243752]/55">
                    system built in.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#243752]/60">
                  Affiliates receive dedicated codes and dashboards while the
                  business can track commissions and manage the program from
                  the administrative side.
                </p>
              </div>

              <div className="grid gap-px bg-[#243752]/10 sm:grid-cols-2">
                {affiliateFeatures.map(
                  ({ icon: Icon, title, description }) => (
                    <div
                      key={title}
                      className="bg-white/55 p-6 sm:p-7"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.6}
                        className="mb-5 text-[#243752]/60"
                      />

                      <h3 className="font-serif text-xl font-light text-[#172437]">
                        {title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#243752]/55">
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

      {/* ADMIN */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
            <div>
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#f1f4f8]">
                <LayoutDashboard
                  size={20}
                  strokeWidth={1.6}
                  className="text-[#243752]"
                />
              </div>

              <p className="text-sm font-medium text-[#1b1713]/45">
                Business Operations
              </p>

              <h2 className="mt-3 font-serif text-[2.7rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.3rem]">
                The tools behind
                <br />
                <span className="italic text-[#1b1713]/50">
                  the storefront.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-[#1b1713]/55">
                Custom administrative tools keep the core parts of the
                business organized in one place.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {adminFeatures.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-[1.25rem] border border-[#1b1713]/10 bg-white p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1f4f8]">
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-[#243752]"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-light">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#1b1713]/45">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* AUTOMATION */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-[#1b1713]/10 bg-white p-8 sm:p-10 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff2d9]">
                  <Zap
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#8c6420]"
                  />
                </div>

                <p className="text-sm font-medium text-[#1b1713]/45">
                  Automation
                </p>

                <h2 className="mt-3 font-serif text-[2.7rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.3rem]">
                  Built to work
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    behind the scenes.
                  </span>
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {automations.map(({ icon: Icon, title }) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-xl bg-[#f7f7f5] px-5 py-4"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#243752]/60"
                    />

                    <span className="text-sm font-medium text-[#1b1713]/65">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-8 border-y border-[#1b1713]/10 py-10 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Cloud
                size={20}
                strokeWidth={1.5}
                className="text-[#243752]/55"
              />

              <h2 className="font-serif text-2xl font-light">
                Built With
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {technology.map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium text-[#1b1713]/45"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* RESULT */}
      <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] bg-[#edf2f8] p-8 sm:p-10 md:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Sparkles
                    size={21}
                    strokeWidth={1.6}
                    className="text-[#243752]"
                  />
                </div>

                <p className="text-sm font-medium text-[#243752]/45">
                  The Result
                </p>

                <h2 className="mt-3 font-serif text-[3rem] font-light leading-[1] tracking-[-0.035em] text-[#172437] sm:text-[3.8rem] md:text-[4.4rem]">
                  47 products.
                  <br />
                  <span className="italic text-[#243752]/50">
                    One platform.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-base leading-7 text-[#243752]/60">
                  The finished platform connects the storefront, customer
                  accounts, rewards, order tracking, affiliate program,
                  inventory, promotions, automation, and business management
                  into one cohesive digital experience.
                </p>

                <a
                  href="https://apexxbiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2.5 text-sm font-medium text-[#172437] transition hover:opacity-60"
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
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-6 md:pb-28">
        <Reveal>
          <div className="py-14 text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1713] text-white">
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </div>

            <h2 className="font-serif text-[2.8rem] font-light leading-[1.02] tracking-[-0.03em] sm:text-[3.5rem] md:text-[4rem]">
              Have something{" "}
              <span className="italic text-[#1b1713]/50">
                ambitious
              </span>
              <br />
              in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-[#1b1713]/50">
              Let&apos;s build a digital experience around the way your
              business actually works.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#302a24]"
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