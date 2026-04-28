import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1>🚫 404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe o fue movida.</p>

      <Link to="/" className="btn-volver">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;