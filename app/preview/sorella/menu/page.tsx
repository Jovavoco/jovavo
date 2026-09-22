"use client";

import Link from "next/link";
import { useState } from "react";

/* =====================================================
   MENU DATA
===================================================== */

const antipasti = [
  {
    name: "Focaccia della Casa",
    description:
      "Warm rosemary focaccia, whipped ricotta, Sicilian olive oil",
    price: "12",
  },
  {
    name: "Burrata",
    description:
      "Heirloom tomato, basil, aged balsamic, extra virgin olive oil",
    price: "19",
  },
  {
    name: "Carciofi",
    description:
      "Crispy artichokes, pecorino romano, lemon, parsley",
    price: "17",
  },
  {
    name: "Polpo",
    description:
      "Charred octopus, gigante beans, tomato, oregano, salsa verde",
    price: "22",
  },
  {
    name: "Crudo di Tonno",
    description:
      "Yellowfin tuna, citrus, capers, Calabrian chile",
    price: "23",
  },
  {
    name: "Polpette",
    description:
      "Beef and pork meatballs, slow-cooked tomato, parmigiano",
    price: "18",
  },
];

const pasta = [
  {
    name: "Rigatoni alla Vodka",
    description:
      "San Marzano tomato, Calabrian chile, cream, parmigiano",
    price: "26",
  },
  {
    name: "Cacio e Pepe",
    description:
      "Tonnarelli, pecorino romano, toasted black pepper",
    price: "24",
  },
  {
    name: "Pappardelle al Ragù",
    description:
      "Slow-braised beef and pork, tomato, parmigiano",
    price: "29",
  },
  {
    name: "Ravioli di Ricotta",
    description:
      "House ricotta, brown butter, sage, lemon, parmigiano",
    price: "27",
  },
  {
    name: "Spaghetti alle Vongole",
    description:
      "Little neck clams, white wine, garlic, parsley, chile",
    price: "31",
  },
  {
    name: "Paccheri",
    description:
      "Maine lobster, cherry tomato, basil, touch of chile",
    price: "36",
  },
];

const secondi = [
  {
    name: "Branzino",
    description:
      "Mediterranean sea bass, roasted tomato, olive, caper, lemon",
    price: "38",
  },
  {
    name: "Pollo al Limone",
    description:
      "Roasted chicken, lemon, rosemary, natural jus",
    price: "32",
  },
  {
    name: "Salmone",
    description:
      "Roasted salmon, cannellini beans, escarole, salsa verde",
    price: "36",
  },
  {
    name: "Tagliata di Manzo",
    description:
      "Grilled New York strip, arugula, parmigiano, aged balsamic",
    price: "48",
  },
];

const contorni = [
  {
    name: "Patate Arrosto",
    description: "Crispy potatoes, rosemary, sea salt",
    price: "12",
  },
  {
    name: "Broccolini",
    description: "Garlic, lemon, Calabrian chile",
    price: "13",
  },
  {
    name: "Insalata Verde",
    description:
      "Little gem, herbs, parmigiano, lemon vinaigrette",
    price: "12",
  },
  {
    name: "Spinaci",
    description:
      "Wilted spinach, garlic, extra virgin olive oil",
    price: "12",
  },
];

const dolci = [
  {
    name: "Tiramisù",
    description: "Espresso, mascarpone, cocoa",
    price: "14",
  },
  {
    name: "Olive Oil Cake",
    description: "Citrus, mascarpone cream, pistachio",
    price: "13",
  },
  {
    name: "Panna Cotta",
    description: "Vanilla bean, seasonal fruit, amaretti",
    price: "13",
  },
  {
    name: "Affogato",
    description: "Vanilla gelato, espresso",
    price: "10",
  },
];

const cocktails = [
  {
    name: "Sorella Spritz",
    description: "Aperitivo, prosecco, blood orange",
    price: "17",
  },
  {
    name: "Amalfi",
    description: "Gin, limoncello, basil, lemon",
    price: "18",
  },
  {
    name: "Via Roma",
    description:
      "Bourbon, amaro, sweet vermouth, orange",
    price: "19",
  },
  {
    name: "Notte",
    description: "Espresso, vodka, coffee liqueur",
    price: "18",
  },
];

