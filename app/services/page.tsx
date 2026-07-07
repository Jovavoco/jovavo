import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      description:
        "Clean, modern interfaces designed to make your business feel polished, credible, and memorable.",
    },
    {
      title: "Custom Development",
      description:
        "Responsive websites built with speed, structure, and long-term usability in mind.",
    },
    {
      title: "E-Commerce",
      description:
        "Premium storefronts with smooth shopping experiences, product organization, and backend tools.",
    },
    {
      title: "Brand Direction",
      description:
        "Typography, color systems, layout direction, and digital styling that bring your brand together.",
    },
    {
      title: "SEO & Performance",
      description:
        "Fast, search-friendly websites built for visibility, trust, and a stronger user experience.",
    },
    {
      title: "Maintenance",
      description:
        "Ongoing updates, improvements, and support so your website continues to grow with your business.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
              Services
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
              Digital work that feels refined, intentional, and built to last.
            </h1>
          </div>

          <p className="max-w-2xl text-xl leading-relaxed text-black/55 lg:justify-self-end">
            Jovavo creates thoughtful websites and digital experiences for
            businesses that want to look professional, move clearly, and grow
            with confidence.
          </p>
        </div>

        <div className="mt-24 divide-y divide-black/10 border-y border-black/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group grid gap-6 py-10 transition md:grid-cols-[120px_1fr_220px] md:items-center"
            >
              <p className="text-sm text-black/35">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-black/55">
                  {service.description}
                </p>
              </div>

              <div className="hidden justify-self-end rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-black/50 transition group-hover:border-black/20 group-hover:text-black md:inline-flex">
                Offered
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-[2.25rem] bg-[#111111] p-8 text-white md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40">
                Project Investment
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Custom scope. Clear proposal. No one-size-fits-all pricing.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
                Each project is quoted based on the size of the website,
                features needed, design complexity, and timeline. After learning
                about your goals, you’ll receive a tailored proposal.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
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