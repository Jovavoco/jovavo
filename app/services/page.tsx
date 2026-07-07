import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const capabilities = [
    {
      title: "Design",
      headline: "Beautiful digital experiences built with intention.",
      description:
        "For businesses that want to look polished, trustworthy, and memorable online.",
      services: [
        "Custom Website Design",
        "Website Redesigns",
        "Landing Pages",
        "Brand Direction",
        "User Experience",
      ],
    },
    {
      title: "Development",
      headline: "Custom functionality built around how your business works.",
      description:
        "From ecommerce platforms to internal dashboards, Jovavo builds systems that go beyond basic websites.",
      services: [
        "Custom Web Development",
        "Ecommerce Platforms",
        "Admin Dashboards",
        "Customer Portals",
        "Inventory Management",
        "Business Automation",
        "API Integrations",
      ],
    },
    {
      title: "Growth & Support",
      headline: "Support that helps your website perform after launch.",
      description:
        "Ongoing improvements, automation, optimization, and technical setup to keep your digital presence moving forward.",
      services: [
        "Website Maintenance",
        "SEO Optimization",
        "Performance Improvements",
        "Email Automation",
        "Analytics Setup",
        "Domain & Deployment",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-6 pt-40 pb-28 text-[#111111]">
      <section className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/40">
          Capabilities
        </p>

        <h1 className="max-w-6xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-8xl">
          Digital platforms designed to help businesses grow.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Jovavo creates websites, ecommerce systems, dashboards, and digital
          tools that feel refined, functional, and built around real business
          needs.
        </p>

        <div className="mt-28 space-y-10">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-[3rem] border border-black/10 bg-white p-8 shadow-sm md:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
                <div>
                  <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/35">
                    {capability.title}
                  </p>

                  <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
                    {capability.headline}
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl text-lg leading-relaxed text-black/55">
                    {capability.description}
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {capability.services.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-black/10 bg-[#FAFAF8] px-5 py-3 text-sm text-black/60"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[3rem] bg-[#111111] p-8 text-white md:p-14">
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                Start a Project
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-6xl">
                Have an idea that needs to become real?
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Let’s Talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}