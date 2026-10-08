import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* =========================================================
   TYPES
========================================================= */

type WeeklyAvailability = {
  day_of_week: number;
  is_available: boolean;
  start_time: string | null;
  end_time: string | null;
};

type ConsultationSettings = {
  consultation_length_minutes: number;
  buffer_minutes: number;
  minimum_notice_hours: number;
  booking_window_days: number;
  timezone: string;
};

type DateOverride = {
  override_date: string;
  is_available: boolean;
  start_time: string | null;
  end_time: string | null;
};

type ExistingBooking = {
  consultation_date: string;
  consultation_time: string;
  status: string;
  verification_expires_at: string | null;
};

/* =========================================================
   HELPERS
========================================================= */

function timeToMinutes(time: string) {
  const [hours, minutes] = time
    .slice(0, 5)
    .split(":")
    .map(Number);

  return hours * 60 + minutes;
}

function minutesToTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(
    mins
  ).padStart(2, "0")}`;
}

function formatTime(time: string) {
  const [hourString, minuteString] = time
    .slice(0, 5)
    .split(":");

  const hour = Number(hourString);
  const minute = Number(minuteString);

  const period = hour >= 12 ? "PM" : "AM";

  const displayHour =
    hour === 0
      ? 12
      : hour > 12
        ? hour - 12
        : hour;

  return `${displayHour}:${String(minute).padStart(
    2,
    "0"
  )} ${period}`;
}

/*
 * Creates a Date representing the supplied wall-clock time
 * in the configured timezone.
 */
function zonedDateTimeToUtc(
  dateString: string,
  timeString: string,
  timeZone: string
) {
  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const [hour, minute] = timeString
    .slice(0, 5)
    .split(":")
    .map(Number);

  /*
   * Start with a UTC approximation.
   */
  const approximate = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0,
      0
    )
  );

  /*
   * Determine how that UTC instant appears in the desired
   * timezone.
   */
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });

  const parts = formatter.formatToParts(approximate);

  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const representedAsUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute)
  );

  const offset =
    representedAsUtc - approximate.getTime();

  return new Date(
    approximate.getTime() - offset
  );
}

/*
 * Returns YYYY-MM-DD for "now" in the configured timezone.
 */
function getDateInTimezone(
  date: Date,
  timeZone: string
) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);

  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  return `${values.year}-${values.month}-${values.day}`;
}

/*
 * Gets weekday 0-6 without letting the server's own
 * timezone shift the date.
 *
 * 0 = Sunday
 * 1 = Monday
 * ...
 * 6 = Saturday
 */
function getDayOfWeek(dateString: string) {
  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  return new Date(
    Date.UTC(year, month - 1, day)
  ).getUTCDay();
}

/*
 * Calculate YYYY-MM-DD + N calendar days.
 */
function addDays(
  dateString: string,
  numberOfDays: number
) {
  const [year, month, day] = dateString
    .split("-")
    .map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  date.setUTCDate(
    date.getUTCDate() + numberOfDays
  );

  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function validDateString(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const [year, month, day] = value
    .split("-")
    .map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

/* =========================================================
   GET
========================================================= */

export async function GET(request: NextRequest) {
  try {
    /* =====================================================
       1. DATE
    ===================================================== */

    const date =
      request.nextUrl.searchParams.get("date");

    if (!date || !validDateString(date)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "A valid date is required in YYYY-MM-DD format.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       2. SERVER-ONLY SUPABASE CLIENT
    ===================================================== */

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl || !supabaseSecretKey) {
      console.error(
        "Consultation availability server credentials are missing."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Consultation availability is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    const supabaseAdmin = createClient(
      supabaseUrl,
      supabaseSecretKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    /* =====================================================
       3. LOAD BOOKING SETTINGS
    ===================================================== */

    const {
      data: settings,
      error: settingsError,
    } = await supabaseAdmin
      .from("consultation_settings")
      .select(
        `
          consultation_length_minutes,
          buffer_minutes,
          minimum_notice_hours,
          booking_window_days,
          timezone
        `
      )
      .eq("id", 1)
      .single<ConsultationSettings>();

    if (settingsError || !settings) {
      console.error(
        "Unable to load consultation settings:",
        settingsError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Consultation availability is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       4. CHECK BOOKING WINDOW
    ===================================================== */

    const now = new Date();

    const today = getDateInTimezone(
      now,
      settings.timezone
    );

    const lastBookableDate = addDays(
      today,
      settings.booking_window_days
    );

    /*
     * Dates use YYYY-MM-DD, so string comparison is safe.
     */

    if (
      date < today ||
      date > lastBookableDate
    ) {
      return NextResponse.json({
        success: true,
        date,
        available: false,
        slots: [],
        reason: "outside_booking_window",
        timezone: settings.timezone,
      });
    }

    /* =====================================================
       5. CHECK FOR DATE OVERRIDE
    ===================================================== */

    const {
      data: override,
      error: overrideError,
    } = await supabaseAdmin
      .from("consultation_date_overrides")
      .select(
        `
          override_date,
          is_available,
          start_time,
          end_time
        `
      )
      .eq("override_date", date)
      .maybeSingle<DateOverride>();

    if (overrideError) {
      console.error(
        "Unable to load date override:",
        overrideError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Consultation availability is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    let startTime: string | null = null;
    let endTime: string | null = null;

    /* =====================================================
       6. OVERRIDE TAKES PRIORITY
    ===================================================== */

    if (override) {
      if (!override.is_available) {
        return NextResponse.json({
          success: true,
          date,
          available: false,
          slots: [],
          reason: "date_override",
          timezone: settings.timezone,
        });
      }

      startTime = override.start_time;
      endTime = override.end_time;
    } else {
      /* ===================================================
         7. LOAD NORMAL WEEKLY HOURS
      =================================================== */

      const dayOfWeek =
        getDayOfWeek(date);

      const {
        data: weeklyAvailability,
        error: weeklyError,
      } = await supabaseAdmin
        .from("consultation_availability")
        .select(
          `
            day_of_week,
            is_available,
            start_time,
            end_time
          `
        )
        .eq("day_of_week", dayOfWeek)
        .maybeSingle<WeeklyAvailability>();

      if (weeklyError) {
        console.error(
          "Unable to load weekly availability:",
          weeklyError
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "Consultation availability is temporarily unavailable.",
          },
          {
            status: 500,
          }
        );
      }

      if (
        !weeklyAvailability ||
        !weeklyAvailability.is_available ||
        !weeklyAvailability.start_time ||
        !weeklyAvailability.end_time
      ) {
        return NextResponse.json({
          success: true,
          date,
          available: false,
          slots: [],
          reason: "weekly_unavailable",
          timezone: settings.timezone,
        });
      }

      startTime =
        weeklyAvailability.start_time;

      endTime =
        weeklyAvailability.end_time;
    }

    if (!startTime || !endTime) {
      return NextResponse.json({
        success: true,
        date,
        available: false,
        slots: [],
        reason: "no_hours",
        timezone: settings.timezone,
      });
    }

    /* =====================================================
       8. GENERATE POSSIBLE SLOTS
    ===================================================== */

    const startMinutes =
      timeToMinutes(startTime);

    const endMinutes =
      timeToMinutes(endTime);

    const consultationLength =
      settings.consultation_length_minutes;

    const buffer =
      settings.buffer_minutes;

    const step =
      consultationLength + buffer;

    const possibleSlots: string[] = [];

    for (
      let slotStart = startMinutes;
      slotStart + consultationLength <= endMinutes;
      slotStart += step
    ) {
      possibleSlots.push(
        minutesToTime(slotStart)
      );
    }

    /* =====================================================
       9. LOAD EXISTING BOOKINGS
    ===================================================== */

    const {
      data: bookings,
      error: bookingsError,
    } = await supabaseAdmin
      .from("consultation_bookings")
      .select(
        `
          consultation_date,
          consultation_time,
          status,
          verification_expires_at
        `
      )
      .eq("consultation_date", date)
      .in("status", [
        "pending_verification",
        "confirmed",
      ]);

    if (bookingsError) {
      console.error(
        "Unable to load consultation bookings:",
        bookingsError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Consultation availability is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    const activeBookings =
      ((bookings ?? []) as ExistingBooking[]).filter(
        (booking) => {
          if (
            booking.status ===
            "confirmed"
          ) {
            return true;
          }

          if (
            booking.status ===
            "pending_verification"
          ) {
            if (
              !booking.verification_expires_at
            ) {
              return false;
            }

            return (
              new Date(
                booking.verification_expires_at
              ).getTime() > now.getTime()
            );
          }

          return false;
        }
      );

    const occupiedTimes =
      new Set(
        activeBookings.map((booking) =>
          booking.consultation_time
            .slice(0, 5)
        )
      );

    /* =====================================================
       10. MINIMUM NOTICE + OCCUPIED TIMES
    ===================================================== */

    const minimumAllowedTime =
      now.getTime() +
      settings.minimum_notice_hours *
        60 *
        60 *
        1000;

    const availableSlots =
      possibleSlots.filter((slot) => {
        /*
         * Already booked / temporarily held
         */

        if (occupiedTimes.has(slot)) {
          return false;
        }

        /*
         * Enforce minimum notice.
         */

        const slotDateTime =
          zonedDateTimeToUtc(
            date,
            slot,
            settings.timezone
          );

        if (
          slotDateTime.getTime() <
          minimumAllowedTime
        ) {
          return false;
        }

        return true;
      });

    /* =====================================================
       11. RESPONSE
    ===================================================== */

    return NextResponse.json({
      success: true,

      date,

      available:
        availableSlots.length > 0,

      timezone:
        settings.timezone,

      consultationLengthMinutes:
        settings.consultation_length_minutes,

      bufferMinutes:
        settings.buffer_minutes,

      slots: availableSlots.map(
        (time) => ({
          value: time,
          label: formatTime(time),
        })
      ),
    });
  } catch (error) {
    console.error(
      "CONSULTATION AVAILABILITY API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Consultation availability is temporarily unavailable.",
      },
      {
        status: 500,
      }
    );
  }
}