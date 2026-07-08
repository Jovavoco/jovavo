import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Jovavo website creation, Google Ads, Meta advertising, project timelines, pricing, and ongoing support.",
};

const faqs = [
  {
    question: "What does Jovavo do?",
    answer:
      "Jovavo creates custom websites and helps businesses grow through Google Ads, Meta advertising, SEO foundations, analytics, and conversion-focused digital strategy.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Website creation is the foundation, but Jovavo also helps businesses attract traffic and generate leads through Google and Meta advertising.",
  },
{
  question: "How long does a website take?",
  answer:
    "Many small business websites can be completed in about 1–2 weeks depending on how quickly content, feedback, and approvals are provided. Larger websites, ecommerce projects, custom dashboards, and advertising setups may require more time based on scope.",
},
  {
    question: "Do you build ecommerce websites?",
    answer:
      "Yes. Jovavo can build ecommerce experiences, product pages, checkout flows, admin tools, order workflows, and customer-facing pages depending on the project scope.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. Jovavo can refresh your existing website with better design, clearer messaging, stronger performance, mobile optimization, and improved conversion strategy.",
  },
  {
    question: "Do you offer Google Ads management?",
    answer:
      "Yes. Jovavo can help set up and manage Google Ads campaigns focused on search intent, lead generation, local visibility, and measurable business growth.",
  },
  {
    question: "Do you offer Meta advertising?",
    answer:
      "Yes. Jovavo can help with Facebook and Instagram advertising, including lead generation campaigns, awareness campaigns, retargeting, and creative testing.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every Jovavo website is built with SEO foundations including metadata, sitemap setup, Search Console setup, performance considerations, and clean page structure. Ranking depends on competition, content, backlinks, and ongoing SEO effort.",
  },
  {
    question: "Do you provide ongoing website support?",
    answer:
      "Yes. Ongoing support can include updates, maintenance, analytics review, performance improvements, new pages, advertising support, and growth strategy.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the size and complexity of the project. A simple business website, ecommerce build, landing page, and custom dashboard all require different levels of work. Jovavo provides custom quotes after learning about your goals.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-36">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#1b1713]/40">
            FAQ
          </p>

          <h1 className="max-w-5xl font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
            Questions before
            <br />
            we build.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b1713]/60">
            Answers to common questions about website creation, Google Ads, Meta
            advertising, timelines, pricing, and ongoing support.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 60}>
              <details className="group rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-6 shadow-[0_20px_70px_rgba(27,23,19,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl uppercase tracking-[0.06em]">
                  {faq.question}
                  <span className="text-3xl font-light transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#1b1713]/60">
                  {faq.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-10 shadow-[0_30px_100px_rgba(27,23,19,0.06)] md:p-16">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
              Still Have Questions?
            </p>

            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-6xl">
                Let’s talk through
                <br />
                your project.
              </h2>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#1b1713] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:-translate-y-1 hover:bg-[#1b1713]/90"
              >
                Contact Jovavo
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}