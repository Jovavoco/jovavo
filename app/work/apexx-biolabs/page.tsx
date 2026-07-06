export default function ApexxBiolabsCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">

            <a
  href="/"
  className="inline-flex mb-10 text-sm text-black/50 hover:text-black transition"
>
  ← Back to Home
</a>

          <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-6">
            Case Study
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] max-w-5xl">
            Apexx Biolabs
          </h1>

          <p className="mt-6 text-xl text-black/55 max-w-3xl leading-relaxed">
            A custom biotechnology ecommerce platform built with a polished
            customer experience, product management, promotional tools, and a
            secure administrative workflow.
          </p>

          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_25px_100px_rgba(0,0,0,0.08)]">
            <div className="h-[420px] rounded-[1.5rem] bg-gradient-to-br from-[#EDE7DF] via-white to-[#D8E0EA] flex items-center justify-center text-black/35">
              Apexx Biolabs Website Preview
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 border-t border-black/10 pt-16">
          <div>
            <p className="text-sm text-black/40 mb-2">Project Type</p>
            <p className="text-xl font-medium">Ecommerce Website</p>
          </div>

          <div>
            <p className="text-sm text-black/40 mb-2">Focus</p>
            <p className="text-xl font-medium">
              Storefront, Admin Tools, Orders
            </p>
          </div>

          <div>
            <p className="text-sm text-black/40 mb-2">Status</p>
            <p className="text-xl font-medium">Live</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-black/40 mb-5">
              Overview
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Built to feel clean, trustworthy, and easy to manage.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-black/55 leading-relaxed">
            <p>
              Apexx Biolabs needed a digital presence that felt polished and
              credible while also supporting real ecommerce functionality.
            </p>

            <p>
              The website was designed to create a smoother shopping experience,
              organize product information clearly, and give the business tools
              to manage orders, inventory, and promotions from behind the scenes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "Product-focused storefront",
            "Inventory management tools",
            "Order management dashboard",
            "Promo code functionality",
            "Automated order emails",
            "Responsive mobile experience",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.04)]"
            >
              <p className="text-xl font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto rounded-[2rem] bg-[#111111] text-white p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-5">
              Live Project
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              View Apexx Biolabs
            </h2>
          </div>

          <a
            href="https://apexxbiolabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white text-black px-8 py-4 text-sm font-medium hover:bg-white/90 transition text-center"
          >
            Visit Website
          </a>
        </div>
      </section>
    </main>
  );
}