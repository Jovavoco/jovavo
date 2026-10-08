import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import crypto from "crypto";

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
  id: string;
  status:
    | "pending_verification"
    | "confirmed"
    | "expired"
    | "cancelled";
  consultation_time: string;
  verification_expires_at: string | null;
};

/* =========================================================
   CONSTANTS
========================================================= */

const HOLD_MINUTES = 20;

/* =========================================================
   SUPABASE
========================================================= */

function getSupabaseAdmin() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseSecretKey =
    process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl || !supabaseSecretKey) {
    throw new Error(
      "Supabase server environment variables are missing."
    );
  }

  return createClient(
    supabaseUrl,
    supabaseSecretKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );
}

/* =========================================================
   RESEND
========================================================= */

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is missing."
    );
  }

  return new Resend(apiKey);
}

/* =========================================================
   BASIC HELPERS
========================================================= */

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function hashToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

function validDateString(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(
    value
  );
}

function validTimeString(value: string) {
  return /^\d{2}:\d{2}$/.test(value);
}

function normalizeDatabaseTime(
  value: string | null
) {
  if (!value) return null;

  return value.slice(0, 5);
}

function timeToMinutes(time: string) {
  const normalized = time.slice(0, 5);

  const [hours, minutes] =
    normalized.split(":").map(Number);

  return hours * 60 + minutes;
}

function minutesToTime(
  totalMinutes: number
) {
  const hours = Math.floor(
    totalMinutes / 60
  );

  const minutes =
    totalMinutes % 60;

  return `${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(
    2,
    "0"
  )}`;
}

function addDays(
  dateString: string,
  amount: number
) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  date.setUTCDate(
    date.getUTCDate() + amount
  );

  return [
    date.getUTCFullYear(),
    String(
      date.getUTCMonth() + 1
    ).padStart(2, "0"),
    String(
      date.getUTCDate()
    ).padStart(2, "0"),
  ].join("-");
}

function getDayOfWeek(
  dateString: string
) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  return new Date(
    Date.UTC(year, month - 1, day)
  ).getUTCDay();
}

/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   DISPLAY DATE
========================================================= */

function formatDisplayDate(
  dateString: string
) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  return new Intl.DateTimeFormat(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }
  ).format(date);
}

/* =========================================================
   DISPLAY TIME
========================================================= */

function formatDisplayTime(
  timeString: string
) {
  const [hourString, minuteString] =
    timeString
      .slice(0, 5)
      .split(":");

  const hour = Number(hourString);
  const minute = Number(minuteString);

  const period =
    hour >= 12 ? "PM" : "AM";

  const displayHour =
    hour % 12 || 12;

  return `${displayHour}:${String(
    minute
  ).padStart(2, "0")} ${period}`;
}

/* =========================================================
   TIMEZONE HELPERS
========================================================= */

function getDateInTimezone(
  date: Date,
  timezone: string
) {
  const formatter =
    new Intl.DateTimeFormat(
      "en-CA",
      {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    );

  const parts =
    formatter.formatToParts(date);

  const year =
    parts.find(
      (part) => part.type === "year"
    )?.value;

  const month =
    parts.find(
      (part) => part.type === "month"
    )?.value;

  const day =
    parts.find(
      (part) => part.type === "day"
    )?.value;

  if (!year || !month || !day) {
    throw new Error(
      "Unable to determine timezone date."
    );
  }

  return `${year}-${month}-${day}`;
}

function getTimezoneOffsetMs(
  date: Date,
  timezone: string
) {
  const formatter =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23",
      }
    );

  const parts =
    formatter.formatToParts(date);

  const values: Record<
    string,
    string
  > = {};

  for (const part of parts) {
    if (
      part.type !== "literal"
    ) {
      values[part.type] =
        part.value;
    }
  }

  const asUTC = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return asUTC - date.getTime();
}

