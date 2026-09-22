import Link from "next/link";

const navItems = [
  ["/preview/sorella/menu", "MENU", "menu"],
  ["/preview/sorella#story", "OUR STORY", "story"],
  ["/preview/sorella/private-dining", "PRIVATE DINING", "private-dining"],
  ["/preview/sorella/contact", "CONTACT", "contact"],
];

export default function SorellaContactPage() {
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
                className={`relative py-2 text-[8px] tracking-[0.22em] text-[#65594F] transition-colors duration-300 hover:text-[#342D28] ${
                  key === "contact"
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
          CONTACT HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#F3EEE6]">

        {/* DECORATIVE TYPE */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-[30px] top-[5px]
            select-none
            text-[120px] font-normal italic
            leading-none tracking-[-0.07em]
            text-[#8D7A6D]/[0.045]
            sm:text-[170px]
            lg:text-[230px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Ciao
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 pb-14 pt-16 sm:px-10 sm:pb-16 sm:pt-20 md:px-14 lg:px-20 lg:pb-20">

          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">

            {/* LEFT */}

            <div>

              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#9C8B7E]" />

                <p className="text-[8px] tracking-[0.34em] text-[#8B7B70]">
                  CONTACT SORELLA
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
                  lg:text-[82px]
                "
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                We would love
                <br />

                <span className="italic text-[#78675B]">
                  to hear from you.
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
                  Questions, celebrations, private dinners or simply
                  planning your next evening at Sorella.
                </p>

                <p className="mt-4 max-w-[390px] text-[12px] font-light leading-[1.8] text-[#81746A] sm:text-[13px]">
                  Reach out and our team will help point you in the
                  right direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section className="bg-[#E8DED2]">

        <div className="mx-auto max-w-[1320px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-18">

          <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">

            {/* =================================================
                RESTAURANT DETAILS
            ================================================= */}

            <div className="flex flex-col justify-between">

              <div>

                <div className="flex items-center gap-4">
                  <span className="h-px w-9 bg-[#947F70]" />

                  <p className="text-[8px] tracking-[0.32em] text-[#88766A]">
                    FIND US
                  </p>
                </div>

                <h2
                  className="mt-5 text-[38px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[46px] lg:text-[52px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  Your neighborhood
                  <br />

                  <span className="italic text-[#7D6A5D]">
                    table in the city.
                  </span>
                </h2>

                <p className="mt-5 max-w-[390px] text-[12px] font-light leading-[1.8] text-[#74675D] sm:text-[13px]">
                  Join us in downtown New York for dinner, drinks
                  and evenings meant to unfold at their own pace.
                </p>
              </div>

              {/* DETAILS */}

              <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-1">

                <div className="border-t border-[#9C897B]/30 pt-4">

                  <p
                    className="text-[16px] italic text-[#67584E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Visit
                  </p>

                  <p className="mt-2 text-[12px] font-light leading-[1.75] text-[#796B61]">
                    123 West Broadway
                    <br />
                    New York, NY 10013
                  </p>
                </div>

                <div className="border-t border-[#9C897B]/30 pt-4">

                  <p
                    className="text-[16px] italic text-[#67584E]"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Hours
                  </p>

                  <p className="mt-2 text-[12px] font-light leading-[1.75] text-[#796B61]">
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
                    Contact
                  </p>

                  <p className="mt-2 text-[12px] font-light leading-[1.75] text-[#796B61]">
                    (212) 555-0187
                    <br />
                    hello@sorellanyc.com
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="rounded-[6px_90px_6px_6px] bg-[#F3EEE6] px-6 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-11">

              <div className="mb-7">

                <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
                  SEND A NOTE
                </p>

                <h3
                  className="mt-3 text-[30px] font-normal leading-[1] tracking-[-0.03em] text-[#352E29] sm:text-[35px]"
                  style={{
                    fontFamily: '"Times New Roman", Times, serif',
                  }}
                >
                  What can we
                  <span className="italic text-[#78675B]"> help with?</span>
                </h3>
              </div>

              <form className="space-y-6">

                {/* NAME */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-[8px] tracking-[0.22em] text-[#827267]"
                    >
                      FIRST NAME
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      disabled
                      placeholder="First name"
                      className="
                        mt-2 w-full
                        border-0 border-b
                        border-[#A99688]/40
                        bg-transparent
                        px-0 py-3
                        text-[13px]
                        text-[#51463F]
                        outline-none
                        placeholder:text-[#9A8B80]/55
                        disabled:cursor-not-allowed
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-[8px] tracking-[0.22em] text-[#827267]"
                    >
                      LAST NAME
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      disabled
                      placeholder="Last name"
                      className="
                        mt-2 w-full
                        border-0 border-b
                        border-[#A99688]/40
                        bg-transparent
                        px-0 py-3
                        text-[13px]
                        text-[#51463F]
                        outline-none
                        placeholder:text-[#9A8B80]/55
                        disabled:cursor-not-allowed
                      "
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="text-[8px] tracking-[0.22em] text-[#827267]"
                  >
                    EMAIL
                  </label>

                  <input
                    id="email"
                    type="email"
                    disabled
                    placeholder="Email address"
                    className="
                      mt-2 w-full
                      border-0 border-b
                      border-[#A99688]/40
                      bg-transparent
                      px-0 py-3
                      text-[13px]
                      text-[#51463F]
                      outline-none
                      placeholder:text-[#9A8B80]/55
                      disabled:cursor-not-allowed
                    "
                  />
                </div>

                {/* REASON */}

                <div>
                  <label
                    htmlFor="reason"
                    className="text-[8px] tracking-[0.22em] text-[#827267]"
                  >
                    I&apos;M REACHING OUT ABOUT
                  </label>

                  <select
                    id="reason"
                    disabled
                    defaultValue=""
                    className="
                      mt-2 w-full
                      border-0 border-b
                      border-[#A99688]/40
                      bg-transparent
                      px-0 py-3
                      text-[13px]
                      text-[#8B7C71]
                      outline-none
                      disabled:cursor-not-allowed
                    "
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    <option>General question</option>
                    <option>Private dining</option>
                    <option>Reservations</option>
                    <option>Press & partnerships</option>
                  </select>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="text-[8px] tracking-[0.22em] text-[#827267]"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    disabled
                    placeholder="Tell us a little more..."
                    className="
                      mt-2 w-full resize-none
                      border-0 border-b
                      border-[#A99688]/40
                      bg-transparent
                      px-0 py-3
                      text-[13px]
                      leading-[1.7]
                      text-[#51463F]
                      outline-none
                      placeholder:text-[#9A8B80]/55
                      disabled:cursor-not-allowed
                    "
                  />
                </div>

                {/* BUTTON */}

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">

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
                    SEND MESSAGE

                    <span className="text-[11px]">
                      ↗
                    </span>
                  </button>

                  <p className="text-[7px] tracking-[0.16em] text-[#88796D]/65">
                    CONCEPT FORM · SUBMISSIONS DISABLED
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVATE DINING STRIP
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#6D3235] text-white">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-[40px]
            right-[2%]
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
          Celebrate
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-14 sm:px-10 md:px-14 lg:px-20 lg:py-16">

          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end lg:gap-16">

            <div>

              <div className="flex items-center gap-4">
                <span className="h-px w-9 bg-white/35" />

                <p className="text-[8px] tracking-[0.32em] text-white/50">
                  PRIVATE DINING
                </p>
              </div>

              <p
                className="mt-4 max-w-[240px] text-[15px] italic leading-[1.5] text-white/60"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Planning something a little more personal?
              </p>
            </div>

            <div>

              <h2
                className="max-w-[650px] text-[37px] font-normal leading-[1] tracking-[-0.04em] text-[#F8F2E9] sm:text-[45px] lg:text-[52px]"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                }}
              >
                Make the evening
                <br />

                <span className="italic text-white/65">
                  entirely your own.
                </span>
              </h2>

              <div className="mt-6 flex flex-col gap-5 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-[390px] text-[11px] font-light leading-[1.75] text-white/50 sm:text-[12px]">
                  Explore Sorella&apos;s imagined private dining
                  experience for celebrations, dinners and intimate
                  gatherings.
                </p>

                <Link
                  href="/preview/sorella/private-dining"
                  className="
                    inline-flex w-fit
                    items-center gap-4
                    rounded-full
                    border border-white/25
                    px-6 py-3.5
                    text-[8px]
                    tracking-[0.2em]
                    text-white/80
                  "
                >
                  EXPLORE PRIVATE DINING

                  <span className="text-[11px]">
                    ↗
                  </span>
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
            text-[110px]
            font-normal
            italic
            leading-none
            tracking-[-0.06em]
            text-[#9B887A]/[0.05]
            sm:text-[150px]
            lg:text-[190px]
          "
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          Sorella
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 lg:px-20">

          <p className="text-[8px] tracking-[0.32em] text-[#8B7B70]">
            SEE YOU SOON
          </p>

          <h2
            className="mx-auto mt-4 max-w-[700px] text-[40px] font-normal leading-[1] tracking-[-0.04em] text-[#352E29] sm:text-[48px] lg:text-[55px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            Join us
            <span className="italic text-[#78675B]"> at the table.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-[430px] text-[12px] font-light leading-[1.8] text-[#756A61] sm:text-[13px]">
            Dinner, a bottle of wine and nowhere else you need to be.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <Link
              href="/preview/sorella/menu"
              className="rounded-full border border-[#8D796B]/30 px-7 py-3.5 text-[8px] tracking-[0.2em] text-[#66584F]"
            >
              VIEW THE MENU
            </Link>

            <Link
              href="/preview/sorella#reserve"
              className="rounded-full bg-[#342D28] px-7 py-3.5 text-[8px] tracking-[0.2em] text-white"
            >
              RESERVE A TABLE
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#302923] text-[#F4EEE6]">

        <div className="mx-auto max-w-[1280px] px-6 py-10 sm:px-10 md:px-14 lg:px-20">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr]">

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