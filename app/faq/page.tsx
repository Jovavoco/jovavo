import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CircleHelp,
  Clock3,
  DollarSign,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Jovavo website creation, Google Ads, Meta advertising, project timelines, pricing, and ongoing support.",
};

const faqs = [
  {
    icon: Sparkles,
    question: "What does Jovavo do?",
    answer:
      "Jovavo designs and develops custom websites and e-commerce experiences, then helps businesses grow through Google Ads, Meta advertising, SEO foundations, analytics, and digital strategy.",
  },
  {
    icon: Smartphone,
    question: "Do you only build websites?",
    answer:
      "No. Websites are a core part of what we build, but Jovavo can also help with e-commerce, custom business tools, automation, Google Ads, Meta advertising, analytics, and digital growth.",
  },
  {
    icon: Clock3,
    question: "How long does a website take?",
    answer:
      "Many small business websites can be completed in about 1–2 weeks depending on how quickly content, feedback, and approvals are provided. Larger websites, e-commerce projects, custom dashboards, and advertising setups may require more time based on scope.",
  },
  {
    icon: ShoppingBag,
    question: "Do you build e-commerce websites?",
    answer:
      "Yes. Jovavo can build custom e-commerce experiences including product pages, customer accounts, checkout experiences, admin tools, order workflows, and other features based on what your business needs.",
  },
  {
    icon: Sparkles,
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can redesign an existing website to improve its appearance, messaging, mobile experience, performance, navigation, and overall customer journey.",
  },
  {
    icon: Search,
    question: "Do you offer Google Ads management?",
    answer:
      "Yes. Jovavo can help set up and manage Google Ads campaigns focused on search intent, lead generation, local visibility, and measurable business goals.",
  },
  {
    icon: ArrowUpRight,
    question: "Do you offer Meta advertising?",
    answer:
      "Yes. Jovavo can help with Facebook and Instagram advertising, including lead generation, awareness, retargeting, and creative testing.",
  },
  {
    icon: Search,
    question: "Will my website show up on Google?",
    answer:
      "Every Jovavo website is built with SEO foundations such as metadata, sitemap setup, clean page structure, performance considerations, and Search Console setup. Search rankings also depend on factors such as competition, content, backlinks, and ongoing SEO work.",
  },
  {
    icon: CircleHelp,
    question: "Do you provide ongoing website support?",
    answer:
      "Yes. Ongoing support can include website updates, maintenance, analytics review, performance improvements, new pages, advertising support, and continued digital growth.",
  },
  {
    icon: DollarSign,
    question: "How much does a website cost?",
    answer:
      "Pricing depends on what your business needs. A simple business website, e-commerce store, landing page, customer portal, or custom dashboard can require very different levels of work. We provide a custom quote after learning about your project.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32 md:pt-36">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <CircleHelp size={20} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#1b1713]/50">
              Frequently Asked Questions
            </p>

            <h1 className="mt-3 font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.8rem] md:text-[4.5rem]">
              A few things you may
              <br className="hidden sm:block" />
              <span className="italic text-[#1b1713]/50">
                {" "}
                want to know.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Simple answers about websites, e-commerce, advertising, pricing,
              timelines, and working with Jovavo.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-6 md:pb-24">
        <div className="overflow-hidden rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] shadow-[0_18px_55px_rgba(27,23,19,0.035)] sm:rounded-[2rem]">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;

            return (
              <Reveal key={faq.question} delay={(index % 5) * 40}>
                <details
                  className={`group ${
                    index !== faqs.length - 1
                      ? "border-b border-[#1b1713]/10"
                      : ""
                  }`}
                >
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 transition-colors duration-200 hover:bg-[#f1ece3]/45 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
                    {/* ICON */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65 transition-all duration-300 group-open:bg-[#1b1713] group-open:text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    {/* QUESTION */}
                    <h2 className="min-w-0 flex-1 font-serif text-[1.2rem] font-light leading-snug tracking-[-0.015em] sm:text-[1.4rem]">
                      {faq.question}
                    </h2>

                    {/* PLUS */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1b1713]/10 bg-[#f8f5ef]">
                      <span className="relative block h-3.5 w-3.5">
                        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#1b1713]/60" />
                        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#1b1713]/60 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </div>
                  </summary>

                  {/* ANSWER */}
                  <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                    <div className="ml-0 border-l-2 border-[#1b1713]/10 pl-4 sm:ml-14 sm:pl-5">
                      <p className="max-w-2xl text-[14px] leading-7 text-[#1b1713]/55 sm:text-[15px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </details>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          QUICK NOTE
      ========================================================= */}
      <section className="mx-auto max-w-4xl px-5 pb-10 sm:px-6">
        <Reveal>
          <div className="grid gap-5 rounded-[1.6rem] bg-[#f1ece3] p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-6 sm:p-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fffdf9] text-[#1b1713]">
              <Sparkles size={19} strokeWidth={1.6} />
            </div>

            <div>
              <h2 className="font-serif text-[1.5rem] font-light leading-tight sm:text-[1.7rem]">
                Every project is a little different.
              </h2>

              <p className="mt-2 text-[14px] leading-6 text-[#1b1713]/50">
                If you&apos;re not sure exactly what you need yet, that&apos;s
                okay. Tell us about your business and we can help determine the
                right scope.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="mx-auto max-w-5xl px-5 pb-24 pt-6 sm:px-6 sm:pt-8 md:pb-28">
        <Reveal>
          <div className="rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9] px-5 py-10 text-center shadow-[0_15px_45px_rgba(27,23,19,0.03)] sm:rounded-[2rem] sm:px-10 sm:py-14">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]">
              <ArrowUpRight size={19} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#1b1713]/45">
              Still Have Questions?
            </p>

            <h2 className="mt-2 font-serif text-[2.3rem] font-light leading-[1.03] tracking-[-0.03em] sm:text-[3.2rem]">
              Let&apos;s talk about{" "}
              <span className="italic text-[#1b1713]/50">
                your project.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-[#1b1713]/50">
              Tell us what you&apos;re looking to build and we&apos;ll help
              you figure out the next step.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}