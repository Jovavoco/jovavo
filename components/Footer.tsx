import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Custom Websites",
  "Google Ads",
  "Meta Advertising",
  "Ecommerce",
];

const socialLinks = [
  {
    name: "Instagram",
    handle: "@jovavo.co",
    href: "https://instagram.com/jovavo.co",
  },
  {
    name: "TikTok",
    handle: "@jovavo.co",
    href: "https://tiktok.com/@jovavo.co",
  },
  {
    name: "X",
    handle: "@jovavoco",
    href: "https://x.com/jovavoco",
  },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden border-t border-[#d8d0c5] bg-[#f5f1e8]">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:gap-20">
          {/* LEFT SIDE */}
          <div>
            <Link
              href="/"
              className="inline-block font-serif text-3xl font-light tracking-[0.16em] text-[#1b1713] transition duration-300 hover:opacity-70 sm:text-4xl sm:tracking-[0.18em] lg:text-5xl"
            >
              JOVAVO
            </Link>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#1b1713]/60 sm:mt-8 sm:text-lg sm:leading-8">
              Premium websites, Google Ads, and Meta advertising designed to
              help businesses attract more customers and grow online.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-[#1b1713]/15 px-7 py-3.5 text-[10px] uppercase tracking-[0.22em] text-[#1b1713] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1b1713] hover:text-white sm:mt-10 sm:w-fit sm:text-[11px] sm:tracking-[0.28em]"
            >
              Start Your Project
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-10 lg:gap-12">
            {/* NAVIGATION */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.26em] text-[#1b1713]/40 sm:mb-6 sm:text-[11px] sm:tracking-[0.32em]">
                Explore
              </p>

              <div className="flex flex-col gap-3.5 sm:gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-fit text-sm text-[#1b1713]/65 transition duration-300 hover:translate-x-1 hover:text-[#1b1713] sm:text-base"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.26em] text-[#1b1713]/40 sm:mb-6 sm:text-[11px] sm:tracking-[0.32em]">
                Services
              </p>

              <div className="flex flex-col gap-3.5 text-sm text-[#1b1713]/65 sm:gap-4 sm:text-base">
                {services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div className="col-span-2 min-w-0 sm:col-span-1">
              <p className="mb-5 text-[10px] uppercase tracking-[0.26em] text-[#1b1713]/40 sm:mb-6 sm:text-[11px] sm:tracking-[0.32em]">
                Contact
              </p>

              <div className="min-w-0 space-y-3.5 text-sm text-[#1b1713]/65 sm:space-y-4 sm:text-base">
                <a
                  href="mailto:contact@jovavo.com"
                  className="block max-w-full overflow-hidden break-words transition hover:text-[#1b1713]"
                >
                  contact@jovavo.com
                </a>

                <p>New York, NY</p>

                <div className="space-y-3.5 sm:space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${social.name} ${social.handle}`}
                      className="group flex w-fit items-center gap-2 transition hover:text-[#1b1713]"
                    >
                      <span>{social.name}</span>

                      <span className="text-xs text-[#1b1713]/35 transition group-hover:text-[#1b1713]/60">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#d8d0c5] pt-8 text-center text-[10px] uppercase leading-5 tracking-[0.16em] text-[#1b1713]/35 sm:text-[11px] sm:tracking-[0.18em] md:mt-24 md:flex-row md:items-center md:justify-between md:text-left md:text-[12px] md:tracking-[0.22em]">
          <p>© {new Date().getFullYear()} Jovavo. All Rights Reserved.</p>

          <p>Designed &amp; Developed by Jovavo.</p>
        </div>
      </div>
    </footer>
  );
}