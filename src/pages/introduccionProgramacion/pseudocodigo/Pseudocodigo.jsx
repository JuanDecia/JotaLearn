import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pseudocodigo = () => {
  return (
    <MainPseudocodigo>
        {/* Cabecera */}
        <article className='main-article'>
            <h1>Pseudocódigo</h1>
        </article>

        {/* Contenido */}
        <article className='main-article content-article'>
            <h2>Introducción a Pseudocódigo</h2>

            <p>
                El pseudocódigo es considerado un lenguaje de <b>alto nivel</b>, debido a que es mucho más entendible para las personas. Su propósito es representar un <b>algoritmo</b>. Un lenguaje de pseudocódigo que podemos utilizar en nuestro ordenador es <b>Pseint</b>.
            </p>

            <p>
              Podemos descargar esta herramienta a través de su web <a href="https://pseint.sourceforge.net/"><b>Descargue Pseint Aquí</b></a>.
            </p>

            <p>
              En los siguientes temas vamos a detallar las partes fundamentales que conforman un algoritmo y los conceptos claves de los pseudocódigos para que un programa tenga su correcto funcionamiento.
            </p>
        </article>

    </MainPseudocodigo>
  )
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

const slideRight = keyframes`
  from {
    transform: translateX(-250px);
  }
  to {
    transform: translateX(0);
  }
`;

export const MainPseudocodigo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    /* --- Estilos Generales --- */

    & h2 {
        color: rgb(11, 104, 211);
        animation: ${slideRight} 1.5s ease-in-out, ${fade} 1.3s ease-in;
    }

    /* --- Estilos Contenido --- */

    & .content-article {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
`;

export default Pseudocodigo