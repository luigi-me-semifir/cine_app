"use client"

import { useState } from "react"

const Recherche = () => {
  const [resultatRecherche, setResultatRecherche] = useState([])

  const recherche = async (query) => {
    const response = await fetch(`/api/http/recherche?query=${query}`)
    const { results } = await response.json()
    console.log(results);
    setResultatRecherche([]);
  }

  return (
    <div>
      <input type="text" placeholder="Recherche ..." onChange={event => recherche(event.target.value)} />
    </div>
  )
}

export default Recherche
