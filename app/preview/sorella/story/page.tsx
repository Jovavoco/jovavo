"use client";

import Link from "next/link";
import { useState } from "react";

/* =====================================================
   SORELLA — OUR STORY
===================================================== */

export default function SorellaStoryPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F3EEE6] text-[#332C27]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 border-b border-[#CFC3B6]/35 bg-[#F3EEE6]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-7 sm:px-10 md:px-14 lg:px-20">

          {/* LOGO */}

          <Link href="/preview/sorella">
            <span
              className="block text-[26px] tracking-[0.28em] text-[#332D28]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              SORELLA
            </span>

            <span className="mt-1.5 block text-[5px] tracking-[0.35em] text-[#8B7F74]">
              ITALIAN KITCHEN · NEW YORK
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <nav className="hidden items-center gap-9 md:flex lg:gap-11">
            <Link
              href="/preview/sorella/menu"
              className="text-[7px] tracking-[0.28em] text-[#746A61]"
            >
              MENU
            </Link>

            <Link
              href="/preview/sorella/story"
              className="border-b border-[#39312B] pb-2 text-[7px] tracking-[0.28em] text-[#39312B]"
            >
              OUR STORY
            </Link>

            <Link
              href="/preview/sorella#private-dining"
              className="text-[7px] tracking-[0.28em] text-[#746A61]"
            >
              PRIVATE DINING
            </Link>

            <Link
              href="/preview/sorella#contact"
              className="text-[7px] tracking-[0.28em] text-[#746A61]"
            >
              CONTACT
            </Link>

            <Link
              href="/preview/sorella#reserve"
              className="rounded-full bg-[#332D28] px-8 py-4 text-[7px] tracking-[0.28em] text-white"
            >
              RESERVE
            </Link>
          </nav>

          {/* MOBILE BUTTON */}

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex flex-col gap-[6px] md:hidden"
          >
            <span className="h-px w-6 bg-[#332D28]" />
            <span className="h-px w-6 bg-[#332D28]" />
          </button>
        </div>

        {/* MOBILE NAV */}

        {mobileOpen && (
          <div className="border-t border-[#CEC2B5]/50 bg-[#F3EEE6] px-6 py-7 md:hidden">
            <div className="flex flex-col gap-5">
              <Link
                href="/preview/sorella/menu"
                onClick={() => setMobileOpen(false)}
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                MENU
              </Link>

              <Link
                href="/preview/sorella/story"
                onClick={() => setMobileOpen(false)}
                className="text-[8px] tracking-[0.27em] text-[#332D28]"
              >
                OUR STORY
              </Link>

              <Link
                href="/preview/sorella#private-dining"
                onClick={() => setMobileOpen(false)}
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                PRIVATE DINING
              </Link>

              <Link
                href="/preview/sorella#gallery"
                onClick={() => setMobileOpen(false)}
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                GALLERY
              </Link>

              <Link
                href="/preview/sorella#contact"
                onClick={() => setMobileOpen(false)}
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                CONTACT
              </Link>

              <Link
                href="/preview/sorella#reserve"
                onClick={() => setMobileOpen(false)}
                className="mt-2 w-fit rounded-full bg-[#332D28] px-7 py-3.5 text-[7px] tracking-[0.28em] text-white"
              >
                RESERVE
              </Link>
            </div>
          </div>
        )}
      </header>

{/* =====================================================
    HERO — LARGE EDITORIAL
===================================================== */}

<section className="relative bg-[#F3EEE6] pb-16 sm:pb-20 lg:pb-24">
  {/* =====================================================
      LARGE HERO IMAGE
  ===================================================== */}

  <div
    className="
      relative
      min-h-[660px]
      overflow-hidden
      rounded-br-[90px]
      sm:min-h-[720px]
      sm:rounded-br-[140px]
      lg:min-h-[790px]
      lg:rounded-br-[210px]
    "
  >
    <img
      src="/previews/sorella/sorella-story-hero.jpg"
      alt="An evening at Sorella"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    {/* SOFTER OVERLAY */}

    <div className="absolute inset-0 bg-[#1D1713]/20" />

    {/* DARKEN LEFT SIDE FOR COPY */}

    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-[#211812]/55
        via-[#211812]/20
        to-transparent
      "
    />

    {/* TOP FADE */}

    <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/20 to-transparent" />

    {/* =====================================================
        HERO COPY
    ===================================================== */}

    <div
      className="
        relative z-10
        flex min-h-[660px]
        items-end
        px-6 pb-20
        sm:min-h-[720px]
        sm:px-10 sm:pb-24
        md:px-14
        lg:min-h-[790px]
        lg:px-20 lg:pb-28
      "
    >
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="max-w-[760px]">

          {/* LABEL */}

          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-white/50" />

            <p className="text-[9px] tracking-[0.38em] text-white/70">
              OUR STORY
            </p>
          </div>

          {/* TITLE */}

          <h1
            className="
              max-w-[720px]
              text-[60px] font-normal
              leading-[0.9] tracking-[-0.055em]
              text-[#F8F3EA]
              sm:text-[80px]
              lg:text-[100px]
            "
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Made for the
            <br />

            <span className="italic font-normal text-[#F1E5D9]">
              table.
            </span>
          </h1>

          {/* SUBTITLE */}

          <div className="mt-9 flex items-start gap-5">
            <span className="mt-[12px] h-px w-12 shrink-0 bg-white/45" />

            <div>
              <p
                className="text-[17px] italic leading-[1.4] text-white/85 sm:text-[19px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Italian cooking.
                <br className="sm:hidden" /> New York evenings.
              </p>

              <p className="mt-4 max-w-[390px] text-[11px] font-light leading-[1.8] text-white/60 sm:text-[12px]">
                Shared plates, poured wine and evenings
                meant to unfold slowly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* =====================================================
        RIGHT-SIDE VERTICAL DETAIL
    ===================================================== */}

    <div className="absolute bottom-[130px] right-10 z-20 hidden items-center gap-4 lg:flex">
      <span className="h-[5px] w-[5px] rounded-full bg-white/55" />

      <p className="text-[8px] tracking-[0.3em] text-white/60">
        WEST BROADWAY · NEW YORK
      </p>
    </div>
  </div>

  {/* =====================================================
      OVERLAPPING EDITORIAL CARD
  ===================================================== */}

  <div
    className="
      relative z-20
      -mt-10 ml-auto mr-6
      w-[82%] max-w-[350px]
      rounded-tl-[55px]
      bg-[#E8DED2]
      px-8 py-7
      sm:-mt-14
      sm:mr-10
      sm:max-w-[410px]
      sm:rounded-tl-[75px]
      sm:px-10 sm:py-8
      md:mr-14
      lg:-mt-16
      lg:mr-[8%]
    "
  >
    <div className="flex items-start gap-5">
      <span className="mt-[10px] h-px w-9 shrink-0 bg-[#917E70]/55" />

      <div>
        <p
          className="text-[18px] italic leading-[1.35] text-[#66574D] sm:text-[20px]"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Stay a little longer.
        </p>

        <p className="mt-3 text-[9px] leading-[1.7] tracking-[0.12em] text-[#8B7A6E]">
          DINNER · WINE · LATE EVENINGS
        </p>
      </div>
    </div>
  </div>

  {/* =====================================================
      BOTTOM DETAIL
  ===================================================== */}

  <div className="mx-auto mt-4 flex max-w-[1320px] items-center gap-5 px-6 sm:px-10 md:px-14 lg:px-20">
    <p className="text-[8px] tracking-[0.25em] text-[#938277]">
      SORELLA · ITALIAN KITCHEN
    </p>

    <span className="h-px flex-1 bg-[#B3A397]/35" />
  </div>
</section>

{/* =====================================================
    INTRO / PHILOSOPHY — COMPACT
===================================================== */}

<section className="relative overflow-hidden bg-[#F3EEE6]">

  {/* SUBTLE BACKGROUND DETAIL */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute
      -bottom-[30px] -left-[15px]
      select-none
      text-[100px] font-normal italic
      leading-none tracking-[-0.06em]
      text-[#9B887A]/[0.045]
      sm:text-[135px]
      lg:text-[170px]
    "
    style={{
      fontFamily: '"Times New Roman", Times, serif',
    }}
  >
    Sorella
  </div>

  <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-12 sm:px-10 sm:py-14 md:px-14 lg:px-20 lg:py-14">

    <div className="grid gap-7 lg:grid-cols-[0.5fr_1.5fr] lg:gap-14">

      {/* LEFT LABEL */}

      <div>
        <div className="flex items-center gap-4">
          <span className="h-px w-9 bg-[#9C8B7E]" />

          <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
            THE IDEA
          </p>
        </div>

        <p
          className="mt-3 max-w-[190px] text-[14px] italic leading-[1.45] text-[#8A786B]"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Made for evenings that are never in a hurry.
        </p>
      </div>

      {/* MAIN CONTENT */}

      <div>
        <h2
          className="
            max-w-[800px]
            text-[34px] font-normal
            leading-[1.03] tracking-[-0.035em]
            text-[#352E29]
            sm:text-[41px]
            lg:text-[47px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Sorella was imagined around a simple idea:
          dinner should feel like{" "}
          <span className="italic text-[#78675B]">
            more than a reservation.
          </span>
        </h2>

        {/* DIVIDER */}

        <div className="my-5 h-px w-full bg-[#AA998D]/30" />

        {/* COPY */}

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-9">

          <div>
            <p
              className="mb-2 text-[14px] italic text-[#685A50]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Take your time.
            </p>

            <p className="max-w-[390px] text-[12px] font-light leading-[1.7] text-[#756A61] sm:text-[13px]">
              It should be the kind of evening that unfolds
              slowly — plates passed across the table, another
              glass poured, and no real reason to rush toward
              the door.
            </p>
          </div>

          <div>
            <p
              className="mb-2 text-[14px] italic text-[#685A50]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Come back often.
            </p>

            <p className="max-w-[390px] text-[12px] font-light leading-[1.7] text-[#756A61] sm:text-[13px]">
              Sorella brings together the warmth of an Italian
              neighborhood restaurant with the energy of New
              York — familiar, spirited and made for coming
              back to.
            </p>
          </div>
        </div>

        {/* BOTTOM DETAIL */}

        <div className="mt-5 flex items-center gap-4">
          <span className="h-[4px] w-[4px] rounded-full bg-[#8D7B6D]/55" />

          <p className="text-[8px] tracking-[0.2em] text-[#928176]">
            SHARED PLATES · POURED WINE · LONG EVENINGS
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          STORY — LARGE IMAGE + TEXT
      ===================================================== */}

      <section className="bg-[#E8DED2] px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1320px]">

          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">

            {/* IMAGE */}

            <div className="relative">
              <div className="overflow-hidden rounded-[42px_8px_42px_8px] sm:rounded-[64px_10px_64px_10px]">
                <img
                  src="/previews/sorella/sorella-story-table.jpg"
                  alt="Dinner table at Sorella"
                  className="h-[480px] w-full object-cover sm:h-[580px] lg:h-[680px]"
                />
              </div>

              {/* SMALL EDITORIAL NOTE */}

              <div className="absolute -bottom-5 right-5 rounded-full bg-[#F3EEE6] px-6 py-3 sm:right-8">
                <p
                  className="text-[13px] italic text-[#66584E]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Stay a little longer.
                </p>
              </div>
            </div>

            {/* COPY */}

            <div className="lg:px-4">
              <p className="mb-6 text-[8px] tracking-[0.34em] text-[#8B796C]">
                AT THE HEART OF IT
              </p>

              <h2
                className="text-[43px] font-normal leading-[1.02] tracking-[-0.04em] text-[#352D28] sm:text-[54px] lg:text-[64px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                The table is
                <br />

                <span className="italic text-[#78665A]">
                  where it begins.
                </span>
              </h2>

              <div className="my-8 h-px w-12 bg-[#A18E80]" />

              <p className="max-w-[470px] text-[13px] font-light leading-[1.9] text-[#6F6259] sm:text-[14px]">
                The best meals rarely belong to one person.
                A plate moves across the table. Someone orders
                another for everyone. Bread disappears before
                the entrées arrive.
              </p>

              <p className="mt-6 max-w-[470px] text-[13px] font-light leading-[1.9] text-[#6F6259] sm:text-[14px]">
                That sense of sharing shapes Sorella — from the
                way the menu is written to the way the room is
                meant to feel once dinner is underway.
              </p>

              <Link
                href="/preview/sorella/menu"
                className="mt-9 inline-flex items-center gap-4 rounded-full border border-[#786A60]/35 px-7 py-4 text-[8px] tracking-[0.25em] text-[#5F534B]"
              >
                EXPLORE THE MENU

                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KITCHEN / FOOD PHILOSOPHY
      ===================================================== */}

      <section className="relative bg-[#F3EEE6] px-6 py-24 sm:px-10 sm:py-28 md:px-14 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1320px]">

          <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">

            {/* COPY */}

            <div className="order-2 lg:order-1">
              <p className="mb-6 text-[8px] tracking-[0.34em] text-[#8B796C]">
                FROM THE KITCHEN
              </p>

              <h2
                className="text-[42px] font-normal leading-[1.04] tracking-[-0.04em] text-[#352D28] sm:text-[52px] lg:text-[62px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Tradition,
                <br />

                <span className="italic text-[#7A695D]">
                  with a lighter touch.
                </span>
              </h2>

              <p className="mt-8 max-w-[480px] text-[13px] font-light leading-[1.9] text-[#70645B] sm:text-[14px]">
                Our menu begins with the dishes we want to eat:
                handmade pasta, vegetables with plenty of
                olive oil and citrus, simply prepared seafood,
                slow-cooked sauces and something sweet before
                the night is over.
              </p>

              <p className="mt-6 max-w-[480px] text-[13px] font-light leading-[1.9] text-[#70645B] sm:text-[14px]">
                The cooking is rooted in Italian tradition
                without being held too tightly by it. Seasonal
                ingredients and a lighter hand keep familiar
                dishes feeling alive.
              </p>
            </div>

            {/* IMAGE */}

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-[8px_54px_8px_54px] sm:rounded-[10px_76px_10px_76px]">
                <img
                  src="/previews/sorella/sorella-story-kitchen.jpg"
                  alt="The kitchen at Sorella"
                  className="h-[470px] w-full object-cover sm:h-[580px] lg:h-[690px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FULL-WIDTH EDITORIAL MOMENT
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden sm:min-h-[640px] lg:min-h-[720px]">
        <img
          src="/previews/sorella/sorella-story-detail.jpg"
          alt="Evening details at Sorella"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-[#211812]/30" />

        <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 py-20 sm:min-h-[640px] lg:min-h-[720px]">
          <div className="mx-auto max-w-[800px] text-center">

            <p className="mb-7 text-[8px] tracking-[0.4em] text-white/60">
              THE SORELLA WAY
            </p>

            <h2
              className="text-[45px] font-normal leading-[1.02] tracking-[-0.045em] text-[#F8F3EA] sm:text-[60px] lg:text-[72px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Come for dinner.
              <br />

              <span className="italic text-white/85">
                Stay for the evening.
              </span>
            </h2>

            <div className="mx-auto my-8 h-px w-12 bg-white/45" />

            <p
              className="mx-auto max-w-[570px] text-[15px] font-light leading-[1.8] text-white/75 sm:text-[16px]"
            >
              Good hospitality is knowing when to bring the
              next plate, when to refill a glass and when to
              simply let the table have its moment.
            </p>
          </div>
        </div>
      </section>

     {/* =====================================================
    NEW YORK / LOCATION — COMPACT
===================================================== */}

<section className="relative overflow-hidden bg-[#6D3235] text-[#F8F2E9]">

  {/* DECORATIVE BACKGROUND TEXT */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute
      -right-[30px] -top-[25px]
      select-none
      text-[110px] font-normal italic
      leading-none tracking-[-0.07em]
      text-white/[0.035]
      sm:text-[150px]
      lg:-right-[40px] lg:-top-[45px] lg:text-[210px]
    "
    style={{
      fontFamily: '"Times New Roman", Times, serif',
    }}
  >
    New York
  </div>

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-18 md:px-14 lg:px-20 lg:py-20">

    {/* TOP LABEL */}

    <div className="mb-9 flex items-center gap-4 lg:mb-10">
      <span className="h-px w-10 bg-white/30" />

      <p className="text-[8px] tracking-[0.32em] text-white/50">
        WEST BROADWAY · NEW YORK
      </p>
    </div>

    {/* =====================================================
        MAIN STATEMENT
    ===================================================== */}

    <div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-20">

      {/* TITLE */}

      <div>
        <h2
          className="
            max-w-[720px]
            text-[44px] font-normal
            leading-[0.96] tracking-[-0.045em]
            text-[#F8F2E9]
            sm:text-[54px]
            lg:text-[64px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Your neighborhood
          <br />

          <span className="italic text-white/65">
            table in the city.
          </span>
        </h2>
      </div>

      {/* DESCRIPTION */}

      <div>
        <p className="max-w-[440px] text-[12px] font-light leading-[1.8] text-white/65 sm:text-[13px]">
          The kind of place you stop by for pasta at the bar,
          gather around for a birthday, or settle into on a
          Friday night without watching the clock.
        </p>

        <p
          className="mt-4 text-[15px] italic leading-[1.45] text-white/75"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Familiar enough to return to. Special enough to remember.
        </p>
      </div>
    </div>

    {/* DIVIDER */}

    <div className="my-10 h-px w-full bg-white/15 lg:my-11" />

    {/* =====================================================
        LOCATION DETAILS
    ===================================================== */}

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_.85fr_.75fr] lg:gap-12">

      {/* ADDRESS */}

      <div>
        <p className="mb-3 text-[8px] tracking-[0.28em] text-white/35">
          FIND US
        </p>

        <p
          className="text-[21px] font-normal leading-[1.15] text-white/90 sm:text-[23px]"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          123 West Broadway
        </p>

        <p className="mt-2 text-[9px] tracking-[0.14em] text-white/45">
          NEW YORK, NY 10013
        </p>
      </div>

      {/* HOURS */}

      <div>
        <p className="mb-3 text-[8px] tracking-[0.28em] text-white/35">
          DINNER
        </p>

        <p
          className="text-[16px] italic text-white/85"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Nightly from 5PM
        </p>

        <p className="mt-2 text-[10px] font-light leading-[1.65] text-white/45">
          Mon–Thu · 5PM–11PM
          <br />
          Fri–Sat · 5PM–12AM
          <br />
          Sun · 5PM–10PM
        </p>
      </div>

      {/* CONTACT */}

      <div>
        <p className="mb-3 text-[8px] tracking-[0.28em] text-white/35">
          CONTACT
        </p>

        <p
          className="text-[16px] italic text-white/85"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          (212) 555-0187
        </p>

        <Link
          href="/preview/sorella#contact"
          className="
            group mt-3 inline-flex items-center gap-3
            text-[8px] tracking-[0.2em]
            text-white/50
            transition-colors
            hover:text-white
          "
        >
          GET IN TOUCH

          <span className="text-[11px] transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>
    </div>

    {/* BOTTOM DETAIL */}

    <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-5">
      <span className="h-[4px] w-[4px] rounded-full bg-white/35" />

      <p
        className="text-[12px] italic text-white/40"
        style={{
          fontFamily: '"Times New Roman", Times, serif',
        }}
      >
        Dinner · wine · late evenings.
      </p>
    </div>
  </div>
</section>

{/* =====================================================
    CLOSING CTA — COMPACT
===================================================== */}

<section className="relative overflow-hidden bg-[#E8DED2]">

  {/* BACKGROUND TYPE */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none absolute
      -bottom-[35px] -left-[15px]
      select-none
      text-[120px] font-normal italic
      leading-none tracking-[-0.07em]
      text-[#A99788]/[0.07]
      sm:text-[170px]
      lg:-bottom-[55px] lg:text-[230px]
    "
    style={{
      fontFamily: '"Times New Roman", Times, serif',
    }}
  >
    Sorella
  </div>

  {/* SUBTLE CIRCLE */}

  <div
    className="
      pointer-events-none absolute
      -right-[150px] -top-[190px]
      h-[350px] w-[350px]
      rounded-full
      border border-[#A89688]/20
      sm:h-[440px] sm:w-[440px]
    "
  />

  {/* =====================================================
      CONTENT
  ===================================================== */}

  <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-16 sm:px-10 sm:py-18 md:px-14 lg:px-20 lg:py-20">

    <div className="grid gap-9 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">

      {/* =====================================================
          LEFT
      ===================================================== */}

      <div>
        <div className="flex items-center gap-4">
          <span className="h-px w-9 bg-[#927F70]/60" />

          <p className="text-[8px] tracking-[0.32em] text-[#806F63]">
            JOIN US
          </p>
        </div>

        <p
          className="mt-4 max-w-[200px] text-[14px] italic leading-[1.5] text-[#8A786B]"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Dinner, wine and a table waiting for you.
        </p>
      </div>

      {/* =====================================================
          RIGHT
      ===================================================== */}

      <div>
        <h2
          className="
            max-w-[760px]
            text-[43px] font-normal
            leading-[0.96] tracking-[-0.045em]
            text-[#342D28]
            sm:text-[52px]
            lg:text-[62px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Come hungry.{" "}

          <span className="italic text-[#806E61]">
            Stay awhile.
          </span>
        </h2>

        {/* DESCRIPTION / BUTTONS */}

        <div className="mt-7 border-t border-[#A9988A]/35 pt-6">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-[410px] text-[12px] font-light leading-[1.8] text-[#74675D] sm:text-[13px]">
              Settle in for handmade pasta, a bottle for the
              table and an evening that can take its time.
            </p>

            <div className="flex flex-wrap gap-2.5">

              <Link
                href="/preview/sorella/menu"
                className="
                  group inline-flex items-center gap-4
                  rounded-full
                  border border-[#65594F]/35
                  px-6 py-3.5
                  text-[8px] tracking-[0.2em]
                  text-[#5C5149]
                  transition-colors
                  hover:border-[#65594F]/60
                "
              >
                VIEW THE MENU

                <span className="text-[11px] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>

              <Link
                href="/preview/sorella#reserve"
                className="
                  group inline-flex items-center gap-4
                  rounded-full
                  bg-[#342D28]
                  px-6 py-3.5
                  text-[8px] tracking-[0.2em]
                  text-white
                  transition-colors
                  hover:bg-[#453B34]
                "
              >
                RESERVE A TABLE

                <span className="text-[11px] transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>

          {/* CONCEPT NOTE */}

          <div className="mt-6 flex items-center gap-3">
            <span className="h-[4px] w-[4px] rounded-full bg-[#8D7B6D]/50" />

            <p className="text-[7px] tracking-[0.18em] text-[#88796D]/70">
              CONCEPT DEMONSTRATION · RESERVATIONS ARE DISABLED
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#302923] px-6 pb-9 pt-16 text-white sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-[1250px]">

          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-[1.2fr_.8fr_.8fr]">

            {/* BRAND */}

            <div>
              <Link
                href="/preview/sorella"
                className="inline-block text-[30px] tracking-[0.25em] text-white"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                SORELLA
              </Link>

              <p className="mt-4 text-[8px] tracking-[0.28em] text-white/40">
                ITALIAN KITCHEN · NEW YORK
              </p>

              <Link
                href="/preview/sorella"
                className="mt-8 inline-flex border-b border-white/20 pb-1.5 text-[9px] tracking-[0.2em] text-white/55 transition-colors hover:text-white"
              >
                RETURN TO RESTAURANT
              </Link>
            </div>

            {/* VISIT */}

            <div>
              <p
                className="mb-5 text-[14px] italic text-white/45"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Visit
              </p>

              <p
                className="text-[13px] font-light leading-[1.9] text-white/65"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
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
                className="mb-5 text-[14px] italic text-white/45"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Hours
              </p>

              <p
                className="text-[13px] font-light leading-[1.9] text-white/65"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Mon–Thu · 5PM–11PM
                <br />
                Fri–Sat · 5PM–12AM
                <br />
                Sun · 5PM–10PM
              </p>
            </div>
          </div>

          {/* BOTTOM */}

          <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[8px] tracking-[0.18em] text-white/35 sm:text-[9px]">
              INDEPENDENT CONCEPT · DESIGNED BY JOVAVO
            </p>

            <p className="text-[8px] tracking-[0.18em] text-white/35 sm:text-[9px]">
              CONCEPT DEMONSTRATION · RESERVATIONS ARE DISABLED
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}