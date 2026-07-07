import Link from "next/link";

export default function ServicesPage() {
  const services = [
    "Website Design & Development",
    "E-Commerce Websites",
    "Brand Direction",
    "SEO & Performance",
    "Website Maintenance",
  ];

  return (
    <main className="min-h-screen bg-white text-[#111111] px-6 pt-40 pb-28">
      <section className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/40">
          Services
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            Clean websites for businesses that want to look professional online.
          </h1>

          <p className="text-xl leading-relaxed text-black/55 lg:pt-4">
            Jovavo designs and develops modern websites with a focus on clarity,
            trust, performance, and a polished customer experience.
          </p>
        </div>

        <div className="mt-24 border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={service}
              className="grid gap-6 border-b border-black/10 py-10 md:grid-cols-[120px_1fr]"
            >
              <p className="text-sm text-black/35">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h2 className="text-3xl font-medium tracking-tight md:text-5xl">
                {service}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-col gap-8 rounded-[2rem] bg-[#F7F5F0] p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-black/40">
              Project Investment
            </p>

            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Custom projects are quoted based on scope.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-black/90"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}