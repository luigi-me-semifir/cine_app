import { getFilmUrl } from "@/service/filmUrl"
import Link from "next/link"
import styles from "./typeDeFilm.module.css"

/**
 * Composant pour afficher la listes des type de film pour effectuer un filtre
 * @returns 
 */
const TypeDeFilm = async () => {
  const { genres } = await getFilmUrl("/genre/movie/list")
  return <div className={styles.container}>
    <h2 className={styles.titre}> Type de film</h2>
    <div className={styles.typecontainer} >
      {genres.map((type) => (
        <div key={type.id} className={styles.type}>
          <Link href={`films/categorie/${type.id}`} className={styles.link}>
            <p className={styles.nom}>{type.name}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
}

export default TypeDeFilm