export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">JOVAVO</p>
          <p className="mt-2 text-sm text-gray-500">
            Modern websites for growing businesses.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}