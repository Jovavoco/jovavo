import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="bg-[#111111] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/images/jovavo-hero-bg.png"
          alt="Luxury workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/70">
            Custom Websites & Digital Growth
          </p>

          <h1 className="max-w-6xl font-serif text-5xl font-light uppercase leading-[1.08] tracking-[0.18em] md:text-7xl">
            Digital Experiences
            <br />
            That Elevate Brands
          </h1>

          <div className="my-8 h-px w-20 bg-white/50" />

          <p className="max-w-2xl text-base leading-8 tracking-[0.08em] text-white/75 md:text-lg">
            We design and build websites, ecommerce systems, and digital
            solutions that help businesses grow with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="border border-white/50 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            >
              View Services
            </a>

            <a
              href="/contact"
              className="border border-white/20 bg-white px-8 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-white/90"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <FeaturedWork />
      <Services />
      <Process />
      <ContactCTA />
    </main>
  );
}