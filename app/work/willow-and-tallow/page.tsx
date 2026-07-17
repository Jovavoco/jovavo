import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F0E8]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/willow-tallow-logo.PNG"
            alt="Willow & Tallow"
            width={600}
            height={600}
            priority
            className="h-auto w-full max-w-[430px] md:max-w-[560px]"
          />

          <p className="-mt-12 text-xl italic tracking-wide text-[#7A8165] md:-mt-20 md:text-2xl">
            Rooted in Nature. Crafted with Tallow.
          </p>

          <h1 className="mt-10 max-w-4xl font-serif text-4xl leading-tight text-[#34382F] md:text-6xl">
            Simple skincare inspired by tradition.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#666A5D] md:text-xl">
            Thoughtfully crafted skincare made with nourishing tallow,
            botanical ingredients, and a commitment to simplicity.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="rounded-full bg-[#4B5540] px-8 py-4 text-center font-medium text-white transition duration-300 hover:bg-[#3D4634]"
            >
              Shop the Collection
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-[#7A8165] px-8 py-4 text-center font-medium text-[#4B5540] transition duration-300 hover:bg-[#E8E3D9]"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="border-y border-[#D8D2C7] bg-[#ECE7DD] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 text-center md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-[#3D4634]">
              Simple Ingredients
            </p>
            <p className="mt-3 leading-7 text-[#6A6E61]">
              Carefully selected ingredients without unnecessary fillers.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl text-[#3D4634]">
              Traditionally Inspired
            </p>
            <p className="mt-3 leading-7 text-[#6A6E61]">
              Skincare rooted in time-honored methods and intentional care.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl text-[#3D4634]">
              Thoughtfully Crafted
            </p>
            <p className="mt-3 leading-7 text-[#6A6E61]">
              Made with quality, purpose, and respect for your skin.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7A8165]">
                The Collection
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[#34382F] md:text-5xl">
                Everyday nourishment for your skin.
              </h2>
            </div>

            <Link
              href="/shop"
              className="rounded-full border border-[#7A8165] px-7 py-3 text-[#4B5540] transition hover:bg-[#E8E3D9]"
            >
              View All Products
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Whipped Tallow Balm",
                description:
                  "A rich, deeply nourishing balm for dry and sensitive skin.",
              },
              {
                name: "Botanical Tallow Cream",
                description:
                  "A balanced daily moisturizer crafted with botanical oils.",
              },
              {
                name: "Tallow Lip Balm",
                description:
                  "Simple, protective moisture for soft and comfortable lips.",
              },
            ].map((product) => (
              <div
                key={product.name}
                className="rounded-[2rem] border border-[#D8D2C7] bg-[#EEE9E0] p-8"
              >
                <div className="aspect-square rounded-[1.5rem] bg-[#E2DCCF]" />

                <h3 className="mt-7 font-serif text-2xl text-[#34382F]">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-[#6A6E61]">
                  {product.description}
                </p>

                <Link
                  href="/shop"
                  className="mt-6 inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#4B5540]"
                >
                  Shop Product →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#4B5540] px-6 py-20 text-center text-[#F4F0E8] md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D7DDC7]">
            Willow & Tallow
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
            Skincare made with less, so your skin gets more.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#E3E6DD]">
            We believe skincare should feel uncomplicated, comforting, and
            connected to nature. Every formula is designed with intention and
            made to support your skin’s natural barrier.
          </p>

          <Link
            href="/about"
            className="mt-9 inline-block rounded-full bg-[#F4F0E8] px-8 py-4 font-medium text-[#4B5540] transition hover:bg-white"
          >
            Discover Our Story
          </Link>
        </div>
      </section>
    </main>
  );
}