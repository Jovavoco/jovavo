import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  ShoppingBag,
  UserRound,
  ChartNoAxesCombined,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const customerFeatures = [
  "Create an account",
  "Earn & redeem points",
  "Track active orders",
  "View previous orders",
  "Save favorite products",
  "Manage account details",
];

const businessFeatures = [
  "47-product catalog",
  "Inventory management",
  "Order management",
  "Customer management",
  "Promotional tools",
  "Revenue visibility",
];

const affiliateFeatures = [
  "Unique affiliate codes",
  "Commission tracking",
  "Order attribution",
  "Affiliate dashboards",
  "Automated affiliate emails",
  "Admin management",
];

const automations = [
  "Order confirmations",
  "Payment confirmations",
  "Shipping notifications",
  "Tracking emails",
  "Inventory updates",
  "Affiliate emails",
  "Promotional campaigns",
  "Subscriber workflows",
];

const technology = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Supabase",
  "Resend",
  "Vercel",
  "Cloudflare",
];

export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/40 transition hover:text-[#1b1713]"
          >
            <ArrowLeft
              size={13}
              strokeWidth={1.4}
              className="transition-transform group-hover:-translate-x-1"
            />
            Selected Work
          </Link>

          <div className="mt-14 border-b border-[#1b1713]/12 pb-12 sm:mt-16 sm:pb-14">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
              <div>
                <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#1b1713]/38 sm:text-[10px]">
                  E-Commerce · Digital Platform · 2026
                </p>

                <h1 className="font-serif text-[4rem] font-light leading-[0.84] tracking-[-0.055em] sm:text-[5.7rem] md:text-[7.2rem] lg:text-[8.5rem]">
                  Apexx
                  <br />
                  <span className="italic text-[#1b1713]/48">
                    Biolabs
                  </span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-2">
                <p className="text-[15px] leading-7 text-[#1b1713]/58">
                  A custom commerce platform designed to bring the storefront,
                  customer experience, affiliate program, automation, and
                  day-to-day business operations into one system.
                </p>

                <a
                  href="https://apexxbiolabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition hover:text-[#1b1713]"
                >
                  Visit Live Site
                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.4}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          WEBSITE — THE MAIN VISUAL
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
              01 / The Experience
            </span>

            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#1b1713]/25 sm:block">
              Apexx Biolabs
            </span>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] bg-[#081526] sm:rounded-[1.75rem]">
            <img
              src="/images/work/apexx-homepagebiolabs.png"
              alt="Apexx Biolabs website"
              className="block h-auto w-full"
            />
          </div>
        </Reveal>

        {/* PROJECT DETAILS */}
        <Reveal>
          <div className="grid border-b border-[#1b1713]/12 md:grid-cols-4">
            {[
              ["Industry", "Biotechnology"],
              ["Catalog", "47 Products"],
              ["Platform", "Custom E-Commerce"],
              ["Scope", "Design + Development"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`py-6 md:px-6 ${
                  index !== 0
                    ? "border-t border-[#1b1713]/10 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <p className="text-[8px] uppercase tracking-[0.22em] text-[#1b1713]/30">
                  {label}
                </p>

                <p className="mt-2 font-serif text-[1.2rem] font-light text-[#1b1713]/75">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
                02 / The Build
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.6rem] md:text-[4.4rem]">
                The storefront is only
                <br />
                <span className="italic text-[#1b1713]/45">
                  the surface.
                </span>
              </h2>

              <div className="mt-9 grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-10">
                <p className="text-[14px] leading-7 text-[#1b1713]/55">
                  Apexx needed more than a polished website. The platform had
                  to support a growing 47-product catalog while giving
                  customers a simple experience from discovery through
                  post-purchase.
                </p>

                <p className="text-[14px] leading-7 text-[#1b1713]/55">
                  Behind that experience, Jovavo built the systems needed to
                  manage orders, inventory, customers, rewards, affiliates,
                  promotions, communication, and daily operations.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          TWO SIDES OF THE PLATFORM
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between border-b border-[#1b1713]/12 pb-5">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
              03 / One Platform
            </p>

            <p className="hidden font-serif text-lg italic text-[#1b1713]/35 sm:block">
              Front end meets back end.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">

          {/* CUSTOMER SIDE */}
          <Reveal>
            <div className="lg:pr-14 xl:pr-20">
              <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#1b1713]/15">
                <UserRound size={17} strokeWidth={1.25} />
              </div>

              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#1b1713]/35">
                Customer Side
              </p>

              <h3 className="font-serif text-[2.5rem] font-light leading-none tracking-[-0.03em] sm:text-[3rem]">
                Everything after
                <br />
                <span className="italic text-[#1b1713]/45">
                  “create account.”
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#1b1713]/52">
                Customers get a dedicated account experience instead of
                disappearing after checkout.
              </p>

              <div className="mt-9 border-t border-[#1b1713]/10">
                {customerFeatures.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[#1b1713]/10 py-4"
                  >
                    <span className="text-[13px] text-[#1b1713]/65">
                      {item}
                    </span>

                    <span className="text-[9px] tracking-[0.16em] text-[#1b1713]/25">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* BUSINESS SIDE */}
          <Reveal delay={100}>
            <div className="border-t border-[#1b1713]/12 pt-14 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0 xl:pl-20">
              <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#1b1713]/15">
                <ChartNoAxesCombined size={17} strokeWidth={1.25} />
              </div>

              <p className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#1b1713]/35">
                Business Side
              </p>

              <h3 className="font-serif text-[2.5rem] font-light leading-none tracking-[-0.03em] sm:text-[3rem]">
                The tools behind
                <br />
                <span className="italic text-[#1b1713]/45">
                  the storefront.
                </span>
              </h3>

              <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#1b1713]/52">
                Custom administrative tools bring the core operations of the
                business into one place.
              </p>

              <div className="mt-9 border-t border-[#1b1713]/10">
                {businessFeatures.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[#1b1713]/10 py-4"
                  >
                    <span className="text-[13px] text-[#1b1713]/65">
                      {item}
                    </span>

                    <span className="text-[9px] tracking-[0.16em] text-[#1b1713]/25">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          AFFILIATE FEATURE
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="overflow-hidden rounded-[1.75rem] bg-[#1b1713] text-[#f5f1e8]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

              {/* LEFT */}
              <div className="p-8 sm:p-10 md:p-14 lg:p-16">
                <div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full border border-white/15">
                  <ShoppingBag size={17} strokeWidth={1.25} />
                </div>

                <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-white/35">
                  04 / Affiliate System
                </p>

                <h2 className="font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.5rem] md:text-[4rem]">
                  A second sales
                  <br />
                  channel,{" "}
                  <span className="italic text-white/45">
                    built in.
                  </span>
                </h2>

                <p className="mt-7 max-w-lg text-[14px] leading-7 text-white/50">
                  The affiliate program was built directly into the platform
                  rather than added as a disconnected third-party experience.
                </p>
              </div>

              {/* RIGHT */}
              <div className="border-t border-white/10 bg-white/[0.035] p-8 sm:p-10 md:p-14 lg:border-l lg:border-t-0 lg:p-16">
                <div className="border-t border-white/10">
                  {affiliateFeatures.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 py-5"
                    >
                      <div className="flex items-center gap-4">
                        <Check
                          size={13}
                          strokeWidth={1.3}
                          className="text-white/35"
                        />

                        <span className="text-[13px] text-white/65">
                          {item}
                        </span>
                      </div>

                      <span className="text-[8px] tracking-[0.2em] text-white/20">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          AUTOMATION
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
            <div>
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-[#1b1713]/15">
                <Zap size={17} strokeWidth={1.25} />
              </div>

              <p className="mb-4 text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
                05 / Automation
              </p>

              <h2 className="font-serif text-[2.7rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.3rem]">
                Designed to keep
                <br />
                <span className="italic text-[#1b1713]/45">
                  moving.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-[14px] leading-7 text-[#1b1713]/50">
                Routine communication and operational updates happen
                automatically as customers move through the buying process.
              </p>
            </div>

            <div className="border-t border-[#1b1713]/12">
              {automations.map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[45px_1fr_auto] items-center border-b border-[#1b1713]/10 py-5"
                >
                  <span className="text-[8px] tracking-[0.18em] text-[#1b1713]/25">
                    0{index + 1}
                  </span>

                  <span className="font-serif text-[1.25rem] font-light text-[#1b1713]/70 sm:text-[1.4rem]">
                    {item}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b1713]/20" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="border-y border-[#1b1713]/12 py-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
                  06 / Built With
                </p>
              </div>

              <div className="flex flex-wrap gap-x-7 gap-y-3">
                {technology.map((item) => (
                  <span
                    key={item}
                    className="font-serif text-[1.15rem] font-light text-[#1b1713]/50 sm:text-[1.3rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          RESULT
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#1b1713]/35">
              07 / The Result
            </p>

            <div>
              <h2 className="max-w-4xl font-serif text-[3rem] font-light leading-[0.96] tracking-[-0.04em] sm:text-[4rem] md:text-[4.8rem]">
                47 products.
                <br />
                One connected{" "}
                <span className="italic text-[#1b1713]/45">
                  ecosystem.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-[15px] leading-7 text-[#1b1713]/55">
                The finished platform connects commerce, customer accounts,
                rewards, order management, affiliates, inventory, promotions,
                and automated communication without making the customer
                experience feel complicated.
              </p>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-[#1b1713]/55 transition hover:text-[#1b1713]"
              >
                Explore Apexx Biolabs
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-10">
        <Reveal>
          <div className="border-t border-[#1b1713]/12 py-16 text-center sm:py-20">
            <p className="mb-5 text-[9px] uppercase tracking-[0.32em] text-[#1b1713]/35">
              Start a Project
            </p>

            <h2 className="mx-auto max-w-4xl font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.7rem] md:text-[4.3rem]">
              Build around the business,
              <br />
              <span className="italic text-[#1b1713]/45">
                not the template.
              </span>
            </h2>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[9px] uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24]"
            >
              Start a Project
              <ArrowUpRight
                size={13}
                strokeWidth={1.4}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}