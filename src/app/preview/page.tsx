
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

<svg
  width="21"
  height="21"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12.017 0C5.396 0 2 4.749 2 8.708c0 2.396.907 4.527 2.852 5.322.319.13.605.005.698-.348.064-.244.217-.859.285-1.115.094-.349.057-.471-.201-.777-.562-.663-.921-1.52-.921-2.735 0-3.525 2.638-6.681 6.872-6.681 3.748 0 5.807 2.289 5.807 5.346 0 4.022-1.779 7.418-4.42 7.418-1.459 0-2.551-1.207-2.201-2.691.419-1.772 1.232-3.684 1.232-4.962 0-1.144-.614-2.098-1.885-2.098-1.495 0-2.697 1.546-2.697 3.617 0 1.319.446 2.211.446 2.211s-1.529 6.476-1.797 7.61c-.534 2.259-.08 5.029-.042 5.309.023.166.236.205.373.08.155-.202 2.162-2.68 2.843-4.875.192-.621 1.104-4.28 1.104-4.28.545 1.04 2.139 1.956 3.834 1.956 5.045 0 8.47-4.598 8.47-10.75C22.672 4.291 18.586 0 12.017 0z" />
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
