import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIME_ZONE = "America/New_York";

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
   TOKEN
========================================================= */

function hashToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

/* =========================================================
   GET CLIENT BOOKING
========================================================= */

export async function GET(
  request: NextRequest
) {
  try {
    const token =
      request.nextUrl.searchParams.get(
        "token"
      );

    /* -----------------------------------------------------
       VALIDATE TOKEN
    ----------------------------------------------------- */

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
          status: 400,
        }
      );
    }

    const tokenHash =
      hashToken(token);

    const supabaseAdmin =
      getSupabaseAdmin();

    /* -----------------------------------------------------
       FIND BOOKING

       IMPORTANT:
       We only search using the hashed token.
       The raw management token is never stored.
    ----------------------------------------------------- */

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
          confirmed_at,
          cancelled_at,
          google_calendar_event_id
        `
      )
      .eq(
        "management_token_hash",
        tokenHash
      )
      .maybeSingle();

    if (bookingError) {
      console.error(
        "Unable to load managed consultation:",
        bookingError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "We couldn't load your consultation right now.",
        },
        {
          status: 500,
        }
      );
    }

    /* -----------------------------------------------------
       TOKEN DOES NOT MATCH A BOOKING
    ----------------------------------------------------- */

    if (!booking) {
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

    /* -----------------------------------------------------
       ONLY CONFIRMED/CANCELLED BOOKINGS SHOULD BE EXPOSED

       We return cancelled so the management page can show
       the client that the appointment has already been
       cancelled instead of displaying a generic error.
    ----------------------------------------------------- */

    if (
      booking.status !==
        "confirmed" &&
      booking.status !==
        "cancelled"
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "This consultation cannot be managed.",
        },
        {
          status: 409,
        }
      );
    }

    /* -----------------------------------------------------
       GET CONSULTATION SETTINGS
    ----------------------------------------------------- */

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
      .eq(
        "id",
        1
      )
      .maybeSingle();

    if (settingsError) {
      console.error(
        "Unable to load consultation settings:",
        settingsError
      );
    }

    const consultationLength =
      settings
        ?.consultation_length_minutes ??
      30;

    const timezone =
      settings?.timezone ||
      TIME_ZONE;

    /* -----------------------------------------------------
       SUCCESS

       Do NOT return:
       - management_token_hash
       - verification_token_hash
       - Google event ID

       The browser does not need any of them.
    ----------------------------------------------------- */

    return NextResponse.json(
      {
        success: true,

        booking: {
          id:
            booking.id,

          name:
            booking.name,

          email:
            booking.email,

          phone:
            booking.phone,

          business:
            booking.business,

          topic:
            booking.topic,

          consultationDate:
            booking.consultation_date,

          consultationTime:
            booking.consultation_time,

          status:
            booking.status,

          confirmedAt:
            booking.confirmed_at,

          cancelledAt:
            booking.cancelled_at,
        },

        consultationLengthMinutes:
          consultationLength,

        timezone,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "Consultation management error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while loading your consultation.",
      },
      {
        status: 500,
      }
    );
  }
}