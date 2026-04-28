import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/usuarios">Usuarios</Link>
      <Link className="nav-link" to="/acerca">Acerca de</Link>
      <Link className="nav-link" to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;