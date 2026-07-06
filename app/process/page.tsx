export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, your audience, your goals, and what your website needs to accomplish.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We define the structure, page flow, content direction, and visual approach before design begins.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Your website takes shape through clean layouts, refined typography, strong visuals, and a polished user experience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "The design is built into a responsive, fast, and functional website that works smoothly across devices.",
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Your site is deployed, connected to your domain, tested, optimized, and prepared for visitors.",
    },
    {
      number: "06",
      title: "Support",
      description:
        "After launch, updates, adjustments, and ongoing improvements can be handled as your business grows.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
          Process
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          A clear process from first idea to final launch.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Every project follows a focused workflow designed to keep the process
          organized, collaborative, and intentional.
        </p>

        <div className="mt-20 space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)] md:grid-cols-[120px_1fr]"
            >
              <p className="text-sm text-black/35">{step.number}</p>

              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  {step.title}
                </h2>

                <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/55">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}