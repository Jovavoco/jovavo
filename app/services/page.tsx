import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const capabilities = [
    {
      title: "Website Design",
      headline: "Custom websites built to make your business stand out.",
      description:
        "Modern, responsive websites designed to build trust, look professional, and create a strong first impression.",
      services: [
        "Custom Website Design",
        "Business Websites",
        "Ecommerce Websites",
        "Website Redesigns",
        "Landing Pages",
        "Responsive Design",
      ],
    },
    {
      title: "Web Development",
      headline: "Powerful website functionality built around your business.",
      description:
        "From ecommerce platforms to dashboards and customer portals, Jovavo builds digital systems that go beyond basic pages.",
      services: [
        "Custom Web Development",
        "Ecommerce Platforms",
        "Customer Portals",
        "Admin Dashboards",
        "Booking Systems",
        "Inventory Management",
        "Business Automation",
        "API Integrations",
        "Membership Websites",
      ],
    },
    {
      title: "Digital Growth",
      headline: "Marketing tools that help your website reach more people.",
      description:
        "Support for search, analytics, ads, email marketing, and campaign pages designed to help businesses grow online.",
      services: [
        "Technical SEO",
        "SEO Strategy",
        "Google Analytics",
        "Google Search Console",
        "Google Ads Management",
        "Meta Ads Management",
        "Email Marketing",
        "Campaign Landing Pages",
        "Conversion Optimization",
      ],
    },
    {
      title: "Website Care",
      headline: "Ongoing support to keep your website running smoothly.",
      description:
        "Maintenance, monitoring, updates, and technical support so your website stays secure, fast, and up to date.",
      services: [
        "Website Hosting",
        "Website Maintenance",
        "Website Monitoring",
        "Content Updates",
        "Security Updates",
        "Performance Optimization",
        "Domain Management",
        "Website Backups",
        "Technical Support",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] px-6 pt-40 pb-28 text-[#111111]">
      <section className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/40">
          Services
        </p>

        <h1 className="max-w-6xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-8xl">
          Websites.
          <br />
          Growth.
          <br />
          Results.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Jovavo helps businesses launch, manage, and grow online through custom
          websites, digital systems, marketing tools, and ongoing support.
        </p>

        <div className="mt-28 space-y-10">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-[3rem] border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)] md:p-12"
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
                Ready to build something that works beautifully?
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