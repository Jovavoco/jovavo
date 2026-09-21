"use client";

import { useState } from "react";

const navItems = [
  ["menu", "MENU"],
  ["story", "OUR STORY"],
  ["private-dining", "PRIVATE DINING"],
  ["gallery", "GALLERY"],
  ["contact", "CONTACT"],
];

export default function SorellaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState<
    "date" | "time" | "party" | null
  >(null);
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [partySize, setPartySize] = useState("2 guests");

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#2D2925]">
{/* =====================================================
    HEADER + HERO
===================================================== */}
<section
  id="home"
  className="relative w-full min-h-[720px] max-h-[980px] overflow-hidden
             bg-[#2B211A] md:aspect-[16/10]"
>
  {/* BACKGROUND — curve/detail are already baked into the image */}
  <img
    src="/previews/sorella/sorella-hero.jpg"
    alt="Sorella Italian restaurant interior"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  <div className="absolute inset-0 bg-[#160F0B]/[0.08]" />

  {/* =====================================================
      HEADER
  ===================================================== */}
  <header className="absolute inset-x-0 top-0 z-40">
    <div
      className="mx-auto flex w-full max-w-[1540px] items-start
                 justify-between px-8 pt-10 sm:px-12
                 lg:px-[6.5rem] lg:pt-12"
    >
      <button
        type="button"
        onClick={() => scrollTo("home")}
        className="text-left text-[#F7F1EA]"
      >
        <span
          className="block text-[28px] font-normal tracking-[0.26em] sm:text-[31px]"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          SORELLA
        </span>

        <span className="mt-2.5 hidden text-[6px] tracking-[0.38em] text-white/70 sm:block">
          ITALIAN KITCHEN · NEW YORK
        </span>
      </button>

      <nav className="hidden items-center gap-9 md:flex lg:gap-11">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollTo(id)}
            className="text-[7px] tracking-[0.29em] text-white/75
                       transition-colors duration-300 hover:text-white"
          >
            {label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => scrollTo("reserve")}
          className="ml-3 rounded-full bg-[#F5F0E8] px-9 py-[17px]
                     text-[7px] tracking-[0.29em] text-[#3D352E]
                     shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                     transition-all duration-300 hover:-translate-y-[1px]
                     hover:bg-white"
        >
          RESERVE
        </button>
      </nav>

      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
        className="flex h-10 w-10 flex-col items-center justify-center
                   gap-[6px] rounded-full border border-white/35
                   bg-black/10 backdrop-blur-sm md:hidden"
      >
        <span className="h-px w-4 bg-white" />
        <span className="h-px w-4 bg-white" />
      </button>
    </div>

    {menuOpen && (
      <div
        className="mx-6 mt-4 rounded-[24px] bg-[#302923]/95
                   px-7 py-7 shadow-2xl backdrop-blur-xl
                   sm:mx-10 md:hidden"
      >
        <div className="flex flex-col items-start gap-5">
          {navItems.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="text-[8px] tracking-[0.25em]
                         text-white/65 hover:text-white"
            >
              {label}
            </button>
          ))}

          <button
            type="button"
            onClick={() => scrollTo("reserve")}
            className="mt-2 rounded-full bg-[#F5F0E8]
                       px-7 py-3.5 text-[8px] tracking-[0.24em]
                       text-[#3C342D]"
          >
            RESERVE
          </button>
        </div>
      </div>
    )}
  </header>

  {/* =====================================================
      CENTER HERO CONTENT
  ===================================================== */}
  <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
    <div
      className="w-full max-w-[720px] -translate-y-[2%]
                 text-center text-[#F8F2EB] lg:-translate-y-[1%]"
    >
<h1
  className="text-[46px] font-normal leading-[0.98]
             tracking-[-0.025em] sm:text-[58px]
             lg:text-[68px] xl:text-[72px]"
  style={{ fontFamily: '"Times New Roman", Times, serif' }}
>
  Come for dinner.
  <br />
  <span className="italic">Stay for the evening.</span>
</h1>

      <div className="mx-auto mt-8 h-px w-12 bg-white/50" />

      <p
        className="mx-auto mt-7 max-w-[430px] text-[7px] font-light
                   uppercase leading-[2.2] tracking-[0.32em]
                   text-white/75 sm:text-[8px]"
      >
        Italian cooking made for
        <br />
        evenings that linger.
      </p>

      <button
        type="button"
        onClick={() => scrollTo("menu")}
        className="group mx-auto mt-9 flex w-[265px]
                   items-center justify-between rounded-full
                   border border-white/55 bg-black/[0.08]
                   py-2.5 pl-8 pr-2.5 text-white
                   backdrop-blur-[2px] transition-all duration-500
                   hover:border-[#F5F0E8] hover:bg-[#F5F0E8]
                   hover:text-[#3C342D]"
      >
        <span className="text-[7px] tracking-[0.29em]">
          VIEW THE MENU
        </span>

        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center
                     rounded-full border border-white/55
                     transition-all duration-500
                     group-hover:border-[#554B43]
                     group-hover:bg-[#554B43]
                     group-hover:text-white"
        >
          <span className="relative flex h-3 w-4 items-center">
            <span className="h-px w-4 bg-current" />
            <span
              className="absolute right-0 h-[5px] w-[5px] rotate-45
                         border-r border-t border-current"
            />
          </span>
        </span>
      </button>
    </div>
  </div>

  {/* LEFT DETAIL */}
  <div
    className="absolute bottom-[31%] left-[4%] z-20 hidden lg:block"
  >
    <p className="text-[7px] leading-[2.25] tracking-[0.31em] text-white/75">
      DINNER
      <br />
      NIGHTLY
      <br />
      5PM — LATE
    </p>
    <div className="mt-5 h-16 w-px bg-white/35" />
  </div>

  {/* RIGHT DETAIL */}
  <div
    className="absolute bottom-[34%] right-[3.3%] z-20 hidden text-right lg:block"
  >
    <p className="text-[7px] leading-[2.25] tracking-[0.31em] text-white/75">
      NEW YORK
      <br />
      EST. 2026
    </p>
    <div className="ml-auto mt-5 h-16 w-px bg-white/35" />
  </div>
</section>

      {/* =====================================================
          STORY
      ===================================================== */}
{/* =====================================================
    STORY
===================================================== */}
<section
  id="story"
  className="relative overflow-hidden bg-[#F7F2EB] px-6 py-20 sm:px-10 md:px-14 lg:px-24 lg:py-28"
>
  {/* SOFT AMBIENT SHAPE */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-40 top-1/2
               h-[520px] w-[520px] -translate-y-1/2
               rounded-full bg-[#E7DDD2]/40 blur-[100px]"
  />

  <div
    className="relative mx-auto grid max-w-[1380px]
               gap-14 lg:grid-cols-[0.88fr_1.12fr]
               lg:items-center lg:gap-24"
  >
    {/* =====================================================
        COPY
    ===================================================== */}
    <div className="lg:pl-4">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[8px] tracking-[0.31em] text-[#887D73]">
          A MODERN ITALIAN EXPERIENCE
        </p>

        <span className="h-px w-8 bg-[#B1A59A]" />
      </div>

      <h2
        className="max-w-[500px] text-[40px] font-normal
                   leading-[1.03] tracking-[-0.04em]
                   text-[#39332E]
                   sm:text-[46px] lg:text-[52px]"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Tradition feels
        <br />

        <span className="italic text-[#9A7D6B]">
          different here.
        </span>
      </h2>

      <p
        className="mt-7 max-w-[455px] text-[11px]
                   font-light leading-[1.95] text-[#6C645D]"
      >
        Sorella is a neighborhood Italian restaurant where familiar
        flavors meet a lighter, more modern point of view. Our kitchen
        is guided by seasonality, simplicity, and food that belongs in
        the middle of the table.
      </p>

      {/* ITALIAN PHRASE */}
      <p
        className="mt-8 text-[18px] italic text-[#9A7D6B]"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Buon cibo. Bella compagnia.
      </p>

      {/* CTA */}
      <button
        onClick={() => scrollTo("menu")}
        className="group mt-8 flex items-center gap-4"
      >
        <span className="text-[8px] tracking-[0.24em] text-[#5F5852]">
          DISCOVER SORELLA
        </span>

        <span className="relative flex h-3 w-9 items-center">
          <span
            className="h-px w-8 bg-[#8D8177]
                       transition-all duration-500
                       group-hover:w-9"
          />

          <span
            className="absolute right-0 h-[5px] w-[5px]
                       rotate-45 border-r border-t
                       border-[#8D8177]"
          />
        </span>
      </button>
    </div>

    {/* =====================================================
        BRAND IMAGE
    ===================================================== */}
    <div className="relative lg:py-4">
      <div
        className="relative overflow-hidden
                   rounded-[38px_38px_120px_38px]
                   bg-[#EEE6DC]
                   sm:rounded-[48px_48px_150px_48px]
                   lg:rounded-[60px_60px_190px_60px]"
      >
        <img
          src="/previews/sorella/sorella-brand.jpg"
          alt="Sorella table setting"
          className="block h-auto w-full object-contain"
        />
      </div>

      {/* SMALL FLOATING DETAIL */}
      <div
        className="absolute -bottom-5 left-7 hidden
                   items-center gap-4 rounded-full
                   bg-[#F7F2EB]/95 px-6 py-3
                   shadow-[0_12px_35px_rgba(61,51,44,0.08)]
                   backdrop-blur-sm sm:flex"
      >
        <span className="h-[4px] w-[4px] rounded-full bg-[#A88672]" />

<p className="text-[7px] tracking-[0.24em] text-[#7D7168]">
  COME FOR DINNER · STAY FOR THE EVENING
</p>
      </div>
    </div>
  </div>
</section>

{/* =====================================================
    MENU
===================================================== */}
<section
  id="menu"
  className="relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[720px]"
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/previews/sorella/sorella-menu-bg.png"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* VERY LIGHT OVERLAY FOR TEXT READABILITY */}
  <div className="absolute inset-0 bg-[#F4EEE6]/[0.05]" />

  {/* CONTENT */}
  <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 py-20 sm:min-h-[680px] sm:px-10 lg:min-h-[720px] lg:px-24">
    <div className="mx-auto w-full max-w-[680px] text-center">

      {/* LABEL */}
      <p className="text-[8px] tracking-[0.34em] text-[#756D66]">
        THE MENU
      </p>

      {/* HEADING */}
      <h2
        className="mt-6 text-[42px] font-normal leading-[1.02]
                   tracking-[-0.04em] text-[#332E2A]
                   sm:text-[50px] lg:text-[58px]"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Made to be{" "}
        <span className="italic text-[#9A7D6B]">
          shared.
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mx-auto mt-6 max-w-[500px] text-[11px]
                    font-light leading-[1.95] text-[#655D56]">
        Seasonal Italian cooking, handmade pasta, and thoughtful ingredients
        made for long dinners around the table.
      </p>

      {/* VIEW MENU */}
      <button
        className="group mx-auto mt-10 flex w-full max-w-[330px]
                   items-center justify-between rounded-full
                   bg-[#514A44] py-2.5 pl-7 pr-2.5
                   text-[#F8F4EE]
                   shadow-[0_12px_32px_rgba(58,49,43,0.14)]
                   transition-all duration-500
                   hover:-translate-y-[2px]
                   hover:bg-[#443E39]
                   hover:shadow-[0_16px_38px_rgba(58,49,43,0.18)]"
      >
        <span className="pl-1 text-[8px] tracking-[0.26em]">
          VIEW THE MENU
        </span>

        {/* ARROW CIRCLE */}
        <span
          className="flex h-10 w-10 shrink-0 items-center
                     justify-center rounded-full bg-[#F4EFE8]
                     transition-transform duration-500
                     group-hover:translate-x-[2px]"
        >
          <span className="relative flex h-3 w-4 items-center">
            <span className="h-px w-4 bg-[#514A44]" />

            <span
              className="absolute right-0 h-[5px] w-[5px]
                         rotate-45 border-r border-t
                         border-[#514A44]"
            />
          </span>
        </span>
      </button>

      {/* CATEGORIES */}
      <div className="mt-7 flex items-center justify-center gap-4">
        <span className="text-[6px] tracking-[0.25em] text-[#877E76]">
          DINNER
        </span>

        <span className="h-[2px] w-[2px] rounded-full bg-[#9E9389]" />

        <span className="text-[6px] tracking-[0.25em] text-[#877E76]">
          WINE
        </span>

        <span className="h-[2px] w-[2px] rounded-full bg-[#9E9389]" />

        <span className="text-[6px] tracking-[0.25em] text-[#877E76]">
          DESSERT
        </span>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          PRIVATE DINING
      ===================================================== */}
{/* =====================================================
    PRIVATE DINING
===================================================== */}
<section
  id="private-dining"
  className="relative min-h-[650px] overflow-hidden bg-[#F3ECE2]
             sm:min-h-[700px] lg:min-h-[760px]"
>
  {/* FULL SECTION BACKGROUND */}
  <img
    src="/previews/sorella/sorella-private-dining.jpg"
    alt=""
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* CONTENT */}
  <div
    className="relative z-10 mx-auto flex min-h-[650px] max-w-[1540px]
               items-end px-6 py-14
               sm:min-h-[700px] sm:px-10 sm:py-16
               lg:min-h-[760px] lg:items-center lg:px-14 lg:py-20
               xl:px-[5.5rem]"
  >
    <div
      className="ml-auto w-full rounded-[34px] bg-[#F5EEE5]/95
                 px-7 py-9 shadow-[0_20px_60px_rgba(56,45,37,0.08)]
                 backdrop-blur-[3px]
                 sm:max-w-[520px] sm:px-10 sm:py-11
                 lg:w-[43%] lg:max-w-[560px] lg:bg-transparent
                 lg:px-0 lg:py-0 lg:shadow-none lg:backdrop-blur-none"
    >
      {/* LABEL */}
      <div className="flex items-center gap-4">
        <span className="h-px w-8 bg-[#A28A78]" />

        <p className="text-[8px] tracking-[0.32em] text-[#8A7768]">
          PRIVATE DINING
        </p>
      </div>

      {/* HEADING */}
      <h2
        className="mt-7 text-[42px] font-normal leading-[1.02]
                   tracking-[-0.04em] text-[#3A332D]
                   sm:text-[49px] lg:text-[55px]"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        A more meaningful
        <br />

        <span className="italic text-[#9A7B67]">
          gathering.
        </span>
      </h2>

      {/* COPY */}
      <p
        className="mt-7 max-w-[430px] text-[11px] font-light
                   leading-[1.95] text-[#6D6259]"
      >
        From intimate celebrations to larger dinners, our private dining
        experience brings together seasonal menus, thoughtful service, and a
        setting that feels warm rather than formal.
      </p>

      {/* CTA */}
      <button
        className="group mt-9 flex w-full max-w-[330px]
                   items-center justify-between rounded-full
                   bg-[#65584D] py-2.5 pl-7 pr-2.5
                   text-[#F8F3EC]
                   shadow-[0_12px_32px_rgba(55,45,38,0.12)]
                   transition-all duration-500
                   hover:-translate-y-[2px]
                   hover:bg-[#564B42]
                   hover:shadow-[0_16px_38px_rgba(55,45,38,0.17)]"
      >
        <span className="pl-1 text-[8px] tracking-[0.23em]">
          EXPLORE PRIVATE DINING
        </span>

        {/* ARROW */}
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center
                     rounded-full bg-[#F3ECE4]
                     transition-transform duration-500
                     group-hover:translate-x-[2px]"
        >
          <span className="relative flex h-3 w-4 items-center">
            <span className="h-px w-4 bg-[#62564C]" />

            <span
              className="absolute right-0 h-[5px] w-[5px]
                         rotate-45 border-r border-t border-[#62564C]"
            />
          </span>
        </span>
      </button>

      {/* SMALL DETAIL */}
      <div className="mt-8 flex items-center gap-3">
        <span className="text-[6px] tracking-[0.24em] text-[#94867A]">
          PEOPLE
        </span>

        <span className="h-[2px] w-[2px] rounded-full bg-[#A99A8E]" />

        <span className="text-[6px] tracking-[0.24em] text-[#94867A]">
          FOOD
        </span>

        <span className="h-[2px] w-[2px] rounded-full bg-[#A99A8E]" />

        <span className="text-[6px] tracking-[0.24em] text-[#94867A]">
          GOOD COMPANY
        </span>
      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          RESERVATIONS
      ===================================================== */}
{/* =====================================================
    RESERVATIONS
===================================================== */}
<section
  id="reserve"
  className="relative overflow-visible bg-[#F7F3EC] px-6 py-24 sm:px-10 md:px-14 lg:px-24 lg:py-28"
>
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[760px]
               -translate-x-1/2 -translate-y-1/2 rounded-full
               bg-[#E9DED2]/35 blur-[110px]"
  />

  <div className="relative mx-auto max-w-[1180px] text-center">
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-7 bg-[#B1A499]" />
      <p className="text-[8px] tracking-[0.32em] text-[#887D73]">
        MAKE A RESERVATION
      </p>
      <span className="h-px w-7 bg-[#B1A499]" />
    </div>

    <h2
      className="mt-6 text-[42px] font-normal leading-[1.03] tracking-[-0.04em]
                 text-[#39332E] sm:text-[48px] lg:text-[52px]"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      Join us <span className="italic text-[#9A7D6B]">at the table.</span>
    </h2>

    <p className="mx-auto mt-5 max-w-[420px] text-[11px] font-light leading-[1.9] text-[#746B63]">
      Choose your evening and we’ll take care of the rest.
    </p>

    <div
      className="relative z-20 mx-auto mt-10 max-w-[960px] rounded-[30px]
                 bg-[#FBF8F3]/90 p-2.5
                 shadow-[0_16px_50px_rgba(63,53,45,0.07)]
                 backdrop-blur-sm sm:rounded-full"
    >
      <div className="grid gap-1.5 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
        {/* DATE */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setReservationOpen(reservationOpen === "date" ? null : "date")
            }
            className="group flex w-full items-center justify-between rounded-full
                       px-6 py-4 text-left transition-colors duration-300
                       hover:bg-[#F0E8DE]/70"
          >
            <div>
              <span className="block text-[6px] tracking-[0.24em] text-[#9A8E84]">
                DATE
              </span>
              <span
                className="mt-1.5 block text-[14px] text-[#4D4640]"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                {reservationDate || "Select date"}
              </span>
            </div>

            <span
              className={`relative ml-4 h-8 w-8 shrink-0 rounded-full
                          bg-[#EEE6DC] transition-transform duration-300 ${
                            reservationOpen === "date" ? "rotate-180" : ""
                          }`}
            >
              <span
                className="absolute left-1/2 top-[45%] h-[7px] w-[7px]
                           -translate-x-1/2 -translate-y-1/2 rotate-45
                           border-b border-r border-[#766B62]"
              />
            </span>
          </button>

          {reservationOpen === "date" && (
            <div
              className="absolute left-0 top-[calc(100%+10px)] z-50 w-full
                         min-w-[220px] rounded-[22px] bg-[#FBF8F3] p-2 text-left
                         shadow-[0_18px_50px_rgba(53,44,38,0.13)]"
            >
              {[
                "Tonight",
                "Tomorrow",
                "Friday, Sep 25",
                "Saturday, Sep 26",
                "Sunday, Sep 27",
              ].map((date) => (
                <button
                  key={date}
                  type="button"
                  onClick={() => {
                    setReservationDate(date);
                    setReservationOpen(null);
                  }}
                  className="block w-full rounded-[16px] px-4 py-3 text-left
                             text-[12px] text-[#5D544D] transition-colors
                             hover:bg-[#EFE7DD]"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {date}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* TIME */}
        <div className="relative sm:border-l sm:border-[#D9CFC5]/65">
          <button
            type="button"
            onClick={() =>
              setReservationOpen(reservationOpen === "time" ? null : "time")
            }
            className="group flex w-full items-center justify-between rounded-full
                       px-6 py-4 text-left transition-colors duration-300
                       hover:bg-[#F0E8DE]/70"
          >
            <div>
              <span className="block text-[6px] tracking-[0.24em] text-[#9A8E84]">
                TIME
              </span>
              <span
                className="mt-1.5 block text-[14px] text-[#4D4640]"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                {reservationTime || "Select time"}
              </span>
            </div>

            <span
              className={`relative ml-4 h-8 w-8 shrink-0 rounded-full
                          bg-[#EEE6DC] transition-transform duration-300 ${
                            reservationOpen === "time" ? "rotate-180" : ""
                          }`}
            >
              <span
                className="absolute left-1/2 top-[45%] h-[7px] w-[7px]
                           -translate-x-1/2 -translate-y-1/2 rotate-45
                           border-b border-r border-[#766B62]"
              />
            </span>
          </button>

          {reservationOpen === "time" && (
            <div
              className="absolute left-0 top-[calc(100%+10px)] z-50 max-h-[250px]
                         w-full min-w-[200px] overflow-y-auto rounded-[22px]
                         bg-[#FBF8F3] p-2 text-left
                         shadow-[0_18px_50px_rgba(53,44,38,0.13)]"
            >
              {[
                "5:00 PM",
                "5:30 PM",
                "6:00 PM",
                "6:30 PM",
                "7:00 PM",
                "7:30 PM",
                "8:00 PM",
                "8:30 PM",
                "9:00 PM",
                "9:30 PM",
                "10:00 PM",
              ].map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => {
                    setReservationTime(time);
                    setReservationOpen(null);
                  }}
                  className="block w-full rounded-[16px] px-4 py-3 text-left
                             text-[12px] text-[#5D544D] transition-colors
                             hover:bg-[#EFE7DD]"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {time}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PARTY SIZE */}
        <div className="relative sm:border-l sm:border-[#D9CFC5]/65">
          <button
            type="button"
            onClick={() =>
              setReservationOpen(reservationOpen === "party" ? null : "party")
            }
            className="group flex w-full items-center justify-between rounded-full
                       px-6 py-4 text-left transition-colors duration-300
                       hover:bg-[#F0E8DE]/70"
          >
            <div>
              <span className="block text-[6px] tracking-[0.24em] text-[#9A8E84]">
                PARTY SIZE
              </span>
              <span
                className="mt-1.5 block text-[14px] text-[#4D4640]"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                {partySize}
              </span>
            </div>

            <span
              className={`relative ml-4 h-8 w-8 shrink-0 rounded-full
                          bg-[#EEE6DC] transition-transform duration-300 ${
                            reservationOpen === "party" ? "rotate-180" : ""
                          }`}
            >
              <span
                className="absolute left-1/2 top-[45%] h-[7px] w-[7px]
                           -translate-x-1/2 -translate-y-1/2 rotate-45
                           border-b border-r border-[#766B62]"
              />
            </span>
          </button>

          {reservationOpen === "party" && (
            <div
              className="absolute left-0 top-[calc(100%+10px)] z-50 max-h-[250px]
                         w-full min-w-[190px] overflow-y-auto rounded-[22px]
                         bg-[#FBF8F3] p-2 text-left
                         shadow-[0_18px_50px_rgba(53,44,38,0.13)]"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((guests) => (
                <button
                  key={guests}
                  type="button"
                  onClick={() => {
                    setPartySize(
                      `${guests} ${guests === 1 ? "guest" : "guests"}`
                    );
                    setReservationOpen(null);
                  }}
                  className="block w-full rounded-[16px] px-4 py-3 text-left
                             text-[12px] text-[#5D544D] transition-colors
                             hover:bg-[#EFE7DD]"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  {guests} {guests === 1 ? "guest" : "guests"}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FIND A TABLE — visual only for concept project */}
        <button
          type="button"
          onClick={() => setReservationOpen(null)}
          className="group flex min-h-[58px] items-center justify-between gap-7
                     rounded-full bg-[#574E47] py-2.5 pl-7 pr-2.5
                     text-[#F8F4EE]
                     shadow-[0_8px_24px_rgba(57,48,41,0.10)]
                     transition-all duration-500 hover:-translate-y-[1px]
                     hover:bg-[#49423C]
                     hover:shadow-[0_12px_30px_rgba(57,48,41,0.14)]"
        >
          <span className="whitespace-nowrap text-[8px] tracking-[0.23em]">
            FIND A TABLE
          </span>

          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center
                       rounded-full bg-[#F5EFE7]"
          >
            <span className="relative flex h-3 w-4 items-center">
              <span className="h-px w-4 bg-[#574E47]" />
              <span
                className="absolute right-0 h-[5px] w-[5px] rotate-45
                           border-r border-t border-[#574E47]"
              />
            </span>
          </span>
        </button>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-center gap-3">
      <span className="h-[3px] w-[3px] rounded-full bg-[#B29E8F]" />
      <p className="text-[6px] tracking-[0.2em] text-[#9B9188]">
        CONCEPT DEMONSTRATION · RESERVATIONS ARE DISABLED
      </p>
      <span className="h-[3px] w-[3px] rounded-full bg-[#B29E8F]" />
    </div>
  </div>
</section>

{/* =====================================================
    FOOTER
===================================================== */}
<footer
  id="contact"
  className="relative overflow-hidden bg-[#302923] px-6 pb-8 pt-20 text-[#F4EFE8]
             sm:px-10 md:px-14 lg:px-24 lg:pt-24"
>
  {/* SOFT AMBIENT GLOW */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -bottom-48 -left-32
               h-[460px] w-[460px] rounded-full
               bg-[#806F61]/10 blur-[100px]"
  />

  <div className="relative mx-auto max-w-[1380px]">
    {/* =====================================================
        TOP
    ===================================================== */}
    <div className="grid gap-14 pb-16 lg:grid-cols-[1.25fr_.75fr] lg:gap-24">
      {/* BRAND */}
      <div>
        <p className="text-[8px] tracking-[0.3em] text-white/35">
          ITALIAN KITCHEN · NEW YORK
        </p>

        <h2
          className="mt-5 text-[48px] font-normal leading-none
                     tracking-[0.13em] text-[#F7F1EA]
                     sm:text-[58px] lg:text-[68px]"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          SORELLA
        </h2>

        <p
          className="mt-6 max-w-[370px] text-[19px] italic
                     leading-[1.45] text-[#CDBBAD]"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          Made for good company.
        </p>

        <p className="mt-6 max-w-[390px] text-[10px] font-light leading-[1.9] text-white/45">
          Seasonal Italian cooking, warm hospitality, and evenings made to be
          shared around the table.
        </p>
      </div>

      {/* RESERVATION CTA */}
      <div className="flex items-end lg:justify-end">
        <div className="w-full max-w-[390px]">
          <p className="text-[7px] tracking-[0.27em] text-white/35">
            JOIN US FOR DINNER
          </p>

          <button
            type="button"
            onClick={() => scrollTo("reserve")}
            className="group mt-5 flex w-full items-center justify-between
                       rounded-full bg-[#F2EAE1] py-2.5 pl-7 pr-2.5
                       text-[#413A34]
                       transition-all duration-500
                       hover:bg-white"
          >
            <span className="text-[8px] tracking-[0.24em]">
              RESERVE A TABLE
            </span>

            <span
              className="flex h-10 w-10 shrink-0 items-center
                         justify-center rounded-full bg-[#5B5048]
                         transition-transform duration-500
                         group-hover:translate-x-[2px]"
            >
              <span className="relative flex h-3 w-4 items-center">
                <span className="h-px w-4 bg-[#F5EFE8]" />

                <span
                  className="absolute right-0 h-[5px] w-[5px]
                             rotate-45 border-r border-t
                             border-[#F5EFE8]"
                />
              </span>
            </span>
          </button>

          <p className="mt-4 text-[6px] tracking-[0.18em] text-white/25">
            CONCEPT PROJECT · RESERVATIONS DISABLED
          </p>
        </div>
      </div>
    </div>

    {/* =====================================================
        DETAILS
    ===================================================== */}
    <div
      className="grid gap-10 border-t border-white/[0.09]
                 py-12 sm:grid-cols-2
                 lg:grid-cols-[1fr_1fr_1.1fr]"
    >
      {/* VISIT */}
      <div>
        <p className="mb-5 text-[7px] tracking-[0.28em] text-white/30">
          VISIT
        </p>

        <p className="text-[10px] font-light leading-[1.9] text-white/55">
          123 West Broadway
          <br />
          New York, NY 10013
          <br />
          (212) 555-0187
        </p>
      </div>

      {/* HOURS */}
      <div>
        <p className="mb-5 text-[7px] tracking-[0.28em] text-white/30">
          HOURS
        </p>

        <p className="text-[10px] font-light leading-[1.9] text-white/55">
          Mon–Thu · 5PM–11PM
          <br />
          Fri–Sat · 5PM–12AM
          <br />
          Sun · 5PM–10PM
        </p>
      </div>

      {/* EXPLORE */}
      <div>
        <p className="mb-5 text-[7px] tracking-[0.28em] text-white/30">
          EXPLORE
        </p>

        <div className="flex flex-wrap gap-x-7 gap-y-4">
          <button
            type="button"
            onClick={() => scrollTo("menu")}
            className="text-[8px] tracking-[0.18em] text-white/55
                       transition-colors duration-300 hover:text-white"
          >
            MENU
          </button>

          <button
            type="button"
            onClick={() => scrollTo("story")}
            className="text-[8px] tracking-[0.18em] text-white/55
                       transition-colors duration-300 hover:text-white"
          >
            OUR STORY
          </button>

          <button
            type="button"
            onClick={() => scrollTo("private-dining")}
            className="text-[8px] tracking-[0.18em] text-white/55
                       transition-colors duration-300 hover:text-white"
          >
            PRIVATE DINING
          </button>

          <button
            type="button"
            onClick={() => scrollTo("reserve")}
            className="text-[8px] tracking-[0.18em] text-white/55
                       transition-colors duration-300 hover:text-white"
          >
            RESERVATIONS
          </button>

          <span
            className="text-[8px] tracking-[0.18em] text-white/55
                       transition-colors duration-300 hover:text-white"
          >
            INSTAGRAM
          </span>
        </div>
      </div>
    </div>

    {/* =====================================================
        BOTTOM
    ===================================================== */}
    <div
      className="flex flex-col gap-5 border-t border-white/[0.09]
                 pt-7 text-[6px] tracking-[0.18em] text-white/25
                 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>© 2026 SORELLA · ALL RIGHTS RESERVED</p>

      <button
        type="button"
        onClick={() => scrollTo("home")}
        className="group flex w-fit items-center gap-3
                   transition-colors duration-300 hover:text-white/55"
      >
        <span>BACK TO TOP</span>

        <span className="relative h-7 w-7 rounded-full border border-white/15">
          <span
            className="absolute left-1/2 top-[53%]
                       h-[6px] w-[6px]
                       -translate-x-1/2 -translate-y-1/2
                       rotate-45 border-l border-t border-current"
          />
        </span>
      </button>

      <p>INDEPENDENT CONCEPT · DESIGNED BY JOVAVO</p>
    </div>
  </div>
</footer>

    </main>
  );
}
