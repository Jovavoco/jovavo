export default function HouseOfLaser() {
  return (
    <main className="min-h-screen bg-[#f7f4ef]">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
            Staten Island, New York
          </p>

          <h1 className="mt-5 font-serif text-5xl text-neutral-900 sm:text-7xl">
            House of Laser
          </h1>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Laser & Aesthetics
          </p>

          <p className="mx-auto mt-8 max-w-lg text-sm leading-7 text-neutral-600">
            A complimentary website concept
            designed to showcase treatments,
            results, and a more elevated client
            experience.
          </p>

          <button className="mt-8 rounded-full bg-neutral-900 px-7 py-3 text-xs uppercase tracking-[0.16em] text-white">
            Book an Appointment
          </button>
        </div>
      </section>
    </main>
  );
}