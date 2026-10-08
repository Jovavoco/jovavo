"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Loader2,
  Mail,
  Phone,
  RefreshCw,
  Trash2,
  UserRound,
  X,
  XCircle,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type ConsultationBooking = {
  id: string;

  name: string;
  email: string;
  phone: string | null;
  business: string | null;
  topic: string | null;

  consultation_date: string;
  consultation_time: string;

  status:
    | "pending_verification"
    | "confirmed"
    | "expired"
    | "cancelled"
    | string;

  verification_expires_at: string | null;

  created_at: string | null;
  confirmed_at: string | null;
  cancelled_at: string | null;

  google_calendar_event_id: string | null;
  confirmation_email_sent_at: string | null;
};

type BookingsResponse = {
  success: boolean;
  bookings?: ConsultationBooking[];
  error?: string;
};

type CancellationResponse = {
  success: boolean;
  message?: string;
  error?: string;
  alreadyCancelled?: boolean;
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
  error?: string;
  booking?: ConsultationBooking;
  rescheduleEmailSent?: boolean;
};

/* =========================================================
   CONSTANTS
========================================================= */

const TIME_ZONE = "America/New_York";

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

/* =========================================================
   HELPERS
========================================================= */

function normalizeTime(value: string) {
  return value.slice(0, 5);
}

function getBookingDate(booking: ConsultationBooking) {
  const time = normalizeTime(booking.consultation_time);

  return new Date(
    `${booking.consultation_date}T${time}:00`
  );
}

function formatDate(date: string) {
  const parsed = new Date(`${date}T12:00:00`);

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(parsed);
}

function formatTime(time: string) {
  const [hours, minutes] = normalizeTime(time)
    .split(":")
    .map(Number);

  const parsed = new Date();

  parsed.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(parsed);
}

function formatDateForAPI(date: Date) {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(date.getDate()).padStart(
    2,
    "0"
  );

  return `${year}-${month}-${day}`;
}

function startOfDay(date: Date) {
  const copy = new Date(date);

  copy.setHours(0, 0, 0, 0);

  return copy;
}

