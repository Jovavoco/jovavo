import Link from "next/link";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#d8d0c5]/70 bg-[#f8f4ed]/90 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:px-8 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="shrink-0 font-serif text-lg font-light tracking-[0.16em] text-[#1b1713] transition-opacity duration-300 hover:opacity-70 md:text-2xl md:tracking-[0.25em]"
        >
          JOVAVO
        </Link>

        {/* Mobile navigation */}
        <div className="flex items-center gap-1 md:hidden">
          {navigation.slice(0, 3).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-full px-2 py-2 text-[8px] uppercase tracking-[0.08em] text-[#1b1713]/65 transition hover:bg-[#1b1713]/5 hover:text-[#1b1713] min-[390px]:px-3 min-[390px]:text-[9px]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
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

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden shrink-0 rounded-full border border-[#1b1713]/15 bg-[#1b1713] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a241f] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] md:inline-flex"
        >
          Start Project
        </Link>
      </nav>
    </header>
  );
}