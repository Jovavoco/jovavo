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
    <main className="min-h-screen bg-[#FAFAF8] px-6 pt-40 pb-28 text-[#111111]">
      <section className="mx-auto max-w-6xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/40">
          Services
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.03] tracking-tight md:text-7xl">
          Thoughtful websites for businesses ready to look professional online.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Jovavo designs and develops clean digital experiences with a focus on
          clarity, trust, performance, and long-term growth.
        </p>

        <div className="mt-24 border-t border-black/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-6 border-b border-black/10 py-12 md:grid-cols-[0.65fr_1fr]"
            >
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {service.title}
              </h2>

              <p className="max-w-2xl text-lg leading-relaxed text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 border-t border-black/10 pt-12">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
            Project Investment
          </p>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
                Every project is quoted based on scope.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/55">
                After learning about your goals, you’ll receive a tailored
                proposal with the recommended approach, timeline, and investment.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-black/90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}