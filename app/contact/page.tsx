import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to build your next website? Contact Jovavo to discuss your project and request a free consultation.",
};

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

const inputStyle =
  "w-full rounded-[1.35rem] border border-[#1b1713]/10 bg-[#f5f1e8]/80 px-6 py-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#1b1713]/35 focus:border-[#1b1713]/35 focus:bg-white";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1fr] lg:items-start">
            {/* LEFT SIDE */}
            <div className="lg:sticky lg:top-32">
              <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
                Contact
              </p>

              <h1 className="font-serif text-5xl font-light uppercase leading-[1.03] tracking-[0.08em] md:text-7xl">
                Let’s build
                <br />
                something
                <br />
                exceptional.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
                Tell me about your business, your goals, and the digital
                experience you want to create. I’ll help you figure out the best
                next step.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4 text-[#1b1713]/60">
                  <Mail size={18} />
                  <a
                    href="mailto:support@jovavo.com"
                    className="transition hover:text-[#1b1713]"
                  >
                    support@jovavo.com
                  </a>
                </div>

                <div className="flex items-center gap-4 text-[#1b1713]/60">
                  <MapPin size={18} />
                  <span>New York, NY</span>
                </div>

                <div className="flex items-center gap-4 text-[#1b1713]/60">
                  <Clock size={18} />
                  <span>Response within 24–48 hours</span>
                </div>
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
                    className="rounded-full border border-[#1b1713]/10 bg-[#fbf8f2] px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-[#1b1713]/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* FORM */}
            <form className="rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2]/95 p-7 shadow-[0_40px_140px_rgba(27,23,19,0.10)] backdrop-blur md:p-10">
              <div className="mb-8 rounded-[2rem] bg-[#efe9df] p-6">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#1b1713]/40">
                  Project Inquiry
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light uppercase leading-[1.1] tracking-[0.08em]">
                  Tell me what you’re building.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-[#1b1713]/55">
                  Share a few details about your project and Jovavo will get
                  back to you with a clear direction.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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

              <div className="mt-6 grid gap-3 text-xs leading-relaxed text-[#1b1713]/45 md:grid-cols-3">
                <p>✓ Response within 24–48 hours</p>
                <p>✓ Custom recommendations</p>
                <p>✓ No pressure, just clarity</p>
              </div>

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-white shadow-[0_18px_50px_rgba(27,23,19,0.20)] transition hover:-translate-y-1 hover:bg-[#2a241f]"
              >
                Request a Proposal
                <ArrowUpRight size={16} />
              </button>

              <p className="mt-5 text-center text-xs leading-relaxed text-[#1b1713]/40">
                Prefer email? Reach out directly at support@jovavo.com.
              </p>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}