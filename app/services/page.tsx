import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      description:
        "Clean, modern websites designed to make your business feel polished, credible, and easy to understand.",
    },
    {
      title: "E-Commerce",
      description:
        "Online storefronts built to create a smooth, professional shopping experience for your customers.",
    },
    {
      title: "Custom Development",
      description:
        "Tailored website features and functionality built around how your business actually works.",
    },
    {
      title: "Brand Direction",
      description:
        "Typography, colors, layout direction, and visual styling that help your business feel cohesive online.",
    },
    {
      title: "SEO & Performance",
      description:
        "Fast, organized, search-friendly websites built with long-term visibility and usability in mind.",
    },
    {
      title: "Website Maintenance",
      description:
        "Ongoing updates, edits, improvements, and support after your website is launched.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-6 pt-40 pb-28 text-[#111111]">
      <section className="mx-auto max-w-6xl">
        <div className="mb-24">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-7xl">
            Thoughtful websites for businesses ready to look professional online.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
            Jovavo designs and develops clean digital experiences with a focus
            on clarity, trust, performance, and long-term growth.
          </p>
        </div>

        <div className="border-t border-black/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group grid gap-6 border-b border-black/10 py-12 transition md:grid-cols-[0.65fr_1fr] md:items-start"
            >
              <h2 className="text-3xl font-semibold tracking-[-0.03em] transition group-hover:translate-x-1 md:text-4xl">
                {service.title}
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-[2rem] border border-black/10 bg-white/60 p-8 md:p-12">
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-black/35">
            Project Investment
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                Every project is quoted based on scope.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/55">
                After learning about your goals, you’ll receive a tailored
                proposal with the recommended approach, timeline, and investment.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-black/90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}