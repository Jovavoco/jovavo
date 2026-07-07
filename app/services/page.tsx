import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Websites",
      description:
        "Clean, custom websites designed to make your business feel polished, trustworthy, and easy to understand.",
      includes: ["Design direction", "Responsive layouts", "Modern pages"],
    },
    {
      title: "E-Commerce",
      description:
        "Professional storefronts built around product presentation, smooth shopping flows, and a premium customer experience.",
      includes: ["Product pages", "Shopping flow", "Order structure"],
    },
    {
      title: "Brand Presence",
      description:
        "A cohesive digital look through typography, colors, spacing, layout, and visual direction.",
      includes: ["Typography", "Color direction", "Visual styling"],
    },
    {
      title: "Growth Support",
      description:
        "Website maintenance, updates, performance improvements, and search-friendly structure after launch.",
      includes: ["Maintenance", "SEO basics", "Performance"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#111111] px-6 pt-40 pb-28 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Services
            </p>

            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Digital experiences built with clarity, function, and style.
            </h1>
          </div>

          <p className="max-w-xl text-xl leading-relaxed text-white/55 lg:justify-self-end">
            Jovavo helps businesses create websites that feel elevated,
            professional, and built around real goals.
          </p>
        </div>

        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <h2 className="text-4xl font-semibold tracking-[-0.04em]">
                {service.title}
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-white/55">
                {service.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {service.includes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-white p-8 text-black md:p-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-black/35">
                Project Investment
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Every project starts with a conversation.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/55">
                Pricing is tailored to the goals, timeline, and features needed.
                After learning about your project, you’ll receive a clear
                proposal.
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