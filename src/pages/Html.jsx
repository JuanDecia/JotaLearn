// React Imports
import React from "react";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";

// Component Imports
import UseToggleSections from "../components/useToggleSections";

// Internal Pages
import Introduccion from "./html/introduccion/IntroduccionHtml";
import ConstruccionArchivoHtml from "./html/introduccion/ConstruccionArchivo";
import EstructuraPrincipal from "./html/introduccion/EstructuraPrincipalHTML";

// Icons
import { CiMenuBurger } from "react-icons/ci";

// Initial Page
const Html = () => {
  return (
    <InitialPage>
      <section>
        <article className="initialP-heading">
          <h1>Bienvenidos a HTML</h1>
        </article>

        {/* Contenedor Introduccion */}
        <article className="cont-introduccion">
          <div className="cont-parrafo">
            <p>
              <strong>HTML</strong> es el{" "}
              <strong>
                Lenguaje de Marcas de Hipertexto (Hyper Text Markup Language)
              </strong>{" "}
              es empleado para el desarrollo de páginas web. Proporciona formato
              a los <strong>contenedores</strong> que aparecen como textos en
              las páginas, a través de uso de etiquetas.
            </p>
          </div>

          <div className="cont-img">
            <img
              src="https://leonorcanuelo.com/wp-content/uploads/2015/12/1-1.png"
              alt="ejemplo html"
              title="ejemplohtml"
            />
          </div>

          <div className="cont-parrafo">
            <p>
              Con las <strong>etiquetas básicas de HTML </strong>se pueden
              inspeccionar las:{" "}
              <strong>
                listas, tablas, párrafos, encabezados e imágenes.{" "}
              </strong>
              Con esas bases establecidas es buena práctica continuar con la
              creación de formularios para usuarios. Los{" "}
              <strong>elementos multimedia</strong> (audio/ video) son
              soportados en distintos formatos para crear documentos que
              combinen textos, audio, video e imágenes de distintas formas.
              Además, HTML se pueden integrar otras tecnologías con el uso de
              scripts para ampliar las opciones de interacción que un sitio web
              ofrece a los usuarios.
            </p>
          </div>
        </article>

        {/* Contenedor Descripcion Etiqueta */}
        <article className="cont-etiqueta">
          <div className="cont-subTitulo">
            <h2 className="subtitulo">¿Qué es una etiqueta?</h2>
          </div>

          <div className="cont-parrafo">
            <p>
              Una etiqueta en HTML es una{" "}
              <strong>
                palabra o conjunto de palabras rodeadas por corchetes angulares
                “&#60 &#62”
              </strong>{" "}
              que indican el inicio y el fin de un elemento. Las etiquetas
              suelen tener un formato de apertura y cierre, con el formato de
              cierre llevando una diagonal invertida después del primer corchete
              angular.
            </p>

            <p>
              Por ejemplo, la etiqueta &#60p&#62 indica el inicio de un párrafo,
              y la etiqueta &#60/p&#62 indica su fin. Así, todo el texto
              incluido entre estas dos etiquetas se consideraría un párrafo.
            </p>

            <p>
              Las etiquetas pueden tener <strong>atributos</strong>, que son
              valores que se añaden a la etiqueta para proporcionar{" "}
              <strong>información adicional sobre el elemento</strong>. Por
              ejemplo, la etiqueta &#60img&#62 se utiliza para mostrar imágenes
              en una página web, y puede tener el{" "}
              <strong>atributo "src"</strong>, que especifica la dirección URL
              de la imagen que se debe mostrar.
            </p>

            <p>
              Además, hay etiquetas que no requieren una etiqueta de cierre, por
              lo tanto, se cierran a sí mismas. Estas etiquetas se utilizan para
              representar elementos que no contienen ningún contenido o texto.
            </p>
          </div>
        </article>

        <article className="cont-objetivos">
          <div id="cont-lista">
            <h2 className="subtitulo">Objetivos:</h2>
            <ul className="lista-objetivos">
              <li>
                Identificar el funcionamiento del navegador como herramienta
                para interpretar sitios web.
              </li>
              <li>
                Utilizar estructuras de etiquetas HTML para la construcción de
                páginas web.
              </li>
              <li>
                Utilizar objetos multimedia en la construcción de páginas web.
              </li>
            </ul>
          </div>
        </article>
      </section>

      <aside className="cont-glosario">
        <Glosario>
          <ol>
            <li>Introducción a HTML</li>
            <ul>
              <li>
                <Link to="/Html/html/introduccion">Introducción.</Link>
              </li>
              <li>
                <Link to="/Html/html/construccion-archivo">
                  Construcción archivo HTML.
                </Link>
              </li>
              <li>
                <Link to="/Html/html/estructura-principal">
                  Estructura principal en HTML.
                </Link>
              </li>
            </ul>
          </ol>
        </Glosario>
      </aside>
      <article className="cont-resultado">
        <ResultadoGlosario>
          <Routes>
            <Route path="/Html/introduccion" element={<Introduccion />} />
            <Route
              path="/Html/construccion-archivo"
              element={<ConstruccionArchivoHtml />}
            />
            <Route
              path="/Html/estructura-principal"
              element={<EstructuraPrincipal />}
            />
          </Routes>
        </ResultadoGlosario>
      </article>
    </InitialPage>
  );
};

export const InitialPage = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  & .cont-glosario {
    width: 20%;
    border: 1px solid red;
  }
`;

// Componente Glosario
export const Glosario = styled.div`
  padding: 20px;
`;

// Componente Resultado
export const ResultadoGlosario = styled.div`
  padding: 10px;
`;

export default Html;
