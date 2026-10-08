import Link from "next/link";
import { redirect } from "next/navigation";
import {
  CalendarClock,
  LayoutDashboard,
  Users,
} from "lucide-react";

import { createClient } from "@/utils/supabase/server";
import ConsultationBookings from "./ConsultationBookings";
import ConsultationManager from "./ConsultationManager";

export const dynamic = "force-dynamic";

/* =========================================================
   PAGE
========================================================= */

export default async function AdminConsultationsPage() {
  const supabase = await createClient();

  /* =========================================================
     AUTHENTICATION
  ========================================================= */

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  /* =========================================================
     ADMIN AUTHORIZATION
  ========================================================= */

  const { data: isAdmin, error: adminError } =
    await supabase.rpc("is_admin");

  if (adminError || !isAdmin) {
    redirect("/admin/login");
  }

  /* =========================================================
     CONSULTATION AVAILABILITY
  ========================================================= */

  const {
    data: availability,
    error: availabilityError,
  } = await supabase
    .from("consultation_availability")
    .select("*")
    .order("day_of_week", {
      ascending: true,
    });

  if (availabilityError) {
    console.error(
      "Unable to load consultation availability:",
      availabilityError
    );
  }

  /* =========================================================
     CONSULTATION SETTINGS
  ========================================================= */

  const {
    data: settings,
    error: settingsError,
  } = await supabase
    .from("consultation_settings")
    .select("*")
    .eq("id", 1)
    .maybeSingle();

  if (settingsError) {
    console.error(
      "Unable to load consultation settings:",
      settingsError
    );
  }

  /* =========================================================
     DATE OVERRIDES
  ========================================================= */

  const {
    data: overrides,
    error: overridesError,
  } = await supabase
    .from("consultation_date_overrides")
    .select("*")
    .order("override_date", {
      ascending: true,
    });

  if (overridesError) {
    console.error(
      "Unable to load consultation date overrides:",
      overridesError
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#f8f5ef] pt-[96px] text-[#1b1713] md:pt-[104px]">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[220px_1fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="hidden min-h-[calc(100vh-104px)] border-r border-[#ded7cd] px-5 py-8 lg:block">
          <nav className="space-y-2">
            {/* DASHBOARD */}

            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </Link>

            {/* PROSPECTS */}

            <Link
              href="/admin/prospects"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
            >
              <Users size={17} />
              Prospects
            </Link>

            {/* CONSULTATIONS */}

            <Link
              href="/admin/consultations"
              className="flex items-center gap-3 rounded-xl bg-[#1b1713] px-4 py-3 text-sm text-white"
            >
              <CalendarClock size={17} />
              Consultations
            </Link>
          </nav>

          {/* CRM LABEL */}

          <div className="mt-10 border-t border-[#ded7cd] pt-6">
            <p className="px-4 text-[10px] uppercase tracking-[0.18em] text-[#9a9289]">
              Jovavo CRM
            </p>

            <p className="mt-2 px-4 text-xs leading-5 text-[#817970]">
              Manage prospects, consultations, and client activity.
            </p>
          </div>
        </aside>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <section className="min-w-0 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* =================================================
              INTRO
          ================================================= */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eee8df]">
                <CalendarClock size={16} />
              </div>

              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                Consultations
              </p>
            </div>

            <h1 className="mt-5 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              Manage your consultations.
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#706960]">
              Review upcoming bookings, manage consultation
              availability, and control your scheduling settings.
            </p>
          </div>

          {/* =================================================
              BOOKINGS
          ================================================= */}

          <div className="mt-10">
            <div className="mb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                Bookings
              </p>

              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                Consultation bookings
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#817970]">
                View upcoming consultations and manage existing
                appointments.
              </p>
            </div>

            <ConsultationBookings />
          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-12 border-t border-[#ded7cd]" />

          {/* =================================================
              AVAILABILITY / SETTINGS
          ================================================= */}

          <div>
            <div className="mb-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                Scheduling
              </p>

              <h2 className="mt-2 font-serif text-2xl sm:text-3xl">
                Availability & settings
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#817970]">
                Set your weekly availability, adjust consultation
                settings, and create date-specific overrides.
              </p>
            </div>

            <ConsultationManager
              initialAvailability={availability ?? []}
              initialSettings={settings}
              initialOverrides={overrides ?? []}
            />
          </div>

          <div className="h-12" />
        </section>
      </div>
    </main>
  );
}