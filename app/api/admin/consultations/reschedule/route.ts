import { NextRequest, NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { google } from "googleapis";
import { Resend } from "resend";

import { createClient } from "@/utils/supabase/server";

const TIME_ZONE = "America/New_York";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
   SUPABASE ADMIN
========================================================= */

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase admin environment variables are missing."
    );
  }

  return createAdminClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

/* =========================================================
   GOOGLE CALENDAR
========================================================= */

function getGoogleCalendar() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "Google Calendar environment variables are missing."
    );
  }

  const oauth2Client = new google.auth.OAuth2(
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
   HELPERS
========================================================= */

function normalizeTime(value: string) {
  return value.slice(0, 5);
}

function addMinutes(time: string, minutes: number) {
  const [hours, mins] = normalizeTime(time)
    .split(":")
    .map(Number);

  const total = hours * 60 + mins + minutes;

  const newHours = Math.floor(total / 60) % 24;
  const newMinutes = total % 60;

  return `${String(newHours).padStart(2, "0")}:${String(
    newMinutes
  ).padStart(2, "0")}`;
}

function makeLocalDateTime(date: string, time: string) {
  return `${date}T${normalizeTime(time)}:00`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: TIME_ZONE,
  }).format(new Date(`${date}T12:00:00`));
}

