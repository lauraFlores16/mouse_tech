import "../styles/Footer.css";
import logo from "../assets/logo.png";
import ubicacionIcon from "../assets/imagen/ubicacion.png";
import correoIcon from "../assets/imagen/correo.png";
import telefonoIcon from "../assets/imagen/contacto.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Logo y derechos */}
        <div className="footer-logo">
          <img src={logo} alt="Logo Mouse Tech" />
          <p style={{ color: "black" }}>
            &copy; {new Date().getFullYear()} Mouse Tech. Todos los derechos reservados.
          </p>

        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </div>

        {/* Información de contacto */}
        <div className="footer-contacto">
          <h4>Contáctanos</h4>
          <p>
            <img src={ubicacionIcon} alt="Ubicación" className="footer-icon" />
            La Paz, Bolivia
          </p>
          <p>
            <img src={correoIcon} alt="Correo" className="footer-icon" />
            <a href="mailto:mousetechsa@gmail.com">mousetechsa@gmail.com</a>
          </p>
          <p>
            <img src={telefonoIcon} alt="Teléfono" className="footer-icon" />
            <a href="tel:+59173547502">+591 735-47502</a>
          </p>
          <p>
            <img src={telefonoIcon} alt="Teléfono" className="footer-icon" />
            <a href="tel:+59168015204">+591 680-15204</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
