import Image from "next/image";
import Link from "next/link"
import styles from "./CarteInfo.module.css"

/**
 * Composant pour les cartes représentant les films et les series
 * @returns Le composant CarteInfonpm
 */
export default function CarteInfo({ media }) {
  return (
    <Link href={`/films/${media.id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image
            src={`${process.env.TMDB_IMAGE_BASE_PATH}${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
        <div className={styles.content}>
          <h2>{media.title}</h2>
          <div className={styles.info}>
            <p>Le {new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
            <p>Moyenne : {media.vote_average}</p>
          </div>
        </div>
      </div>
    </Link >
  )
}
