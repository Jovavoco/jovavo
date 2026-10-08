"use client";

import Link from "next/link";
import Script from "next/script";
import {
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Loader2,
  ShieldCheck,
  Video,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          appearance?: "always" | "execute" | "interaction-only";
        }
      ) => string;

      reset: (widgetId?: string) => void;
      remove?: (widgetId: string) => void;
    };
  }
}

type BookingForm = {
  name: string;
  email: string;
  business: string;
  phone: string;
  topic: string;
};

type BookingStatus =
  | "idle"
  | "submitting"
  | "pending"
  | "error";

type AvailabilitySlot = {
  value: string;
  label: string;
};

type AvailabilityResponse = {
  success: boolean;
  date?: string;
  available?: boolean;
  timezone?: string;
  consultationLengthMinutes?: number;
  bufferMinutes?: number;
  slots?: AvailabilitySlot[];
  reason?: string;
  error?: string;
};

/* =========================================================
   CONSTANTS
========================================================= */

const WEEKDAYS = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const initialForm: BookingForm = {
  name: "",
  email: "",
  business: "",
  phone: "",
  topic: "",
};

const inputStyle =
  "w-full rounded-xl border border-[#1b1713]/10 bg-[#fffdf9] px-4 py-3.5 text-[14px] text-[#1b1713] outline-none transition-all duration-200 placeholder:text-[#1b1713]/30 focus:border-[#1b1713]/25 focus:bg-white focus:shadow-[0_0_0_3px_rgba(27,23,19,0.03)] disabled:cursor-not-allowed disabled:opacity-60 sm:px-5 sm:py-4";

