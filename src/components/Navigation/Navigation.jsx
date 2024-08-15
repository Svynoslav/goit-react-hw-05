import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
