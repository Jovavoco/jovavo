"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Mail,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const redirectTo = `${window.location.origin}/admin/reset-password`;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full">
          <div className="mb-10 text-center">
            <Link
              href="/"
              className="font-serif text-[24px] tracking-[0.18em] text-[#1b1713]"
            >
              JOVAVO
            </Link>

            <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#ded7cd] bg-[#fffdf9]">
              <Mail
                size={19}
                strokeWidth={1.5}
                className="text-[#1b1713]"
              />
            </div>

            <h1 className="mt-5 font-serif text-3xl text-[#1b1713]">
              Reset Password
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#706960]">
              Enter your admin email and we&apos;ll send you a secure
              password reset link.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-8">
            {sent ? (
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ece3]">
                  <CheckCircle2
                    size={21}
                    strokeWidth={1.5}
                    className="text-[#1b1713]"
                  />
                </div>

                <h2 className="mt-5 font-serif text-2xl text-[#1b1713]">
                  Check your email
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#706960]">
                  If an admin account exists for that email, you&apos;ll
                  receive a password reset link shortly.
                </p>

                <Link
                  href="/admin/login"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#1b1713]"
                >
                  <ArrowLeft size={15} />
                  Back to login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                >
                  Admin Email
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@jovavo.com"
                  className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                />

                {error && (
                  <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Reset Link"
                  )}
                </button>

                <Link
                  href="/admin/login"
                  className="mt-6 flex items-center justify-center gap-2 text-sm text-[#706960] transition hover:text-[#1b1713]"
                >
                  <ArrowLeft size={15} />
                  Back to login
                </Link>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-[#8a8279]">
            Private Jovavo administration
          </p>
        </div>
      </div>
    </main>
  );
}