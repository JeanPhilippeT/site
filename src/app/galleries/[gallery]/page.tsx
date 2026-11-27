import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { galleries, getGalleryBySlug } from "../../../data/collections";
import heading from "../../page-heading.module.css";
import styles from "./gallery.module.css";

export default function GalleryPage({ params }: { params: { gallery: string } }) {
  const gallery = getGalleryBySlug(params.gallery);

  if (!gallery) notFound();

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <Link href="/galleries" className={styles.navigation}>
          <span aria-hidden="true">←</span> Toutes les collections
        </Link>
        <h1 className={`${heading.title} ${styles.title}`}>{gallery.name}</h1>
        <p className={styles.intro}>{gallery.description}</p>

        {gallery.slug === "editions" && (
          <figure className={styles.feature}>
            <Image
              src="/images/galleries/overview/editions.jpg"
              alt="Top Majorelle en satin bleu imprimé"
              width={427}
              height={548}
              sizes="(min-width: 768px) 430px, 90vw"
              priority
            />
            <figcaption>Top Majorelle</figcaption>
          </figure>
        )}

        {gallery.subCollections.length > 0 && (
          <ul className={styles.grid}>
            {gallery.subCollections.map((collection) => (
              <li key={collection.id}>
                <Link href={`/galleries/${gallery.slug}/${collection.slug}`} className={styles.card}>
                  <Image
                    src={collection.mainImage}
                    alt=""
                    width={428}
                    height={548}
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 44vw, 90vw"
                  />
                  <h2>{collection.name}</h2>
                  <p>{collection.description}</p>
                  <span className={styles.navigation} aria-hidden="true">Découvrir →</span>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <nav className={styles.related} aria-label="Autres galeries">
          <h2>Découvrir aussi</h2>
          {galleries.filter((item) => item.id !== gallery.id).map((item) => (
            <Link key={item.id} href={`/galleries/${item.slug}`} className={styles.navigation}>
              {item.name} <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
