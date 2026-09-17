import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CircleDollarSign,
  ExternalLink,
  Instagram,
  LayoutDashboard,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

type Prospect = {
  id: string;
  business_name: string;
  industry: string | null;
  website: string | null;
  instagram: string | null;
  contact_name: string | null;
  email: string | null;
  phone: string | null;
  lead_source: string;
  opportunity: string | null;
  status: string;
  mockup_status: string;
  first_contact_date: string | null;
  last_contact_date: string | null;
  next_follow_up: string | null;
  estimated_value: number | null;
  quoted_price: number | null;
  created_at: string;
};

function formatMoney(value: number | null) {
  if (value === null) return "—";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatDate(value: string | null) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function statusClasses(status: string) {
  switch (status) {
    case "Won":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "Lost":
      return "bg-red-50 text-red-700 border-red-200";

    case "Interested":
    case "Consultation":
      return "bg-blue-50 text-blue-700 border-blue-200";

    case "Proposal Sent":
      return "bg-violet-50 text-violet-700 border-violet-200";

    case "Follow-Up":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "Contacted":
      return "bg-[#f1ece3] text-[#5f574f] border-[#ddd5ca]";

    default:
      return "bg-white text-[#706960] border-[#ded7cd]";
  }
}

export default async function ProspectsPage() {
  const supabase = await createClient();

  // -------------------------------------------------------
  // AUTH
  // -------------------------------------------------------

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: isAdmin, error: adminError } =
    await supabase.rpc("is_admin");

  if (adminError || !isAdmin) {
    redirect("/admin/login");
  }

  // -------------------------------------------------------
  // PROSPECTS
  // -------------------------------------------------------

  const { data, error } = await supabase
    .from("prospects")
    .select(`
      id,
      business_name,
      industry,
      website,
      instagram,
      contact_name,
      email,
      phone,
      lead_source,
      opportunity,
      status,
      mockup_status,
      first_contact_date,
      last_contact_date,
      next_follow_up,
      estimated_value,
      quoted_price,
      created_at
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Unable to load prospects:", error);
  }

  const prospects = (data ?? []) as Prospect[];

  const warmLeads = prospects.filter(
    (prospect) => prospect.lead_source === "Warm Lead"
  ).length;

  const needsFollowUp = prospects.filter(
    (prospect) =>
      prospect.next_follow_up &&
      prospect.status !== "Won" &&
      prospect.status !== "Lost"
  ).length;

  const openPipeline = prospects
    .filter(
      (prospect) =>
        prospect.status !== "Won" &&
        prospect.status !== "Lost"
    )
    .reduce((total, prospect) => {
      return (
        total +
        Number(
          prospect.quoted_price ??
            prospect.estimated_value ??
            0
        )
      );
    }, 0);

  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#1b1713]">
      {/* HEADER */}

      <header className="border-b border-[#ded7cd] bg-[#fffdf9]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-5">
            <Link
              href="/admin"
              className="font-serif text-[22px] tracking-[0.18em]"
            >
              JOVAVO
            </Link>

            <div className="hidden h-5 w-px bg-[#ded7cd] sm:block" />

            <span className="hidden text-xs uppercase tracking-[0.16em] text-[#817970] sm:block">
              Administration
            </span>
          </div>

          <Link
            href="/admin"
            className="flex items-center gap-2 text-xs font-medium text-[#655e56] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[220px_1fr]">
        {/* SIDEBAR */}

        <aside className="hidden min-h-[calc(100vh-81px)] border-r border-[#ded7cd] px-5 py-8 lg:block">
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3] hover:text-[#1b1713]"
            >
              <LayoutDashboard size={17} />
              Dashboard
            </Link>

            <Link
              href="/admin/prospects"
              className="flex items-center gap-3 rounded-xl bg-[#1b1713] px-4 py-3 text-sm text-white"
            >
              <Users size={17} />
              Prospects
            </Link>
          </nav>
        </aside>

        {/* CONTENT */}

        <section className="min-w-0 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                CRM
              </p>

              <h1 className="mt-2 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                Prospects
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#706960]">
                Manage outreach, follow-ups, opportunities and potential
                Jovavo projects.
              </p>
            </div>

            <Link
              href="/admin/prospects/new"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923]"
            >
              <Plus size={16} />
              Add Prospect
            </Link>
          </div>

          {/* STATS */}

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <Users size={17} />

              <p className="mt-5 font-serif text-3xl">
                {prospects.length}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Total Prospects
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <Users size={17} />

              <p className="mt-5 font-serif text-3xl">
                {warmLeads}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Warm Leads
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <CalendarDays size={17} />

              <p className="mt-5 font-serif text-3xl">
                {needsFollowUp}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Follow-Ups Scheduled
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <CircleDollarSign size={17} />

              <p className="mt-5 font-serif text-3xl">
                {formatMoney(openPipeline)}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Open Pipeline
              </p>
            </div>
          </div>

          {/* TOOLBAR */}

          <div className="mt-8 flex flex-col gap-3 rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-[#706960]">
              <Search size={16} />

              <span>
                {prospects.length === 0
                  ? "No prospects yet"
                  : `${prospects.length} ${
                      prospects.length === 1
                        ? "prospect"
                        : "prospects"
                    }`}
              </span>
            </div>

            <p className="text-xs text-[#9a9289]">
              Newest added first
            </p>
          </div>

          {/* EMPTY STATE */}

          {prospects.length === 0 ? (
            <div className="mt-4 rounded-[28px] border border-[#ded7cd] bg-[#fffdf9] px-6 py-16 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f1ece3]">
                <Users size={20} strokeWidth={1.5} />
              </div>

              <h2 className="mt-5 font-serif text-2xl">
                No prospects yet.
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#706960]">
                Add businesses you want to contact and track every
                opportunity from first outreach through becoming a client.
              </p>

              <Link
                href="/admin/prospects/new"
                className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-5 text-sm font-medium text-white"
              >
                <Plus size={16} />
                Add First Prospect
              </Link>
            </div>
          ) : (
            <>
              {/* DESKTOP TABLE */}

              <div className="mt-4 hidden overflow-hidden rounded-[24px] border border-[#e2dbd1] bg-[#fffdf9] lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#e8e1d8] text-left">
                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Business
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Lead
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Opportunity
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Status
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Mockup
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Follow-Up
                        </th>

                        <th className="px-5 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-[#817970]">
                          Value
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-[#eee8df]">
                      {prospects.map((prospect) => (
                        <tr
                          key={prospect.id}
                          className="transition hover:bg-[#faf7f2]"
                        >
                          <td className="px-5 py-5">
                            <Link
                              href={`/admin/prospects/${prospect.id}`}
                              className="group"
                            >
                              <p className="text-sm font-medium group-hover:underline">
                                {prospect.business_name}
                              </p>

                              <p className="mt-1 text-xs text-[#817970]">
                                {prospect.industry || "No industry"}
                              </p>
                            </Link>

                            {(prospect.website ||
                              prospect.instagram) && (
                              <div className="mt-2 flex items-center gap-3">
                                {prospect.website && (
                                  <a
                                    href={prospect.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#817970] transition hover:text-[#1b1713]"
                                    aria-label="Open website"
                                  >
                                    <ExternalLink size={13} />
                                  </a>
                                )}

                                {prospect.instagram && (
                                  <a
                                    href={prospect.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#817970] transition hover:text-[#1b1713]"
                                    aria-label="Open Instagram"
                                  >
                                    <Instagram size={13} />
                                  </a>
                                )}
                              </div>
                            )}
                          </td>

                          <td className="px-5 py-5 text-xs text-[#655e56]">
                            {prospect.lead_source}
                          </td>

                          <td className="px-5 py-5 text-xs text-[#655e56]">
                            {prospect.opportunity || "—"}
                          </td>

                          <td className="px-5 py-5">
                            <span
                              className={`inline-flex rounded-full border px-3 py-1.5 text-[10px] font-medium ${statusClasses(
                                prospect.status
                              )}`}
                            >
                              {prospect.status}
                            </span>
                          </td>

                          <td className="px-5 py-5 text-xs text-[#655e56]">
                            {prospect.mockup_status}
                          </td>

                          <td className="px-5 py-5 text-xs text-[#655e56]">
                            {formatDate(prospect.next_follow_up)}
                          </td>

                          <td className="px-5 py-5 text-xs font-medium">
                            {formatMoney(
                              prospect.quoted_price ??
                                prospect.estimated_value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MOBILE CARDS */}

              <div className="mt-4 space-y-3 lg:hidden">
                {prospects.map((prospect) => (
                  <Link
                    key={prospect.id}
                    href={`/admin/prospects/${prospect.id}`}
                    className="block rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">
                          {prospect.business_name}
                        </p>

                        <p className="mt-1 text-xs text-[#817970]">
                          {prospect.industry || "No industry"}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-medium ${statusClasses(
                          prospect.status
                        )}`}
                      >
                        {prospect.status}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[#eee8df] pt-4">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.12em] text-[#9a9289]">
                          Lead
                        </p>

                        <p className="mt-1 text-xs">
                          {prospect.lead_source}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.12em] text-[#9a9289]">
                          Opportunity
                        </p>

                        <p className="mt-1 text-xs">
                          {prospect.opportunity || "—"}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.12em] text-[#9a9289]">
                          Follow-Up
                        </p>

                        <p className="mt-1 text-xs">
                          {formatDate(prospect.next_follow_up)}
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.12em] text-[#9a9289]">
                          Value
                        </p>

                        <p className="mt-1 text-xs font-medium">
                          {formatMoney(
                            prospect.quoted_price ??
                              prospect.estimated_value
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}