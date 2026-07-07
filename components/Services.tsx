import { Monitor, ShoppingBag, Search, Palette } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor size={26} />,
      title: "Custom Websites",
      description:
        "Modern, responsive websites designed around your business, brand, and customer experience.",
    },
    {
      icon: <ShoppingBag size={26} />,
      title: "E-Commerce",
      description:
        "Polished online stores with product pages, smooth shopping flows, and a premium customer experience.",
    },
    {
      icon: <Search size={26} />,
      title: "SEO & Performance",
      description:
        "Fast-loading, search-friendly websites built to support visibility, trust, and long-term growth.",
    },
    {
      icon: <Palette size={26} />,
      title: "Brand Direction",
      description:
        "Typography, colors, layout direction, and visual styling that make your business feel cohesive online.",
    },
  ];

  return (
    <section className="bg-white text-[#111111] px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-5">
            Services
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Everything you need
            <br />
            to build beautifully online.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-black/10 bg-[#FAFAF8] p-6 hover:bg-white hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.07)] transition-all duration-300"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white text-black/70 group-hover:text-black transition">
                {service.icon}
              </div>

              <p className="text-sm text-black/35 mb-6">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                {service.title}
              </h3>

              <p className="text-black/55 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}