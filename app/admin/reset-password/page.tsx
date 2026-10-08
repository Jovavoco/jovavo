"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Loader2,
  LockKeyhole,
} from "lucide-react";

export default function AdminResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [checkingSession, setCheckingSession] = useState(true);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /* =======================================================
     CHECK PASSWORD RECOVERY SESSION
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!mounted) {
          return;
        }

        /*
         * Supabase normally establishes a recovery session
         * before or while loading this page.
         *
         * We don't immediately reject a missing session because
         * the auth event can arrive just after the initial render.
         */
        if (session) {
          setCheckingSession(false);
          return;
        }

        const timeout = window.setTimeout(() => {
          if (mounted) {
            setCheckingSession(false);
          }
        }, 1200);

        return () => {
          window.clearTimeout(timeout);
        };
      } catch (err) {
        console.error("Unable to check recovery session:", err);

        if (mounted) {
          setCheckingSession(false);
        }
      }
    }

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (!mounted) {
        return;
      }

      if (
        event === "PASSWORD_RECOVERY" ||
        event === "SIGNED_IN" ||
        session
      ) {
        setCheckingSession(false);
        setError("");
      }
    });

    checkSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  /* =======================================================
     UPDATE PASSWORD
  ======================================================= */

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) {
      return;
    }

    setError("");

    if (password.length < 8) {
      setError("Your password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      /*
       * Make sure a recovery session exists before changing
       * the password.
       */
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Recovery session error:", sessionError);
      }

      if (!session) {
        setError(
          "This password reset link is invalid or has expired. Please request a new reset link."
        );
        return;
      }

      const { error: updateError } = await supabase.auth.updateUser({
        password,
      });

      if (updateError) {
        console.error("Password update error:", updateError);

        setError(updateError.message);
        return;
      }

      setSuccess(true);
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error("Password reset error:", err);

      setError(
        "Something went wrong while updating your password. Please request a new reset link and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (checkingSession) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-5 py-10">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center justify-center">
          <div className="text-center">
            <Loader2
              size={24}
              className="mx-auto animate-spin text-[#1b1713]"
            />

            <p className="mt-4 text-sm text-[#706960]">
              Verifying reset link...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     SUCCESS
  ======================================================= */

  if (success) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-5 py-10">
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
          <div className="w-full">
            <div className="mb-10 text-center">
              <a
                href="/"
                className="font-serif text-[24px] tracking-[0.18em] text-[#1b1713]"
              >
                JOVAVO
              </a>
            </div>

            <div className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-7 text-center shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-9">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1b1713] text-white">
                <Check size={19} />
              </div>

              <h1 className="mt-5 font-serif text-3xl text-[#1b1713]">
                Password Updated
              </h1>

              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#706960]">
                Your Jovavo admin password has been changed successfully.
                You can now sign in using your new password.
              </p>

              <button
                type="button"
                onClick={async () => {
                  /*
                   * End the temporary recovery session so the
                   * user goes through the normal admin login.
                   */
                  await supabase.auth.signOut();

                  router.replace("/admin/login");
                  router.refresh();
                }}
                className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923]"
              >
                Go to Admin Login
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="mt-6 text-center text-xs text-[#8a8279]">
              Private Jovavo administration
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     RESET FORM
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#f8f5ef] px-5 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <div className="w-full">
          <div className="mb-10 text-center">
            <a
              href="/"
              className="font-serif text-[24px] tracking-[0.18em] text-[#1b1713]"
            >
              JOVAVO
            </a>

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

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-[#e2dbd1] bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(27,23,19,0.05)] sm:p-8"
          >
            <div>
              <label
                htmlFor="new-password"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
              >
                New Password
              </label>

              <div className="relative">
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a new password"
                  className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 pr-12 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-[#817970] transition hover:text-[#1b1713]"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="confirm-password"
                className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[#706960]"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Enter your new password again"
                  className="h-12 w-full rounded-xl border border-[#ddd5ca] bg-white px-4 pr-12 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((current) => !current)
                  }
                  className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-[#817970] transition hover:text-[#1b1713]"
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <p className="mt-3 text-xs leading-5 text-[#9a9289]">
              Use at least 8 characters.
            </p>

            {error && (
              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">
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
                  Updating Password...
                </>
              ) : (
                <>
                  Update Password
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-[#8a8279]">
            Private Jovavo administration
          </p>
        </div>
      </div>
    </main>
  );
}