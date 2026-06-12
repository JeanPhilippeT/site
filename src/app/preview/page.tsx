export default function Home() {
  return (
    <main className="min-h-screen bg-[#eee7df] text-black">
      <header className="fixed top-0 left-0 z-50 w-full bg-[#eee7df]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/preview" className="block">
        <img 
          src="/images/logo-fond-transparent.png"
          alt="JeanPhilippe Tourigny"
          className="h-12 w-auto object-contain"
          />
          </a>

          <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.25em] md:flex">
            <a href="/" className="border-b border-black pb-1">Accueil</a>
            <a href="/collections">Collections</a>
            <a href="/sur-mesure">Sur-mesure</a>
            <a href="/la-maison">La Maison</a>
            <a href="/journal">Journal</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="hidden items-center gap-4 text-xs md:flex">
            <a href="https://instagram.com/jeanphilippetourigny" target="_blank">IG</a>
            <a href="#" target="_blank">PT</a>
            <a href="#" target="_blank">IN</a>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="z-10 text-center md:text-left">
            <div className="mb-6 text-5xl font-semibold tracking-tight">TC</div>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Entre Marrakech
              <br />
              et Paris,
              <br />
              je couds un langage.
            </h1>

            <p className="mt-8 max-w-md text-sm leading-relaxed tracking-wide md:text-base">
              Couture parisienne et artisanat marocain.
              <br />
              Pièces en série limitée et créations sur mesure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/collections"
                className="border border-black px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:bg-black hover:text-white"
              >
                Découvrir les collections →
              </a>

              <a
                href="/sur-mesure"
                className="border border-black/40 px-8 py-4 text-[10px] uppercase tracking-[0.25em] transition hover:border-black"
              >
                Sur-mesure →
              </a>
            </div>
          </div>

          <div className="relative h-[55vh] md:h-[78vh]">
            <img
              src="/images/hero-accueil.jpg"
              alt="Création JeanPhilippe Tourigny entre couture parisienne et artisanat marocain"
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-6 hidden rotate-90 text-[10px] uppercase tracking-[0.35em] md:block">
          Découvrir
        </div>
      </section>
    </main>
  )
}
