import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../movie-api";
import Actor from "../Actor/Actor";

export default function MovieCast() {
  const [credits, setCredits] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getCredits = async () => {
      const data = await getMovieCast(movieId);
      setCredits(data);
    };
    getCredits();
  }, [movieId]);

  return (
    <ul>
      {credits &&
        credits.map((credit) => {
          if (credit.profile_path === null) {
            return;
          }

          return (
            <Actor
              key={credit.id}
              imgUrl={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
              name={credit.name}
            />
          );
        })}
    </ul>
  );
}
