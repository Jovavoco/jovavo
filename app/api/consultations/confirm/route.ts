import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { google } from "googleapis";
import { Resend } from "resend";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIME_ZONE = "America/New_York";

const resend = new Resend(process.env.RESEND_API_KEY);

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
  status: string;
  consultation_date: string;
  consultation_time: string;
  verification_expires_at: string | null;
  confirmed_at: string | null;
  google_calendar_event_id: string | null;
  confirmation_email_sent_at: string | null;
  management_token_hash: string | null;
};

type ConfirmedBooking = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  business: string | null;
  topic: string | null;
  consultation_date: string;
  consultation_time: string;
  google_calendar_event_id: string | null;
  confirmation_email_sent_at: string | null;
  management_token_hash: string | null;
};

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
   GOOGLE CALENDAR
========================================================= */

function getGoogleCalendar() {
  const clientId =
    process.env.GOOGLE_CLIENT_ID;

  const clientSecret =
    process.env.GOOGLE_CLIENT_SECRET;

  const refreshToken =
    process.env.GOOGLE_REFRESH_TOKEN;

  if (
    !clientId ||
    !clientSecret ||
    !refreshToken
  ) {
    throw new Error(
      "Google Calendar environment variables are missing."
    );
  }

  const oauth2Client =
    new google.auth.OAuth2(
      clientId,
      clientSecret
    );

  oauth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  return google.calendar({
    version: "v3",
    auth: oauth2Client,
  });
}

/* =========================================================
   TOKEN HELPERS
========================================================= */

function hashToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

function createManagementToken() {
  return crypto
    .randomBytes(32)
    .toString("hex");
}

/* =========================================================
   SITE URL
========================================================= */

function getSiteUrl(request: NextRequest) {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(
      /\/+$/,
      ""
    );

  return (
    configuredUrl ||
    request.nextUrl.origin
  );
}

/* =========================================================
   REDIRECT
========================================================= */

function redirectToResult(
  request: NextRequest,
  status:
    | "success"
    | "expired"
    | "invalid"
    | "cancelled"
    | "error"
) {
  const siteUrl =
    getSiteUrl(request);

  return NextResponse.redirect(
    `${siteUrl}/consultation/confirmed?status=${status}`
  );
}

/* =========================================================
   TIME HELPERS
========================================================= */

function normalizeTime(time: string) {
  const match =
    time.match(/^(\d{1,2}):(\d{2})/);

  if (!match) {
    throw new Error(
      "Invalid consultation time."
    );
  }

  const hour =
    Number(match[1]);

  const minute =
    Number(match[2]);

  if (
    Number.isNaN(hour) ||
    Number.isNaN(minute) ||
    hour < 0 ||
    hour > 23 ||
    minute < 0 ||
    minute > 59
  ) {
    throw new Error(
      "Invalid consultation time."
    );
  }

  return `${String(hour).padStart(
    2,
    "0"
  )}:${String(minute).padStart(
    2,
    "0"
  )}`;
}

function makeLocalDateTime(
  date: string,
  time: string
) {
  return `${date}T${normalizeTime(
    time
  )}:00`;
}

function addMinutesToLocalDateTime(
  date: string,
  time: string,
  minutesToAdd: number
) {
  const normalizedTime =
    normalizeTime(time);

  const [year, month, day] =
    date.split("-").map(Number);

  const [hour, minute] =
    normalizedTime
      .split(":")
      .map(Number);

  /*
   * UTC is only being used here for
   * wall-clock arithmetic.
   *
   * Google receives America/New_York
   * separately as the actual timezone.
   */

  const value =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        hour,
        minute + minutesToAdd,
        0
      )
    );

  const endYear =
    value.getUTCFullYear();

  const endMonth =
    String(
      value.getUTCMonth() + 1
    ).padStart(2, "0");

  const endDay =
    String(
      value.getUTCDate()
    ).padStart(2, "0");

  const endHour =
    String(
      value.getUTCHours()
    ).padStart(2, "0");

  const endMinute =
    String(
      value.getUTCMinutes()
    ).padStart(2, "0");

  return `${endYear}-${endMonth}-${endDay}T${endHour}:${endMinute}:00`;
}

