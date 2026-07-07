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
          alt="Jovavo workspace"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/35" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-6 pt-44 text-center md:pt-52">
          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-white/75">
            Custom Websites & Digital Growth
          </p>

          <h1 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.15] tracking-[0.16em] text-white md:text-6xl lg:text-7xl">
            Digital Experiences
            <br />
            That Elevate Brands
          </h1>

          <div className="my-8 h-px w-20 bg-white/45" />

          <p className="max-w-2xl text-sm leading-7 tracking-[0.08em] text-white/75 md:text-base">
            Custom websites, ecommerce platforms, and digital systems designed
            to help businesses grow with confidence.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/services"
              className="border border-white/50 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            >
              View Services
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