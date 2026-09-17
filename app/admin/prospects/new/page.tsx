"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  CircleDollarSign,
  Contact,
  Globe,
  LayoutDashboard,
  Loader2,
  Save,
  Users,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const leadSources = [
  "Warm Lead",
  "Cold Outreach",
  "Referral",
  "Instagram",
  "Website Inquiry",
  "Other",
];

const opportunities = [
  "No Website",
  "Weak Website",
  "Booking Only",
  "Website Redesign",
  "E-Commerce",
  "Custom Development",
  "Digital Growth",
  "Other",
];

const statuses = [
  "Not Contacted",
  "Contacted",
  "Follow-Up",
  "Interested",
  "Consultation",
  "Proposal Sent",
  "Won",
  "Lost",
];

const mockupStatuses = [
  "Not Needed",
  "Planned",
  "Created",
  "Sent",
];

export default function NewProspectPage() {
  const router = useRouter();
  const [supabase] = useState(() => createClient());

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");

  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [leadSource, setLeadSource] =
    useState("Cold Outreach");

  const [opportunity, setOpportunity] = useState("");

  const [status, setStatus] =
    useState("Not Contacted");

  const [mockupStatus, setMockupStatus] =
    useState("Not Needed");

  const [firstContactDate, setFirstContactDate] =
    useState("");

  const [lastContactDate, setLastContactDate] =
    useState("");

  const [nextFollowUp, setNextFollowUp] =
    useState("");

  const [estimatedValue, setEstimatedValue] =
    useState("");

  const [quotedPrice, setQuotedPrice] =
    useState("");

  const [websiteNotes, setWebsiteNotes] =
    useState("");

  const [notes, setNotes] = useState("");

  // -------------------------------------------------------
  // CHECK ADMIN ACCESS
  // -------------------------------------------------------

  useEffect(() => {
    async function checkAdmin() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

      if (adminError || !isAdmin) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      setCheckingAuth(false);
    }

    checkAdmin();
  }, [router, supabase]);

  // -------------------------------------------------------
  // SAVE PROSPECT
  // -------------------------------------------------------

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (!businessName.trim()) {
      setError("Business name is required.");
      return;
    }

    setSaving(true);

    const { data, error: insertError } = await supabase
      .from("prospects")
      .insert({
        business_name: businessName.trim(),

        industry: industry.trim() || null,

        website: website.trim() || null,

        instagram: instagram.trim() || null,

        contact_name: contactName.trim() || null,

        email: email.trim() || null,

        phone: phone.trim() || null,

        lead_source: leadSource,

        opportunity: opportunity || null,

        status,

        mockup_status: mockupStatus,

        first_contact_date:
          firstContactDate || null,

        last_contact_date:
          lastContactDate || null,

        next_follow_up:
          nextFollowUp || null,

        estimated_value:
          estimatedValue !== ""
            ? Number(estimatedValue)
            : null,

        quoted_price:
          quotedPrice !== ""
            ? Number(quotedPrice)
            : null,

        website_notes:
          websiteNotes.trim() || null,

        notes: notes.trim() || null,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error(
        "Unable to create prospect:",
        insertError
      );

      setError(
        insertError.message ||
          "Unable to save prospect."
      );

      setSaving(false);
      return;
    }

    router.push(`/admin/prospects/${data.id}`);
    router.refresh();
  }

  // -------------------------------------------------------
  // LOADING
  // -------------------------------------------------------

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] text-[#1b1713]">
        <div className="flex items-center gap-3 text-sm text-[#706960]">
          <Loader2
            size={18}
            className="animate-spin"
          />

          Loading admin...
        </div>
      </main>
    );
  }

  // -------------------------------------------------------
  // INPUT STYLES
  // -------------------------------------------------------

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#ded7cd] bg-white px-4 py-3 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713]";

  const labelClass =
    "text-[11px] font-medium uppercase tracking-[0.12em] text-[#706960]";

  const sectionClass =
    "rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7";

  // -------------------------------------------------------
  // PAGE
  // -------------------------------------------------------

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
              Add and manage new business
              opportunities.
            </p>
          </div>
        </aside>

        {/* CONTENT */}

        <section className="min-w-0 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <Link
            href="/admin/prospects"
            className="inline-flex items-center gap-2 text-xs font-medium text-[#706960] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Back to Prospects
          </Link>

          <div className="mt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
              New Lead
            </p>

            <h1 className="mt-2 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              Add Prospect
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#706960]">
              Add a potential Jovavo client and keep
              everything from initial research through
              follow-up in one place.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* BUSINESS INFORMATION */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <Building2 size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Business Information
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Basic details about the prospect.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Business Name *
                  </span>

                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(event) =>
                      setBusinessName(
                        event.target.value
                      )
                    }
                    placeholder="House of Laser & Spa"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Industry
                  </span>

                  <input
                    type="text"
                    value={industry}
                    onChange={(event) =>
                      setIndustry(event.target.value)
                    }
                    placeholder="Med Spa"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>

            {/* ONLINE PRESENCE */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <Globe size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Online Presence
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Website and social information.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Website
                  </span>

                  <input
                    type="url"
                    value={website}
                    onChange={(event) =>
                      setWebsite(event.target.value)
                    }
                    placeholder="https://example.com"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Instagram
                  </span>

                  <input
                    type="text"
                    value={instagram}
                    onChange={(event) =>
                      setInstagram(event.target.value)
                    }
                    placeholder="https://instagram.com/business"
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className={labelClass}>
                  Website / Opportunity Notes
                </span>

                <textarea
                  value={websiteNotes}
                  onChange={(event) =>
                    setWebsiteNotes(
                      event.target.value
                    )
                  }
                  placeholder="No website found. Instagram is active and has strong content that could be used for a custom site..."
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </label>
            </div>

            {/* CONTACT INFORMATION */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <Contact size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Contact Information
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Who you can reach at the business.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <label className="block">
                  <span className={labelClass}>
                    Contact Name
                  </span>

                  <input
                    type="text"
                    value={contactName}
                    onChange={(event) =>
                      setContactName(
                        event.target.value
                      )
                    }
                    placeholder="Owner / Manager"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Email
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="hello@business.com"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Phone
                  </span>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    placeholder="(718) 555-1234"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>

            {/* PIPELINE */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <Users size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Pipeline
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Track the lead and sales stage.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <label className="block">
                  <span className={labelClass}>
                    Lead Source
                  </span>

                  <select
                    value={leadSource}
                    onChange={(event) =>
                      setLeadSource(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  >
                    {leadSources.map((source) => (
                      <option
                        key={source}
                        value={source}
                      >
                        {source}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Opportunity
                  </span>

                  <select
                    value={opportunity}
                    onChange={(event) =>
                      setOpportunity(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  >
                    <option value="">
                      Select opportunity
                    </option>

                    {opportunities.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Status
                  </span>

                  <select
                    value={status}
                    onChange={(event) =>
                      setStatus(event.target.value)
                    }
                    className={inputClass}
                  >
                    {statuses.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Mockup Status
                  </span>

                  <select
                    value={mockupStatus}
                    onChange={(event) =>
                      setMockupStatus(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  >
                    {mockupStatuses.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* FOLLOW UPS */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <CalendarDays size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Contact & Follow-Up
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Keep track of outreach dates.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <label className="block">
                  <span className={labelClass}>
                    First Contact
                  </span>

                  <input
                    type="date"
                    value={firstContactDate}
                    onChange={(event) =>
                      setFirstContactDate(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Last Contact
                  </span>

                  <input
                    type="date"
                    value={lastContactDate}
                    onChange={(event) =>
                      setLastContactDate(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Next Follow-Up
                  </span>

                  <input
                    type="date"
                    value={nextFollowUp}
                    onChange={(event) =>
                      setNextFollowUp(
                        event.target.value
                      )
                    }
                    className={inputClass}
                  />
                </label>
              </div>
            </div>

            {/* VALUE */}

            <div className={sectionClass}>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
                  <CircleDollarSign size={16} />
                </div>

                <div>
                  <h2 className="font-serif text-xl">
                    Project Value
                  </h2>

                  <p className="mt-0.5 text-xs text-[#817970]">
                    Estimate the potential value of the
                    opportunity.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Estimated Value
                  </span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={estimatedValue}
                    onChange={(event) =>
                      setEstimatedValue(
                        event.target.value
                      )
                    }
                    placeholder="2000"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Quoted Price
                  </span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={quotedPrice}
                    onChange={(event) =>
                      setQuotedPrice(
                        event.target.value
                      )
                    }
                    placeholder="Leave blank until quoted"
                    className={inputClass}
                  />
                </label>
              </div>
            </div>

            {/* NOTES */}

            <div className={sectionClass}>
              <h2 className="font-serif text-xl">
                Notes
              </h2>

              <p className="mt-1 text-xs text-[#817970]">
                Anything else you want to remember about
                this lead.
              </p>

              <textarea
                value={notes}
                onChange={(event) =>
                  setNotes(event.target.value)
                }
                placeholder="How you found them, conversations you've had, what they may need, who you spoke with..."
                rows={6}
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* ERROR */}

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* ACTIONS */}

            <div className="flex flex-col-reverse gap-3 border-t border-[#ded7cd] pt-6 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href="/admin/prospects"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#ded7cd] bg-[#fffdf9] px-6 text-sm font-medium transition hover:border-[#1b1713]"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-7 text-sm font-medium text-white transition hover:bg-[#302923] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? (
                  <>
                    <Loader2
                      size={16}
                      className="animate-spin"
                    />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    Save Prospect
                  </>
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}