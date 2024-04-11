import Image from "next/image";
import styles from "./filmDetail.module.css"

/**
 * Composant pour afficher les détails d'un film
 * @param {*} param0 
 * @returns 
 */
export default async function FilmDetail({ film }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={`${process.env.TMDB_IMAGE_BASE_PATH}${film.poster_path}`}
          alt={film.title}
          fill
        />
      </div>
      <div className={styles.info}>
        <h2>{film.title}</h2>
        <p>Titre originale : {film.original_title}</p>
        <p>Langue : {film.original_language}</p>
        <p>Synopsys : {film.overview}</p>

      </div>
    </div>
  )
}

