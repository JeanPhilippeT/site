
import Image from "next/image";

import { Instagram, Linkedin } from "lucide-react";
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
            <a href="/preview#maison">La Maison</a>
            <a href="/preview#collections">Collections</a>
            <a href="/preview#journal">Journal</a>
            <a href="/preview#sur-mesure">Sur-mesure</a>
            <a href="/preview#contact">Contact</a>
          </nav>

          
<div className="flex items-center gap-5">
  <a href="https://www.instagram.com/jeanphilipptourigny"
     target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <Instagram size={17} strokeWidth={1.25} />
  </a>

  <a href="https://fr.pinterest.com/jeanphilippeTourignyCouture/"
     target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.64 19.31c-.03-.79-.01-1.74.2-2.59l1.29-5.46s-.32-.65-.32-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.35-.91 3.66-.26 1.1.55 2 1.63 2 1.96 0 3.46-2.07 3.46-5.05 0-2.64-1.9-4.49-4.61-4.49-3.14 0-4.98 2.35-4.98 4.78 0 .95.36 1.97.81 2.52.09.11.1.21.07.33l-.3 1.23c-.05.2-.16.24-.37.14-1.38-.64-2.24-2.66-2.24-4.28 0-3.49 2.53-6.69 7.3-6.69 3.83 0 6.81 2.73 6.81 6.38 0 3.81-2.4 6.88-5.73 6.88-1.12 0-2.18-.58-2.54-1.26l-.69 2.63c-.25.96-.93 2.17-1.39 2.99A10 10 0 1 0 12 2z"/>
    </svg>
  </a>

  <a href="https://www.linkedin.com/in/jeanphilippetourigny/"
     target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <Linkedin size={17} strokeWidth={1.25} />
  </a>

  <a href="https://wa.me/212617682235"
     target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.54L3 20.5l1.46-5.1A8.5 8.5 0 1 1 20.5 11.5Z"/>
      <path d="M8.4 7.8c-.3-.5-.6-.5-.9-.5-.4 0-.9.5-.9 1.4 0 1.8 2.3 4.7 5.2 6.2 2.4 1.2 3.5.8 4.2.1.4-.4.7-1.2.6-1.4-.1-.2-1.6-.8-1.9-.9-.3-.1-.5.1-.8.5-.3.4-.6.5-1 .3-1.1-.5-2.2-1.4-2.9-2.4-.2-.3-.2-.5.1-.8.3-.3.5-.6.4-.9l-1.1-1.6Z"/>
    </svg>
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
