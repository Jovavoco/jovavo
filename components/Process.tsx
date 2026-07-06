export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We define your goals, audience, brand direction, and what your website needs to accomplish.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Your site takes shape through clean layouts, refined visuals, and a user experience built around trust.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Everything is developed into a responsive, fast, polished website that works across devices.",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "Your website is deployed, optimized, connected to your domain, and ready for the world.",
    },
  ];

  return (
    <section className="bg-[#FAFAF8] text-[#111111] px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-5">
            Process
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            A simple process,
            <br />
            built for clarity.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.04)]"
            >
              <p className="text-sm text-black/35 mb-10">{step.number}</p>

              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                {step.title}
              </h3>

              <p className="text-black/55 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}