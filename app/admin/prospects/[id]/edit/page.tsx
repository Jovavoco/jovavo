"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
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
};

export default function EditProspectPage() {
  const router = useRouter();
  const params = useParams();

  const prospectId = Array.isArray(params.id)
    ? params.id[0]
    : params.id;

  const [supabase] = useState(() => createClient());

  const [loading, setLoading] = useState(true);
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

  const [opportunity, setOpportunity] =
    useState("");

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
  // LOAD EXISTING PROSPECT
  // -------------------------------------------------------

  useEffect(() => {
    async function loadProspect() {
      if (!prospectId) return;

      setLoading(true);
      setError("");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      const {
        data: isAdmin,
        error: adminError,
      } = await supabase.rpc("is_admin");

      if (adminError || !isAdmin) {
        await supabase.auth.signOut();
        router.replace("/admin/login");
        return;
      }

      const { data, error: loadError } =
        await supabase
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
            notes
          `)
          .eq("id", prospectId)
          .single();

      if (loadError || !data) {
        setError(
          loadError?.message ||
            "Unable to load this prospect."
        );
        setLoading(false);
        return;
      }

      const prospect = data as Prospect;

      setBusinessName(prospect.business_name || "");
      setIndustry(prospect.industry || "");
      setWebsite(prospect.website || "");
      setInstagram(prospect.instagram || "");

      setContactName(prospect.contact_name || "");
      setEmail(prospect.email || "");
      setPhone(prospect.phone || "");

      setLeadSource(
        prospect.lead_source || "Cold Outreach"
      );

      setOpportunity(prospect.opportunity || "");

      setStatus(
        prospect.status || "Not Contacted"
      );

      setMockupStatus(
        prospect.mockup_status || "Not Needed"
      );

      setFirstContactDate(
        prospect.first_contact_date || ""
      );

      setLastContactDate(
        prospect.last_contact_date || ""
      );

      setNextFollowUp(
        prospect.next_follow_up || ""
      );

      setEstimatedValue(
        prospect.estimated_value !== null &&
          prospect.estimated_value !== undefined
          ? String(prospect.estimated_value)
          : ""
      );

      setQuotedPrice(
        prospect.quoted_price !== null &&
          prospect.quoted_price !== undefined
          ? String(prospect.quoted_price)
          : ""
      );

      setWebsiteNotes(
        prospect.website_notes || ""
      );

      setNotes(prospect.notes || "");

      setLoading(false);
    }

    loadProspect();
  }, [prospectId, router, supabase]);

  // -------------------------------------------------------
  // SAVE CHANGES
  // -------------------------------------------------------

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!prospectId) return;

    if (!businessName.trim()) {
      setError("Business name is required.");
      return;
    }

    setSaving(true);
    setError("");

    const { error: updateError } =
      await supabase
        .from("prospects")
        .update({
          business_name: businessName.trim(),

          industry:
            industry.trim() || null,

          website:
            website.trim() || null,

          instagram:
            instagram.trim() || null,

          contact_name:
            contactName.trim() || null,

          email:
            email.trim() || null,

          phone:
            phone.trim() || null,

          lead_source: leadSource,

          opportunity:
            opportunity || null,

          status,

          mockup_status: mockupStatus,

          first_contact_date:
            firstContactDate || null,

          last_contact_date:
            lastContactDate || null,

          next_follow_up:
            nextFollowUp || null,

          estimated_value:
            estimatedValue.trim() !== ""
              ? Number(estimatedValue)
              : null,

          quoted_price:
            quotedPrice.trim() !== ""
              ? Number(quotedPrice)
              : null,

          website_notes:
            websiteNotes.trim() || null,

          notes:
            notes.trim() || null,
        })
        .eq("id", prospectId);

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    router.push(
      `/admin/prospects/${prospectId}`
    );

    router.refresh();
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f8f5ef] text-[#1b1713]">
        <div className="flex items-center gap-3 text-sm text-[#706960]">
          <Loader2
            size={18}
            className="animate-spin"
          />
          Loading prospect...
        </div>
      </main>
    );
  }

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
            href={`/admin/prospects/${prospectId}`}
            className="flex items-center gap-2 text-xs font-medium text-[#655e56] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Prospect
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[220px_1fr]">
        {/* SIDEBAR */}

        <aside className="hidden min-h-[calc(100vh-81px)] border-r border-[#ded7cd] px-5 py-8 lg:block">
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#655e56] transition hover:bg-[#f1ece3]"
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
          <Link
            href={`/admin/prospects/${prospectId}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#706960] transition hover:text-[#1b1713]"
          >
            <ArrowLeft size={14} />
            Back to Prospect
          </Link>

          <div className="mt-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#817970]">
              Jovavo CRM
            </p>

            <h1 className="mt-3 font-serif text-4xl tracking-[-0.02em] sm:text-5xl">
              Edit Prospect
            </h1>

            <p className="mt-3 text-sm text-[#706960]">
              Update {businessName}.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* BUSINESS INFORMATION */}

            <FormSection
              icon={<Building2 size={17} />}
              title="Business Information"
              description="Basic information about the prospect."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Business Name" required>
                  <input
                    value={businessName}
                    onChange={(e) =>
                      setBusinessName(
                        e.target.value
                      )
                    }
                    required
                    className={inputClasses}
                  />
                </Field>

                <Field label="Industry">
                  <input
                    value={industry}
                    onChange={(e) =>
                      setIndustry(e.target.value)
                    }
                    placeholder="Med Spa"
                    className={inputClasses}
                  />
                </Field>
              </div>
            </FormSection>

            {/* ONLINE PRESENCE */}

            <FormSection
              icon={<Globe size={17} />}
              title="Online Presence"
              description="Website and social presence."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Website">
                  <input
                    value={website}
                    onChange={(e) =>
                      setWebsite(e.target.value)
                    }
                    placeholder="https://..."
                    className={inputClasses}
                  />
                </Field>

                <Field label="Instagram">
                  <input
                    value={instagram}
                    onChange={(e) =>
                      setInstagram(e.target.value)
                    }
                    placeholder="https://instagram.com/..."
                    className={inputClasses}
                  />
                </Field>
              </div>
            </FormSection>

            {/* CONTACT */}

            <FormSection
              icon={<Contact size={17} />}
              title="Contact Information"
              description="Primary contact for this business."
            >
              <div className="grid gap-5 md:grid-cols-3">
                <Field label="Contact Name">
                  <input
                    value={contactName}
                    onChange={(e) =>
                      setContactName(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  />
                </Field>

                <Field label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className={inputClasses}
                  />
                </Field>

                <Field label="Phone">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    className={inputClasses}
                  />
                </Field>
              </div>
            </FormSection>

            {/* PIPELINE */}

            <FormSection
              icon={<Users size={17} />}
              title="Pipeline"
              description="Track where this opportunity stands."
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <Field label="Lead Source">
                  <select
                    value={leadSource}
                    onChange={(e) =>
                      setLeadSource(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  >
                    {leadSources.map(
                      (source) => (
                        <option
                          key={source}
                          value={source}
                        >
                          {source}
                        </option>
                      )
                    )}
                  </select>
                </Field>

                <Field label="Opportunity">
                  <select
                    value={opportunity}
                    onChange={(e) =>
                      setOpportunity(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  >
                    <option value="">
                      Select opportunity
                    </option>

                    {opportunities.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      )
                    )}
                  </select>
                </Field>

                <Field label="Status">
                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value)
                    }
                    className={inputClasses}
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
                </Field>

                <Field label="Mockup Status">
                  <select
                    value={mockupStatus}
                    onChange={(e) =>
                      setMockupStatus(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  >
                    {mockupStatuses.map(
                      (item) => (
                        <option
                          key={item}
                          value={item}
                        >
                          {item}
                        </option>
                      )
                    )}
                  </select>
                </Field>
              </div>
            </FormSection>

            {/* DATES */}

            <FormSection
              icon={<CalendarDays size={17} />}
              title="Contact & Follow-Up"
              description="Keep track of outreach and next steps."
            >
              <div className="grid gap-5 md:grid-cols-3">
                <Field label="First Contact">
                  <input
                    type="date"
                    value={firstContactDate}
                    onChange={(e) =>
                      setFirstContactDate(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  />
                </Field>

                <Field label="Last Contact">
                  <input
                    type="date"
                    value={lastContactDate}
                    onChange={(e) =>
                      setLastContactDate(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  />
                </Field>

                <Field label="Next Follow-Up">
                  <input
                    type="date"
                    value={nextFollowUp}
                    onChange={(e) =>
                      setNextFollowUp(
                        e.target.value
                      )
                    }
                    className={inputClasses}
                  />
                </Field>
              </div>
            </FormSection>

            {/* VALUE */}

            <FormSection
              icon={<CircleDollarSign size={17} />}
              title="Project Value"
              description="Track potential and quoted revenue."
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Estimated Value">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#817970]">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={estimatedValue}
                      onChange={(e) =>
                        setEstimatedValue(
                          e.target.value
                        )
                      }
                      className={`${inputClasses} pl-8`}
                    />
                  </div>
                </Field>

                <Field label="Quoted Price">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#817970]">
                      $
                    </span>

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={quotedPrice}
                      onChange={(e) =>
                        setQuotedPrice(
                          e.target.value
                        )
                      }
                      className={`${inputClasses} pl-8`}
                    />
                  </div>
                </Field>
              </div>
            </FormSection>

            {/* NOTES */}

            <FormSection
              title="Notes"
              description="Keep important prospect context in one place."
            >
              <div className="grid gap-5 xl:grid-cols-2">
                <Field label="Website / Opportunity Notes">
                  <textarea
                    value={websiteNotes}
                    onChange={(e) =>
                      setWebsiteNotes(
                        e.target.value
                      )
                    }
                    rows={6}
                    placeholder="Current website issues, opportunities, ideas for redesign..."
                    className={`${inputClasses} resize-y`}
                  />
                </Field>

                <Field label="General Notes">
                  <textarea
                    value={notes}
                    onChange={(e) =>
                      setNotes(e.target.value)
                    }
                    rows={6}
                    placeholder="Conversation notes, preferences, next steps..."
                    className={`${inputClasses} resize-y`}
                  />
                </Field>
              </div>
            </FormSection>

            {/* ACTIONS */}

            <div className="flex flex-col-reverse gap-3 border-t border-[#ded7cd] pt-6 sm:flex-row sm:items-center sm:justify-end">
              <Link
                href={`/admin/prospects/${prospectId}`}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#d8d0c5] bg-[#fffdf9] px-6 text-sm font-medium transition hover:bg-[#f1ece3]"
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
                    Save Changes
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

// -------------------------------------------------------
// REUSABLE FORM COMPONENTS
// -------------------------------------------------------

const inputClasses =
  "w-full rounded-xl border border-[#dcd5cb] bg-white px-4 py-3 text-sm text-[#1b1713] outline-none transition placeholder:text-[#aaa298] focus:border-[#1b1713] focus:ring-1 focus:ring-[#1b1713]";

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-medium uppercase tracking-[0.12em] text-[#706960]">
        {label}
        {required && (
          <span className="ml-1 text-red-600">
            *
          </span>
        )}
      </span>

      {children}
    </label>
  );
}

function FormSection({
  icon,
  title,
  description,
  children,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9] p-5 sm:p-7">
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f1ece3]">
            {icon}
          </div>
        )}

        <div>
          <h2 className="font-serif text-xl">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-5 text-[#817970]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}