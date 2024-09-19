import React from "react";
import styled from "styled-components";

const PartesAlgoritmo = () => {
  return (
    <MainContainer>
      <section className="cont-head">
        <h1>Partes de un algoritmo</h1>
      </section>

      {/* --- Main Content --- */}
      <section className="cont-main">

        {/* Introducción */}
        <article className="articulo-introduccion">
          <h2>Introducción</h2>

          <p>
            Los algoritmos cuentan con una estructura básica que la componen los siguientes elementos:
          </p>

          <div className="cont-lista">
            <ul>
              <li>
                <b>Entrada</b>: Los algoritmos siempre poseen una entrada; al ser nada más que una secuencia de pasos se necesita una entrada a la cual aplicar los pasos. En tecnología, generalmente esta entrada de datos se las solicita al usuario para que los ingrese. Un ejemplo de este tipo puede ser un formulario de creación de usuario o una calculadora.
              </li>
              <li>
                <b>Proceso</b>: se refiere a la manipulación de los datos que anteriormente se ingresaron para generar el resultado esperado para el usuario. Utilizando los ejemplos anteriores, estos datos completarán una base de datos para la información del usuario o en el otro caso los datos son utilizados para procesar una cuenta matemática.
              </li>
              <li>
                <b>Salida</b>: es la información que se obtiene del algoritmo, es decir, es el resultado del procesamiento de datos que ha ingresado el usuario o de los datos que tenemos.
              </li>
            </ul>
        </div>
      
        <figure>
          <img src="https://th.bing.com/th/id/OIP.kNn00VK9_mEk9xKvTL70JgHaFj?rs=1&pid=ImgDetMain" alt="" />
        </figure>
        </article>

        {/* Identificar partes */}
        <article className="articulo-partes">
          <h2>Identificar las partes de un algoritmo</h2>

          <p>
            Tomamos el ejemplo anterior del algoritmo de una calculadora, para identificar cuales son las partes que componen un algoritmo.
          </p>

          <div className="cont-table">
            <table>
              <thead>
                <tr>
                  <th>Pasos</th>
                  <th>Clasificación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Ingresar el primer número</td>
                  <td>Entrada</td>
                </tr>
                <tr>
                  <td>2. Seleccionar el operador matemático</td>
                  <td>Entrada</td>
                </tr>
                <tr>
                  <td>3. Ingresar el segundo número</td>
                  <td>Entrada</td>
                </tr>
                <tr>
                  <td>4. Realizar la operación matemática</td>
                  <td>Proceso</td>
                </tr>
                <tr>
                  <td>5. Mostrar el resultado</td>
                  <td>Salida</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </MainContainer>
  )
}

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* ### CONTENEDOR PRINCIPAL */
  & .cont-main {
    display: flex;
    flex-direction: column;
    gap: 15px;

    /* Estilos Introducción */

    & .articulo-introduccion {
      display: flex;
      flex-direction: column;
      gap: 15px;

      & .cont-lista {
    
        & ul {
          list-style: disc;
          margin-left: 30px;
    
          & li {
            text-align: justify;
          }
  
          & li:nth-child(even) {
            margin: 10px 0;
          }
        }
      }
  
      & figure {
        display: flex;
        justify-content: center;
        margin: 20px 0;
  
        & img {
          width: 30%;
        }
      }
    }

    /* Estilos Articulo Partes */
    & .articulo-partes {
      display: flex;
      flex-direction: column;
      gap: 20px;

      & .cont-table {
        display: flex;
        justify-content: center;

        & table {
          width: 50%;
        }
  
        & table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
          padding: 5px;
  
          & tr > td {
            text-align: center;
          }
  
          & th {
            background-color: #d1c9ba;
          }
  
          & td {
            background-color: #f0f8ffca;
          }
        }
      }
    }
  }
`;

export default PartesAlgoritmo;