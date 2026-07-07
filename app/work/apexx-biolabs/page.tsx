import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ApexxBiolabsCaseStudy() {
  const capabilities = [
    {
      title: "Storefront Experience",
      items: [
        "Custom storefront",
        "Product catalog",
        "Product pages",
        "Shopping cart",
        "Customer accounts",
        "Customer portal",
        "Product reviews",
        "Newsletter signup",
        "Responsive design",
      ],
    },
    {
      title: "Admin System",
      items: [
        "Product management",
        "Inventory management",
        "Automatic inventory updates",
        "Order management",
        "Revenue tracking",
        "Customer management",
        "Subscriber management",
        "Review moderation",
        "Promo code tools",
      ],
    },
    {
      title: "Automation",
      items: [
        "Order received emails",
        "Payment received emails",
        "Tracking emails",
        "Promotional emails",
        "Inventory deduction",
        "Order quantity updates",
        "Subscriber workflows",
      ],
    },
    {
      title: "Build & Launch",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "GitHub",
        "Vercel",
        "Cloudflare",
        "Production deployment",
      ],
    },
  ];

  const stats = [
    ["Project Type", "Custom Ecommerce Platform"],
    ["Role", "Design + Development"],
    ["Focus", "Storefront, Admin, Automation"],
    ["Status", "Live"],
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e8] px-6 pt-40 pb-28 text-[#1b1713]">
      <section className="mx-auto max-w-7xl">
        <Reveal>
          <Link
            href="/work"
            className="mb-14 inline-flex text-xs uppercase tracking-[0.28em] text-[#1b1713]/45 transition hover:text-[#1b1713]"
          >
            ← Back to Work
          </Link>

          <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
            Case Study
          </p>

          <h1 className="max-w-6xl font-serif text-5xl font-light uppercase leading-[1.05] tracking-[0.08em] md:text-7xl">
            Apexx Biolabs
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
            A fully custom biotechnology ecommerce platform with a premium
            storefront, customer portal, reviews, promo codes, inventory
            automation, subscriber tools, transactional emails, and a custom
            administrative dashboard.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-4">
          {stats.map(([label, value], index) => (
            <Reveal key={label} delay={index * 100}>
              <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7 shadow-[0_20px_70px_rgba(27,23,19,0.04)]">
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#1b1713]/35">
                  {label}
                </p>
                <p className="text-lg font-medium leading-snug tracking-tight text-[#1b1713]/80">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-8 text-white md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Overview
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
              More than a website.
              <br />A complete business platform.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/60">
                Apexx Biolabs was created to support both the public-facing
                ecommerce experience and the private operational tools needed to
                manage the business behind the scenes.
              </p>

              <p className="text-lg leading-relaxed text-white/60">
                The platform brings together ecommerce, customer accounts,
                product management, inventory automation, promo codes, reviews,
                subscribers, and email workflows into one custom-built system.
              </p>
            </div>
          </section>
        </Reveal>

        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              The Challenge
            </p>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
              <h2 className="font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
                Build a polished storefront with real business tools behind it.
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-[#1b1713]/55">
                <p>
                  The goal was not only to create a clean shopping experience,
                  but to give the business control over its products, inventory,
                  orders, subscribers, promotional tools, customer reviews, and
                  customer communication.
                </p>

                <p>
                  Instead of relying on a generic template, the platform was
                  structured around the actual workflows needed to operate and
                  grow the business.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Platform Capabilities
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
              Built to manage the full ecommerce experience.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {capabilities.map((section, index) => (
              <Reveal key={section.title} delay={index * 120}>
                <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_35px_100px_rgba(27,23,19,0.08)] md:p-10">
                  <h3 className="mb-8 font-serif text-3xl font-light uppercase tracking-[0.08em] md:text-4xl">
                    {section.title}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#1b1713]/10 bg-[#f5f1e8] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#1b1713]/55"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Admin Dashboard",
              text: "A private backend system for managing products, inventory, orders, subscribers, reviews, promo codes, and business activity.",
            },
            {
              title: "Customer Portal",
              text: "A customer-facing account experience supporting order history, customer access, and a more complete ecommerce journey.",
            },
            {
              title: "Automated Workflows",
              text: "Email and inventory workflows help reduce manual work while keeping customers informed throughout the order process.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbf8f2] md:p-10">
                <h3 className="font-serif text-3xl font-light uppercase tracking-[0.08em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-relaxed text-[#1b1713]/55">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </section>

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  The Result
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
                  A custom platform built for long-term growth.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Apexx Biolabs now has a custom digital foundation that
                  supports the customer experience, internal operations,
                  promotional campaigns, email communication, and future
                  expansion.
                </p>
              </div>

              <a
                href="https://apexxbiolabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Visit Website
              </a>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}