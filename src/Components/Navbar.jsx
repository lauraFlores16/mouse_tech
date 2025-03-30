import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate de tener un logo en `src/assets/`

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Mouse Tech" className="h-12" />
        </Link>

        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-blue-400">Inicio</Link></li>
          <li><Link to="/servicios" className="hover:text-blue-400">Servicios</Link></li>
          <li><Link to="/proyectos" className="hover:text-blue-400">Proyectos</Link></li>
          <li><Link to="/nosotros" className="hover:text-blue-400">Nosotros</Link></li>
          <li><Link to="/contacto" className="hover:text-blue-400">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
