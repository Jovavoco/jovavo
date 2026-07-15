"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
} from "lucide-react";
import Reveal from "@/components/Reveal";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const inputStyle =
  "w-full rounded-2xl border border-[#1b1713]/10 bg-white/80 px-5 py-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#1b1713]/35 focus:border-[#1b1713]/30 focus:bg-white disabled:cursor-not-allowed disabled:opacity-60";

type FormStatus = "idle" | "submitting" | "success" | "error";

type ContactFormData = {
  name: string;
  email: string;
  business: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  business: "",
  service: "",
  budget: "",
  timeline: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(
    field: keyof ContactFormData,
    value: string,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "Your inquiry could not be sent.",
        );
      }

      /*
       * Only count the visitor as a Meta Lead after the server confirms
       * that the inquiry was successfully sent.
       */
      if (
        typeof window !== "undefined" &&
        typeof window.fbq === "function"
      ) {
        window.fbq("track", "Lead", {
          content_name: "Jovavo Project Inquiry",
          content_category: formData.service || "Project Inquiry",
        });
      }

      setStatus("success");
    setFeedback(
  "Your proposal request has been sent successfully. We will respond within 24–48 hours.",
);
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 pb-28 pt-40 text-[#1b1713]">
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
                    value: "contact@jovavo.com",
                    href: "mailto:contact@jovavo.com",
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

            <form
              onSubmit={handleSubmit}
              className="rounded-[2.25rem] border border-white/70 bg-white/60 p-6 shadow-[0_30px_100px_rgba(27,23,19,0.10)] backdrop-blur-2xl md:p-8"
            >
              <div className="mb-8 border-b border-[#1b1713]/10 pb-7">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#1b1713]/40">
                  Project Inquiry
                </p>

                <h2 className="mt-4 max-w-2xl font-serif text-4xl font-light uppercase leading-[1.02] tracking-[0.06em] md:text-5xl">
                  Tell me what you’re building.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#1b1713]/55">
                  Share the essentials and I’ll respond with a clear
                  direction, estimated scope, and next steps.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                  className={inputStyle}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                  className={inputStyle}
                />
              </div>

              <input
                type="text"
                name="business"
                placeholder="Business / brand name"
                autoComplete="organization"
                disabled={isSubmitting}
                value={formData.business}
                onChange={(event) =>
                  updateField("business", event.target.value)
                }
                className={`mt-4 ${inputStyle}`}
              />

              <select
                name="service"
                required
                disabled={isSubmitting}
                value={formData.service}
                onChange={(event) =>
                  updateField("service", event.target.value)
                }
                className={`mt-4 appearance-none ${inputStyle} text-[#1b1713]/55`}
              >
                <option value="" disabled>
                  What do you need?
                </option>

                <option value="New website">New website</option>
                <option value="Ecommerce store">Ecommerce store</option>
                <option value="Website redesign">Website redesign</option>
                <option value="Landing page">Landing page</option>
                <option value="Admin dashboard">Admin dashboard</option>
                <option value="Customer portal">Customer portal</option>

                <option value="Business automation">
                  Business automation
                </option>

                <option value="SEO / digital growth">
                  SEO / digital growth
                </option>

                <option value="Google or Meta ads">
                  Google or Meta ads
                </option>

                <option value="Website maintenance">
                  Website maintenance
                </option>

                <option value="Not sure yet">Not sure yet</option>
              </select>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <select
                  name="budget"
                  required
                  disabled={isSubmitting}
                  value={formData.budget}
                  onChange={(event) =>
                    updateField("budget", event.target.value)
                  }
                  className={`appearance-none ${inputStyle} text-[#1b1713]/55`}
                >
                  <option value="" disabled>
                    Estimated budget
                  </option>

                  <option value="$500 - $1,500">
                    $500 - $1,500
                  </option>

                  <option value="$1,500 - $3,000">
                    $1,500 - $3,000
                  </option>

                  <option value="$3,000 - $5,000">
                    $3,000 - $5,000
                  </option>

                  <option value="$5,000 - $10,000">
                    $5,000 - $10,000
                  </option>

                  <option value="$10,000+">$10,000+</option>
                  <option value="Let’s discuss">Let’s discuss</option>
                </select>

                <select
                  name="timeline"
                  required
                  disabled={isSubmitting}
                  value={formData.timeline}
                  onChange={(event) =>
                    updateField("timeline", event.target.value)
                  }
                  className={`appearance-none ${inputStyle} text-[#1b1713]/55`}
                >
                  <option value="" disabled>
                    Ideal timeline
                  </option>

                  <option value="Immediately">Immediately</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1 - 3 months">1 - 3 months</option>
                  <option value="3+ months">3+ months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Tell me about your goals, current website, features you need, and anything else I should know..."
                rows={6}
                required
                disabled={isSubmitting}
                value={formData.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                className={`mt-4 resize-none rounded-[1.75rem] ${inputStyle}`}
              />

              {feedback ? (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-2xl border px-5 py-4 text-sm leading-relaxed ${
                    status === "success"
                      ? "border-green-700/20 bg-green-50/80 text-green-900"
                      : "border-red-700/20 bg-red-50/80 text-red-900"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {status === "success" ? (
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0"
                      />
                    ) : null}

                    <p>{feedback}</p>
                  </div>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#1b1713] px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-white shadow-[0_18px_50px_rgba(27,23,19,0.22)] transition hover:-translate-y-1 hover:bg-[#2a241f] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Request a Proposal
                    <ArrowUpRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}