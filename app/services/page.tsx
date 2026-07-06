import { Monitor, ShoppingBag, Search, Palette } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Monitor size={28} />,
      title: "Custom Websites",
      description:
        "Modern, responsive websites designed around your brand, goals, and customer experience.",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "E-Commerce",
      description:
        "Polished storefronts with product pages, ordering flows, and a clean shopping experience.",
    },
    {
      icon: <Search size={28} />,
      title: "SEO & Performance",
      description:
        "Fast, search-friendly websites built to improve visibility, trust, and long-term growth.",
    },
    {
      icon: <Palette size={28} />,
      title: "Brand Direction",
      description:
        "Typography, colors, layouts, and visual direction that help your business feel cohesive online.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
          Services
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Thoughtful design and development for modern businesses.
        </h1>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-black/10 bg-[#FAFAF8] p-8"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-white">
                {service.icon}
              </div>

              <h2 className="text-3xl font-semibold">{service.title}</h2>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/55">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}