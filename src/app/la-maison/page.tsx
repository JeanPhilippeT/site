import type { Metadata } from "next";
import heading from "../page-heading.module.css";
import styles from "./maison.module.css";
import Image from "next/image";
import Link from "next/link";
import { existsSync } from "node:fs";
import { join } from "node:path";

export const metadata: Metadata = {
  title: "La Maison — JeanPhilippe Tourigny",
};

const drawingVideo = "videos/la-maison/dessin.mp4";

function MediaPlaceholder({ label, className }: { label: string; className: string }) {
  return (
    <div className={`grid place-items-center bg-[#DED4C8] px-5 text-center ${className}`}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-[#51483F]">
        {label}
      </span>
    </div>
  );
}

export default function LaMaisonPage() {
  const hasDrawingVideo = existsSync(join(process.cwd(), "public", drawingVideo));

  return (
    <main className={`${styles.page} text-black`}>
      <div className="relative aspect-[3/1] w-full overflow-hidden bg-[#EEE7DF] lg:aspect-[4/1]">
        <Image
          src="/images/la-maison/dessin-marrakech-paris-panorama.png"
          alt="Dessin panoramique de Marrakech à Paris"
          fill
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-contain mix-blend-multiply [filter:brightness(1.08)_saturate(0.5)]"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent), linear-gradient(to bottom, black 85%, transparent)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent), linear-gradient(to bottom, black 85%, transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-32 lg:pt-20">
        <section aria-labelledby="maison-title" className="relative grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative z-10 -mt-4 lg:col-span-5 lg:-mt-10">
            <h1 id="maison-title" className={`${heading.title} ${styles.title} relative lg:left-[calc(32.2vw-max(4rem,(100vw-1440px)/2+4rem))] lg:w-max lg:-translate-x-1/2`}>
              La Maison
            </h1>
          </div>

          <div className="lg:absolute lg:right-[calc((100%-40px)*7/18+1.5rem)] lg:top-[16%] lg:w-[min(24rem,45%)] lg:text-right">
            <h2 className={styles.subtitle}>La présence</h2>
            <p className={`${styles.presence} mt-4 text-sm leading-relaxed sm:text-base`}>
              <span>L’assurance, l’élégance, l’allure, la sensation,</span>
              <span>apparaître sans se dévoiler.</span>
            </p>
          </div>

          <Image
            src="/images/la-maison/silhouette-robe-mouvement.png"
            alt="Amina en robe-poncho nude rosé, la mousseline en mouvement et deux silhouettes floues en arrière-plan"
            width={1122}
            height={1402}
            sizes="(min-width: 1440px) 749px, (min-width: 1024px) 55vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="block h-auto w-2/3 justify-self-end lg:col-span-7"
          />


        </section>

        <div className="mt-2 grid gap-8 lg:mt-[calc((100%*7/18-100px/9)*-0.62477718)] lg:grid-cols-12 lg:gap-10">
          <div className="mt-4 lg:order-2 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:translate-y-12 lg:self-center">
            <h2 className={styles.subtitle}>Quelques inspirations</h2>
            <div className="mt-5 space-y-5 text-sm leading-relaxed sm:text-base">
              <p>
                La rencontre de la couture parisienne et de la culture marocaine
                <br />
                L’ampleur d’un drapé, le jeu de l’ombre et de la lumière
              </p>
              <p>La poésie comme état d’esprit</p>
              <p>
                L’art et la nature, les formes et les couleurs
                <br />
                La profondeur d’un bleu, la flore et son étonnante beauté
              </p>
            </div>
          </div>

          <Image
            src="/images/la-maison/collage-inspirations-v2.png"
            alt="Collage d’inspirations : burnous, vers manuscrits de Baudelaire, fleur et tableau bleu"
            width={516}
            height={846}
            sizes="(min-width: 1440px) 650px, (min-width: 1024px) 50vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="block h-auto w-full lg:order-1 lg:col-span-5 lg:w-[125%] lg:max-w-none"
          />
        </div>

        <section aria-labelledby="maison-creation" className="mt-12 grid gap-7 lg:mt-[calc(4rem-clamp(8rem,16vw,14rem))] lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:mt-[calc(clamp(8rem,16vw,14rem)+2rem)] lg:translate-x-[calc((100%+40px)*7/25+0.5rem)] lg:text-right">
            <h2 id="maison-creation" className={styles.subtitle}>La création</h2>
            <p className="mt-4 text-sm leading-relaxed sm:text-base">
              La page blanche. Le premier trait.
              <br />
              Saisir une allure, imaginer un volume, suggérer un mouvement
            </p>
          </div>

          <div className="mt-2 min-w-0 w-4/5 justify-self-end lg:col-span-7 lg:col-start-6 lg:mt-6">
            {hasDrawingVideo ? (
              <video
                aria-label="Vidéo de dessin"
                src={`/${drawingVideo}`}
                className="block h-auto w-full"
                autoPlay
                muted
                playsInline
                loop
                controls
              />
            ) : (
              <MediaPlaceholder label="Vidéo de dessin" className="aspect-video" />
            )}
          </div>
        </section>

        <section aria-labelledby="maison-moulage" className="mt-20 grid items-center gap-7 lg:mt-36 lg:grid-cols-12 lg:gap-10">
          <div className="lg:order-2 lg:col-span-4 lg:col-start-7">
            <h2 id="maison-moulage" className={styles.subtitle}>Le geste couture</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed sm:text-base">
              Avec la toile, la création prend forme
            </p>
          </div>

          <MediaPlaceholder
            label="Photographie ou vidéo du moulage"
            className="aspect-[5/4] lg:order-1 lg:col-span-6 lg:aspect-[4/5]"
          />
        </section>

        <div className="mt-16 flex justify-center lg:mt-20">
          <Link
            href="/galleries"
            className={styles.cta}
          >
            Découvrir les collections →
          </Link>
        </div>
      </div>
    </main>
  );
}
