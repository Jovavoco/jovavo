import { Monitor, ShoppingBag, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor size={28} />,
      title: "Custom Websites",
      description:
        "Modern, responsive websites tailored to your business and brand.",
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "E-Commerce",
      description:
        "Beautiful online stores built to increase sales and conversions.",
    },
    {
      icon: <Search size={28} />,
      title: "SEO & Performance",
      description:
        "Optimized for speed, search engines, and long-term growth.",
    },
  ];

  return (
    <section className="py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[0.3em] text-gray-500 text-sm">
          SERVICES
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          Everything you need
          <br />
          to build online.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white border border-black/5 p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}