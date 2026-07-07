import Link from "next/link";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#d8d0c5]/70 bg-[#f8f4ed]/70 px-8 py-4 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl font-light tracking-[0.25em] text-[#1b1713] transition duration-300 hover:opacity-70"
        >
          JOVAVO
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[11px] uppercase tracking-[0.28em] text-[#1b1713]/65 transition-all duration-300 hover:text-[#1b1713]"
            >
              {item.name}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-[#1b1713] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full border border-[#1b1713]/15 bg-[#1b1713] px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2a241f] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
        >
          Start Project
        </Link>
      </nav>
    </header>
  );
}