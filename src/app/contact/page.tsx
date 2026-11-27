import heading from "../page-heading.module.css";
import styles from "../editorial.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={`${heading.title} ${styles.title}`}>Contact</h1>
        <h2 className={styles.subtitle}>Échanger avec la Maison</h2>
        <p className={styles.copy}>Pour parler d’une pièce, d’un projet sur mesure ou d’une collaboration, vous pouvez joindre la Maison sur WhatsApp ou Instagram.</p>
        <div className={styles.channels}>
          <a href="https://wa.me/212617682235" className={styles.link}>WhatsApp <span aria-hidden="true">→</span></a>
          <a href="https://www.instagram.com/jeanphilippetourigny" className={styles.link}>Instagram <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </main>
  );
}
