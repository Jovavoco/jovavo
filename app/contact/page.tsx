import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to build your next website? Contact Jovavo to discuss your project and request a free consultation.",
};

const inputStyle =
  "w-full rounded-[1.25rem] border border-[#1b1713]/10 bg-[#fbf8f2]/90 px-6 py-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#1b1713]/35 focus:border-[#c7a46a] focus:ring-4 focus:ring-[#c7a46a]/15";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#ece5da] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] shadow-[0_40px_120px_rgba(27,23,19,0.10)]">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              
              {/* IMAGE / INFO SIDE */}
              <div className="relative min-h-[720px] overflow-hidden p-8 md:p-12">
                <img
                  src="/images/contact/contact-bg.png"
                  alt="Jovavo contact background"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-[#1b1713]/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1713]/80 via-[#1b1713]/25 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between text-white">
                  <div>
                    <p className="mb-6 text-xs uppercase tracking-[0.42em] text-white/60">
                      Contact
                    </p>

                    <h1 className="font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-7xl">
                      Let’s build
                      <br />
                      something
                      <br />
                      exceptional.
                    </h1>
                  </div>

                  <div>
                    <p className="max-w-xl text-lg leading-relaxed text-white/75">
                      Tell me about your business, your goals, and the digital
                      experience you want to create.
                    </p>

                    <div className="mt-8 space-y-4 text-sm text-white/75">
                      <div className="flex items-center gap-4">
                        <Mail size={18} />
                        <a href="mailto:support@jovavo.com">
                          support@jovavo.com
                        </a>
                      </div>

                      <div className="flex items-center gap-4">
                        <MapPin size={18} />
                        <span>New York, NY</span>
                      </div>

                      <div className="flex items-center gap-4">
                        <Clock size={18} />
                        <span>Response within 24–48 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM SIDE */}
              <form className="bg-[#fbf8f2] p-8 md:p-12">
                <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                  Project Inquiry
                </p>

                <h2 className="font-serif text-4xl font-light uppercase leading-[1.08] tracking-[0.08em] md:text-5xl">
                  Tell me what you’re building.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#1b1713]/55">
                  Share a few details about your project and Jovavo will get
                  back to you with a clear direction.
                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="Your name" className={inputStyle} />
                  <input type="email" placeholder="Email address" className={inputStyle} />
                </div>

                <input
                  type="text"
                  placeholder="Business / brand name"
                  className={`mt-4 ${inputStyle}`}
                />

                <select className={`mt-4 ${inputStyle} text-[#1b1713]/55`}>
                  <option>What do you need?</option>
                  <option>New website</option>
                  <option>Ecommerce store</option>
                  <option>Website redesign</option>
                  <option>Landing page</option>
                  <option>Admin dashboard</option>
                  <option>Customer portal</option>
                  <option>Business automation</option>
                  <option>SEO / digital growth</option>
                  <option>Google or Meta ads</option>
                  <option>Website maintenance</option>
                  <option>Not sure yet</option>
                </select>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <select className={`${inputStyle} text-[#1b1713]/55`}>
                    <option>Estimated budget</option>
                    <option>$500 - $1,500</option>
                    <option>$1,500 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                    <option>Let’s discuss</option>
                  </select>

                  <select className={`${inputStyle} text-[#1b1713]/55`}>
                    <option>Ideal timeline</option>
                    <option>Immediately</option>
                    <option>Within 1 month</option>
                    <option>1 - 3 months</option>
                    <option>3+ months</option>
                    <option>Just exploring</option>
                  </select>
                </div>

                <textarea
                  placeholder="Tell me about your goals, current website, features you need, and anything else I should know..."
                  rows={7}
                  className={`mt-4 resize-none ${inputStyle}`}
                />

                <div className="mt-6 grid gap-3 text-xs text-[#1b1713]/50 md:grid-cols-3">
                  <p>✓ Response within 24–48 hours</p>
                  <p>✓ Custom recommendations</p>
                  <p>✓ No pressure, just clarity</p>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-white shadow-[0_18px_50px_rgba(27,23,19,0.22)] transition hover:scale-[1.015]"
                >
                  Request a Proposal
                  <ArrowUpRight size={16} />
                </button>

                <p className="mt-5 text-center text-xs text-[#1b1713]/45">
                  Prefer email? Reach out directly at support@jovavo.com.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}