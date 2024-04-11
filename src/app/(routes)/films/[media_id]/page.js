import FilmDetail from "@/components/filmDetail/FilmDetail";
import { getFilmUrl } from "@/service/filmUrl"

export default async function PageDetail({ params }) {
  const detail = await getFilmUrl(`/movie/${params.media_id}`);
  console.log(detail.production_compagnies);
  console.log(params);
  return (
    <FilmDetail film={detail} />
  )
}