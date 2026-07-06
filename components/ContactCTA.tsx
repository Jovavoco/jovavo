export default function ContactCTA() {
  return (
    <section className="bg-white text-[#111111] px-6 py-28">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] bg-[#111111] text-white px-8 py-20 md:px-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-6">
            Start a Project
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Ready to build something
            <br />
            your customers remember?
          </h2>

          <p className="mt-6 text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Let’s create a polished website that feels intentional, professional,
            and built around your business.
          </p>

          <a
            href="mailto:hello@jovavo.com"
            className="inline-flex mt-10 rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}