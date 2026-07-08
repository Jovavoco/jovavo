import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ProcessPage() {
  const steps = [
    {
      title: "Discover",
      eyebrow: "Step One",
      image: "/images/process/discover.jpg",
      description:
        "We clarify your goals, audience, brand direction, website needs, timeline, and what success should look like.",
      details: ["Business Goals", "Audience", "Project Scope"],
    },
    {
      title: "Structure",
      eyebrow: "Step Two",
      image: "/images/process/structure.jpg",
      description:
        "We plan the pages, user flow, content sections, calls-to-action, and the overall experience before design begins.",
      details: ["Sitemap", "Page Flow", "Content Direction"],
    },
    {
      title: "Design",
      eyebrow: "Step Three",
      image: "/images/process/design.jpg",
      description:
        "Your website begins to take shape through refined layouts, typography, spacing, colors, and visual direction.",
      details: ["Visual Style", "Responsive Layout", "User Experience"],
    },
    {
      title: "Develop",
      eyebrow: "Step Four",
      image: "/images/process/develop.jpg",
      description:
        "The design is built into a fast, responsive, functional website with clean structure and scalable foundations.",
      details: ["Frontend Build", "Integrations", "Mobile Optimization"],
    },
    {
      title: "Launch",
      eyebrow: "Step Five",
      image: "/images/process/launch.jpg",
      description:
        "Your site is tested, optimized, connected to your domain, and prepared for a smooth public launch.",
      details: ["Testing", "Deployment", "Domain Setup"],
    },
    {
      title: "Support",
      eyebrow: "Step Six",
      image: "/images/process/support.jpg",
      description:
        "After launch, Jovavo can help with maintenance, updates, performance improvements, and ongoing growth support.",
      details: ["Maintenance", "Updates", "Growth Support"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Process
          </p>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h1 className="font-serif text-5xl font-light uppercase leading-[1.06] tracking-[0.09em] md:text-7xl">
              A clear path
              <br />
              from concept
              <br />
              to launch.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
              Every project follows a thoughtful workflow built around clarity,
              collaboration, and execution — so your website feels intentional
              from the first conversation to the final launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-24 grid gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 110}>
              <div className="group overflow-hidden rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf7ef]/70 shadow-[0_20px_70px_rgba(27,23,19,0.04)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_100px_rgba(27,23,19,0.08)]">
                <div
                  className={`grid gap-0 lg:grid-cols-2 ${
                    index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={step.image}
                      alt={`${step.title} process step`}
                      className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[420px] lg:h-full"
                    />
                  </div>

                  <div className="flex flex-col justify-between p-8 md:p-12">
                    <div>
                      <p className="mb-5 text-[11px] uppercase tracking-[0.35em] text-[#1b1713]/35">
                        {step.eyebrow}
                      </p>

                      <h2 className="font-serif text-4xl font-light uppercase tracking-[0.08em] md:text-6xl">
                        {step.title}
                      </h2>

                      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-2">
                      {step.details.map((detail) => (
                        <span
                          key={detail}
                          className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#1b1713]/50"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#1b1713] px-8 py-14 text-white md:px-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  Next Step
                </p>

                <h2 className="max-w-3xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-5xl">
                  Ready to start the conversation?
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/55">
                  Share your goals, timeline, and vision. From there, Jovavo can
                  recommend the right direction for your website or digital
                  platform.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}