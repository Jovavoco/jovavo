import { NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";

import { createClient } from "@/utils/supabase/server";

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
   GET — ADMIN CONSULTATION BOOKINGS
========================================================= */

export async function GET() {
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

       IMPORTANT:
       We verify the logged-in user BEFORE using the
       server-side admin client.
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
          error: "Unable to verify administrator access.",
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
       CREATE SERVER-SIDE ADMIN CLIENT

       This is only reached after the logged-in user has
       passed the admin authorization check.
    ===================================================== */

    const supabaseAdmin = getSupabaseAdmin();

    /* =====================================================
       LOAD CONSULTATION BOOKINGS
    ===================================================== */

    const { data: bookings, error: bookingsError } =
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
            verification_expires_at,
            created_at,
            confirmed_at,
            cancelled_at,
            google_calendar_event_id,
            confirmation_email_sent_at
          `
        )
        .order("consultation_date", {
          ascending: true,
        })
        .order("consultation_time", {
          ascending: true,
        });

    if (bookingsError) {
      console.error(
        "Unable to load consultation bookings:",
        bookingsError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unable to load consultation bookings.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
      bookings: bookings ?? [],
    });
  } catch (error) {
    console.error(
      "Unexpected consultation bookings error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while loading consultation bookings.",
      },
      { status: 500 }
    );
  }
}