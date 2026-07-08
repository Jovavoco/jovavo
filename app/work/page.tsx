import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "View recent website projects and digital experiences designed and developed by Jovavo.",
};

import Link from "next/link";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Apexx Biolabs",
    category: "Custom Ecommerce Platform",
    description:
      "Designed and developed a complete ecommerce platform featuring a custom storefront, secure checkout, customer accounts, automated email workflows, inventory synchronization, promo code management, reviews, subscriptions, and a powerful administrative dashboard built specifically around the business.",
    href: "/work/apexx-biolabs",
    status: "Live",

    services: [
      "Website Design",
      "Ecommerce",
      "Admin Dashboard",
      "Customer Portal",
      "Inventory System",
      "Email Automation",
      "Promo Codes",
      "Reviews",
      "Analytics",
    ],
  },

  {
    title: "Willow & Tallow",
    category: "Luxury Brand Experience",
    description:
      "A premium lifestyle brand focused on elegant storytelling, refined visuals, and a luxury ecommerce experience currently being designed and developed.",
    href: "/work/willow-and-tallow",
    status: "In Development",

    services: [
      "Brand Identity",
      "Luxury Design",
      "Ecommerce",
      "Responsive Design",
    ],
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-28">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Portfolio
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
              Websites built
              <br />
              with purpose.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-[#1b1713]/55">
              Every project is thoughtfully designed around the client,
              balancing elegant visuals with functionality, performance,
              automation, and long-term scalability.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 space-y-10">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 150}>
              <Link
                href={project.href}
                className="group block overflow-hidden rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_35px_120px_rgba(0,0,0,0.08)]"
              >
                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-10 md:p-14">
                    <div className="mb-8 flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#1b1713]/35">
                        {project.category}
                      </p>

                      <span className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-5 py-2 text-[11px] uppercase tracking-[0.22em] text-[#1b1713]/45">
                        {project.status}
                      </span>
                    </div>

                    <h2 className="font-serif text-4xl font-light uppercase tracking-[0.08em] md:text-6xl">
                      {project.title}
                    </h2>

                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                      {project.description}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1b1713]/50"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="mt-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713]/50 transition group-hover:translate-x-2 group-hover:text-[#1b1713]">
                      View Case Study
                      <span>→</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-l border-[#1b1713]/10 bg-gradient-to-br from-[#efe9df] via-[#faf7f2] to-[#e8e0d3] p-10">
                    <div className="aspect-[16/10] w-full max-w-md rounded-[1.5rem] border border-black/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] flex items-center justify-center text-sm uppercase tracking-[0.3em] text-black/35">
                      Website Preview
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}