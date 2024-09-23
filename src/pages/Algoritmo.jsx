import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import UseToggleSections from '../components/useToggleSections'

// Algoritmo Pages
import Caracteristicas from "./introduccionProgramacion/algoritmo/Caracteristicas";
import PartesAlgoritmo from "./introduccionProgramacion/algoritmo/PartesAlgoritmo";
import TiposAlgoritmo from "./introduccionProgramacion/algoritmo/TiposAlgoritmo";
import EstructuraAlgoritmo from "./introduccionProgramacion/algoritmo/EstructuraAlgoritmo";

// Bases Pages
import IntroduccionProgramacion from "./introduccionProgramacion/basesProgramacion/IntroduccionProgramacion";
import ConceptosFundamentales from "./introduccionProgramacion/basesProgramacion/ConceptosFundamentales";

// Pseudocódigo Pages
import Pseudocodigo from "./introduccionProgramacion/pseudocodigo/Pseudocodigo";

// Diagrama Pages
import DiagramaIntroduccion from "./introduccionProgramacion/diagramaFlujo/DiagramaIntroduccion";

// Icons 
import { CiMenuBurger } from "react-icons/ci";

// Initial Page
const Introduccion = () => {
  return(
    <StyledArticle>
      <h1>Introducción a la Programación: Algoritmos</h1>

      <h2>Introducción</h2>

      <p>
        Los problemas son algo cotidiano en nuestras vidas, estamos solucionando problemas constantemente en nuestro trabajo (como llegar a tiempo) como en nuestra vida personal (realizar la cena). Durante todo el día estamos solucionando los problemas que se nos presentan, y aunque no nos demos cuenta, seguimos una serie de pasos consecutivos o secuenciales para resolverlos. Este conjunto de pasos que utilizamos para llegar a la solucion del problema se llama algoritmo.
      </p>

      <p>
        El primer paso para aprender a programar es entender los{" "}
        <b>algoritmos</b>. Un algoritmo es una secuencia de pasos claros y
        precisos que describen cómo resolver un problema o realizar una tarea.
        Es como una receta de cocina, donde cada instrucción debe ser seguida
        en un orden específico para obtener el resultado deseado.
      </p>

      <figure>
        <img className="img-algoritmo" src="https://i.pinimg.com/564x/43/7f/73/437f7366a21d3ba14f1c0d779b8dea6e.jpg" alt="algoritmo" />
      </figure>
    </StyledArticle>
  )
};

// ESTRUCTURAS SUB INDICES

const Algoritmo = () => {
  const [isopen, setIsOpen] = useState(false);
  
  const closeSidebar = () => {
    setIsOpen(false);
  };
  
  const { openSections, toggleSection, closeAllSections } = UseToggleSections(closeSidebar); // Estado para gestionar las secciones despegables
  
  const toggleSidebar = () => {
    setIsOpen(!isopen);
  };

  return (
    <MainContainer $isopen={isopen.toString()}>
      {isopen && <Overlay />}
      <main className={isopen ? "open" : "closed"}>
        <section className="main-content">
          <CargaPagina>
            <Routes>
              
              {/* Algoritmos páginas */}
              <Route 
                path="/introduccionProgramacion/algoritmo/Caracteristicas" 
                element={ <Caracteristicas /> } 
              />

              <Route 
                path="/introduccionProgramacion/algoritmo/PartesAlgoritmo" 
                element={ <PartesAlgoritmo /> } 
              />

              <Route 
                path="/introduccionProgramacion/algoritmo/EstructuraAlgoritmo"
                element={ <EstructuraAlgoritmo /> }
              />

              <Route 
                path="/introduccionProgramacion/algoritmo/TiposAlgoritmo" 
                element={ <TiposAlgoritmo /> } 
              />

              {/* Bases páginas */}
              <Route 
                path="/introduccionProgramacion/basesProgramacion/IntroduccionProgramacion"
                element={ <IntroduccionProgramacion /> }
              />
              <Route 
                path="/introduccionProgramacion/basesProgramacion/ConceptosFundamentales"
                element={ <ConceptosFundamentales /> }
              />

              {/* Pseudocódigo páginas */}
              <Route path="/introduccionProgramacion/pseudocodigo/Pseudocodigo" element={ <Pseudocodigo /> } />

              {/* Diagrama páginas */}
              <Route path="/introduccionProgramacion/diagramaFlujo/DiagramaIntroduccion" element={<DiagramaIntroduccion />} />
              <Route path="*" element={<Introduccion />} />
            </Routes>
          </CargaPagina>
          <div className="menu-icon-container">
            <CiMenuBurger className="menu-icon" onClick={toggleSidebar} />
          </div>
        </section>

        {/* Contenedor Nav */}
        <AsideNavigation className={isopen ? "open" : "closed"}>
          <nav>
            <ul className="lista-indices">
              {/* Algoritmos */}
              <li className="indice-principal">
                <div className="cont-indice-principal" onClick={() => toggleSection("algoritmos")}>
                  <span className="link-indice-principal">Algoritmos</span>
                </div>
                {openSections.algoritmos && (
                  <ul className="lista-temas">
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/algoritmo/Caracteristicas">
                        1. Características
                      </Link>
                    </li>
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/algoritmo/PartesAlgoritmo">
                        2. Partes de un algoritmo
                      </Link>
                    </li>
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/algoritmo/EstructuraAlgoritmo">
                        3. Estructura Algoritmo
                      </Link>
                    </li>
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/algoritmo/TiposAlgoritmo">
                        4. Tipos de algoritmos
                      </Link>
                    </li>
                  </ul>
                )}

                {/* Bases programacion */}
                <div className="cont-indice-principal" onClick={() => toggleSection('logica')}>
                  <span className="link-indice-principal">Bases de programación</span>
                </div>
                {openSections.logica && (
                  <ul className="lista-temas">
                    <li className="subindice" onClick={closeSidebar}>
                      <Link 
                        to="/Algoritmo/introduccionProgramacion/basesProgramacion/IntroduccionProgramacion">
                          1. Introducción
                      </Link>
                    </li>
                    <li className="subindice" onClick={closeSidebar}>
                      <Link 
                        to="/Algoritmo/introduccionProgramacion/basesProgramacion/ConceptosFundamentales">
                          2. Conceptos Fundamentales
                      </Link>
                    </li>
                  </ul>
                )}

                {/* Pseudocódigo */}
                <div className="cont-indice-principal" onClick={() => toggleSection('pseudocodigo')}>
                  <span className="link-indice-principal">Pseudocódigo</span>
                </div>
                {openSections.pseudocodigo && (
                  <ul className="lista-temas">
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/pseudocodigo/Pseudocodigo">1. Introducción Pseudocodigo</Link>
                    </li>
                  </ul>
                )}

                {/* Diagrama de Flujo */}
                <div className="cont-indice-principal" onClick={() => toggleSection('diagramaFlujo')}>
                  <span className="link-indice-principal">Diagramas de flujo</span>
                </div>
                {openSections.diagramaFlujo && (
                  <ul className="lista-temas">
                    <li className="subindice" onClick={closeSidebar}>
                      <Link to="/Algoritmo/introduccionProgramacion/diagramaFlujo/DiagramaIntroduccion">1. Introducción a diagrama de flujo</Link>
                    </li>
                  </ul>
                )}

                {/* Pseint */}
                <div className="cont-indice-principal" onClick={() => toggleSection('pseint')}>
                  <span className="link-indice-principal">Pseint</span>
                </div>
                {openSections.pseint && (
                  <ul></ul>
                )}
                
              </li>
            </ul>
          </nav>
        </AsideNavigation>
      </main>
    </MainContainer>
  );
};

