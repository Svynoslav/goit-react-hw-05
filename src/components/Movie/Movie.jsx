export default function Movie({ release_date, poster_path, original_title }) {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={original_title}
      />
      <p>{original_title}</p>
      <p>{release_date}</p>
    </li>
  );
}
