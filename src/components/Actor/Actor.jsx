export default function Actor({ name, imgUrl }) {
  return (
    <li>
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  );
}
