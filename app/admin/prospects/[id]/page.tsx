import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CircleDollarSign,
  ExternalLink,
  LayoutDashboard,
  Mail,
  Pencil,
  Phone,
  User,
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
  estimated_value: number | string | null;
  quoted_price: number | string | null;
  website_notes: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

function formatMoney(
  value: number | string | null | undefined
) {
  if (
    value === null ||
    value === undefined ||
    value === ""
  ) {
    return "—";
  }

  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return "—";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numericValue);
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

function normalizeExternalUrl(value: string) {
  if (
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return value;
  }

  return `https://${value}`;
}

export default async function ProspectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  // -------------------------------------------------------
  // AUTHENTICATION
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
  // LOAD PROSPECT
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
      website_notes,
      notes,
      created_at,
      updated_at
    `)
    .eq("id", id)
    .single();

  if (error || !data) {
    notFound();
  }

  const prospect = data as Prospect;

  const displayValue =
    prospect.quoted_price ??
    prospect.estimated_value;

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
            href="/admin/prospects"
            className="flex items-center gap-2 text-xs font-medium text-[#655e56] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Prospects
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

          <div className="mt-10 border-t border-[#ded7cd] pt-6">
            <p className="px-4 text-[10px] uppercase tracking-[0.18em] text-[#9a9289]">
              Jovavo CRM
            </p>

            <p className="mt-2 px-4 text-xs leading-5 text-[#817970]">
              Prospect details and opportunity tracking.
            </p>
          </div>
        </aside>

        {/* CONTENT */}

        <section className="min-w-0 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          {/* BACK */}

          <Link
            href="/admin/prospects"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#706960] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Back to Prospects
          </Link>

          {/* HEADING */}

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
                  Prospect
                </p>

                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-medium ${statusClasses(
                    prospect.status
                  )}`}
                >
                  {prospect.status}
                </span>
              </div>

              <h1 className="mt-3 break-words font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
                {prospect.business_name}
              </h1>

              <p className="mt-3 text-sm text-[#706960]">
                {prospect.industry || "Industry not added"}
              </p>
            </div>

            <Link
              href={`/admin/prospects/${prospect.id}/edit`}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-5 text-sm font-medium text-white transition hover:bg-[#302923]"
            >
              <Pencil size={15} />
              Edit Prospect
            </Link>
          </div>

          {/* QUICK STATS */}

          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <Users size={17} />

              <p className="mt-5 text-sm font-medium">
                {prospect.lead_source}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Lead Source
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <Building2 size={17} />

              <p className="mt-5 text-sm font-medium">
                {prospect.opportunity || "—"}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Opportunity
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <CalendarDays size={17} />

              <p className="mt-5 text-sm font-medium">
                {formatDate(prospect.next_follow_up)}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                Next Follow-Up
              </p>
            </div>

            <div className="rounded-[22px] border border-[#e2dbd1] bg-[#fffdf9] p-5">
              <CircleDollarSign size={17} />

              <p className="mt-5 font-serif text-2xl">
                {formatMoney(displayValue)}
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                {prospect.quoted_price !== null
                  ? "Quoted Price"
                  : "Estimated Value"}
              </p>
            </div>
          </div>

          {/* MAIN GRID */}

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT */}

            <div className="space-y-5">
              {/* BUSINESS */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                    <Building2 size={16} />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl">
                      Business
                    </h2>

                    <p className="mt-0.5 text-xs text-[#817970]">
                      Business and online presence.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Business Name
                    </p>

                    <p className="mt-2 text-sm font-medium">
                      {prospect.business_name}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Industry
                    </p>

                    <p className="mt-2 text-sm">
                      {prospect.industry || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Website
                    </p>

                    {prospect.website ? (
                      <a
                        href={normalizeExternalUrl(
                          prospect.website
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 break-all text-sm font-medium underline underline-offset-4"
                      >
                        {prospect.website}
                        <ExternalLink
                          size={13}
                          className="shrink-0"
                        />
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">—</p>
                    )}
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Instagram
                    </p>

                    {prospect.instagram ? (
                      <a
                        href={normalizeExternalUrl(
                          prospect.instagram
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 break-all text-sm font-medium underline underline-offset-4"
                      >
                        {prospect.instagram}
                        <ExternalLink
                          size={13}
                          className="shrink-0"
                        />
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">—</p>
                    )}
                  </div>
                </div>
              </div>

              {/* WEBSITE NOTES */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <h2 className="font-serif text-xl">
                  Website / Opportunity Notes
                </h2>

                {prospect.website_notes ? (
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#5f574f]">
                    {prospect.website_notes}
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-[#9a9289]">
                    No website notes added.
                  </p>
                )}
              </div>

              {/* GENERAL NOTES */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <h2 className="font-serif text-xl">
                  Notes
                </h2>

                {prospect.notes ? (
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#5f574f]">
                    {prospect.notes}
                  </p>
                ) : (
                  <p className="mt-4 text-sm text-[#9a9289]">
                    No notes added.
                  </p>
                )}
              </div>
            </div>

            {/* RIGHT */}

            <div className="space-y-5">
              {/* CONTACT */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                    <User size={16} />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl">
                      Contact
                    </h2>

                    <p className="mt-0.5 text-xs text-[#817970]">
                      Primary contact information.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Contact Name
                    </p>

                    <p className="mt-2 text-sm font-medium">
                      {prospect.contact_name || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Email
                    </p>

                    {prospect.email ? (
                      <a
                        href={`mailto:${prospect.email}`}
                        className="mt-2 flex items-center gap-2 text-sm font-medium"
                      >
                        <Mail size={14} />
                        {prospect.email}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">—</p>
                    )}
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Phone
                    </p>

                    {prospect.phone ? (
                      <a
                        href={`tel:${prospect.phone}`}
                        className="mt-2 flex items-center gap-2 text-sm font-medium"
                      >
                        <Phone size={14} />
                        {prospect.phone}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm">—</p>
                    )}
                  </div>
                </div>
              </div>

              {/* PIPELINE */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <h2 className="font-serif text-xl">
                  Pipeline
                </h2>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Status
                    </p>

                    <span
                      className={`mt-2 inline-flex rounded-full border px-3 py-1.5 text-[10px] font-medium ${statusClasses(
                        prospect.status
                      )}`}
                    >
                      {prospect.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Lead Source
                    </p>

                    <p className="mt-2 text-sm">
                      {prospect.lead_source}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Opportunity
                    </p>

                    <p className="mt-2 text-sm">
                      {prospect.opportunity || "—"}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Mockup Status
                    </p>

                    <p className="mt-2 text-sm">
                      {prospect.mockup_status}
                    </p>
                  </div>
                </div>
              </div>

              {/* FOLLOW UP */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                    <CalendarDays size={16} />
                  </div>

                  <h2 className="font-serif text-xl">
                    Follow-Up
                  </h2>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      First Contact
                    </p>

                    <p className="mt-2 text-sm">
                      {formatDate(
                        prospect.first_contact_date
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Last Contact
                    </p>

                    <p className="mt-2 text-sm">
                      {formatDate(
                        prospect.last_contact_date
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Next Follow-Up
                    </p>

                    <p className="mt-2 text-sm font-medium">
                      {formatDate(
                        prospect.next_follow_up
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* PROJECT VALUE */}

              <div className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                    <CircleDollarSign size={16} />
                  </div>

                  <h2 className="font-serif text-xl">
                    Project Value
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Estimated
                    </p>

                    <p className="mt-2 font-serif text-xl">
                      {formatMoney(
                        prospect.estimated_value
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#9a9289]">
                      Quoted
                    </p>

                    <p className="mt-2 font-serif text-xl">
                      {formatMoney(
                        prospect.quoted_price
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}