export default function ApexxBiolabsCaseStudy() {
  const capabilities = [
    {
      title: "Ecommerce Experience",
      items: [
        "Custom storefront",
        "Product catalog",
        "Individual product pages",
        "Shopping cart",
        "Customer accounts",
        "Customer portal",
        "Product reviews",
        "Newsletter subscriptions",
        "Responsive design",
      ],
    },
    {
      title: "Administrative Dashboard",
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
      title: "Business Automation",
      items: [
        "Order received emails",
        "Payment received emails",
        "Tracking emails",
        "Promotional emails",
        "Automated inventory deduction",
        "Order quantity updates",
        "Subscriber workflows",
      ],
    },
    {
      title: "Infrastructure",
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

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <section className="px-6 pt-36 pb-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="/work"
            className="mb-12 inline-flex text-sm text-black/50 transition hover:text-black"
          >
            ← Back to Work
          </a>

          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/40">
            Case Study
          </p>

          <h1 className="max-w-6xl text-6xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-8xl">
            Apexx Biolabs
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-black/55">
            A fully custom biotechnology ecommerce platform with an integrated
            admin dashboard, customer portal, product reviews, promo codes,
            inventory automation, and transactional email workflows.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            ["Project Type", "Custom Ecommerce Platform"],
            ["Focus", "Storefront, Admin, Automation"],
            ["Platform", "Web Application"],
            ["Status", "Live"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm"
            >
              <p className="mb-3 text-sm text-black/40">{label}</p>
              <p className="text-xl font-medium tracking-tight">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#111111] p-8 text-white md:p-16">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-white/35">
            Overview
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[1] tracking-[-0.06em] md:text-7xl">
            More than a website — a complete business platform.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-white/60">
              Apexx Biolabs was built from the ground up to support both the
              customer-facing shopping experience and the internal operations
              needed to manage the business.
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              The platform combines ecommerce, customer accounts, inventory
              control, subscriber management, review moderation, promo codes,
              and automated email workflows into one custom system.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-black/40">
            Platform Capabilities
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
            Built to manage products, orders, customers, and daily operations.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {capabilities.map((section) => (
              <div
                key={section.title}
                className="rounded-[2.25rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(0,0,0,0.06)] md:p-10"
              >
                <h3 className="mb-8 text-3xl font-semibold tracking-[-0.04em]">
                  {section.title}
                </h3>

                <div className="grid gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-black/10 bg-[#FAFAF8] px-5 py-3 text-black/60"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Admin Dashboard",
              text: "A private backend system created to manage products, orders, subscribers, reviews, promo codes, and business activity.",
            },
            {
              title: "Customer Portal",
              text: "A customer-facing account experience designed to support orders, communication, and a more complete ecommerce journey.",
            },
            {
              title: "Automated Workflows",
              text: "Email and inventory workflows were built to reduce manual work and keep customers informed throughout the order process.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2.25rem] bg-[#EFECE4] p-8 md:p-10"
            >
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-black/55">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[3rem] bg-[#111111] p-10 text-white md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/40">
              Live Project
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              View Apexx Biolabs
            </h2>
          </div>

          <a
            href="https://apexxbiolabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-center text-sm font-medium text-black transition hover:bg-white/90"
          >
            Visit Website
          </a>
        </div>
      </section>
    </main>
  );
}