import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <div className="home">
      {/* SECCIÓN HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fortalecemos tu presencia en el mundo digital</h1>
          <p>
            En Mouse Tech brindamos soluciones tecnológicas innovadoras y a medida 
            para llevar tu empresa al siguiente nivel.
          </p>
          <Link to="/servicios" className="boton-servicios">Ver Servicios</Link>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Logo Mouse Tech" />
        </div>
      </section>
      {/* SECCIÓN MISIÓN Y VISIÓN */}
      <section className="mision-vision">
        <div className="mision">
          <h2>MISIÓN</h2>
          <p>
            Impulsar la creatividad digital a través de soluciones tecnológicas accesibles y dinámicas, integrando herramientas de diseño 3D en entornos web para transformar la manera en que las personas crean, personalizan y comparten productos.
          </p>
        </div>
        <div className="vision">
          <h2>VISIÓN</h2>
          <p>
            Convertirse en una empresa líder en Bolivia en el desarrollo de plataformas tecnológicas centradas en la experiencia del usuario, democratizando el diseño digital y fomentando ecosistemas colaborativos entre creadores y empresas.
          </p>
        </div>
      </section>

      {/* SECCIÓN ¿POR QUÉ ELEGIR MOUSE TECH? */}
      <section className="por-que-elegir">
        <h2>¿Por qué elegir Mouse Tech?</h2>
        <div className="razones-grid">
          <div className="razon">
            <h3>Desarrollo a Medida</h3>
            <p>Diseñamos soluciones personalizadas que se adaptan a tu negocio.</p>
          </div>
          <div className="razon">
            <h3>Entrega Rápida</h3>
            <p>Tu proyecto estará listo en el menor tiempo posible sin perder calidad.</p>
          </div>
          <div className="razon especial">
            <h3>Innovación Tecnológica</h3>
            <p>Utilizamos las últimas tecnologías para crear plataformas seguras y escalables.</p>
          </div>
          <div className="razon">
            <h3>Soporte Continuo</h3>
            <p>Te acompañamos después del lanzamiento con mantenimiento y mejoras.</p>
          </div>
          <div className="razon">
            <h3>Experiencia Comprobada</h3>
            <p>Hemos trabajado con diversos sectores optimizando procesos digitales.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA DE TRABAJO */}
      <section className="metodologia">
        <h2>Nuestra Metodología de Trabajo</h2>
        <div className="pasos">
          <div className="paso">
            <h3>1. Análisis de Requisitos</h3>
            <p>Evaluamos tus necesidades y definimos los objetivos del proyecto.</p>
          </div>
          <div className="paso">
            <h3>2. Diseño y Prototipado</h3>
            <p>Presentamos un diseño inicial para tu aprobación antes del desarrollo.</p>
          </div>
          <div className="paso">
            <h3>3. Desarrollo e Implementación</h3>
            <p>Programamos y optimizamos el sistema con las mejores prácticas.</p>
          </div>
          <div className="paso">
            <h3>4. Pruebas y Lanzamiento</h3>
            <p>Realizamos pruebas exhaustivas para asegurar la calidad del producto.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
