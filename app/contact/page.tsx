import { Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] px-6 pt-36 pb-28">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/40">
              Contact
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              Let’s build something exceptional.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/55">
              Tell me about your business, your goals, and what you want your
              website to become.
            </p>

            <div className="mt-10 flex items-center gap-3 text-black/60">
              <Mail size={20} />
              <a
                href="mailto:hello@jovavo.com"
                className="hover:text-black transition"
              >
                hello@jovavo.com
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-black/10 bg-white p-6 md:p-8 shadow-[0_25px_100px_rgba(0,0,0,0.06)]">
            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30"
              />
            </div>

            <input
              type="text"
              placeholder="Company / Brand"
              className="mt-5 w-full rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30"
            />

            <select className="mt-5 w-full rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30 text-black/60">
              <option>Project Type</option>
              <option>Custom Website</option>
              <option>E-Commerce</option>
              <option>Brand Direction</option>
              <option>SEO & Performance</option>
            </select>

            <select className="mt-5 w-full rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30 text-black/60">
              <option>Budget Range</option>
              <option>Under $1,000</option>
              <option>$1,000 - $2,500</option>
              <option>$2,500 - $5,000</option>
              <option>$5,000+</option>
            </select>

            <textarea
              placeholder="Tell me about your project..."
              rows={7}
              className="mt-5 w-full resize-none rounded-2xl border border-black/10 bg-[#FAFAF8] px-5 py-4 outline-none focus:border-black/30"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-black/90"
            >
              Start Your Project
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}