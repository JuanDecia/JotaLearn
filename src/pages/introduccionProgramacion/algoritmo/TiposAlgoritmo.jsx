import React from 'react';
import styled from 'styled-components';

const TiposAlgoritmo = () => {
  return (
    <MainContainer>
        {/* Cabecera */}
        <article>
          <h1>Tipos de Algoritmos</h1>
        </article>

        {/* Contenido */}
        <article className='contenido-article'>
          <h2>Introducción</h2>

          <p>
            Además de tener partes y características los algoritmos pueden tener <b>tipos</b>, según su <b>objetivo o función</b> y en relación con la <b>estrategia</b> que se utiliza para llegar al resultado.
          </p>

          {/* Cuanlitativo Container */}
          <div className='contenedor-tipoAlgoritmo'>
            <h3>Algoritmos de tipo Cualitativo</h3>

            <p>
              Se utilizan para <b>definir la secuencia</b> de los pasos de un algoritmo, es decir, el <b>conjunto de pasos</b> para llegar al resultado.
            </p>

            <ol>
              <li>Abrir puerta del vehículo.</li>
              <li>Ingresar al vehículo.</li>
              <li>Cerrar puerta del vehículo</li>
              <li>Abrocharse el cinturón de seguridad</li>
              <li>Encender el vehículo.</li>
            </ol>
          </div>

          {/* Cuantitativo Container */}
          <div className="contenedor-tipoAlgoritmo">
            <h3>Algoritmos de tipo Cuantitativo</h3>

            <p>
              Los <b>algoritmos cuantitativos</b> se caracterizan por utilizar <b>cálculos matemáticos</b> para definir sus pasos. Otro aspecto relacionado es que en este tipo de algoritmo se utilizan <b>operadores matemáticos</b>.
            </p>
          </div>
        </article>
    </MainContainer>
  )
};

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    /* ### Articulo Contenido */
    & .contenido-article {
      display: flex;
      flex-direction: column;
      gap: 25px;

      & .contenedor-tipoAlgoritmo {
        display: flex;
        flex-direction: column;
        gap: 20px;

        & ol {
          margin-left: 30px;

          & li:nth-child(even) {
            margin: 10px 0;
          }
        }
      }

    }

`;

export default TiposAlgoritmo;