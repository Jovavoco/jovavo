import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      description:
        "Clean, refined layouts that make your business feel professional, trustworthy, and easy to understand.",
    },
    {
      title: "Custom Development",
      description:
        "Fast, responsive websites built with structure, performance, and long-term flexibility in mind.",
    },
    {
      title: "E-Commerce",
      description:
        "Modern storefronts with product pages, order flows, and a smooth customer experience.",
    },
    {
      title: "Brand Direction",
      description:
        "Typography, colors, spacing, and visual direction that help your website feel cohesive.",
    },
    {
      title: "SEO & Performance",
      description:
        "Technical setup focused on speed, search visibility, clean structure, and usability.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] bg-white border border-black/10 px-8 py-16 md:px-14 md:py-20 shadow-[0_30px_120px_rgba(0,0,0,0.06)]">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/40">
            Services
          </p>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Websites that look sharp and work beautifully.
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-black/55 lg:justify-self-end">
              Jovavo creates polished digital experiences for businesses that
              want to look established, modern, and trustworthy online.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)] ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <ArrowUpRight size={18} className="text-black/30" />
              </div>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {service.title}
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[#111111] px-8 py-12 text-white md:px-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
                Project Investment
              </p>

              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Custom pricing based on your goals, scope, and timeline.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}