import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Home.css";
import logo from "../assets/logo.png";
import Chatbot from "../Components/Chatbot"; // Importación del Chatbot

const Home = () => {
  // Estado para manejar la razón activa
  const [razonActiva, setRazonActiva] = useState(2); // Comenzamos con Innovación Tecnológica seleccionada (índice 2)

  // Datos para las razones
  const razones = [
    {
      id: 0,
      titulo: "Desarrollo a Medida",
      descripcion: "Diseñamos soluciones personalizadas que se adaptan a tu negocio.",
      clase: "desarrollo"
    },
    {
      id: 1,
      titulo: "Entrega Rápida",
      descripcion: "Tu proyecto estará listo en el menor tiempo posible sin perder calidad.",
      clase: "entrega"
    },
    {
      id: 2,
      titulo: "Innovación Tecnológica",
      descripcion: "Utilizamos las últimas tecnologías para crear plataformas seguras y escalables.",
      clase: "innovacion"
    },
    {
      id: 3,
      titulo: "Soporte Continuo",
      descripcion: "Te acompañamos después del lanzamiento con mantenimiento y mejoras.",
      clase: "soporte"
    },
    {
      id: 4,
      titulo: "Experiencia Comprobada",
      descripcion: "Hemos trabajado con diversos sectores optimizando procesos digitales.",
      clase: "experiencia"
    }
  ];

  // Cambiar automáticamente cada 5 segundos (opcional)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setRazonActiva(prev => (prev + 1) % razones.length);
    }, 6000);
    
    return () => clearInterval(intervalo);
  }, [razones.length]);

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

      {/* SECCIÓN ¿POR QUÉ ELEGIR MOUSE TECH? - VERSIÓN INTERACTIVA */}
      <section className="por-que-elegir">
        <h2>¿Por qué elegir Mouse Tech?</h2>
        <div className="razones-contenedor">
          {/* Panel de menú izquierdo */}
          <div className="razones-menu">
            {razones.map((razon, index) => (
              <div 
                key={razon.id}
                className={`razon-opcion ${razonActiva === index ? 'activa' : ''}`}
                onClick={() => setRazonActiva(index)}
              >
                <div className="icono">{index + 1}</div>
                <h3>{razon.titulo}</h3>
              </div>
            ))}
          </div>
          
          {/* Panel de contenido derecho */}
          <div className="razones-contenido">
            {razones.map((razon, index) => (
              <div 
                key={razon.id}
                className={`razon-detalle ${razonActiva === index ? 'activo' : ''}`}
              >
                <h4>{razon.titulo}</h4>
                <p>{razon.descripcion}</p>
                <div className={`razon-imagen ${razon.clase}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN METODOLOGÍA DE TRABAJO - ACTUALIZADA */}
      <section className="metodologia">
        <h2>Nuestra Metodología de Trabajo</h2>
        <div className="puzzle-container">
          
          <div className="puzzle-piece amarillo">
            <h3>1. Análisis de requisitos</h3>
            <p>Evaluamos tus necesidades y definimos los objetivos del proyecto.</p>
            <div className="conector-horizontal"></div>
            <div className="conector-vertical"></div>
          </div>
          
          <div className="puzzle-piece verde">
            <h3>2. Diseño y prototipo</h3>
            <p>Presentamos un diseño inicial para tu aprobación antes del desarrollo.</p>
            <div className="conector-vertical"></div>
          </div>
          
          <div className="puzzle-piece rojo">
            <h3>3. Desarrollo e Implementación</h3>
            <p>Programamos y optimizamos el sistema con las mejores prácticas.</p>
            <div className="conector-horizontal"></div>
          </div>
          
          <div className="puzzle-piece azul">
            <h3>4. Pruebas y lanzamiento</h3>
            <p>Realizamos pruebas exhaustivas para asegurar la calidad del producto.</p>
          </div>

        </div>
      </section>

      {/* CHATBOT INTEGRADO (Aparecerá flotante en todas las páginas) */}
      <Chatbot /> {/* Solo necesitas esta línea */}

    </div>
  );
};

export default Home;