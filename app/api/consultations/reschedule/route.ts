import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { google } from "googleapis";
import { Resend } from "resend";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIME_ZONE = "America/New_York";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

/* =========================================================
   SUPABASE ADMIN
========================================================= */

function getSupabaseAdmin() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase admin environment variables are missing."
    );
  }

  return createClient(url, key, {
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
   HELPERS
========================================================= */

function hashToken(
  token: string
) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

function normalizeTime(
  value: string
) {
  return value.slice(0, 5);
}

function validDateString(
  value: string
) {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(
      value
    )
  ) {
    return false;
  }

  const [
    year,
    month,
    day,
  ] = value
    .split("-")
    .map(Number);

  const date = new Date(
    Date.UTC(
      year,
      month - 1,
      day
    )
  );

  return (
    date.getUTCFullYear() ===
      year &&
    date.getUTCMonth() ===
      month - 1 &&
    date.getUTCDate() === day
  );
}

function validTimeString(
  value: string
) {
  if (
    !/^\d{2}:\d{2}$/.test(
      value
    )
  ) {
    return false;
  }

  const [
    hours,
    minutes,
  ] = value
    .split(":")
    .map(Number);

  return (
    hours >= 0 &&
    hours <= 23 &&
    minutes >= 0 &&
    minutes <= 59
  );
}

function addMinutes(
  time: string,
  minutes: number
) {
  const [
    hours,
    mins,
  ] = normalizeTime(time)
    .split(":")
    .map(Number);

  const total =
    hours * 60 +
    mins +
    minutes;

  const newHours =
    Math.floor(total / 60) %
    24;

  const newMinutes =
    total % 60;

  return `${String(
    newHours
  ).padStart(
    2,
    "0"
  )}:${String(
    newMinutes
  ).padStart(2, "0")}`;
}

function makeLocalDateTime(
  date: string,
  time: string
) {
  return `${date}T${normalizeTime(
    time
  )}:00`;
}

function formatDate(
  date: string
) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: TIME_ZONE,
    }
  ).format(
    new Date(
      `${date}T12:00:00`
    )
  );
}

function formatTime(
  time: string
) {
  const [
    hours,
    minutes,
  ] = normalizeTime(time)
    .split(":")
    .map(Number);

  const date =
    new Date();

  date.setHours(
    hours,
    minutes,
    0,
    0
  );

  return new Intl.DateTimeFormat(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit",
    }
  ).format(date);
}

