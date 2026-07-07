import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function WillowAndTallowCaseStudy() {
  const sections = [
    {
      title: "Brand Experience",
      items: [
        "Luxury Visual Identity",
        "Editorial Layouts",
        "Premium Storytelling",
        "Responsive Design",
        "Lifestyle Photography",
        "Elegant Typography",
      ],
    },
    {
      title: "Website Experience",
      items: [
        "Custom Homepage",
        "Product Collections",
        "Product Pages",
        "Ecommerce Ready",
        "Newsletter Integration",
        "Mobile Optimization",
      ],
    },
    {
      title: "Customer Journey",
      items: [
        "Brand Story",
        "Simplified Navigation",
        "Luxury Shopping Experience",
        "Trust Building",
        "Conversion Focus",
      ],
    },
    {
      title: "Technology",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vercel",
        "Cloudflare",
      ],
    },
  ];

  const stats = [
    ["Project Type", "Luxury Ecommerce"],
    ["Role", "Brand + Development"],
    ["Focus", "Design & Experience"],
    ["Status", "In Development"],
  ];

  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#1b1713]">
      <section className="mx-auto max-w-7xl px-6 pt-40 pb-28">
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
            Willow & Tallow
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#1b1713]/55 md:text-xl">
            A luxury lifestyle brand designed around warmth, simplicity, and
            timeless elegance. Every element is crafted to create a premium
            digital experience that reflects handcrafted quality and refined
            storytelling.
          </p>
        </Reveal>

        {/* Hero Preview */}

        <Reveal>
          <div className="mt-20 overflow-hidden rounded-[3rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-5 shadow-[0_30px_90px_rgba(27,23,19,0.06)]">
            <div className="flex h-[520px] items-center justify-center rounded-[2rem] bg-gradient-to-br from-[#efe7dc] via-[#faf8f4] to-[#d8ccbd] text-sm uppercase tracking-[0.35em] text-[#1b1713]/35">
              Website Preview
            </div>
          </div>
        </Reveal>

        {/* Stats */}

        <div className="mt-20 grid gap-5 md:grid-cols-4">
          {stats.map(([label, value], index) => (
            <Reveal key={label} delay={index * 120}>
              <div className="rounded-[2rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-7">
                <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#1b1713]/35">
                  {label}
                </p>

                <p className="text-lg font-medium text-[#1b1713]/80">
                  {value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Overview */}

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/35">
              Vision
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.1] tracking-[0.08em] md:text-6xl">
              Designed to feel calm,
              <br />
              luxurious, and timeless.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-white/60">
                Willow & Tallow was envisioned as more than an online store.
                Every interaction is designed to communicate warmth,
                craftsmanship, and premium quality.
              </p>

              <p className="text-lg leading-relaxed text-white/60">
                The visual language focuses on generous spacing, soft color
                palettes, elegant typography, and a shopping experience that
                feels effortless from beginning to end.
              </p>
            </div>
          </section>
        </Reveal>

        {/* Capabilities */}

        <section className="mt-24">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.42em] text-[#1b1713]/40">
              Project Highlights
            </p>

            <h2 className="max-w-5xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
              Built around the customer experience.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 120}>
                <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#fbf8f2] p-8 shadow-[0_20px_70px_rgba(27,23,19,0.04)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_35px_100px_rgba(27,23,19,0.08)]">
                  <h3 className="mb-8 font-serif text-3xl font-light uppercase tracking-[0.08em]">
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

        {/* Design Principles */}

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Elegant Design",
              text: "Clean layouts, generous whitespace, and refined typography create a timeless visual identity.",
            },
            {
              title: "Luxury Shopping",
              text: "Every interaction is designed to make browsing and purchasing feel effortless and premium.",
            },
            {
              title: "Scalable Foundation",
              text: "Built with modern technologies that allow the brand to grow with new collections and future features.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="rounded-[2.5rem] border border-[#1b1713]/10 bg-[#efe9df] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbf8f2]">
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

        {/* CTA */}

        <Reveal>
          <section className="mt-24 rounded-[3rem] bg-[#1b1713] p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/35">
                  Coming Soon
                </p>

                <h2 className="max-w-4xl font-serif text-4xl font-light uppercase leading-[1.12] tracking-[0.08em] md:text-6xl">
                  A luxury digital experience in the making.
                </h2>

                <p className="mt-6 max-w-2xl leading-relaxed text-white/60">
                  Willow & Tallow is currently in development and will showcase
                  a refined ecommerce experience centered around thoughtful
                  design and premium storytelling.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit rounded-full bg-white px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-[#1b1713] transition hover:-translate-y-1 hover:bg-white/90"
              >
                Start a Project
              </Link>
            </div>
          </section>
        </Reveal>
      </section>
    </main>
  );
}