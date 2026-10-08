import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Google Calendar environment variables are missing.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       GOOGLE AUTH
    ===================================================== */

    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret
    );

    oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    /* =====================================================
       GOOGLE CALENDAR
    ===================================================== */

    const calendar = google.calendar({
      version: "v3",
      auth: oauth2Client,
    });

    /* =====================================================
       CREATE TEST EVENT

       Creates a 30-minute event tomorrow at 2:00 PM
       New York time.
    ===================================================== */

    const now = new Date();

    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const day = String(tomorrow.getDate()).padStart(2, "0");

    const date = `${year}-${month}-${day}`;

    const event = await calendar.events.insert({
      calendarId: "primary",

      requestBody: {
        summary: "Jovavo Consultation — Test",

        description:
          "Test event created by the Jovavo consultation booking system.",

        start: {
          dateTime: `${date}T14:00:00`,
          timeZone: "America/New_York",
        },

        end: {
          dateTime: `${date}T14:30:00`,
          timeZone: "America/New_York",
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Test calendar event created.",
      eventId: event.data.id,
      eventLink: event.data.htmlLink,
    });
  } catch (error) {
    console.error("Google Calendar test error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to create Google Calendar test event.",
      },
      { status: 500 }
    );
  }
}