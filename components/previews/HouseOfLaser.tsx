"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";

export default function HouseOfLaser() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#30231E]">
      {/* ======================================================
          TOP BAR
      ====================================================== */}
      <div className="bg-[#A94E17] px-5 py-2.5 text-center">
        <p className="text-[8px] uppercase tracking-[0.28em] text-white/90 sm:text-[9px]">
          House of Laser & Spa · Brooklyn, New York
        </p>
      </div>

      {/* ======================================================
          NAVIGATION
      ====================================================== */}
      <header className="relative z-50 border-b border-[#30231E]/10 bg-[#FBF8F3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[92px] max-w-[1450px] items-center justify-between px-5 md:px-8 lg:px-12">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src="/previews/house-of-laser/logo.jpg"
              alt="House of Laser & Spa"
              className="h-[62px] w-auto max-w-[155px] object-contain"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#services"
              className="text-[9px] uppercase tracking-[0.18em] transition-colors hover:text-[#A94E17]"
            >
              Services
            </a>

            <a
              href="#laser"
              className="text-[9px] uppercase tracking-[0.18em] transition-colors hover:text-[#A94E17]"
            >
              Laser
            </a>

            <a
              href="#experience"
              className="text-[9px] uppercase tracking-[0.18em] transition-colors hover:text-[#A94E17]"
            >
              Our Spa
            </a>

            <a
              href="#contact"
              className="text-[9px] uppercase tracking-[0.18em] transition-colors hover:text-[#A94E17]"
            >
              Contact
            </a>

            <a
              href="#book"
              className="group inline-flex items-center gap-3 rounded-full bg-[#A94E17] px-6 py-3.5 text-[9px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#853B12]"
            >
              Book Now

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#30231E]/15 lg:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-t border-[#30231E]/10 bg-[#FBF8F3] px-6 pb-8 shadow-xl lg:hidden">
            <nav className="mx-auto flex max-w-xl flex-col">
              {[
                ["Services", "#services"],
                ["Laser Hair Removal", "#laser"],
                ["Our Spa", "#experience"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#30231E]/10 py-5 font-serif text-[23px]"
                >
                  {label}
                </a>
              ))}

              <a
                href="#book"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#A94E17] px-6 py-4 text-[9px] uppercase tracking-[0.2em] text-white"
              >
                Book an Appointment
                <ArrowRight size={13} />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ======================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative overflow-hidden px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#A94E17]/[0.045] blur-3xl" />

        <div className="relative mx-auto grid max-w-[1450px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* HERO TEXT */}
          <div className="mx-auto max-w-[580px] text-center lg:mx-0 lg:text-left">
            <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-7 bg-[#B89A68]" />

              <p className="text-[8px] uppercase tracking-[0.3em] text-[#8A7466]">
                Laser · Skin · Beauty
              </p>

              <span className="h-px w-7 bg-[#B89A68] lg:hidden" />
            </div>

            <h1 className="font-serif text-[clamp(3.5rem,5.5vw,6.2rem)] leading-[0.96] tracking-[-0.04em]">
              Welcome to
              <br />
              <span className="italic text-[#A94E17]">
                House of Laser.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-[470px] text-[14px] leading-7 text-[#75665D] md:text-[15px] lg:mx-0">
              Laser hair removal, skincare, and beauty treatments in a space
              made to feel warm, personal, and completely your own.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#book"
                className="group inline-flex items-center gap-4 rounded-full bg-[#A94E17] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#853B12]"
              >
                Book Your Visit

                <ArrowRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-[#30231E]/20 px-7 py-4 text-[9px] uppercase tracking-[0.2em] transition-colors hover:border-[#A94E17] hover:text-[#A94E17]"
              >
                Explore Services
              </a>
            </div>

            <a
              href="#services"
              className="mt-10 hidden items-center gap-2 text-[8px] uppercase tracking-[0.23em] text-[#8A7B72] lg:inline-flex"
            >
              Discover More
              <ChevronDown size={12} />
            </a>
          </div>

          {/* HERO PHOTO */}
          <div className="relative mx-auto w-full max-w-[780px]">
            <div className="relative overflow-hidden rounded-[30px] bg-[#E7DED3] p-2.5 shadow-[0_25px_80px_rgba(48,35,30,0.11)] md:p-3">
              <div className="relative h-[480px] overflow-hidden rounded-[23px] sm:h-[580px] lg:h-[670px]">
                <img
                  src="/previews/house-of-laser/waiting-area.jpg"
                  alt="House of Laser & Spa waiting area"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#30231E]/30 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-white/70">
                    Welcome In
                  </p>

                  <p className="mt-1.5 font-serif text-2xl italic text-white">
                    House of Laser & Spa
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-5 rounded-[18px] border border-[#B89A68]/25 bg-[#FBF8F3] px-5 py-4 shadow-[0_12px_40px_rgba(48,35,30,0.12)] sm:left-10">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={14}
                  strokeWidth={1.4}
                  className="text-[#A94E17]"
                />

                <div>
                  <p className="font-serif text-[18px] italic text-[#A94E17]">
                    Your beauty ritual.
                  </p>

                  <p className="mt-1 text-[7px] uppercase tracking-[0.22em] text-[#8A7A70]">
                    Brooklyn, New York
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          INTRO STRIP
      ====================================================== */}
      <section className="px-5 pb-20 pt-8 md:px-8 md:pb-24 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 overflow-hidden rounded-[22px] border border-[#30231E]/10 bg-white/35 sm:grid-cols-3">
          {[
            "Laser Hair Removal",
            "Facials & Skincare",
            "Beauty & Self-Care",
          ].map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center px-5 py-5 ${
                index !== 2
                  ? "border-b border-[#30231E]/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="text-center text-[8px] uppercase tracking-[0.23em] text-[#77685F]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          SERVICES
      ====================================================== */}
      <section
        id="services"
        className="bg-[#F1E9DE] px-5 py-20 md:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-[1300px]">
          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A94E17]">
              Our Services
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-[54px]">
              Everything you need to
              <br className="hidden sm:block" />
              <span className="italic text-[#A94E17]">
                {" "}
                feel your best.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-sm leading-7 text-[#77685F]">
              Beauty and self-care treatments personalized around you, all in
              the House of Laser setting.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {/* LASER */}
            <a
              href="#laser"
              className="group rounded-[24px] border border-[#30231E]/10 bg-[#FBF8F3] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(48,35,30,0.08)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[42px] italic text-[#A94E17]/25">
                  01
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#30231E]/15 transition-colors group-hover:border-[#A94E17] group-hover:bg-[#A94E17] group-hover:text-white">
                  <ArrowRight size={13} />
                </div>
              </div>

              <h3 className="mt-10 font-serif text-[29px] tracking-[-0.025em]">
                Laser Hair Removal
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#786A61]">
                Personalized laser treatments designed to fit comfortably into
                your beauty routine.
              </p>

              <p className="mt-8 text-[8px] uppercase tracking-[0.2em] text-[#A94E17]">
                Discover Laser
              </p>
            </a>

            {/* SKINCARE */}
            <a
              href="#book"
              className="group rounded-[24px] border border-[#30231E]/10 bg-[#FBF8F3] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(48,35,30,0.08)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[42px] italic text-[#A94E17]/25">
                  02
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#30231E]/15 transition-colors group-hover:border-[#A94E17] group-hover:bg-[#A94E17] group-hover:text-white">
                  <ArrowRight size={13} />
                </div>
              </div>

              <h3 className="mt-10 font-serif text-[29px] tracking-[-0.025em]">
                Facials & Skincare
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#786A61]">
                Take a little time for your skin with treatments in a calm,
                welcoming environment.
              </p>

              <p className="mt-8 text-[8px] uppercase tracking-[0.2em] text-[#A94E17]">
                Explore Skincare
              </p>
            </a>

            {/* BEAUTY */}
            <a
              href="#book"
              className="group rounded-[24px] border border-[#30231E]/10 bg-[#FBF8F3] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(48,35,30,0.08)]"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-[42px] italic text-[#A94E17]/25">
                  03
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#30231E]/15 transition-colors group-hover:border-[#A94E17] group-hover:bg-[#A94E17] group-hover:text-white">
                  <ArrowRight size={13} />
                </div>
              </div>

              <h3 className="mt-10 font-serif text-[29px] tracking-[-0.025em]">
                Beauty & Self-Care
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#786A61]">
                Beauty services brought together in one warm, personal
                destination.
              </p>

              <p className="mt-8 text-[8px] uppercase tracking-[0.2em] text-[#A94E17]">
                View Services
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          SPA EXPERIENCE
      ====================================================== */}
      <section
        id="experience"
        className="relative overflow-hidden bg-[#304A3D] px-5 py-20 text-white md:px-8 md:py-28 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-[330px] w-[330px] rounded-full border border-[#D5B88F]/15" />

        <div className="pointer-events-none absolute -right-10 -top-10 h-[210px] w-[210px] rounded-full border border-[#D5B88F]/15" />

        <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* TEXT */}
          <div className="max-w-[520px]">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#D5B88F]">
              The House of Laser Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.03em] md:text-[55px]">
              Beauty should feel
              <br />
              <span className="italic text-[#D5B88F]">
                like an experience.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/65">
              House of Laser brings together beauty, self-care, and a warm,
              distinctive atmosphere designed to make every visit feel like
              time set aside for you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {["Warm", "Personal", "Welcoming"].map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  {index !== 0 && (
                    <span className="text-[8px] text-[#D5B88F]">✦</span>
                  )}

                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/60">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-[#D5B88F]/50 px-6 py-3.5 text-[8px] uppercase tracking-[0.2em] text-[#E8D4B7] transition-colors hover:bg-[#D5B88F] hover:text-[#304A3D]"
            >
              Plan Your Visit

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* WAITING AREA */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-2.5">
              <div className="relative h-[430px] overflow-hidden rounded-[21px] sm:h-[520px]">
                <img
                  src="/previews/house-of-laser/waiting-area.jpg"
                  alt="Inside House of Laser & Spa"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#173127]/40 via-transparent to-transparent" />
              </div>
            </div>

            <div className="absolute -bottom-5 right-5 rounded-[17px] bg-[#FBF8F3] px-5 py-4 text-[#30231E] shadow-xl sm:right-8">
              <p className="text-[7px] uppercase tracking-[0.22em] text-[#8C796C]">
                Inside the Spa
              </p>

              <p className="mt-1 font-serif text-xl italic text-[#A94E17]">
                Make yourself at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LASER FEATURE
      ====================================================== */}
      <section
        id="laser"
        className="px-5 py-20 md:px-8 md:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LASER PHOTO */}
          <div className="relative mx-auto w-full max-w-[650px]">
            <div className="overflow-hidden rounded-[30px] bg-[#EFE7DC] p-2.5">
              <div className="h-[500px] overflow-hidden rounded-[22px] sm:h-[610px]">
                <img
                  src="/previews/house-of-laser/laser.jpg"
                  alt="Laser hair removal treatment at House of Laser & Spa"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -bottom-5 left-5 rounded-[18px] border border-[#B89A68]/25 bg-[#FBF8F3] px-5 py-4 shadow-lg sm:left-8">
              <p className="text-[7px] uppercase tracking-[0.22em] text-[#89766B]">
                House of Laser
              </p>

              <p className="mt-1 font-serif text-xl italic text-[#A94E17]">
                Laser Hair Removal
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div className="mx-auto max-w-[500px] lg:mx-0">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A94E17]">
              Laser Hair Removal
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.03em] md:text-[55px]">
              Make smooth part of
              <br />
              <span className="italic text-[#A94E17]">
                your routine.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#76675E]">
              Professional laser hair removal in a comfortable environment,
              with an experience centered around you and your beauty routine.
            </p>

            <div className="mt-8 border-y border-[#30231E]/10">
              {[
                "Personalized experience",
                "Comfortable treatment setting",
                "Convenient Brooklyn location",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-[#30231E]/10 py-4 last:border-b-0"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F0E8DD] text-[8px] text-[#A94E17]">
                    ✦
                  </span>

                  <p className="text-[9px] uppercase tracking-[0.14em] text-[#62554E]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#A94E17] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#853B12]"
            >
              Book Laser

              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          SKINCARE
          NO EXTRA PHOTO NEEDED
      ====================================================== */}
      <section className="bg-[#F1E9DE] px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A94E17]">
              Facials & Skincare
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-[52px]">
              A little time
              <br />
              <span className="italic text-[#A94E17]">
                for your skin.
              </span>
            </h2>

            <p className="mt-6 max-w-[450px] text-sm leading-7 text-[#77685F]">
              Step away from your routine and give your skin a little extra
              attention with facial and skincare treatments.
            </p>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.2em] text-[#A94E17]"
            >
              Explore Skincare

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* GRAPHIC PANEL */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#A94E17] px-8 py-14 text-white md:px-14 md:py-16">
            <div className="absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full border border-white/15" />

            <div className="absolute -right-8 -top-8 h-[180px] w-[180px] rounded-full border border-white/15" />

            <Sparkles
              size={18}
              strokeWidth={1.3}
              className="text-[#F0D6BF]"
            />

            <p className="relative mt-8 max-w-xl font-serif text-3xl leading-[1.15] md:text-[42px]">
              Your beauty routine should feel like
              <span className="italic text-[#F2D7C0]">
                {" "}
                time for yourself.
              </span>
            </p>

            <div className="relative mt-10 h-px w-full bg-white/20" />

            <div className="relative mt-6 flex items-center justify-between gap-5">
              <div>
                <p className="text-[8px] uppercase tracking-[0.23em] text-white/60">
                  House of Laser & Spa
                </p>

                <p className="mt-2 font-serif text-xl italic">
                  Skin · Beauty · Self-Care
                </p>
              </div>

              <span className="font-serif text-4xl italic text-white/20">
                HLS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LOGO / BRAND FEATURE
      ====================================================== */}
      <section className="px-5 py-20 md:px-8 md:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2">
          {/* ACTUAL LOGO */}
          <div className="flex min-h-[340px] items-center justify-center rounded-[28px] border border-[#30231E]/10 bg-white px-8 py-10">
            <img
              src="/previews/house-of-laser/logo.jpg"
              alt="House of Laser & Spa logo"
              className="max-h-[260px] w-auto max-w-full object-contain"
            />
          </div>

          <div className="max-w-[470px] lg:pl-8">
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#A94E17]">
              House of Laser & Spa
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.06] tracking-[-0.03em] md:text-[50px]">
              Beauty with a
              <br />
              <span className="italic text-[#A94E17]">
                little personality.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#77685F]">
              A warm Brooklyn beauty destination bringing laser, skincare, and
              self-care together under one roof.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-4 border-b border-[#A94E17]/40 pb-2 text-[8px] uppercase tracking-[0.2em] text-[#A94E17]"
            >
              Visit House of Laser

              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          BOOKING CTA
      ====================================================== */}
      <section
        id="book"
        className="px-5 pb-20 md:px-8 md:pb-28 lg:px-12"
      >
        <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[32px] bg-[#A94E17] px-6 py-16 text-center text-white md:px-12 md:py-20">
          <div className="pointer-events-none absolute -left-20 -top-20 h-[280px] w-[280px] rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-[340px] w-[340px] rounded-full border border-white/10" />

          <div className="relative">
            <Sparkles
              size={17}
              strokeWidth={1.3}
              className="mx-auto text-[#F2D7C0]"
            />

            <p className="mt-5 text-[8px] uppercase tracking-[0.28em] text-white/65">
              Your Next Appointment
            </p>

            <h2 className="mx-auto mt-5 max-w-[760px] font-serif text-4xl leading-[1.04] tracking-[-0.03em] md:text-[58px]">
              Make a little time
              <br />
              <span className="italic text-[#F2D7C0]">
                for yourself.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[470px] text-sm leading-7 text-white/70">
              Find the treatment that fits your routine and plan your next
              visit to House of Laser & Spa.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FBF8F3] px-7 py-4 text-[9px] uppercase tracking-[0.2em] text-[#A94E17]"
            >
              Book an Appointment

              <ArrowRight
                size={13}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================
          FOOTER
      ====================================================== */}
      <footer
        id="contact"
        className="bg-[#30231E] px-5 pb-8 pt-16 text-[#FBF8F3] md:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-[1350px]">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
            {/* BRAND */}
            <div>
              <div className="inline-block rounded-[14px] bg-[#FBF8F3] p-3">
                <img
                  src="/previews/house-of-laser/logo.jpg"
                  alt="House of Laser & Spa"
                  className="h-[62px] w-auto max-w-[160px] object-contain"
                />
              </div>

              <p className="mt-5 max-w-[350px] text-sm leading-7 text-white/50">
                Laser, skincare, beauty, and self-care in Brooklyn, New York.
              </p>
            </div>

            {/* LOCATION */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#D7B894]">
                Visit
              </p>

              <div className="mt-5 flex items-start gap-3">
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#D7B894]"
                />

                <p className="text-sm leading-6 text-white/55">
                  1690 E 14th St
                  <br />
                  Unit 2
                  <br />
                  Brooklyn, NY 11229
                </p>
              </div>
            </div>

            {/* CONNECT */}
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#D7B894]">
                Connect
              </p>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/houseoflaserspa/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  @houseoflaserspa
                </a>

                <a
                  href="tel:+19298339197"
                  className="inline-flex items-center gap-3 text-sm text-white/55 transition-colors hover:text-white"
                >
                  <Phone size={14} strokeWidth={1.6} />
                  (929) 833-9197
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-7 text-[7px] uppercase tracking-[0.2em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>House of Laser & Spa</p>
            <p>Brooklyn, New York</p>
          </div>
        </div>
      </footer>
    </main>
  );
}