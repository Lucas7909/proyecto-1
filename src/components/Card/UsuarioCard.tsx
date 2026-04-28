import './UsuarioCard.css';

import { useNavigate } from "react-router-dom";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: Usuario;
}

function UsuarioCard({ user }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/usuarios/${user.id}`);
  };

  return (
    <div className="usuario-card" onClick={handleClick}>
      <img
        className="usuario-img"
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt="avatar"
      />

      <div className="usuario-info">
        <p className="nombre">{user.name}</p>
        <p className="email">{user.email}</p>
        <p className="id">ID: {user.id}</p>
      </div>
    </div>
  );
}

export default UsuarioCard;