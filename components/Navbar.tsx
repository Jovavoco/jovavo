"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* =========================================================
     NAVBAR COLOR LOGIC

     HOME PAGE:
     - White initially because the hero is dark
     - Black after scrolling because navbar becomes cream

     ALL OTHER PAGES:
     - Black initially because backgrounds are light
     - Black after scrolling
  ========================================================= */

  const isHomePage = pathname === "/";

  const useWhiteNav =
    isHomePage && !scrolled && !menuOpen;

  /* =========================================================
     SCROLL STATE
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================================
     CLOSE MOBILE MENU WHEN PAGE CHANGES
  ========================================================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* =====================================================
          DESKTOP NAVIGATION
      ===================================================== */}

      <div
        className={`pointer-events-auto hidden transition-all duration-500 md:block ${
          scrolled
            ? "border-b border-[#1b1713]/10 bg-[#f8f5ef]/92 shadow-[0_8px_30px_rgba(27,23,19,0.04)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-8 transition-all duration-500 lg:px-12 xl:px-16 ${
            scrolled
              ? "h-[76px]"
              : "h-[96px]"
          }`}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            aria-label="Jovavo home"
            className={`shrink-0 font-serif text-[24px] font-light tracking-[0.12em] transition-all duration-500 hover:opacity-60 ${
              useWhiteNav
                ? "text-white"
                : "text-[#1b1713]"
            }`}
          >
            JOVAVO
          </Link>

          {/* =================================================
              CENTER LINKS
          ================================================= */}

          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8 lg:gap-10 xl:gap-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                  useWhiteNav
                    ? "text-white/65 hover:text-white"
                    : "text-[#1b1713]/60 hover:text-[#1b1713]"
                }`}
              >
                {item.name}

                <span
                  className={`absolute bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    useWhiteNav
                      ? "bg-white"
                      : "bg-[#1b1713]"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* =================================================
              CONSULTATION CTA
          ================================================= */}

          <Link
            href="/consultation"
            className={`group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border px-5 py-3 text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 lg:px-6 lg:text-[10px] ${
              useWhiteNav
                ? "border-white/45 bg-white/[0.04] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-[#1b1713]"
                : "border-[#1b1713] bg-[#1b1713] text-white hover:-translate-y-0.5 hover:bg-[#302a24]"
            }`}
          >
            Book a Consultation

            <ArrowUpRight
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div className="pointer-events-auto md:hidden">
        {/* =================================================
            MOBILE TOP BAR
        ================================================= */}

        <div
          className={`transition-all duration-500 ${
            scrolled || menuOpen
              ? "border-b border-[#1b1713]/10 bg-[#f8f5ef]/95 backdrop-blur-xl"
              : useWhiteNav
                ? "bg-gradient-to-b from-black/30 to-transparent"
                : "bg-transparent"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex h-[76px] items-center justify-between px-5"
          >
            {/* =================================================
                MOBILE LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="Jovavo home"
              onClick={() => setMenuOpen(false)}
              className={`font-serif text-[21px] font-light tracking-[0.12em] transition-colors duration-500 ${
                useWhiteNav
                  ? "text-white"
                  : "text-[#1b1713]"
              }`}
            >
              JOVAVO
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen((open) => !open)
              }
              className={`flex h-10 items-center justify-center gap-2 rounded-full border px-4 text-[9px] font-medium uppercase tracking-[0.16em] transition-all duration-300 ${
                useWhiteNav
                  ? "border-white/35 bg-white/[0.04] text-white backdrop-blur-sm"
                  : "border-[#1b1713]/15 text-[#1b1713] hover:border-[#1b1713]/30"
              }`}
            >
              {menuOpen ? (
                <>
                  Close

                  <X
                    size={14}
                    strokeWidth={1.5}
                  />
                </>
              ) : (
                <>
                  Menu

                  <Menu
                    size={14}
                    strokeWidth={1.5}
                  />
                </>
              )}
            </button>
          </nav>
        </div>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`overflow-hidden border-b border-[#1b1713]/10 bg-[#f8f5ef]/98 backdrop-blur-xl transition-all duration-500 ${
            menuOpen
              ? "max-h-[520px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-7 pt-3">
            {/* =============================================
                LINKS
            ============================================= */}

            <div className="border-t border-[#1b1713]/10">
              {navigation.map(
                (item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="group flex items-center justify-between border-b border-[#1b1713]/10 py-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-medium tracking-[0.15em] text-[#1b1713]/30">
                        0{index + 1}
                      </span>

                      <span className="font-serif text-[1.65rem] font-light tracking-[-0.02em] text-[#1b1713]">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#1b1713]/35 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                )
              )}
            </div>

            {/* =============================================
                CONSULTATION CTA
            ============================================= */}

            <Link
              href="/consultation"
              onClick={() =>
                setMenuOpen(false)
              }
              className="group mt-6 flex w-full items-center justify-between rounded-full bg-[#1b1713] px-6 py-4 text-white transition-all duration-300 active:scale-[0.99]"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.16em]">
                Book a Consultation
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}