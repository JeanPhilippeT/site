import Image from "next/image";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#EEE7DF] text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#EEE7DF]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-28 max-w-[1700px] items-center justify-between px-20">
          <div className="text-sm font-bold leading-tight">
            JeanPhilippe
            <br />
            TOURIGNY
          </div>

          <nav className="flex gap-14 text-sm uppercase tracking-[0.35em]">
            <a href="#">Accueil</a>
            <a href="#">Collections</a>
            <a href="#">Sur-mesure</a>
            <a href="#">La Maison</a>
            <a href="#">Contact</a>
          </nav>

          <div className="flex gap-8 text-sm uppercase tracking-[0.25em]">
            <a href="#">IG</a>
            <a href="#">PT</a>
            <a href="#">IN</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen pt-28">
        <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1700px] items-center justify-between px-20">
          {/* TEXTE */}
          <div className="w-[45%]">
            <div className="mb-8 text-7xl font-bold tracking-tight">
              TC
            </div>

            <h1 className="font-serif text-[92px] leading-[0.95] tracking-tight">
              Entre Marrakech
              <br />
              et Paris,
              <br />
              je couds un
              <br />
              langage.
            </h1>

            <p className="mt-12 text-2xl leading-relaxed">
              Couture parisienne et artisanat marocain.
              <br />
              Pièces en série limitée et créations sur mesure.
            </p>

            <div className="mt-14 flex gap-6">
              <a
                href="#collections"
                className="border border-black px-10 py-5 text-sm uppercase tracking-[0.25em]"
              >
                Découvrir les collections →
              </a>

              <a
                href="#sur-mesure"
                className="border border-black px-10 py-5 text-sm uppercase tracking-[0.25em]"
              >
                Sur-mesure →
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[720px] w-[52%]">
            <Image
              src="/images/image-caftan-noir-page1.png"
              alt="Création JeanPhilippe Tourigny entre couture parisienne et artisanat marocain"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