function formatTime(time: string) {
  const [hours, minutes] = normalizeTime(time)
    .split(":")
    .map(Number);

  const date = new Date();

  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(
      /\/$/,
      ""
    );
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

function escapeHtml(value: string | null | undefined) {
  if (!value) return "";

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================================
   RESCHEDULE EMAIL
========================================================= */

async function sendRescheduleEmail({
  name,
  email,
  oldDate,
  oldTime,
  newDate,
  newTime,
}: {
  name: string;
  email: string;
  oldDate: string;
  oldTime: string;
  newDate: string;
  newTime: string;
}) {
  const oldDisplayDate = formatDate(oldDate);
  const oldDisplayTime = formatTime(oldTime);

  const newDisplayDate = formatDate(newDate);
  const newDisplayTime = formatTime(newTime);

  const siteUrl = getSiteUrl();

  const safeName = escapeHtml(name);

  const html = `
<!DOCTYPE html>
<html lang="en">
  <body
    style="
      margin:0;
      padding:0;
      background:#f8f5ef;
      font-family:Arial,Helvetica,sans-serif;
      color:#1b1713;
    "
  >
    <table
      role="presentation"
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
    >
      <tr>
        <td align="center" style="padding:48px 20px;">
          <table
            role="presentation"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            border="0"
            style="
              max-width:620px;
              background:#fffdf9;
              border:1px solid #e2dbd1;
              border-radius:24px;
              overflow:hidden;
            "
          >
            <tr>
              <td
                style="
                  padding:34px 38px 28px;
                  border-bottom:1px solid #e8e1d8;
                "
              >
                <div
                  style="
                    font-size:13px;
                    font-weight:700;
                    letter-spacing:.28em;
                  "
                >
                  JOVAVO
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:42px 38px 40px;">
                <div
                  style="
                    margin-bottom:14px;
                    font-size:10px;
                    font-weight:700;
                    letter-spacing:.18em;
                    text-transform:uppercase;
                    color:#8a8178;
                  "
                >
                  Consultation Update
                </div>

                <h1
                  style="
                    margin:0;
                    font-family:Georgia,'Times New Roman',serif;
                    font-size:34px;
                    line-height:1.15;
                    font-weight:400;
                  "
                >
                  Your consultation has been rescheduled.
                </h1>

                <p
                  style="
                    margin:26px 0 0;
                    font-size:15px;
                    line-height:1.8;
                    color:#655e56;
                  "
                >
                  Hi ${safeName},
                </p>

                <p
                  style="
                    margin:12px 0 0;
                    font-size:15px;
                    line-height:1.8;
                    color:#655e56;
                  "
                >
                  Your consultation with Jovavo has been
                  moved to a new date and time. Your updated
                  appointment details are below.
                </p>

                <table
                  role="presentation"
                  width="100%"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="
                    margin-top:30px;
                    background:#f8f5ef;
                    border:1px solid #e8e1d8;
                    border-radius:18px;
                  "
                >
                  <tr>
                    <td style="padding:24px;">
                      <div
                        style="
                          font-size:10px;
                          font-weight:700;
                          letter-spacing:.15em;
                          text-transform:uppercase;
                          color:#9a9289;
                        "
                      >
                        New Consultation Time
                      </div>

                      <div
                        style="
                          margin-top:12px;
                          font-family:Georgia,'Times New Roman',serif;
                          font-size:21px;
                        "
                      >
                        ${escapeHtml(newDisplayDate)}
                      </div>

                      <div
                        style="
                          margin-top:7px;
                          font-size:14px;
                          color:#655e56;
                        "
                      >
                        ${escapeHtml(newDisplayTime)} ET
                      </div>
                    </td>
                  </tr>
                </table>

                <p
                  style="
                    margin:24px 0 0;
                    font-size:12px;
                    line-height:1.7;
                    color:#9a9289;
                  "
                >
                  Previous appointment:
                  ${escapeHtml(oldDisplayDate)} at
                  ${escapeHtml(oldDisplayTime)} ET
                </p>

                <p
                  style="
                    margin:28px 0 0;
                    font-size:14px;
                    line-height:1.8;
                    color:#655e56;
                  "
                >
                  Your Google Calendar invitation has also
                  been updated with the new appointment time.
                </p>

                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  style="margin-top:28px;"
                >
                  <tr>
                    <td
                      bgcolor="#1b1713"
                      style="border-radius:999px;"
                    >
                      <a
                        href="${escapeHtml(siteUrl)}"
                        style="
                          display:inline-block;
                          padding:15px 26px;
                          font-size:13px;
                          font-weight:600;
                          color:#ffffff;
                          text-decoration:none;
                        "
                      >
                        Visit Jovavo
                      </a>
                    </td>
                  </tr>
                </table>

                <p
                  style="
                    margin:34px 0 0;
                    font-size:13px;
                    line-height:1.7;
                    color:#8a8178;
                  "
                >
                  If you have any questions about your
                  appointment, simply reply to this email.
                </p>
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding:25px 38px;
                  border-top:1px solid #e8e1d8;
                  background:#f8f5ef;
                "
              >
                <p
                  style="
                    margin:0;
                    font-size:11px;
                    line-height:1.7;
                    color:#9a9289;
                  "
                >
                  Jovavo<br />
                  Web Design · E-Commerce · Digital Growth
                </p>

                <p
                  style="
                    margin:10px 0 0;
                    font-size:11px;
                    color:#aaa298;
                  "
                >
                  jovavo.com
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

  const text = `
Your Jovavo consultation has been rescheduled.

Hi ${name},

Your consultation has been moved.

NEW APPOINTMENT
${newDisplayDate}
${newDisplayTime} ET

Previous appointment:
${oldDisplayDate}
${oldDisplayTime} ET

Your Google Calendar invitation has also been updated.

If you have any questions, reply to this email.

Jovavo
jovavo.com
  `.trim();

  const { error } = await resend.emails.send({
    from: "Jovavo <bookings@jovavo.com>",
    to: email,
    replyTo: "contact@jovavo.com",
    subject: `Your Jovavo consultation has been rescheduled — ${newDisplayDate}`,
    html,
    text,
  });

  if (error) {
    throw new Error(
      `Unable to send reschedule email: ${error.message}`
    );
  }
}

/* =========================================================
   POST
========================================================= */

export async function POST(request: NextRequest) {
  try {
    /* =====================================================
       AUTH
    ===================================================== */

    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized.",
        },
        { status: 401 }
      );
    }

    const { data: isAdmin, error: adminError } =
      await supabase.rpc("is_admin");

    if (adminError || !isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: "Forbidden.",
        },
        { status: 403 }
      );
    }

    /* =====================================================
       REQUEST
    ===================================================== */

    let body: {
      bookingId?: string;
      consultationDate?: string;
      consultationTime?: string;
    };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request.",
        },
        { status: 400 }
      );
    }

    const bookingId = body.bookingId?.trim();
    const newDate = body.consultationDate?.trim();
    const newTime = body.consultationTime
      ? normalizeTime(body.consultationTime)
      : "";

    if (!bookingId || !newDate || !newTime) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Booking, date, and time are required.",
        },
        { status: 400 }
      );
    }

    const supabaseAdmin = getSupabaseAdmin();

    /* =====================================================
       LOAD BOOKING
    ===================================================== */

    const { data: booking, error: bookingError } =
      await supabaseAdmin
        .from("consultation_bookings")
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
            status,
            google_calendar_event_id
          `
        )
        .eq("id", bookingId)
        .maybeSingle();

    if (bookingError || !booking) {
      return NextResponse.json(
        {
          success: false,
          error: "Consultation not found.",
        },
        { status: 404 }
      );
    }

    if (booking.status !== "confirmed") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Only confirmed consultations can be rescheduled.",
        },
        { status: 400 }
      );
    }

    const oldDate = booking.consultation_date;
    const oldTime = normalizeTime(
      booking.consultation_time
    );

    if (
      oldDate === newDate &&
      oldTime === newTime
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please choose a different date or time.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       SETTINGS
    ===================================================== */

    const { data: settings, error: settingsError } =
      await supabaseAdmin
        .from("consultation_settings")
        .select(
          `
            consultation_length_minutes,
            minimum_notice_hours,
            booking_window_days,
            timezone
          `
        )
        .eq("id", 1)
        .maybeSingle();

    if (settingsError || !settings) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to load consultation settings.",
        },
        { status: 500 }
      );
    }

    const duration =
      settings.consultation_length_minutes ?? 30;

    const timeZone =
      settings.timezone || TIME_ZONE;

    /* =====================================================
       CHECK FOR ANOTHER BOOKING IN THIS SLOT
    ===================================================== */

    const { data: conflictingBooking, error: conflictError } =
      await supabaseAdmin
        .from("consultation_bookings")
        .select("id")
        .eq("consultation_date", newDate)
        .eq("consultation_time", newTime)
        .eq("status", "confirmed")
        .neq("id", booking.id)
        .maybeSingle();

    if (conflictError) {
      console.error(
        "Unable to check consultation conflict:",
        conflictError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify the selected time.",
        },
        { status: 500 }
      );
    }

    if (conflictingBooking) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is already booked.",
        },
        { status: 409 }
      );
    }

    /* =====================================================
       UPDATE GOOGLE CALENDAR

       Keep the SAME event + SAME Meet.
    ===================================================== */

    if (!booking.google_calendar_event_id) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This consultation does not have a linked Google Calendar event.",
        },
        { status: 400 }
      );
    }

    const calendar = getGoogleCalendar();

    try {
      await calendar.events.patch({
        calendarId: "primary",
        eventId: booking.google_calendar_event_id,
        sendUpdates: "all",
        requestBody: {
          start: {
            dateTime: makeLocalDateTime(
              newDate,
              newTime
            ),
            timeZone,
          },
          end: {
            dateTime: makeLocalDateTime(
              newDate,
              addMinutes(newTime, duration)
            ),
            timeZone,
          },
        },
      });
    } catch (googleError) {
      console.error(
        "Unable to reschedule Google Calendar event:",
        googleError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to update Google Calendar. The consultation was not rescheduled.",
        },
        { status: 502 }
      );
    }

    /* =====================================================
       UPDATE SUPABASE
    ===================================================== */

    const {
      data: updatedBooking,
      error: updateError,
    } = await supabaseAdmin
      .from("consultation_bookings")
      .update({
        consultation_date: newDate,
        consultation_time: newTime,
      })
      .eq("id", booking.id)
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
          status,
          google_calendar_event_id
        `
      )
      .single();

    if (updateError) {
      console.error(
        "Google Calendar was updated but Supabase failed:",
        updateError
      );

      /*
       * Try to restore Google Calendar to its old time.
       */

      try {
        await calendar.events.patch({
          calendarId: "primary",
          eventId:
            booking.google_calendar_event_id,
          sendUpdates: "none",
          requestBody: {
            start: {
              dateTime: makeLocalDateTime(
                oldDate,
                oldTime
              ),
              timeZone,
            },
            end: {
              dateTime: makeLocalDateTime(
                oldDate,
                addMinutes(oldTime, duration)
              ),
              timeZone,
            },
          },
        });
      } catch (rollbackError) {
        console.error(
          "Unable to roll Google Calendar back:",
          rollbackError
        );
      }

      return NextResponse.json(
        {
          success: false,
          error:
            "The consultation could not be rescheduled. Please try again.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       BRANDED RESCHEDULE EMAIL
    ===================================================== */

    let rescheduleEmailSent = false;

    try {
      await sendRescheduleEmail({
        name: booking.name,
        email: booking.email,
        oldDate,
        oldTime,
        newDate,
        newTime,
      });

      rescheduleEmailSent = true;
    } catch (emailError) {
      /*
       * The actual reschedule already succeeded.
       * Never roll it back because an email failed.
       */

      console.error(
        "Consultation rescheduled, but branded email failed:",
        emailError
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      message:
        "Consultation rescheduled successfully.",
      booking: updatedBooking,
      rescheduleEmailSent,
    });
  } catch (error) {
    console.error(
      "Unexpected consultation reschedule error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while rescheduling the consultation.",
      },
      { status: 500 }
    );
  }
}