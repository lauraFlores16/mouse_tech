// Home.jsx
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* SECCIÓN HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>¿Quiénes Somos?</h1>
          <p>
            En Mouse Tech S.A. brindamos soluciones tecnológicas innovadoras a medida para impulsar tu empresa hacia el futuro.
          </p>
          {/* Usamos Link en lugar de <a> */}
          <Link to="#servicios" className="btn-servicios">Ver Servicios</Link>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="mision-vision">
        <div className="card">
          <h2>Nuestra Misión</h2>
          <p>Proveer soluciones tecnológicas innovadoras que impulsen el crecimiento empresarial.</p>
        </div>
        <div className="card">
          <h2>Nuestra Visión</h2>
          <p>Ser la empresa líder en tecnología, brindando servicios de calidad y vanguardia.</p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="servicios">
        <h2>Servicios</h2>
        <p>Ofrecemos desarrollo web, aplicaciones móviles, consultoría tecnológica, soporte y más.</p>
        {/* Aquí puedes agregar íconos o tarjetas de servicios */}
      </section>
    </div>
  );
};

export default Home;