function zonedDateTimeToUtc(
  dateString: string,
  timeString: string,
  timezone: string
) {
  const [year, month, day] =
    dateString.split("-").map(Number);

  const [hour, minute] =
    timeString
      .slice(0, 5)
      .split(":")
      .map(Number);

  const guess = new Date(
    Date.UTC(
      year,
      month - 1,
      day,
      hour,
      minute,
      0
    )
  );

  let offset =
    getTimezoneOffsetMs(
      guess,
      timezone
    );

  let utcDate = new Date(
    guess.getTime() - offset
  );

  const correctedOffset =
    getTimezoneOffsetMs(
      utcDate,
      timezone
    );

  if (
    correctedOffset !== offset
  ) {
    offset = correctedOffset;

    utcDate = new Date(
      guess.getTime() - offset
    );
  }

  return utcDate;
}

/* =========================================================
   GENERATE VALID SLOTS
========================================================= */

function generateSlots({
  startTime,
  endTime,
  consultationLengthMinutes,
  bufferMinutes,
}: {
  startTime: string;
  endTime: string;
  consultationLengthMinutes: number;
  bufferMinutes: number;
}) {
  const slots: string[] = [];

  const start =
    timeToMinutes(startTime);

  const end =
    timeToMinutes(endTime);

  const step =
    consultationLengthMinutes +
    bufferMinutes;

  if (
    step <= 0 ||
    consultationLengthMinutes <= 0
  ) {
    return slots;
  }

  for (
    let current = start;
    current +
        consultationLengthMinutes <=
      end;
    current += step
  ) {
    slots.push(
      minutesToTime(current)
    );
  }

  return slots;
}

/* =========================================================
   CONFIRMATION EMAIL
========================================================= */

