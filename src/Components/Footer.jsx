import "../styles/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo Mouse Tech" />

          <p>&copy; {new Date().getFullYear()} Mouse Tech. Todos los derechos reservados.</p>
        </div>

        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
          </ul>
        </div>

        <div className="footer-contacto">
          <h4>Contáctanos</h4>
          <p><i className="fas fa-map-marker-alt"></i> La Paz, Bolivia</p>
          <p><i className="fas fa-envelope"></i> <a href="mailto:mousetechsa@gmail.com">mousetechsa@gmail.com</a></p>
          <p><i className="fas fa-phone"></i> <a href="tel:+59173547502">+591 735-47502</a></p>
          <p><i className="fas fa-phone"></i> <a href="tel:+59168015204">+591 680-15204</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
