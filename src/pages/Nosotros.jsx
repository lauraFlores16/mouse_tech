import "../styles/Nosotros.css";
import jos from "../assets/Jos.png";


const Nosotros = () => {
  return (
    <div className="nosotros-page">
      <h1>Conoce al equipo de Mouse Tech</h1>
      <p className="intro">
        Un equipo apasionado por la tecnología, el diseño y la innovación. Juntos damos vida a ideas que transforman.
      </p>

      <div className="equipo-grid">
        <div className="miembro">
          <img src={jos} alt="Josue" />
          <h3>Josue Ali</h3>
          <p>CEO & Desarrollador Full Stack. Líder visionario con enfoque en soluciones tecnológicas innovadoras.</p>
        </div>

        <div className="miembro">
          <img src="/assets/lau.png" alt="Laura" />
          <h3>Laura Flores</h3>
          <p>CTO & Especialista en Sistemas. Encargada de la arquitectura técnica y rendimiento de nuestras plataformas.</p>
        </div>

        <div className="miembro">
          <img src="/imagenes/eric.png" alt="Eric" />
          <h3>Eric Apaza</h3>
          <p>Diseñadora UX/UI. Apasionado por crear experiencias visuales intuitivas, atractivas y funcionales.</p>
        </div>

        <div className="miembro">
          <img src="/imagenes/derix.png" alt="Derix" />
          <h3>Derix Venegas</h3>
          <p>Marketing Digital. Especialista en estrategia, posicionamiento y comunicación efectiva con nuestros clientes.</p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
