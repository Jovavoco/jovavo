import Link from "next/link";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-6">
      {/* MOBILE NAVBAR */}
      <div className="mx-auto w-full max-w-md md:hidden">
        {/* MOBILE TOP BAR */}
        <nav
          aria-label="Mobile navigation"
          className="pointer-events-auto flex items-center justify-between gap-3 rounded-full border border-white/30 bg-[#f8f4ed]/90 px-4 py-3 shadow-[0_12px_35px_rgba(27,23,19,0.12)] backdrop-blur-2xl"
        >
          <Link
            href="/"
            aria-label="Jovavo home"
            className="shrink-0 font-serif text-lg font-light tracking-[0.18em] text-[#1b1713] transition-opacity duration-300 hover:opacity-70"
          >
            JOVAVO
          </Link>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#1b1713] px-4 py-2.5 text-[9px] uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#2a241f] active:scale-[0.98]"
          >
            Start Project
          </Link>
        </nav>

        {/* MOBILE PAGE LINKS */}
        <div className="pointer-events-auto mx-auto mt-2 w-[calc(100%-1rem)] rounded-full border border-white/25 bg-[#f8f4ed]/88 p-1.5 shadow-[0_10px_30px_rgba(27,23,19,0.1)] backdrop-blur-2xl">
          <div className="grid grid-cols-4 gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex min-h-10 items-center justify-center rounded-full px-1 text-center text-[9px] uppercase tracking-[0.08em] text-[#1b1713]/60 transition-all duration-300 hover:bg-white/70 hover:text-[#1b1713] active:bg-white min-[390px]:tracking-[0.11em]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP NAVBAR */}
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto mx-auto hidden max-w-7xl items-center justify-between rounded-full border border-[#d8d0c5]/70 bg-[#f8f4ed]/70 px-8 py-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:flex"
      >
        {/* DESKTOP LOGO */}
        <Link
          href="/"
          aria-label="Jovavo home"
          className="shrink-0 font-serif text-2xl font-light tracking-[0.25em] text-[#1b1713] transition-opacity duration-300 hover:opacity-70"
        >
          JOVAVO
        </Link>

        {/* DESKTOP LINKS */}
        <div className="flex items-center gap-7 lg:gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-[10px] uppercase tracking-[0.22em] text-[#1b1713]/65 transition-colors duration-300 hover:text-[#1b1713] lg:text-[11px] lg:tracking-[0.28em]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#1b1713] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="shrink-0 rounded-full border border-[#1b1713]/15 bg-[#1b1713] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a241f] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:px-6 lg:text-[11px] lg:tracking-[0.28em]"
        >
          Start Project
        </Link>
      </nav>
    </header>
  );
}