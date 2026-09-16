import Link from "next/link";
import {
  ArrowUpRight,
  AtSign,
  Code2,
  Mail,
  Megaphone,
  MonitorSmartphone,
  ShoppingBag,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Web Design",
    href: "/services#website-design",
    icon: MonitorSmartphone,
  },
  {
    name: "E-Commerce",
    href: "/services#web-development",
    icon: ShoppingBag,
  },
  {
    name: "Custom Development",
    href: "/services#web-development",
    icon: Code2,
  },
  {
    name: "Digital Growth",
    href: "/services#digital-growth",
    icon: Megaphone,
  },
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
    <footer className="w-full overflow-hidden border-t border-[#1b1713]/10 bg-[#f8f5ef] text-[#1b1713]">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 sm:py-16 md:py-20">
        {/* =========================================================
            TOP
        ========================================================= */}

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* LEFT / BRAND */}

          <div>
            <Link
              href="/"
              className="inline-block font-serif text-[2.2rem] font-light tracking-[0.12em] transition-opacity duration-300 hover:opacity-60 sm:text-[2.6rem]"
            >
              JOVAVO
            </Link>

            <p className="mt-5 max-w-md text-[15px] leading-7 text-[#1b1713]/55 sm:text-[16px]">
              Custom websites, e-commerce, digital growth, and business
              systems built around the way your business works.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1b1713] px-7 py-3.5 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#302a24] sm:w-auto"
            >
              Start a Project

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-[0.7fr_1fr_1.35fr] sm:gap-x-8 lg:gap-x-10">
            {/* EXPLORE */}

            <div>
              <p className="mb-5 text-[14px] font-semibold text-[#1b1713]/45">
                Explore
              </p>

              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex w-fit items-center gap-1.5 text-[14px] text-[#1b1713]/60 transition-all duration-300 hover:text-[#1b1713]"
                  >
                    {item.name}

                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.5}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* SERVICES */}

            <div>
              <p className="mb-5 text-[14px] font-semibold text-[#1b1713]/45">
                Services
              </p>

              <div className="flex flex-col gap-3">
                {services.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    className="text-[14px] leading-5 text-[#1b1713]/60 transition-colors duration-300 hover:text-[#1b1713]"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONNECT */}

            <div className="col-span-2 min-w-[190px] sm:col-span-1">
              <p className="mb-5 text-[14px] font-semibold text-[#1b1713]/45">
                Connect
              </p>

              <div className="flex flex-col gap-3">
                {/* EMAIL */}

                <a
                  href="mailto:contact@jovavo.com"
                  className="group flex w-fit items-center gap-2.5 whitespace-nowrap text-[14px] text-[#1b1713]/60 transition-colors duration-300 hover:text-[#1b1713]"
                >
                  <Mail
                    size={15}
                    strokeWidth={1.6}
                    className="shrink-0 text-[#1b1713]/45 transition-colors group-hover:text-[#1b1713]"
                  />

                  <span>contact@jovavo.com</span>
                </a>

                {/* SOCIALS */}

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} ${social.handle}`}
                    className="group flex w-fit items-center gap-2.5 whitespace-nowrap text-[14px] text-[#1b1713]/60 transition-colors duration-300 hover:text-[#1b1713]"
                  >
                    <AtSign
                      size={15}
                      strokeWidth={1.6}
                      className="shrink-0 text-[#1b1713]/45 transition-colors group-hover:text-[#1b1713]"
                    />

                    <span>{social.name}</span>

                    <span className="text-[11px] text-[#1b1713]/30 transition-colors group-hover:text-[#1b1713]/50">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SERVICE STRIP
        ========================================================= */}

        <div className="mt-12 grid gap-2 border-t border-[#1b1713]/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              className="group flex min-w-0 items-center gap-3 rounded-xl bg-[#fffdf9] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f1ece3] text-[#1b1713]/60 transition-all duration-300 group-hover:bg-[#1b1713] group-hover:text-white">
                <Icon size={15} strokeWidth={1.6} />
              </div>

              <span className="min-w-0 flex-1 text-[13px] font-medium text-[#1b1713]/60 transition-colors group-hover:text-[#1b1713]">
                {name}
              </span>

              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="shrink-0 text-[#1b1713]/25 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>

        {/* =========================================================
            BOTTOM
        ========================================================= */}

        <div className="mt-8 flex flex-col gap-3 border-t border-[#1b1713]/10 pt-7 text-[12px] text-[#1b1713]/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Jovavo. All Rights Reserved.
          </p>

          <p>
            Designed &amp; Developed by Jovavo.
          </p>
        </div>
      </div>
    </footer>
  );
}