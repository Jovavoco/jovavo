import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowUpRight,
  MonitorSmartphone,
  ShoppingBag,
  Megaphone,
  Smartphone,
  Sparkles,
  MousePointerClick,
  MessagesSquare,
  Search,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design & Digital Growth | Jovavo",
  description:
    "Jovavo creates custom websites, e-commerce experiences, and digital advertising strategies for businesses ready to grow online.",
};

const services = [
  {
    number: "01",
    icon: MonitorSmartphone,
    title: "Web Design & Development",
    description:
      "Custom, responsive websites designed around your business, your audience, and the way you want your brand to be experienced.",
    tags: ["Custom Design", "Responsive", "SEO Foundations"],
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "E-Commerce",
    description:
      "Online stores built around the complete buying experience — from product discovery to checkout and everything in between.",
    tags: ["Online Stores", "Product UX", "Conversions"],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Digital Growth",
    description:
      "Google Ads, Meta Ads, analytics, and digital strategy designed to bring the right people to your business.",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Custom Design",
    description:
      "Every project is designed around the business. No recycled templates or cookie-cutter layouts.",
  },
  {
    icon: Smartphone,
    title: "Built for Mobile",
    description:
      "Every experience is designed to feel polished and intentional across desktop, tablet, and mobile.",
  },
  {
    icon: MousePointerClick,
    title: "Built to Convert",
    description:
      "Clear messaging, thoughtful structure, and intentional calls to action help turn visitors into customers.",
  },
  {
    icon: MessagesSquare,
    title: "Direct Collaboration",
    description:
      "Work directly with Jovavo throughout the project with clear communication from concept through launch.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn about your business, audience, goals, competitors, and the visual direction you want to build.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the visual experience, content hierarchy, and user journey around your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The approved direction becomes a responsive, high-performance website built for real-world use.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test the experience across devices, connect the essentials, and prepare your new website for launch.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f1e8] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="relative min-h-[100svh] overflow-hidden bg-cover bg-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('/images/jovavo-hero-bg.png')",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 94%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 94%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[#1b1713]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-[#f5f1e8]/10" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center pb-14 pt-44 text-center text-white sm:pt-40 md:min-h-screen md:pb-0 md:pt-32">
          <Reveal>
            <p className="mb-5 px-2 text-[9px] uppercase leading-relaxed tracking-[0.2em] text-white/75 sm:text-[10px] sm:tracking-[0.28em] md:mb-8 md:text-xs md:tracking-[0.45em]">
              Web Design · E-Commerce · Digital Growth
            </p>

            <h1 className="mx-auto max-w-6xl font-serif text-[2.45rem] font-light uppercase leading-[1.02] tracking-[0.045em] sm:text-5xl sm:tracking-[0.07em] md:text-7xl md:tracking-[0.1em] lg:text-[5.5rem]">
              Premium websites
              <br />
              built to grow
              <br />
              your business.
            </h1>

            <div className="mx-auto mt-6 h-px w-16 bg-white/50 sm:mt-8 sm:w-24" />

            <p className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-6 text-white/80 sm:text-base sm:leading-7 md:mt-8 md:px-0 md:text-lg md:leading-relaxed">
              Custom websites and e-commerce experiences for businesses ready
              to look established, build trust, and grow online.
            </p>

            <div className="mx-auto mt-8 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition duration-300 hover:-translate-y-1 hover:bg-[#f5f1e8] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
              >
                Start a Project
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="#work"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/50 px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-[#1b1713] sm:w-auto sm:px-8 sm:text-[11px] sm:tracking-[0.3em]"
              >
                View Our Work
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
      ========================================================= */}
      <section
        id="work"
        className="scroll-mt-24 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 md:pb-36 md:pt-32"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 grid gap-8 border-b border-[#1b1713]/15 pb-10 md:mb-16 md:grid-cols-[1fr_0.8fr] md:items-end md:pb-14">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.45em]">
                  Selected Work
                </p>

                <h2 className="font-serif text-[2.7rem] font-light uppercase leading-[0.98] tracking-[0.04em] sm:text-5xl md:text-7xl md:tracking-[0.07em]">
                  Designed for
                  <br />
                  real businesses.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-[#1b1713]/55 md:justify-self-end md:text-lg md:leading-8">
                From technical e-commerce platforms to refined consumer brands,
                every Jovavo project is shaped around the business behind it.
              </p>
            </div>
          </Reveal>

          {/* APEXX */}
          <Reveal>
            <article className="group">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#e9e2d7] sm:rounded-[2.5rem]">
                <div className="aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                  <img
                    src="/images/work/apexx-biolabs.png"
                    alt="Apexx Biolabs e-commerce website displayed on desktop and mobile"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              <div className="grid gap-7 border-b border-[#1b1713]/15 py-8 sm:py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-12">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.38em]">
                    E-Commerce · Web Design · Development
                  </p>

                  <h3 className="font-serif text-3xl font-light uppercase tracking-[0.05em] sm:text-4xl md:text-5xl">
                    Apexx Biolabs
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl text-base leading-7 text-[#1b1713]/60 sm:text-lg sm:leading-8">
                    A custom e-commerce experience built around a growing
                    research brand, combining a streamlined storefront,
                    customer accounts, product discovery, promotional systems,
                    and an integrated purchasing experience.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-3 rounded-full bg-[#1b1713] px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 sm:text-[11px]"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </Link>

                    <a
                      href="https://apexxbiolabs.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-[#1b1713]/15 px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] transition hover:bg-[#1b1713] hover:text-white sm:text-[11px]"
                    >
                      Visit Website
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* WILLOW & TALLOW */}
          <Reveal>
            <article className="group mt-16 sm:mt-20 md:mt-28">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-[#e8dfd0] sm:rounded-[2.5rem]">
                <div className="aspect-[16/10] overflow-hidden sm:aspect-[16/9]">
                  <img
                    src="/images/work/willow-tallow.png"
                    alt="Willow and Tallow website displayed on desktop and mobile"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>
              </div>

              <div className="grid gap-7 border-b border-[#1b1713]/15 py-8 sm:py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-12">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.38em]">
                    E-Commerce · Web Design · Brand Experience
                  </p>

                  <h3 className="font-serif text-3xl font-light uppercase tracking-[0.05em] sm:text-4xl md:text-5xl">
                    Willow &amp; Tallow
                  </h3>
                </div>

                <div>
                  <p className="max-w-2xl text-base leading-7 text-[#1b1713]/60 sm:text-lg sm:leading-8">
                    A warm, editorial storefront designed around a natural
                    skincare brand, balancing storytelling, product discovery,
                    and a refined shopping experience across desktop and mobile.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-3 rounded-full bg-[#1b1713] px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 sm:text-[11px]"
                    >
                      View Project
                      <ArrowUpRight size={14} />
                    </Link>

                    <a
                      href="https://willowandtallow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-[#1b1713]/15 px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] transition hover:bg-[#1b1713] hover:text-white sm:text-[11px]"
                    >
                      Visit Website
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-[#1b1713] px-4 py-20 text-white sm:px-6 sm:py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[1fr_0.8fr] md:items-end md:pb-14">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-white/40 sm:text-xs sm:tracking-[0.45em]">
                  What We Do
                </p>

                <h2 className="font-serif text-[2.6rem] font-light uppercase leading-[1] tracking-[0.04em] sm:text-5xl md:text-7xl md:tracking-[0.07em]">
                  Design first.
                  <br />
                  Growth always.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-white/55 md:justify-self-end md:text-lg md:leading-8">
                Your digital presence should look polished, feel intentional,
                and make it easier for customers to choose your business.
              </p>
            </div>
          </Reveal>

          <div className="divide-y divide-white/15">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 100}>
                  <div className="group grid gap-6 py-10 sm:py-12 md:grid-cols-[100px_0.85fr_1fr] md:items-start md:gap-12 md:py-16">
                    <div className="flex items-center gap-4">
                      <span className="text-xs tracking-[0.25em] text-white/30">
                        {service.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/65 md:hidden">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div>
                      <div className="mb-6 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/60 md:flex">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <h3 className="max-w-md font-serif text-3xl font-light leading-tight tracking-[-0.02em] sm:text-4xl">
                        {service.title}
                      </h3>
                    </div>

                    <div>
                      <p className="max-w-xl text-base leading-7 text-white/55 md:text-[17px] md:leading-8">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/45 sm:text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8] sm:text-[11px]"
              >
                Explore Services
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          WHY JOVAVO
      ========================================================= */}
      <section className="px-4 py-20 sm:px-6 sm:py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.45em]">
                Why Jovavo
              </p>

              <h2 className="font-serif text-[2.5rem] font-light uppercase leading-[1.02] tracking-[0.04em] sm:text-5xl md:text-7xl md:tracking-[0.07em]">
                No templates.
                <br />
                No cookie-cutter websites.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#1b1713]/55 sm:text-lg sm:leading-8">
                Your business has its own identity. Your website should too.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid border-y border-[#1b1713]/15 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal key={reason.title} delay={index * 80}>
                  <div
                    className={`h-full py-8 sm:p-8 lg:min-h-[330px] lg:p-9 ${
                      index > 0
                        ? "border-t border-[#1b1713]/15 sm:border-t-0 sm:border-l"
                        : ""
                    } ${
                      index === 2
                        ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0"
                        : ""
                    } ${
                      index === 3
                        ? "sm:border-t lg:border-t-0"
                        : ""
                    }`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1b1713]/15">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-12 font-serif text-2xl font-light sm:text-3xl">
                      {reason.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#1b1713]/55 sm:text-base">
                      {reason.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#e9e2d7] p-6 sm:p-10 md:rounded-[3rem] md:p-14 lg:p-16">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#1b1713]/40 sm:text-xs sm:tracking-[0.45em]">
                  Our Process
                </p>

                <h2 className="font-serif text-[2.5rem] font-light uppercase leading-[1] tracking-[0.04em] sm:text-5xl md:text-6xl md:tracking-[0.07em]">
                  From idea
                  <br />
                  to launch.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-7 text-[#1b1713]/55 md:justify-self-end md:text-lg md:leading-8">
                A clear process keeps the project focused and makes building
                your new website feel simple.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] bg-[#1b1713]/10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="h-full bg-[#f5f1e8] p-6 sm:min-h-[320px] sm:p-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#1b1713]/35">
                    {step.number}
                  </p>

                  <div className="mt-16 sm:mt-24">
                    <h3 className="font-serif text-3xl font-light">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#1b1713]/55">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          NYC
      ========================================================= */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28 md:pb-36">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] md:rounded-[2.5rem]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between p-6 sm:p-8 md:min-h-[520px] md:p-14">
                <div>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40 sm:mb-6 sm:text-xs sm:tracking-[0.42em]">
                    New York Studio
                  </p>

                  <h2 className="font-serif text-[2.2rem] font-light uppercase leading-[1.03] tracking-[0.045em] sm:text-4xl sm:tracking-[0.08em] md:text-6xl">
                    Built in
                    <br />
                    New York.
                    <br />
                    Made for
                    <br />
                    anywhere.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-7 text-[#1b1713]/55 sm:mt-10 sm:text-lg sm:leading-relaxed">
                    Rooted in New York, Jovavo creates refined digital
                    experiences for businesses ready to build a stronger,
                    more professional presence online.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#1b1713]/15 px-6 py-3.5 text-[10px] uppercase tracking-[0.2em] transition hover:bg-[#1b1713] hover:text-white sm:mt-12 sm:w-fit sm:px-7 sm:text-[11px] sm:tracking-[0.28em]"
                >
                  About Jovavo
                  <ArrowUpRight size={15} />
                </Link>
              </div>

              <img
                src="/images/services/nyc-skyline.jpg"
                alt="New York City skyline"
                className="h-[300px] w-full object-cover sm:h-[380px] lg:h-full"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 md:pb-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#1b1713] p-6 text-white sm:p-10 md:rounded-[3rem] md:p-16 lg:p-20">
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-white/[0.04] blur-3xl" />

            <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.4em]">
                  Start a Project
                </p>

                <h2 className="max-w-4xl font-serif text-[2.4rem] font-light uppercase leading-[1.04] tracking-[0.045em] sm:text-5xl sm:tracking-[0.07em] md:text-7xl">
                  Your website
                  <br />
                  should do more
                  <br />
                  than look good.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                  Build a digital presence that looks established, earns trust,
                  and gives your business room to grow.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-[#f5f1e8] sm:w-fit sm:text-[11px] sm:tracking-[0.28em]"
              >
                Start Your Project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}