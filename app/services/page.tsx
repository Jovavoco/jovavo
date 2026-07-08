import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ServicesPage() {
  const capabilities = [
    {
      title: "Website Design",
      image: "/images/services/website-design.jpg",
      headline:
        "Custom websites designed to make your business look established.",
      description:
        "Modern, responsive websites built to create trust, improve first impressions, and give your business a polished online presence.",
      services: [
        "Custom Website Design",
        "Business Websites",
        "Ecommerce Websites",
        "Website Redesigns",
        "Landing Pages",
        "Responsive Design",
        "Mobile Optimization",
      ],
    },
    {
      title: "Web Development",
      image: "/images/services/web-development.jpg",
      headline: "Digital systems built around how your business actually works.",
      description:
        "From ecommerce platforms to portals, dashboards, bookings, and internal tools, Jovavo builds functionality that goes beyond basic website pages.",
      services: [
        "Custom Web Development",
        "Ecommerce Platforms",
        "Customer Portals",
        "Admin Dashboards",
        "Booking Systems",
        "Inventory Management",
        "Order Management",
        "Business Automation",
        "Membership Websites",
        "API Integrations",
      ],
    },
    {
      title: "Digital Growth",
      image: "/images/services/digital-growth.jpg",
      headline: "Marketing tools that help your website reach the right people.",
      description:
        "Support for search, analytics, ads, email marketing, and campaign pages designed to help businesses bring more traffic, leads, and customers online.",
      services: [
        "Technical SEO",
        "Local SEO",
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
      image: "/images/services/website-care.jpg",
      headline: "Ongoing support to keep your website secure, fast, and updated.",
      description:
        "After launch, Jovavo can help manage hosting, updates, backups, monitoring, content edits, and ongoing improvements so your site continues performing.",
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
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Services
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h1 className="font-serif text-5xl font-light uppercase leading-[1.06] tracking-[0.08em] md:text-7xl">
              Websites.
              <br />
              Systems.
              <br />
              Growth.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
              Jovavo helps businesses launch, manage, and grow online through
              custom websites, ecommerce platforms, digital systems, marketing
              tools, and ongoing website care.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 space-y-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 120}>
              <div className="overflow-hidden rounded-[1.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_24px_80px_rgba(27,23,19,0.04)]">
                <div className="grid lg:grid-cols-[0.95fr_1fr]">
                  <div className="overflow-hidden">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 lg:h-full"
                    />
                  </div>

                  <div className="flex min-h-[430px] flex-col justify-center p-8 md:p-12">
                    <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#1b1713]/45">
                      {capability.title}
                    </p>

                    <h2 className="max-w-2xl font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] md:text-5xl">
                      {capability.headline}
                    </h2>

                    <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#1b1713]/60">
                      {capability.description}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                      {capability.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-md border border-[#1b1713]/15 bg-[#f5f1e8]/70 px-4 py-2 text-[11px] text-[#1b1713]/65"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="mt-3 overflow-hidden rounded-[1.5rem] bg-[#1b1713] bg-cover bg-center p-10 text-white md:p-16"
style={{
  backgroundImage: "url('/images/services/lets-talk.jpg')",
}}
          >
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-black/45">
                  Start a Project
                </p>

                <h2 className="max-w-3xl font-serif text-4xl font-light leading-[1.05] tracking-[-0.03em] md:text-5xl">
                  Ready to build something that works beautifully?
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-black/60">
                  Whether you need a website, ecommerce platform, dashboard,
                  automation, or growth support, Jovavo can help build the
                  digital foundation for your business.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-md bg-white px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Let’s Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}