/* =========================================================
   DISPLAY HELPERS
========================================================= */

function formatDisplayDate(
  date: string
) {
  const [year, month, day] =
    date.split("-").map(Number);

  const value =
    new Date(
      Date.UTC(
        year,
        month - 1,
        day,
        12,
        0,
        0
      )
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
  ).format(value);
}

function formatDisplayTime(
  time: string
) {
  const normalized =
    normalizeTime(time);

  const [hour, minute] =
    normalized
      .split(":")
      .map(Number);

  const suffix =
    hour >= 12
      ? "PM"
      : "AM";

  const displayHour =
    hour % 12 === 0
      ? 12
      : hour % 12;

  return `${displayHour}:${String(
    minute
  ).padStart(2, "0")} ${suffix}`;
}

/* =========================================================
   HTML ESCAPING
========================================================= */

function escapeHtml(
  value: string | null | undefined
) {
  if (!value) {
    return "";
  }

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   GOOGLE EVENT HELPERS
========================================================= */

async function getGoogleEvent(
  eventId: string
) {
  try {
    const calendar =
      getGoogleCalendar();

    const response =
      await calendar.events.get({
        calendarId: "primary",
        eventId,
      });

    return response.data;
  } catch (error) {
    console.error(
      "Unable to retrieve Google Calendar event:",
      error
    );

    return null;
  }
}

function getMeetLinkFromEvent(
  event: any
) {
  if (!event) {
    return null;
  }

  if (event.hangoutLink) {
    return event.hangoutLink;
  }

  const entryPoints =
    event.conferenceData?.entryPoints;

  if (Array.isArray(entryPoints)) {
    const videoEntry =
      entryPoints.find(
        (entry: any) =>
          entry.entryPointType ===
          "video"
      );

    if (videoEntry?.uri) {
      return videoEntry.uri;
    }
  }

  return null;
}

/* =========================================================
   CONFIRMATION EMAIL
========================================================= */

function buildConfirmationEmail({
  name,
  displayDate,
  displayTime,
  consultationLength,
  meetLink,
  manageUrl,
}: {
  name: string;
  displayDate: string;
  displayTime: string;
  consultationLength: number;
  meetLink: string | null;
  manageUrl: string;
}) {
  const safeName =
    escapeHtml(name);

  const safeDate =
    escapeHtml(displayDate);

  const safeTime =
    escapeHtml(displayTime);

  const safeMeetLink =
    meetLink
      ? escapeHtml(meetLink)
      : null;

  const safeManageUrl =
    escapeHtml(manageUrl);

  const meetSection =
    safeMeetLink
      ? `
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="margin-top:32px;"
        >
          <tr>
            <td align="center">
              <a
                href="${safeMeetLink}"
                style="
                  display:inline-block;
                  background:#1b1713;
                  color:#ffffff;
                  text-decoration:none;
                  font-family:Arial,Helvetica,sans-serif;
                  font-size:13px;
                  font-weight:600;
                  letter-spacing:0.04em;
                  padding:15px 26px;
                  border-radius:999px;
                "
              >
                Join Google Meet
              </a>
            </td>
          </tr>
        </table>
      `
      : `
        <p
          style="
            margin:28px 0 0;
            font-family:Arial,Helvetica,sans-serif;
            font-size:13px;
            line-height:1.7;
            color:#706960;
            text-align:center;
          "
        >
          Your Google Meet details are included in your calendar invitation.
        </p>
      `;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=UTF-8"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        <title>
          Jovavo Consultation Confirmed
        </title>
      </head>

      <body
        style="
          margin:0;
          padding:0;
          background:#f8f5ef;
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
          "
        >
          <tr>
            <td
              align="center"
              style="
                padding:42px 16px;
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
                  max-width:620px;
                  background:#fffdf9;
                  border:1px solid #e3ddd4;
                  border-radius:24px;
                  overflow:hidden;
                "
              >
                <!-- HEADER -->

                <tr>
                  <td
                    style="
                      padding:34px 36px 28px;
                      border-bottom:1px solid #ebe5dc;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:10px;
                        font-weight:600;
                        letter-spacing:0.22em;
                        text-transform:uppercase;
                        color:#9a9289;
                      "
                    >
                      JOVAVO
                    </p>

                    <h1
                      style="
                        margin:14px 0 0;
                        font-family:Georgia,'Times New Roman',serif;
                        font-size:34px;
                        line-height:1.08;
                        font-weight:400;
                        color:#1b1713;
                      "
                    >
                      Your consultation is confirmed.
                    </h1>
                  </td>
                </tr>

                <!-- BODY -->

                <tr>
                  <td
                    style="
                      padding:32px 36px 36px;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:14px;
                        line-height:1.8;
                        color:#655e56;
                      "
                    >
                      Hi ${safeName},
                    </p>

                    <p
                      style="
                        margin:14px 0 0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:14px;
                        line-height:1.8;
                        color:#655e56;
                      "
                    >
                      Your consultation with Jovavo has been confirmed.
                      We look forward to learning more about your business,
                      goals, and what you would like to create.
                    </p>

                    <!-- APPOINTMENT DETAILS -->

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        margin-top:28px;
                        background:#f8f5ef;
                        border:1px solid #e7e0d7;
                        border-radius:18px;
                      "
                    >
                      <tr>
                        <td
                          style="
                            padding:22px 24px;
                          "
                        >
                          <p
                            style="
                              margin:0;
                              font-family:Arial,Helvetica,sans-serif;
                              font-size:9px;
                              font-weight:600;
                              letter-spacing:0.18em;
                              text-transform:uppercase;
                              color:#9a9289;
                            "
                          >
                            Consultation Details
                          </p>

                          <p
                            style="
                              margin:13px 0 0;
                              font-family:Georgia,'Times New Roman',serif;
                              font-size:21px;
                              line-height:1.4;
                              color:#1b1713;
                            "
                          >
                            ${safeDate}
                          </p>

                          <p
                            style="
                              margin:6px 0 0;
                              font-family:Arial,Helvetica,sans-serif;
                              font-size:13px;
                              line-height:1.6;
                              color:#655e56;
                            "
                          >
                            ${safeTime} ET
                          </p>

                          <p
                            style="
                              margin:3px 0 0;
                              font-family:Arial,Helvetica,sans-serif;
                              font-size:12px;
                              line-height:1.6;
                              color:#817970;
                            "
                          >
                            ${consultationLength} minutes
                          </p>
                        </td>
                      </tr>
                    </table>

                    ${meetSection}

                    <!-- MANAGE CONSULTATION -->

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        margin-top:14px;
                      "
                    >
                      <tr>
                        <td align="center">
                          <a
                            href="${safeManageUrl}"
                            style="
                              display:inline-block;
                              background:#ffffff;
                              color:#1b1713;
                              text-decoration:none;
                              font-family:Arial,Helvetica,sans-serif;
                              font-size:13px;
                              font-weight:600;
                              letter-spacing:0.02em;
                              padding:14px 24px;
                              border:1px solid #d9d1c7;
                              border-radius:999px;
                            "
                          >
                            Manage Consultation
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p
                      style="
                        margin:14px 0 0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:11px;
                        line-height:1.6;
                        color:#817970;
                        text-align:center;
                      "
                    >
                      Need a different time? Use this link to manage or
                      reschedule your consultation.
                    </p>

                    <div
                      style="
                        margin-top:30px;
                        padding-top:24px;
                        border-top:1px solid #ebe5dc;
                      "
                    >
                      <p
                        style="
                          margin:0;
                          font-family:Arial,Helvetica,sans-serif;
                          font-size:13px;
                          line-height:1.8;
                          color:#706960;
                        "
                      >
                        We've also sent a Google Calendar invitation
                        with your meeting details.
                      </p>

                      <p
                        style="
                          margin:14px 0 0;
                          font-family:Arial,Helvetica,sans-serif;
                          font-size:13px;
                          line-height:1.8;
                          color:#706960;
                        "
                      >
                        If you have any questions before your consultation,
                        simply reply to this email.
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- FOOTER -->

                <tr>
                  <td
                    style="
                      padding:24px 36px 30px;
                      border-top:1px solid #ebe5dc;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:12px;
                        font-weight:600;
                        color:#1b1713;
                      "
                    >
                      Jovavo
                    </p>

                    <p
                      style="
                        margin:5px 0 0;
                        font-family:Arial,Helvetica,sans-serif;
                        font-size:11px;
                        line-height:1.6;
                        color:#9a9289;
                      "
                    >
                      Websites, e-commerce &amp; digital experiences
                    </p>
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
   SEND CONFIRMATION EMAIL
========================================================= */

async function sendConfirmationEmail({
  booking,
  consultationLength,
  meetLink,
  manageUrl,
}: {
  booking: ConfirmedBooking;
  consultationLength: number;
  meetLink: string | null;
  manageUrl: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error(
      "RESEND_API_KEY is missing."
    );
  }

  const displayDate =
    formatDisplayDate(
      booking.consultation_date
    );

  const displayTime =
    formatDisplayTime(
      booking.consultation_time
    );

  const subject =
    `Your Jovavo consultation is confirmed — ${displayDate}`;

  const html =
    buildConfirmationEmail({
      name: booking.name,
      displayDate,
      displayTime,
      consultationLength,
      meetLink,
      manageUrl,
    });

  const textLines = [
    `Hi ${booking.name},`,
    "",
    "Your consultation with Jovavo is confirmed.",
    "",
    `Date: ${displayDate}`,
    `Time: ${displayTime} ET`,
    `Duration: ${consultationLength} minutes`,
    "",
  ];

  if (meetLink) {
    textLines.push(
      `Google Meet: ${meetLink}`,
      ""
    );
  }

  textLines.push(
    "Manage or reschedule your consultation:",
    manageUrl,
    "",
    "We've also sent a Google Calendar invitation with your meeting details.",
    "",
    "If you have any questions before your consultation, reply to this email.",
    "",
    "Jovavo",
    "Websites, e-commerce & digital experiences"
  );

  const {
    data,
    error,
  } = await resend.emails.send({
    from:
      "Jovavo <bookings@jovavo.com>",

    to: [
      booking.email,
    ],

    replyTo:
      "contact@jovavo.com",

    subject,

    html,

    text:
      textLines.join("\n"),
  });

  if (error) {
    throw new Error(
      `Resend confirmation email failed: ${error.message}`
    );
  }

  return data;
}

/* =========================================================
   GET
========================================================= */

export async function GET(
  request: NextRequest
) {
  try {
    const supabaseAdmin =
      getSupabaseAdmin();

    /* =====================================================
       GET VERIFICATION TOKEN
    ===================================================== */

    const token =
      request.nextUrl.searchParams.get(
        "token"
      );

    if (
      !token ||
      token.length < 20
    ) {
      return redirectToResult(
        request,
        "invalid"
      );
    }

    const tokenHash =
      hashToken(token);

    /* =====================================================
       FIND BOOKING
    ===================================================== */

    const {
      data: booking,
      error: bookingError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select(
        `
          id,
          name,
          email,
          phone,
          business,
          topic,
          status,
          consultation_date,
          consultation_time,
          verification_expires_at,
          confirmed_at,
          google_calendar_event_id,
          confirmation_email_sent_at,
          management_token_hash
        `
      )
      .eq(
        "verification_token_hash",
        tokenHash
      )
      .maybeSingle();

    if (bookingError) {
      console.error(
        "Unable to find consultation booking:",
        bookingError
      );

      return redirectToResult(
        request,
        "error"
      );
    }

    if (!booking) {
      return redirectToResult(
        request,
        "invalid"
      );
    }

    const typedBooking =
      booking as ConsultationBooking;

    /* =====================================================
       ALREADY CONFIRMED
    ===================================================== */

    if (
      typedBooking.status ===
      "confirmed"
    ) {
      return redirectToResult(
        request,
        "success"
      );
    }

    /* =====================================================
       CANCELLED
    ===================================================== */

    if (
      typedBooking.status ===
      "cancelled"
    ) {
      return redirectToResult(
        request,
        "cancelled"
      );
    }

    /* =====================================================
       ALREADY EXPIRED
    ===================================================== */

    if (
      typedBooking.status ===
      "expired"
    ) {
      return redirectToResult(
        request,
        "expired"
      );
    }

    /* =====================================================
       ONLY PENDING BOOKINGS CAN CONTINUE
    ===================================================== */

    if (
      typedBooking.status !==
      "pending_verification"
    ) {
      return redirectToResult(
        request,
        "invalid"
      );
    }

    /* =====================================================
       CHECK VERIFICATION EXPIRATION
    ===================================================== */

    if (
      !typedBooking.verification_expires_at
    ) {
      return redirectToResult(
        request,
        "expired"
      );
    }

    const expirationTime =
      new Date(
        typedBooking.verification_expires_at
      ).getTime();

    if (
      Number.isNaN(
        expirationTime
      ) ||
      expirationTime <=
        Date.now()
    ) {
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
          "id",
          typedBooking.id
        )
        .eq(
          "status",
          "pending_verification"
        );

      if (expireError) {
        console.error(
          "Unable to mark consultation booking expired:",
          expireError
        );
      }

      return redirectToResult(
        request,
        "expired"
      );
    }

    /* =====================================================
       CHECK FOR CONFIRMED SLOT CONFLICT
    ===================================================== */

    const {
      data: conflictingBooking,
      error: conflictError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select("id")
      .eq(
        "consultation_date",
        typedBooking.consultation_date
      )
      .eq(
        "consultation_time",
        typedBooking.consultation_time
      )
      .eq(
        "status",
        "confirmed"
      )
      .neq(
        "id",
        typedBooking.id
      )
      .maybeSingle();

    if (conflictError) {
      console.error(
        "Unable to check consultation slot:",
        conflictError
      );

      return redirectToResult(
        request,
        "error"
      );
    }

    if (conflictingBooking) {
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
          "id",
          typedBooking.id
        )
        .eq(
          "status",
          "pending_verification"
        );

      if (expireError) {
        console.error(
          "Unable to expire conflicting booking:",
          expireError
        );
      }

      return redirectToResult(
        request,
        "expired"
      );
    }

    /* =====================================================
       GET CONSULTATION SETTINGS
    ===================================================== */

    const {
      data: settings,
      error: settingsError,
    } = await supabaseAdmin
      .from(
        "consultation_settings"
      )
      .select(
        `
          consultation_length_minutes,
          timezone
        `
      )
      .eq("id", 1)
      .maybeSingle();

    if (settingsError) {
      console.error(
        "Unable to load consultation settings:",
        settingsError
      );

      return redirectToResult(
        request,
        "error"
      );
    }

    const consultationLength =
      settings
        ?.consultation_length_minutes ??
      30;

    const calendarTimeZone =
      settings?.timezone ||
      TIME_ZONE;

    /* =====================================================
       CREATE CLIENT MANAGEMENT TOKEN

       The client receives the raw token.
       Only the SHA-256 hash is stored in Supabase.
    ===================================================== */

    const managementToken =
      createManagementToken();

    const managementTokenHash =
      hashToken(
        managementToken
      );

    /* =====================================================
       CONFIRM BOOKING

       Supabase remains the source of truth.
    ===================================================== */

    const confirmedAt =
      new Date().toISOString();

    const {
      data: confirmedBooking,
      error: confirmError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .update({
        status: "confirmed",

        confirmed_at:
          confirmedAt,

        management_token_hash:
          managementTokenHash,

        /*
         * Keep verification_token_hash.
         *
         * This allows the same verification
         * email to safely find the booking
         * again if it is clicked twice.
         */

        verification_expires_at:
          null,
      })
      .eq(
        "id",
        typedBooking.id
      )
      .eq(
        "status",
        "pending_verification"
      )
      .select(
        `
          id,
          name,
          email,
          phone,
          business,
          topic,
          consultation_date,
          consultation_time,
          google_calendar_event_id,
          confirmation_email_sent_at,
          management_token_hash
        `
      )
      .maybeSingle();

    if (confirmError) {
      console.error(
        "Unable to confirm consultation:",
        confirmError
      );

      return redirectToResult(
        request,
        "error"
      );
    }

    /* =====================================================
       HANDLE CONCURRENT REQUEST
    ===================================================== */

    if (!confirmedBooking) {
      const {
        data: latestBooking,
        error: latestError,
      } = await supabaseAdmin
        .from(
          "consultation_bookings"
        )
        .select(
          `
            status,
            google_calendar_event_id,
            confirmation_email_sent_at
          `
        )
        .eq(
          "id",
          typedBooking.id
        )
        .maybeSingle();

      if (latestError) {
        console.error(
          "Unable to re-check consultation booking:",
          latestError
        );

        return redirectToResult(
          request,
          "error"
        );
      }

      if (
        latestBooking?.status ===
        "confirmed"
      ) {
        return redirectToResult(
          request,
          "success"
        );
      }

      if (
        latestBooking?.status ===
        "expired"
      ) {
        return redirectToResult(
          request,
          "expired"
        );
      }

      if (
        latestBooking?.status ===
        "cancelled"
      ) {
        return redirectToResult(
          request,
          "cancelled"
        );
      }

      return redirectToResult(
        request,
        "error"
      );
    }

    const finalBooking =
      confirmedBooking as ConfirmedBooking;

    /* =====================================================
       BUILD CLIENT MANAGEMENT URL
    ===================================================== */

    const siteUrl =
      getSiteUrl(request);

    const manageUrl =
      `${siteUrl}/consultation/manage/${encodeURIComponent(
        managementToken
      )}`;

    /* =====================================================
       GOOGLE CALENDAR
    ===================================================== */

    let googleEventId =
      finalBooking
        .google_calendar_event_id;

    let meetLink:
      | string
      | null = null;

    /*
     * If an event already exists,
     * retrieve it so we can get
     * the Meet URL.
     */

    if (googleEventId) {
      const existingEvent =
        await getGoogleEvent(
          googleEventId
        );

      meetLink =
        getMeetLinkFromEvent(
          existingEvent
        );
    }

    /*
     * Create a Google event only
     * when one does not already exist.
     */

    if (!googleEventId) {
      try {
        const calendar =
          getGoogleCalendar();

        const startDateTime =
          makeLocalDateTime(
            finalBooking
              .consultation_date,
            finalBooking
              .consultation_time
          );

        const endDateTime =
          addMinutesToLocalDateTime(
            finalBooking
              .consultation_date,
            finalBooking
              .consultation_time,
            consultationLength
          );

        const displayDate =
          formatDisplayDate(
            finalBooking
              .consultation_date
          );

        const displayTime =
          formatDisplayTime(
            finalBooking
              .consultation_time
          );

        const businessLine =
          finalBooking.business
            ? `Business: ${finalBooking.business}`
            : "Business: Not provided";

        const phoneLine =
          finalBooking.phone
            ? `Phone: ${finalBooking.phone}`
            : "Phone: Not provided";

        const topicLine =
          finalBooking.topic
            ? `Consultation topic: ${finalBooking.topic}`
            : "Consultation topic: Not provided";

        const description = [
          "Jovavo Consultation",
          "",
          `Client: ${finalBooking.name}`,
          `Email: ${finalBooking.email}`,
          phoneLine,
          businessLine,
          topicLine,
          "",
          `Date: ${displayDate}`,
          `Time: ${displayTime}`,
          `Duration: ${consultationLength} minutes`,
          "",
          "Booked through jovavo.com",
        ].join("\n");

        /* ===============================================
           CREATE UNIQUE GOOGLE MEET REQUEST ID
        =============================================== */

        const conferenceRequestId =
          `jovavo-${finalBooking.id}-${crypto
            .randomBytes(6)
            .toString("hex")}`;

        /* ===============================================
           CREATE GOOGLE EVENT
        =============================================== */

        const eventResponse =
          await calendar.events.insert({
            calendarId:
              "primary",

            conferenceDataVersion:
              1,

            sendUpdates:
              "all",

            requestBody: {
              summary:
                finalBooking.business
                  ? `Jovavo Consultation — ${finalBooking.business}`
                  : `Jovavo Consultation — ${finalBooking.name}`,

              description,

              start: {
                dateTime:
                  startDateTime,

                timeZone:
                  calendarTimeZone,
              },

              end: {
                dateTime:
                  endDateTime,

                timeZone:
                  calendarTimeZone,
              },

              attendees: [
                {
                  email:
                    finalBooking.email,

                  displayName:
                    finalBooking.name,
                },
              ],

              conferenceData: {
                createRequest: {
                  requestId:
                    conferenceRequestId,

                  conferenceSolutionKey:
                    {
                      type:
                        "hangoutsMeet",
                    },
                },
              },

              reminders: {
                useDefault:
                  true,
              },
            },
          });

        googleEventId =
          eventResponse.data.id ||
          null;

        if (!googleEventId) {
          throw new Error(
            "Google created the calendar request without returning an event ID."
          );
        }

        meetLink =
          getMeetLinkFromEvent(
            eventResponse.data
          );

        /*
         * Sometimes conference creation
         * has not fully propagated in
         * the insert response.
         */

        if (!meetLink) {
          const createdEvent =
            await getGoogleEvent(
              googleEventId
            );

          meetLink =
            getMeetLinkFromEvent(
              createdEvent
            );
        }

        /* ===============================================
           SAVE GOOGLE EVENT ID
        =============================================== */

        const {
          error: saveEventError,
        } = await supabaseAdmin
          .from(
            "consultation_bookings"
          )
          .update({
            google_calendar_event_id:
              googleEventId,
          })
          .eq(
            "id",
            finalBooking.id
          )
          .is(
            "google_calendar_event_id",
            null
          );

        if (saveEventError) {
          console.error(
            "Calendar event was created but its ID could not be saved:",
            saveEventError
          );

          /*
           * Do not revert the confirmed
           * booking if Google succeeded
           * but saving the event ID failed.
           */
        }

        console.log(
          `Google Calendar event created for consultation ${finalBooking.id}: ${googleEventId}`
        );
      } catch (
        calendarError
      ) {
        /*
         * The booking has already been
         * confirmed in Supabase.
         *
         * A Google failure must not
         * invalidate the booking.
         */

        console.error(
          "Consultation confirmed, but Google Calendar event creation failed:",
          calendarError
        );
      }
    }

    /* =====================================================
       FINAL CONFIRMATION EMAIL

       Only send if the confirmation email
       has not already been sent.

       Email failure never reverts the booking.
    ===================================================== */

    if (
      !finalBooking
        .confirmation_email_sent_at
    ) {
      try {
        await sendConfirmationEmail({
          booking:
            finalBooking,

          consultationLength,

          meetLink,

          manageUrl,
        });

        const emailSentAt =
          new Date().toISOString();

        const {
          error:
            saveEmailStatusError,
        } = await supabaseAdmin
          .from(
            "consultation_bookings"
          )
          .update({
            confirmation_email_sent_at:
              emailSentAt,
          })
          .eq(
            "id",
            finalBooking.id
          )
          .is(
            "confirmation_email_sent_at",
            null
          );

        if (
          saveEmailStatusError
        ) {
          console.error(
            "Confirmation email was sent, but confirmation_email_sent_at could not be saved:",
            saveEmailStatusError
          );
        } else {
          console.log(
            `Jovavo confirmation email sent for consultation ${finalBooking.id}`
          );
        }
      } catch (emailError) {
        /*
         * Never cancel or revert a
         * confirmed consultation because
         * email delivery failed.
         */

        console.error(
          "Consultation confirmed, but final confirmation email failed:",
          emailError
        );
      }
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return redirectToResult(
      request,
      "success"
    );
  } catch (error) {
    console.error(
      "Consultation confirmation error:",
      error
    );

    return redirectToResult(
      request,
      "error"
    );
  }
}