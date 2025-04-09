import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo y nombre */}
        <div className="logo-area">
          <Link to="/" className="navbar-logo" aria-label="Inicio">
            <img src={logo} alt="Mouse Tech Logo" className="logo" />
            <span className="brand-name">MOUSE TECH S.A.</span>
          </Link>
        </div>

        {/* Menú de navegación */}
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/servicios" className="nav-link">Servicios</Link></li>
          <li><Link to="/proyectos" className="nav-link">Proyectos</Link></li>
          <li><Link to="/nosotros" className="nav-link">Nosotros</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
