import { NavLink, useLocation } from "react-router-dom";
import Movie from "../Movie/Movie";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map((mov) => {
        if (mov.poster_path === null) {
          return;
        }
        return (
          <NavLink
            key={mov.id}
            state={{ from: location }}
            to={`/movies/${mov.id}`}
          >
            <Movie
              release_date={mov.release_date}
              poster_path={mov.poster_path}
              original_title={mov.original_title}
              movieId={mov.id}
            />
          </NavLink>
        );
      })}
    </ul>
  );
}
