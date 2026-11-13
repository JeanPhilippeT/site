
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { galleries } from "../../data/collections";

const order = ["editions", "signatures", "couture"];

export default function AllGalleriesPage() {
  const sortedGalleries = [...galleries].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <main className="min-h-screen bg-[#EEE7DF] text-black">
      {/* EN-TÊTE */}
      <header className="relative z-50 w-full bg-[#EEE7DF]">

<div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-4 px-6 py-3 lg:px-12">
          <Link href="/preview" className="relative block h-16 w-28 shrink-0">
            <Image
              src="/images/logo-header-transparent.png"
              alt="JeanPhilippe Tourigny"
              fill
              className="object-contain object-left"
            />
          </Link>

          <nav className="order-3 flex w-full flex-wrap justify-center gap-x-7 gap-y-3 text-[11px] uppercase tracking-[0.2em] lg:order-2 lg:w-auto">
            <Link href="/preview">Accueil</Link>
            <Link href="/preview#maison">La Maison</Link>
            <Link href="/galleries">Collections</Link>
            <Link href="/preview#journal">Journal</Link>
            <Link href="/preview#sur-mesure">Sur-mesure</Link>
            <Link href="/preview#contact">Contact</Link>
          </nav>

          <div className="order-2 flex items-center gap-5 lg:order-3">
            <a
              href="https://www.instagram.com/jeanphilippetourigny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.3} />
            </a>
            <a
              href="https://fr.pinterest.com/jeanphilippeTourignyCouture/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="font-serif text-xl font-bold italic"
            >
              P
            </a>
            <a
              href="https://www.linkedin.com/in/jeanphilippetourigny/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.3} />
            </a>
            <a
              href="https://wa.me/212617682235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-xs font-semibold"
            >
              WA
            </a>
          </div>
        </div>
      </header>

      {/* COLLECTIONS */}

<section className="relative -top-6 mx-auto max-w-[1700px] px-6 pb-0 pt-0 lg:px-12">
<h1 className="mb-3 text-center font-serif text-4xl font-normal tracking-tight md:text-5xl">
  
  Collections
        </h1>
<div className="mx-auto grid w-full max-w-[950px] grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">

  {sortedGalleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/galleries/${gallery.slug}`}
              className="group block"
            >
              <div className="pb-6 text-center">
  <h2 className="text-lg font-light uppercase tracking-[0.22em] md:text-xl">
    {gallery.name}
  </h2>
</div>


<div className="relative h-[400px] w-full overflow-hidden border-[8px] border-[#D8D0C8] bg-[#D8D0C8]">

  {gallery.coverImage && (
                  <Image
                    src={gallery.coverImage}
                    alt={gallery.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
