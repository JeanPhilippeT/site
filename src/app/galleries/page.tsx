import Link from "next/link";
import Image from "next/image";
import { galleries } from "../../data/collections";
import styles from "./collections.module.css";

const order = ["editions", "signatures", "couture"];
const collectionCovers: Record<string, string> = {
  editions: "/images/galleries/editions/top-majorelle-cadre-q97.webp",
  signatures: "/images/galleries/signatures/caftan-paillettes-noires-cadre-q97.webp",
  couture: "/images/galleries/couture/queen-of-satin/queen-of-satin-q97.webp",
};
const coverClasses: Record<string, string> = {
  editions: "object-cover object-top",
  signatures: "object-cover object-center",
  couture: "object-cover object-[35%_center]",
};

export default function AllGalleriesPage() {
  const sortedGalleries = [...galleries].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)
  );

  return (
    <main className="mx-auto max-w-[1700px] px-4 text-black pb-10 pt-5 sm:px-6 md:pb-6 md:pt-4 lg:px-12 lg:pt-2">
      <h1 className={`${styles.title} text-center font-serif font-normal leading-tight tracking-tight`}>
        Collections
      </h1>

      <div className="mx-auto grid max-w-sm grid-cols-1 gap-8 md:max-w-[950px] md:grid-cols-3 md:gap-6 lg:gap-10">
        {sortedGalleries.map((gallery) => {
          const coverImage = collectionCovers[gallery.slug] ?? gallery.coverImage;

          return (
            <Link
              key={gallery.id}
              href={`/galleries/${gallery.slug}`}
              className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <h2 className={`${styles.galleryTitle} text-center font-light uppercase tracking-[0.22em]`}>
                {gallery.name}
              </h2>

              <div className="relative aspect-[29/40] w-full overflow-hidden border-[8px] border-[#D8D0C8] bg-[#D8D0C8]">
                {coverImage && (
                  <Image
                    src={coverImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 290px, (min-width: 768px) 31vw, (min-width: 416px) 384px, calc(100vw - 32px)"
                    className={coverClasses[gallery.slug] ?? "object-contain"}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
