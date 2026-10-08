"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Loader2,
  LockKeyhole,
  Mail,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotMode, setForgotMode] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [message, setMessage] =
    useState("");

  /* =======================================================
     SIGN IN
  ======================================================= */

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const {
        error: signInError,
      } =
        await supabase.auth.signInWithPassword(
          {
            email: email.trim(),
            password,
          }
        );

      if (signInError) {
        console.error(
          "Supabase login error:",
          signInError
        );

        setError(
          signInError.message
        );

        return;
      }

      const {
        data: isAdmin,
        error: adminError,
      } =
        await supabase.rpc(
          "is_admin"
        );

      if (
        adminError ||
        !isAdmin
      ) {
        await supabase.auth.signOut();

        setError(
          "This account does not have admin access."
        );

        return;
      }

      router.replace(
        "/admin"
      );

      router.refresh();
    } catch (err) {
      console.error(
        "Admin login error:",
        err
      );

      setError(
        "Something went wrong while signing in. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     PASSWORD RESET EMAIL
  ======================================================= */

  async function handleForgotPassword(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (loading) {
      return;
    }

    const normalizedEmail =
      email.trim();

    if (!normalizedEmail) {
      setError(
        "Enter your admin email address first."
      );

      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const redirectTo =
        `${window.location.origin}/admin/reset-password`;

      const {
        error: resetError,
      } =
        await supabase.auth.resetPasswordForEmail(
          normalizedEmail,
          {
            redirectTo,
          }
        );

      if (resetError) {
        console.error(
          "Supabase reset error:",
          resetError
        );

        setError(
          resetError.message
        );

        return;
      }

      setMessage(
        "Check your email for a secure password reset link."
      );
    } catch (err) {
      console.error(
        "Password reset error:",
        err
      );

      setError(
        "We couldn't send the password reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full">

          {/* HEADER */}

          <div className="mb-10 text-center">
            <a
              href="/"
              className="font-serif text-[24px] tracking-[0.18em] text-[#1b1713]"
            >
              JOVAVO
            </a>

            <div className="mx-auto mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#ded7cd] bg-[#fffdf9]">
              {forgotMode ? (
                <Mail
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#1b1713]"
                />
              ) : (
                <LockKeyhole
                  size={19}
                  strokeWidth={1.5}
                  className="text-[#1b1713]"
                />
              )}
            </div>

            <h1 className="mt-5 font-serif text-3xl text-[#1b1713]">
              {forgotMode
                ? "Reset Password"
                : "Admin Access"}
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#706960]">
              {forgotMode
                ? "Enter your admin email and we'll send you a secure reset link."
                : "Sign in to manage Jovavo prospects and projects."}
            </p>
          </div>

          {/* =================================================
              LOGIN
          ================================================= */}

          {!forgotMode ? (
            <form
              onSubmit={
                handleSubmit
              }
              className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  placeholder="you@jovavo.com"
                  className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                />
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <label
                    htmlFor="password"
                    className="block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      setForgotMode(
                        true
                      );

                      setError("");
                      setMessage("");
                    }}
                    className="text-[11px] text-[#706960] underline decoration-[#706960]/35 underline-offset-4 transition hover:text-[#1b1713]"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                />
              </div>

              {error && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={
                  loading
                }
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />

                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In

                    <ArrowRight
                      size={16}
                    />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* ===============================================
               FORGOT PASSWORD
            =============================================== */

            <form
              onSubmit={
                handleForgotPassword
              }
              className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-8"
            >
              {!message ? (
                <>
                  <div>
                    <label
                      htmlFor="reset-email"
                      className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                    >
                      Email
                    </label>

                    <input
                      id="reset-email"
                      type="email"
                      autoComplete="email"
                      required
                      value={
                        email
                      }
                      onChange={(
                        e
                      ) =>
                        setEmail(
                          e
                            .target
                            .value
                        )
                      }
                      placeholder="you@jovavo.com"
                      className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                    />
                  </div>

                  {error && (
                    <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={
                      loading
                    }
                    className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2
                          size={
                            16
                          }
                          className="animate-spin"
                        />

                        Sending...
                      </>
                    ) : (
                      <>
                        Send Reset Link

                        <ArrowRight
                          size={
                            16
                          }
                        />
                      </>
                    )}
                  </button>
                </>
              ) : (
                <div className="py-3 text-center">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#1b1713] text-white">
                    <Check
                      size={17}
                    />
                  </div>

                  <h2 className="mt-5 font-serif text-2xl text-[#1b1713]">
                    Check your email
                  </h2>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-[#706960]">
                    {message}
                  </p>

                  <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-[#9a9289]">
                    Open the newest
                    password reset email
                    and follow the link to
                    choose a new password.
                  </p>
                </div>
              )}

              <button
                type="button"
                disabled={
                  loading
                }
                onClick={() => {
                  setForgotMode(
                    false
                  );

                  setError("");
                  setMessage("");
                }}
                className="mx-auto mt-6 flex items-center gap-2 text-xs text-[#706960] transition hover:text-[#1b1713] disabled:opacity-40"
              >
                <ArrowLeft
                  size={14}
                />

                Back to sign in
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-xs text-[#8a8279]">
            Private Jovavo administration
          </p>
        </div>
      </div>
    </main>
  );
}