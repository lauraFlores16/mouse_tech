import React from "react";
import "./../styles/Servicios.css"; 
import logsportImage from "./../assets/LOGSPORT.png"; 

const Servicios = () => {
  return (
    <div className="servicios-container">
      {/* Sección de presentación */}
      <section className="servicios-intro">
        <div className="servicios-texto">
          <h1>ALISPORT</h1>
          <p>
            En <strong>Alis Sport</strong> ofrecemos una plataforma innovadora para la personalización de ropa deportiva. 
            Diseña tu equipación con las mejores herramientas y crea un estilo único para tu equipo.
          </p>
          <a
            href="https://www.owayo.es/konfigurator_html/index.php?v=6&sport=atletismo&product=camisetas_manga_corta&lang=es&land=es&design=aero"
            target="_blank"
            rel="noopener noreferrer"
            className="boton-servicio"
          >
            VISITA ALISPORT
          </a>
        </div>
        <div className="servicios-imagen">
          <img src={logsportImage} alt="Alis Sport Plataforma" />
        </div>
      </section>

      {/* Sección de proyectos a futuro */}
      <section className="proyectos-futuros">
        <h2> Proyectos a Futuro</h2>
        <p>
          Expansión a más deportes, nuevas tecnologías en personalización y experiencias inmersivas en 3D. 
          Nuestro objetivo es ofrecerte lo mejor en diseño deportivo digital.
        </p>
      </section>
    </div>
  );
};

export default Servicios;
