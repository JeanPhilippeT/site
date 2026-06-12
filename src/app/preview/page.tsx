import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#EEE7DF] text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#EEE7DF]/90 backdrop-blur-sm">
        <div className="mx-auto flex h-28 max-w-[1700px] items-center justify-between px-20">
          <div className="relative h-16 w-28">
  <Image
    src="/images/logo-header-transparent.png"
    alt="JeanPhilippe Tourigny"
    fill
    priority
    className="object-contain object-left"
  />
</div>

         <nav className="flex gap-12 text-[11px] uppercase tracking-[0.22em]">
  <a href="#">Accueil</a>
  <a href="#">Collections</a>
  <a href="#">Sur-mesure</a>
  <a href="#">La Maison</a>
  <a href="#">Journal</a>
  <a href="#">Contact</a>
</nav>

<div className="flex items-center gap-6">

  <a
    href="https://www.instagram.com/jeanphiliptourigny"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Instagram size={16} strokeWidth={1.25} />
  </a>

  <a
    href="https://wa.me/212617682235"
    target="_blank"
    rel="noopener noreferrer"
  >
    <MessageCircle size={16} strokeWidth={1.25} />
  </a>

  <a
    href="https://www.linkedin.com/in/jeanphilippetourigny/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={16} strokeWidth={1.25} />
  </a>

</div>
          </div>          
      </header>

      {/* HERO */}
      <section className="min-h-screen pt-12">
      <div className="mx-auto flex max-w-[1700px] items-start justify-between px-20 pt-20">
        
        {/* TEXTE */}
        <div className="w-[38%] pt-2">
           <h1 className="font-serif text-[52px] leading-[0.95] tracking-tight">
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
          <div className="relative h-[820px] w-[60%] -mt-24">    
            <Image
              src="/images/image-caftan-noir-page1.png"
              alt="Création JeanPhilippe Tourigny caftan paillettes noire"
              fill
              priority
              className="object-contain object-right -translate-y-20"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
