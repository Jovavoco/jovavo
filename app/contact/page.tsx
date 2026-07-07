import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const inputStyle =
    "w-full rounded-2xl border border-[#1b1713]/10 bg-[#fbf8f2] px-5 py-4 text-[#1b1713] outline-none transition placeholder:text-[#1b1713]/35 focus:border-[#1b1713]/25 focus:bg-white";

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                Contact
              </p>

              <h1 className="font-serif text-5xl font-light uppercase leading-[1.06] tracking-[0.08em] md:text-7xl">
                Let’s build
                <br />
                something
                <br />
                exceptional.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
                Tell me about your business, your goals, and the digital
                experience you want to create.
              </p>

              <div className="mt-10 flex items-center gap-3 text-[#1b1713]/60">
                <Mail size={18} />
                <a
                  href="mailto:hello@jovavo.com"
                  className="transition hover:text-[#1b1713]"
                >
                  hello@jovavo.com
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {[
                  "Custom Websites",
                  "Ecommerce",
                  "Admin Dashboards",
                  "SEO",
                  "Ads",
                  "Website Care",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1b1713]/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <form className="rounded-[2.75rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-6 shadow-[0_30px_100px_rgba(27,23,19,0.06)] md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input type="text" placeholder="Name" className={inputStyle} />
                <input type="email" placeholder="Email" className={inputStyle} />
              </div>

              <input
                type="text"
                placeholder="Company / Brand"
                className={`mt-5 ${inputStyle}`}
              />

              <select className={`mt-5 ${inputStyle} text-[#1b1713]/55`}>
                <option>Project Type</option>
                <option>Custom Website</option>
                <option>Ecommerce Website</option>
                <option>Website Redesign</option>
                <option>Landing Page</option>
                <option>Admin Dashboard</option>
                <option>Customer Portal</option>
                <option>Business Automation</option>
                <option>SEO / Digital Growth</option>
                <option>Google or Meta Ads</option>
                <option>Website Maintenance</option>
                <option>Not Sure Yet</option>
              </select>

              <div className="grid gap-5 md:grid-cols-2">
                <select className={`mt-5 ${inputStyle} text-[#1b1713]/55`}>
                  <option>Budget Range</option>
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $3,000</option>
                  <option>$3,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                  <option>Let’s Discuss</option>
                </select>

                <select className={`mt-5 ${inputStyle} text-[#1b1713]/55`}>
                  <option>Timeline</option>
                  <option>Immediately</option>
                  <option>Within 1 Month</option>
                  <option>1 - 3 Months</option>
                  <option>3+ Months</option>
                  <option>Just Exploring</option>
                </select>
              </div>

              <textarea
                placeholder="Tell me about your project..."
                rows={7}
                className={`mt-5 resize-none ${inputStyle}`}
              />

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-[#1b1713] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-white transition hover:-translate-y-1 hover:bg-[#2a241f]"
              >
                Request a Proposal
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}