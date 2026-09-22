import Link from "next/link";

const navItems = [
  ["menu", "MENU"],
  ["story", "OUR STORY"],
  ["private-dining", "PRIVATE DINING"],
  ["contact", "CONTACT"],
];

export default function SorellaPrivateDiningPage() {
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
            {navItems.map(([slug, label]) => (
              <Link
                key={slug}
                href={
                  slug === "gallery" || slug === "contact"
                    ? `/preview/sorella#${slug}`
                    : `/preview/sorella/${slug}`
                }
                className={`relative py-2 text-[8px] tracking-[0.22em] text-[#65594F] ${
                  slug === "private-dining"
                    ? "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#6D3235]"
                    : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/preview/sorella#reserve"
            className="rounded-full bg-[#342D28] px-6 py-3 text-[8px] tracking-[0.22em] text-white"
          >
            RESERVE
          </Link>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative bg-[#F3EEE6] px-3 pb-8 pt-3 sm:px-5 sm:pb-10 lg:px-7">

        <div
          className="
            relative
            min-h-[540px]
            overflow-hidden
            rounded-bl-[6px]
            rounded-br-[90px]
            sm:min-h-[590px]
            sm:rounded-br-[130px]
            lg:min-h-[640px]
            lg:rounded-br-[190px]
          "
        >
          <img
            src="/previews/sorella/private-dining.png"
            alt="Private dining at Sorella"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* IMAGE TONE */}

          <div className="absolute inset-0 bg-[#211812]/15" />

          {/* LEFT GRADIENT */}

          <div className="absolute inset-0 bg-gradient-to-r from-[#211812]/65 via-[#211812]/18 to-transparent" />

          {/* BOTTOM GRADIENT */}

          <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#1D1510]/55 via-[#1D1510]/10 to-transparent" />

          {/* TOP DETAIL */}

          <div className="absolute left-7 top-7 z-20 flex items-center gap-4 sm:left-10 sm:top-9 lg:left-14">
            <span className="h-px w-10 bg-white/45" />

            <p className="text-[8px] tracking-[0.34em] text-white/65">
              SORELLA · NEW YORK
            </p>
          </div>

          {/* HERO COPY */}

          <div
            className="
              relative z-10
              flex min-h-[540px]
              items-end
              px-7 pb-14
              sm:min-h-[590px]
              sm:px-10 sm:pb-16
              md:px-14
              lg:min-h-[640px]
              lg:px-16 lg:pb-[72px]
            "
          >
            <div className="w-full max-w-[1320px]">

              <p className="mb-5 text-[8px] tracking-[0.4em] text-white/65">
                PRIVATE DINING
              </p>

              <h1
                className="
                  max-w-[760px]
                  text-[52px] font-normal
                  leading-[0.9]
                  tracking-[-0.055em]
                  text-[#F8F3EA]
                  sm:text-[68px]
                  lg:text-[82px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                A table for
                <br />

                <span className="italic text-[#EFE1D4]">
                  something special.
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-5">
                <span className="h-px w-11 bg-white/40" />

                <p
                  className="text-[15px] italic text-white/80 sm:text-[17px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Gather. Celebrate. Stay awhile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3EEE6]">
        <div className="mx-auto max-w-[1180px] px-6 py-12 sm:px-10 sm:py-14 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-7 lg:grid-cols-[0.48fr_1.52fr] lg:gap-14">

            {/* LEFT */}

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#9C8B7E]" />

                <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
                  GATHER AT SORELLA
                </p>
              </div>

              <p
                className="mt-3 max-w-[200px] text-[14px] italic leading-[1.5] text-[#8A786B]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Your table, your people, your evening.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <h2
                className="max-w-[800px] text-[34px] font-normal leading-[1.04] tracking-[-0.035em] text-[#352E29] sm:text-[41px] lg:text-[47px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Some evenings call for{" "}

                <span className="italic text-[#78675B]">
                  a little more room.
                </span>
              </h2>

              <div className="my-5 h-px bg-[#AA998D]/30" />

              <div className="grid gap-5 sm:grid-cols-2 sm:gap-9">

                <p className="text-[12px] font-light leading-[1.75] text-[#756A61] sm:text-[13px]">
                  From birthdays and anniversaries to dinners
                  with friends, Sorella offers an intimate
                  setting designed around the people gathered
                  at the table.
                </p>

                <p className="text-[12px] font-light leading-[1.75] text-[#756A61] sm:text-[13px]">
                  Shared menus, flowing wine and thoughtful
                  hospitality make each gathering feel personal
                  without ever feeling overly formal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="bg-[#E8DED2]">
        <div className="mx-auto max-w-[1320px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-16">

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">

            {/* IMAGE */}

            <div className="relative">

              <div className="overflow-hidden rounded-[6px_80px_6px_6px] sm:rounded-[6px_110px_6px_6px]">
                <img
                  src="/previews/sorella/sorella-private-dining1.jpg"
                  alt="A gathering at Sorella"
                  className="h-[400px] w-full object-cover sm:h-[470px] lg:h-[510px]"
                />
              </div>

              <div className="absolute -bottom-4 right-6 rounded-full bg-[#F3EEE6] px-6 py-3 sm:right-8">

                <p
                  className="text-[13px] italic text-[#756459]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Made for gathering.
                </p>
              </div>
            </div>

            {/* COPY */}

            <div className="lg:pl-4">

              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-10 bg-[#947F70]" />

                <p className="text-[8px] tracking-[0.32em] text-[#88766A]">
                  THE EXPERIENCE
                </p>
              </div>

              <h2
                className="text-[38px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[46px] lg:text-[53px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Dinner,
                <br />

                <span className="italic text-[#7D6A5D]">
                  made yours.
                </span>
              </h2>

              <p className="mt-5 max-w-[440px] text-[12px] font-light leading-[1.8] text-[#74675D] sm:text-[13px]">
                Private dining at Sorella is built around
                generous food, an easy atmosphere and the
                feeling that the table belongs entirely to
                your group for the evening.
              </p>

              <p className="mt-3 max-w-[440px] text-[12px] font-light leading-[1.8] text-[#74675D] sm:text-[13px]">
                Our imagined private dining experience includes
                family-style menus, optional wine pairings and
                flexible arrangements for intimate celebrations.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {[
                  "CELEBRATIONS",
                  "PRIVATE DINNERS",
                  "GROUP DINING",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#8D796B]/25 px-4 py-2 text-[7px] tracking-[0.18em] text-[#77675C]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DETAILS
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#6D3235] text-white">

        {/* LARGE BACKGROUND WORD */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-[35px] -top-[35px]
            select-none
            text-[105px] font-normal italic
            leading-none tracking-[-0.07em]
            text-white/[0.035]
            sm:text-[145px]
            lg:text-[195px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Occasions
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">

            {/* TITLE */}

            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-white/35" />

                <p className="text-[8px] tracking-[0.32em] text-white/50">
                  THE DETAILS
                </p>
              </div>

              <h2
                className="mt-4 text-[36px] font-normal leading-[1] tracking-[-0.04em] text-[#F8F2E9] sm:text-[43px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                An evening
                <br />

                <span className="italic text-white/65">
                  around your table.
                </span>
              </h2>
            </div>

            {/* DETAILS GRID */}

            <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  The occasion
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.7] text-white/50">
                  Birthdays, anniversaries, intimate
                  celebrations and group dinners.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  The menu
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.7] text-white/50">
                  Seasonal family-style menus inspired by
                  Sorella favorites.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  The wine
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.7] text-white/50">
                  Curated bottles and optional pairings selected
                  for the table.
                </p>
              </div>

              <div className="border-t border-white/15 pt-4">

                <p
                  className="text-[16px] italic text-white/85"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  The setting
                </p>

                <p className="mt-2 text-[10px] font-light leading-[1.7] text-white/50">
                  Warm, intimate and designed for evenings that
                  deserve a little more time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INQUIRY CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3EEE6]">

        {/* BACKGROUND TYPE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -bottom-[35px] -left-[15px]
            select-none
            text-[105px] font-normal italic
            leading-none tracking-[-0.06em]
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

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-12 sm:px-10 sm:py-14 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-7 lg:grid-cols-[.5fr_1.5fr] lg:gap-14">

            {/* LEFT */}

            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#9C8B7E]" />

                <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
                  PLAN YOUR EVENING
                </p>
              </div>

              <p
                className="mt-3 max-w-[190px] text-[14px] italic leading-[1.45] text-[#8A786B]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                We will set the table.
              </p>
            </div>

            {/* RIGHT */}

            <div>

              <h2
                className="max-w-[760px] text-[37px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[45px] lg:text-[52px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Tell us what you are{" "}

                <span className="italic text-[#78675B]">
                  celebrating.
                </span>
              </h2>

              <div className="mt-5 flex flex-col gap-5 border-t border-[#AA9988A]/30 pt-5 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-[420px] text-[12px] font-light leading-[1.75] text-[#756A61] sm:text-[13px]">
                  Share a few details about your gathering and
                  imagine the evening from there.
                </p>

                {/* DISABLED CONCEPT BUTTON */}

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
                    text-[8px] tracking-[0.2em]
                    text-white/75
                    opacity-80
                  "
                >
                  PRIVATE DINING INQUIRY

                  <span className="text-[11px]">
                    ↗
                  </span>
                </button>
              </div>

              {/* CONCEPT NOTE */}

              <div className="mt-5 flex items-center gap-3">

                <span className="h-[4px] w-[4px] rounded-full bg-[#8D7B6D]/50" />

                <p className="text-[7px] tracking-[0.18em] text-[#88796D]/70">
                  CONCEPT DEMONSTRATION · INQUIRIES ARE DISABLED
                </p>
              </div>
            </div>
          </div>
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

          {/* FOOTER BOTTOM */}

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