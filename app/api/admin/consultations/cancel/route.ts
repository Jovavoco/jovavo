import { NextRequest, NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { google } from "googleapis";
import { Resend } from "resend";

import { createClient } from "@/utils/supabase/server";

/* =========================================================
   CONSTANTS
========================================================= */

const TIME_ZONE = "America/New_York";

const resend = new Resend(process.env.RESEND_API_KEY);

/* =========================================================
   SUPABASE ADMIN CLIENT
========================================================= */

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is not configured."
    );
  }

  if (!supabaseSecretKey) {
    throw new Error(
      "SUPABASE_SECRET_KEY is not configured."
    );
  }

  return createAdminClient(
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
   GOOGLE CALENDAR CLIENT
========================================================= */

function getGoogleCalendar() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

  if (!clientId) {
    throw new Error(
      "GOOGLE_CLIENT_ID is not configured."
    );
  }

  if (!clientSecret) {
    throw new Error(
      "GOOGLE_CLIENT_SECRET is not configured."
    );
  }

  if (!refreshToken) {
    throw new Error(
      "GOOGLE_REFRESH_TOKEN is not configured."
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

function escapeHtml(value: string | null | undefined) {
  if (!value) return "";

  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalizeTime(value: string) {
  return value.slice(0, 5);
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
    timeZone: TIME_ZONE,
  }).format(parsed);
}

function getSiteUrl() {
  const configured =
    process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configured) {
    return configured.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

/* =========================================================
   CANCELLATION EMAIL
========================================================= */

async function sendCancellationEmail({
  name,
  email,
  consultationDate,
  consultationTime,
}: {
  name: string;
  email: string;
  consultationDate: string;
  consultationTime: string;
}) {
  const displayDate = formatDate(consultationDate);
  const displayTime = formatTime(consultationTime);

  const siteUrl = getSiteUrl();

  const bookingUrl = `${siteUrl}/consultation`;

  const safeName = escapeHtml(name);
  const safeDate = escapeHtml(displayDate);
  const safeTime = escapeHtml(displayTime);
  const safeBookingUrl = escapeHtml(bookingUrl);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Consultation Cancelled</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f8f5ef;
          font-family: Arial, Helvetica, sans-serif;
          color: #1b1713;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="background-color: #f8f5ef;"
        >
          <tr>
            <td
              align="center"
              style="padding: 48px 20px;"
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  max-width: 620px;
                  background-color: #fffdf9;
                  border: 1px solid #e2dbd1;
                  border-radius: 24px;
                  overflow: hidden;
                "
              >
                <!-- HEADER -->

                <tr>
                  <td
                    style="
                      padding: 34px 38px 28px;
                      border-bottom: 1px solid #e8e1d8;
                    "
                  >
                    <div
                      style="
                        font-size: 13px;
                        font-weight: 700;
                        letter-spacing: 0.28em;
                        color: #1b1713;
                      "
                    >
                      JOVAVO
                    </div>
                  </td>
                </tr>

                <!-- BODY -->

                <tr>
                  <td
                    style="
                      padding: 42px 38px 40px;
                    "
                  >
                    <div
                      style="
                        margin-bottom: 14px;
                        font-size: 10px;
                        font-weight: 700;
                        letter-spacing: 0.18em;
                        text-transform: uppercase;
                        color: #8a8178;
                      "
                    >
                      Consultation Update
                    </div>

                    <h1
                      style="
                        margin: 0;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 34px;
                        line-height: 1.15;
                        font-weight: 400;
                        color: #1b1713;
                      "
                    >
                      Your consultation has been cancelled.
                    </h1>

                    <p
                      style="
                        margin: 26px 0 0;
                        font-size: 15px;
                        line-height: 1.8;
                        color: #655e56;
                      "
                    >
                      Hi ${safeName},
                    </p>

                    <p
                      style="
                        margin: 12px 0 0;
                        font-size: 15px;
                        line-height: 1.8;
                        color: #655e56;
                      "
                    >
                      Your scheduled consultation with Jovavo
                      has been cancelled. The appointment
                      details are included below for your
                      reference.
                    </p>

                    <!-- APPOINTMENT -->

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        margin-top: 30px;
                        background-color: #f8f5ef;
                        border: 1px solid #e8e1d8;
                        border-radius: 18px;
                      "
                    >
                      <tr>
                        <td
                          style="
                            padding: 24px;
                          "
                        >
                          <div
                            style="
                              font-size: 10px;
                              font-weight: 700;
                              letter-spacing: 0.15em;
                              text-transform: uppercase;
                              color: #9a9289;
                            "
                          >
                            Cancelled Consultation
                          </div>

                          <div
                            style="
                              margin-top: 12px;
                              font-family: Georgia, 'Times New Roman', serif;
                              font-size: 21px;
                              line-height: 1.4;
                              color: #1b1713;
                            "
                          >
                            ${safeDate}
                          </div>

                          <div
                            style="
                              margin-top: 7px;
                              font-size: 14px;
                              color: #655e56;
                            "
                          >
                            ${safeTime} ET
                          </div>
                        </td>
                      </tr>
                    </table>

                    <p
                      style="
                        margin: 28px 0 0;
                        font-size: 15px;
                        line-height: 1.8;
                        color: #655e56;
                      "
                    >
                      If you'd still like to speak with us,
                      you're welcome to choose another time
                      that works for you.
                    </p>

                    <!-- BUTTON -->

                    <table
                      role="presentation"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="margin-top: 28px;"
                    >
                      <tr>
                        <td
                          align="center"
                          bgcolor="#1b1713"
                          style="
                            border-radius: 999px;
                          "
                        >
                          <a
                            href="${safeBookingUrl}"
                            style="
                              display: inline-block;
                              padding: 15px 26px;
                              font-size: 13px;
                              font-weight: 600;
                              color: #ffffff;
                              text-decoration: none;
                            "
                          >
                            Book Another Consultation
                          </a>
                        </td>
                      </tr>
                    </table>

                    <p
                      style="
                        margin: 34px 0 0;
                        font-size: 13px;
                        line-height: 1.7;
                        color: #8a8178;
                      "
                    >
                      If you have any questions, simply reply
                      to this email and we'll be happy to help.
                    </p>
                  </td>
                </tr>

                <!-- FOOTER -->

                <tr>
                  <td
                    style="
                      padding: 25px 38px;
                      border-top: 1px solid #e8e1d8;
                      background-color: #f8f5ef;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        font-size: 11px;
                        line-height: 1.7;
                        color: #9a9289;
                      "
                    >
                      Jovavo<br />
                      Web Design · E-Commerce · Digital Growth
                    </p>

                    <p
                      style="
                        margin: 10px 0 0;
                        font-size: 11px;
                        color: #aaa298;
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
Your Jovavo consultation has been cancelled.

Hi ${name},

Your scheduled consultation with Jovavo has been cancelled.

Cancelled appointment:
${displayDate}
${displayTime} ET

If you'd still like to speak with us, you can book another consultation here:

${bookingUrl}

If you have any questions, reply to this email.

Jovavo
jovavo.com
  `.trim();

  const { data, error } = await resend.emails.send({
    from: "Jovavo <bookings@jovavo.com>",
    to: email,
    replyTo: "contact@jovavo.com",
    subject: `Your Jovavo consultation has been cancelled — ${displayDate}`,
    html,
    text,
  });

  if (error) {
    throw new Error(
      `Resend cancellation email failed: ${error.message}`
    );
  }

  return data;
}

/* =========================================================
   POST — CANCEL CONSULTATION
========================================================= */

export async function POST(request: NextRequest) {
  try {
    /* =====================================================
       AUTHENTICATE CURRENT USER
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

    /* =====================================================
       VERIFY ADMIN ACCESS
    ===================================================== */

    const { data: isAdmin, error: adminError } =
      await supabase.rpc("is_admin");

    if (adminError) {
      console.error(
        "Unable to verify consultation admin:",
        adminError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to verify administrator access.",
        },
        { status: 500 }
      );
    }

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error: "Forbidden.",
        },
        { status: 403 }
      );
    }

    /* =====================================================
       REQUEST BODY
    ===================================================== */

    let body: {
      bookingId?: string;
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

    if (!bookingId) {
      return NextResponse.json(
        {
          success: false,
          error: "Booking ID is required.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       ADMIN DATABASE CLIENT
    ===================================================== */

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
            consultation_date,
            consultation_time,
            status,
            google_calendar_event_id,
            cancelled_at
          `
        )
        .eq("id", bookingId)
        .maybeSingle();

    if (bookingError) {
      console.error(
        "Unable to load consultation for cancellation:",
        bookingError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unable to load consultation.",
        },
        { status: 500 }
      );
    }

    if (!booking) {
      return NextResponse.json(
        {
          success: false,
          error: "Consultation not found.",
        },
        { status: 404 }
      );
    }

    /* =====================================================
       ALREADY CANCELLED
    ===================================================== */

    if (booking.status === "cancelled") {
      return NextResponse.json({
        success: true,
        alreadyCancelled: true,
        message:
          "Consultation is already cancelled.",
      });
    }

    /* =====================================================
       DELETE GOOGLE CALENDAR EVENT
    ===================================================== */

    if (booking.google_calendar_event_id) {
      try {
        const calendar = getGoogleCalendar();

        await calendar.events.delete({
          calendarId: "primary",
          eventId:
            booking.google_calendar_event_id,
          sendUpdates: "all",
        });

        console.log(
          `Deleted Google Calendar event ${booking.google_calendar_event_id} for consultation ${booking.id}.`
        );
      } catch (error: any) {
        const status =
          error?.response?.status ??
          error?.code;

        /*
         * 404 / 410 means Google no longer has the event.
         * In either case we can safely continue.
         */

        if (status === 404 || status === 410) {
          console.warn(
            `Google Calendar event ${booking.google_calendar_event_id} was already missing. Continuing cancellation.`
          );
        } else {
          console.error(
            "Unable to delete Google Calendar event:",
            error
          );

          return NextResponse.json(
            {
              success: false,
              error:
                "Unable to remove the consultation from Google Calendar. The booking was not cancelled.",
            },
            { status: 502 }
          );
        }
      }
    }

    /* =====================================================
       MARK BOOKING CANCELLED
    ===================================================== */

    const cancelledAt = new Date().toISOString();

    const {
      data: cancelledBooking,
      error: cancellationError,
    } = await supabaseAdmin
      .from("consultation_bookings")
      .update({
        status: "cancelled",
        cancelled_at: cancelledAt,
      })
      .eq("id", booking.id)
      .select(
        `
          id,
          name,
          email,
          consultation_date,
          consultation_time,
          status,
          google_calendar_event_id,
          cancelled_at
        `
      )
      .single();

    if (cancellationError) {
      console.error(
        "Google Calendar event was removed, but Supabase cancellation failed:",
        cancellationError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "The Calendar event was removed, but the booking could not be marked cancelled. Please refresh and try again.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       SEND BRANDED CANCELLATION EMAIL

       Important:
       The consultation is already cancelled at this point.
       If the email fails, we do NOT undo the cancellation.
    ===================================================== */

    let cancellationEmailSent = false;

    try {
      await sendCancellationEmail({
        name: booking.name,
        email: booking.email,
        consultationDate:
          booking.consultation_date,
        consultationTime:
          booking.consultation_time,
      });

      cancellationEmailSent = true;

      console.log(
        `Jovavo cancellation email sent for consultation ${booking.id}.`
      );
    } catch (emailError) {
      console.error(
        "Consultation was cancelled, but the Jovavo cancellation email failed:",
        emailError
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      message:
        "Consultation cancelled successfully.",
      booking: cancelledBooking,
      cancellationEmailSent,
    });
  } catch (error) {
    console.error(
      "Unexpected consultation cancellation error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while cancelling the consultation.",
      },
      { status: 500 }
    );
  }
}