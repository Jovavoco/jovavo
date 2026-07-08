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
    <footer className="border-t border-[#d8d0c5] bg-[#f5f1e8]">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-20 lg:grid-cols-[1.3fr_0.7fr]">

          {/* Left */}
          <div>
            <Link
              href="/"
              className="font-serif text-5xl font-light tracking-[0.18em] text-[#1b1713]"
            >
              JOVAVO
            </Link>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#1b1713]/60">
              Custom websites, ecommerce experiences, and digital growth
              solutions designed to help modern businesses build a stronger
              online presence.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center rounded-full border border-[#1b1713]/15 px-7 py-3 text-[11px] uppercase tracking-[0.28em] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b1713] hover:text-white"
            >
              Start Your Project
            </Link>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-14">

            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-[#1b1713]/40">
                Explore
              </p>

              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[#1b1713]/65 transition duration-300 hover:translate-x-1 hover:text-[#1b1713]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-[#1b1713]/40">
                Contact
              </p>

              <div className="space-y-4 text-[#1b1713]/65">
                <a
                  href="mailto:hello@jovavo.com"
                  className="block transition hover:text-[#1b1713]"
                >
                  support@jovavo.com
                </a>

                <p>New York, NY</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 flex flex-col gap-6 border-t border-[#d8d0c5] pt-8 text-[12px] uppercase tracking-[0.22em] text-[#1b1713]/35 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Jovavo. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by Jovavo.
          </p>

        </div>

      </div>
    </footer>
  );
}