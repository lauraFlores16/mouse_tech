import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección del banner */}
      <section className="banner">
        <h1>Bienvenido a Mouse Tech</h1>
        <h2>¿Quiénes Somos?</h2>
        <p> Innovamos con tecnología para potenciar tu negocio.</p>
        <Link to="/servicios" className="btn">Ver Servicios</Link>
      </section>

      {/* Sección de Misión y Visión */}
      <section className="info-section">
        <div className="info-box">
          <h2>Nuestra Misión</h2>
          <p>Proveer soluciones tecnológicas innovadoras que impulsen el crecimiento empresarial.</p>
        </div>
        <div className="info-box">
          <h2>Nuestra Visión</h2>
          <p>Ser la empresa líder en tecnología, brindando servicios de calidad y vanguardia.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
