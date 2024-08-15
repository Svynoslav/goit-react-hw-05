import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { getMovieId } from "../../movie-api";

export default function MovieDetailsPage() {
  const [mov, setMov] = useState({});
  const [err, setErr] = useState(false);
  const [load, setLoad] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovs = async () => {
      try {
        setLoad(true);
        const res = await getMovieId(movieId);
        setMov(res);
      } catch {
        setErr(true);
      } finally {
        setLoad(false);
      }
    };
    fetchMovs();
  }, [movieId]);

  const location = useLocation();
  const backLinkRef = location.state?.from || "/movies";

  return (
    <div>
      {load && <p>Loading...</p>}
      {!load &&
        (err ? (
          <NotFoundPage />
        ) : (
          <div>
            <NavLink to={backLinkRef}>Back</NavLink>
            {mov.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${mov.poster_path}`}
                aria-colcount={mov.original_title}
              />
            )}
            <h2>{mov.original_title}</h2>
            <p>User score: {mov.vote_average}</p>
            <h3>Overview</h3>
            <p>{mov.overview}</p>
            <h3>Genres</h3>
            <ul>
              {mov.genres &&
                mov.genres.map((genre) => {
                  <li key={genre.id}>{genre.name}</li>;
                })}
            </ul>
            <div>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </div>
            <Outlet />
          </div>
        ))}
    </div>
  );
}
