"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  business: string | null;
  topic: string | null;
  consultationDate: string;
  consultationTime: string;
  status: string;
  confirmedAt: string | null;
  cancelledAt: string | null;
};

type ManageResponse = {
  success: boolean;
  booking?: Booking;
  consultationLengthMinutes?: number;
  timezone?: string;
  error?: string;
};

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

type RescheduleResponse = {
  success: boolean;
  message?: string;
  booking?: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    business: string | null;
    topic: string | null;
    consultationDate: string;
    consultationTime: string;
    status: string;
  };
  rescheduleEmailSent?: boolean;
  error?: string;
};

/* =========================================================
   HELPERS
========================================================= */

function formatDateForAPI(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function parseLocalDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatLongDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parseLocalDate(value));
}

function formatShortDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parseLocalDate(value));
}

function formatWeekday(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(parseLocalDate(value));
}

function formatMonthDay(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(parseLocalDate(value));
}

function formatTime(value: string) {
  const match = value.match(/^(\d{1,2}):(\d{2})/);

  if (!match) {
    return value;
  }

  const hour = Number(match[1]);
  const minute = match[2];

  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${displayHour}:${minute} ${suffix}`;
}

function sameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function getTimezoneLabel(timezone: string) {
  if (timezone === "America/New_York") {
    return "Eastern Time";
  }

  return timezone;
}

function getTimezoneShortLabel(timezone: string) {
  if (timezone === "America/New_York") {
    return "ET";
  }

  return timezone;
}

/* =========================================================
   PAGE
========================================================= */

export default function ManageConsultationPage() {
  const params = useParams();

  const rawToken = params?.token;
  const token = Array.isArray(rawToken) ? rawToken[0] : rawToken;

  const rescheduleRef = useRef<HTMLDivElement | null>(null);

  /* =======================================================
     BOOKING
  ======================================================= */

  const [booking, setBooking] = useState<Booking | null>(null);
  const [consultationLength, setConsultationLength] = useState(30);
  const [timezone, setTimezone] = useState("America/New_York");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =======================================================
     RESCHEDULING
  ======================================================= */

  const [rescheduling, setRescheduling] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [slots, setSlots] = useState<AvailabilitySlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [availabilityMessage, setAvailabilityMessage] = useState("");
  const [submittingReschedule, setSubmittingReschedule] = useState(false);
  const [rescheduleError, setRescheduleError] = useState("");
  const [rescheduleSuccess, setRescheduleSuccess] = useState("");

  const [calendarMonth, setCalendarMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  /* =======================================================
     LOAD BOOKING
  ======================================================= */

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setError("This consultation management link is invalid.");
      return;
    }

    let active = true;

    async function loadBooking() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/consultations/manage?token=${encodeURIComponent(
            token as string
          )}`,
          {
            cache: "no-store",
          }
        );

        const data = (await response.json()) as ManageResponse;

        if (!response.ok || !data.success || !data.booking) {
          throw new Error(
            data.error || "We couldn't load your consultation."
          );
        }

        if (!active) {
          return;
        }

        setBooking(data.booking);
        setConsultationLength(data.consultationLengthMinutes ?? 30);
        setTimezone(data.timezone || "America/New_York");
      } catch (err) {
        if (!active) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "We couldn't load your consultation."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadBooking();

    return () => {
      active = false;
    };
  }, [token]);

  /* =======================================================
     LOAD AVAILABILITY
  ======================================================= */

  const loadAvailability = useCallback(async (date: Date) => {
    try {
      setLoadingSlots(true);
      setAvailabilityMessage("");
      setRescheduleError("");
      setSelectedTime("");

      const dateString = formatDateForAPI(date);

      const response = await fetch(
        `/api/consultations/availability?date=${encodeURIComponent(
          dateString
        )}`,
        {
          cache: "no-store",
        }
      );

      const data = (await response.json()) as AvailabilityResponse;

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to load availability.");
      }

      const nextSlots = data.slots || [];

      setSlots(nextSlots);

      if (data.timezone) {
        setTimezone(data.timezone);
      }

      if (data.consultationLengthMinutes) {
        setConsultationLength(data.consultationLengthMinutes);
      }

      if (nextSlots.length === 0) {
        setAvailabilityMessage(
          data.reason || "There are no available times on this date."
        );
      }
    } catch (err) {
      setSlots([]);

      setAvailabilityMessage(
        err instanceof Error
          ? err.message
          : "Unable to load availability."
      );
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  function selectDate(date: Date) {
    const today = startOfToday();

    if (date.getTime() < today.getTime()) {
      return;
    }

    setSelectedDate(date);
    setRescheduleError("");

    loadAvailability(date);
  }

  /* =======================================================
     CONFIRM RESCHEDULE
  ======================================================= */

  async function confirmReschedule() {
    if (
      !token ||
      !booking ||
      !selectedDate ||
      !selectedTime ||
      submittingReschedule
    ) {
      return;
    }

    const consultationDate = formatDateForAPI(selectedDate);

    try {
      setSubmittingReschedule(true);
      setRescheduleError("");
      setRescheduleSuccess("");

      const response = await fetch("/api/consultations/reschedule", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          token,
          consultationDate,
          consultationTime: selectedTime,
        }),
      });

      const data = (await response.json()) as RescheduleResponse;

      if (!response.ok || !data.success || !data.booking) {
        throw new Error(
          data.error || "We couldn't reschedule your consultation."
        );
      }

      const updatedBooking = data.booking;

      setBooking((current) => {
        if (!current) {
          return current;
        }

        return {
          ...current,
          consultationDate: updatedBooking.consultationDate,
          consultationTime: updatedBooking.consultationTime,
          status: updatedBooking.status,
        };
      });

      setRescheduleSuccess(
        data.message || "Your consultation has been rescheduled."
      );

      setSelectedDate(null);
      setSelectedTime("");
      setSlots([]);
      setAvailabilityMessage("");
      setRescheduling(false);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      setRescheduleError(
        err instanceof Error
          ? err.message
          : "We couldn't reschedule your consultation."
      );
    } finally {
      setSubmittingReschedule(false);
    }
  }

  /* =======================================================
     CALENDAR
  ======================================================= */

  const calendarDays = useMemo(() => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const leadingDays = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const days: Array<Date | null> = [];

    for (let i = 0; i < leadingDays; i += 1) {
      days.push(null);
    }

    for (let day = 1; day <= totalDays; day += 1) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [calendarMonth]);

  const monthLabel = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(calendarMonth);
  }, [calendarMonth]);

  function previousMonth() {
    const today = new Date();

    const currentMonthStart = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

    const previous = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() - 1,
      1
    );

    if (previous.getTime() < currentMonthStart.getTime()) {
      return;
    }

    setCalendarMonth(previous);
  }

  function nextMonth() {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() + 1,
        1
      )
    );
  }

  function openReschedule() {
    setRescheduling(true);
    setRescheduleError("");
    setRescheduleSuccess("");
    setSelectedDate(null);
    setSelectedTime("");
    setSlots([]);
    setAvailabilityMessage("");

    const today = new Date();

    setCalendarMonth(
      new Date(today.getFullYear(), today.getMonth(), 1)
    );

    window.setTimeout(() => {
      rescheduleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  }

  function closeReschedule() {
    if (submittingReschedule) {
      return;
    }

    setRescheduling(false);
    setSelectedDate(null);
    setSelectedTime("");
    setSlots([]);
    setAvailabilityMessage("");
    setRescheduleError("");
  }

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#17130f]">
        <div className="flex min-h-screen items-center justify-center px-5">
          <div className="text-center">
            <div className="mx-auto h-2 w-2 animate-pulse rounded-full bg-[#17130f]" />

            <p className="mt-5 text-[8px] font-medium uppercase tracking-[0.3em] text-[#28231f]/40">
              Loading consultation
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (error || !booking) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#17130f]">
        <div className="mx-auto flex min-h-screen max-w-[900px] items-center px-5 py-20 sm:px-7">
          <div className="w-full border-t border-[#28231f]/15 pt-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#28231f]/40">
              Consultation
            </p>

            <h1 className="mt-7 max-w-[700px] font-serif text-[3.5rem] font-light leading-[0.92] tracking-[-0.055em] sm:text-[5rem]">
              We couldn&apos;t open
              <br />

              <span className="italic text-[#8f8176]">
                this booking.
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[12px] leading-[1.8] text-[#28231f]/50">
              {error ||
                "This consultation management link is no longer available."}
            </p>

            <a
              href="/"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#17130f] px-6 py-4 text-[8px] font-medium uppercase tracking-[0.24em] text-[#f8f5ef]"
            >
              Back to Jovavo

              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     CANCELLED
  ======================================================= */

  if (booking.status === "cancelled") {
    return (
      <main className="min-h-screen bg-[#f8f5ef] text-[#17130f]">
        <div className="mx-auto flex min-h-screen max-w-[900px] items-center px-5 py-20 sm:px-7">
          <div className="w-full border-t border-[#28231f]/15 pt-10">
            <p className="text-[8px] font-medium uppercase tracking-[0.32em] text-[#28231f]/40">
              Consultation
            </p>

            <h1 className="mt-7 max-w-[700px] font-serif text-[3.5rem] font-light leading-[0.92] tracking-[-0.055em] sm:text-[5rem]">
              This consultation
              <br />

              <span className="italic text-[#8f8176]">
                was cancelled.
              </span>
            </h1>

            <p className="mt-7 max-w-[520px] text-[12px] leading-[1.8] text-[#28231f]/50">
              If you&apos;d like to schedule another consultation,
              you can book a new time through Jovavo.
            </p>

            <a
              href="/consultation"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#17130f] px-6 py-4 text-[8px] font-medium uppercase tracking-[0.24em] text-[#f8f5ef]"
            >
              Book consultation

              <ArrowUpRight
                size={11}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </main>
    );
  }

  /* =======================================================
     MAIN
  ======================================================= */

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ef] text-[#17130f]">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden">
        {/* ABSTRACT BACKGROUND */}

        <div className="pointer-events-none absolute -right-[170px] top-[40px] h-[430px] w-[430px] rounded-full border border-[#28231f]/[0.055] sm:-right-[110px] sm:h-[520px] sm:w-[520px]" />

        <div className="pointer-events-none absolute right-[5%] top-[135px] h-[230px] w-[230px] rounded-full border border-[#28231f]/[0.05] sm:h-[300px] sm:w-[300px]" />

        <div className="pointer-events-none absolute right-[16%] top-[255px] h-[130px] w-[130px] rounded-full bg-[#e9e1d7]/60 sm:h-[170px] sm:w-[170px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-20 sm:px-7 sm:pb-20 sm:pt-24 lg:px-10 lg:pb-24 lg:pt-28 xl:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* LEFT */}

            <div className="pt-2">
              <div className="flex items-center gap-5">
                <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#28231f]/55">
                  Consultation
                </p>

                <span className="h-px w-16 bg-[#28231f]/20" />
              </div>

              <p className="mt-8 max-w-[300px] text-[11px] leading-[1.8] text-[#28231f]/42">
                Review your upcoming consultation, see your booking
                details, or choose another time.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <h1 className="max-w-[830px] font-serif text-[4rem] font-light leading-[0.84] tracking-[-0.065em] text-[#17130f] sm:text-[5.5rem] lg:text-[6.4rem] xl:text-[7.1rem]">
                Your
                <br />
                consultation.
                <br />

                <span className="italic text-[#9c8d82]">
                  All in one place.
                </span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-[7px] w-[7px] rounded-full bg-[#17130f]" />

                  <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/45">
                    Confirmed
                  </p>
                </div>

                <span className="hidden h-px w-12 bg-[#28231f]/15 sm:block" />

                <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                  {consultationLength} minute consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          SUCCESS MESSAGE
      =================================================== */}

      {rescheduleSuccess && (
        <section className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10 xl:px-12">
          <div className="rounded-[22px] border border-emerald-900/10 bg-emerald-950/[0.045] px-5 py-4 sm:px-6">
            <div className="flex items-start gap-4">
              <span className="mt-[1px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-900/70">
                <Check size={10} strokeWidth={2} />
              </span>

              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.24em] text-emerald-950/55">
                  Appointment updated
                </p>

                <p className="mt-1 text-[10px] leading-5 text-emerald-950/55">
                  {rescheduleSuccess}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          APPOINTMENT
      =================================================== */}

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        {/* SECTION HEADER */}

        <div className="mb-5 flex items-center gap-5">
          <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.32em] text-[#28231f]/50">
            Upcoming Appointment
          </p>

          <div className="h-px flex-1 bg-[#28231f]/10" />

          <p className="hidden shrink-0 text-[7px] font-medium uppercase tracking-[0.22em] text-[#28231f]/30 sm:block">
            Your scheduled time
          </p>
        </div>

        {/* APPOINTMENT PANEL */}

        <div className="relative overflow-hidden rounded-[30px] border border-[#28231f]/10 bg-[#f2ece3] sm:rounded-[38px]">
          {/* ABSTRACT BACKGROUND */}

          <div className="pointer-events-none absolute -left-[150px] -top-[170px] h-[360px] w-[360px] rounded-full border border-[#28231f]/[0.045]" />

          <div className="pointer-events-none absolute -left-[35px] -top-[55px] h-[155px] w-[155px] rounded-full border border-[#28231f]/[0.045]" />

          <div className="pointer-events-none absolute -bottom-[190px] left-[24%] hidden h-[340px] w-[340px] rounded-full border border-[#28231f]/[0.035] lg:block" />

          <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT / INTRO */}

            <div className="relative border-b border-[#28231f]/10 px-6 py-9 sm:px-9 sm:py-11 lg:flex lg:min-h-[390px] lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:px-11 lg:py-12">
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#28231f]/38">
                    Scheduled consultation
                  </p>

                  <span className="h-px w-9 bg-[#28231f]/15" />
                </div>

                <h2 className="mt-10 max-w-[390px] font-serif text-[3rem] font-light leading-[0.91] tracking-[-0.055em] text-[#17130f] sm:text-[3.6rem] lg:text-[3.9rem]">
                  Your upcoming
                  <br />

                  <span className="italic text-[#8f8176]">
                    consultation.
                  </span>
                </h2>
              </div>

              <div className="mt-10 max-w-[320px] lg:mt-14">
                <p className="text-[11px] leading-[1.85] text-[#28231f]/42">
                  Your consultation is confirmed. If your schedule
                  changes, you can select another available date and
                  time below.
                </p>
              </div>
            </div>

            {/* RIGHT / APPOINTMENT INFORMATION */}

            <div className="bg-[#fbf8f3]">
              <div className="grid sm:grid-cols-2">
                {/* DATE */}

                <div className="relative border-b border-[#28231f]/10 px-6 py-9 sm:border-b-0 sm:border-r sm:px-8 sm:py-11 lg:px-10 lg:py-12">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#28231f]/35">
                      Date
                    </p>

                    <div className="rounded-full border border-[#28231f]/10 bg-[#f8f5ef] px-3 py-1.5">
                      <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#28231f]/35">
                        Confirmed
                      </p>
                    </div>
                  </div>

                  <div className="mt-9">
                    <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#28231f]/40">
                      {formatWeekday(booking.consultationDate)}
                    </p>

                    <p className="mt-3 font-serif text-[3rem] font-light leading-[0.9] tracking-[-0.055em] text-[#17130f] sm:text-[3.35rem] lg:text-[3.8rem]">
                      {formatMonthDay(booking.consultationDate)}
                    </p>

                    <p className="mt-4 text-[10px] tracking-[0.08em] text-[#28231f]/35">
                      {parseLocalDate(
                        booking.consultationDate
                      ).getFullYear()}
                    </p>
                  </div>
                </div>

                {/* TIME */}

                <div className="relative px-6 py-9 sm:px-8 sm:py-11 lg:px-10 lg:py-12">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#28231f]/35">
                      Time
                    </p>

                    <div className="rounded-full border border-[#28231f]/10 bg-[#f8f5ef] px-3 py-1.5">
                      <p className="text-[7px] font-medium uppercase tracking-[0.2em] text-[#28231f]/35">
                        {consultationLength} min
                      </p>
                    </div>
                  </div>

                  <div className="mt-9">
                    <p className="font-serif text-[3rem] font-light leading-[0.9] tracking-[-0.055em] text-[#17130f] sm:text-[3.35rem] lg:text-[3.8rem]">
                      {formatTime(booking.consultationTime)}
                    </p>

                    <div className="mt-5 flex items-center gap-3">
                      <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#28231f]/30" />

                      <p className="text-[9px] leading-5 text-[#28231f]/40">
                        {getTimezoneLabel(timezone)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESCHEDULE ACTION */}

              <div className="border-t border-[#28231f]/10 bg-[#f6f1ea] px-6 py-6 sm:px-8 lg:px-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-[410px]">
                    <p className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#28231f]/32">
                      Need another time?
                    </p>

                    <p className="mt-2 text-[10px] leading-[1.7] text-[#28231f]/40">
                      Choose another available time and your existing
                      Google Calendar invitation will update
                      automatically.
                    </p>
                  </div>

                  {!rescheduling ? (
                    <button
                      type="button"
                      onClick={openReschedule}
                      className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full bg-[#17130f] px-6 py-3.5 text-[8px] font-medium uppercase tracking-[0.23em] text-[#f8f5ef] transition duration-300 hover:px-7"
                    >
                      <span>Reschedule</span>

                      <ArrowUpRight
                        size={11}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={closeReschedule}
                      disabled={submittingReschedule}
                      className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#28231f]/15 bg-[#fbf8f3] px-6 py-3.5 text-[8px] font-medium uppercase tracking-[0.23em] text-[#28231f]/55 transition duration-300 hover:border-[#28231f]/30 hover:text-[#17130f] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <X size={10} strokeWidth={1.5} />
                      <span>Close</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          RESCHEDULE
      =================================================== */}

      {rescheduling && (
        <section ref={rescheduleRef} className="scroll-mt-8">
          <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-7 sm:pb-20 lg:px-10 lg:pb-24 xl:px-12">
            {/* SECTION LABEL */}

            <div className="mb-5 flex items-center gap-5">
              <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.32em] text-[#28231f]/50">
                Reschedule
              </p>

              <div className="h-px flex-1 bg-[#28231f]/10" />

              <p className="hidden shrink-0 text-[7px] font-medium uppercase tracking-[0.22em] text-[#28231f]/30 sm:block">
                Choose another time
              </p>
            </div>

            {/* MAIN RESCHEDULE PANEL */}

            <div className="relative overflow-hidden rounded-[30px] border border-[#28231f]/10 bg-[#f2ece3] sm:rounded-[38px]">
              {/* ABSTRACT BACKGROUND */}

              <div className="pointer-events-none absolute -right-[145px] -top-[190px] h-[390px] w-[390px] rounded-full border border-[#28231f]/[0.045]" />

              <div className="pointer-events-none absolute -right-[25px] -top-[70px] h-[175px] w-[175px] rounded-full border border-[#28231f]/[0.045]" />

              <div className="pointer-events-none absolute -bottom-[190px] left-[22%] hidden h-[340px] w-[340px] rounded-full border border-[#28231f]/[0.035] lg:block" />

              {/* INTRO */}

              <div className="relative border-b border-[#28231f]/10 px-6 py-9 sm:px-9 sm:py-11 lg:px-11 lg:py-12">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
                  <div>
                    <div className="flex items-center gap-4">
                      <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#28231f]/38">
                        Change your appointment
                      </p>

                      <span className="h-px w-9 bg-[#28231f]/15" />
                    </div>
                  </div>

                  <div>
                    <h2 className="max-w-[680px] font-serif text-[3rem] font-light leading-[0.91] tracking-[-0.055em] text-[#17130f] sm:text-[3.7rem] lg:text-[4.2rem]">
                      Choose a time
                      <br />

                      <span className="italic text-[#8f8176]">
                        that works better.
                      </span>
                    </h2>

                    <p className="mt-6 max-w-[470px] text-[11px] leading-[1.85] text-[#28231f]/42">
                      Select another date and we&apos;ll show you
                      the consultation times currently available.
                    </p>
                  </div>
                </div>
              </div>

              {/* SCHEDULER */}

              <div className="relative grid lg:grid-cols-[1.08fr_0.92fr]">
                {/* CALENDAR */}

                <div className="border-b border-[#28231f]/10 px-6 py-8 sm:px-9 sm:py-10 lg:border-b-0 lg:border-r lg:px-11 lg:py-11">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#28231f]/35">
                        Select date
                      </p>

                      <h3 className="mt-3 font-serif text-[2rem] font-light tracking-[-0.045em] text-[#17130f] sm:text-[2.35rem]">
                        {monthLabel}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={previousMonth}
                        disabled={submittingReschedule}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#28231f]/10 bg-[#fbf8f3]/70 text-[#28231f]/55 transition duration-300 hover:border-[#28231f]/25 hover:bg-[#fbf8f3] disabled:cursor-not-allowed disabled:opacity-20"
                        aria-label="Previous month"
                      >
                        <ChevronLeft
                          size={13}
                          strokeWidth={1.5}
                        />
                      </button>

                      <button
                        type="button"
                        onClick={nextMonth}
                        disabled={submittingReschedule}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#28231f]/10 bg-[#fbf8f3]/70 text-[#28231f]/55 transition duration-300 hover:border-[#28231f]/25 hover:bg-[#fbf8f3] disabled:cursor-not-allowed disabled:opacity-20"
                        aria-label="Next month"
                      >
                        <ChevronRight
                          size={13}
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>
                  </div>

                  {/* CALENDAR BODY */}

                  <div className="mt-8 rounded-[24px] bg-[#fbf8f3] px-3 py-5 sm:rounded-[28px] sm:px-5 sm:py-6">
                    <div className="grid grid-cols-7">
                      {["S", "M", "T", "W", "T", "F", "S"].map(
                        (day, index) => (
                          <div
                            key={`${day}-${index}`}
                            className="pb-4 text-center text-[7px] font-medium uppercase tracking-[0.16em] text-[#28231f]/28"
                          >
                            {day}
                          </div>
                        )
                      )}

                      {calendarDays.map((date, index) => {
                        if (!date) {
                          return (
                            <div
                              key={`blank-${index}`}
                              className="aspect-square"
                            />
                          );
                        }

                        const today = startOfToday();

                        const disabled =
                          date.getTime() < today.getTime() ||
                          submittingReschedule;

                        const selected = selectedDate
                          ? sameDate(date, selectedDate)
                          : false;

                        return (
                          <div
                            key={formatDateForAPI(date)}
                            className="flex aspect-square items-center justify-center"
                          >
                            <button
                              type="button"
                              disabled={disabled}
                              onClick={() => selectDate(date)}
                              className={[
                                "flex h-9 w-9 items-center justify-center rounded-full text-[10px] transition duration-300 sm:h-10 sm:w-10",
                                disabled
                                  ? "cursor-not-allowed text-[#28231f]/14"
                                  : "text-[#28231f]/60 hover:bg-[#f2ece3]",
                                selected
                                  ? "bg-[#17130f] text-[#f8f5ef] shadow-[0_8px_22px_rgba(23,19,15,0.12)] hover:bg-[#17130f]"
                                  : "",
                              ].join(" ")}
                            >
                              {date.getDate()}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3 px-1">
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#28231f]/25" />

                    <p className="text-[9px] leading-5 text-[#28231f]/35">
                      Select any available date to view open times.
                    </p>
                  </div>
                </div>

                {/* AVAILABLE TIMES */}

                <div className="flex min-h-[520px] flex-col bg-[#fbf8f3] px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-11">
                  {!selectedDate ? (
                    <>
                      <div>
                        <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#28231f]/35">
                          Available times
                        </p>

                        <h3 className="mt-3 font-serif text-[2rem] font-light tracking-[-0.045em] text-[#17130f] sm:text-[2.35rem]">
                          Choose a date
                        </h3>
                      </div>

                      <div className="flex flex-1 items-center">
                        <div className="max-w-[320px]">
                          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#28231f]/10 bg-[#f2ece3]">
                            <span className="h-[6px] w-[6px] rounded-full bg-[#17130f]/45" />
                          </div>

                          <p className="font-serif text-[1.7rem] font-light leading-[1.05] tracking-[-0.04em] text-[#28231f]/65">
                            Start with a
                            <br />

                            <span className="italic text-[#8f8176]">
                              new date.
                            </span>
                          </p>

                          <p className="mt-4 max-w-[290px] text-[10px] leading-[1.8] text-[#28231f]/35">
                            Once you choose a date, all available
                            consultation times will appear here.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="border-b border-[#28231f]/10 pb-6">
                        <p className="text-[7px] font-medium uppercase tracking-[0.28em] text-[#28231f]/35">
                          Available times
                        </p>

                        <h3 className="mt-3 font-serif text-[2rem] font-light leading-tight tracking-[-0.045em] text-[#17130f] sm:text-[2.35rem]">
                          {formatShortDate(
                            formatDateForAPI(selectedDate)
                          )}
                        </h3>
                      </div>

                      {loadingSlots ? (
                        <div className="flex flex-1 items-center py-14">
                          <div className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#17130f]/45" />

                            <p className="text-[8px] font-medium uppercase tracking-[0.22em] text-[#28231f]/35">
                              Loading availability
                            </p>
                          </div>
                        </div>
                      ) : slots.length > 0 ? (
                        <div className="mt-6 grid max-h-[260px] grid-cols-2 gap-2 overflow-y-auto pr-1">
                          {slots.map((slot) => {
                            const active =
                              selectedTime === slot.value;

                            return (
                              <button
                                key={slot.value}
                                type="button"
                                disabled={submittingReschedule}
                                onClick={() => {
                                  setSelectedTime(slot.value);
                                  setRescheduleError("");
                                  setRescheduleSuccess("");
                                }}
                                className={[
                                  "group flex min-h-[48px] items-center justify-between rounded-[16px] border px-4 py-3 text-left text-[10px] transition duration-300",
                                  active
                                    ? "border-[#17130f] bg-[#17130f] text-[#f8f5ef]"
                                    : "border-[#28231f]/10 bg-[#f8f5ef] text-[#28231f]/55 hover:border-[#28231f]/25 hover:bg-[#f2ece3]",
                                  submittingReschedule
                                    ? "cursor-not-allowed opacity-40"
                                    : "",
                                ].join(" ")}
                              >
                                <span>{slot.label}</span>

                                <span
                                  className={[
                                    "flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border transition",
                                    active
                                      ? "border-[#f8f5ef]/25 bg-[#f8f5ef]/10"
                                      : "border-[#28231f]/10",
                                  ].join(" ")}
                                >
                                  {active && (
                                    <Check
                                      size={7}
                                      strokeWidth={2}
                                    />
                                  )}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-1 items-center py-12">
                          <div className="max-w-[310px]">
                            <span className="mb-5 block h-px w-10 bg-[#28231f]/15" />

                            <p className="text-[11px] leading-6 text-[#28231f]/42">
                              {availabilityMessage ||
                                "There are no available times on this date."}
                            </p>

                            <p className="mt-3 text-[9px] leading-5 text-[#28231f]/30">
                              Try selecting another day from the
                              calendar.
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedTime && (
                        <div className="mt-auto pt-7">
                          <div className="relative overflow-hidden rounded-[22px] bg-[#f2ece3] p-5 sm:rounded-[26px] sm:p-6">
                            <div className="pointer-events-none absolute -right-10 -top-14 h-28 w-28 rounded-full border border-[#28231f]/[0.05]" />

                            <div className="relative flex items-center justify-between gap-5">
                              <div>
                                <p className="text-[7px] font-medium uppercase tracking-[0.25em] text-[#28231f]/35">
                                  New appointment
                                </p>

                                <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                                  <p className="font-serif text-[1.9rem] font-light tracking-[-0.045em] text-[#17130f]">
                                    {formatTime(selectedTime)}
                                  </p>

                                  <span className="text-[7px] uppercase tracking-[0.2em] text-[#28231f]/30">
                                    {getTimezoneShortLabel(timezone)}
                                  </span>
                                </div>
                              </div>

                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#17130f] text-[#f8f5ef]">
                                <Check
                                  size={10}
                                  strokeWidth={2}
                                />
                              </span>
                            </div>

                            {rescheduleError && (
                              <div className="relative mt-5 rounded-[15px] bg-red-950/[0.05] px-4 py-3">
                                <p className="text-[10px] leading-5 text-red-900/70">
                                  {rescheduleError}
                                </p>
                              </div>
                            )}

                            <button
                              type="button"
                              onClick={confirmReschedule}
                              disabled={submittingReschedule}
                              className="group relative mt-5 flex w-full items-center justify-between rounded-full bg-[#17130f] px-5 py-4 text-[8px] font-medium uppercase tracking-[0.23em] text-[#f8f5ef] transition duration-300 hover:px-6 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                              <span>
                                {submittingReschedule
                                  ? "Updating appointment…"
                                  : "Confirm new time"}
                              </span>

                              {!submittingReschedule && (
                                <ArrowUpRight
                                  size={11}
                                  strokeWidth={1.5}
                                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                              )}
                            </button>

                            <p className="relative mt-4 text-[9px] leading-5 text-[#28231f]/32">
                              Your existing Google Calendar invitation
                              will update automatically.
                            </p>
                          </div>
                        </div>
                      )}

                      {rescheduleError && !selectedTime && (
                        <div className="mt-6 rounded-[16px] bg-red-950/[0.05] px-4 py-3">
                          <p className="text-[10px] leading-5 text-red-900/70">
                            {rescheduleError}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===================================================
          DETAILS
      =================================================== */}

      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        <div className="mb-6 flex items-center gap-5">
          <p className="shrink-0 text-[8px] font-medium uppercase tracking-[0.34em] text-[#28231f]/55">
            Your Details
          </p>

          <div className="h-px flex-1 bg-[#28231f]/10" />

          <p className="hidden shrink-0 text-[7px] font-medium uppercase tracking-[0.22em] text-[#28231f]/30 sm:block">
            Booking information
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[30px] border border-[#28231f]/10 bg-[#f2ece3] sm:rounded-[38px]">
          {/* ABSTRACT DETAILS */}

          <div className="pointer-events-none absolute -left-[125px] -top-[145px] h-[320px] w-[320px] rounded-full border border-[#28231f]/[0.045]" />

          <div className="pointer-events-none absolute -left-[35px] -top-[55px] h-[145px] w-[145px] rounded-full border border-[#28231f]/[0.045]" />

          <div className="pointer-events-none absolute -bottom-[180px] right-[12%] hidden h-[330px] w-[330px] rounded-full border border-[#28231f]/[0.035] lg:block" />

          <div className="relative grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* INTRO */}

            <div className="relative border-b border-[#28231f]/10 px-6 py-9 sm:px-9 sm:py-11 lg:flex lg:min-h-[440px] lg:flex-col lg:justify-between lg:border-b-0 lg:border-r lg:px-11 lg:py-12">
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#28231f]/10 bg-[#fbf8f3]/70">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#17130f]/55" />
                  </span>

                  <p className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#28231f]/38">
                    Submitted information
                  </p>
                </div>

                <h2 className="mt-10 max-w-[400px] font-serif text-[3rem] font-light leading-[0.91] tracking-[-0.055em] text-[#17130f] sm:text-[3.7rem] lg:text-[4rem]">
                  The details
                  <br />

                  <span className="italic text-[#8f8176]">
                    you shared.
                  </span>
                </h2>
              </div>

              <div className="mt-9 max-w-[330px] lg:mt-14">
                <span className="mb-5 block h-px w-11 bg-[#28231f]/20" />

                <p className="text-[11px] leading-[1.8] text-[#28231f]/42">
                  These are the details submitted when your
                  consultation was booked.
                </p>
              </div>
            </div>

            {/* INFORMATION */}

            <div className="bg-[#fbf8f3]">
              {/* NAME + BUSINESS */}

              <div className="grid sm:grid-cols-2">
                <div className="border-b border-[#28231f]/10 px-6 py-7 sm:border-r sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                    Name
                  </p>

                  <p className="mt-6 break-words font-serif text-[1.65rem] font-light leading-[1.15] tracking-[-0.035em] text-[#17130f] sm:text-[1.8rem]">
                    {booking.name}
                  </p>
                </div>

                <div className="border-b border-[#28231f]/10 px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                    Business
                  </p>

                  <p className="mt-6 break-words font-serif text-[1.65rem] font-light leading-[1.15] tracking-[-0.035em] text-[#17130f] sm:text-[1.8rem]">
                    {booking.business || "—"}
                  </p>
                </div>
              </div>

              {/* EMAIL + PHONE */}

              <div className="grid sm:grid-cols-2">
                <div className="border-b border-[#28231f]/10 px-6 py-7 sm:border-r sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                    Email
                  </p>

                  <p className="mt-6 break-all text-[12px] leading-6 text-[#28231f]/68 sm:text-[13px]">
                    {booking.email}
                  </p>
                </div>

                <div className="border-b border-[#28231f]/10 px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                    Phone
                  </p>

                  <p className="mt-6 break-words text-[12px] leading-6 text-[#28231f]/68 sm:text-[13px]">
                    {booking.phone || "—"}
                  </p>
                </div>
              </div>

              {/* PROJECT */}

              {booking.topic && (
                <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-9 lg:py-9">
                  <div className="flex items-center gap-4">
                    <p className="text-[7px] font-medium uppercase tracking-[0.27em] text-[#28231f]/35">
                      Project
                    </p>

                    <span className="h-px w-8 bg-[#28231f]/12" />
                  </div>

                  <div className="mt-6 rounded-[20px] bg-[#f3eee6] px-5 py-5 sm:rounded-[24px] sm:px-6 sm:py-6">
                    <p className="max-w-[720px] text-[12px] leading-[1.85] text-[#28231f]/62 sm:text-[13px]">
                      {booking.topic}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          HELP CTA
      =================================================== */}

      <section className="bg-[#1b1713] text-[#f8f5ef]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-7 sm:py-20 lg:px-10 xl:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <div className="flex items-center gap-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.42em] text-[#f8f5ef]/55">
                  Need Help?
                </p>

                <span className="h-px w-14 bg-[#f8f5ef]/25" />
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="font-serif text-[3rem] font-light leading-[0.95] tracking-[-0.05em] sm:text-[3.8rem]">
                  Have a question
                  <br />

                  <span className="italic text-[#b8a99c]">
                    before we meet?
                  </span>
                </h2>

                <p className="mt-6 max-w-[460px] text-[12px] leading-[1.8] text-[#f8f5ef]/50">
                  Reach out and we&apos;ll help with anything related
                  to your consultation.
                </p>
              </div>

              <a
                href="mailto:contact@jovavo.com"
                className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full border border-[#f8f5ef]/25 px-6 py-4 text-[8px] font-medium uppercase tracking-[0.24em] transition hover:bg-[#f8f5ef] hover:text-[#17130f]"
              >
                Contact Jovavo

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="bg-[#1b1713] text-[#f8f5ef]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-7 lg:px-10 xl:px-12">
          <div className="flex flex-col gap-5 border-t border-[#f8f5ef]/15 py-7 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/"
              className="font-serif text-[18px] tracking-[0.16em]"
            >
              JOVAVO
            </a>

            <p className="text-[7px] uppercase tracking-[0.25em] text-[#f8f5ef]/35">
              Websites · E-Commerce · Digital Growth
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}