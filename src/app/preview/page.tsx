
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function PreviewPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EEE7DF] text-black">
      {/* EN-TÊTE */}
      <header className="relative z-50 w-full bg-[#EEE7DF] lg:fixed lg:left-0 lg:top-0">
        <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-4 px-6 py-5 lg:h-28 lg:flex-nowrap lg:px-20">
          <div className="relative h-14 w-28 shrink-0">
            <Image
              src="/images/logo-header-transparent.png"
              alt="JeanPhilippe Tourigny"
              fill
              priority
              className="object-contain object-left"
            />
          </div>

          <nav className="order-3 flex w-full gap-6 overflow-x-auto whitespace-nowrap py-3 text-[10px] uppercase tracking-[0.18em] lg:order-none lg:w-auto lg:gap-12 lg:text-[11px]">
            <a href="/preview">Accueil</a>
            <a href="/preview#collections">Collections</a>
            <a href="/preview#sur-mesure">Sur-mesure</a>
            <a href="/preview#maison">La Maison</a>
            <a href="/preview#journal">Journal</a>
            <a href="/preview#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/jeanphiliptourigny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={17} strokeWidth={1.25} />
            </a>
            <a
              href="https://wa.me/212617682235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={17} strokeWidth={1.25} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeanphilippetourigny/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </header>

      {/* PAGE D'ACCUEIL */}
      <section className="mx-auto flex min-h-[85vh] max-w-[1700px] flex-col items-center justify-start lg:justify-center px-6 pb-12 pt-4 lg:pt-12 lg:min-h-screen lg:flex-row lg:justify-between lg:px-20 lg:pt-32">
        
        {/* TEXTE */}
        <div className="z-10 flex w-full flex-col items-center lg:w-[42%] lg:-translate-y-6">
          <h1 className="text-center font-serif text-[clamp(2.7rem,10vw,4rem)] leading-[0.98] tracking-tight lg:text-[clamp(3rem,4vw,4.4rem)]">
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
          <a
            href="/preview#maison"
            className="relative -top-[0px] border-b border-black pb-2 text-xs uppercase tracking-[0.22em] transition-opacity hover:opacity-60 lg:mt-16"
          >
            Découvrir la maison →
          </a>
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