// ### ESTILOS INTRODUCCION ###
export const StyledArticle = styled.article`
  
  display: flex;
  flex-direction: column;
  gap: 15px;

  & figure {
    display: flex;
    justify-content: center;
  }

  & .img-algoritmo {
    width: 400px;
  }
`;

export const MainContainer = styled.div`

  // Accedemos al prop antes de enviarlo al DOM.
  display: ${(props) => (props.$isopen ? "block" : "none")};

  width: 100%;
  margin: auto;
  padding: 10px;
  font-family: "Ubuntu", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* Imagen Fija */

  /* --- ESTILOS GENERALES --- */

  & h1 {
    margin-bottom: 20px;
    font-size: 2.5em;
    text-align: center;
  }

  & h2 {
    font-size: 1.9em;
  }

  & h3 {
    font-size: 1.5em;
  }

  h4 {
    font-size: 1.2em;
  }

  & p {
    text-align: justify;
    font-size: 1.1em;
  }
  
  /* ### SECCIÓN CONTENIDO PRINCIPAL ### */

  & main {
    display: flex;
    background-color: rgba(197, 201, 204, 0.84);
    transition: margin-left 0.3s;

    &.open {
      margin-left: 250px;
    }

    &.closed {
      margin-left: 0;
    }
  }

  & .menu-icon-container {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 1001;
  }

  & .menu-icon {
    width: 45px;
    height: 45px;
    cursor: pointer;
  }

  /* ### CONTENT ### */

  & .main-content {
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    overflow-y: auto;
    position: relative;
  }
`;

/* ### CONTENEDOR NAV ### */
export const AsideNavigation = styled.div`
  width: 25%;
  height: 100%;
  background-color: rgba(243, 244, 246, 0.89);
  transition: transform 0.3s;
  transform: translateX(-100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;

  /* ### CLASES PARA EL ESTADO ### */
  &.open {
    transform: translateX(0);
  }

  &.closed {
    transform: translateX(-100%);
  }

  /* ### ELEMENTO NAV ### */
  & nav {

    & .lista-indices {
      list-style: none;
      padding: 0;

      & li {
        margin: 15px 0;

        & .cont-indice-principal {
          margin: 20px 0;
        }

        & .link-indice-principal {
          padding: 10px;
          font-size: 1.5em;
          position: relative;
          cursor: pointer;
        }

        & .link-indice-principal::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: black; /* Color del subrayado */
          transform: scaleX(0); /* Oculta el subrayado al principio */
          transform-origin: left; /* Comienza el subrayado desde la izquierda */
          transition: transform 0.4s ease-in-out; /* Duración y estilo de la transición */
        }

        & .link-indice-principal:hover::after {
          transform: scaleX(1); /* Expande el subrayado desde la izquierda hacia la derecha */
        }

        & a {
          margin-left: 20px;
          text-decoration: none;
          color: black;

          &:hover {
            color: rgb(15, 110, 110);
          }
        }
      }
    }
  }

  @media (max-width: 992px) {
    width: 45%;


  }
`;

/* ### EFECTO OVERLAY ### */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const CargaPagina = styled.div``;

export default Algoritmo;
