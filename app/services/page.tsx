import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Custom websites designed to look polished, load quickly, and create a strong first impression for your business.",
      details: ["Responsive design", "Custom layouts", "Modern user experience"],
    },
    {
      title: "E-Commerce Websites",
      description:
        "Online stores built with clear product organization, smooth shopping flows, and a professional customer experience.",
      details: ["Product pages", "Order flow", "Admin-ready structure"],
    },
    {
      title: "Brand Direction",
      description:
        "Visual direction that helps your website feel cohesive through typography, spacing, colors, and layout style.",
      details: ["Typography", "Color direction", "Digital styling"],
    },
    {
      title: "SEO & Performance",
      description:
        "Technical improvements that help your website load faster, feel smoother, and be easier for search engines to understand.",
      details: ["Page speed", "Metadata", "Search structure"],
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing updates, edits, improvements, and support so your website can continue growing with your business.",
      details: ["Content updates", "Feature edits", "Ongoing support"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
            Services
          </p>

          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Professional websites built with clarity, structure, and purpose.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
            Jovavo helps businesses create refined digital experiences that are
            easy to use, easy to manage, and built to support long-term growth.
          </p>
        </div>

        <div className="mt-20 grid gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)] md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[90px_1fr_0.8fr] md:items-start">
                <p className="text-sm text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h2 className="text-3xl font-semibold tracking-tight">
                    {service.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-full border border-black/10 bg-[#FAFAF8] px-4 py-2 text-sm text-black/55"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-[#111111] p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
                Project Investment
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                Every project is quoted based on scope.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
                After learning about your goals, you’ll receive a tailored
                proposal with the recommended approach, timeline, and investment.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
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