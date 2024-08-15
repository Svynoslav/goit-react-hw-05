import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { searchMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [movs, setMovs] = useState([]);
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const query = params.get("query") ?? "";
    if (!query) {
      return;
    }

    const fetchSearch = async () => {
      try {
        setLoad(true);
        const data = await searchMovies(query);
        setMovs(data);
        if (data.length === 0) {
          setErr(true);
        }
      } catch {
        setErr(true);
      } finally {
        setLoad(false);
      }
    };
    fetchSearch();
  }, [params]);

  const handleSearch = (e) => {
    e.preventDefault();
    setErr(false);
    setMovs([]);

    const query = e.target.elements.query.value.trim().toLowerCase();
    setParams({ query: query });
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input name="query" type="text" />
        <button type="submit">Search</button>
      </form>

      {load && <p>Loading...</p>}
      {err ? <p>Not found</p> : movs.length > 0 && <MovieList movies={movs} />}
    </>
  );
}
