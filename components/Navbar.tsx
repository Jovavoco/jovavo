import Link from "next/link";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5 md:px-6 md:pt-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl overflow-hidden rounded-[1.6rem] border border-[#d8d0c5]/70 bg-[#f8f4ed]/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl md:rounded-full"
      >
        {/* Mobile navbar */}
        <div className="md:hidden">
          {/* Mobile top row */}
          <div className="flex items-center justify-between gap-3 px-4 py-3.5 sm:px-5 sm:py-4">
            <Link
              href="/"
              className="shrink-0 font-serif text-lg font-light tracking-[0.18em] text-[#1b1713] transition-opacity duration-300 hover:opacity-70 sm:text-xl sm:tracking-[0.2em]"
            >
              JOVAVO
            </Link>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#1b1713]/15 bg-[#1b1713] px-4 py-2.5 text-[9px] uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#2a241f] sm:px-5 sm:tracking-[0.18em]"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile navigation links */}
          <div className="border-t border-[#1b1713]/10 px-2 py-2">
            <div className="grid grid-cols-4 gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex min-h-11 items-center justify-center rounded-full px-1 text-center text-[9px] uppercase tracking-[0.08em] text-[#1b1713]/60 transition-all duration-300 hover:bg-[#1b1713]/5 hover:text-[#1b1713] sm:px-2 sm:tracking-[0.13em]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop navbar */}
        <div className="hidden items-center justify-between px-8 py-4 md:flex">
          <Link
            href="/"
            className="shrink-0 font-serif text-2xl font-light tracking-[0.25em] text-[#1b1713] transition-opacity duration-300 hover:opacity-70"
          >
            JOVAVO
          </Link>

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

          <Link
            href="/contact"
            className="shrink-0 rounded-full border border-[#1b1713]/15 bg-[#1b1713] px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a241f] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] lg:px-6 lg:text-[11px] lg:tracking-[0.28em]"
          >
            Start Project
          </Link>
        </div>
      </nav>
    </header>
  );
}