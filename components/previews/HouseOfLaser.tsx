{/* =========================================================
    CINEMATIC HERO
========================================================= */}

<section
  id="home"
  className="relative min-h-[100svh] overflow-hidden bg-[#17130f]"
>
  {/* BACKGROUND IMAGE */}
  <img
    src="/previews/house-of-laser/spa-hero.png"
    alt="House of Laser & Spa treatment room"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/25" />

  {/* SUBTLE EDGE SHADING */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.28)_100%)]" />

  {/* =====================================================
      DESKTOP NAV
  ===================================================== */}

  <div className="absolute left-0 right-0 top-0 z-30 hidden px-10 pt-12 lg:block xl:px-16 xl:pt-16">
    <div className="relative mx-auto flex max-w-[1500px] items-start justify-between">
      {/* LEFT */}
      <p className="text-[10px] font-medium uppercase tracking-[0.34em] text-white/90">
        Brooklyn, NY
      </p>

      {/* CENTER BRAND */}
      <a
        href="#home"
        className="absolute left-1/2 -translate-x-1/2 text-center"
      >
        <p className="whitespace-nowrap font-serif text-[15px] uppercase tracking-[0.42em] text-white">
          House of Laser &amp; Spa
        </p>

        <div className="mx-auto mt-7 h-px w-16 bg-white/60" />
      </a>

      {/* RIGHT */}
      <nav className="flex items-center gap-10">
        <a
          href="#services"
          className="text-[10px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-55"
        >
          Services
        </a>

        <a
          href="#about"
          className="text-[10px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-55"
        >
          About
        </a>

        <a
          href="#contact"
          className="text-[10px] uppercase tracking-[0.32em] text-white/85 transition-opacity duration-300 hover:opacity-55"
        >
          Contact
        </a>
      </nav>
    </div>
  </div>

  {/* =====================================================
      MOBILE NAV
  ===================================================== */}

  <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-5 pt-6 lg:hidden">
    <a href="#home">
      <div>
        <p className="font-serif text-[15px] uppercase tracking-[0.22em] text-white">
          House of Laser
        </p>

        <p className="mt-1 text-[6px] uppercase tracking-[0.4em] text-white/65">
          &amp; Spa · Brooklyn
        </p>
      </div>
    </a>

    <button
      type="button"
      aria-label="Toggle navigation"
      onClick={() => setMenuOpen((current) => !current)}
      className="flex h-11 w-11 items-center justify-center border border-white/35 text-white backdrop-blur-sm"
    >
      {menuOpen ? (
        <X size={18} strokeWidth={1.3} />
      ) : (
        <Menu size={18} strokeWidth={1.3} />
      )}
    </button>
  </div>

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="absolute left-0 right-0 top-0 z-30 bg-[#17130f]/95 px-6 pb-10 pt-24 text-white backdrop-blur-xl lg:hidden">
      <div className="flex flex-col">
        {[
          ["Services", "#services"],
          ["About", "#about"],
          ["Laser Hair Removal", "#laser"],
          ["Facials & Skincare", "#facials"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="border-b border-white/10 py-4 font-serif text-[25px] font-light"
          >
            {label}
          </a>
        ))}

        <a
          href="#book"
          onClick={() => setMenuOpen(false)}
          className="mt-7 flex items-center justify-between border border-white/40 px-6 py-4 text-[8px] uppercase tracking-[0.28em]"
        >
          Book an Appointment

          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  )}

  {/* =====================================================
      CENTER HERO CONTENT
  ===================================================== */}

  <div className="relative z-20 flex min-h-[100svh] items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8">
    <div className="w-full max-w-[950px]">
      {/* MAIN HEADLINE */}
      <h1 className="font-serif text-[58px] font-light leading-[0.9] tracking-[-0.045em] text-[#F7F1EA] sm:text-[76px] md:text-[94px] lg:text-[104px] xl:text-[118px]">
        Beauty
        <br className="sm:hidden" />

        <span className="italic font-light">
          {" "}without
        </span>{" "}

        <span className="font-normal">
          limits.
        </span>
      </h1>

      {/* SERVICES */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[8px] uppercase tracking-[0.4em] text-white/90 sm:gap-x-7 sm:text-[10px]">
        <span>Laser</span>

        <span className="text-white/50">·</span>

        <span>Skincare</span>

        <span className="text-white/50">·</span>

        <span>Self-Care</span>
      </div>

      {/* CTA */}
      <a
        href="#book"
        className="group mx-auto mt-10 inline-flex min-w-[280px] items-center justify-center border border-white/75 bg-black/5 px-9 py-[18px] text-[9px] uppercase tracking-[0.34em] text-white backdrop-blur-[2px] transition-all duration-500 hover:bg-white hover:text-[#27211d] sm:min-w-[350px]"
      >
        Book an Appointment

        <ArrowRight
          size={13}
          strokeWidth={1.3}
          className="ml-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>

  {/* =====================================================
      BOTTOM RIGHT TAGLINE
  ===================================================== */}

  <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-5 lg:flex xl:bottom-14 xl:right-16">
    <div className="h-px w-7 bg-white/60" />

    <p className="text-[8px] uppercase tracking-[0.35em] text-white/85">
      A calmer, brighter you
    </p>
  </div>

  {/* MOBILE LOCATION */}
  <div className="absolute bottom-7 left-6 z-20 lg:hidden">
    <p className="text-[7px] uppercase tracking-[0.32em] text-white/65">
      Brooklyn, New York
    </p>
  </div>
</section>