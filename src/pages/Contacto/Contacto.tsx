import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto">
      <h1>Contacto</h1>

      <form className="formulario">
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;