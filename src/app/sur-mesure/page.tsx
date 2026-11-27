import Image from "next/image";
import Link from "next/link";
import heading from "../page-heading.module.css";
import styles from "../editorial.module.css";

export default function SurMesurePage() {
  return (
    <main className={styles.page}>
      <div className={`${styles.content} ${styles.split}`}>
        <div>
          <h1 className={`${heading.title} ${styles.title}`}>Sur-mesure</h1>
          <h2 className={styles.subtitle}>Une pièce à votre mesure</h2>
          <p className={styles.copy}>
            Une occasion, une silhouette, une envie de matière. Le projet prend forme à partir d’un premier échange.
          </p>
          <Link href="/contact" className={styles.link}>Parler de votre projet <span aria-hidden="true">→</span></Link>
        </div>
        <Image src="/images/galleries/overview/couture.jpg" alt="Caftan bleu nuit brodé d’or" width={428} height={548} sizes="(min-width: 768px) 37vw, 85vw" />
      </div>
    </main>
  );
}
