import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UsuarioDetalle.css";

interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
}

function UsuarioDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then((data: Usuario) => {
        setUsuario(data);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando usuario...</p>;

  if (!usuario) return <p>No se encontró el usuario</p>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }} className="detalle">
      <h2>{usuario.name}</h2>
      <p><strong>Usuario:</strong> {usuario.username}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
      <p><strong>Web:</strong> {usuario.website}</p>
      <p><strong>Ciudad:</strong> {usuario.address.city}</p>
      <p><strong>Empresa:</strong> {usuario.company.name}</p>

      <button onClick={() => navigate("/usuarios")}>
        Volver
      </button>
    </div>
  );
}

export default UsuarioDetalle;