import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  MonitorSmartphone,
  Megaphone,
  Search,
  BarChart3,
  Gauge,
  Sparkles,
  ShieldCheck,
  MousePointerClick,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Websites & Digital Advertising",
  description:
    "Jovavo creates custom websites and manages Google and Meta advertising for businesses looking to grow online, generate leads, and convert more customers.",
};

const services = [
  "Custom Websites",
  "Landing Pages",
  "Ecommerce",
  "Google Ads",
  "Meta Ads",
  "SEO & Growth",
];

const growthServices = [
  {
    title: "Website Creation",
    description:
      "Custom websites, landing pages, ecommerce experiences, and redesigns built to look premium, load fast, and convert visitors into customers.",
  },
  {
    title: "Google Advertising",
    description:
      "Search campaigns designed to help your business appear when customers are actively looking for your products or services.",
  },
  {
    title: "Meta Advertising",
    description:
      "Facebook and Instagram campaigns built for awareness, retargeting, lead generation, and customer growth.",
  },
];

const processSteps = [
  {
    title: "Discover",
    text: "We learn about your business, audience, goals, current website, and what growth means for you.",
  },
  {
    title: "Strategy",
    text: "We plan the structure, content, user experience, and direction before anything is designed.",
  },
  {
    title: "Design",
    text: "We create a polished visual system that feels premium, intentional, and aligned with your brand.",
  },
  {
    title: "Develop",
    text: "We build a fast, responsive website with clean code, strong performance, and scalable foundations.",
  },
  {
    title: "Launch",
    text: "We test, optimize, connect analytics, and prepare your website for a confident launch.",
  },
  {
    title: "Grow",
    text: "We support your next phase with SEO foundations, analytics, updates, and digital advertising.",
  },
];

