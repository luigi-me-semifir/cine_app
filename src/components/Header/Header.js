import { Roboto } from "next/font/google"
import Link from "next/link"
import styles from "./Header.module.css"


const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] })

/**
 * Composant représentant le header de notre application
 * @returns Le composant Header
 */
export default function Header() {
  return (
    <header className={`${styles.header} ${roboto.className}`}>
      <div>
        <Link href="/"><h1 className={styles.logo}>Ma vidéothèque</h1></Link>
      </div>
      <div>
        <nav>
          <ul className={styles.nav}>
            <li><Link href="/series" className={styles.a}>Séries</Link></li>
            <li><Link href="/films" className={styles.a}>Films</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

