export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
          About Jovavo
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          A creative web studio built for clean, modern digital experiences.
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
          Jovavo creates polished websites for businesses that want to look
          professional, feel trustworthy, and stand out online.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            "Thoughtful design",
            "Custom development",
            "Clean user experience",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-relaxed text-black/55">
                Every project is built with attention to detail, clarity, and
                long-term usability.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}