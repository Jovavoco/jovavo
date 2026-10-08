import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* =========================================================
   TYPES
========================================================= */

type AvailabilityRow = {
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
  id?: string;
  override_date: string;
  is_available: boolean;
  start_time: string | null;
  end_time: string | null;
  note?: string | null;
};

/* =========================================================
   HELPERS
========================================================= */

function validTime(value: string | null) {
  if (!value) {
    return false;
  }

  return /^([01]\d|2[0-3]):[0-5]\d(?::[0-5]\d)?$/.test(value);
}

function normalizeTime(value: string | null) {
  if (!value) {
    return null;
  }

  const parts = value.split(":");

  return `${parts[0]}:${parts[1]}`;
}

/* =========================================================
   POST
========================================================= */

export async function POST(request: Request) {
  try {
    /* =====================================================
       1. VERIFY LOGGED-IN USER
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
        {
          status: 401,
        }
      );
    }

    /* =====================================================
       2. VERIFY USER IS AN ADMIN
    ===================================================== */

    const {
      data: isAdmin,
      error: adminError,
    } = await supabase.rpc("is_admin");

    if (adminError) {
      console.error(
        "ADMIN CHECK ERROR:",
        adminError
      );

      return NextResponse.json(
        {
          success: false,
          error: "Unable to verify administrator access.",
        },
        {
          status: 500,
        }
      );
    }

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          error:
            "You do not have permission to change consultation settings.",
        },
        {
          status: 403,
        }
      );
    }

    /* =====================================================
       3. CREATE SERVER-ONLY ADMIN CLIENT
    ===================================================== */

    const supabaseUrl =
      process.env.NEXT_PUBLIC_SUPABASE_URL;

    const supabaseSecretKey =
      process.env.SUPABASE_SECRET_KEY;

    if (!supabaseUrl) {
      console.error(
        "NEXT_PUBLIC_SUPABASE_URL is missing."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Supabase project URL is missing from the server configuration.",
        },
        {
          status: 500,
        }
      );
    }

    if (!supabaseSecretKey) {
      console.error(
        "SUPABASE_SECRET_KEY is missing."
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Supabase secret key is missing from the server configuration.",
        },
        {
          status: 500,
        }
      );
    }

    const supabaseAdmin = createAdminClient(
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
       4. READ REQUEST
    ===================================================== */

    const body = await request.json();

    const availability =
      body.availability as AvailabilityRow[];

    const settings =
      body.settings as ConsultationSettings;

    const overrides =
      body.overrides as DateOverride[];

    if (
      !Array.isArray(availability) ||
      !settings ||
      !Array.isArray(overrides)
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       5. VALIDATE WEEKLY AVAILABILITY
    ===================================================== */

    if (availability.length !== 7) {
      return NextResponse.json(
        {
          success: false,
          error: "All seven days must be included.",
        },
        {
          status: 400,
        }
      );
    }

    const uniqueDays = new Set<number>();

    for (const row of availability) {
      if (
        !Number.isInteger(row.day_of_week) ||
        row.day_of_week < 0 ||
        row.day_of_week > 6
      ) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid day of week.",
          },
          {
            status: 400,
          }
        );
      }

      if (uniqueDays.has(row.day_of_week)) {
        return NextResponse.json(
          {
            success: false,
            error:
              "Duplicate weekly availability day.",
          },
          {
            status: 400,
          }
        );
      }

      uniqueDays.add(row.day_of_week);

      if (row.is_available) {
        if (
          !validTime(row.start_time) ||
          !validTime(row.end_time)
        ) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Every available day needs a valid start and end time.",
            },
            {
              status: 400,
            }
          );
        }

        const start =
          normalizeTime(row.start_time)!;

        const end =
          normalizeTime(row.end_time)!;

        if (start >= end) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Availability start time must be before the end time.",
            },
            {
              status: 400,
            }
          );
        }
      }
    }

    /* =====================================================
       6. VALIDATE BOOKING SETTINGS
    ===================================================== */

    const consultationLength = Number(
      settings.consultation_length_minutes
    );

    const bufferMinutes = Number(
      settings.buffer_minutes
    );

    const minimumNotice = Number(
      settings.minimum_notice_hours
    );

    const bookingWindow = Number(
      settings.booking_window_days
    );

    if (
      !Number.isInteger(consultationLength) ||
      consultationLength < 15 ||
      consultationLength > 240
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid consultation length.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(bufferMinutes) ||
      bufferMinutes < 0 ||
      bufferMinutes > 240
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid buffer time.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(minimumNotice) ||
      minimumNotice < 0 ||
      minimumNotice > 720
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid minimum notice.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      !Number.isInteger(bookingWindow) ||
      bookingWindow < 1 ||
      bookingWindow > 365
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid booking window.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof settings.timezone !== "string" ||
      !settings.timezone.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "A booking timezone is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       7. VALIDATE DATE OVERRIDES
    ===================================================== */

    const cleanedOverrides: DateOverride[] = [];

    const usedOverrideDates =
      new Set<string>();

    for (const override of overrides) {
      /*
       * If someone clicks "Add Date" but hasn't selected
       * the actual date yet, simply ignore that empty row.
       */

      if (!override.override_date) {
        continue;
      }

      if (
        !/^\d{4}-\d{2}-\d{2}$/.test(
          override.override_date
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "One of the date overrides contains an invalid date.",
          },
          {
            status: 400,
          }
        );
      }

      if (
        usedOverrideDates.has(
          override.override_date
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            error:
              "You cannot create multiple overrides for the same date.",
          },
          {
            status: 400,
          }
        );
      }

      usedOverrideDates.add(
        override.override_date
      );

      /*
       * Special-hours override
       */

      if (override.is_available) {
        if (
          !validTime(override.start_time) ||
          !validTime(override.end_time)
        ) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Special availability dates need a valid start and end time.",
            },
            {
              status: 400,
            }
          );
        }

        const start =
          normalizeTime(
            override.start_time
          )!;

        const end =
          normalizeTime(
            override.end_time
          )!;

        if (start >= end) {
          return NextResponse.json(
            {
              success: false,
              error:
                "Special availability start time must be before the end time.",
            },
            {
              status: 400,
            }
          );
        }
      }

      cleanedOverrides.push({
        ...override,

        start_time: override.is_available
          ? normalizeTime(
              override.start_time
            )
          : null,

        end_time: override.is_available
          ? normalizeTime(
              override.end_time
            )
          : null,

        note:
          override.note?.trim() || null,
      });
    }

    /* =====================================================
       8. PREPARE WEEKLY AVAILABILITY
    ===================================================== */

    const now =
      new Date().toISOString();

    const availabilityPayload =
      availability.map((row) => ({
        day_of_week:
          row.day_of_week,

        is_available:
          row.is_available,

        start_time:
          row.is_available
            ? normalizeTime(
                row.start_time
              )
            : null,

        end_time:
          row.is_available
            ? normalizeTime(
                row.end_time
              )
            : null,

        updated_at: now,
      }));

    /* =====================================================
       9. SAVE WEEKLY AVAILABILITY
    ===================================================== */

    const {
      error: availabilityError,
    } = await supabaseAdmin
      .from(
        "consultation_availability"
      )
      .upsert(
        availabilityPayload,
        {
          onConflict:
            "day_of_week",
        }
      );

    if (availabilityError) {
      console.error(
        "CONSULTATION AVAILABILITY SAVE ERROR:",
        availabilityError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to save weekly availability.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       10. SAVE BOOKING SETTINGS
    ===================================================== */

    const {
      error: settingsError,
    } = await supabaseAdmin
      .from(
        "consultation_settings"
      )
      .upsert(
        {
          id: 1,

          consultation_length_minutes:
            consultationLength,

          buffer_minutes:
            bufferMinutes,

          minimum_notice_hours:
            minimumNotice,

          booking_window_days:
            bookingWindow,

          timezone:
            settings.timezone.trim(),

          updated_at: now,
        },
        {
          onConflict: "id",
        }
      );

    if (settingsError) {
      console.error(
        "CONSULTATION SETTINGS SAVE ERROR:",
        settingsError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to save booking settings.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       11. LOAD CURRENT DATE OVERRIDES

       We compare what is currently in Supabase with what
       the admin submitted so deleted overrides are removed.
    ===================================================== */

    const {
      data: existingOverrides,
      error: existingOverridesError,
    } = await supabaseAdmin
      .from(
        "consultation_date_overrides"
      )
      .select(
        "id, override_date"
      );

    if (existingOverridesError) {
      console.error(
        "CONSULTATION OVERRIDE LOAD ERROR:",
        existingOverridesError
      );

      return NextResponse.json(
        {
          success: false,
          error:
            "Unable to load existing date overrides.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       12. DELETE REMOVED OVERRIDES
    ===================================================== */

    const submittedDates =
      new Set(
        cleanedOverrides.map(
          (override) =>
            override.override_date
        )
      );

    const idsToDelete =
      (existingOverrides ?? [])
        .filter(
          (existing) =>
            !submittedDates.has(
              existing.override_date
            )
        )
        .map(
          (existing) =>
            existing.id
        );

    if (idsToDelete.length > 0) {
      const {
        error: deleteError,
      } = await supabaseAdmin
        .from(
          "consultation_date_overrides"
        )
        .delete()
        .in(
          "id",
          idsToDelete
        );

      if (deleteError) {
        console.error(
          "CONSULTATION OVERRIDE DELETE ERROR:",
          deleteError
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "Unable to remove old date overrides.",
          },
          {
            status: 500,
          }
        );
      }
    }

    /* =====================================================
       13. UPSERT DATE OVERRIDES
    ===================================================== */

    if (
      cleanedOverrides.length > 0
    ) {
      const overridePayload =
        cleanedOverrides.map(
          (override) => ({
            override_date:
              override.override_date,

            is_available:
              override.is_available,

            start_time:
              override.start_time,

            end_time:
              override.end_time,

            note:
              override.note?.trim() ||
              null,

            updated_at: now,
          })
        );

      const {
        error: overrideError,
      } = await supabaseAdmin
        .from(
          "consultation_date_overrides"
        )
        .upsert(
          overridePayload,
          {
            onConflict:
              "override_date",
          }
        );

      if (overrideError) {
        console.error(
          "CONSULTATION OVERRIDE SAVE ERROR:",
          overrideError
        );

        return NextResponse.json(
          {
            success: false,
            error:
              "Unable to save date overrides.",
          },
          {
            status: 500,
          }
        );
      }
    }

    /* =====================================================
       14. SUCCESS
    ===================================================== */

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "CONSULTATION SETTINGS API ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Something went wrong while saving consultation settings.",
      },
      {
        status: 500,
      }
    );
  }
}