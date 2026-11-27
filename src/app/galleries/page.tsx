import Link from "next/link";
import Image from "next/image";
import styles from "./collections.module.css";

const collections = [
  { slug: "editions", label: "Découvrir les éditions", width: 427 },
  { slug: "signatures", label: "Découvrir les signatures", width: 429 },
  { slug: "couture", label: "Découvrir la couture", width: 428 },
];

export default function AllGalleriesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Collections</h1>
        <div className={styles.grid}>
          {collections.map(({ slug, label, width }) => (
            <Link key={slug} href={`/galleries/${slug}`} className={styles.card}>
              <Image
                src={`/images/galleries/overview/${slug}.jpg`}
                alt=""
                width={width}
                height={548}
                sizes="(min-width: 768px) 26vw, (min-width: 480px) 400px, 90vw"
                className={styles.cover}
              />
              <span className={styles.caption}>
                <span className={styles.label}>{label} <span aria-hidden="true">→</span></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
