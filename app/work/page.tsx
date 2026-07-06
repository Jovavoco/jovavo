import Link from "next/link";

const projects = [
  {
    title: "Apexx Biolabs",
    category: "Biotechnology Ecommerce",
    description:
      "A custom ecommerce platform built for a biotechnology company with a premium storefront and powerful administrative tools.",
    href: "/work/apexx-biolabs",
    status: "Live",
  },
  {
    title: "Willow & Tallow",
    category: "Luxury Home & Lifestyle",
    description:
      "An elegant lifestyle brand currently in development with a focus on refined design and premium online experiences.",
    href: "/work/willow-and-tallow",
    status: "In Development",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-black/40 text-xs mb-5">
            Selected Work
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
            Projects designed with intention.
          </h1>

          <p className="mt-8 text-xl text-black/55 max-w-3xl leading-relaxed">
            Every project is approached with a focus on thoughtful design,
            usability, and long-term scalability.
          </p>

          <div className="mt-20 space-y-8">

            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group block rounded-[2rem] border border-black/10 bg-white p-10 hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="flex justify-between items-start mb-6">

                  <div>
                    <p className="text-sm text-black/40">
                      {project.category}
                    </p>

                    <h2 className="text-4xl font-semibold mt-2">
                      {project.title}
                    </h2>
                  </div>

                  <span className="rounded-full border border-black/10 px-4 py-2 text-sm text-black/50">
                    {project.status}
                  </span>

                </div>

                <p className="text-lg text-black/60 max-w-3xl leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-8 text-black font-medium group-hover:translate-x-2 transition-transform">
                  View Case Study →
                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>
    </main>
  );
}