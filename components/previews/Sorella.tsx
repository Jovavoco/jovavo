"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    href: "/preview/sorella/menu",
    label: "MENU",
  },
  {
    href: "/preview/sorella/story",
    label: "OUR STORY",
  },
  {
    href: "/preview/sorella/private-dining",
    label: "PRIVATE DINING",
  },
  {
    href: "/preview/sorella/contact",
    label: "CONTACT",
  },
];

export default function SorellaPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    setMenuOpen(false);

    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3EC] text-[#2D2925]">
      {/* =====================================================
          HEADER + HERO
      ===================================================== */}

      <section
        id="home"
        className="
          relative w-full
          min-h-[640px]
          overflow-hidden
          bg-[#2B211A]
          sm:min-h-[700px]
          md:min-h-[720px]
          md:aspect-[16/10]
          lg:max-h-[980px]
        "
      >
        {/* HERO IMAGE */}

        <img
          src="/previews/sorella/sorella-hero.jpg"
          alt="Sorella Italian restaurant interior"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* VERY LIGHT IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-[#160F0B]/[0.06]" />

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="absolute inset-x-0 top-0 z-40">
          <div
            className="
              mx-auto flex w-full max-w-[1540px]
              items-start justify-between
              px-5 pt-7
              sm:px-10 sm:pt-9
              lg:px-[5.5rem] lg:pt-11
            "
          >
            {/* LOGO */}

            <button
              type="button"
              onClick={scrollToTop}
              className="text-left text-[#F7F1EA]"
            >
              <span
                className="
                  block
                  text-[28px]
                  font-normal
                  tracking-[0.24em]
                  sm:text-[31px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                SORELLA
              </span>

              <span
                className="
                  mt-2.5 hidden
                  text-[7px]
                  font-medium
                  tracking-[0.3em]
                  text-white/80
                  sm:block
                "
              >
                ITALIAN KITCHEN · NEW YORK
              </span>
            </button>

            {/* DESKTOP NAV */}

            <nav className="hidden items-center gap-8 md:flex lg:gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    relative
                    py-2
                    text-[10px]
                    font-semibold
                    tracking-[0.18em]
                    text-white/90
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/preview/sorella/reservations"
                className="
                  ml-2
                  rounded-full
                  bg-[#F5F0E8]
                  px-8
                  py-[15px]
                  text-[9px]
                  font-semibold
                  tracking-[0.18em]
                  text-[#3D352E]
                  shadow-[0_8px_24px_rgba(0,0,0,0.10)]
                  transition-all
                  duration-300
                  hover:-translate-y-[1px]
                  hover:bg-white
                "
              >
                RESERVE
              </Link>
            </nav>

            {/* MOBILE MENU BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="
                flex h-11 w-11
                flex-col items-center justify-center
                gap-[6px]
                rounded-full
                border border-white/55
                bg-black/10
                md:hidden
              "
            >
              <span className="h-px w-[17px] bg-white" />
              <span className="h-px w-[17px] bg-white" />
            </button>
          </div>

          {/* MOBILE NAVIGATION */}

          {menuOpen && (
            <div
              className="
                mx-6 mt-4
                rounded-[24px]
                bg-[#302923]
                px-7 py-7
                shadow-2xl
                sm:mx-10
                md:hidden
              "
            >
              <div className="flex flex-col items-start gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[10px]
                      font-semibold
                      tracking-[0.18em]
                      text-white/85
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/preview/sorella/reservations"
                  onClick={() => setMenuOpen(false)}
                  className="
                    mt-2
                    rounded-full
                    bg-[#F5F0E8]
                    px-7 py-3.5
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-[#3C342D]
                  "
                >
                  RESERVE
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div
            className="
              w-full max-w-[760px]
              -translate-y-[1%]
              text-center
              text-[#F8F2EB]
            "
          >
            <h1
              className="
                text-[34px]
                font-normal
                leading-[0.98]
                tracking-[-0.025em]
                sm:text-[58px]
                lg:text-[68px]
                xl:text-[72px]
              "
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Come for dinner.
              <br />

              <span className="italic">
                Stay for the evening.
              </span>
            </h1>

            <div className="mx-auto mt-8 h-px w-12 bg-white/60" />

            {/* THICKER HERO SUBTEXT */}

            <p
              className="
                mx-auto mt-7
                max-w-[430px]
                text-[9px]
                font-semibold
                uppercase
                leading-[2.15]
                tracking-[0.26em]
                text-white/90
                sm:text-[10px]
              "
            >
              Italian cooking made for
              <br />
              evenings that linger.
            </p>

            {/* WHITE OUTLINED MENU CTA - LOWERED */}

            <Link
              href="/preview/sorella/menu"
              className="
                group
                mx-auto mt-12 sm:mt-16
                inline-flex
                items-center
                gap-6
                rounded-full
                border border-white/85
                bg-transparent
                py-2.5
                pl-7
                pr-2.5
                text-white
                transition-all
                duration-300
                hover:border-white
                hover:bg-white
                hover:text-[#3C342D]
              "
            >
              <span
                className="
                  pl-1
                  text-[9px]
                  font-semibold
                  tracking-[0.19em]
                "
              >
                EXPLORE THE MENU
              </span>

              <span
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-full
                  border border-white/85
                  bg-transparent
                  text-white
                  transition-all
                  duration-300
                  group-hover:translate-x-[2px]
                  group-hover:border-[#514A44]
                  group-hover:bg-[#514A44]
                  group-hover:text-white
                "
              >
                <span className="relative flex h-3 w-4 items-center">
                  <span className="h-px w-4 bg-current" />

                  <span
                    className="
                      absolute right-0
                      h-[5px] w-[5px]
                      rotate-45
                      border-r border-t
                      border-current
                    "
                  />
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* LEFT HERO DETAIL */}

        <div className="absolute bottom-[31%] left-[4%] z-20 hidden lg:block">
          <p
            className="
              text-[8px]
              font-medium
              leading-[2.2]
              tracking-[0.25em]
              text-white/85
            "
          >
            DINNER
            <br />
            NIGHTLY
            <br />
            5PM — LATE
          </p>

          <div className="mt-5 h-16 w-px bg-white/45" />
        </div>

        {/* RIGHT HERO DETAIL */}

        <div className="absolute bottom-[34%] right-[3.3%] z-20 hidden text-right lg:block">
          <p
            className="
              text-[8px]
              font-medium
              leading-[2.2]
              tracking-[0.25em]
              text-white/85
            "
          >
            NEW YORK
            <br />
            EST. 2026
          </p>

          <div className="ml-auto mt-5 h-16 w-px bg-white/45" />
        </div>
      </section>

      {/* =====================================================
    EDITORIAL SECTION DIVIDER
===================================================== */}

<div className="relative bg-[#F3EEE6] py-5 sm:py-6 lg:py-7">
  <div className="mx-auto flex max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">

    {/* LEFT LINE */}

    <div className="h-px flex-1 bg-[#9A8372]/45" />

    {/* CENTER OLIVE BRANCH */}

    <div className="mx-5 flex items-center justify-center sm:mx-7">
      <svg
        viewBox="0 0 90 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[64px] text-[#8A7464] sm:h-[34px] sm:w-[72px]"
        aria-hidden="true"
      >
        {/* STEM */}
        <path
          d="M14 33C29 27 43 20 63 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* LEAVES */}
        <path
          d="M27 27C20 26 16 22 14 17C21 17 27 20 30 24C30 25 29 26 27 27Z"
          fill="currentColor"
        />

        <path
          d="M36 23C29 21 25 17 24 12C31 12 37 15 40 19C39 21 38 22 36 23Z"
          fill="currentColor"
        />

        <path
          d="M46 18C40 15 37 11 37 6C44 7 49 10 52 14C51 16 49 17 46 18Z"
          fill="currentColor"
        />

        <path
          d="M32 26C31 32 33 36 38 39C40 33 39 28 36 24C34 24 33 25 32 26Z"
          fill="currentColor"
        />

        <path
          d="M43 21C43 27 46 31 51 33C52 27 50 22 47 19C45 19 44 20 43 21Z"
          fill="currentColor"
        />

        <path
          d="M54 15C55 20 59 23 64 24C64 19 62 15 59 12C57 12 55 13 54 15Z"
          fill="currentColor"
        />

        <path
          d="M61 10C66 8 71 9 75 12C71 16 66 17 61 15C60 13 60 12 61 10Z"
          fill="currentColor"
        />
      </svg>
    </div>

    {/* RIGHT LINE */}

    <div className="h-px flex-1 bg-[#9A8372]/45" />

  </div>
</div>

      {/* =====================================================
          MENU
      ===================================================== */}

      <section
        className="
          relative overflow-hidden
          bg-[#F3ECE2]
          sm:min-h-[680px]
          lg:min-h-[720px]
        "
      >
        {/* MOBILE: full image width is visible with no side cropping */}
        <img
          src="/previews/sorella/sorella-menu-bg.png"
          alt=""
          className="relative block h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-center"
        />

        <div className="absolute inset-0 bg-[#F4EEE6]/[0.05]" />

        <div
          className="
            absolute inset-0 z-10
            flex items-center justify-center
            px-5 py-8
            sm:relative sm:min-h-[680px] sm:px-10 sm:py-20
            lg:min-h-[720px] lg:px-24
          "
        >
          <div className="mx-auto w-full max-w-[680px] px-1 text-center sm:px-0">
            <p className="text-[9px] font-medium tracking-[0.28em] text-[#756D66]">
              THE MENU
            </p>

            <h2
              className="
                mt-6
                text-[42px]
                font-normal
                leading-[1.02]
                tracking-[-0.04em]
                text-[#332E2A]
                sm:text-[50px]
                lg:text-[58px]
              "
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Made to be{" "}
              <span className="italic text-[#9A7D6B]">
                shared.
              </span>
            </h2>

            <p
              className="
                mx-auto mt-4
                max-w-[500px]
                text-[10px]
                font-normal
                leading-[1.65]
                sm:text-[12px]
                sm:leading-[1.9]
                text-[#655D56]
              "
            >
              Seasonal Italian cooking, handmade pasta, and thoughtful
              ingredients made for long dinners around the table.
            </p>

            <Link
              href="/preview/sorella/menu"
              className="
                group
                mx-auto mt-6 sm:mt-10
                inline-flex
                items-center gap-6
                rounded-full
                bg-[#514A44]
                py-2.5
                pl-7
                pr-2.5
                text-[#F8F4EE]
                shadow-[0_12px_32px_rgba(58,49,43,0.14)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#443E39]
              "
            >
              <span className="pl-1 text-[9px] font-semibold tracking-[0.19em]">
                EXPLORE THE MENU
              </span>

              <span
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#F4EFE8]
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                "
              >
                <span className="relative flex h-3 w-4 items-center">
                  <span className="h-px w-4 bg-[#514A44]" />

                  <span
                    className="
                      absolute right-0
                      h-[5px] w-[5px]
                      rotate-45
                      border-r border-t
                      border-[#514A44]
                    "
                  />
                </span>
              </span>
            </Link>

            <div className="mt-4 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
              <span className="text-[7px] font-medium tracking-[0.21em] text-[#877E76]">
                DINNER
              </span>

              <span className="h-[2px] w-[2px] rounded-full bg-[#9E9389]" />

              <span className="text-[7px] font-medium tracking-[0.21em] text-[#877E76]">
                WINE
              </span>

              <span className="h-[2px] w-[2px] rounded-full bg-[#9E9389]" />

              <span className="text-[7px] font-medium tracking-[0.21em] text-[#877E76]">
                DESSERT
              </span>
            </div>
          </div>
        </div>
      </section>

            {/* =====================================================
          STORY
      ===================================================== */}

      <section
        className="
          relative overflow-hidden
          bg-[#F7F2EB]
          px-5 py-14
          sm:px-10 sm:py-20
          md:px-14
          lg:px-24 lg:py-28
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -left-40 top-1/2
            h-[520px] w-[520px]
            -translate-y-1/2
            rounded-full
            bg-[#E7DDD2]/40
            blur-[100px]
          "
        />

        <div
          className="
            relative mx-auto grid
            max-w-[1380px]
            gap-10
            lg:grid-cols-[0.88fr_1.12fr]
            lg:items-center
            lg:gap-24
          "
        >
          {/* STORY COPY */}

          <div className="lg:pl-4">
            <div className="mb-6 flex items-center gap-4">
              <p className="text-[8px] font-medium tracking-[0.28em] text-[#887D73]">
                A MODERN ITALIAN EXPERIENCE
              </p>

              <span className="h-px w-8 bg-[#B1A59A]" />
            </div>

            <h2
              className="
                max-w-[500px]
                text-[36px]
                font-normal
                leading-[1.03]
                tracking-[-0.04em]
                text-[#39332E]
                sm:text-[46px]
                lg:text-[52px]
              "
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Tradition feels
              <br />

              <span className="italic text-[#9A7D6B]">
                different here.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[455px]
                text-[11px]
                font-normal
                leading-[1.95]
                text-[#6C645D]
              "
            >
              Sorella is a neighborhood Italian restaurant where
              familiar flavors meet a lighter, more modern point of
              view. Our kitchen is guided by seasonality, simplicity,
              and food that belongs in the middle of the table.
            </p>

            <p
              className="mt-8 text-[18px] italic text-[#9A7D6B]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Buon cibo. Bella compagnia.
            </p>

            <Link
              href="/preview/sorella/story"
              className="group mt-8 flex w-fit items-center gap-4"
            >
              <span className="text-[9px] font-semibold tracking-[0.19em] text-[#5F5852]">
                DISCOVER OUR STORY
              </span>

              <span className="relative flex h-3 w-9 items-center">
                <span
                  className="
                    h-px w-8
                    bg-[#8D8177]
                    transition-all
                    duration-300
                    group-hover:w-9
                  "
                />

                <span
                  className="
                    absolute right-0
                    h-[5px] w-[5px]
                    rotate-45
                    border-r border-t
                    border-[#8D8177]
                  "
                />
              </span>
            </Link>
          </div>

          {/* STORY IMAGE */}

          <div className="relative lg:py-4">
            <div
              className="
                relative overflow-hidden
                rounded-[38px_38px_120px_38px]
                bg-[#EEE6DC]
                sm:rounded-[48px_48px_150px_48px]
                lg:rounded-[60px_60px_190px_60px]
              "
            >
              <img
                src="/previews/sorella/sorella-brand.jpg"
                alt="Sorella table setting"
                className="block h-auto w-full object-contain"
              />
            </div>

            <div
              className="
                absolute -bottom-5 left-7
                hidden items-center gap-4
                rounded-full
                bg-[#F7F2EB]
                px-6 py-3
                shadow-[0_12px_35px_rgba(61,51,44,0.08)]
                sm:flex
              "
            >
              <span className="h-[4px] w-[4px] rounded-full bg-[#A88672]" />

              <p className="text-[7px] font-medium tracking-[0.22em] text-[#7D7168]">
                COME FOR DINNER · STAY FOR THE EVENING
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVATE DINING
      ===================================================== */}

      <section
        className="
          relative min-h-[650px]
          overflow-hidden
          bg-[#F3ECE2]
          sm:min-h-[700px]
          lg:min-h-[760px]
        "
      >
        <img
          src="/previews/sorella/sorella-private-dining.jpg"
          alt="Private dining at Sorella"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

<div
  className="
    relative z-10
    mx-auto flex min-h-[650px]
    max-w-[1540px]
    items-end
    px-6 py-14
    sm:min-h-[700px]
    sm:px-10 sm:py-16
    lg:min-h-[760px]
    lg:items-center
    lg:justify-end
    lg:pl-14
    lg:pr-8
    lg:py-20
    xl:pl-20
    xl:pr-6
    2xl:pr-0
  "
>
  <div
    className="
      ml-auto w-full
      rounded-[34px]
      bg-[#F5EEE5]/95
      px-7 py-9
      shadow-[0_20px_60px_rgba(56,45,37,0.08)]
      sm:max-w-[520px]
      sm:px-10 sm:py-11
      lg:mr-0
      lg:w-[38%]
      lg:max-w-[500px]
      lg:translate-x-8
      lg:bg-transparent
      lg:px-0 lg:py-0
      lg:shadow-none
      xl:translate-x-12
      2xl:translate-x-16
    "
  >
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#A28A78]" />

              <p className="text-[9px] font-medium tracking-[0.26em] text-[#8A7768]">
                PRIVATE DINING
              </p>
            </div>

            <h2
              className="
                mt-7
                text-[36px]
                font-normal
                leading-[1.02]
                tracking-[-0.04em]
                text-[#3A332D]
                sm:text-[46px]
                lg:text-[55px]
              "
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              A more meaningful
              <br />
              <span className="italic text-[#9A7B67]">
                gathering.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[430px]
                text-[12px]
                font-normal
                leading-[1.9]
                text-[#6D6259]
              "
            >
              From intimate celebrations to larger dinners, our
              private dining experience brings together seasonal
              menus, thoughtful service, and a setting that feels
              warm rather than formal.
            </p>

            <Link
              href="/preview/sorella/private-dining"
              className="
                group mt-9
                inline-flex
                items-center gap-6
                rounded-full
                bg-[#65584D]
                py-2.5
                pl-7
                pr-2.5
                text-[#F8F3EC]
                shadow-[0_12px_32px_rgba(55,45,38,0.12)]
                transition-all
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#564B42]
              "
            >
              <span className="pl-1 text-[9px] font-semibold tracking-[0.19em]">
                PRIVATE DINING
              </span>

              <span
                className="
                  flex h-10 w-10
                  shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#F3ECE4]
                  transition-transform
                  duration-300
                  group-hover:translate-x-[2px]
                "
              >
                <span className="relative flex h-3 w-4 items-center">
                  <span className="h-px w-4 bg-[#62564C]" />

                  <span
                    className="
                      absolute right-0
                      h-[5px] w-[5px]
                      rotate-45
                      border-r border-t
                      border-[#62564C]
                    "
                  />
                </span>
              </span>
            </Link>

            <div className="mt-8 flex items-center gap-3">
              <span className="text-[7px] font-medium tracking-[0.2em] text-[#94867A]">
                PEOPLE
              </span>

              <span className="h-[2px] w-[2px] rounded-full bg-[#A99A8E]" />

              <span className="text-[7px] font-medium tracking-[0.2em] text-[#94867A]">
                FOOD
              </span>

              <span className="h-[2px] w-[2px] rounded-full bg-[#A99A8E]" />

              <span className="text-[7px] font-medium tracking-[0.2em] text-[#94867A]">
                LATE EVENINGS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESERVATIONS
      ===================================================== */}

      <section
        className="
          relative overflow-hidden
          bg-[#F7F3EC]
          px-5 py-14
          sm:px-10 sm:py-20
          md:px-14
          lg:px-24 lg:py-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[45px]
            left-1/2
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-[115px]
            font-normal
            italic
            leading-none
            tracking-[-0.07em]
            text-[#9B887A]/[0.045]
            sm:text-[165px]
            lg:text-[220px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Sorella
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px]">
          <div
            className="
              grid gap-10
              lg:grid-cols-[.72fr_1.28fr]
              lg:items-end
              lg:gap-20
            "
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#B1A499]" />

                <p className="text-[9px] font-medium tracking-[0.26em] text-[#887D73]">
                  RESERVATIONS
                </p>
              </div>

              <p
                className="
                  mt-4
                  max-w-[230px]
                  text-[16px]
                  italic
                  leading-[1.5]
                  text-[#8A786B]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Dinner begins with a table.
              </p>
            </div>

            <div>
              <h2
                className="
                  max-w-[720px]
                  text-[40px]
                  font-normal
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#39332E]
                  sm:text-[48px]
                  lg:text-[55px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Join us{" "}
                <span className="italic text-[#9A7D6B]">
                  for the evening.
                </span>
              </h2>

              <div
                className="
                  mt-6
                  flex flex-col gap-6
                  border-t border-[#AA998D]/30
                  pt-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[430px]
                    text-[12px]
                    font-normal
                    leading-[1.8]
                    text-[#746B63]
                    sm:text-[13px]
                  "
                >
                  Choose your date, time and party size on our
                  reservations page and imagine your evening at
                  Sorella.
                </p>

                <Link
                  href="/preview/sorella/reservations"
                  className="
                    group
                    inline-flex w-fit
                    items-center gap-5
                    rounded-full
                    bg-[#574E47]
                    py-2.5
                    pl-7
                    pr-2.5
                    text-[#F8F4EE]
                    shadow-[0_8px_24px_rgba(57,48,41,0.10)]
                    transition-all
                    duration-300
                    hover:-translate-y-[1px]
                    hover:bg-[#49423C]
                  "
                >
                  <span className="whitespace-nowrap text-[9px] font-semibold tracking-[0.19em]">
                    RESERVE A TABLE
                  </span>

                  <span
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      bg-[#F5EFE7]
                      transition-transform
                      duration-300
                      group-hover:translate-x-[2px]
                    "
                  >
                    <span className="relative flex h-3 w-4 items-center">
                      <span className="h-px w-4 bg-[#574E47]" />

                      <span
                        className="
                          absolute right-0
                          h-[5px] w-[5px]
                          rotate-45
                          border-r border-t
                          border-[#574E47]
                        "
                      />
                    </span>
                  </span>
                </Link>
              </div>

              <div className="mt-5 flex max-w-full items-start gap-3">
                <span className="h-[4px] w-[4px] rounded-full bg-[#B29E8F]" />

                <p className="max-w-[280px] text-[7px] font-medium leading-[1.7] tracking-[0.14em] text-[#9B9188] sm:max-w-none sm:tracking-[0.17em]">
                  CONCEPT DEMONSTRATION · RESERVATIONS ARE DISABLED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E8DED2]">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-8 -top-6
            select-none
            text-[110px]
            font-normal
            italic
            leading-none
            tracking-[-0.06em]
            text-[#8F7C6E]/[0.045]
            sm:text-[150px]
            lg:text-[190px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Ciao
        </div>

        <div
          className="
            relative z-10
            mx-auto max-w-[1180px]
            px-5 py-14
            sm:px-10 sm:py-20
            md:px-14
            lg:px-20
          "
        >
          <div
            className="
              grid gap-9
              lg:grid-cols-[.55fr_1.45fr]
              lg:items-end
              lg:gap-16
            "
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-[#9C8B7E]" />

                <p className="text-[9px] font-medium tracking-[0.26em] text-[#8B7B70]">
                  CONTACT
                </p>
              </div>

              <p
                className="
                  mt-4
                  max-w-[210px]
                  text-[16px]
                  italic
                  leading-[1.5]
                  text-[#8A786B]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Questions before your evening?
              </p>
            </div>

            <div>
              <h2
                className="
                  max-w-[720px]
                  text-[39px]
                  font-normal
                  leading-[1]
                  tracking-[-0.04em]
                  text-[#352E29]
                  sm:text-[47px]
                  lg:text-[53px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                We would love{" "}
                <span className="italic text-[#78675B]">
                  to hear from you.
                </span>
              </h2>

              <div
                className="
                  mt-6
                  flex flex-col gap-6
                  border-t border-[#A99688]/30
                  pt-6
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p
                  className="
                    max-w-[430px]
                    text-[12px]
                    font-normal
                    leading-[1.8]
                    text-[#756A61]
                    sm:text-[13px]
                  "
                >
                  Get in touch about general questions, private
                  dining, celebrations or your next evening at
                  Sorella.
                </p>

                <Link
                  href="/preview/sorella/contact"
                  className="
                    inline-flex w-fit
                    items-center gap-4
                    rounded-full
                    border border-[#8D796B]/30
                    px-7 py-3.5
                    text-[9px]
                    font-semibold
                    tracking-[0.18em]
                    text-[#66584F]
                    transition-all
                    duration-300
                    hover:bg-[#342D28]
                    hover:text-white
                  "
                >
                  CONTACT SORELLA

                  <span className="text-[12px]">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    EDITORIAL SECTION DIVIDER
===================================================== */}

<div className="relative bg-[#F3EEE6] py-5 sm:py-6 lg:py-7">
  <div className="mx-auto flex max-w-[1500px] items-center px-6 sm:px-10 lg:px-14">

    {/* LEFT LINE */}

    <div className="h-px flex-1 bg-[#9A8372]/45" />

    {/* CENTER OLIVE BRANCH */}

    <div className="mx-5 flex items-center justify-center sm:mx-7">
      <svg
        viewBox="0 0 90 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[30px] w-[64px] text-[#8A7464] sm:h-[34px] sm:w-[72px]"
        aria-hidden="true"
      >
        {/* STEM */}
        <path
          d="M14 33C29 27 43 20 63 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* LEAVES */}
        <path
          d="M27 27C20 26 16 22 14 17C21 17 27 20 30 24C30 25 29 26 27 27Z"
          fill="currentColor"
        />

        <path
          d="M36 23C29 21 25 17 24 12C31 12 37 15 40 19C39 21 38 22 36 23Z"
          fill="currentColor"
        />

        <path
          d="M46 18C40 15 37 11 37 6C44 7 49 10 52 14C51 16 49 17 46 18Z"
          fill="currentColor"
        />

        <path
          d="M32 26C31 32 33 36 38 39C40 33 39 28 36 24C34 24 33 25 32 26Z"
          fill="currentColor"
        />

        <path
          d="M43 21C43 27 46 31 51 33C52 27 50 22 47 19C45 19 44 20 43 21Z"
          fill="currentColor"
        />

        <path
          d="M54 15C55 20 59 23 64 24C64 19 62 15 59 12C57 12 55 13 54 15Z"
          fill="currentColor"
        />

        <path
          d="M61 10C66 8 71 9 75 12C71 16 66 17 61 15C60 13 60 12 61 10Z"
          fill="currentColor"
        />
      </svg>
    </div>

    {/* RIGHT LINE */}

    <div className="h-px flex-1 bg-[#9A8372]/45" />

  </div>
</div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          relative overflow-hidden
          bg-[#302923]
          px-5 pb-8 pt-14
          text-[#F4EFE8]
          sm:px-10 sm:pt-20
          md:px-14
          lg:px-24 lg:pt-24
        "
      >
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -bottom-48 -left-32
            h-[460px] w-[460px]
            rounded-full
            bg-[#806F61]/10
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-[1380px]">
          {/* FOOTER TOP */}

          <div
            className="
              grid gap-14 pb-16
              lg:grid-cols-[1.25fr_.75fr]
              lg:gap-24
            "
          >
<div>
  <p className="text-[18px] font-medium tracking-[0.27em] text-white/40 sm:text-[21px] lg:text-[24px]">
    ITALIAN KITCHEN · NEW YORK
  </p>

              <h2
                className="
                  mt-5
                  text-[46px]
                  font-normal
                  leading-none
                  tracking-[0.11em]
                  text-[#F7F1EA]
                  sm:text-[58px]
                  lg:text-[68px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                SORELLA
              </h2>

              <p
                className="
                  mt-6
                  max-w-[370px]
                  text-[19px]
                  italic
                  leading-[1.45]
                  text-[#CDBBAD]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Come for dinner. Stay for the evening.
              </p>

              <p
                className="
                  mt-6
                  max-w-[390px]
                  text-[11px]
                  font-normal
                  leading-[1.9]
                  text-white/50
                "
              >
                Seasonal Italian cooking, warm hospitality and
                evenings designed to unfold at their own pace.
              </p>
            </div>

            {/* FOOTER RESERVATION CTA */}

            <div className="flex items-end lg:justify-end">
              <div className="w-full max-w-[390px]">
                <p className="text-[8px] font-medium tracking-[0.23em] text-white/40">
                  JOIN US FOR DINNER
                </p>

                <Link
                  href="/preview/sorella/reservations"
                  className="
                    group mt-5
                    flex w-full
                    items-center justify-between
                    rounded-full
                    bg-[#F2EAE1]
                    py-2.5
                    pl-7
                    pr-2.5
                    text-[#413A34]
                    transition-all
                    duration-300
                    hover:bg-white
                  "
                >
                  <span className="text-[9px] font-semibold tracking-[0.19em]">
                    RESERVE A TABLE
                  </span>

                  <span
                    className="
                      flex h-10 w-10
                      shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#5B5048]
                      transition-transform
                      duration-300
                      group-hover:translate-x-[2px]
                    "
                  >
                    <span className="relative flex h-3 w-4 items-center">
                      <span className="h-px w-4 bg-[#F5EFE8]" />

                      <span
                        className="
                          absolute right-0
                          h-[5px] w-[5px]
                          rotate-45
                          border-r border-t
                          border-[#F5EFE8]
                        "
                      />
                    </span>
                  </span>
                </Link>

                <p className="mt-4 text-[7px] font-medium tracking-[0.16em] text-white/30">
                  CONCEPT PROJECT · RESERVATIONS DISABLED
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER DETAILS */}

          <div
            className="
              grid gap-10
              border-t border-white/[0.09]
              py-12
              sm:grid-cols-2
              lg:grid-cols-[1fr_1fr_1.1fr]
            "
          >
            <div>
              <p className="mb-5 text-[8px] font-medium tracking-[0.24em] text-white/35">
                VISIT
              </p>

              <p className="text-[11px] font-normal leading-[1.9] text-white/60">
                123 West Broadway
                <br />
                New York, NY 10013
                <br />
                (212) 555-0187
              </p>
            </div>

            <div>
              <p className="mb-5 text-[8px] font-medium tracking-[0.24em] text-white/35">
                HOURS
              </p>

              <p className="text-[11px] font-normal leading-[1.9] text-white/60">
                Mon–Thu · 5PM–11PM
                <br />
                Fri–Sat · 5PM–12AM
                <br />
                Sun · 5PM–10PM
              </p>
            </div>

            <div>
              <p className="mb-5 text-[8px] font-medium tracking-[0.24em] text-white/35">
                EXPLORE
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-4">
                <Link
                  href="/preview/sorella/menu"
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.16em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  MENU
                </Link>

                <Link
                  href="/preview/sorella/story"
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.16em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  OUR STORY
                </Link>

                <Link
                  href="/preview/sorella/private-dining"
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.16em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  PRIVATE DINING
                </Link>

                <Link
                  href="/preview/sorella/contact"
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.16em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  CONTACT
                </Link>

                <Link
                  href="/preview/sorella/reservations"
                  className="
                    text-[9px]
                    font-medium
                    tracking-[0.16em]
                    text-white/60
                    transition-colors
                    duration-300
                    hover:text-white
                  "
                >
                  RESERVATIONS
                </Link>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}

          <div
            className="
              flex flex-col gap-5
              border-t border-white/[0.09]
              pt-7
              text-[7px]
              font-medium
              tracking-[0.16em]
              text-white/30
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>© 2026 SORELLA · ALL RIGHTS RESERVED</p>

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group flex w-fit
                items-center gap-3
                transition-colors
                duration-300
                hover:text-white/60
              "
            >
              <span>BACK TO TOP</span>

              <span className="relative h-7 w-7 rounded-full border border-white/20">
                <span
                  className="
                    absolute
                    left-1/2 top-[53%]
                    h-[6px] w-[6px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-45
                    border-l border-t
                    border-current
                  "
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