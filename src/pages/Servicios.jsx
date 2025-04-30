import React, { useState, useEffect } from "react";
import "./../styles/Servicios.css"; 
import logsportImage from "./../assets/LOGSPORT.png";
import tiendaRotarPrimero from "./../assets/imagen/tienda_rotar_primero.png";
import tiendaRotarSegundo from "./../assets/imagen/tienda_rotar_segundo.png";
import tiendaRotarTercero from "./../assets/imagen/tienda_rotar_tercero.png";
import alisImage from "./../assets/imagen/alis.png";

const Servicios = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [tiendaRotarPrimero, tiendaRotarSegundo, tiendaRotarTercero];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="servicios-container fullwidth">
      {/* Sección de presentación con fondo rotativo */}
      <section 
        className="servicios-intro" 
        style={{ 
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="servicios-texto">
          <h1>ALISPORT</h1>
          <p>
            En <strong>Alis Sport</strong> ofrecemos una plataforma innovadora para la personalización de prendas deportiva. 
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

      {/* Sección de poleras a ancho completo */}
      <section className="disenos-poleras-fullwidth">
        <div className="poleras-content">
          <div className="poleras-texto">
            <h2>LOS MEJORES<br />DISEÑOS DE<br />PRENDAS DEPORTIVAS</h2>
            <p>Las prendas deportivas persanalizadas mas facheras del mercado<br />encontralas con nosotros</p>
          </div>
          <div className="poleras-imagen">
            <img src={alisImage} alt="Diseños de poleras" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;