function escapeHtml(
  value:
    | string
    | null
    | undefined
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

function getSiteUrl(
  request: NextRequest
) {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(
      /\/+$/,
      ""
    );

  if (configured) {
    return configured;
  }

  if (
    process.env.VERCEL_URL
  ) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return request.nextUrl.origin;
}

/* =========================================================
   CHECK LIVE AVAILABILITY

   This intentionally uses the existing availability route
   so client rescheduling follows the SAME rules as normal
   consultation booking.
========================================================= */

async function verifyAvailability(
  request: NextRequest,
  date: string,
  time: string
) {
  const siteUrl =
    getSiteUrl(request);

  const availabilityUrl =
    `${siteUrl}/api/consultations/availability?date=${encodeURIComponent(
      date
    )}`;

  const response =
    await fetch(
      availabilityUrl,
      {
        method: "GET",
        cache: "no-store",
      }
    );

  if (!response.ok) {
    throw new Error(
      "Unable to verify consultation availability."
    );
  }

  const data =
    (await response.json()) as {
      success?: boolean;
      slots?: Array<{
        value: string;
        label: string;
      }>;
      reason?: string;
      error?: string;
    };

  if (!data.success) {
    throw new Error(
      data.error ||
        "Unable to verify consultation availability."
    );
  }

  const available =
    (data.slots || []).some(
      (slot) =>
        normalizeTime(
          slot.value
        ) ===
        normalizeTime(time)
    );

  return available;
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
  manageUrl,
}: {
  name: string;
  email: string;
  oldDate: string;
  oldTime: string;
  newDate: string;
  newTime: string;
  manageUrl: string;
}) {
  const oldDisplayDate =
    formatDate(oldDate);

  const oldDisplayTime =
    formatTime(oldTime);

  const newDisplayDate =
    formatDate(newDate);

  const newDisplayTime =
    formatTime(newTime);

  const safeName =
    escapeHtml(name);

  const safeManageUrl =
    escapeHtml(manageUrl);

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
        <td
          align="center"
          style="padding:48px 20px;"
        >
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
              <td
                style="
                  padding:42px 38px 40px;
                "
              >
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
                    <td
                      style="padding:24px;"
                    >
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
                        ${escapeHtml(
                          newDisplayDate
                        )}
                      </div>

                      <div
                        style="
                          margin-top:7px;
                          font-size:14px;
                          color:#655e56;
                        "
                      >
                        ${escapeHtml(
                          newDisplayTime
                        )} ET
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
                  ${escapeHtml(
                    oldDisplayDate
                  )}
                  at
                  ${escapeHtml(
                    oldDisplayTime
                  )}
                  ET
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
                        href="${safeManageUrl}"
                        style="
                          display:inline-block;
                          padding:15px 26px;
                          font-size:13px;
                          font-weight:600;
                          color:#ffffff;
                          text-decoration:none;
                        "
                      >
                        Manage Consultation
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

Manage your consultation:
${manageUrl}

If you have any questions, reply to this email.

Jovavo
jovavo.com
  `.trim();

  const { error } =
    await resend.emails.send({
      from:
        "Jovavo <bookings@jovavo.com>",

      to: email,

      replyTo:
        "contact@jovavo.com",

      subject:
        `Your Jovavo consultation has been rescheduled — ${newDisplayDate}`,

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

export async function POST(
  request: NextRequest
) {
  try {
    /* =====================================================
       REQUEST
    ===================================================== */

    let body: {
      token?: string;
      consultationDate?: string;
      consultationTime?: string;
    };

    try {
      body =
        await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid request.",
        },
        {
          status: 400,
        }
      );
    }

    const token =
      body.token?.trim();

    const newDate =
      body.consultationDate?.trim();

    const newTime =
      body.consultationTime
        ? normalizeTime(
            body.consultationTime
          )
        : "";

    if (
      !token ||
      token.length < 20
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This consultation management link is invalid.",
        },
        {
          status: 401,
        }
      );
    }

    if (
      !newDate ||
      !validDateString(
        newDate
      ) ||
      !newTime ||
      !validTimeString(
        newTime
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Please select a valid consultation date and time.",
        },
        {
          status: 400,
        }
      );
    }

    const supabaseAdmin =
      getSupabaseAdmin();

    /* =====================================================
       VERIFY MANAGEMENT TOKEN + LOAD BOOKING
    ===================================================== */

    const tokenHash =
      hashToken(token);

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
          consultation_date,
          consultation_time,
          status,
          google_calendar_event_id,
          management_token_hash
        `
      )
      .eq(
        "management_token_hash",
        tokenHash
      )
      .maybeSingle();

    if (
      bookingError ||
      !booking
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This consultation management link is invalid or no longer available.",
        },
        {
          status: 404,
        }
      );
    }

    if (
      booking.status !==
      "confirmed"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            booking.status ===
            "cancelled"
              ? "This consultation has already been cancelled."
              : "Only confirmed consultations can be rescheduled.",
        },
        {
          status: 409,
        }
      );
    }

    const oldDate =
      booking.consultation_date;

    const oldTime =
      normalizeTime(
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
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VERIFY LIVE AVAILABILITY

       Never trust the browser's calendar alone.
    ===================================================== */

    let slotAvailable =
      false;

    try {
      slotAvailable =
        await verifyAvailability(
          request,
          newDate,
          newTime
        );
    } catch (
      availabilityError
    ) {
      console.error(
        "Unable to verify client reschedule availability:",
        availabilityError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't verify that time right now. Please try again.",
        },
        {
          status: 500,
        }
      );
    }

    if (!slotAvailable) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is no longer available. Please choose another time.",
        },
        {
          status: 409,
        }
      );
    }

    /* =====================================================
       SETTINGS
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

    if (
      settingsError ||
      !settings
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to load consultation settings.",
        },
        {
          status: 500,
        }
      );
    }

    const duration =
      settings.consultation_length_minutes ??
      30;

    const timeZone =
      settings.timezone ||
      TIME_ZONE;

    /* =====================================================
       FINAL DATABASE CONFLICT CHECK

       Availability was checked above, but we check again
       immediately before changing anything.
    ===================================================== */

    const {
      data: conflictingBookings,
      error: conflictError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .select(
        `
          id,
          status,
          verification_expires_at
        `
      )
      .eq(
        "consultation_date",
        newDate
      )
      .eq(
        "consultation_time",
        newTime
      )
      .in("status", [
        "pending_verification",
        "confirmed",
      ])
      .neq(
        "id",
        booking.id
      );

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
        {
          status: 500,
        }
      );
    }

    const now =
      new Date();

    const hasActiveConflict =
      (
        conflictingBookings ||
        []
      ).some(
        (conflict) => {
          if (
            conflict.status ===
            "confirmed"
          ) {
            return true;
          }

          if (
            conflict.status ===
            "pending_verification"
          ) {
            if (
              !conflict.verification_expires_at
            ) {
              return false;
            }

            return (
              new Date(
                conflict.verification_expires_at
              ).getTime() >
              now.getTime()
            );
          }

          return false;
        }
      );

    if (hasActiveConflict) {
      return NextResponse.json(
        {
          success: false,
          error:
            "That consultation time is no longer available. Please choose another time.",
        },
        {
          status: 409,
        }
      );
    }

    /* =====================================================
       GOOGLE CALENDAR

       PATCH the SAME event.
       This preserves the existing Google Meet.
    ===================================================== */

    if (
      !booking.google_calendar_event_id
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This consultation does not have a linked Google Calendar event.",
        },
        {
          status: 400,
        }
      );
    }

    const calendar =
      getGoogleCalendar();

    try {
      await calendar.events.patch({
        calendarId: "primary",

        eventId:
          booking.google_calendar_event_id,

        sendUpdates: "all",

        requestBody: {
          start: {
            dateTime:
              makeLocalDateTime(
                newDate,
                newTime
              ),

            timeZone,
          },

          end: {
            dateTime:
              makeLocalDateTime(
                newDate,
                addMinutes(
                  newTime,
                  duration
                )
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
            "We couldn't update the calendar invitation. Your consultation was not rescheduled.",
        },
        {
          status: 502,
        }
      );
    }

    /* =====================================================
       UPDATE SUPABASE
    ===================================================== */

    const {
      data: updatedBooking,
      error: updateError,
    } = await supabaseAdmin
      .from(
        "consultation_bookings"
      )
      .update({
        consultation_date:
          newDate,

        consultation_time:
          newTime,
      })
      .eq(
        "id",
        booking.id
      )
      .eq(
        "status",
        "confirmed"
      )
      .eq(
        "management_token_hash",
        tokenHash
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
          status
        `
      )
      .single();

    if (updateError) {
      console.error(
        "Google Calendar updated but Supabase update failed:",
        updateError
      );

      /* ---------------------------------------------------
         TRY TO RESTORE GOOGLE TO ORIGINAL TIME
      --------------------------------------------------- */

      try {
        await calendar.events.patch({
          calendarId:
            "primary",

          eventId:
            booking.google_calendar_event_id,

          sendUpdates:
            "none",

          requestBody: {
            start: {
              dateTime:
                makeLocalDateTime(
                  oldDate,
                  oldTime
                ),

              timeZone,
            },

            end: {
              dateTime:
                makeLocalDateTime(
                  oldDate,
                  addMinutes(
                    oldTime,
                    duration
                  )
                ),

              timeZone,
            },
          },
        });
      } catch (
        rollbackError
      ) {
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
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       BRANDED EMAIL

       Rescheduling already succeeded at this point.
       An email failure should NOT undo the appointment.
    ===================================================== */

    const siteUrl =
      getSiteUrl(request);

    const manageUrl =
      `${siteUrl}/consultation/manage/${encodeURIComponent(
        token
      )}`;

    let rescheduleEmailSent =
      false;

    try {
      await sendRescheduleEmail({
        name:
          booking.name,

        email:
          booking.email,

        oldDate,

        oldTime,

        newDate,

        newTime,

        manageUrl,
      });

      rescheduleEmailSent =
        true;
    } catch (emailError) {
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

      booking: {
        id:
          updatedBooking.id,

        name:
          updatedBooking.name,

        email:
          updatedBooking.email,

        phone:
          updatedBooking.phone,

        business:
          updatedBooking.business,

        topic:
          updatedBooking.topic,

        consultationDate:
          updatedBooking.consultation_date,

        consultationTime:
          updatedBooking.consultation_time,

        status:
          updatedBooking.status,
      },

      rescheduleEmailSent,
    });
  } catch (error) {
    console.error(
      "Unexpected client consultation reschedule error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        error:
          "Something went wrong while rescheduling your consultation.",
      },
      {
        status: 500,
      }
    );
  }
}