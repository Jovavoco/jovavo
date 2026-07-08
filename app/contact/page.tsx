import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Ready to build your next website? Contact Jovavo to discuss your project and request a free consultation.",
};

const inputStyle =
  "w-full rounded-full border border-[#1b1713]/10 bg-white/75 px-6 py-4 text-sm text-[#1b1713] outline-none backdrop-blur-md transition placeholder:text-[#1b1713]/35 focus:border-[#1b1713]/30 focus:bg-white";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <Image
        src="/images/contact-bg.png"
        alt=""
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-center"
      />

      <div className="absolute inset-0 -z-10 bg-[#f5f1e8]/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f5f1e8]/95 via-[#f5f1e8]/65 to-transparent" />

      <section className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#1b1713]/45">
                Contact
              </p>

              <h1 className="font-serif text-5xl font-light uppercase leading-[1.02] tracking-[0.08em] md:text-7xl">
                Let’s build
                <br />
                something
                <br />
                exceptional.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1b1713]/60 md:text-xl">
                Tell me about your business, your goals, and the digital
                experience you want to create. Jovavo will help you find the
                clearest next step.
              </p>

              <div className="mt-10 grid gap-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "support@jovavo.com",
                    href: "mailto:support@jovavo.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "New York, NY",
                  },
                  {
                    icon: Clock,
                    label: "Response",
                    value: "24–48 hours",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/50 p-4 shadow-[0_20px_60px_rgba(27,23,19,0.06)] backdrop-blur-xl"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b1713] text-white">
                        <Icon size={17} />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-[#1b1713]/40">
                          {item.label}
                        </p>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-1 block text-sm text-[#1b1713]/75 hover:text-[#1b1713]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-[#1b1713]/75">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form className="rounded-[3rem] border border-white/70 bg-[#fbf8f2]/75 p-7 shadow-[0_40px_140px_rgba(27,23,19,0.14)] backdrop-blur-2xl md:p-10">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#1b1713]/45">
                Project Inquiry
              </p>

              <h2 className="mt-4 font-serif text-4xl font-light uppercase leading-[1.05] tracking-[0.08em]">
                Tell me what you’re building.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1b1713]/55">
                Share a few details and I’ll get back to you with a clear
                direction, estimated scope, and recommended next steps.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
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
                className={`mt-4 resize-none rounded-[1.75rem] ${inputStyle}`}
              />

              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-white shadow-[0_18px_50px_rgba(27,23,19,0.22)] transition hover:-translate-y-1 hover:bg-[#2a241f]"
              >
                Request a Proposal
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}