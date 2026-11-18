
import Image from "next/image";

export default function PreviewPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEE7DF] text-black">
      {/* PAGE D'ACCUEIL */}
      <section className="mx-auto flex min-h-[85vh] max-w-[1700px] flex-col items-center justify-start lg:justify-center px-6 pb-12 pt-4 lg:pt-12 lg:min-h-[calc(100svh-4.5rem)] lg:flex-row lg:justify-between lg:px-20">
        
        {/* TEXTE */}
        <div className="z-10 flex w-full flex-col items-center lg:w-[42%] lg:-translate-y-6">
          <h1 className="text-center font-serif text-[clamp(1.75rem,7.5vw,4rem)] leading-[0.98] tracking-tight lg:text-[clamp(3rem,4vw,4.4rem)]">
            Entre
            <br />
            Marrakech
            <br />
            &amp;
            <br />
            Paris,
            <br />
            je couds
            <br />
            un langage.
          </h1>

          {/* SILHOUETTE SUR TÉLÉPHONE */}
         <div className="relative mt-8 mb-0 h-[220px] w-full max-w-[430px] sm:h-[345px] lg:hidden -translate-y-[15px]">
            <Image
              src="/images/image-caftan-noir-page1.png"
              alt="Caftan noir JeanPhilippe Tourigny"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 430px"
              className="object-contain"
            />
          </div>

          {/* LIEN D'ENTRÉE */}
          <span
            aria-disabled="true"
            className="relative -top-[0px] border-b border-black pb-2 text-xs uppercase tracking-[0.22em] lg:mt-16"
          >
            Découvrir la maison →
          </span>
        </div>

        {/* SILHOUETTE SUR ORDINATEUR */}
        <div className="relative hidden h-[min(75vh,820px)] w-[56%] lg:block">
          <Image
            src="/images/image-caftan-noir-page1.png"
            alt="Caftan noir JeanPhilippe Tourigny"
            fill
            priority
            sizes="56vw"
            className="object-contain object-right"
          />
        </div>
      </section>
    </main>
  );
}
