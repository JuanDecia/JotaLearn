import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Iconos
import { IoIosCode } from "react-icons/io";
import { RiCss3Line } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GoDatabase } from "react-icons/go";
import { GrCatalogOption } from "react-icons/gr";

const Home = ({ cardsRef }) => {
  return (
    <HomeContenedor>
      {/* SECCIÓN HERO */}
      <section className="hero">
        <h1>Aprende Programación y Desarrollo Web con Jota!</h1>

        <div className="cont-subtitle">
          <h2>
            Desbloquea todo tu potencial guardado que tienes como programador
            con nuestros intensivos cursos
          </h2>
        </div>

        <div
          className="cont-get-started"
          onClick={() =>
            cardsRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Get Started
        </div>
      </section>

      {/* SECCIÓN CARDS */}
      <section className="card-section" ref={cardsRef}>
        <article className="cont-cards">

          {/* Card Introducción */}
          <div className="card">
            <Link to={'/Algoritmo'}>
              <div className="cont-icono">
                <GrCatalogOption className="card-icono"/>
              </div>

              <div className="cont-card-title">
                <h2>Algoritmos y Lógica</h2>
              </div>

              <div className="cont-card-foundaments">
                <p>Iniciación a la programación</p>
              </div>
            </Link>
          </div>

          {/* Card HTML */}
          <div className="card">
            <Link to='/Html'>
              <div className="cont-icono">
                <IoIosCode className="card-icono" />
              </div>

              <div className="cont-card-title">
                <h2>HTML</h2>
              </div>

              <div className="cont-card-foundaments">
                <p>Fundamentos principales en maquetado web con HTML</p>
              </div>
            </Link>
          </div>

          {/* Card CSS */}
          <div className="card">
            <div className="cont-icono">
              <RiCss3Line className="card-icono icono-css3" />
            </div>

            <div className="cont-card-title">
              <h2>CSS</h2>
            </div>

            <div className="cont-card-foundaments">
              <p>Fundamentos principales en el procesador de estilos CSS</p>
            </div>
          </div>

          {/* Card JavaScript */}
          <div className="card">
            <div className="cont-icono">
              <SiJavascript className="card-icono" />
            </div>

            <div className="cont-card-title">
              <h2>JavaScript</h2>
            </div>

            <div className="cont-card-foundaments">
              <p>
                Introdúcete en el mundo interactivo que proporciona JS para el
                desarrollo web
              </p>
            </div>
          </div>

          {/* Card React */}
          <div className="card">
            <div className="cont-icono">
              <FaReact className="card-icono" />
            </div>

            <div className="cont-card-title">
              <h2>React</h2>
            </div>

            <div className="cont-card-foundaments">
              <p>
                Explora el poder de React creando aplicaciones web modernas
              </p>
            </div>
          </div>

          {/* Card Node */}
          <div className="card">
            <div className="cont-icono">
              <FaNodeJs className="card-icono" />
            </div>

            <div className="cont-card-title">
              <h2>Node JS</h2>
            </div>

            <div className="cont-card-foundaments">
              <p>
                Aprende a construir aplicaciones desde el lado del cliente con
                Node JS
              </p>
            </div>
          </div>

          <div className="card">
            <div className="cont-icono">
              <GoDatabase className="card-icono" />
            </div>

            <div className="cont-card-title">
              <h2>Base de datos</h2>
            </div>

            <div className="cont-card-foundaments">
              <p>
                Explora el mundo de las bases de datos y aprende como
                construirlas
              </p>
            </div>
          </div>
        </article>
      </section>
    </HomeContenedor>
  );
};

export const HomeContenedor = styled.div`
  background-color: rgb(228, 228, 230);
  font-family: "Ubuntu", sans-serif;

  & .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 100px;
    background-color: #fff;
  }

  & h1 {
    font-size: 3.3em;
    text-align: center;
  }

  & h2 {
    margin: 15px auto;
    font-weight: 300;
    font-size: 1.2em;
    width: 95%;
    text-align: center;
    color: rgb(107, 114, 128);
  }

  & .cont-get-started {
    margin: 15px auto;
    display: flex;
    justify-content: center;
    width: 10%;
    padding: 11px;
    border-radius: 7px;
    background-color: black;
    color: #fff;
  }

  & .cont-get-started:hover {
    cursor: pointer;
  }

  /* ESTILOS SECCIÓN CARD */

  & .card-section {
    padding: 25px;
  }

  & .cont-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin: 110px 0;
  }

  & .card {
    width: 30%;
    padding: 20px;
    border-radius: 7px;
    background-color: #fff;
  }

  & .cont-icono {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  & .card-icono {
    font-size: 3.5em;
    font-weight: 600;
    color: rgb(107, 114, 128);
  }

  & .cont-card-title > h2 {
    color: black;
    font-size: 1.5em;
    font-weight: 500;
  }

  & .cont-card-foundaments {
    width: 75%;
    margin: auto;
  }

  & .cont-card-foundaments > p {
    font-size: 1.1em;
    text-align: center;
    color: rgb(107, 114, 128);
  }
`;

export default Home;
