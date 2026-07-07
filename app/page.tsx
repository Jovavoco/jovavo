import Link from "next/link";

export default function Home() {
  const work = [
    {
      title: "Apexx Biolabs",
      type: "Custom Ecommerce Platform",
      description:
        "A custom ecommerce platform with admin tools, inventory updates, promo codes, customer portal, reviews, and automated emails.",
      href: "/work/apexx-biolabs",
    },
    {
      title: "Willow & Tallow",
      type: "Brand & Website Experience",
      description:
        "A refined lifestyle brand and website experience designed around elegance, warmth, and a premium digital presence.",
      href: "/work/willow-and-tallow",
    },
  ];

  const services = [
    "Custom Websites",
    "Ecommerce Websites",
    "Website Redesigns",
    "Landing Pages",
    "Digital Growth",
    "Website Care",
  ];

  return (
    <main className="bg-[#f5f1e8] text-[#1b1713]">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/images/jovavo-hero-bg.png"
          alt="Jovavo studio workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />

<div className="absolute inset-0 bg-black/10" />

<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f5f1e8] to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pt-28 text-center md:pt-32">
          <p className="mb-7 text-[11px] uppercase tracking-[0.45em] text-white/80">
            Custom Websites & Digital Growth
          </p>

          <h1 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.13em] text-white drop-shadow-sm md:text-5xl lg:text-6xl">
            Digital
            <br />
            Experiences
            <br />
            That Elevate Brands
          </h1>

          <div className="my-6 h-px w-16 bg-white/60" />

          <p className="max-w-xl text-xs leading-7 tracking-[0.08em] text-white/85 md:text-sm">
            Custom websites, ecommerce platforms, and digital systems designed
            to help businesses grow with confidence.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="border border-white/60 bg-white/10 px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              View Services
            </Link>

            <Link
              href="/contact"
              className="bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-black transition hover:bg-white/90"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
            Jovavo
          </p>

          <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.1em] md:text-6xl">
            A website studio
            <br />
            for modern businesses.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-black/55">
            We design, develop, and support websites that feel refined,
            functional, and built with intention — from elegant business sites to
            ecommerce platforms and digital growth systems.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section className="bg-[#eee8dd] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
                Selected Work
              </p>

              <h2 className="font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.1em] md:text-6xl">
                Built with
                <br />
                purpose.
              </h2>
            </div>

            <Link
              href="/work"
              className="w-fit border border-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-black/70 transition hover:bg-black hover:text-white"
            >
              View All Work
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {work.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group border border-black/10 bg-[#f8f4ec] p-8 transition hover:bg-white md:p-10"
              >
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/35">
                  {project.type}
                </p>

                <h3 className="font-serif text-4xl font-light uppercase tracking-[0.08em] md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-xl leading-relaxed text-black/55">
                  {project.description}
                </p>

                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-black/45 transition group-hover:text-black">
                  View Case Study →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
            Capabilities
          </p>

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <h2 className="font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.1em] md:text-6xl">
              Websites.
              <br />
              Growth.
              <br />
              Support.
            </h2>

            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-black/55">
                Jovavo helps businesses launch, manage, and grow online through
                custom websites, ecommerce systems, digital marketing tools, and
                ongoing website care.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="border border-black/10 bg-[#f8f4ec] px-5 py-4 text-sm uppercase tracking-[0.18em] text-black/60"
                  >
                    {service}
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-10 inline-flex border border-black/20 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-black/70 transition hover:bg-black hover:text-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#eee8dd] px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
            Process
          </p>

          <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.1em] md:text-6xl">
            From idea
            <br />
            to launch.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {["Discover", "Design", "Develop", "Launch"].map((step) => (
              <div key={step} className="border border-black/10 bg-[#f8f4ec] p-8">
                <h3 className="font-serif text-3xl font-light uppercase tracking-[0.08em]">
                  {step}
                </h3>

                <p className="mt-5 leading-relaxed text-black/50">
                  A clear, thoughtful workflow designed to bring your website to
                  life with structure and intention.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl border border-black/10 bg-[#f8f4ec] px-8 py-20 text-center md:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-black/35">
            Start a Project
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.1em] md:text-6xl">
            Ready to build
            <br />
            something refined?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-relaxed text-black/55">
            Let’s create a website that feels premium, professional, and built
            around your business goals.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex bg-black px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:bg-black/85"
          >
            Let’s Talk
          </Link>
        </div>
      </section>
    </main>
  );
}