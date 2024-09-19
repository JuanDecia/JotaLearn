import React from "react";
import styled from "styled-components";

const Caracteristicas = () => {
  return (
    <MainContainer>
      <article className="contenedor-articulo contenedor-titulo">
        <h1>Características de los algoritmos</h1>
      </article>

      {/* --- Contenedor Contenido Principal */}
      <article className="contenedor-articulo main-content">
        <p spellCheck='true'>
          Los algoritmos tienen unas características definidas para que podamos identificarlos como tal. Si una de estas características no está presente en el algoritmo, entonces no podemos decir que estamos frente a uno o que este tenga errores lo cual no permite que cumpla su correcta función.
        </p>
        
        {/* --- Contenedor Ordenados */}
        <div className="cont-ordenados">
          <h2>Ordenados</h2>

          <p >
            Los algoritmos no son solo el conjunto de pasos, se debe definir también la <b>secuencia</b> en la que dichos pasos se deben realizar. Existe cierto <b>orden</b> que se debe cumplir para lograr el objetivo.
          </p>

          <p>
            Por ejemplo, no es lo mismo colocar la comida en el horno por media hora y luego prender el horno, que, prender el horno y colocar la comida por media hora.
          </p>

          <h3>Estructura Secuencial</h3>

          <p>
            Podemos caracterizar a los algoritmos según la definición de <b>ordenados</b> como una <b>estructura secuencial</b>, es decir, que la <b>salida</b> de una tarea es el <b>comienzo</b> de una nueva de manera <b>consecutiva</b> hasta llegar a su fin .
          </p>
        </div>

        {/* --- Contenedor Finitos */}
        <div className="cont-finitos">
          <h2>Finitos</h2>

          <p>
            Los pasos de un algoritmo tienen que tener una cantidad determinada de pasos y, eventualmente, tener al menos un paso final. Es decir, que los algoritmos no pueden tener una cantidad infinita de pasos. Esto sucede porque los algoritmos nos permiten tener solución a un problema y necesitamos llegar a su final para conseguirlo.
          </p>
        </div>

        {/* --- Contenedor Definidos */}
        <div className="cont-definidos">
          <h2>Definidos</h2>

          <p>
            Dado un problema determinado, si se sigue el mismo algoritmo, se debe llegar a los mismos resultados. Es decir, los algoritmos tienen un objetivo a cumplir y esto debe reflejarse en el resultado.
          </p>
        </div>

        {/* --- Ejemplo */}
        <div className="cont-ejemplo">
          <h3>Ejemplo de algoritmo</h3>

          <ol>
            <li>Acercarse a la puerta</li>
            <li>Levantar la mano</li>
            <li>Agarrar el picaporte</li>
            <li>Empujar el picaporte hacia abajo</li>
            <li>Empujar la puerta</li>
            <li>Soltar el picaporte</li>
            <li>Caminar hacia adelante</li>
            <li>Darse la vuelta en 180°</li>
            <li>Levantar la mano</li>
            <li>Agarrar nuevamente el picaporte</li>
            <li>Empujar la puerta suavemente hasta que se tope</li>
          </ol>

          <br />

          <p>
            Si nos detenemos a observar el algoritmo de ejemplo, nos damos cuenta que cumple con las características que anteriormente mencionamos. <b>Posee un orden</b>, está ordenado por una secuencia de números que indican el orden que se debe seguir. <b>Es finito</b>, el total de números de pasos es determinado (11), después del último, obtenemos el resultado. <b>Es definido</b> si realizamos estos pasos correctamente bajo las mismas condiciones mencionadas obtenemos el mismo tipo de resultado frente a una situación similar.
          </p>
        </div>

        {/* --- Algoritmos tecnología */}
        <div className="cont-tecnologia">
          <h2>Algoritmos en tecnología</h2>

          <p>
            En el caso de la programación podemos encontrar algortimos mucho más complejos, pero siempre respetando la misma estructura. Es decir, tienen un orden, cumplen una serie de pasos bajo una regla para cumplir su objetivo. Entonces, cuando nos referimos a los algoritmos relacionados a la tecnología, podemos encontrar estas características adicionales:
          </p>

          <br />

          <ul className="lista-caracteristicas">
            <li>
              <b>Preciso:</b> Los algoritmos son precisos porque siempre nos darán el resultado esperado.
            </li>
            <li>
              <b>Entrada:</b> Los algoritmos cuentan con entrada de datos para poder llevar a cabo su proceso.
            </li>
            <li>
              <b>Salida:</b> Los algoritmos cuentan con salida de información para devolver el resultado de su proceso.
            </li>
            <li>
              <b>Eficiente:</b> Los algoritmos deben ser eficientes para que su respuesta ocupe el menor tiempo de espera y uso en memoria.
            </li>
          </ul>

          <h3>Ejemplo de algoritmo relacionado en la tecnología</h3>

          <div className="cont-ejemplo">
            <ol>
              <li>Obtener el valor del primer número de la suma.</li>
              <li>Obtener el valor del segundo número de la suma.</li>
              <li>Finalizar la operación de la suma entre dichos números.</li>
              <li>Realizar una multiplicación entre el resultado de la suma y el número (2).</li>
            </ol>
          </div>
        </div>

      </article>
    </MainContainer>
  );
};

export default Caracteristicas;

const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 10px;

  /* ### ESTILOS GENERALES */ 
  & h2 {
    font-size: 1.5em;
    margin: 10px 0;
  }

  & .main-content {
    display: flex;
    flex-direction: column;
    gap: 15px;

    & .cont-ordenados {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  }

  & .lista-caracteristicas {
    margin-left: 30px;
    list-style: disc;

    & :nth-last-child(even), :nth-last-child(odd) {
      margin-bottom: 20px;
    }
  }

  & .cont-ejemplo {

    & ol {
      
      margin-left: 30px;

      & li:nth-child(odd) {
        margin: 20px 0;
      }

    }
  }


`;
