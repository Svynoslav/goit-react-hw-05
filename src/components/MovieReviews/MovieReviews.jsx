import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Review from "../Review/Review";
import { getMovieReviews } from "../../movie-api";

export default function MovieReviews() {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data);
    };
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {reviews && reviews.length > 0
        ? reviews.map((rev) => {
            return (
              <Review
                key={rev.id}
                content={rev.content}
                name={rev.author_details.username}
              />
            );
          })
        : "We don't have any reviews for this movie"}
    </ul>
  );
}
