import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarClock,
  CircleDollarSign,
  Clock3,
  FileText,
  Handshake,
  LayoutDashboard,
  Target,
  UserRound,
  Users,
} from "lucide-react";

import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

const TIME_ZONE = "America/New_York";

/* =========================================================
   HELPERS
========================================================= */

function formatDate(date: string | null) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function formatConsultationDate(date: string | null) {
  if (!date) return "—";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: TIME_ZONE,
  }).format(new Date(`${date}T12:00:00`));
}

function formatConsultationTime(time: string | null) {
  if (!time) return "—";

  const normalizedTime = time.slice(0, 5);
  const [hours, minutes] = normalizedTime.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function getTodayInNewYork() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

/* =========================================================
   PAGE
========================================================= */

export default async function AdminDashboardPage() {
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
     PROSPECT DATA
  ========================================================= */

  const { data: prospects, error: prospectsError } = await supabase
    .from("prospects")
    .select(
      `
        id,
        business_name,
        industry,
        status,
        lead_source,
        estimated_value,
        quoted_price,
        next_follow_up,
        created_at
      `
    )
    .order("created_at", { ascending: false });

  if (prospectsError) {
    console.error("Unable to load prospects:", prospectsError);
  }

  const allProspects = prospects ?? [];

  const totalProspects = allProspects.length;

  const contacted = allProspects.filter((prospect) =>
    [
      "Contacted",
      "Follow-Up",
      "Interested",
      "Consultation",
      "Proposal Sent",
      "Won",
    ].includes(prospect.status)
  ).length;

  const interested = allProspects.filter((prospect) =>
    ["Interested", "Consultation"].includes(prospect.status)
  ).length;

  const proposals = allProspects.filter(
    (prospect) => prospect.status === "Proposal Sent"
  ).length;

  const won = allProspects.filter(
    (prospect) => prospect.status === "Won"
  ).length;

  const pipelineValue = allProspects
    .filter((prospect) => prospect.status !== "Lost")
    .reduce((total, prospect) => {
      const value =
        prospect.quoted_price ??
        prospect.estimated_value ??
        0;

      return total + Number(value);
    }, 0);

  const upcomingFollowUps = allProspects
    .filter(
      (prospect) =>
        prospect.next_follow_up &&
        prospect.status !== "Won" &&
        prospect.status !== "Lost"
    )
    .sort((a, b) => {
      return (
        new Date(a.next_follow_up!).getTime() -
        new Date(b.next_follow_up!).getTime()
      );
    })
    .slice(0, 5);

  const recentProspects = allProspects.slice(0, 5);

  const stats = [
    {
      label: "Total Prospects",
      value: totalProspects.toString(),
      icon: Users,
    },
    {
      label: "Contacted",
      value: contacted.toString(),
      icon: Target,
    },
    {
      label: "Interested",
      value: interested.toString(),
      icon: Handshake,
    },
    {
      label: "Proposals",
      value: proposals.toString(),
      icon: FileText,
    },
    {
      label: "Clients Won",
      value: won.toString(),
      icon: BriefcaseBusiness,
    },
    {
      label: "Pipeline Value",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(pipelineValue),
      icon: CircleDollarSign,
    },
  ];

  /* =========================================================
     CONSULTATION DATA
  ========================================================= */

  const today = getTodayInNewYork();

  const {
    data: upcomingConsultations,
    error: consultationError,
  } = await supabase
    .from("consultation_bookings")
    .select(
      `
        id,
        name,
        email,
        business,
        topic,
        consultation_date,
        consultation_time,
        status
      `
    )
    .eq("status", "confirmed")
    .gte("consultation_date", today)
    .order("consultation_date", { ascending: true })
    .order("consultation_time", { ascending: true })
    .limit(5);

  if (consultationError) {
    console.error(
      "Unable to load consultations:",
      consultationError
    );
  }

  const consultations = upcomingConsultations ?? [];

  const nextConsultation = consultations[0] ?? null;

  const consultationsToday = consultations.filter(
    (consultation) =>
      consultation.consultation_date === today
  ).length;

  const {
    count: upcomingConsultationCount,
    error: upcomingCountError,
  } = await supabase
    .from("consultation_bookings")
    .select("*", {
      count: "exact",
      head: true,
    })
    .eq("status", "confirmed")
    .gte("consultation_date", today);

  if (upcomingCountError) {
    console.error(
      "Unable to load consultation count:",
      upcomingCountError
    );
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#f8f5ef] pt-[96px] text-[#1b1713] md:pt-[104px]">
      {/* =====================================================
          ADMIN LAYOUT
      ===================================================== */}

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[220px_1fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="hidden min-h-[calc(100vh-104px)] border-r border-[#ded7cd] px-5 py-8 lg:block">
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl bg-[#1b1713] px-4 py-3 text-sm text-white"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </Link>

            <Link
              href="/admin/prospects"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
            >
              <Users size={17} />
              Prospects
            </Link>

            <Link
              href="/admin/consultations"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
            >
              <CalendarClock size={17} />
              Consultations
            </Link>
          </nav>

          <div className="mt-10 border-t border-[#ded7cd] pt-6">
            <p className="px-4 text-[10px] uppercase tracking-[0.18em] text-[#9a9289]">
              Jovavo CRM
            </p>

            <p className="mt-2 px-4 text-xs leading-5 text-[#817970]">
              Manage leads, follow-ups, consultations and client
              opportunities.
            </p>
          </div>
        </aside>

        {/* ===================================================
            DASHBOARD
        =================================================== */}

        <section className="min-w-0 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* =================================================
              INTRO
          ================================================= */}

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                Dashboard
              </p>

              <h1 className="mt-2 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                Your pipeline at a glance.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#706960]">
                Track prospects, follow-ups, proposals, consultations
                and new Jovavo clients from one place.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/prospects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#d8d0c6] bg-[#fffdf9] px-5 text-sm font-medium transition hover:border-[#1b1713]"
              >
                View Prospects
                <ArrowRight size={15} />
              </Link>

              <Link
                href="/admin/consultations"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923]"
              >
                Consultations
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* =================================================
              PROSPECT STATS
          ================================================= */}

          <div className="mt-9 grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>

                  <p className="mt-5 font-serif text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-[#817970]">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* =================================================
              CONSULTATION OVERVIEW
          ================================================= */}

          <div className="mt-8 overflow-hidden rounded-[28px] border border-[#ded7cd] bg-[#1b1713] text-white">
            <div className="flex flex-col gap-6 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Consultations
                </p>

                <h2 className="mt-2 font-serif text-3xl">
                  Consultation schedule
                </h2>

                <p className="mt-2 text-sm text-white/50">
                  Your upcoming confirmed client consultations.
                </p>
              </div>

              <Link
                href="/admin/consultations"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-medium text-[#1b1713] transition hover:bg-[#eee9e2]"
              >
                Manage Consultations
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr]">
              {/* =============================================
                  CONSULTATION STATS
              ============================================= */}

              <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                  <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <CalendarClock size={16} />
                    </div>

                    <p className="mt-5 font-serif text-3xl">
                      {upcomingConsultationCount ?? 0}
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Upcoming
                    </p>
                  </div>

                  <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                      <Clock3 size={16} />
                    </div>

                    <p className="mt-5 font-serif text-3xl">
                      {consultationsToday}
                    </p>

                    <p className="mt-1 text-xs text-white/45">
                      Today
                    </p>
                  </div>
                </div>
              </div>

              {/* =============================================
                  NEXT CONSULTATION
              ============================================= */}

              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                      Next Consultation
                    </p>

                    {nextConsultation ? (
                      <>
                        <p className="mt-3 font-serif text-3xl sm:text-4xl">
                          {formatConsultationDate(
                            nextConsultation.consultation_date
                          )}
                        </p>

                        <p className="mt-2 text-sm text-white/55">
                          {formatConsultationTime(
                            nextConsultation.consultation_time
                          )}{" "}
                          ET
                        </p>
                      </>
                    ) : (
                      <p className="mt-3 font-serif text-3xl">
                        Nothing scheduled.
                      </p>
                    )}
                  </div>

                  <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:flex">
                    <CalendarClock size={19} />
                  </div>
                </div>

                {nextConsultation ? (
                  <>
                    <div className="my-6 h-px bg-white/10" />

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <UserRound size={16} />
                      </div>

                      <div className="min-w-0">
                        <p className="font-medium">
                          {nextConsultation.name}
                        </p>

                        {nextConsultation.business && (
                          <p className="mt-1 text-sm text-white/50">
                            {nextConsultation.business}
                          </p>
                        )}

                        {nextConsultation.topic && (
                          <p className="mt-3 max-w-xl text-xs leading-5 text-white/40">
                            {nextConsultation.topic}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
                    Your next confirmed consultation will appear here
                    automatically.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              LOWER DASHBOARD
          ================================================= */}

          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {/* ===============================================
                FOLLOW UPS
            =============================================== */}

            <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
              <div className="flex items-center justify-between border-b border-[#e8e1d8] px-6 py-5">
                <div>
                  <div className="flex items-center gap-2">
                    <CalendarClock size={17} />

                    <h2 className="font-serif text-xl">
                      Upcoming Follow-Ups
                    </h2>
                  </div>

                  <p className="mt-1 text-xs text-[#817970]">
                    Leads that need your attention next.
                  </p>
                </div>
              </div>

              {upcomingFollowUps.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <CalendarClock
                    size={24}
                    strokeWidth={1.3}
                    className="mx-auto text-[#aaa298]"
                  />

                  <p className="mt-4 text-sm text-[#706960]">
                    No follow-ups scheduled yet.
                  </p>

                  <Link
                    href="/admin/prospects"
                    className="mt-3 inline-block text-xs font-medium underline underline-offset-4"
                  >
                    Manage prospects
                  </Link>
                </div>
              ) : (
                <div className="divide-y divide-[#eee8df]">
                  {upcomingFollowUps.map((prospect) => (
                    <Link
                      key={prospect.id}
                      href={`/admin/prospects/${prospect.id}`}
                      className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-[#faf7f2]"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {prospect.business_name}
                        </p>

                        <p className="mt-1 text-xs text-[#817970]">
                          {prospect.status}
                        </p>
                      </div>

                      <p className="shrink-0 text-xs text-[#655e56]">
                        {formatDate(prospect.next_follow_up)}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* ===============================================
                RECENT PROSPECTS
            =============================================== */}

            <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
              <div className="flex items-center justify-between border-b border-[#e8e1d8] px-6 py-5">
                <div>
                  <div className="flex items-center gap-2">
                    <Users size={17} />

                    <h2 className="font-serif text-xl">
                      Recent Prospects
                    </h2>
                  </div>

                  <p className="mt-1 text-xs text-[#817970]">
                    Your newest Jovavo opportunities.
                  </p>
                </div>

                <Link
                  href="/admin/prospects"
                  className="text-xs font-medium"
                >
                  View all
                </Link>
              </div>

              {recentProspects.length === 0 ? (
                <div className="px-6 py-12 text-center">
                  <Users
                    size={24}
                    strokeWidth={1.3}
                    className="mx-auto text-[#aaa298]"
                  />

                  <p className="mt-4 text-sm text-[#706960]">
                    Your prospect list is empty.
                  </p>

                  <p className="mt-1 text-xs text-[#9a9289]">
                    Add your first lead to start building your pipeline.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-[#eee8df]">
                  {recentProspects.map((prospect) => (
                    <Link
                      key={prospect.id}
                      href={`/admin/prospects/${prospect.id}`}
                      className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-[#faf7f2]"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {prospect.business_name}
                        </p>

                        <p className="mt-1 truncate text-xs text-[#817970]">
                          {prospect.industry || "No industry"} ·{" "}
                          {prospect.lead_source}
                        </p>
                      </div>

                      <span className="shrink-0 rounded-full bg-[#f1ece3] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em]">
                        {prospect.status}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              EMPTY PROSPECT STATE
          ================================================= */}

          {totalProspects === 0 && (
            <div className="mt-8 rounded-[28px] border border-[#ded7cd] bg-[#f1ece3] p-7 sm:p-9">
              <div className="max-w-xl">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                  Start Your Pipeline
                </p>

                <h2 className="mt-3 font-serif text-3xl">
                  Add your first Jovavo prospect.
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#706960]">
                  Your prospects will appear here automatically as you
                  build your outreach pipeline.
                </p>

                <Link
                  href="/admin/prospects"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                >
                  Go to Prospects
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}