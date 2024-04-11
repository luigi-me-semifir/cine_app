import { getFilmUrl } from "@/service/filmUrl";

/**
 * Fonction qui permet de récuperer les résultat de la requètes d'api coté client
 * @param {*} request 
 * @returns 
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query');

  const resultatsRecherche = await getFilmUrl("/search/movie", [
    {
      key: "query",
      value: query
    }
  ])

  return new Response(JSON.stringify(resultatsRecherche), { status: 200 })
}