export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 py-5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-6 py-4 backdrop-blur-xl">
        <a href="/" className="text-xl font-semibold tracking-tight">
          JOVAVO
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/work">Work</a>
          <a href="/services">Services</a>
          <a href="/process">Process</a>
          <a href="/pricing">Pricing</a>
        </div>

        <a
          href="/contact"
          className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}