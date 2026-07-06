export default function FeaturedWork() {
  const projects = [
    {
      title: "Apexx Biolabs",
      category: "Biotechnology Ecommerce",
      status: "Live",
      description:
        "A custom ecommerce platform designed for a biotechnology company with product pages, order management, inventory tools, promotional features, and a secure administrative dashboard.",
      link: "/work/apexx-biolabs",
    },
    {
      title: "Willow & Tallow",
      category: "Home & Lifestyle",
      status: "In Development",
      description:
        "A luxury lifestyle brand in development with a focus on elegant visuals, premium storytelling, and a refined online shopping experience.",
      link: "/work/willow-and-tallow",
    },
  ];

  return (
    <section className="bg-[#FAFAF8] text-[#111111] px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-5">
            Selected Work
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Thoughtful digital work,
            <br />
            built with intention.
          </h2>

          <p className="mt-6 text-lg text-black/55 leading-relaxed max-w-2xl">
            A growing collection of brands, storefronts, and digital experiences
            designed to feel refined, functional, and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target={project.link === "#" ? "_self" : "_blank"}
              rel={project.link === "#" ? undefined : "noopener noreferrer"}
              className="group rounded-[2rem] border border-black/10 bg-white p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_28px_100px_rgba(0,0,0,0.09)] transition-all duration-300"
            >
              <div className="h-64 rounded-[1.5rem] border border-black/10 bg-gradient-to-br from-[#F3F0EA] via-white to-[#E9E3DA] mb-7 overflow-hidden flex items-center justify-center">
                <div className="w-[82%] rounded-2xl border border-black/10 bg-white shadow-xl overflow-hidden">
                  <div className="h-8 border-b border-black/10 bg-[#F7F7F5] flex items-center gap-2 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
                  </div>

                  <div className="p-5">
                    <div className="h-5 w-28 rounded-full bg-black/10 mb-5" />
                    <div className="h-8 w-3/4 rounded-xl bg-black/15 mb-3" />
                    <div className="h-8 w-1/2 rounded-xl bg-black/10 mb-6" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-xl bg-black/[0.06]" />
                      <div className="h-16 rounded-xl bg-black/[0.08]" />
                      <div className="h-16 rounded-xl bg-black/[0.06]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-sm text-black/45">{project.category}</p>

                <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs text-black/50">
                  {project.status}
                </span>
              </div>

              <h3 className="text-3xl font-semibold tracking-tight mb-3">
                {project.title}
              </h3>

              <p className="text-black/55 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="border-t border-black/10 pt-5 flex justify-end">
                <span className="text-black/35 group-hover:text-black transition">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}