import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#FAFAF8]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 md:grid-cols-2">

          <div>
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight"
            >
              JOVAVO
            </Link>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-black/55">
              Thoughtfully designed websites and digital experiences for modern
              businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:justify-self-end">

            <div>
              <p className="mb-5 text-sm font-medium">Navigation</p>

              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-black/55 transition hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-sm font-medium">
                Contact
              </p>

              <div className="flex flex-col gap-3 text-black/55">
                <a
                  href="mailto:hello@jovavo.com"
                  className="transition hover:text-black"
                >
                  hello@jovavo.com
                </a>

                <p>New York, NY</p>
              </div>
            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-black/10 pt-8 text-sm text-black/40 md:flex-row md:items-center md:justify-between">

          <p>© {new Date().getFullYear()} Jovavo. All rights reserved.</p>

          <p>Designed & developed by Jovavo.</p>

        </div>

      </div>
    </footer>
  );
}