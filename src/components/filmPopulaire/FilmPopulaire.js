import CarteInfo from "../CarteInfo/CarteInfo";
import { getFilmUrl } from "@/service/filmUrl"
import styles from "./filmPopulaire.module.css"

const FilmPopulaire = async () => {
  const { results } = await getFilmUrl("/movie/popular");
  const films = results.slice(0, 20)
  return (
    <div className={styles.container}>
      <h2 className={styles.titre}> Tous les films</h2>
      <div className={styles.liste}>
        {films.map((film) => <CarteInfo key={film.id} media={film} />
        )}
      </div>
    </div>
  )
}

export default FilmPopulaire
