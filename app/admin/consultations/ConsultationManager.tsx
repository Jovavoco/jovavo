"use client";

import { useState } from "react";
import {
  CalendarDays,
  Check,
  Clock3,
  Loader2,
  Plus,
  Save,
  Settings2,
  Trash2,
} from "lucide-react";

/* =========================================================
   TYPES
========================================================= */

type AvailabilityRow = {
  id?: string;
  day_of_week: number;
  is_available: boolean;
  start_time: string | null;
  end_time: string | null;
};

type ConsultationSettings = {
  id?: number;
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

type Props = {
  initialAvailability: AvailabilityRow[];
  initialSettings: ConsultationSettings | null;
  initialOverrides: DateOverride[];
};

/* =========================================================
   CONSTANTS
========================================================= */

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const defaultSettings: ConsultationSettings = {
  id: 1,
  consultation_length_minutes: 30,
  buffer_minutes: 15,
  minimum_notice_hours: 24,
  booking_window_days: 30,
  timezone: "America/New_York",
};

/* =========================================================
   NORMALIZE WEEKLY AVAILABILITY

   This guarantees that all 7 days always exist in the
   client state, even if Supabase is missing a row.
========================================================= */

function normalizeAvailability(
  initialAvailability: AvailabilityRow[]
): AvailabilityRow[] {
  return DAYS.map((_, day) => {
    const existing = initialAvailability.find(
      (row) => row.day_of_week === day
    );

    if (existing) {
      return existing;
    }

    return {
      day_of_week: day,
      is_available: false,
      start_time: null,
      end_time: null,
    };
  });
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ConsultationManager({
  initialAvailability,
  initialSettings,
  initialOverrides,
}: Props) {
  const [availability, setAvailability] = useState<
    AvailabilityRow[]
  >(() => normalizeAvailability(initialAvailability));

  const [settings, setSettings] =
    useState<ConsultationSettings>(
      initialSettings ?? defaultSettings
    );

  const [overrides, setOverrides] =
    useState<DateOverride[]>(initialOverrides);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  /* =========================================================
     WEEKLY AVAILABILITY
  ========================================================= */

  function updateAvailability(
    day: number,
    field: keyof AvailabilityRow,
    value: boolean | string | null
  ) {
    setAvailability((current) =>
      current.map((row) => {
        if (row.day_of_week !== day) {
          return row;
        }

        /*
         * When a day is turned ON and it does not already
         * have hours, give it sensible defaults.
         */
        if (field === "is_available" && value === true) {
          return {
            ...row,
            is_available: true,
            start_time: row.start_time ?? "09:00",
            end_time: row.end_time ?? "17:00",
          };
        }

        /*
         * When a day is turned OFF, clear its hours.
         */
        if (field === "is_available" && value === false) {
          return {
            ...row,
            is_available: false,
            start_time: null,
            end_time: null,
          };
        }

        return {
          ...row,
          [field]: value,
        };
      })
    );

    setSaved(false);
    setError("");
  }

  /* =========================================================
     SETTINGS
  ========================================================= */

  function updateSetting(
    field: keyof ConsultationSettings,
    value: number | string
  ) {
    setSettings((current) => ({
      ...current,
      [field]: value,
    }));

    setSaved(false);
    setError("");
  }

  /* =========================================================
     DATE OVERRIDES
  ========================================================= */

  function addOverride() {
    setOverrides((current) => [
      ...current,
      {
        override_date: "",
        is_available: false,
        start_time: null,
        end_time: null,
        note: "",
      },
    ]);

    setSaved(false);
    setError("");
  }

  function updateOverride(
    index: number,
    field: keyof DateOverride,
    value: string | boolean | null
  ) {
    setOverrides((current) =>
      current.map((override, currentIndex) => {
        if (currentIndex !== index) {
          return override;
        }

        /*
         * If changing to Special Hours, provide default hours.
         */
        if (field === "is_available" && value === true) {
          return {
            ...override,
            is_available: true,
            start_time: override.start_time ?? "09:00",
            end_time: override.end_time ?? "17:00",
          };
        }

        /*
         * If blocking the entire day, clear the hours.
         */
        if (field === "is_available" && value === false) {
          return {
            ...override,
            is_available: false,
            start_time: null,
            end_time: null,
          };
        }

        return {
          ...override,
          [field]: value,
        };
      })
    );

    setSaved(false);
    setError("");
  }

  function removeOverride(index: number) {
    setOverrides((current) =>
      current.filter(
        (_, currentIndex) => currentIndex !== index
      )
    );

    setSaved(false);
    setError("");
  }

  /* =========================================================
     SAVE
  ========================================================= */

  async function saveAvailability() {
    setSaving(true);
    setSaved(false);
    setError("");

    try {
      /*
       * Normalize again before saving so the API is guaranteed
       * to receive Sunday through Saturday.
       */
      const normalizedAvailability =
        normalizeAvailability(availability);

      const response = await fetch(
        "/api/admin/consultations/settings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            availability: normalizedAvailability,
            settings,
            overrides,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to save consultation settings."
        );
      }

      setAvailability(normalizedAvailability);
      setSaved(true);
      setError("");
    } catch (error) {
      setSaved(false);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong while saving."
      );
    } finally {
      setSaving(false);
    }
  }

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <div className="mt-9 space-y-7">
      {/* =====================================================
          WEEKLY AVAILABILITY
      ===================================================== */}

      <section className="overflow-hidden rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
        {/* HEADER */}

        <div className="border-b border-[#e8e1d8] px-6 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
              <CalendarDays
                size={16}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <h2 className="font-serif text-xl">
                Weekly Availability
              </h2>

              <p className="mt-1 text-xs text-[#817970]">
                Choose the days and hours clients can book.
              </p>
            </div>
          </div>
        </div>

        {/* DAYS */}

        <div className="divide-y divide-[#eee8df]">
          {availability.map((row) => (
            <div
              key={row.day_of_week}
              className="grid gap-4 px-5 py-5 sm:px-7 md:grid-cols-[170px_100px_1fr] md:items-center"
            >
              {/* DAY */}

              <p className="text-sm font-medium">
                {DAYS[row.day_of_week]}
              </p>

              {/* TOGGLE */}

              <button
                type="button"
                onClick={() =>
                  updateAvailability(
                    row.day_of_week,
                    "is_available",
                    !row.is_available
                  )
                }
                className="flex items-center gap-2 text-xs font-medium"
              >
                <span
                  className={`relative h-6 w-11 rounded-full transition ${
                    row.is_available
                      ? "bg-[#1b1713]"
                      : "bg-[#d9d2c8]"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                      row.is_available
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </span>

                {row.is_available ? "On" : "Off"}
              </button>

              {/* HOURS */}

              {row.is_available ? (
                <div className="flex items-center gap-3">
                  <input
                    type="time"
                    value={
                      row.start_time?.slice(0, 5) ?? ""
                    }
                    onChange={(event) =>
                      updateAvailability(
                        row.day_of_week,
                        "start_time",
                        event.target.value
                      )
                    }
                    className="h-11 min-w-0 flex-1 rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                  />

                  <span className="text-xs text-[#817970]">
                    to
                  </span>

                  <input
                    type="time"
                    value={
                      row.end_time?.slice(0, 5) ?? ""
                    }
                    onChange={(event) =>
                      updateAvailability(
                        row.day_of_week,
                        "end_time",
                        event.target.value
                      )
                    }
                    className="h-11 min-w-0 flex-1 rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                  />
                </div>
              ) : (
                <p className="text-xs text-[#9a9289]">
                  Unavailable
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          BOOKING SETTINGS
      ===================================================== */}

      <section className="overflow-hidden rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
        {/* HEADER */}

        <div className="border-b border-[#e8e1d8] px-6 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
              <Settings2
                size={16}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <h2 className="font-serif text-xl">
                Booking Settings
              </h2>

              <p className="mt-1 text-xs text-[#817970]">
                Control how appointment times are generated.
              </p>
            </div>
          </div>
        </div>

        {/* SETTINGS */}

        <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-7 xl:grid-cols-4">
          <SettingSelect
            label="Consultation Length"
            value={
              settings.consultation_length_minutes
            }
            onChange={(value) =>
              updateSetting(
                "consultation_length_minutes",
                Number(value)
              )
            }
            options={[
              [15, "15 minutes"],
              [30, "30 minutes"],
              [45, "45 minutes"],
              [60, "60 minutes"],
            ]}
          />

          <SettingSelect
            label="Buffer Between Calls"
            value={settings.buffer_minutes}
            onChange={(value) =>
              updateSetting(
                "buffer_minutes",
                Number(value)
              )
            }
            options={[
              [0, "No buffer"],
              [10, "10 minutes"],
              [15, "15 minutes"],
              [30, "30 minutes"],
              [60, "60 minutes"],
            ]}
          />

          <SettingSelect
            label="Minimum Notice"
            value={settings.minimum_notice_hours}
            onChange={(value) =>
              updateSetting(
                "minimum_notice_hours",
                Number(value)
              )
            }
            options={[
              [0, "No minimum"],
              [2, "2 hours"],
              [6, "6 hours"],
              [12, "12 hours"],
              [24, "24 hours"],
              [48, "48 hours"],
              [72, "72 hours"],
            ]}
          />

          <SettingSelect
            label="Booking Window"
            value={settings.booking_window_days}
            onChange={(value) =>
              updateSetting(
                "booking_window_days",
                Number(value)
              )
            }
            options={[
              [7, "7 days ahead"],
              [14, "14 days ahead"],
              [30, "30 days ahead"],
              [60, "60 days ahead"],
              [90, "90 days ahead"],
            ]}
          />
        </div>

        {/* TIMEZONE */}

        <div className="border-t border-[#eee8df] px-6 py-5 sm:px-7">
          <div className="flex items-center gap-3">
            <Clock3
              size={16}
              className="text-[#817970]"
            />

            <div>
              <p className="text-xs font-medium">
                Booking timezone
              </p>

              <p className="mt-1 text-xs text-[#817970]">
                {settings.timezone}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DATE OVERRIDES
      ===================================================== */}

      <section className="overflow-hidden rounded-[26px] border border-[#e2dbd1] bg-[#fffdf9]">
        {/* HEADER */}

        <div className="flex flex-col gap-4 border-b border-[#e8e1d8] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1ece3]">
              <CalendarDays
                size={16}
                strokeWidth={1.6}
              />
            </div>

            <div>
              <h2 className="font-serif text-xl">
                Date Overrides
              </h2>

              <p className="mt-1 text-xs text-[#817970]">
                Block a date or give one day different
                hours.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={addOverride}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[#ded7cd] bg-white px-4 text-xs font-medium transition hover:border-[#1b1713]"
          >
            <Plus size={14} />
            Add Date
          </button>
        </div>

        {/* EMPTY STATE */}

        {overrides.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <CalendarDays
              size={24}
              strokeWidth={1.3}
              className="mx-auto text-[#aaa298]"
            />

            <p className="mt-4 text-sm text-[#706960]">
              No date overrides.
            </p>

            <p className="mt-1 text-xs text-[#9a9289]">
              Add one when you need to block a day or
              use special hours.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#eee8df]">
            {overrides.map((override, index) => (
              <div
                key={
                  override.id ?? `new-${index}`
                }
                className="p-5 sm:p-7"
              >
                <div className="grid gap-4 xl:grid-cols-[190px_160px_1fr_44px] xl:items-end">
                  {/* DATE */}

                  <div>
                    <label className="mb-2 block text-[11px] font-medium text-[#706960]">
                      Date
                    </label>

                    <input
                      type="date"
                      value={override.override_date}
                      onChange={(event) =>
                        updateOverride(
                          index,
                          "override_date",
                          event.target.value
                        )
                      }
                      className="h-11 w-full rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                    />
                  </div>

                  {/* AVAILABILITY TYPE */}

                  <div>
                    <label className="mb-2 block text-[11px] font-medium text-[#706960]">
                      Availability
                    </label>

                    <select
                      value={
                        override.is_available
                          ? "available"
                          : "unavailable"
                      }
                      onChange={(event) =>
                        updateOverride(
                          index,
                          "is_available",
                          event.target.value ===
                            "available"
                        )
                      }
                      className="h-11 w-full rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                    >
                      <option value="unavailable">
                        Unavailable
                      </option>

                      <option value="available">
                        Special Hours
                      </option>
                    </select>
                  </div>

                  {/* SPECIAL HOURS */}

                  {override.is_available ? (
                    <div>
                      <label className="mb-2 block text-[11px] font-medium text-[#706960]">
                        Special Hours
                      </label>

                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          value={
                            override.start_time?.slice(
                              0,
                              5
                            ) ?? ""
                          }
                          onChange={(event) =>
                            updateOverride(
                              index,
                              "start_time",
                              event.target.value
                            )
                          }
                          className="h-11 min-w-0 flex-1 rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                        />

                        <span className="text-xs text-[#817970]">
                          to
                        </span>

                        <input
                          type="time"
                          value={
                            override.end_time?.slice(
                              0,
                              5
                            ) ?? ""
                          }
                          onChange={(event) =>
                            updateOverride(
                              index,
                              "end_time",
                              event.target.value
                            )
                          }
                          className="h-11 min-w-0 flex-1 rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <label className="mb-2 block text-[11px] font-medium text-transparent">
                        Status
                      </label>

                      <div className="flex h-11 items-center rounded-xl bg-[#f8f5ef] px-4 text-xs text-[#817970]">
                        Entire day blocked
                      </div>
                    </div>
                  )}

                  {/* DELETE */}

                  <button
                    type="button"
                    onClick={() =>
                      removeOverride(index)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ded7cd] bg-white text-[#817970] transition hover:border-red-300 hover:text-red-700"
                    aria-label="Remove override"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================
          SAVE
      ===================================================== */}

      <div className="flex flex-col gap-4 rounded-[24px] border border-[#ded7cd] bg-[#f1ece3] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-sm font-medium">
            Save consultation settings
          </p>

          <p className="mt-1 text-xs leading-5 text-[#817970]">
            Your public booking calendar will use these
            settings.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {saved ? (
            <div className="flex items-center gap-2 text-xs font-medium">
              <Check size={15} />
              Saved
            </div>
          ) : null}

          <button
            type="button"
            onClick={saveAvailability}
            disabled={saving}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1b1713] px-6 text-sm font-medium text-white transition hover:bg-[#302923] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving ? (
              <>
                <Loader2
                  size={15}
                  className="animate-spin"
                />
                Saving
              </>
            ) : (
              <>
                <Save size={15} />
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          ERROR
      ===================================================== */}

      {error ? (
        <div className="rounded-xl border border-red-700/15 bg-red-50 px-4 py-4 text-sm text-red-900">
          {error}
        </div>
      ) : null}
    </div>
  );
}

/* =========================================================
   SETTING SELECT
========================================================= */

function SettingSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: number;
  onChange: (value: string) => void;
  options: Array<[number, string]>;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] font-medium text-[#706960]">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="h-11 w-full rounded-xl border border-[#ded7cd] bg-white px-3 text-sm outline-none transition focus:border-[#1b1713]/40"
      >
        {options.map(
          ([optionValue, optionLabel]) => (
            <option
              key={optionValue}
              value={optionValue}
            >
              {optionLabel}
            </option>
          )
        )}
      </select>
    </div>
  );
}