function sameDay(a: Date | null, b: Date) {
  if (!a) {
    return false;
  }

  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getStatusLabel(status: string) {
  switch (status) {
    case "confirmed":
      return "Confirmed";

    case "pending_verification":
      return "Pending";

    case "cancelled":
      return "Cancelled";

    case "expired":
      return "Expired";

    default:
      return status;
  }
}

function getStatusClasses(status: string) {
  switch (status) {
    case "confirmed":
      return "border-emerald-900/10 bg-emerald-50 text-emerald-800";

    case "pending_verification":
      return "border-amber-900/10 bg-amber-50 text-amber-800";

    case "cancelled":
      return "border-red-900/10 bg-red-50 text-red-800";

    case "expired":
      return "border-[#ded7cd] bg-[#f1ece3] text-[#817970]";

    default:
      return "border-[#ded7cd] bg-[#f1ece3] text-[#817970]";
  }
}

function isUpcoming(
  booking: ConsultationBooking
) {
  if (
    booking.status !== "confirmed" &&
    booking.status !== "pending_verification"
  ) {
    return false;
  }

  return (
    getBookingDate(booking).getTime() >=
    Date.now()
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ConsultationBookings() {
  const [bookings, setBookings] = useState<
    ConsultationBooking[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const [successTitle, setSuccessTitle] =
    useState("Consultation updated");

  /* =======================================================
     CANCELLATION STATE
  ======================================================= */

  const [
    bookingToCancel,
    setBookingToCancel,
  ] = useState<ConsultationBooking | null>(null);

  const [cancellingId, setCancellingId] =
    useState<string | null>(null);

  /* =======================================================
     RESCHEDULE STATE
  ======================================================= */

  const [
    bookingToReschedule,
    setBookingToReschedule,
  ] = useState<ConsultationBooking | null>(
    null
  );

  const [reschedulingId, setReschedulingId] =
    useState<string | null>(null);

  const [today] = useState(() =>
    startOfDay(new Date())
  );

  const [
    rescheduleVisibleMonth,
    setRescheduleVisibleMonth,
  ] = useState(
    () =>
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      )
  );

  const [
    rescheduleSelectedDate,
    setRescheduleSelectedDate,
  ] = useState<Date | null>(null);

  const [
    rescheduleSelectedTime,
    setRescheduleSelectedTime,
  ] = useState("");

  const [
    rescheduleSlots,
    setRescheduleSlots,
  ] = useState<AvailabilitySlot[]>([]);

  const [
    rescheduleAvailabilityLoading,
    setRescheduleAvailabilityLoading,
  ] = useState(false);

  const [
    rescheduleAvailabilityError,
    setRescheduleAvailabilityError,
  ] = useState("");

  const [
    rescheduleConsultationLength,
    setRescheduleConsultationLength,
  ] = useState(30);

  const [
    rescheduleTimezone,
    setRescheduleTimezone,
  ] = useState(TIME_ZONE);

  /* =======================================================
     LOAD BOOKINGS
  ======================================================= */

  const loadBookings = useCallback(
    async (manualRefresh = false) => {
      if (manualRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      try {
        const response = await fetch(
          "/api/admin/consultations/bookings",
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const result =
          (await response.json()) as BookingsResponse;

        if (!response.ok || !result.success) {
          throw new Error(
            result.error ||
              "Unable to load consultation bookings."
          );
        }

        setBookings(result.bookings ?? []);
      } catch (error) {
        console.error(
          "Unable to load consultation bookings:",
          error
        );

        setError(
          error instanceof Error
            ? error.message
            : "Unable to load consultation bookings."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    []
  );

  useEffect(() => {
    void loadBookings();
  }, [loadBookings]);

  /* =======================================================
     CANCEL CONSULTATION
  ======================================================= */

  async function cancelConsultation() {
    if (!bookingToCancel) {
      return;
    }

    const booking = bookingToCancel;

    setCancellingId(booking.id);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch(
        "/api/admin/consultations/cancel",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            bookingId: booking.id,
          }),
        }
      );

      const result =
        (await response.json()) as CancellationResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to cancel consultation."
        );
      }

      setBookings((current) =>
        current.map((item) =>
          item.id === booking.id
            ? {
                ...item,
                status: "cancelled",
                cancelled_at:
                  new Date().toISOString(),
              }
            : item
        )
      );

      setBookingToCancel(null);

      setSuccessTitle(
        "Consultation cancelled"
      );

      setSuccessMessage(
        `Consultation with ${booking.name} was cancelled successfully.`
      );

      await loadBookings(true);
    } catch (error) {
      console.error(
        "Unable to cancel consultation:",
        error
      );

      setError(
        error instanceof Error
          ? error.message
          : "Unable to cancel consultation."
      );
    } finally {
      setCancellingId(null);
    }
  }

  /* =======================================================
     OPEN RESCHEDULE MODAL
  ======================================================= */

  function openRescheduleModal(
    booking: ConsultationBooking
  ) {
    setError("");
    setSuccessMessage("");

    setBookingToReschedule(booking);

    setRescheduleSelectedDate(null);
    setRescheduleSelectedTime("");

    setRescheduleSlots([]);

    setRescheduleAvailabilityError("");

    const bookingDate = new Date(
      `${booking.consultation_date}T12:00:00`
    );

    const startingMonth =
      bookingDate >= today
        ? bookingDate
        : today;

    setRescheduleVisibleMonth(
      new Date(
        startingMonth.getFullYear(),
        startingMonth.getMonth(),
        1
      )
    );
  }

  function closeRescheduleModal() {
    if (reschedulingId) {
      return;
    }

    setBookingToReschedule(null);

    setRescheduleSelectedDate(null);
    setRescheduleSelectedTime("");

    setRescheduleSlots([]);

    setRescheduleAvailabilityError("");
  }

  /* =======================================================
     RESCHEDULE CALENDAR
  ======================================================= */

  const rescheduleCalendarDays =
    useMemo(() => {
      const year =
        rescheduleVisibleMonth.getFullYear();

      const month =
        rescheduleVisibleMonth.getMonth();

      const firstDay = new Date(
        year,
        month,
        1
      );

      const lastDay = new Date(
        year,
        month + 1,
        0
      );

      const cells: Array<Date | null> = [];

      for (
        let i = 0;
        i < firstDay.getDay();
        i++
      ) {
        cells.push(null);
      }

      for (
        let day = 1;
        day <= lastDay.getDate();
        day++
      ) {
        cells.push(
          new Date(year, month, day)
        );
      }

      while (cells.length % 7 !== 0) {
        cells.push(null);
      }

      return cells;
    }, [rescheduleVisibleMonth]);

  function previousRescheduleMonth() {
    const previous = new Date(
      rescheduleVisibleMonth.getFullYear(),
      rescheduleVisibleMonth.getMonth() - 1,
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

    setRescheduleVisibleMonth(previous);
  }

  function nextRescheduleMonth() {
    setRescheduleVisibleMonth(
      new Date(
        rescheduleVisibleMonth.getFullYear(),
        rescheduleVisibleMonth.getMonth() + 1,
        1
      )
    );
  }

  const canGoBackRescheduleMonth =
    rescheduleVisibleMonth >
    new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );

  /* =======================================================
     LOAD RESCHEDULE AVAILABILITY
  ======================================================= */

  async function loadRescheduleAvailability(
    date: Date
  ) {
    const dateString =
      formatDateForAPI(date);

    setRescheduleAvailabilityLoading(true);

    setRescheduleAvailabilityError("");

    setRescheduleSlots([]);

    setRescheduleSelectedTime("");

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

      setRescheduleSlots(
        result.slots ?? []
      );

      if (
        result.consultationLengthMinutes
      ) {
        setRescheduleConsultationLength(
          result.consultationLengthMinutes
        );
      }

      if (result.timezone) {
        setRescheduleTimezone(
          result.timezone
        );
      }
    } catch (error) {
      console.error(
        "Unable to load reschedule availability:",
        error
      );

      setRescheduleSlots([]);

      setRescheduleAvailabilityError(
        error instanceof Error
          ? error.message
          : "Availability could not be loaded."
      );
    } finally {
      setRescheduleAvailabilityLoading(
        false
      );
    }
  }

  /* =======================================================
     RESCHEDULE CONSULTATION
  ======================================================= */

  async function rescheduleConsultation() {
    if (
      !bookingToReschedule ||
      !rescheduleSelectedDate ||
      !rescheduleSelectedTime
    ) {
      return;
    }

    const booking =
      bookingToReschedule;

    const newDate =
      formatDateForAPI(
        rescheduleSelectedDate
      );

    const newTime =
      normalizeTime(
        rescheduleSelectedTime
      );

    if (
      booking.consultation_date ===
        newDate &&
      normalizeTime(
        booking.consultation_time
      ) === newTime
    ) {
      setRescheduleAvailabilityError(
        "Please choose a different date or time."
      );

      return;
    }

    setReschedulingId(booking.id);

    setRescheduleAvailabilityError("");

    setError("");

    setSuccessMessage("");

    try {
      const response = await fetch(
        "/api/admin/consultations/reschedule",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            bookingId: booking.id,

            consultationDate: newDate,

            consultationTime: newTime,
          }),
        }
      );

      const result =
        (await response.json()) as RescheduleResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to reschedule consultation."
        );
      }

      /*
       * Update the appointment immediately
       * so the new date/time appears without
       * waiting for a refresh.
       */

      setBookings((current) =>
        current.map((item) =>
          item.id === booking.id
            ? {
                ...item,

                ...(result.booking ?? {}),

                consultation_date:
                  newDate,

                consultation_time:
                  newTime,
              }
            : item
        )
      );

      setBookingToReschedule(null);

      setRescheduleSelectedDate(null);

      setRescheduleSelectedTime("");

      setRescheduleSlots([]);

      setSuccessTitle(
        "Consultation rescheduled"
      );

      setSuccessMessage(
        `Consultation with ${
          booking.name
        } was rescheduled to ${formatDate(
          newDate
        )} at ${formatTime(
          newTime
        )} ET.`
      );

      await loadBookings(true);
    } catch (error) {
      console.error(
        "Unable to reschedule consultation:",
        error
      );

      setRescheduleAvailabilityError(
        error instanceof Error
          ? error.message
          : "Unable to reschedule consultation."
      );
    } finally {
      setReschedulingId(null);
    }
  }

  /* =======================================================
     GROUP BOOKINGS
  ======================================================= */

  const upcomingBookings = bookings
    .filter(isUpcoming)
    .sort(
      (a, b) =>
        getBookingDate(a).getTime() -
        getBookingDate(b).getTime()
    );

  const previousBookings = bookings
    .filter(
      (booking) =>
        !isUpcoming(booking)
    )
    .sort(
      (a, b) =>
        getBookingDate(b).getTime() -
        getBookingDate(a).getTime()
    );

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <>
      <div className="mt-9 space-y-7">
        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {successMessage ? (
          <div className="flex items-start justify-between gap-4 rounded-[20px] border border-emerald-900/10 bg-emerald-50 px-5 py-4 text-emerald-900">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="text-sm font-medium">
                  {successTitle}
                </p>

                <p className="mt-1 text-xs leading-5 text-emerald-800/80">
                  {successMessage}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setSuccessMessage("")
              }
              className="text-emerald-800/60 transition hover:text-emerald-900"
              aria-label="Dismiss message"
            >
              <X size={16} />
            </button>
          </div>
        ) : null}

        {/* =================================================
            GENERAL ERROR
        ================================================= */}

        {!loading && error ? (
          <div className="flex items-start justify-between gap-4 rounded-[20px] border border-red-700/15 bg-red-50 px-5 py-4 text-red-900">
            <div>
              <p className="text-sm font-medium">
                Something went wrong
              </p>

              <p className="mt-1 text-xs leading-5 text-red-800/75">
                {error}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setError("")}
              className="text-red-800/60 transition hover:text-red-900"
              aria-label="Dismiss error"
            >
              <X size={16} />
            </button>
          </div>
        ) : null}

        {/* =================================================
            UPCOMING CONSULTATIONS
        ================================================= */}

        <section className="overflow-hidden rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
          <div className="flex flex-col gap-4 border-b border-[#e8e1d8] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                <CalendarClock
                  size={16}
                  strokeWidth={1.6}
                />
              </div>

              <div>
                <h2 className="font-serif text-xl">
                  Upcoming Consultations
                </h2>

                <p className="mt-1 text-xs text-[#817970]">
                  Confirmed and pending
                  client consultations.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSuccessMessage("");

                void loadBookings(true);
              }}
              disabled={refreshing}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#ded7cd] bg-white px-4 text-xs font-medium transition hover:border-[#1b1713] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {refreshing ? (
                <Loader2
                  size={14}
                  className="animate-spin"
                />
              ) : (
                <RefreshCw size={14} />
              )}

              Refresh
            </button>
          </div>

          {/* LOADING */}

          {loading ? (
            <div className="flex min-h-[190px] items-center justify-center">
              <div className="flex items-center gap-3 text-sm text-[#817970]">
                <Loader2
                  size={17}
                  className="animate-spin"
                />

                Loading consultations...
              </div>
            </div>
          ) : null}

          {/* EMPTY */}

          {!loading &&
          upcomingBookings.length ===
            0 ? (
            <div className="px-6 py-14 text-center">
              <CalendarClock
                size={26}
                strokeWidth={1.3}
                className="mx-auto text-[#aaa298]"
              />

              <p className="mt-4 text-sm font-medium">
                No upcoming consultations.
              </p>

              <p className="mt-1 text-xs text-[#9a9289]">
                New client bookings will
                appear here.
              </p>
            </div>
          ) : null}

          {/* BOOKINGS */}

          {!loading &&
          upcomingBookings.length > 0 ? (
            <div className="divide-y divide-[#eee8df]">
              {upcomingBookings.map(
                (booking) => (
                  <BookingRow
                    key={booking.id}
                    booking={booking}
                    cancelling={
                      cancellingId ===
                      booking.id
                    }
                    rescheduling={
                      reschedulingId ===
                      booking.id
                    }
                    onReschedule={() =>
                      openRescheduleModal(
                        booking
                      )
                    }
                    onCancel={() =>
                      setBookingToCancel(
                        booking
                      )
                    }
                  />
                )
              )}
            </div>
          ) : null}
        </section>

        {/* =================================================
            CONSULTATION HISTORY
        ================================================= */}

        {!loading &&
        previousBookings.length > 0 ? (
          <section className="overflow-hidden rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
            <div className="border-b border-[#e8e1d8] px-6 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <Clock3
                    size={16}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Consultation History
                  </h2>

                  <p className="mt-1 text-xs text-[#817970]">
                    Previous, cancelled, and
                    expired bookings.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[#eee8df]">
              {previousBookings.map(
                (booking) => (
                  <BookingRow
                    key={booking.id}
                    booking={booking}
                    historical
                    cancelling={false}
                    rescheduling={false}
                    onReschedule={() => {}}
                    onCancel={() => {}}
                  />
                )
              )}
            </div>
          </section>
        ) : null}
      </div>

      {/* ===================================================
          RESCHEDULE MODAL
      =================================================== */}

      {bookingToReschedule ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 py-5 sm:px-6">
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close reschedule dialog"
            onClick={
              closeRescheduleModal
            }
            className="absolute inset-0 bg-[#1b1713]/35 backdrop-blur-[2px]"
          />

          {/* MODAL */}

          <div className="relative z-10 flex max-h-[92vh] w-full max-w-[760px] flex-col overflow-hidden rounded-[28px] border border-[#ded7cd] bg-[#fffdf9] shadow-2xl">
            {/* HEADER */}

            <div className="shrink-0 border-b border-[#e8e1d8] px-6 py-6 sm:px-7">
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f1ece3]">
                    <CalendarClock
                      size={17}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9a9289]">
                      Reschedule
                      Consultation
                    </p>

                    <h2 className="mt-1 font-serif text-2xl">
                      Choose a new time.
                    </h2>

                    <p className="mt-1 text-xs text-[#817970]">
                      {
                        bookingToReschedule.name
                      }
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={Boolean(
                    reschedulingId
                  )}
                  onClick={
                    closeRescheduleModal
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded7cd] bg-white text-[#817970] transition hover:border-[#1b1713] hover:text-[#1b1713] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* SCROLLABLE BODY */}

            <div className="overflow-y-auto px-6 py-6 sm:px-7">
              {/* CURRENT APPOINTMENT */}

              <div className="rounded-[18px] border border-[#e8e1d8] bg-[#f8f5ef] p-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#9a9289]">
                  Current Appointment
                </p>

                <p className="mt-2 font-serif text-lg">
                  {formatDate(
                    bookingToReschedule.consultation_date
                  )}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#655e56]">
                  <Clock3 size={14} />

                  {formatTime(
                    bookingToReschedule.consultation_time
                  )}{" "}
                  ET
                </div>
              </div>

              {/* MONTH */}

              <div className="mt-7 flex items-center justify-between border-b border-[#e8e1d8] pb-5">
                <button
                  type="button"
                  onClick={
                    previousRescheduleMonth
                  }
                  disabled={
                    !canGoBackRescheduleMonth ||
                    Boolean(
                      reschedulingId
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded7cd] bg-white transition hover:border-[#1b1713] disabled:cursor-not-allowed disabled:opacity-25"
                  aria-label="Previous month"
                >
                  <ChevronLeft
                    size={16}
                  />
                </button>

                <p className="font-serif text-[20px]">
                  {
                    MONTHS[
                      rescheduleVisibleMonth.getMonth()
                    ]
                  }{" "}
                  {rescheduleVisibleMonth.getFullYear()}
                </p>

                <button
                  type="button"
                  onClick={
                    nextRescheduleMonth
                  }
                  disabled={Boolean(
                    reschedulingId
                  )}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded7cd] bg-white transition hover:border-[#1b1713] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Next month"
                >
                  <ChevronRight
                    size={16}
                  />
                </button>
              </div>

              {/* WEEKDAYS */}

              <div className="mt-4 grid grid-cols-7">
                {WEEKDAYS.map((day) => (
                  <div
                    key={day}
                    className="py-2 text-center text-[9px] font-semibold tracking-[0.14em] text-[#9a9289]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* CALENDAR DAYS */}

              <div className="mt-1 grid grid-cols-7 gap-1 sm:gap-2">
                {rescheduleCalendarDays.map(
                  (date, index) => {
                    if (!date) {
                      return (
                        <div
                          key={`empty-${index}`}
                          className="aspect-square"
                        />
                      );
                    }

                    const normalized =
                      startOfDay(date);

                    const available =
                      normalized >= today;

                    const selected =
                      sameDay(
                        rescheduleSelectedDate,
                        date
                      );

                    const isToday =
                      sameDay(
                        today,
                        date
                      );

                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        disabled={
                          !available ||
                          rescheduleAvailabilityLoading ||
                          Boolean(
                            reschedulingId
                          )
                        }
                        onClick={() => {
                          setRescheduleSelectedDate(
                            date
                          );

                          setRescheduleSelectedTime(
                            ""
                          );

                          setRescheduleAvailabilityError(
                            ""
                          );

                          void loadRescheduleAvailability(
                            date
                          );
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

                        {isToday &&
                        !selected ? (
                          <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-[#1b1713]/35" />
                        ) : null}
                      </button>
                    );
                  }
                )}
              </div>

              {/* AVAILABLE TIMES */}

              <div className="mt-8 border-t border-[#e8e1d8] pt-7">
                <div className="flex items-center gap-3">
                  <Clock3
                    size={17}
                    strokeWidth={1.5}
                    className="text-[#817970]"
                  />

                  <div>
                    <p className="text-xs font-semibold">
                      Available times
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#9a9289]">
                      {!rescheduleSelectedDate
                        ? "Select a date first."
                        : rescheduleAvailabilityLoading
                          ? "Checking live availability..."
                          : `${rescheduleConsultationLength}-minute consultation · ${rescheduleTimezone}`}
                    </p>
                  </div>
                </div>

                {!rescheduleSelectedDate ? (
                  <div className="mt-5 rounded-[18px] border border-dashed border-[#ded7cd] bg-[#f8f5ef]/60 px-5 py-7 text-center">
                    <CalendarDays
                      size={20}
                      className="mx-auto text-[#aaa298]"
                    />

                    <p className="mt-3 text-xs text-[#817970]">
                      Choose a date above
                      to see available
                      consultation times.
                    </p>
                  </div>
                ) : rescheduleAvailabilityLoading ? (
                  <div className="mt-5 flex min-h-[100px] items-center justify-center rounded-[18px] bg-[#f8f5ef]">
                    <div className="flex items-center gap-3 text-xs text-[#817970]">
                      <Loader2
                        size={16}
                        className="animate-spin"
                      />

                      Checking
                      availability...
                    </div>
                  </div>
                ) : rescheduleAvailabilityError ? (
                  <div className="mt-5 rounded-[18px] border border-red-700/10 bg-red-50 px-5 py-4">
                    <p className="text-xs leading-5 text-red-900">
                      {
                        rescheduleAvailabilityError
                      }
                    </p>

                    {rescheduleSelectedDate ? (
                      <button
                        type="button"
                        onClick={() =>
                          void loadRescheduleAvailability(
                            rescheduleSelectedDate
                          )
                        }
                        className="mt-3 text-[11px] font-semibold underline underline-offset-4"
                      >
                        Try again
                      </button>
                    ) : null}
                  </div>
                ) : rescheduleSlots.length ===
                  0 ? (
                  <div className="mt-5 rounded-[18px] border border-[#e8e1d8] bg-[#f8f5ef] px-5 py-7 text-center">
                    <Clock3
                      size={20}
                      className="mx-auto text-[#aaa298]"
                    />

                    <p className="mt-3 text-sm font-medium">
                      No times available
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#817970]">
                      Choose another day
                      to view additional
                      availability.
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {rescheduleSlots.map(
                      (slot) => {
                        const selected =
                          rescheduleSelectedTime ===
                          slot.value;

                        return (
                          <button
                            key={
                              slot.value
                            }
                            type="button"
                            disabled={Boolean(
                              reschedulingId
                            )}
                            onClick={() => {
                              setRescheduleSelectedTime(
                                slot.value
                              );

                              setRescheduleAvailabilityError(
                                ""
                              );
                            }}
                            className={`rounded-xl border px-3 py-3.5 text-xs font-medium transition ${
                              selected
                                ? "border-[#1b1713] bg-[#1b1713] text-white"
                                : "border-[#ded7cd] bg-white text-[#655e56] hover:border-[#1b1713] hover:bg-[#f8f5ef]"
                            }`}
                          >
                            {slot.label}
                          </button>
                        );
                      }
                    )}
                  </div>
                )}

                {/* NEW SELECTION */}

                {rescheduleSelectedDate &&
                rescheduleSelectedTime ? (
                  <div className="mt-6 rounded-[18px] border border-emerald-900/10 bg-emerald-50 px-5 py-4">
                    <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-emerald-800/65">
                      New Appointment
                    </p>

                    <p className="mt-2 font-serif text-lg text-emerald-950">
                      {formatDate(
                        formatDateForAPI(
                          rescheduleSelectedDate
                        )
                      )}
                    </p>

                    <p className="mt-1 text-sm text-emerald-900/75">
                      {formatTime(
                        rescheduleSelectedTime
                      )}{" "}
                      ET
                    </p>
                  </div>
                ) : null}
              </div>

              {/* GOOGLE NOTICE */}

              <div className="mt-6 rounded-[18px] border border-[#e8e1d8] bg-[#f8f5ef] px-5 py-4">
                <p className="text-xs font-medium">
                  Calendar & email
                  notifications
                </p>

                <p className="mt-1 text-xs leading-5 text-[#817970]">
                  The existing Google
                  Calendar meeting will be
                  moved to the new time.
                  The client will receive
                  the updated calendar
                  invitation and a Jovavo
                  reschedule email.
                </p>
              </div>
            </div>

            {/* ACTIONS */}

            <div className="shrink-0 flex flex-col-reverse gap-3 border-t border-[#e8e1d8] bg-[#f8f5ef] px-6 py-5 sm:flex-row sm:justify-end sm:px-7">
              <button
                type="button"
                disabled={Boolean(
                  reschedulingId
                )}
                onClick={
                  closeRescheduleModal
                }
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#ded7cd] bg-white px-5 text-sm font-medium transition hover:border-[#1b1713] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Keep Current Time
              </button>

              <button
                type="button"
                disabled={
                  !rescheduleSelectedDate ||
                  !rescheduleSelectedTime ||
                  rescheduleAvailabilityLoading ||
                  Boolean(
                    reschedulingId
                  )
                }
                onClick={() =>
                  void rescheduleConsultation()
                }
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-6 text-sm font-medium text-white transition hover:bg-[#302a24] disabled:cursor-not-allowed disabled:opacity-35"
              >
                {reschedulingId ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />

                    Rescheduling...
                  </>
                ) : (
                  <>
                    <CalendarClock
                      size={15}
                    />

                    Confirm Reschedule
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* ===================================================
          CANCEL CONFIRMATION MODAL
      =================================================== */}

      {bookingToCancel ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
          {/* BACKDROP */}

          <button
            type="button"
            aria-label="Close cancellation dialog"
            onClick={() => {
              if (!cancellingId) {
                setBookingToCancel(null);
              }
            }}
            className="absolute inset-0 bg-[#1b1713]/35 backdrop-blur-[2px]"
          />

          {/* MODAL */}

          <div className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[28px] border border-[#ded7cd] bg-[#fffdf9] shadow-2xl">
            <div className="border-b border-[#e8e1d8] px-6 py-6 sm:px-7">
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-800">
                    <CalendarClock
                      size={17}
                      strokeWidth={1.6}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9a9289]">
                      Cancel Consultation
                    </p>

                    <h2 className="mt-1 font-serif text-2xl">
                      Are you sure?
                    </h2>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={Boolean(
                    cancellingId
                  )}
                  onClick={() =>
                    setBookingToCancel(
                      null
                    )
                  }
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ded7cd] bg-white text-[#817970] transition hover:border-[#1b1713] hover:text-[#1b1713] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* DETAILS */}

            <div className="px-6 py-6 sm:px-7">
              <p className="text-sm leading-6 text-[#655e56]">
                You&apos;re about to
                cancel the consultation
                with{" "}
                <span className="font-medium text-[#1b1713]">
                  {
                    bookingToCancel.name
                  }
                </span>
                .
              </p>

              <div className="mt-5 rounded-[18px] border border-[#e8e1d8] bg-[#f8f5ef] p-5">
                <p className="font-serif text-lg">
                  {formatDate(
                    bookingToCancel.consultation_date
                  )}
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#655e56]">
                  <Clock3 size={14} />

                  {formatTime(
                    bookingToCancel.consultation_time
                  )}{" "}
                  ET
                </div>

                {bookingToCancel.business ? (
                  <p className="mt-3 text-xs text-[#817970]">
                    {
                      bookingToCancel.business
                    }
                  </p>
                ) : null}
              </div>

              {bookingToCancel.google_calendar_event_id ? (
                <div className="mt-5 rounded-[18px] border border-red-900/10 bg-red-50 px-5 py-4">
                  <p className="text-xs font-medium text-red-900">
                    This will also remove
                    the meeting from Google
                    Calendar.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-red-800/75">
                    Google Calendar will
                    send the attendee a
                    cancellation update.
                  </p>
                </div>
              ) : (
                <div className="mt-5 rounded-[18px] border border-amber-900/10 bg-amber-50 px-5 py-4">
                  <p className="text-xs font-medium text-amber-900">
                    No Google Calendar
                    event is linked to this
                    booking.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-amber-800/75">
                    The consultation will
                    still be cancelled in
                    Jovavo.
                  </p>
                </div>
              )}
            </div>

            {/* ACTIONS */}

            <div className="flex flex-col-reverse gap-3 border-t border-[#e8e1d8] bg-[#f8f5ef] px-6 py-5 sm:flex-row sm:justify-end sm:px-7">
              <button
                type="button"
                disabled={Boolean(
                  cancellingId
                )}
                onClick={() =>
                  setBookingToCancel(null)
                }
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#ded7cd] bg-white px-5 text-sm font-medium transition hover:border-[#1b1713] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Keep Consultation
              </button>

              <button
                type="button"
                disabled={Boolean(
                  cancellingId
                )}
                onClick={() =>
                  void cancelConsultation()
                }
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-red-800 px-5 text-sm font-medium text-white transition hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {cancellingId ? (
                  <>
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />

                    Cancelling...
                  </>
                ) : (
                  <>
                    <Trash2 size={15} />

                    Cancel Consultation
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/* =========================================================
   BOOKING ROW
========================================================= */

function BookingRow({
  booking,
  historical = false,
  cancelling,
  rescheduling,
  onCancel,
  onReschedule,
}: {
  booking: ConsultationBooking;
  historical?: boolean;

  cancelling: boolean;
  rescheduling: boolean;

  onCancel: () => void;
  onReschedule: () => void;
}) {
  return (
    <div
      className={`p-5 sm:p-7 ${
        historical ? "opacity-75" : ""
      }`}
    >
      <div className="grid gap-6 xl:grid-cols-[210px_1fr_auto] xl:items-start">
        {/* DATE + TIME */}

        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9a9289]">
            Consultation
          </p>

          <p className="mt-2 font-serif text-lg leading-snug">
            {formatDate(
              booking.consultation_date
            )}
          </p>

          <div className="mt-2 flex items-center gap-2 text-sm text-[#655e56]">
            <Clock3 size={14} />

            {formatTime(
              booking.consultation_time
            )}{" "}
            ET
          </div>
        </div>

        {/* CLIENT */}

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-medium">
              {booking.name}
            </h3>

            <span
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] ${getStatusClasses(
                booking.status
              )}`}
            >
              {getStatusLabel(
                booking.status
              )}
            </span>
          </div>

          {booking.business ? (
            <p className="mt-1 text-sm text-[#706960]">
              {booking.business}
            </p>
          ) : null}

          {booking.topic ? (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#655e56]">
              {booking.topic}
            </p>
          ) : null}

          {/* CONTACT */}

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={`mailto:${booking.email}`}
              className="inline-flex items-center gap-2 text-xs text-[#706960] transition hover:text-[#1b1713]"
            >
              <Mail size={13} />

              {booking.email}
            </a>

            {booking.phone ? (
              <a
                href={`tel:${booking.phone}`}
                className="inline-flex items-center gap-2 text-xs text-[#706960] transition hover:text-[#1b1713]"
              >
                <Phone size={13} />

                {booking.phone}
              </a>
            ) : null}
          </div>
        </div>

        {/* ACTIONS */}

        <div className="flex min-w-[190px] flex-col items-start gap-2 xl:items-end">
          {booking.status ===
          "confirmed" ? (
            <>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-800">
                <CheckCircle2
                  size={14}
                />

                Confirmed
              </div>

              {booking.google_calendar_event_id ? (
                <div className="inline-flex items-center gap-2 text-[11px] text-[#817970]">
                  <ExternalLink
                    size={12}
                  />

                  Calendar synced
                </div>
              ) : (
                <div className="text-[11px] text-amber-700">
                  Calendar not synced
                </div>
              )}

              {!historical ? (
                <div className="mt-3 flex flex-wrap items-center gap-2 xl:justify-end">
                  {/* RESCHEDULE */}

                  <button
                    type="button"
                    onClick={
                      onReschedule
                    }
                    disabled={
                      cancelling ||
                      rescheduling
                    }
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-[#ded7cd] bg-white px-4 text-xs font-medium text-[#1b1713] transition hover:border-[#1b1713] hover:bg-[#f8f5ef] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {rescheduling ? (
                      <Loader2
                        size={13}
                        className="animate-spin"
                      />
                    ) : (
                      <CalendarClock
                        size={13}
                      />
                    )}

                    Reschedule
                  </button>

                  {/* CANCEL */}

                  <button
                    type="button"
                    onClick={onCancel}
                    disabled={
                      cancelling ||
                      rescheduling
                    }
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-red-900/15 bg-white px-4 text-xs font-medium text-red-800 transition hover:border-red-800 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {cancelling ? (
                      <Loader2
                        size={13}
                        className="animate-spin"
                      />
                    ) : (
                      <XCircle
                        size={13}
                      />
                    )}

                    Cancel Consultation
                  </button>
                </div>
              ) : null}
            </>
          ) : null}

          {booking.status ===
          "pending_verification" ? (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-800">
              <Clock3 size={14} />

              Awaiting verification
            </div>
          ) : null}

          {booking.status ===
          "cancelled" ? (
            <div className="inline-flex items-center gap-2 text-xs font-medium text-red-800">
              <XCircle size={14} />

              Cancelled
            </div>
          ) : null}

          {booking.status ===
          "expired" ? (
            <div className="inline-flex items-center gap-2 text-xs text-[#817970]">
              <Clock3 size={14} />

              Expired
            </div>
          ) : null}

          <div className="mt-2 inline-flex items-center gap-2 text-[11px] text-[#9a9289]">
            <UserRound size={12} />

            {booking.id.slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  );
}