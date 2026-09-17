"use client";

import {
  ArrowRight,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);

  const treatments = [
    {
      number: "01",
      title: "Laser Hair Removal",
      description:
        "A smoother approach to your routine with professional laser hair removal treatments tailored to you.",
    },
    {
      number: "02",
      title: "Facials & Skincare",
      description:
        "Personalized skincare treatments designed to refresh, restore, and give your skin the attention it deserves.",
    },
    {
      number: "03",
      title: "Beauty & Self-Care",
      description:
        "Thoughtful beauty services in a space designed to make taking care of yourself feel effortless.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f2eb] text-[#251b17]">
      {/* HEADER */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-10 lg:px-14">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a94f18]/40">
              <span className="font-serif text-lg text-[#a94f18]">
                HLS
              </span>
            </div>

            <div className="hidden sm:block">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em]">
                House of Laser
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-[#7d7068]">
                & Spa
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            <a
              href="#treatments"
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              Treatments
            </a>

            <a
              href="#experience"
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              The Spa
            </a>

            <a
              href="#about"
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden rounded-full bg-[#173c32] px-6 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Book Now
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#251b17]/15 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mx-5 rounded-[24px] border border-[#251b17]/10 bg-[#f5f2eb] p-7 shadow-xl lg:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#treatments"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl"
              >
                Treatments
              </a>

              <a
                href="#experience"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl"
              >
                The Spa
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl"
              >
                Contact
              </a>

              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center rounded-full bg-[#173c32] px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-white"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-center px-6 pb-16 pt-32 md:px-10 lg:px-14"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#a94f18]/[0.06] blur-3xl" />

        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#a94f18]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#806f64]">
                Brooklyn, New York
              </p>
            </div>

            <h1 className="font-serif text-[clamp(4rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.055em]">
              Feel good
              <br />
              in your
              <span className="italic text-[#a94f18]"> skin.</span>
            </h1>

            <div className="mt-9 max-w-xl border-l border-[#a94f18]/40 pl-6">
              <p className="text-[15px] leading-7 text-[#62564f] md:text-base">
                Laser, skincare, and self-care in a space where beauty feels
                personal.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="group inline-flex items-center gap-5 rounded-full bg-[#173c32] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-0.5"
              >
                Book an Appointment

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center rounded-full border border-[#251b17]/20 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#251b17] hover:text-white"
              >
                Explore Treatments
              </a>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] bg-[#d9d0c4]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#173c32]/20" />

              <div className="absolute inset-0 flex items-center justify-center px-10 text-center">
                <div>
                  <p className="font-serif text-4xl italic text-[#173c32]/40">
                    House of Laser
                  </p>

                  <p className="mt-4 text-[9px] uppercase tracking-[0.28em] text-[#173c32]/40">
                    Spa Photography
                  </p>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 rounded-full bg-[#f5f2eb]/90 px-5 py-3 backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[0.2em]">
                  Laser · Skin · Self-Care
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -left-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#a94f18] text-center text-[#f5f2eb] md:-left-10 md:h-28 md:w-28">
              <p className="text-[9px] uppercase leading-4 tracking-[0.16em]">
                Brooklyn
                <br />
                Beauty
                <br />
                Studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE STRIP */}
      <section className="border-y border-[#251b17]/10 bg-[#eee8df]">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 px-6 py-7 text-center md:flex-row md:px-10 lg:px-14">
          <p className="text-[9px] uppercase tracking-[0.25em] text-[#776960]">
            Laser Hair Removal
          </p>

          <span className="hidden h-1 w-1 rounded-full bg-[#a94f18] md:block" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-[#776960]">
            Facials & Skincare
          </p>

          <span className="hidden h-1 w-1 rounded-full bg-[#a94f18] md:block" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-[#776960]">
            Beauty & Self-Care
          </p>

          <span className="hidden h-1 w-1 rounded-full bg-[#a94f18] md:block" />

          <p className="text-[9px] uppercase tracking-[0.25em] text-[#776960]">
            Brooklyn, New York
          </p>
        </div>
      </section>

      {/* TREATMENTS */}
      <section
        id="treatments"
        className="bg-[#f5f2eb] px-6 py-24 md:px-10 md:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#a94f18]" />

                <p className="text-[10px] uppercase tracking-[0.28em] text-[#806f64]">
                  Treatments
                </p>
              </div>

              <h2 className="mt-6 max-w-md font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-6xl">
                Your routine,
                <br />
                <span className="italic text-[#a94f18]">
                  elevated.
                </span>
              </h2>
            </div>

            <div className="lg:pt-5">
              {treatments.map((treatment) => (
                <div
                  key={treatment.number}
                  className="group grid gap-5 border-t border-[#251b17]/15 py-8 md:grid-cols-[70px_1fr_1fr_30px] md:items-center"
                >
                  <p className="text-[10px] tracking-[0.2em] text-[#a94f18]">
                    {treatment.number}
                  </p>

                  <h3 className="font-serif text-3xl tracking-[-0.02em] md:text-4xl">
                    {treatment.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-6 text-[#70625a]">
                    {treatment.description}
                  </p>

                  <ArrowRight
                    size={17}
                    className="hidden transition-transform group-hover:translate-x-1 md:block"
                  />
                </div>
              ))}

              <div className="border-t border-[#251b17]/15" />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="overflow-hidden bg-[#173c32] px-6 py-24 text-[#f5f2eb] md:px-10 md:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2px] bg-[#31584c]">
                <div className="flex h-full items-center justify-center px-10 text-center">
                  <div>
                    <Sparkles
                      size={25}
                      strokeWidth={1}
                      className="mx-auto text-[#d7b391]"
                    />

                    <p className="mt-6 font-serif text-4xl italic text-white/35">
                      The House of Laser
                    </p>

                    <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Interior Photography
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-4 aspect-square w-[42%] border-[10px] border-[#173c32] bg-[#cfc5b8] md:-right-8">
                <div className="flex h-full items-center justify-center p-5 text-center">
                  <p className="font-serif text-xl italic text-[#173c32]/50 md:text-2xl">
                    Facial Room
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#d7b391]">
                The Experience
              </p>

              <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                More than
                <br />
                an appointment.
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-white/65 md:text-base">
                A welcoming beauty space created for the moments you choose to
                spend on yourself. From laser treatments to skincare, every
                visit is centered around comfort, care, and your routine.
              </p>

              <div className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-white/15 pt-8">
                <div>
                  <p className="font-serif text-3xl text-[#d7b391]">
                    Brooklyn
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/45">
                    New York
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-[#d7b391]">
                    Personal
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/45">
                    Beauty & Care
                  </p>
                </div>
              </div>

              <a
                href="#book"
                className="group mt-10 inline-flex items-center gap-5 border-b border-[#d7b391]/60 pb-2 text-[10px] uppercase tracking-[0.2em]"
              >
                Plan Your Visit

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LASER FEATURE */}
      <section
        id="about"
        className="bg-[#f5f2eb] px-6 py-24 md:px-10 md:py-32 lg:px-14"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="order-2 lg:order-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#a94f18]">
                Laser Hair Removal
              </p>

              <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Less shaving.
                <br />

                <span className="italic text-[#a94f18]">
                  More you.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-sm leading-7 text-[#6e6058] md:text-base">
                Simplify your beauty routine with professional laser hair
                removal in a comfortable, welcoming environment.
              </p>

              <a
                href="#book"
                className="group mt-9 inline-flex items-center gap-5 rounded-full border border-[#251b17]/20 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#251b17] hover:text-white"
              >
                Book Laser

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative ml-auto aspect-[5/4] max-w-[720px] overflow-hidden bg-[#d8d0c5]">
                <div className="flex h-full items-center justify-center px-10 text-center">
                  <div>
                    <p className="font-serif text-4xl italic text-[#173c32]/35">
                      Laser Treatment
                    </p>

                    <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#173c32]/35">
                      Treatment Photography
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-y border-[#251b17]/10 bg-[#eee8df] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <Sparkles
            size={20}
            strokeWidth={1}
            className="mx-auto text-[#a94f18]"
          />

          <p className="mt-8 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
            Your beauty routine should feel
            <span className="italic text-[#a94f18]">
              {" "}like you.
            </span>
          </p>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#70625a]">
            Thoughtful treatments, a welcoming atmosphere, and time dedicated
            entirely to yourself.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#f5f2eb] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#a94f18]">
                Inside the House
              </p>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.04em] md:text-6xl">
                A space for <span className="italic">you.</span>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/houseoflaserspa/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em]"
            >
              <FaInstagram size={16} />
              @houseoflaserspa
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-12">
            <div className="aspect-[4/5] bg-[#c8beb1] md:col-span-5 md:aspect-auto md:min-h-[620px]">
              <div className="flex h-full items-center justify-center p-8 text-center">
                <p className="font-serif text-3xl italic text-[#173c32]/35">
                  Spa Interior
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:col-span-7">
              <div className="aspect-[16/9] bg-[#ded7ce]">
                <div className="flex h-full items-center justify-center p-8 text-center">
                  <p className="font-serif text-3xl italic text-[#173c32]/30">
                    Treatment Room
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#173c32]">
                  <div className="flex h-full items-center justify-center p-5 text-center">
                    <p className="font-serif text-2xl italic text-white/30">
                      Laser
                    </p>
                  </div>
                </div>

                <div className="aspect-square bg-[#b87348]">
                  <div className="flex h-full items-center justify-center p-5 text-center">
                    <p className="font-serif text-2xl italic text-white/40">
                      Skincare
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section
        id="book"
        className="relative overflow-hidden bg-[#a94f18] px-6 py-24 text-[#f5f2eb] md:px-10 md:py-32 lg:px-14"
      >
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />

        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/65">
            Your appointment is waiting
          </p>

          <h2 className="mx-auto mt-7 max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-8xl">
            Make time for
            <br />
            <span className="italic">yourself.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-white/70">
            Explore treatments and reserve your next visit to House of Laser &
            Spa.
          </p>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-5 rounded-full bg-[#f5f2eb] px-8 py-4 text-[10px] uppercase tracking-[0.2em] text-[#251b17]"
          >
            Book an Appointment

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-[#173c32] px-6 pb-10 pt-20 text-[#f5f2eb] md:px-10 lg:px-14"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="font-serif text-4xl">
                House of Laser & Spa
              </p>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Laser, skincare, and beauty treatments in Brooklyn, New York.
              </p>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#d7b391]">
                Visit
              </p>

              <div className="mt-5 flex items-start gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#d7b391]"
                />

                <p className="text-sm leading-6 text-white/65">
                  1690 E 14th St
                  <br />
                  Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#d7b391]">
                Follow
              </p>

              <a
                href="https://www.instagram.com/houseoflaserspa/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-3 text-sm text-white/65 transition-colors hover:text-white"
              >
                <FaInstagram size={16} />
                @houseoflaserspa
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-7 text-[8px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser & Spa</p>
            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </main>
  );
}