function buildConfirmationEmail({
  name,
  consultationDate,
  consultationTime,
  confirmationUrl,
  consultationLengthMinutes,
}: {
  name: string;
  consultationDate: string;
  consultationTime: string;
  confirmationUrl: string;
  consultationLengthMinutes: number;
}) {
  const safeName =
    escapeHtml(name);

  const safeUrl =
    escapeHtml(confirmationUrl);

  const displayDate =
    formatDisplayDate(
      consultationDate
    );

  const displayTime =
    formatDisplayTime(
      consultationTime
    );

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Confirm your consultation</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f8f5ef;
    font-family:Arial, Helvetica, sans-serif;
    color:#1b1713;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      width:100%;
      background:#f8f5ef;
      padding:40px 16px;
    "
  >
    <tr>
      <td align="center">

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            max-width:620px;
          "
        >

          <tr>
            <td
              align="center"
              style="
                padding:0 0 26px 0;
              "
            >
              <div
                style="
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:24px;
                  letter-spacing:5px;
                  color:#1b1713;
                "
              >
                JOVAVO
              </div>
            </td>
          </tr>

          <tr>
            <td
              style="
                background:#fffdfa;
                border:1px solid #e3ddd4;
                border-radius:26px;
                padding:48px 42px;
              "
            >

              <div
                style="
                  text-align:center;
                  font-size:11px;
                  font-weight:600;
                  letter-spacing:3px;
                  color:#9b958e;
                  margin-bottom:20px;
                "
              >
                CONSULTATION REQUEST
              </div>

              <h1
                style="
                  margin:0;
                  text-align:center;
                  font-family:Georgia, 'Times New Roman', serif;
                  font-size:42px;
                  line-height:1.08;
                  font-weight:400;
                  color:#1b1713;
                "
              >
                Confirm your consultation.
              </h1>

              <p
                style="
                  margin:22px auto 0;
                  max-width:470px;
                  text-align:center;
                  font-size:15px;
                  line-height:1.8;
                  color:#77716b;
                "
              >
                Hi ${safeName}, your selected consultation time
                is being held for ${HOLD_MINUTES} minutes.
                Confirm your email below to complete your booking.
              </p>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  margin-top:34px;
                  background:#f7f4ef;
                  border:1px solid #e5dfd6;
                  border-radius:18px;
                "
              >
                <tr>
                  <td
                    style="
                      padding:22px 24px;
                      border-bottom:1px solid #e2dcd3;
                    "
                  >
                    <div
                      style="
                        font-size:9px;
                        font-weight:600;
                        letter-spacing:2px;
                        color:#aaa39a;
                        margin-bottom:8px;
                      "
                    >
                      DATE
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#1b1713;
                      "
                    >
                      ${displayDate}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:22px 24px;
                    "
                  >
                    <div
                      style="
                        font-size:9px;
                        font-weight:600;
                        letter-spacing:2px;
                        color:#aaa39a;
                        margin-bottom:8px;
                      "
                    >
                      TIME
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#1b1713;
                      "
                    >
                      ${displayTime}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:0 24px 22px 24px;
                    "
                  >
                    <div
                      style="
                        font-size:9px;
                        font-weight:600;
                        letter-spacing:2px;
                        color:#aaa39a;
                        margin-bottom:8px;
                      "
                    >
                      DURATION
                    </div>

                    <div
                      style="
                        font-size:15px;
                        color:#1b1713;
                      "
                    >
                      ${consultationLengthMinutes} minutes
                    </div>
                  </td>
                </tr>
              </table>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  margin-top:34px;
                "
              >
                <tr>
                  <td align="center">
                    <a
                      href="${safeUrl}"
                      style="
                        display:inline-block;
                        background:#1b1713;
                        color:#ffffff;
                        text-decoration:none;
                        padding:17px 30px;
                        border-radius:999px;
                        font-size:13px;
                        font-weight:600;
                        letter-spacing:0.3px;
                      "
                    >
                      Confirm Consultation
                    </a>
                  </td>
                </tr>
              </table>

              <p
                style="
                  margin:26px auto 0;
                  max-width:430px;
                  text-align:center;
                  font-size:12px;
                  line-height:1.7;
                  color:#99928b;
                "
              >
                This confirmation link expires in
                ${HOLD_MINUTES} minutes. If you did not request
                this consultation, you can ignore this email.
              </p>

            </td>
          </tr>

          <tr>
            <td
              align="center"
              style="
                padding:24px 20px 0;
                font-size:11px;
                line-height:1.7;
                color:#9b958e;
              "
            >
              Jovavo<br />
              Web Design · E-Commerce · Digital Growth
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request
) {
  try {
    const supabaseAdmin =
      getSupabaseAdmin();

    const resend =
      getResend();

    const body =
      await request.json();

    const {
      name,
      email,
      phone,
      business,
      topic,
      consultationDate,
      consultationTime,
      turnstileToken,
    } = body;

    /* =======================================================
       BASIC VALIDATION
    ======================================================= */

    if (
      !name ||
      !email ||
      !topic ||
      !consultationDate ||
      !consultationTime ||
      !turnstileToken
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    const cleanName =
      String(name).trim();

    const cleanEmail =
      normalizeEmail(
        String(email)
      );

    const cleanPhone = phone
      ? String(phone).trim()
      : null;

    const cleanBusiness = business
      ? String(business).trim()
      : null;

    const cleanTopic =
      String(topic).trim();

    const cleanDate =
      String(
        consultationDate
      ).trim();

    const cleanTime =
      String(
        consultationTime
      ).trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 100
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please enter a valid name.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        cleanEmail
      ) ||
      cleanEmail.length > 254
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      cleanTopic.length < 10 ||
      cleanTopic.length > 2000
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please tell us a little more about what you'd like to discuss.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !validDateString(
        cleanDate
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid consultation date.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !validTimeString(
        cleanTime
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid consultation time.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       VERIFY CLOUDFLARE TURNSTILE
    ======================================================= */

    const turnstileSecret =
      process.env
        .TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      console.error(
        "TURNSTILE_SECRET_KEY is missing."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification is temporarily unavailable.",
        },
        {
          status: 500,
        }
      );
    }

    const turnstileForm =
      new FormData();

    turnstileForm.append(
      "secret",
      turnstileSecret
    );

    turnstileForm.append(
      "response",
      String(
        turnstileToken
      )
    );

    const ip =
      request.headers.get(
        "cf-connecting-ip"
      ) ||
      request.headers
        .get(
          "x-forwarded-for"
        )
        ?.split(",")[0]
        ?.trim();

    if (ip) {
      turnstileForm.append(
        "remoteip",
        ip
      );
    }

    const turnstileResponse =
      await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: turnstileForm,
          cache: "no-store",
        }
      );

    if (
      !turnstileResponse.ok
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification could not be completed.",
        },
        {
          status: 502,
        }
      );
    }

    const turnstileResult =
      (await turnstileResponse.json()) as {
        success?: boolean;
      };

    if (
      !turnstileResult.success
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Security verification failed. Please try again.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       LOAD ADMIN SETTINGS
    ======================================================= */

    const {
      data: settingsData,
      error: settingsError,
    } = await supabaseAdmin
      .from(
        "consultation_settings"
      )
      .select(
        "consultation_length_minutes, buffer_minutes, minimum_notice_hours, booking_window_days, timezone"
      )
      .eq("id", 1)
      .single();

    if (
      settingsError ||
      !settingsData
    ) {
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

    const settings =
      settingsData as ConsultationSettings;

    const timezone =
      settings.timezone ||
      "America/New_York";

    /* =======================================================
       DATE / BOOKING WINDOW
    ======================================================= */

    const now = new Date();

    const today =
      getDateInTimezone(
        now,
        timezone
      );

    const finalBookingDate =
      addDays(
        today,
        settings.booking_window_days
      );

    if (
      cleanDate < today ||
      cleanDate >
        finalBookingDate
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That date is outside the available booking window.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       LOAD DATE OVERRIDE
    ======================================================= */

    const {
      data: overrideData,
      error: overrideError,
    } = await supabaseAdmin
      .from(
        "consultation_date_overrides"
      )
      .select(
        "override_date, is_available, start_time, end_time"
      )
      .eq(
        "override_date",
        cleanDate
      )
      .maybeSingle();

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

    let schedule:
      | {
          is_available: boolean;
          start_time:
            | string
            | null;
          end_time:
            | string
            | null;
        }
      | null = null;

    /* =======================================================
       OVERRIDE TAKES PRIORITY
    ======================================================= */

    if (overrideData) {
      const override =
        overrideData as DateOverride;

      schedule = {
        is_available:
          override.is_available,

        start_time:
          override.start_time,

        end_time:
          override.end_time,
      };
    } else {
      /* =====================================================
         LOAD WEEKLY AVAILABILITY
      ===================================================== */

      const dayOfWeek =
        getDayOfWeek(
          cleanDate
        );

      const {
        data:
          weeklyAvailabilityData,
        error:
          weeklyAvailabilityError,
      } = await supabaseAdmin
        .from(
          "consultation_availability"
        )
        .select(
          "day_of_week, is_available, start_time, end_time"
        )
        .eq(
          "day_of_week",
          dayOfWeek
        )
        .maybeSingle();

      if (
        weeklyAvailabilityError
      ) {
        console.error(
          "Unable to load weekly availability:",
          weeklyAvailabilityError
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
        weeklyAvailabilityData
      ) {
        const weekly =
          weeklyAvailabilityData as WeeklyAvailability;

        schedule = {
          is_available:
            weekly.is_available,

          start_time:
            weekly.start_time,

          end_time:
            weekly.end_time,
        };
      }
    }

    /* =======================================================
       DATE MUST BE OPEN
    ======================================================= */

    if (
      !schedule ||
      !schedule.is_available ||
      !schedule.start_time ||
      !schedule.end_time
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Consultations are not available on that date.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       GENERATE ADMIN-APPROVED SLOTS
    ======================================================= */

    const startTime =
      normalizeDatabaseTime(
        schedule.start_time
      );

    const endTime =
      normalizeDatabaseTime(
        schedule.end_time
      );

    if (
      !startTime ||
      !endTime
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Consultations are not available on that date.",
        },
        {
          status: 400,
        }
      );
    }

    const validSlots =
      generateSlots({
        startTime,
        endTime,

        consultationLengthMinutes:
          settings.consultation_length_minutes,

        bufferMinutes:
          settings.buffer_minutes,
      });

    if (
      !validSlots.includes(
        cleanTime
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is not available.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       MINIMUM NOTICE
    ======================================================= */

    const requestedStart =
      zonedDateTimeToUtc(
        cleanDate,
        cleanTime,
        timezone
      );

    const minimumAllowedTime =
      new Date(
        now.getTime() +
          settings.minimum_notice_hours *
            60 *
            60 *
            1000
      );

    if (
      requestedStart.getTime() <
      minimumAllowedTime.getTime()
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is no longer available.",
        },
        {
          status: 400,
        }
      );
    }

    /* =======================================================
       EXPIRE OLD UNVERIFIED HOLDS
    ======================================================= */

    const {
      error: expireError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .update({
        status: "expired",
      })
      .eq(
        "status",
        "pending_verification"
      )
      .lt(
        "verification_expires_at",
        now.toISOString()
      );

    if (expireError) {
      console.error(
        "Unable to expire old consultation holds:",
        expireError
      );
    }

    /* =======================================================
       CHECK SLOT AGAINST CURRENT BOOKINGS
    ======================================================= */

    const {
      data: existingBookings,
      error: existingError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select(
        "id, status, consultation_time, verification_expires_at"
      )
      .eq(
        "consultation_date",
        cleanDate
      )
      .in("status", [
        "pending_verification",
        "confirmed",
      ]);

    if (existingError) {
      console.error(
        "Unable to check consultation bookings:",
        existingError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't check that time. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    const bookings =
      (existingBookings ??
        []) as ExistingBooking[];

    const slotTaken =
      bookings.some(
        (booking) => {
          const bookingTime =
            normalizeDatabaseTime(
              booking.consultation_time
            );

          if (
            bookingTime !==
            cleanTime
          ) {
            return false;
          }

          if (
            booking.status ===
            "confirmed"
          ) {
            return true;
          }

          if (
            booking.status ===
              "pending_verification" &&
            booking.verification_expires_at
          ) {
            return (
              new Date(
                booking.verification_expires_at
              ).getTime() >
              Date.now()
            );
          }

          return false;
        }
      );

    if (slotTaken) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Someone else is currently holding this time. Please choose another.",
        },
        {
          status: 409,
        }
      );
    }

    /* =======================================================
       PREVENT OVERLAPPING BOOKINGS
    ======================================================= */

    const requestedStartMinutes =
      timeToMinutes(
        cleanTime
      );

    const requestedEndMinutes =
      requestedStartMinutes +
      settings.consultation_length_minutes;

    const overlappingBooking =
      bookings.some(
        (booking) => {
          const active =
            booking.status ===
              "confirmed" ||
            (booking.status ===
              "pending_verification" &&
              booking.verification_expires_at &&
              new Date(
                booking.verification_expires_at
              ).getTime() >
                Date.now());

          if (!active) {
            return false;
          }

          const bookingTime =
            normalizeDatabaseTime(
              booking.consultation_time
            );

          if (!bookingTime) {
            return false;
          }

          const existingStart =
            timeToMinutes(
              bookingTime
            );

          const existingEnd =
            existingStart +
            settings.consultation_length_minutes;

          return (
            requestedStartMinutes <
              existingEnd &&
            requestedEndMinutes >
              existingStart
          );
        }
      );

    if (overlappingBooking) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is no longer available. Please choose another.",
        },
        {
          status: 409,
        }
      );
    }

    /* =======================================================
       SIMPLE EMAIL ABUSE CHECK
    ======================================================= */

    const {
      data: emailBookings,
      error: emailError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select(
        "id, status, verification_expires_at"
      )
      .eq(
        "email",
        cleanEmail
      )
      .in("status", [
        "pending_verification",
        "confirmed",
      ]);

    if (emailError) {
      console.error(
        "Unable to check email bookings:",
        emailError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to process this booking.",
        },
        {
          status: 500,
        }
      );
    }

    const activeBooking =
      emailBookings?.some(
        (booking) => {
          if (
            booking.status ===
            "confirmed"
          ) {
            return true;
          }

          return (
            booking.status ===
              "pending_verification" &&
            booking.verification_expires_at &&
            new Date(
              booking.verification_expires_at
            ).getTime() >
              Date.now()
          );
        }
      );

    if (activeBooking) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This email already has an active consultation or pending booking.",
        },
        {
          status: 409,
        }
      );
    }

    /* =======================================================
       CREATE EMAIL VERIFICATION TOKEN
    ======================================================= */

    const verificationToken =
      crypto
        .randomBytes(32)
        .toString("hex");

    const verificationTokenHash =
      hashToken(
        verificationToken
      );

    const verificationExpiresAt =
      new Date(
        Date.now() +
          HOLD_MINUTES *
            60 *
            1000
      );

    /* =======================================================
       FINAL SLOT CHECK IMMEDIATELY BEFORE INSERT
    ======================================================= */

    const {
      data: finalSlotCheck,
      error: finalSlotError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select(
        "id, status, verification_expires_at"
      )
      .eq(
        "consultation_date",
        cleanDate
      )
      .eq(
        "consultation_time",
        cleanTime
      )
      .in("status", [
        "pending_verification",
        "confirmed",
      ]);

    if (finalSlotError) {
      console.error(
        "Unable to perform final slot check:",
        finalSlotError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't reserve that time. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    const finalSlotTaken =
      finalSlotCheck?.some(
        (booking) => {
          if (
            booking.status ===
            "confirmed"
          ) {
            return true;
          }

          return (
            booking.status ===
              "pending_verification" &&
            booking.verification_expires_at &&
            new Date(
              booking.verification_expires_at
            ).getTime() >
              Date.now()
          );
        }
      );

    if (finalSlotTaken) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Someone else just selected this time. Please choose another.",
        },
        {
          status: 409,
        }
      );
    }

    /* =======================================================
       CREATE PENDING BOOKING
    ======================================================= */

    const {
      data: booking,
      error: bookingError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .insert({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        business:
          cleanBusiness,
        topic: cleanTopic,

        consultation_date:
          cleanDate,

        consultation_time:
          cleanTime,

        status:
          "pending_verification",

        verification_token_hash:
          verificationTokenHash,

        verification_expires_at:
          verificationExpiresAt.toISOString(),
      })
      .select("id")
      .single();

    if (
      bookingError ||
      !booking
    ) {
      console.error(
        "Unable to create consultation booking:",
        bookingError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't create your booking. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    /* =======================================================
       CREATE CONFIRMATION URL

       On localhost:
       http://localhost:3000/api/consultations/confirm?token=...

       On production:
       https://jovavo.com/api/consultations/confirm?token=...
    ======================================================= */

    const requestUrl =
      new URL(request.url);

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(
        /\/$/,
        ""
      ) ||
      requestUrl.origin;

    const confirmationUrl =
      `${siteUrl}/api/consultations/confirm?token=${encodeURIComponent(
        verificationToken
      )}`;

    /* =======================================================
       SEND CONFIRMATION EMAIL
    ======================================================= */

    const emailHtml =
      buildConfirmationEmail({
        name: cleanName,
        consultationDate:
          cleanDate,
        consultationTime:
          cleanTime,
        confirmationUrl,
        consultationLengthMinutes:
          settings.consultation_length_minutes,
      });

    const {
      data: emailData,
      error: emailSendError,
    } = await resend.emails.send({
      from:
        "Jovavo <bookings@jovavo.com>",

      to: [cleanEmail],

      replyTo:
        "contact@jovavo.com",

      subject:
        "Confirm your consultation with Jovavo",

      html: emailHtml,
    });

    /* =======================================================
       EMAIL FAILURE

       Do not leave a customer with a 20-minute hold if the
       confirmation email could not actually be sent.
    ======================================================= */

    if (
      emailSendError ||
      !emailData
    ) {
      console.error(
        "Unable to send consultation confirmation email:",
        emailSendError
      );

      const {
        error: expireBookingError,
      } = await supabaseAdmin
        .from(
          "consultation_bookings"
        )
        .update({
          status: "expired",
        })
        .eq(
          "id",
          booking.id
        );

      if (
        expireBookingError
      ) {
        console.error(
          "Unable to expire booking after email failure:",
          expireBookingError
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't send your confirmation email. Please try booking again.",
        },
        {
          status: 500,
        }
      );
    }

    /* =======================================================
       DEVELOPMENT LOG

       We no longer log the raw verification token.
    ======================================================= */

    if (
      process.env.NODE_ENV ===
      "development"
    ) {
      console.log(
        "Consultation confirmation email sent:",
        emailData.id
      );
    }

    /* =======================================================
       SUCCESS
    ======================================================= */

    return NextResponse.json({
      success: true,

      message:
        "Your time is being held. Please check your email to confirm your consultation.",

      expiresInMinutes:
        HOLD_MINUTES,
    });
  } catch (error) {
    console.error(
      "Consultation booking error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}