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
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const inputStyle =
  "w-full rounded-xl border border-[#1b1713]/10 bg-[#fffdf9] px-4 py-3.5 text-[15px] text-[#1b1713] outline-none transition-all duration-200 placeholder:text-[#1b1713]/35 focus:border-[#1b1713]/25 focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,23,19,0.03)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4";

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
    <main className="relative min-h-screen overflow-hidden bg-[#f8f5ef] text-[#1b1713]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/contact-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.18]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f8f5ef]/90 via-[#f8f5ef]/94 to-[#f8f5ef]" />

      {/* PAGE */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 md:pt-36 lg:pb-28">
        <Reveal>
          {/* MOBILE / PAGE INTRO */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14">
            <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
              <MessageSquare size={19} strokeWidth={1.6} />
            </div>

            <p className="text-sm font-semibold text-[#1b1713]/50">
              Start a Project
            </p>

            <h1 className="mt-3 font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.8rem] md:text-[4.5rem]">
              Tell us what you&apos;re
              <br className="hidden sm:block" />
              <span className="italic text-[#1b1713]/50">
                {" "}
                looking to build.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Share a little about your business, what you need, and where
              you&apos;d like to take it. We&apos;ll help you figure out the
              best next step.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid gap-6 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-8">
            {/* CONTACT DETAILS */}
            <aside className="rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9]/90 p-6 shadow-[0_16px_50px_rgba(27,23,19,0.035)] backdrop-blur-md sm:p-7 lg:sticky lg:top-28">
              <div className="mb-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]">
                  <Sparkles size={19} strokeWidth={1.6} />
                </div>

                <h2 className="font-serif text-[2rem] font-light leading-tight tracking-[-0.025em]">
                  Have a question
                  <br />
                  <span className="italic text-[#1b1713]/50">
                    before starting?
                  </span>
                </h2>

                <p className="mt-4 text-[14px] leading-6 text-[#1b1713]/50">
                  You can send a project inquiry or reach out directly. We
                  typically respond within 24–48 hours.
                </p>
              </div>

              <div className="border-t border-[#1b1713]/10">
                {/* EMAIL */}
                <a
                  href="mailto:contact@jovavo.com"
                  className="group flex items-center gap-4 border-b border-[#1b1713]/10 py-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65 transition-colors duration-200 group-hover:bg-[#1b1713] group-hover:text-white">
                    <Mail size={18} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-[#1b1713]">
                      Email
                    </p>

                    <p className="mt-0.5 truncate text-[14px] text-[#1b1713]/50">
                      contact@jovavo.com
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-center gap-4 border-b border-[#1b1713]/10 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65">
                    <MapPin size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#1b1713]">
                      Based in
                    </p>

                    <p className="mt-0.5 text-[14px] text-[#1b1713]/50">
                      New York, NY
                    </p>
                  </div>
                </div>

                {/* RESPONSE */}
                <div className="flex items-center gap-4 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1ece3] text-[#1b1713]/65">
                    <Clock size={18} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[13px] font-semibold text-[#1b1713]">
                      Response time
                    </p>

                    <p className="mt-0.5 text-[14px] text-[#1b1713]/50">
                      Usually within 24–48 hours
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[1.6rem] border border-[#1b1713]/10 bg-[#fffdf9]/95 p-5 shadow-[0_20px_70px_rgba(27,23,19,0.05)] backdrop-blur-md sm:p-7 md:p-8"
            >
              {/* FORM HEADER */}
              <div className="mb-7 border-b border-[#1b1713]/10 pb-7">
                <p className="text-sm font-semibold text-[#1b1713]/45">
                  Project Inquiry
                </p>

                <h2 className="mt-2 font-serif text-[2.15rem] font-light leading-[1.03] tracking-[-0.025em] sm:text-[2.7rem]">
                  Tell us about{" "}
                  <span className="italic text-[#1b1713]/50">
                    your project.
                  </span>
                </h2>

                <p className="mt-3 max-w-xl text-[14px] leading-6 text-[#1b1713]/50">
                  A few details will help us understand what you&apos;re
                  looking for before we get in touch.
                </p>
              </div>

              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="hello@business.com"
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
              </div>

              {/* BUSINESS */}
              <div className="mt-4">
                <label
                  htmlFor="business"
                  className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                >
                  Business or brand
                </label>

                <input
                  id="business"
                  type="text"
                  name="business"
                  placeholder="Your business name"
                  autoComplete="organization"
                  disabled={isSubmitting}
                  value={formData.business}
                  onChange={(event) =>
                    updateField("business", event.target.value)
                  }
                  className={inputStyle}
                />
              </div>

              {/* SERVICE */}
              <div className="mt-4">
                <label
                  htmlFor="service"
                  className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                >
                  What do you need?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  disabled={isSubmitting}
                  value={formData.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className={`${inputStyle} appearance-none text-[#1b1713]/65`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="New website">
                    New website
                  </option>

                  <option value="Ecommerce store">
                    E-commerce store
                  </option>

                  <option value="Website redesign">
                    Website redesign
                  </option>

                  <option value="Landing page">
                    Landing page
                  </option>

                  <option value="Admin dashboard">
                    Admin dashboard
                  </option>

                  <option value="Customer portal">
                    Customer portal
                  </option>

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

                  <option value="Not sure yet">
                    Not sure yet
                  </option>
                </select>
              </div>

              {/* BUDGET + TIMELINE */}
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                  >
                    Estimated budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    required
                    disabled={isSubmitting}
                    value={formData.budget}
                    onChange={(event) =>
                      updateField("budget", event.target.value)
                    }
                    className={`${inputStyle} appearance-none text-[#1b1713]/65`}
                  >
                    <option value="" disabled>
                      Select a range
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

                    <option value="$10,000+">
                      $10,000+
                    </option>

                    <option value="Let’s discuss">
                      Let&apos;s discuss
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                  >
                    Ideal timeline
                  </label>

                  <select
                    id="timeline"
                    name="timeline"
                    required
                    disabled={isSubmitting}
                    value={formData.timeline}
                    onChange={(event) =>
                      updateField("timeline", event.target.value)
                    }
                    className={`${inputStyle} appearance-none text-[#1b1713]/65`}
                  >
                    <option value="" disabled>
                      Select a timeline
                    </option>

                    <option value="Immediately">
                      Immediately
                    </option>

                    <option value="Within 1 month">
                      Within 1 month
                    </option>

                    <option value="1 - 3 months">
                      1–3 months
                    </option>

                    <option value="3+ months">
                      3+ months
                    </option>

                    <option value="Just exploring">
                      Just exploring
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-semibold text-[#1b1713]/65"
                >
                  Tell us about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="What are you looking to build? Tell us about your goals, current website, features you need, or anything else we should know."
                  rows={5}
                  required
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(event) =>
                    updateField("message", event.target.value)
                  }
                  className={`${inputStyle} resize-none`}
                />
              </div>

              {/* FEEDBACK */}
              {feedback ? (
                <div
                  role="status"
                  aria-live="polite"
                  className={`mt-5 rounded-xl border px-4 py-4 text-sm leading-6 ${
                    status === "success"
                      ? "border-green-700/15 bg-green-50/80 text-green-900"
                      : "border-red-700/15 bg-red-50/80 text-red-900"
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

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-4 text-sm font-medium text-white shadow-[0_14px_35px_rgba(27,23,19,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    Sending
                    <Loader2
                      size={16}
                      strokeWidth={1.7}
                      className="animate-spin"
                    />
                  </>
                ) : (
                  <>
                    Request a Proposal
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

              <p className="mt-4 text-center text-[12px] leading-5 text-[#1b1713]/35">
                No pressure. Tell us what you&apos;re considering and
                we&apos;ll help you determine the next step.
              </p>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}