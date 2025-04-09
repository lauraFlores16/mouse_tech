import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-page">
      <h1>Contáctanos</h1>
      <p>¿Tienes un proyecto en mente? ¡Escríbenos y hagámoslo realidad!</p>

      <div className="contacto-contenido">
        {/* Información de contacto */}
        <div className="info-contacto">
          <h3>Información</h3>
          <p><strong>Dirección:</strong> La Paz, Bolivia</p>
          <p><strong>Email:</strong> info@mousetech.com</p>
          <p><strong>Teléfono:</strong> +591 777-00000</p>
          <p><strong>Horario:</strong> Lun a Vie, 9:00 - 18:00</p>
        </div>

        {/* Formulario de contacto */}
        <form className="formulario-contacto">
          <h3>Escríbenos</h3>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo Electrónico" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
