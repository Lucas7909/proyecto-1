import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a la Aplicación</h1>

      <p className="descripcion">
  Esta aplicación fue desarrollada con React y TypeScript. Permite obtener 
  y visualizar una lista de usuarios desde una API pública, mostrando 
  información como nombre, correo electrónico e identificador único.
  Además, incluye funcionalidades de filtrado para facilitar la búsqueda 
  de usuarios por nombre o ID.
</p>

      {/* 👇 Botón importante */}
      <Link to="/usuarios" className="btn-home">
        Ver Usuarios
      </Link>

      <div className="home-seccion">
  <h3>¿Qué podés hacer?</h3>
  <ul>
    <li>Ver una lista de usuarios</li>
    <li>Visualizar información como nombre, email e ID</li>
    <li>Acceder al detalle completo de cada usuario</li>
    <li>Consumir datos desde una API pública</li>
    <li>Buscar usuarios por nombre o ID</li>
    <li>Explorar una interfaz moderna con tarjetas</li>
    <li>Navegar entre distintas páginas sin recargar (SPA)</li>
  </ul>
</div>

<div className="home-seccion">
  <h3>Tecnologías utilizadas</h3>
  <ul>
    <li>React</li>
    <li>TypeScript</li>
    <li>Fetch API</li>
    <li>CSS</li>
  </ul>
</div>
    </div>
  );
}

export default Home;