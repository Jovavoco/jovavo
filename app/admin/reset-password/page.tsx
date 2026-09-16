"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [checkingSession, setCheckingSession] = useState(true);
  const [validSession, setValidSession] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function checkRecoverySession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!mounted) return;

      if (session) {
        setValidSession(true);
      }

      setCheckingSession(false);
    }

    checkRecoverySession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) return;

      if (event === "PASSWORD_RECOVERY" || session) {
        setValidSession(true);
        setCheckingSession(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);

    setTimeout(() => {
      router.replace("/admin/login");
    }, 1500);
  }

  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef]">
        <Loader2 size={24} className="animate-spin text-[#1b1713]" />
      </main>
    );
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
              <LockKeyhole
                size={19}
                strokeWidth={1.5}
                className="text-[#1b1713]"
              />
            </div>

            <h1 className="mt-5 font-serif text-3xl text-[#1b1713]">
              Create New Password
            </h1>

            <p className="mt-2 text-sm leading-6 text-[#706960]">
              Choose a new password for your Jovavo admin account.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-8">
            {success ? (
              <div className="py-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ece3]">
                  <CheckCircle2
                    size={22}
                    strokeWidth={1.5}
                    className="text-[#1b1713]"
                  />
                </div>

                <h2 className="mt-5 font-serif text-2xl text-[#1b1713]">
                  Password Updated
                </h2>

                <p className="mt-3 text-sm text-[#706960]">
                  Taking you back to the admin login...
                </p>
              </div>
            ) : !validSession ? (
              <div className="py-4 text-center">
                <h2 className="font-serif text-2xl text-[#1b1713]">
                  Reset Link Invalid
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#706960]">
                  This password reset link is invalid or has expired. Request a
                  new link to continue.
                </p>

                <Link
                  href="/admin/forgot-password"
                  className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#1b1713] px-5 text-sm font-medium text-white"
                >
                  Request New Link
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                  >
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 pr-12 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8279]"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
                  >
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 pr-12 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((current) => !current)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8a8279]"
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

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
                      Updating...
                    </>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}