/* =========================================================
   HELPERS
========================================================= */

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function sameDay(a: Date | null, b: Date) {
  if (!a) return false;

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateForAPI(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatSelectedDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function formatTimeLabel(time: string) {
  if (!time) return "";

  const [hourString, minuteString] = time.split(":");

  const hour = Number(hourString);
  const minute = Number(minuteString);

  const period = hour >= 12 ? "PM" : "AM";

  const displayHour =
    hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;

  return `${displayHour}:${String(minute).padStart(2, "0")} ${period}`;
}

/* =========================================================
   PAGE
========================================================= */

export default function ConsultationPage() {
  const [today] = useState(() => startOfDay(new Date()));

  const [visibleMonth, setVisibleMonth] = useState(
    () =>
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
  );

  const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);

  const [selectedTime, setSelectedTime] = useState("");

  const [availableSlots, setAvailableSlots] =
    useState<AvailabilitySlot[]>([]);

  const [availabilityLoading, setAvailabilityLoading] =
    useState(false);

  const [availabilityError, setAvailabilityError] =
    useState("");

  const [consultationLength, setConsultationLength] =
    useState(30);

  const [consultationTimezone, setConsultationTimezone] =
    useState("America/New_York");

  const [step, setStep] = useState<1 | 2>(1);

  const [form, setForm] =
    useState<BookingForm>(initialForm);

  const [status, setStatus] =
    useState<BookingStatus>("idle");

  const [feedback, setFeedback] = useState("");

  const [turnstileToken, setTurnstileToken] =
    useState("");

  const [turnstileReady, setTurnstileReady] =
    useState(false);

  const turnstileContainerRef =
    useRef<HTMLDivElement | null>(null);

  const turnstileWidgetId =
    useRef<string | null>(null);

  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  /* =========================================================
     CALENDAR
  ========================================================= */

  const calendarDays = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const cells: Array<Date | null> = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      cells.push(null);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
      cells.push(new Date(year, month, day));
    }

    while (cells.length % 7 !== 0) {
      cells.push(null);
    }

    return cells;
  }, [visibleMonth]);

  function isAvailableDate(date: Date) {
    const normalized = startOfDay(date);

    return normalized >= today;
  }

  function previousMonth() {
    const previous = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth() - 1,
      1
    );

    const currentMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    if (previous < currentMonth) {
      return;
    }

    setVisibleMonth(previous);
  }

  function nextMonth() {
    setVisibleMonth(
      new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth() + 1,
        1
      )
    );
  }

  const canGoBackMonth =
    visibleMonth >
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

  /* =========================================================
     LIVE AVAILABILITY
  ========================================================= */

  async function loadAvailability(date: Date) {
    const dateString = formatDateForAPI(date);

    setAvailabilityLoading(true);
    setAvailabilityError("");
    setAvailableSlots([]);
    setSelectedTime("");

    try {
      const response = await fetch(
        `/api/consultations/availability?date=${encodeURIComponent(
          dateString
        )}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const result =
        (await response.json()) as AvailabilityResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Availability could not be loaded."
        );
      }

      setAvailableSlots(result.slots ?? []);

      if (result.consultationLengthMinutes) {
        setConsultationLength(
          result.consultationLengthMinutes
        );
      }

      if (result.timezone) {
        setConsultationTimezone(result.timezone);
      }
    } catch (error) {
      console.error(
        "Unable to load consultation availability:",
        error
      );

      setAvailableSlots([]);

      setAvailabilityError(
        error instanceof Error
          ? error.message
          : "Availability could not be loaded."
      );
    } finally {
      setAvailabilityLoading(false);
    }
  }

  /* =========================================================
     TURNSTILE
  ========================================================= */

  useEffect(() => {
    if (
      step !== 2 ||
      !turnstileReady ||
      !siteKey ||
      !turnstileContainerRef.current ||
      !window.turnstile
    ) {
      return;
    }

    if (turnstileWidgetId.current) {
      return;
    }

    turnstileWidgetId.current =
      window.turnstile.render(
        turnstileContainerRef.current,
        {
          sitekey: siteKey,

          theme: "light",

          appearance: "interaction-only",

          callback: (token: string) => {
            setTurnstileToken(token);
            setFeedback("");
          },

          "expired-callback": () => {
            setTurnstileToken("");
          },

          "error-callback": () => {
            setTurnstileToken("");

            setFeedback(
              "Security verification could not load. Please refresh and try again."
            );
          },
        }
      );

    return () => {
      if (
        turnstileWidgetId.current &&
        window.turnstile?.remove
      ) {
        window.turnstile.remove(
          turnstileWidgetId.current
        );

        turnstileWidgetId.current = null;
      }
    };
  }, [step, turnstileReady, siteKey]);

  function resetTurnstile() {
    setTurnstileToken("");

    if (
      turnstileWidgetId.current &&
      window.turnstile
    ) {
      window.turnstile.reset(
        turnstileWidgetId.current
      );
    }
  }

  /* =========================================================
     FORM
  ========================================================= */

  function updateField(
    field: keyof BookingForm,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function continueToDetails() {
    setFeedback("");

    if (!selectedDate) {
      setFeedback(
        "Please select a consultation date."
      );

      return;
    }

    if (availabilityLoading) {
      setFeedback(
        "Please wait while we check availability."
      );

      return;
    }

    if (!selectedTime) {
      setFeedback(
        "Please select an available consultation time."
      );

      return;
    }

    const stillAvailable =
      availableSlots.some(
        (slot) => slot.value === selectedTime
      );

    if (!stillAvailable) {
      setSelectedTime("");

      setFeedback(
        "That time is no longer available. Please choose another time."
      );

      void loadAvailability(selectedDate);

      return;
    }

    setStep(2);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setFeedback("");

    if (!selectedDate || !selectedTime) {
      setStep(1);

      setFeedback(
        "Please choose your consultation date and time."
      );

      return;
    }

    if (!turnstileToken) {
      setFeedback(
        "Please complete the security verification before booking."
      );

      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(
        "/api/consultations/book",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            business: form.business,
            topic: form.topic,

            consultationDate:
              formatDateForAPI(selectedDate),

            consultationTime: selectedTime,

            turnstileToken,
          }),
        }
      );

      const result =
        (await response.json()) as {
          success?: boolean;
          message?: string;
          error?: string;
          expiresInMinutes?: number;
        };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Your consultation could not be reserved."
        );
      }

      setStatus("pending");

      setFeedback(
        result.message ||
          "Your time is being held. Check your email to confirm your consultation."
      );
    } catch (error) {
      setStatus("error");

      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      resetTurnstile();

      if (selectedDate) {
        void loadAvailability(selectedDate);
      }
    }
  }

  const isSubmitting = status === "submitting";

  /* =========================================================
     PENDING VERIFICATION
  ========================================================= */

  if (status === "pending" && selectedDate) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-5 pb-20 pt-[120px] text-[#1b1713] sm:px-8 md:pt-[132px]">
        <div className="mx-auto flex min-h-[75vh] max-w-[760px] items-center justify-center">
          <div className="w-full rounded-[32px] border border-[#1b1713]/10 bg-[#fffdf9] px-6 py-12 text-center shadow-[0_24px_80px_rgba(27,23,19,0.05)] sm:px-10 sm:py-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1b1713] text-white">
              <Check
                size={22}
                strokeWidth={1.5}
              />
            </div>

            <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1b1713]/40">
              One More Step
            </p>

            <h1 className="mx-auto mt-3 max-w-xl font-serif text-[3rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[4rem]">
              Check your{" "}
              <span className="italic text-[#1b1713]/45">
                email.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-7 text-[#1b1713]/55">
              We&apos;ve sent a confirmation link to{" "}
              <span className="font-medium text-[#1b1713]">
                {form.email}
              </span>
              . Your selected consultation time is being held
              for 20 minutes.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-2xl border border-[#1b1713]/10 bg-[#f8f5ef] px-5 py-5 text-left">
              <div className="flex gap-4">
                <CalendarDays
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#1b1713]/45"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b1713]/35">
                    Date
                  </p>

                  <p className="mt-1 text-[14px] font-medium">
                    {formatSelectedDate(selectedDate)}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-4 border-t border-[#1b1713]/10 pt-5">
                <Clock3
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#1b1713]/45"
                />

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#1b1713]/35">
                    Time
                  </p>

                  <p className="mt-1 text-[14px] font-medium">
                    {formatTimeLabel(selectedTime)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-7 flex max-w-md items-start gap-3 rounded-xl bg-[#1b1713]/[0.035] px-4 py-4 text-left">
              <ShieldCheck
                size={18}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0"
              />

              <p className="text-[13px] leading-6 text-[#1b1713]/55">
                Your consultation is{" "}
                <strong className="font-medium text-[#1b1713]">
                  not confirmed yet.
                </strong>{" "}
                Click the confirmation link in your email
                before the 20-minute hold expires.
              </p>
            </div>

            <Link
              href="/"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#1b1713] px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-[#302a24]"
            >
              Back to Jovavo

              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
              />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     MAIN PAGE
  ========================================================= */

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setTurnstileReady(true)}
      />

      <main className="min-h-screen bg-[#f8f5ef] text-[#1b1713]">
        {/* =====================================================
            CONTENT

            NO LOCAL HEADER HERE.
            GLOBAL NAVBAR FROM THE LAYOUT IS USED INSTEAD.
        ===================================================== */}

        <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-[120px] sm:px-8 md:px-12 md:pt-[132px] lg:px-16 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            {/* =================================================
                LEFT
            ================================================= */}

            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1b1713] text-white">
                <CalendarDays
                  size={19}
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#1b1713]/40">
                Book a Consultation
              </p>

              <h1 className="mt-4 max-w-[650px] font-serif text-[3.5rem] font-light leading-[0.94] tracking-[-0.04em] sm:text-[4.5rem] lg:text-[5.1rem]">
                Let&apos;s talk
                <br />
                about your{" "}
                <span className="italic text-[#1b1713]/45">
                  business.
                </span>
              </h1>

              <p className="mt-7 max-w-[500px] text-[15px] leading-7 text-[#1b1713]/55">
                Book a complimentary{" "}
                {consultationLength}-minute conversation to
                discuss your business, website, goals, and
                where Jovavo may be able to help.
              </p>

              <div className="mt-10 max-w-[430px] border-y border-[#1b1713]/10">
                <InfoRow
                  icon={
                    <Clock3
                      size={17}
                      strokeWidth={1.5}
                    />
                  }
                  label="Duration"
                  value={`${consultationLength} minutes`}
                />

                <InfoRow
                  icon={
                    <Video
                      size={17}
                      strokeWidth={1.5}
                    />
                  }
                  label="Meeting"
                  value="Virtual consultation"
                />

                <InfoRow
                  icon={
                    <Check
                      size={17}
                      strokeWidth={1.5}
                    />
                  }
                  label="Cost"
                  value="Complimentary"
                  last
                />
              </div>

              <div className="mt-9 max-w-[430px] rounded-2xl border border-[#1b1713]/10 bg-[#fffdf9] px-5 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#1b1713]/35">
                  Already know what you need?
                </p>

                <p className="mt-2 text-[13px] leading-6 text-[#1b1713]/55">
                  Skip the consultation and tell us about your
                  project directly.
                </p>

                <Link
                  href="/contact"
                  className="group mt-4 inline-flex items-center gap-2 text-[12px] font-semibold"
                >
                  Start a Project

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div>
              {/* STEP HEADER */}

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                      step === 1
                        ? "bg-[#1b1713] text-white"
                        : "bg-[#1b1713]/10 text-[#1b1713]"
                    }`}
                  >
                    1
                  </div>

                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b1713]/45">
                    Date & Time
                  </span>

                  <div className="h-px w-7 bg-[#1b1713]/10" />

                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                      step === 2
                        ? "bg-[#1b1713] text-white"
                        : "bg-[#1b1713]/10 text-[#1b1713]/40"
                    }`}
                  >
                    2
                  </div>

                  <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b1713]/45 sm:inline">
                    Your Details
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#1b1713]/10 bg-[#fffdf9] shadow-[0_24px_80px_rgba(27,23,19,0.035)]">
                {/* =================================================
                    STEP 1
                ================================================= */}

                {step === 1 ? (
                  <div className="p-5 sm:p-7 md:p-9">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1b1713]/35">
                        Step 01
                      </p>

                      <h2 className="mt-2 font-serif text-[2rem] font-light tracking-[-0.025em] sm:text-[2.5rem]">
                        Choose a date and time.
                      </h2>

                      <p className="mt-2 text-[13px] leading-6 text-[#1b1713]/45">
                        Select a date to view live availability.
                      </p>
                    </div>

                    {/* MONTH */}

                    <div className="mt-8 flex items-center justify-between border-b border-[#1b1713]/10 pb-5">
                      <button
                        type="button"
                        onClick={previousMonth}
                        disabled={!canGoBackMonth}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1b1713]/10 transition hover:bg-[#f8f5ef] disabled:cursor-not-allowed disabled:opacity-25"
                        aria-label="Previous month"
                      >
                        <ChevronLeft
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>

                      <p className="font-serif text-[20px]">
                        {MONTHS[visibleMonth.getMonth()]}{" "}
                        {visibleMonth.getFullYear()}
                      </p>

                      <button
                        type="button"
                        onClick={nextMonth}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1b1713]/10 transition hover:bg-[#f8f5ef]"
                        aria-label="Next month"
                      >
                        <ChevronRight
                          size={16}
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>

                    {/* WEEKDAYS */}

                    <div className="mt-5 grid grid-cols-7">
                      {WEEKDAYS.map((day) => (
                        <div
                          key={day}
                          className="py-2 text-center text-[9px] font-semibold tracking-[0.14em] text-[#1b1713]/30"
                        >
                          {day}
                        </div>
                      ))}
                    </div>

                    {/* DAYS */}

                    <div className="mt-1 grid grid-cols-7 gap-1 sm:gap-2">
                      {calendarDays.map((date, index) => {
                        if (!date) {
                          return (
                            <div
                              key={`empty-${index}`}
                              className="aspect-square"
                            />
                          );
                        }

                        const available =
                          isAvailableDate(date);

                        const selected =
                          sameDay(selectedDate, date);

                        const isToday =
                          sameDay(today, date);

                        return (
                          <button
                            key={date.toISOString()}
                            type="button"
                            disabled={
                              !available ||
                              availabilityLoading
                            }
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedTime("");
                              setFeedback("");

                              void loadAvailability(date);
                            }}
                            className={`relative flex aspect-square items-center justify-center rounded-xl text-[12px] transition-all sm:text-[13px] ${
                              selected
                                ? "bg-[#1b1713] font-medium text-white shadow-[0_10px_25px_rgba(27,23,19,0.14)]"
                                : available
                                  ? "text-[#1b1713] hover:bg-[#f1ece3]"
                                  : "cursor-not-allowed text-[#1b1713]/20"
                            }`}
                          >
                            {date.getDate()}

                            {isToday && !selected ? (
                              <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#1b1713]/35" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>

                    {/* TIMES */}

                    <div className="mt-9 border-t border-[#1b1713]/10 pt-8">
                      <div className="flex items-center gap-3">
                        <Clock3
                          size={17}
                          strokeWidth={1.5}
                          className="text-[#1b1713]/45"
                        />

                        <div>
                          <p className="text-[12px] font-semibold">
                            Available times
                          </p>

                          <p className="mt-0.5 text-[11px] text-[#1b1713]/40">
                            {!selectedDate
                              ? "Select a date first, then choose a time."
                              : availabilityLoading
                                ? "Checking live availability..."
                                : `${consultationLength}-minute consultation · ${consultationTimezone}`}
                          </p>
                        </div>
                      </div>

                      {!selectedDate ? (
                        <div className="mt-5 rounded-2xl border border-dashed border-[#1b1713]/10 bg-[#f8f5ef]/60 px-5 py-8 text-center">
                          <CalendarDays
                            size={20}
                            strokeWidth={1.4}
                            className="mx-auto text-[#1b1713]/25"
                          />

                          <p className="mt-3 text-[12px] text-[#1b1713]/40">
                            Choose a date above to see available
                            consultation times.
                          </p>
                        </div>
                      ) : availabilityLoading ? (
                        <div className="mt-5 flex min-h-[110px] items-center justify-center rounded-2xl bg-[#f8f5ef]">
                          <div className="flex items-center gap-3 text-[#1b1713]/45">
                            <Loader2
                              size={17}
                              strokeWidth={1.5}
                              className="animate-spin"
                            />

                            <span className="text-[12px]">
                              Checking availability...
                            </span>
                          </div>
                        </div>
                      ) : availabilityError ? (
                        <div className="mt-5 rounded-xl border border-red-700/10 bg-red-50 px-4 py-4">
                          <p className="text-[12px] leading-5 text-red-900">
                            {availabilityError}
                          </p>

                          <button
                            type="button"
                            onClick={() => {
                              if (selectedDate) {
                                void loadAvailability(
                                  selectedDate
                                );
                              }
                            }}
                            className="mt-3 text-[11px] font-semibold underline underline-offset-4"
                          >
                            Try again
                          </button>
                        </div>
                      ) : availableSlots.length === 0 ? (
                        <div className="mt-5 rounded-2xl border border-[#1b1713]/10 bg-[#f8f5ef] px-5 py-7 text-center">
                          <Clock3
                            size={20}
                            strokeWidth={1.4}
                            className="mx-auto text-[#1b1713]/25"
                          />

                          <p className="mt-3 text-[13px] font-medium">
                            No times available
                          </p>

                          <p className="mx-auto mt-1.5 max-w-sm text-[11px] leading-5 text-[#1b1713]/40">
                            There are no consultation times
                            available for this date. Please choose
                            another day.
                          </p>
                        </div>
                      ) : (
                        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {availableSlots.map((slot) => {
                            const selected =
                              selectedTime === slot.value;

                            return (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => {
                                  setSelectedTime(slot.value);
                                  setFeedback("");
                                }}
                                className={`rounded-xl border px-3 py-3.5 text-[12px] font-medium transition ${
                                  selected
                                    ? "border-[#1b1713] bg-[#1b1713] text-white"
                                    : "border-[#1b1713]/10 bg-white text-[#1b1713]/65 hover:border-[#1b1713]/25 hover:bg-[#f8f5ef]"
                                }`}
                              >
                                {slot.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* SELECTED */}

                    {selectedDate && selectedTime ? (
                      <div className="mt-7 rounded-2xl bg-[#f8f5ef] px-5 py-4">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#1b1713]/35">
                          Your Selection
                        </p>

                        <p className="mt-1.5 text-[13px] font-medium">
                          {formatSelectedDate(selectedDate)} ·{" "}
                          {formatTimeLabel(selectedTime)}
                        </p>
                      </div>
                    ) : null}

                    {feedback ? (
                      <p className="mt-5 rounded-xl border border-red-700/10 bg-red-50 px-4 py-3 text-[12px] leading-5 text-red-900">
                        {feedback}
                      </p>
                    ) : null}

                    <button
                      type="button"
                      onClick={continueToDetails}
                      disabled={
                        !selectedDate ||
                        !selectedTime ||
                        availabilityLoading
                      }
                      className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b1713] px-7 py-4 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302a24] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0"
                    >
                      Continue

                      <ArrowRight
                        size={15}
                        strokeWidth={1.6}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                ) : null}

                {/* =================================================
                    STEP 2
                ================================================= */}

                {step === 2 ? (
                  <form
                    onSubmit={handleSubmit}
                    className="p-5 sm:p-7 md:p-9"
                  >
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1b1713]/35">
                        Step 02
                      </p>

                      <h2 className="mt-2 font-serif text-[2rem] font-light tracking-[-0.025em] sm:text-[2.5rem]">
                        Tell us about yourself.
                      </h2>

                      <p className="mt-2 text-[13px] leading-6 text-[#1b1713]/45">
                        Add a few details so we can make the
                        conversation useful from the start.
                      </p>
                    </div>

                    {/* APPOINTMENT */}

                    {selectedDate ? (
                      <div className="mb-7 mt-8 flex items-start justify-between gap-5 rounded-2xl bg-[#f8f5ef] px-5 py-4">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-[#1b1713]/35">
                            Consultation
                          </p>

                          <p className="mt-1.5 text-[13px] font-medium">
                            {formatSelectedDate(selectedDate)}
                          </p>

                          <p className="mt-0.5 text-[12px] text-[#1b1713]/45">
                            {formatTimeLabel(selectedTime)} ·{" "}
                            {consultationLength} minutes
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setStep(1);
                            setFeedback("");

                            void loadAvailability(
                              selectedDate
                            );
                          }}
                          className="text-[11px] font-semibold underline decoration-[#1b1713]/20 underline-offset-4 transition hover:decoration-[#1b1713]"
                        >
                          Change
                        </button>
                      </div>
                    ) : null}

                    {/* NAME + EMAIL */}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Your name"
                        required
                      >
                        <input
                          type="text"
                          required
                          autoComplete="name"
                          placeholder="Jane Smith"
                          value={form.name}
                          disabled={isSubmitting}
                          onChange={(event) =>
                            updateField(
                              "name",
                              event.target.value
                            )
                          }
                          className={inputStyle}
                        />
                      </Field>

                      <Field
                        label="Email address"
                        required
                      >
                        <input
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="hello@business.com"
                          value={form.email}
                          disabled={isSubmitting}
                          onChange={(event) =>
                            updateField(
                              "email",
                              event.target.value
                            )
                          }
                          className={inputStyle}
                        />
                      </Field>
                    </div>

                    {/* BUSINESS + PHONE */}

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <Field label="Business name">
                        <input
                          type="text"
                          autoComplete="organization"
                          placeholder="Your business"
                          value={form.business}
                          disabled={isSubmitting}
                          onChange={(event) =>
                            updateField(
                              "business",
                              event.target.value
                            )
                          }
                          className={inputStyle}
                        />
                      </Field>

                      <Field label="Phone number">
                        <input
                          type="tel"
                          autoComplete="tel"
                          placeholder="(555) 555-5555"
                          value={form.phone}
                          disabled={isSubmitting}
                          onChange={(event) =>
                            updateField(
                              "phone",
                              event.target.value
                            )
                          }
                          className={inputStyle}
                        />
                      </Field>
                    </div>

                    {/* PROJECT */}

                    <div className="mt-4">
                      <Field
                        label="What would you like to discuss?"
                        required
                      >
                        <textarea
                          required
                          rows={6}
                          placeholder="Tell us a little about your business, what you're looking to build, and what you'd like help with."
                          value={form.topic}
                          disabled={isSubmitting}
                          onChange={(event) =>
                            updateField(
                              "topic",
                              event.target.value
                            )
                          }
                          className={`${inputStyle} resize-none`}
                        />
                      </Field>
                    </div>

                    {/* SECURITY */}

                    <div className="mt-6 rounded-2xl border border-[#1b1713]/10 bg-[#f8f5ef]/65 px-4 py-4 sm:px-5">
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          size={18}
                          strokeWidth={1.5}
                          className="mt-0.5 shrink-0 text-[#1b1713]/45"
                        />

                        <div className="min-w-0 flex-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1b1713]/45">
                            Security Verification
                          </p>

                          <p className="mt-1 text-[11px] leading-5 text-[#1b1713]/40">
                            This helps us prevent automated and
                            fraudulent consultation requests.
                          </p>

                          <div
                            ref={turnstileContainerRef}
                            className="mt-3 min-h-[1px]"
                          />
                        </div>
                      </div>
                    </div>

                    {/* FEEDBACK */}

                    {feedback ? (
                      <div
                        className={`mt-5 rounded-xl border px-4 py-3 text-[12px] leading-5 ${
                          status === "error"
                            ? "border-red-700/10 bg-red-50 text-red-900"
                            : "border-[#1b1713]/10 bg-[#f8f5ef] text-[#1b1713]/65"
                        }`}
                      >
                        {feedback}
                      </div>
                    ) : null}

                    {/* ACTIONS */}

                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row">
                      <button
                        type="button"
                        disabled={isSubmitting}
                        onClick={() => {
                          setStep(1);
                          setFeedback("");

                          if (selectedDate) {
                            void loadAvailability(
                              selectedDate
                            );
                          }
                        }}
                        className="flex items-center justify-center rounded-full border border-[#1b1713]/10 px-7 py-4 text-[12px] font-medium text-[#1b1713]/60 transition hover:border-[#1b1713]/20 hover:bg-[#f8f5ef] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-7 py-4 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#302a24] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              size={15}
                              strokeWidth={1.6}
                              className="animate-spin"
                            />

                            Reserving...
                          </>
                        ) : (
                          <>
                            Reserve Consultation

                            <ArrowUpRight
                              size={15}
                              strokeWidth={1.6}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="mt-5 text-center text-[10px] leading-5 text-[#1b1713]/35">
                      Your consultation is not confirmed until
                      you click the confirmation link sent to
                      your email.
                    </p>
                  </form>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <section className="border-t border-[#1b1713]/10">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:px-12 lg:px-16">
            <BottomInfo
              number="01"
              title="Choose a time"
              description="Select an available consultation date and time that works for you."
            />

            <BottomInfo
              number="02"
              title="Tell us about your goals"
              description="Share a few details about your business and what you're looking to accomplish."
            />

            <BottomInfo
              number="03"
              title="Meet with us"
              description="We'll use the consultation to understand your needs and talk through the best next steps."
            />
          </div>
        </section>

        {/* =====================================================
            DARK CTA
        ===================================================== */}

        <section className="bg-[#1b1713] text-white">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-end md:justify-between md:px-12 lg:px-16 lg:py-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.23em] text-white/35">
                Questions before booking?
              </p>

              <h2 className="mt-4 max-w-[720px] font-serif text-[2.7rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4rem]">
                We&apos;re happy to{" "}
                <span className="italic text-white/45">
                  help.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-[11px] font-medium transition hover:border-white hover:bg-white hover:text-[#1b1713]"
            >
              Contact Jovavo

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#1b1713]/45">
        {label}

        {required ? (
          <span className="ml-1 text-[#1b1713]/30">
            *
          </span>
        ) : null}
      </span>

      {children}
    </label>
  );
}

/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-5 py-5 ${
        last ? "" : "border-b border-[#1b1713]/10"
      }`}
    >
      <div className="flex items-center gap-3 text-[#1b1713]/45">
        {icon}

        <span className="text-[11px] font-medium">
          {label}
        </span>
      </div>

      <span className="text-right text-[12px] font-medium text-[#1b1713]/70">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   BOTTOM INFO
========================================================= */

function BottomInfo({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-[9px] font-semibold tracking-[0.18em] text-[#1b1713]/30">
        {number}
      </p>

      <h3 className="mt-3 font-serif text-[1.55rem] font-light tracking-[-0.02em] text-[#1b1713]">
        {title}
      </h3>

      <p className="mt-3 max-w-sm text-[12px] leading-6 text-[#1b1713]/45">
        {description}
      </p>
    </div>
  );
}