const wines = [
  {
    name: "Prosecco",
    description: "Veneto · NV",
    price: "15",
  },
  {
    name: "Pinot Grigio",
    description: "Friuli · 2025",
    price: "16",
  },
  {
    name: "Vermentino",
    description: "Sardegna · 2025",
    price: "17",
  },
  {
    name: "Chianti Classico",
    description: "Toscana · 2024",
    price: "18",
  },
  {
    name: "Etna Rosso",
    description: "Sicilia · 2024",
    price: "19",
  },
  {
    name: "Barbera d'Alba",
    description: "Piemonte · 2024",
    price: "20",
  },
];

type MenuItemType = {
  name: string;
  description: string;
  price: string;
};

/* =====================================================
   LIGHT MENU ITEM
===================================================== */

function MenuItem({
  name,
  description,
  price,
}: MenuItemType) {
  return (
    <article className="border-b border-[#AFA093]/35 py-6 sm:py-8">
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0 pr-4">
          <h3
            className="text-[22px] font-normal leading-[1.08] tracking-[-0.025em] text-[#332C27] sm:text-[24px] lg:text-[26px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {name}
          </h3>

          <p className="mt-3 max-w-[430px] text-[12px] font-light leading-[1.65] text-[#756A61] sm:text-[13px]">
            {description}
          </p>
        </div>

        <span
          className="shrink-0 pt-1 text-[16px] italic text-[#75665B]"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          {price}
        </span>
      </div>
    </article>
  );
}

/* =====================================================
   DARK MENU ITEM
===================================================== */

function DarkMenuItem({
  name,
  description,
  price,
}: MenuItemType) {
  return (
    <article className="border-b border-white/15 py-6 sm:py-8">
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0 pr-4">
          <h3
            className="text-[22px] font-normal leading-[1.08] tracking-[-0.025em] text-[#F7F2E9] sm:text-[24px] lg:text-[26px]"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {name}
          </h3>

          <p className="mt-3 max-w-[430px] text-[12px] font-light leading-[1.65] text-white/50 sm:text-[13px]">
            {description}
          </p>
        </div>

        <span
          className="shrink-0 pt-1 text-[16px] italic text-white/65"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
          }}
        >
          {price}
        </span>
      </div>
    </article>
  );
}

/* =====================================================
   THIN IMAGE HEADER
===================================================== */

