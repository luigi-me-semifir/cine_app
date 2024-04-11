// import CarteInfo from "@/components/CarteInfo/CarteInfo";
import TypeDeFilm from "@/components/typedefilm/TypeDeFilm";
import styles from "./page.module.css";
import FilmPopulaire from "@/components/filmPopulaire/FilmPopulaire";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.typeDeFilmContainer}>
        <TypeDeFilm />
      </div>
      <div className={styles.filmPopulaireContainer}>
        <FilmPopulaire />
      </div>
    </div>
  );
}
