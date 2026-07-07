import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      description:
        "Clean digital experiences that make your business feel sharp, modern, and memorable.",
    },
    {
      title: "Custom Development",
      description:
        "Fast, responsive websites built with structure, clarity, and long-term flexibility.",
    },
    {
      title: "E-Commerce",
      description:
        "Premium storefronts designed around product presentation and smooth customer flow.",
    },
    {
      title: "Brand Direction",
      description:
        "Typography, spacing, colors, and visual systems that create a cohesive online presence.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1ea] px-6 pt-40 pb-28 text-[#111111]">
      <section className="mx-auto max-w-7xl">
        <div className="relative">
          <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          <div className="absolute -left-32 top-72 h-72 w-72 rounded-full bg-[#c9b79c]/40 blur-3xl" />

          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-black/40">
            Services
          </p>

          <h1 className="max-w-6xl text-6xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Digital work that makes brands feel unforgettable.
          </h1>

          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-black/55">
            Jovavo designs and develops polished websites for businesses that
            want to look elevated, professional, and built for growth.
          </p>
        </div>

        <div className="mt-28 space-y-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative rounded-[2.5rem] border border-black/10 bg-white/70 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.06)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white md:p-12 ${
                index % 2 === 0
                  ? "md:mr-28"
                  : "md:ml-28"
              }`}
            >
              <div className="flex items-start justify-between gap-8">
                <div>
                  <h2 className="text-5xl font-semibold tracking-[-0.06em] md:text-7xl">
                    {service.title}
                  </h2>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
                    {service.description}
                  </p>
                </div>

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white transition group-hover:rotate-45 md:flex">
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 rounded-[3rem] bg-[#111111] p-8 text-white md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.45em] text-white/35">
                Start
              </p>

              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-7xl">
                Have a project in mind?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/55">
                Every project begins with a conversation about your goals, scope,
                timeline, and the experience you want to create.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:-translate-y-1 hover:bg-white/90"
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