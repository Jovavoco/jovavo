import { Monitor, ShoppingBag, Search, Palette, Wrench } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Monitor size={28} />,
      title: "Website Design & Development",
      description:
        "Custom websites built from the ground up with modern design, responsive layouts, and a polished user experience.",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "E-Commerce",
      description:
        "Online storefronts with product pages, shopping flows, order management, and a premium customer experience.",
    },
    {
      icon: <Palette size={28} />,
      title: "Brand Identity",
      description:
        "Typography, colors, visual direction, and digital styling that help your business feel cohesive and recognizable.",
    },
    {
      icon: <Search size={28} />,
      title: "SEO & Performance",
      description:
        "Fast, search-friendly websites optimized for visibility, speed, and long-term growth.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Website Maintenance",
      description:
        "Ongoing updates, adjustments, improvements, and support after your website is launched.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
          Services Offered
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Everything your business needs to show up beautifully online.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Jovavo helps businesses create thoughtful, modern, and functional
          digital experiences built around their goals.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-[#FAFAF8] text-black/70">
                {service.icon}
              </div>

              <h2 className="text-3xl font-semibold tracking-tight">
                {service.title}
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-black p-10 text-white md:p-14">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40">
            Project Investment
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Every project is tailored to the scope of work.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Pricing depends on the size of the website, features needed, design
            complexity, and ongoing support. After learning about your project,
            you’ll receive a custom proposal with the recommended approach,
            timeline, and investment.
          </p>

          <a
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}