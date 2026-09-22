import Link from "next/link";

const navItems = [
  ["/preview/sorella/menu", "MENU", "menu"],
  ["/preview/sorella#story", "OUR STORY", "story"],
  ["/preview/sorella/private-dining", "PRIVATE DINING", "private-dining"],
  ["/preview/sorella/contact", "CONTACT", "contact"],
];

const times = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

export default function SorellaReservationsPage() {
  return (
    <main className="min-h-screen bg-[#F3EEE6] text-[#342D28]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 border-b border-[#9B897B]/20 bg-[#F3EEE6]">
        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20">

          <Link
            href="/preview/sorella"
            className="text-[24px] tracking-[0.08em] text-[#342D28]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            SORELLA
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([href, label, key]) => (
              <Link
                key={key}
                href={href}
                className="relative py-2 text-[8px] tracking-[0.22em] text-[#65594F] transition-colors duration-300 hover:text-[#342D28]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/preview/sorella/reservations"
            className="rounded-full bg-[#6D3235] px-6 py-3 text-[8px] tracking-[0.22em] text-white"
          >
            RESERVE
          </Link>
        </div>
      </header>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3EEE6]">

        {/* DECORATIVE WORD */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-[20px]
            top-[10px]
            select-none
            text-[110px]
            font-normal
            italic
            leading-none
            tracking-[-0.07em]
            text-[#8D7A6D]/[0.045]
            sm:text-[160px]
            lg:text-[220px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Sorella
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-12 pt-14 sm:px-10 sm:pb-14 sm:pt-16 md:px-14 lg:px-20 lg:pb-16">

          <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">

            {/* LEFT */}

            <div>
              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-10 bg-[#9C8B7E]" />

                <p className="text-[8px] tracking-[0.34em] text-[#8B7B70]">
                  RESERVATIONS
                </p>
              </div>

              <h1
                className="
                  max-w-[760px]
                  text-[52px]
                  font-normal
                  leading-[0.91]
                  tracking-[-0.055em]
                  text-[#342D28]
                  sm:text-[68px]
                  lg:text-[80px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Your table
                <br />

                <span className="italic text-[#78675B]">
                  is waiting.
                </span>
              </h1>
            </div>

            {/* RIGHT */}

            <div className="lg:pb-2">

              <div className="border-t border-[#A99688]/30 pt-5">

                <p
                  className="max-w-[390px] text-[17px] italic leading-[1.5] text-[#75675E]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Dinner, wine and an evening with nowhere else
                  you need to be.
                </p>

                <p className="mt-4 max-w-[390px] text-[12px] font-light leading-[1.8] text-[#81746A] sm:text-[13px]">
                  Choose your party size, preferred date and time
                  below to imagine your evening at Sorella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESERVATION AREA
      ===================================================== */}

      <section className="bg-[#E8DED2]">

        <div className="mx-auto max-w-[1320px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">

            {/* =================================================
                LEFT DETAILS
            ================================================= */}

            <div className="flex flex-col justify-between">

              <div>

                <div className="flex items-center gap-4">
                  <span className="h-px w-9 bg-[#947F70]" />

                  <p className="text-[8px] tracking-[0.32em] text-[#88766A]">
                    JOIN US
                  </p>
                </div>

                <h2
                  className="mt-5 text-[37px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[44px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Come for dinner.
                  <br />

                  <span className="italic text-[#7D6A5D]">
                    Stay for the evening.
                  </span>
                </h2>

                <p className="mt-5 max-w-[380px] text-[12px] font-light leading-[1.8] text-[#74675D] sm:text-[13px]">
                  Reservations are imagined for dinner seven nights
                  a week. For larger gatherings and celebrations,
                  explore our private dining experience.
                </p>
              </div>

              {/* DETAILS */}

              <div className="mt-10 space-y-6">

                <div className="border-t border-[#9C897B]/30 pt-4">

                  <p
                    className="text-[16px] italic text-[#67584E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Dinner
                  </p>

                  <p className="mt-2 text-[11px] font-light leading-[1.75] text-[#796B61]">
                    Mon–Thu · 5PM–11PM
                    <br />
                    Fri–Sat · 5PM–12AM
                    <br />
                    Sun · 5PM–10PM
                  </p>
                </div>

                <div className="border-t border-[#9C897B]/30 pt-4">

                  <p
                    className="text-[16px] italic text-[#67584E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Larger parties
                  </p>

                  <p className="mt-2 max-w-[320px] text-[11px] font-light leading-[1.75] text-[#796B61]">
                    Planning a celebration or gathering? Our
                    private dining concept offers a more personal
                    experience for groups.
                  </p>

                  <Link
                    href="/preview/sorella/private-dining"
                    className="mt-4 inline-flex items-center gap-3 text-[8px] tracking-[0.2em] text-[#6D3235]"
                  >
                    PRIVATE DINING
                    <span>↗</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================
                RESERVATION PANEL
            ================================================= */}

            <div className="overflow-hidden rounded-[6px_90px_6px_6px] bg-[#F3EEE6] sm:rounded-[6px_120px_6px_6px]">

              {/* PANEL HEADER */}

              <div className="border-b border-[#A99688]/25 px-6 py-7 sm:px-9 lg:px-11">

                <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
                  FIND A TABLE
                </p>

                <h3
                  className="mt-3 text-[30px] font-normal leading-[1] tracking-[-0.035em] text-[#352E29] sm:text-[35px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Plan your
                  <span className="italic text-[#78675B]"> evening.</span>
                </h3>
              </div>

              <div className="px-6 py-8 sm:px-9 lg:px-11">

                {/* =================================================
                    PARTY / DATE
                ================================================= */}

                <div className="grid gap-7 sm:grid-cols-2">

                  {/* PARTY */}

                  <div>

                    <label
                      htmlFor="party"
                      className="text-[8px] tracking-[0.22em] text-[#827267]"
                    >
                      PARTY SIZE
                    </label>

                    <select
                      id="party"
                      defaultValue="2"
                      className="
                        mt-2 w-full
                        border-0 border-b
                        border-[#A99688]/40
                        bg-transparent
                        px-0 py-3
                        text-[13px]
                        text-[#51463F]
                        outline-none
                      "
                    >
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                      <option value="5">5 guests</option>
                      <option value="6">6 guests</option>
                      <option value="7">7 guests</option>
                      <option value="8">8 guests</option>
                    </select>
                  </div>

                  {/* DATE */}

                  <div>

                    <label
                      htmlFor="date"
                      className="text-[8px] tracking-[0.22em] text-[#827267]"
                    >
                      DATE
                    </label>

                    <input
                      id="date"
                      type="date"
                      className="
                        mt-2 w-full
                        border-0 border-b
                        border-[#A99688]/40
                        bg-transparent
                        px-0 py-3
                        text-[13px]
                        text-[#51463F]
                        outline-none
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    TIME
                ================================================= */}

                <div className="mt-9">

                  <div className="flex items-end justify-between border-b border-[#A99688]/30 pb-3">

                    <div>

                      <p className="text-[8px] tracking-[0.22em] text-[#827267]">
                        PREFERRED TIME
                      </p>

                      <p
                        className="mt-1 text-[14px] italic text-[#8A786B]"
                        style={{
                          fontFamily: '"Times New Roman", Times, serif',
                        }}
                      >
                        Select an evening time.
                      </p>
                    </div>

                    <p className="hidden text-[7px] tracking-[0.16em] text-[#9A897D] sm:block">
                      DINNER
                    </p>
                  </div>

                  {/* TIMES */}

                  <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-3">

                    {times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        disabled
                        className="
                          cursor-not-allowed
                          rounded-full
                          border
                          border-[#9D897A]/30
                          px-3 py-3
                          text-[9px]
                          tracking-[0.08em]
                          text-[#66584F]/70
                          opacity-80
                        "
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    SUMMARY
                ================================================= */}

                <div className="mt-9 border-t border-[#A99688]/30 pt-6">

                  <div className="grid gap-5 sm:grid-cols-3">

                    <div>

                      <p className="text-[7px] tracking-[0.2em] text-[#948277]">
                        PARTY
                      </p>

                      <p
                        className="mt-2 text-[15px] italic text-[#5E5047]"
                        style={{
                          fontFamily: '"Times New Roman", Times, serif',
                        }}
                      >
                        2 guests
                      </p>
                    </div>

                    <div>

                      <p className="text-[7px] tracking-[0.2em] text-[#948277]">
                        DATE
                      </p>

                      <p
                        className="mt-2 text-[15px] italic text-[#5E5047]"
                        style={{
                          fontFamily: '"Times New Roman", Times, serif',
                        }}
                      >
                        Select date
                      </p>
                    </div>

                    <div>

                      <p className="text-[7px] tracking-[0.2em] text-[#948277]">
                        TIME
                      </p>

                      <p
                        className="mt-2 text-[15px] italic text-[#5E5047]"
                        style={{
                          fontFamily: '"Times New Roman", Times, serif',
                        }}
                      >
                        Select time
                      </p>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    DISABLED CTA
                ================================================= */}

                <div className="mt-7 flex flex-col gap-4 border-t border-[#A99688]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="
                      inline-flex w-fit
                      cursor-not-allowed
                      items-center gap-4
                      rounded-full
                      bg-[#342D28]
                      px-7 py-3.5
                      text-[8px]
                      tracking-[0.2em]
                      text-white/75
                      opacity-80
                    "
                  >
                    FIND A TABLE

                    <span className="text-[11px]">
                      ↗
                    </span>
                  </button>

                  <div className="flex items-center gap-2">

                    <span className="h-[4px] w-[4px] rounded-full bg-[#8D7B6D]/50" />

                    <p className="text-[7px] tracking-[0.15em] text-[#88796D]/65">
                      RESERVATIONS DISABLED
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESERVATION NOTES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#6D3235] text-white">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[40px]
            -right-[20px]
            select-none
            text-[115px]
            font-normal
            italic
            leading-none
            tracking-[-0.06em]
            text-white/[0.035]
            sm:text-[160px]
            lg:text-[210px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Evening
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-white/35" />

                <p className="text-[8px] tracking-[0.32em] text-white/50">
                  BEFORE YOU JOIN US
                </p>
              </div>

              <h2
                className="mt-4 text-[36px] font-normal leading-[1] tracking-[-0.04em] text-[#F8F2E9] sm:text-[43px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                A few things
                <br />

                <span className="italic text-white/65">
                  to know.
                </span>
              </h2>
            </div>

            {/* RIGHT */}

            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Running late?
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.75] text-white/50 sm:text-[11px]">
                  We imagine holding reserved tables for 15 minutes
                  past the scheduled reservation time.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Larger groups
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.75] text-white/50 sm:text-[11px]">
                  Parties larger than eight are directed to the
                  private dining experience.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Special requests
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.75] text-white/50 sm:text-[11px]">
                  Dietary notes and special occasions can be shared
                  with the restaurant when arranging a reservation.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Questions?
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.75] text-white/50 sm:text-[11px]">
                  Visit our contact page for general questions about
                  the imagined Sorella dining experience.
                </p>

                <Link
                  href="/preview/sorella/contact"
                  className="mt-3 inline-flex items-center gap-3 text-[7px] tracking-[0.18em] text-white/70"
                >
                  CONTACT SORELLA
                  <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3EEE6]">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[35px]
            -left-[15px]
            select-none
            text-[105px]
            font-normal
            italic
            leading-none
            tracking-[-0.06em]
            text-[#9B887A]/[0.05]
            sm:text-[145px]
            lg:text-[185px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Sorella
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 lg:px-20">

          <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
            AT THE TABLE
          </p>

          <h2
            className="mx-auto mt-4 max-w-[760px] text-[40px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[48px] lg:text-[55px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Dinner starts
            <span className="italic text-[#78675B]"> here.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-[12px] font-light leading-[1.8] text-[#756A61] sm:text-[13px]">
            Take a look at what is cooking before imagining your
            evening at Sorella.
          </p>

          <Link
            href="/preview/sorella/menu"
            className="mt-7 inline-flex items-center gap-4 rounded-full border border-[#8D796B]/30 px-7 py-3.5 text-[8px] tracking-[0.2em] text-[#66584F]"
          >
            VIEW THE MENU

            <span className="text-[11px]">
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* =====================================================
          CONCEPT NOTICE
      ===================================================== */}

      <section className="border-t border-[#A99688]/20 bg-[#E8DED2]">

        <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-3 px-6 py-5">

          <span className="h-[4px] w-[4px] rounded-full bg-[#8D7B6D]/50" />

          <p className="text-center text-[7px] tracking-[0.19em] text-[#88796D]/70">
            CONCEPT DEMONSTRATION · RESERVATIONS ARE DISABLED
          </p>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#302923] text-[#F4EEE6]">

        <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 md:px-14 lg:px-20">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">

            {/* BRAND */}

            <div>

              <Link
                href="/preview/sorella"
                className="text-[25px] tracking-[0.08em]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                SORELLA
              </Link>

              <p
                className="mt-3 text-[14px] italic text-white/55"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Italian Kitchen · New York
              </p>
            </div>

            {/* VISIT */}

            <div>

              <p
                className="text-[14px] italic text-white/75"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Visit
              </p>

              <p className="mt-3 text-[12px] leading-[1.7] text-white/45">
                123 West Broadway
                <br />
                New York, NY 10013
                <br />
                (212) 555-0187
              </p>
            </div>

            {/* HOURS */}

            <div>

              <p
                className="text-[14px] italic text-white/75"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Hours
              </p>

              <p className="mt-3 text-[12px] leading-[1.7] text-white/45">
                Mon–Thu · 5PM–11PM
                <br />
                Fri–Sat · 5PM–12AM
                <br />
                Sun · 5PM–10PM
              </p>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[8px] tracking-[0.2em] text-white/30">
              INDEPENDENT CONCEPT · DESIGNED BY JOVAVO
            </p>

            <p
              className="text-[12px] italic text-white/35"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Dinner · wine · late evenings.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}