import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function HomePage() {
  const [movs, setMovs] = useState([]);
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchTrend = async () => {
      try {
        setLoad(true);
        const trendingMovs = await getTrendingMovies();
        setMovs(trendingMovs);
      } catch {
        setErr(true);
      } finally {
        setLoad(false);
      }
    };
    fetchTrend();
  }, []);

  return (
    <div>
      {load && <p>Loading...</p>}
      {!load && (err ? <NotFoundPage /> : <MovieList movies={movs} />)}
    </div>
  );
}
