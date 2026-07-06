import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24">
        
        <Navbar />

        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          JOVAVO
        </p>

        <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-tight md:text-8xl">
          Design.
          <br />
          Build.
          <br />
          Elevate.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
          Modern websites crafted for businesses that want to look premium,
          convert visitors, and grow online.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/contact"
            className="rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:opacity-80"
          >
            Start Your Project
          </a>

          <a
            href="/work"
            className="rounded-full border border-gray-300 px-7 py-4 text-sm font-medium transition hover:bg-gray-100"
          >
            View Work
          </a>
        </div>
      </section>
    
    <FeaturedWork />

<Services />
<Process />
<ContactCTA />

      <Footer />

    </main>
  );
}