const benefits = [
  "Custom designed",
  "Mobile optimized",
  "Fast loading",
  "SEO ready",
  "Conversion focused",
  "Built to scale",
];
const featurePanels = [
  {
    eyebrow: "Website Design",
    icon: MonitorSmartphone,
    title: "Custom websites built to make your business look established.",
    description:
      "Jovavo creates polished, responsive websites with clean layouts, strong messaging, fast performance, and a premium visual direction tailored to your brand.",
    link: "/services",
    linkText: "Explore Websites",
    features: [
      {
        icon: Sparkles,
        label: "Custom Design",
      },
      {
        icon: Gauge,
        label: "Fast Performance",
      },
      {
        icon: ShieldCheck,
        label: "SEO Ready",
      },
    ],
  },
  {
    eyebrow: "Digital Advertising",
    icon: Megaphone,
    title: "Campaigns built to turn attention into real customer action.",
    description:
      "From Google Ads to Meta campaigns, Jovavo helps businesses drive qualified traffic, generate leads, retarget visitors, and understand what is working.",
    link: "/services",
    linkText: "Explore Growth",
    features: [
      {
        icon: Search,
        label: "Google Ads",
      },
      {
        icon: MousePointerClick,
        label: "Meta Ads",
      },
      {
        icon: BarChart3,
        label: "Analytics",
      },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/images/jovavo-hero-bg.png')",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 92%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#1b1713]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#f5f1e8]/10" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center pt-28 text-center text-white">
          <Reveal>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/75">
              Websites & Digital Advertising
            </p>

            <h1 className="mx-auto max-w-6xl font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.1em] md:text-7xl">
              Premium websites
              <br />
              built to grow
              <br />
              your business.
            </h1>

            <div className="mx-auto mt-8 h-px w-24 bg-white/50" />

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed tracking-[0.08em] text-white/80 md:text-lg">
              Jovavo designs and develops custom websites, then supports growth
              through Google Ads, Meta advertising, SEO foundations, and
              conversion-focused digital strategy.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white transition hover:bg-white hover:text-[#1b1713]"
              >
                View Services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                Jovavo
              </p>

              <h2 className="font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
                Designed
                <br />
                to convert.
                <br />
                Built to grow.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
              We help businesses turn their online presence into a stronger
              growth system through custom website design, modern development,
              advertising strategy, and clear digital foundations.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 70}>
              <div className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-7 py-5 text-center text-xs uppercase tracking-[0.24em] text-[#1b1713]/60 shadow-[0_15px_50px_rgba(27,23,19,0.04)] transition hover:-translate-y-1 hover:bg-white">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#ece5da] px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-end">
              <div>
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/35">
                  What We Do
                </p>

                <h2 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
                  Build the site.
                  <br />
                  Drive the traffic.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                A beautiful website is only the beginning. Jovavo helps you
                create the digital foundation, then supports growth through
                strategy, analytics, and advertising.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {growthServices.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group min-h-[380px] rounded-[2rem] border border-[#1b1713]/10 bg-[#f8f4ec] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_90px_rgba(27,23,19,0.07)]">
                  <div className="mb-14 flex items-center justify-between">
                    <p className="font-serif text-5xl text-[#1b1713]/20">
                      0{index + 1}
                    </p>

                    <ArrowUpRight
                      size={20}
                      className="text-[#1b1713]/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#1b1713]"
                    />
                  </div>

                  <h3 className="font-serif text-3xl uppercase tracking-[0.08em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-base leading-relaxed text-[#1b1713]/55">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

{/* WHY JOVAVO */}
<section className="mx-auto max-w-7xl px-6 py-32">
  <Reveal>
    <div className="border-y border-[#1b1713]/10 py-24">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.48em] text-[#1b1713]/35">
            The Jovavo Difference
          </p>

          <h2 className="max-w-xl font-serif text-5xl font-light leading-[0.95] tracking-[-0.055em] text-[#1b1713] md:text-7xl">
            A website should feel as considered as the brand behind it.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-xl font-light leading-relaxed tracking-[-0.02em] text-[#1b1713]/65">
            Jovavo creates polished digital experiences for brands that want to
            look established, trustworthy, and intentional from the very first
            impression.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="border-t border-[#1b1713]/12 pt-7"
              >
                <p className="mb-5 text-xs uppercase tracking-[0.34em] text-[#1b1713]/35">
                  Refined Detail
                </p>

                <h3 className="font-serif text-3xl font-light leading-tight tracking-[-0.04em] text-[#1b1713]">
                  {benefit}
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[#1b1713]/52">
                  Every section is intentionally placed, visually balanced, and
                  designed to guide visitors naturally toward action.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Reveal>
</section>

{/* FEATURE PANELS */}
<section className="bg-[#ece5da] px-6 py-32">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_40px_120px_rgba(27,23,19,0.08)]">
        {/* IMAGE */}
        <div className="relative h-[420px] overflow-hidden md:h-[520px]">
          <img
            src="/images/jovavo-digital-growth.png"
            alt="Abstract digital analytics interface"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf8f2]/5 via-transparent to-[#fbf8f2]" />

          <div className="absolute bottom-0 left-0 z-10 max-w-4xl p-8 md:p-14">
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/45">
              What We Do
            </p>

            <h2 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] text-[#1b1713] md:text-7xl">
              Build the site.
              <br />
              Drive the growth.
            </h2>
          </div>
        </div>

        {/* INTRO */}
        <div className="grid gap-10 border-t border-[#1b1713]/10 p-8 md:p-14 lg:grid-cols-[0.85fr_1fr] lg:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
            Jovavo combines premium website design with digital advertising
            strategy so your business does not just look better online — it has
            a stronger foundation for growth.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {["Websites", "Google Ads", "Meta Ads"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-[#1b1713]/10 bg-white px-5 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-[#1b1713]/55"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-px bg-[#1b1713]/10 lg:grid-cols-2">
          {featurePanels.map((panel, index) => {
            const MainIcon = panel.icon;

            return (
              <Reveal key={panel.title} delay={index * 120}>
                <div className="group relative flex min-h-[520px] flex-col overflow-hidden bg-[#fbf8f2] p-9 transition-all duration-500 hover:bg-white md:p-12">
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#1b1713]/5 blur-3xl transition duration-500 group-hover:bg-[#1b1713]/10" />

                  <div className="relative z-10">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b1713] text-white shadow-[0_18px_45px_rgba(27,23,19,0.18)]">
                      <MainIcon size={28} />
                    </div>

                    <div className="mt-12 h-px w-20 bg-[#1b1713]/12" />
                  </div>

                  <div className="relative z-10 mt-14">
                    <p className="mb-6 text-xs uppercase tracking-[0.36em] text-[#1b1713]/40">
                      {panel.eyebrow}
                    </p>

                    <h3 className="max-w-xl font-serif text-4xl font-light leading-[1.08] tracking-[-0.04em] text-[#1b1713] md:text-5xl">
                      {panel.title}
                    </h3>

                    <p className="mt-7 max-w-xl text-[17px] leading-8 text-[#1b1713]/60">
                      {panel.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-12 grid gap-3">
                    {panel.features.map((feature) => {
                      const FeatureIcon = feature.icon;

                      return (
                        <div
                          key={feature.label}
                          className="flex items-center justify-between rounded-2xl border border-[#1b1713]/10 bg-white/60 px-5 py-4 transition group-hover:bg-[#f8f4ec]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3eee6] text-[#1b1713]/70">
                              <FeatureIcon size={18} strokeWidth={1.8} />
                            </div>

                            <span className="text-sm uppercase tracking-[0.2em] text-[#1b1713]/60">
                              {feature.label}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={16}
                            className="text-[#1b1713]/25"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="relative z-10 mt-auto pt-12">
                    <Link
                      href={panel.link}
                      className="inline-flex items-center gap-3 rounded-full bg-[#1b1713] px-7 py-3 text-[11px] uppercase tracking-[0.26em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90"
                    >
                      {panel.linkText}
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Reveal>
  </div>
</section>

      {/* NYC SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_30px_100px_rgba(27,23,19,0.06)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex min-h-[520px] flex-col justify-between p-10 md:p-14">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                    New York Studio
                  </p>

                  <h2 className="font-serif text-4xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-6xl">
                    Built in
                    <br />
                    New York.
                    <br />
                    Made for
                    <br />
                    anywhere.
                  </h2>

                  <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
                    Rooted in a city built on ambition, Jovavo creates refined
                    websites and digital growth systems for businesses ready to
                    look better, perform better, and reach more customers.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-12 inline-flex w-fit items-center gap-3 rounded-full border border-[#1b1713]/15 px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition hover:bg-[#1b1713] hover:text-white"
                >
                  About Jovavo
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <img
                src="/images/services/nyc-skyline.jpg"
                alt="New York City skyline"
                className="h-[420px] w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#1b1713] p-10 text-white shadow-[0_40px_120px_rgba(27,23,19,0.18)] md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/45">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                  Your website
                  <br />
                  should do more
                  <br />
                  than look good.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Whether you're launching a new business, redesigning your
                  current site, or looking to bring in more leads through Google
                  and Meta advertising, Jovavo helps you build a stronger
                  digital foundation.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8]"
              >
                Start Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}