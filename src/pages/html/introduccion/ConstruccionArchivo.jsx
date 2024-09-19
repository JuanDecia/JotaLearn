import React from "react";
import styled, { keyframes } from "styled-components";

const ConstruccionArchivoHtml = () => {
  return (
    <MainContainer>
      <main>
        <h1>Construccion del archivo HTML</h1>

        <section>

          {/* Etiqueta Doctype */}
          <article className="articulo">
            <h2>Etiqueta "!DOCTYPE html"</h2>

            <p>
              La etiqueta <b>"!DOCTYPE"</b> se encarga de establecer el tipo de
              versión de HTML que se establece en el navegador. Su versión es
              HTML5. Esta etiqueta{" "}
              <b>se declara en la línea 1 del documento html</b> que estemos
              maquetando.
            </p>

            <div className="cont-codigo">
              <code>
                1. &#60;!<span className="nombre-etiqueta">DOCTYPE </span>
                <span className="propiedad-etiqueta">html</span>/&#62;
              </code>
            </div> {/* Se agrega ';' para dibujar un símbolo en React */}

          </article>

          {/* Etiqueta HTML */}
          <article className="articulo">
            <h2>Etiqueta HTML</h2>

            <p>
              Esta etiqueta se coloca en la segunda secuencia del código.
              Recordemos que en la primer línea declaramos la versión de HTML que usaremos
              en el documento, en la siguiente línea '2' vamos a <b>identificar</b>{" "}
              que el archivo que vamos a construir es de <b>tipo HTML</b>. Esta etiqueta tiene{" "}
              <b>apertura y cierre</b>, porque, llevará toda la construcción de la estructura
              de la página dentro de ella.
            </p>

            <div className="cont-codigo">
              <code>
                2. &#60;<span className="nombre-etiqueta">html</span>&#62;
                <br />
                3. &#60;/<span className="nombre-etiqueta">html</span>&#62;
              </code>
            </div>

          </article>

          {/* Entidades HTML */}
          <article className="articulo">
            <h2>Entidades (Símbolos) HTML</h2>

            <p>
              La representación de símbolos es un problema en los lenguajes de
              programación. Un símbolo especial puede ser una arroba (@), usado
              en los correos electrónicos o un símbolo de dólar ($), empleando
              para distinguir una moneda específica, entre tantos ejemplos.
            </p>

            <p>Hay dos maneras de codificar una entidad HTML:</p>

            <ul>
              <li>
                La primera es a través del uso del ampersand (&) seguido del
                código o nombre de la entidad y terminado en un punto y coma.
              </li>
              <li>
                La segunda es usando el ampersand (&), a continuación, el
                numeral (#) y siguiente el código o nombre de la entidad y
                terminado en punto y coma.
              </li>
            </ul>

            <h3>Ejemplo:</h3>

            <ol className="lista-ordenada">
              <li>
                <b>&nombre_entidad;</b>
              </li>
              <li>
                <b>&#número_entidad;</b>
              </li>
            </ol>

            <p>
              Estas son algunas entidades HTML útiles. En la siguiente tabla se
              puede visualizar como se puede utilizar el número de la entidad
              (código de la entidad) o el nombre de la entidad.
            </p>

            <div className="cont-link">
              <a
                href="https://developer.mozilla.org/es/docs/Glossary/Entity"
                target="_blank"
              >
                <h3>Página de los códigos de las entidades</h3>
              </a>
            </div>
          </article>

          {/* Entidades */}
          <article className="articulo">
            <h2>Sintaxis Entidades:</h2>
            <p>
              El siguiente código HTML es un ejemplo del uso de las entidades
              HTML:
            </p>

            <ul>
              <li>Esta camisa me costó: "&"euro;5</li>
              <li>El per "&"#237;metro de un c"&"iacute;rculo es 2"&"Pi;</li>
              <li>
                Este es mi correo electr"&"oacute;nico:
                micorreo"&"#64;correo.com
              </li>
            </ul>

            <p>
              Se le colocaron <b>comillas</b> al símbolo <b>&</b> para que se
              pueda ver como es el ejemplo práctico, ya que, si no las lleva
              (solo como ejemplo) nos escribe el símbolo como en el siguiente
              ejemplo.
            </p>

            <p className="parrafo-margen">
              <b>Esto se plegará como:</b>
            </p>

            <ul>
              <li>
                Esta camisa me costó: <b>&euro;</b>5
              </li>
              <li>
                El per<b>&#237;</b>metro de un c&iacute;rculo es 2<b>&Pi;</b>
              </li>
              <li>
                Este es mi correo electr&oacute;nico: micorreo<b>&#64;</b>
                correo.com
              </li>
            </ul>
          </article>
        </section>
      </main>
    </MainContainer>
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

export const MainContainer = styled.div`
  margin: auto;
  padding: 10px;
  font-family: "Ubuntu", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* Imagen Fija */

  & main {
    padding: 20px;
    border-radius: 5px;
    background-color: rgba(197, 201, 204, 0.85);
  }

  & section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .articulo {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & h1 {
    margin-bottom: 20px;
    font-size: 2.4em;
    text-align: center;
    color: rgb(15, 110, 110);
    text-shadow: 6px 4px 6px rgba(0,0,0,0.42);
    animation: ${fade} 1.2s ease-in, ${slideDown} 1.5s ease-in-out;
  }

  & h2 {
    margin-top: 10px;
    color: rgb(38, 99, 231);
  }

  & h3 {
    color: rgb(103, 45, 240);
  }

  & .lista-ordenada {
    list-style: none;
  }

  & p {
    text-align: justify;
  }

  /* Ejemplos de código */
  & .cont-codigo {
    padding: 7px;
    background-color: rgb(56,55,55);
    color: #c7c7c7;
  }

  & .nombre-etiqueta {
    color: rgb(22,128,250);
  }

  & .propiedad-etiqueta {
    color: #29b8e4;
  }

`;

export default ConstruccionArchivoHtml;
