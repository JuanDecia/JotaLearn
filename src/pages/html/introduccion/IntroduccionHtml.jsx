import React from "react";
import styled, { keyframes } from "styled-components";

const Introduccion = () => {
  return (
    <ContenedorIntroduccion>
      <main>
        <h1>Introducción a HTML</h1>
        <section>

          {/* Contenedor Introduccion */}
          <article className="cont-introduccion">
            <div className="cont-parrafo">
              <p>
                <strong>HTML</strong> es el{" "}
                <strong>
                  Lenguaje de Marcas de Hipertexto (Hyper Text Markup Language)
                </strong>{" "}
                es empleado para el desarrollo de páginas web. Proporciona
                formato a los{" "}
                <strong>contenedores</strong> que aparecen como textos en las
                páginas, a través de uso de etiquetas.
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
                scripts para ampliar las opciones de interacción que un sitio
                web ofrece a los usuarios.
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
                  palabra o conjunto de palabras rodeadas por corchetes
                  angulares “&#60 &#62”
                </strong>{" "}
                que indican el inicio y el fin de un elemento. Las etiquetas
                suelen tener un formato de apertura y cierre, con el formato de
                cierre llevando una diagonal invertida después del primer
                corchete angular.
              </p>

              <p>
                Por ejemplo, la etiqueta &#60p&#62 indica el inicio de un
                párrafo, y la etiqueta &#60/p&#62 indica su fin. Así, todo el
                texto incluido entre estas dos etiquetas se consideraría un
                párrafo.
              </p>

              <p>
                Las etiquetas pueden tener <strong>atributos</strong>, que son
                valores que se añaden a la etiqueta para proporcionar{" "}
                <strong>información adicional sobre el elemento</strong>. Por
                ejemplo, la etiqueta &#60img&#62 se utiliza para mostrar
                imágenes en una página web, y puede tener el{" "}
                <strong>atributo "src"</strong>, que especifica la dirección URL
                de la imagen que se debe mostrar.
              </p>

              <p>
                Además, hay etiquetas que no requieren una etiqueta de cierre,
                por lo tanto, se cierran a sí mismas. Estas etiquetas se
                utilizan para representar elementos que no contienen ningún
                contenido o texto.
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
      </main>
    </ContenedorIntroduccion>
  );
};

// Animaciones
const fade = keyframes`
  from {
      opacity: 0;
    }
  to {
      opacity: 1;
    }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

// Contenedor Principal
export const ContenedorIntroduccion = styled.div`
  padding: 10px;
  margin: auto;
  font-family: "Ubuntu", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* Imagen Fija */

  & main {
    background-color: rgba(197, 201, 204, 0.84);
    padding: 20px;
    border-radius: 5px;
  }

  & h1 {
    margin-bottom: 20px;
    font-size: 2.4em;
    text-align: center;
    color: rgb(15, 110, 110);
    text-shadow: 6px 4px 6px rgba(0,0,0,0.42);
    animation: ${fade} 1.2s ease-in, ${slideDown} 1.5s ease-in-out;
  }

  & .subtitulo {
    margin: 20px 0;
    color: rgb(38, 99, 231);
  }

  & img {
    border-radius: 20px;
    max-width: 80%;
  }

  & p {
    text-align: justify;
    line-height: 21px;
  }

  & strong {
    font-style: italic;
    color: rgb(0, 0, 0);
  }

  & .cont-introduccion {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & .cont-parrafo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .lista-objetivos {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    list-style: circle;
  }
`;

export default Introduccion;
