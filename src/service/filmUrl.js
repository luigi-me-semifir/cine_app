/**
 * Fonction pour créer l'url sur laquelle les requètes fecth viendrons récupérer nos données
 * @param {*} path 
 * @param {*} language 
 * @returns 
 */
export const getFilmUrl = (path, params = [], language = 'fr-FR') => {
  const url = new URL(`${process.env.TMDB_API_URL}${path}`);
  url.searchParams.append("api_key", process.env.TMDB_API_KEY);
  url.searchParams.append('language', language);
  params.forEach(param => {
    url.searchParams.append(param.key, param.value)
  })

  return fetch(url).then((res) => res.json())
}