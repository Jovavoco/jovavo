import Link from "next/link";

const navigation = [
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Process",
    href: "/process",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-7 py-4 backdrop-blur-xl shadow-sm">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          JOVAVO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black/70 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90"
        >
          Let's Talk
        </Link>
      </nav>
    </header>
  );
}