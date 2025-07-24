// src/components/NavBar.jsx
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </div>
  );
}

export default NavBar;