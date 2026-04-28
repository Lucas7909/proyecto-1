import { useEffect, useState } from "react";
import UsuarioCard from '../../components/Card/UsuarioCard';
import './Usuarios.css';
interface Usuario {
  id: number;
  name: string;
  email: string;
}

function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [busqueda, setBusqueda] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((data: Usuario[]) => setUsuarios(data));
  }, []);
  const usuariosFiltrados = usuarios.filter(user =>
  user.name.toLowerCase().includes(busqueda.toLowerCase()) ||
  user.id.toString().includes(busqueda)
);

 return (
  <div className="usuarios-container">
    <h2>Usuarios</h2>

    <input
      type="text"
      placeholder="Buscar por nombre o ID..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="buscador"
    />
    {/* Mensaje si no hay resultados */}
    {usuariosFiltrados.length === 0 && (
      <p className="no-resultados">No se encontraron usuarios</p>
    )}
     {/* Lista */}
    <div className="usuarios-grid">
      {usuariosFiltrados.map(user => (
        <UsuarioCard key={user.id} user={user} />
      ))}
    </div>
  </div>
);
}

export default Usuarios;