
import Image from "next/image";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <main id="preview-home" className="flex w-full overflow-x-hidden bg-[#EEE7DF] text-black">
      {/* PAGE D'ACCUEIL */}
      <section className="mx-auto flex w-full max-w-[1700px] flex-col items-center justify-start lg:justify-center px-6 pb-12 pt-4 lg:flex-row lg:justify-between lg:px-20 lg:py-0">
        
        {/* TEXTE */}
        <div className="z-10 flex w-full flex-col items-center lg:w-[42%] lg:-translate-y-6">
          <h1 className="relative -top-3 text-center font-serif text-[clamp(1.25rem,5.25vw,2.875rem)] leading-[0.98] tracking-tight lg:text-[clamp(2rem,2.75vw,3.125rem)]">
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
              src="/images/accueil/image-caftan-noir-page1.png"
              alt="Caftan noir JeanPhilippe Tourigny"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 430px"
              className="object-contain -translate-y-6 scale-110"
            />
          </div>

          {/* LIEN D'ENTRÉE */}
          <Link
            href="/la-maison"
            className="relative -top-[15px] border-b border-black pb-2 text-xs uppercase tracking-[0.22em] lg:mt-16"
          >
            Découvrir la maison →
          </Link>
        </div>

        {/* SILHOUETTE SUR ORDINATEUR */}
        <div className="relative hidden h-[min(75vh,820px)] w-[56%] lg:block">
          <Image
            src="/images/accueil/image-caftan-noir-page1.png"
            alt="Caftan noir JeanPhilippe Tourigny"
            fill
            priority
            sizes="56vw"
            className="object-contain object-right origin-right -translate-y-6 scale-110"
          />
        </div>
      </section>
    </main>
  );
}
