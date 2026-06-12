<section className="min-h-screen bg-[#EEE7DF] pt-32">
  <div className="max-w-[1700px] mx-auto px-20">

    <div className="flex items-center justify-between">

      {/* TEXTE */}

      <div className="w-[45%]">

        <div className="text-7xl font-bold mb-8">
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

        <div className="flex gap-6 mt-14">

          <button className="border border-black px-10 py-4 uppercase tracking-[0.2em] text-sm">
            Découvrir les collections
          </button>

          <button className="border border-black px-10 py-4 uppercase tracking-[0.2em] text-sm">
            Sur-mesure
          </button>

        </div>

      </div>

      {/* IMAGE */}

      <div className="relative w-[50%] h-[700px]">

        <Image
          src="/images/image-caftan-noir-page1.png"
          alt="Création JeanPhilippe Tourigny"
          fill
          priority
          className="object-contain object-right"
        />

      </div>

    </div>

  </div>
</section>
}
