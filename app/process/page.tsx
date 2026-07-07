import Reveal from "@/components/Reveal";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, audience, goals, and what your website needs to accomplish.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We map out the structure, content direction, user flow, and visual approach before design begins.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Your website takes shape through refined layouts, elegant typography, and a polished user experience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "The design is built into a fast, responsive, and functional website that works beautifully across devices.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Your site is tested, optimized, connected to your domain, and prepared for the public.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "After launch, updates, improvements, and ongoing support help your website grow with your business.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#1b1713]/40">
            Process
          </p>

          <h1 className="max-w-5xl font-serif text-5xl font-light uppercase leading-[1.08] tracking-[0.1em] md:text-7xl">
            From first idea
            <br />
            to final launch.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
            A thoughtful workflow designed to keep every project clear,
            organized, and intentionally built from start to finish.
          </p>
        </Reveal>

        <div className="mt-24 border-t border-[#1b1713]/10">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 120}>
              <div className="group grid gap-8 border-b border-[#1b1713]/10 py-12 transition md:grid-cols-[160px_0.7fr_1fr] md:items-start">
                <p className="text-xs uppercase tracking-[0.35em] text-[#1b1713]/35">
                  {step.number}
                </p>

                <h2 className="font-serif text-4xl font-light uppercase tracking-[0.08em] transition duration-500 group-hover:translate-x-2 md:text-5xl">
                  {step.title}
                </h2>

                <p className="max-w-2xl text-lg leading-relaxed text-[#1b1713]/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}