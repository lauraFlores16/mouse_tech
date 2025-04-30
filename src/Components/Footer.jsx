import "../styles/Footer.css";
import logo from "../assets/logo.png";
import ubicacionIcon from "../assets/imagen/ubicacion.png";
import correoIcon from "../assets/imagen/correo.png";
import telefonoIcon from "../assets/imagen/contacto.png";
import { Link } from "react-router-dom";

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
            <li><Link to="/" className="footer-link">Inicio</Link></li>
            <li><Link to="/servicios" className="footer-link">Servicios</Link></li>
            <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
            <li><Link to="/nosotros" className="footer-link">Nosotros</Link></li>
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