function ImageHeader({
  image,
  alt,
  title,
  subtitle,
  dark = false,
  position = "center",
}: {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  dark?: boolean;
  position?: string;
}) {
  return (
    <div className="relative overflow-hidden bg-[#E9E0D5] sm:h-[270px] lg:h-[320px]">
      <img
        src={image}
        alt={alt}
        className="relative block h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full sm:object-cover"
        style={{
          objectPosition: position,
        }}
      />

      {/* SOFT OVERLAY */}

      <div
        className={`absolute inset-0 ${
          dark
            ? "bg-[#172015]/15"
            : "bg-[#F3EEE6]/5"
        }`}
      />

      {/* TITLE */}

      <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-6">
        <div className="text-center">
          <span
            className={`mx-auto block h-px w-12 ${
              dark
                ? "bg-white/45"
                : "bg-[#65584D]/40"
            }`}
          />

          <h2
            className={`mt-5 text-[44px] font-normal leading-none tracking-[-0.045em] sm:text-[56px] lg:text-[64px] ${
              dark
                ? "text-[#F8F3EA]"
                : "text-[#332C27]"
            }`}
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {title}
          </h2>

          <p
            className={`mt-3 text-[15px] italic sm:text-[17px] ${
              dark
                ? "text-white/75"
                : "text-[#756357]"
            }`}
            style={{
              fontFamily: '"Times New Roman", Times, serif',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   STANDARD MENU SECTION
   IMAGE FIRST → ITEMS SECOND
===================================================== */

function MenuSection({
  id,
  image,
  alt,
  title,
  subtitle,
  items,
  background = "#F3EEE6",
  imagePosition = "center",
}: {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  items: MenuItemType[];
  background?: string;
  imagePosition?: string;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-0"
      style={{
        backgroundColor: background,
      }}
    >
      {/* IMAGE */}

      <ImageHeader
        image={image}
        alt={alt}
        title={title}
        subtitle={subtitle}
        position={imagePosition}
      />

      {/* MENU ITEMS */}

      <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-x-24 md:grid-cols-2">
            {items.map((item) => (
              <MenuItem
                key={item.name}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PAGE
===================================================== */

export default function SorellaMenuPage() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#F3EEE6] text-[#352E29]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 border-b border-[#CFC3B6]/40 bg-[#F3EEE6]">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-10 sm:py-7 md:px-14 lg:px-20">
          <Link href="/preview/sorella">
            <span
              className="block text-[23px] tracking-[0.25em] text-[#332D28] sm:text-[26px] sm:tracking-[0.28em]"
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
              className="border-b border-[#39312B] pb-2 text-[7px] tracking-[0.28em]"
            >
              MENU
            </Link>

            <Link
              href="/preview/sorella#story"
              className="text-[7px] tracking-[0.28em] text-[#746A61] transition-colors duration-300 hover:text-[#332D28]"
            >
              OUR STORY
            </Link>

            <Link
              href="/preview/sorella/private-dining"
              className="text-[7px] tracking-[0.28em] text-[#746A61] transition-colors duration-300 hover:text-[#332D28]"
            >
              PRIVATE DINING
            </Link>


            <Link
              href="/preview/sorella/contact"
              className="text-[7px] tracking-[0.28em] text-[#746A61] transition-colors duration-300 hover:text-[#332D28]"
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
            onClick={() =>
              setMobileOpen((open) => !open)
            }
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
                onClick={() =>
                  setMobileOpen(false)
                }
                className="text-[8px] tracking-[0.27em]"
              >
                MENU
              </Link>

              <Link
                href="/preview/sorella#story"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                OUR STORY
              </Link>

              <Link
                href="/preview/sorella/private-dining"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                PRIVATE DINING
              </Link>

              <Link
                href="/preview/sorella/contact"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="text-[8px] tracking-[0.27em] text-[#756A61]"
              >
                CONTACT
              </Link>

              <Link
                href="/preview/sorella#reserve"
                onClick={() =>
                  setMobileOpen(false)
                }
                className="mt-2 w-fit rounded-full bg-[#332D28] px-7 py-3.5 text-[7px] tracking-[0.28em] text-white"
              >
                RESERVE
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E9E0D5] sm:h-[430px] lg:h-[490px]">
        <img
          src="/previews/sorella/sorella-menu-hero.png"
          alt="Sorella dinner table"
          className="relative block h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-center"
        />

        <div className="absolute inset-0 bg-[#F3EEE6]/5" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-[760px] text-center">
            <p className="mb-6 text-[7px] tracking-[0.42em] text-[#5E5249]/75">
              DINNER · NIGHTLY
            </p>

            <h1
              className="text-[46px] font-normal leading-[0.9] tracking-[-0.05em] text-[#302923] min-[390px]:text-[52px] sm:text-[76px] lg:text-[92px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              The Menu
            </h1>

            <div className="mx-auto my-6 h-px w-11 bg-[#756559]/50" />

            <p
              className="text-[15px] font-semibold italic leading-[1.5] text-[#4A3D35] sm:text-[18px] sm:font-normal sm:text-[#62534A]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Familiar Italian cooking, made for the middle of the table.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAV
          LARGER SERIF BUTTONS
      ===================================================== */}

      <section className="border-y border-[#CEC2B6]/45 bg-[#F3EEE6]">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-6 gap-y-4 px-5 py-6 sm:gap-x-12 sm:gap-y-5 sm:px-6 sm:py-8 lg:gap-x-14">
          {[
            ["antipasti", "Antipasti"],
            ["pasta", "Pasta"],
            ["secondi", "Secondi"],
            ["contorni", "Contorni"],
            ["dolci", "Dolci"],
            ["drinks", "Cocktails & Wine"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className="group relative text-[15px] font-normal tracking-[-0.01em] text-[#6F6258] transition-colors duration-300 hover:text-[#302923] sm:text-[17px] lg:text-[18px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              <span className="relative">
                {label}

                <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#75665B] transition-all duration-300 group-hover:w-full" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          ANTIPASTI
      ===================================================== */}

      <MenuSection
        id="antipasti"
        image="/previews/sorella/sorella-antipasti.jpg"
        alt="Antipasti table"
        title="Antipasti"
        subtitle="To begin"
        items={antipasti}
        background="#F3EEE6"
      />

      {/* =====================================================
          PASTA
      ===================================================== */}

      <MenuSection
        id="pasta"
        image="/previews/sorella/sorella-pasta.jpg"
        alt="Fresh Italian pasta"
        title="Pasta"
        subtitle="Made in house daily"
        items={pasta}
        background="#EAE0D5"
      />

      {/* =====================================================
          SECONDI
      ===================================================== */}

      <MenuSection
        id="secondi"
        image="/previews/sorella/sorella-secondi.jpg"
        alt="Italian secondi"
        title="Secondi"
        subtitle="From the kitchen"
        items={secondi}
        background="#F3EEE6"
      />

      {/* =====================================================
          CONTORNI
      ===================================================== */}

      <MenuSection
        id="contorni"
        image="/previews/sorella/sorella-contorni.jpg"
        alt="Italian side dishes"
        title="Contorni"
        subtitle="For the table"
        items={contorni}
        background="#E8DED2"
      />

      {/* =====================================================
          DOLCI
      ===================================================== */}

      <MenuSection
        id="dolci"
        image="/previews/sorella/sorella-dolci.jpg"
        alt="Italian desserts"
        title="Dolci"
        subtitle="Something sweet"
        items={dolci}
        background="#F3EEE6"
      />

      {/* =====================================================
          COCKTAILS & WINE
      ===================================================== */}

      <section
        id="drinks"
        className="scroll-mt-0 bg-[#555D4B]"
      >
        {/* IMAGE FIRST */}

        <ImageHeader
          image="/previews/sorella/sorella-drinks.jpg"
          alt="Cocktails and wine at Sorella"
          title="Cocktails & Wine"
          subtitle="Aperitivo to after dinner"
          dark
        />

        {/* DRINK ITEMS */}

        <div className="px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-20 lg:py-20">
          <div className="mx-auto max-w-[1120px]">
            <div className="grid gap-16 md:grid-cols-2 md:gap-24">

              {/* COCKTAILS */}

              <div>
                <div className="mb-3 flex items-center gap-4">
                  <p
                    className="shrink-0 text-[15px] italic text-white/65"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Cocktails
                  </p>

                  <span className="h-px flex-1 bg-white/15" />
                </div>

                {cocktails.map((item) => (
                  <DarkMenuItem
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>

              {/* WINE */}

              <div>
                <div className="mb-3 flex items-center gap-4">
                  <p
                    className="shrink-0 text-[15px] italic text-white/65"
                    style={{
                      fontFamily: '"Times New Roman", Times, serif',
                    }}
                  >
                    Wine · By the Glass
                  </p>

                  <span className="h-px flex-1 bg-white/15" />
                </div>

                {wines.map((item) => (
                  <DarkMenuItem
                    key={item.name}
                    {...item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#E9E0D5] sm:h-[320px] lg:h-[370px]">
        <img
          src="/previews/sorella/sorella-menu-closing.jpg"
          alt="Sorella table after dinner"
          className="relative block h-auto w-full object-contain sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-center"
        />

        <div className="absolute inset-0 bg-[#2B211A]/[0.04]" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-[620px] text-center">
            <p className="mb-4 text-[8px] tracking-[0.32em] text-[#66584E]/70">
              FROM OUR TABLE TO YOURS
            </p>

            <h2
              className="text-[42px] italic leading-none text-[#5F5148] sm:text-[54px]"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Buon appetito.
            </h2>

            <div className="mx-auto my-5 h-px w-10 bg-[#75675B]/50" />

            <p className="mx-auto max-w-[540px] text-[8px] leading-[2] tracking-[0.14em] text-[#74665B] sm:text-[9px]">
              MENU ITEMS ARE SUBJECT TO SEASONAL AVAILABILITY ·
              PLEASE INFORM YOUR SERVER OF ANY ALLERGIES OR
              DIETARY RESTRICTIONS
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#302923] px-6 pb-9 pt-16 text-white sm:px-10 md:px-14 lg:px-20">
        <div className="mx-auto max-w-[1250px]">

          {/* MAIN FOOTER */}

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

          {/* FOOTER BOTTOM */}

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