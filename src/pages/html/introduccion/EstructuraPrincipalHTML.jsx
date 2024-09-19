import React from "react";
import styled, { keyframes } from "styled-components";

const EstructuraPrincipal = () => {
  return (
    <MainContainer>
      <main>
        <article className="cont-title">
          <h1>Estructura de un código HTML</h1>
        </article>

        <section>

          {/* Introduccion */}
          <article>
            <h2>Estructura de un archivo de HTML </h2>

            <ul>
              <li>
                El identificador de la versión del documento que es la etiqueta{" "}
                <b>&#60;!DOCTYPE html&#62;</b>.
              </li>
              <li>
                La etiqueta <b>html</b> que contiene las dos estructuras
                importantes que son: <b>head</b> y <b>body</b>.
              </li>
            </ul>

            <p>
              En nuestra práctica encontraremos la <b>versión del documento</b>{" "}
              en la <b>línea 3</b>. Seguido se crea la estructura de <b>html</b>{" "}
              que inicia en la <b>línea 4</b> y finaliza por el momento en la
              última etiqueta de nuestro documento.
            </p>

            {/* Ejemplo Código */}
            <div className="cont-codigo">
              <code>
                2. &#60;<span className="nombre-etiqueta">html</span>&#62;
                <br />
                3. &#60;/<span className="nombre-etiqueta">html</span>&#62;
              </code>
            </div>

            <div class="cont-img">
              <img src="./img/Estructura.png" alt="estructura-de-html" />
            </div>
          </article>

          <hr />

          {/* Articulo Head */}
          <article>
            <h2>Head</h2>

            <p>
              En la estructura de esta etiqueta <b>agregaremos metadatos</b> e
              información complementaria de nuestra página para el render del
              navegador.
            </p>

            <p>
              Los <b>metadados</b> son información específica que{" "}
              <b>modifican el comportamiento</b> en algunos aspectos de nuestra
              página.
            </p>

            <p>
              Un ejemplo de <b>metadatos</b> es la aplicación de los{" "}
              <b>caracteres especiales</b> que existen en los diferentes idiomas
              y que puedan ser renderizados de una manera <b>estándar</b> por el
              navegador, este tipo de caracteres especial es conocido como{" "}
              <b>UTF-8</b>. Estos caracteres podemos aplicarlos a nuestra página
              gracias a la <b>etiqueta meta</b> que podemos visualizarla en la{" "}
              <b>línea 4</b> del ejemplo de la imagen anterior.
            </p>

            <p>
              Otro ejemplo de meta información es la funcionalidad de{" "}
              <b>adaptar visualmente</b> nuestra página a el <b>viewport</b> de
              cualquier dispositivo. <br />
              El viewport es el <b>área visual</b> del <b>navegador</b> en la{" "}
              <b>pantalla</b> del <b>dispositivo</b> en el que el usuario está
              visitando la página. <br />
              Para realizar esto debemos usar la <b>etiqueta meta</b> con una
              serie de <b>propiedades y valores</b> que son indicados en la{" "}
              <b>línea 5</b> del ejemplo que se encuentra en la imagen anterior.
            </p>

            <p>
              Al escribir la propiedad con el valor <b>width=device-width</b> le
              ordenamos al navegador que el <b>viewport</b>
              debe ser <b>
                igual del ancho de la pantalla del dispositivo
              </b>{" "}
              donde se está cargando la página.
            </p>

            <p>
              También, en esta sección se utiliza la <b>etiqueta "title"</b> que
              es la encargada de asignar el <b>título</b>
              que aparecerá en la <b>pestaña del navegador</b>. Esta se
              encuentra indicada en la <b>línea 6</b> del ejemplo.
            </p>

            <p>
              Con estos sencillos pasos tendremos una <b>estructura básica</b>{" "}
              de la construcción de <b>head</b> de nuestro documento html.
            </p>
          </article>

          <hr />

          {/* Articulo Body */}
          <article>
            <h2>Body</h2>

            <p>
              En la etiqueta <b>body</b> escribimos el contenido del documento
              HTML que se visualizará en nuestra página web.
            </p>

            <p>
              Para que el contenido de nuestra página sea visible debemos
              utilizar la etiqueta <b>body</b>, en la cual, agregaremos todas
              las etiquetas que sean necesarias para que el navegador las{" "}
              <b>renderice y sean visibles</b>
              por el usuario. La cantidad, estructura y diferentes etiquetas que
              utilizaremos son de acuerdo a las necesidades de la página que
              estamos construyendo. Podemos visualizar esta etiqueta en el
              ejemplo anterior, comienza en la{" "}
              <b>línea 8 y finaliza en la línea 10.</b>
            </p>

            <p>
              En el contenido del ejemplo, solo hay un texto “bienvenido” que no
              contiene ninguna etiqueta (mala práctica) y que se encuentra en la
              línea 9. Esto se debe a que solo es un ejemplo ilustrativo, en
              realidad a partir de la línea 8 se colocarán todas las etiquetas
              que conformen el contenido visible de nuestra página web.
            </p>

            <p>
              Para finalizar es importante saber que dentro de <b>“body”</b>{" "}
              encontraremos etiquetas que realizan una función <b>semántica</b>,
              es decir, solo crean contenedores. También, recordemos el uso de
              la indentación para mantener el código ordenado y entender mejor
              su estructura.
            </p>
          </article>

          {/* Construcción Automática */}
          <article>
            <h2>Tip! Construcción Automática</h2>
          </article>

          <p>
            Utilizando Visual Studio Code, al abrir un archivo HTML vacío , si
            escribimos <b>“!”</b> o <b>“html:5”</b> y seleccionamos la opción
            que nos da el editor generada automáticamente llamada <b>emmet</b>,
            podremos crear la estructura básica para empezar a trabajar en
            nuestro código.
          </p>

          <div class="cont-img">
            <img
              src="./img/!.png"
              alt="estructura-principal"
              title="estructura-principal"
            />
          </div>

          <p>
            Al apretar <b>“enter”</b> o <b>“tab”</b>, nos generará la siguiente
            estructura base:
          </p>

          <div class="cont-img">
            <img
              src="./img/estructuraBasica.png"
              alt="estructura-basica"
              title="estructura-basica"
            />
          </div>
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

// Contenedor Principal
export const MainContainer = styled.div`
  margin: auto;
  padding: 10px;
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

  & section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & article {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & h1 {
    margin-bottom: 20px;
    font-size: 2.4em;
    text-align: center;
    color: rgb(15, 110, 110);
    text-shadow: 6px 4px 6px rgba(0, 0, 0, 0.42);
    animation: ${fade} 1.2s ease-in, ${slideDown} 1.5s ease-in-out;
  }

  & h2 {
    margin-top: 10px;
    color: rgb(38, 99, 231);
  }

  & ul {
    margin-left: 20px;
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 10px;
  };

`;

export default EstructuraPrincipal;
