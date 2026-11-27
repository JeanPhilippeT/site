import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../data/blog";
import heading from "../page-heading.module.css";
import styles from "../editorial.module.css";

export default function JournalPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={`${heading.title} ${styles.title}`}>Journal</h1>
        <p className={styles.copy}>Inspirations, savoir-faire et histoires de création entre Marrakech et Paris.</p>
        <div className={styles.cards}>
          {blogPosts.map((post) => (
            <article key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <Image src={post.image} alt="" width={400} height={500} sizes="(min-width: 768px) 28vw, 85vw" />
                <h2 className={styles.subtitle}>{post.title}</h2>
                <p className={styles.copy}>{post.excerpt}</p>
                <span className={styles.link} aria-hidden="true">Lire l’article →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
