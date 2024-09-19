import React from 'react'
import styled from 'styled-components'

const EstructuraAlgoritmo = () => {
  return (
    <MainContainer>
        <section>
            <h1>Estructuras de algoritmos</h1>
        </section>

        <section className='main-content'>

            {/* Introduction */}
            <article>
                <h2>Introducción</h2>

                <p>
                    Las estructuras de control son fundamentales en la programación y se dividen en tres tipos principales: secuencial, condicional y repetitiva. La <b>estructura secuencial</b> es la más básica, donde las instrucciones se ejecutan una tras otra en el orden en que están escritas, sin saltos ni repeticiones. Esto permite un flujo lineal y predecible del programa. La <b>estructura condicional</b>, por otro lado, permite tomar decisiones dentro del algoritmo. Dependiendo de si una condición es verdadera o falsa, se ejecuta un bloque de código u otro, lo que permite manejar diferentes escenarios y tomar acciones apropiadas según las circunstancias. Finalmente, la <b>estructura repetitiva</b> permite que un bloque de código se ejecute múltiples veces hasta que se cumpla una condición específica. Esto es útil para tareas que requieren repetición, como procesar elementos de una lista o realizar cálculos iterativos. Juntas, estas estructuras forman la base de la programación estructurada, permitiendo la creación de algoritmos más complejos y flexibles.
                </p>

            </article>

            {/* Estructura Secuencial */}
            <article>
                <h2>Estructura Secuencial</h2>

                <p>
                    Un algoritmo de estructura secuencial sigue una serie de pasos que se ejecutan uno tras otro, en un orden específico, sin saltos ni repeticiones. Cada instrucción se ejecuta exactamente una vez y en el orden en que están escritas. Este tipo de algoritmo es lineal y fácil de entender. Las tareas se suceden de tal manera que la salida de una es la entrada de otra hasta finalizar el proceso.
                </p>

                <figure>
                    <img 
                        src="https://o.quizlet.com/VGjOekqtxVfDtrpD3pTZ6A.jpg" 
                        alt="ejemplo-algoritmo" 
                        title='ejemplo-algoritmo'
                    />
                </figure>

                <h3>Características principales</h3>

                <ul>
                    <li>
                        <b>Secuencia de Instrucciones: </b>Las instrucciones se ejecutan de arriba a abajo, una tras otra.
                    </li>
                    <li>
                        <b>Un puto de Entrada y Salida: </b>La ejecución comienza en un punto de entrada y continúa hasta un punto de salida sin bifurcaciones.
                    </li>
                    <li>
                        <b>Ejecución Unidireccional: </b>No hay bucles ni saltos; el flujo es lineal.
                    </li>
                    <li>
                        <b>Fácil Lectura y Mantenimiento: </b>Debido a su simplicidad, es fácil de leer, entender y mantener.
                    </li>
                </ul>
            </article>

            {/* Estructura Condicional */}
            <article>
                <h2>Estructura Condicional</h2>


            </article>

            {/* Estructura Repetitiva */}
            <article>
                <h2>Estructura Repetitiva</h2>
            </article>
        </section>
    
    </MainContainer>
  )
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;

    & .main-content {
        display: flex;
        flex-direction: column;
        gap: 40px;

        & article {
            display: flex;
            flex-direction: column;
            gap: 25px;

            & ul {
                list-style-type: disc;
                margin-left: 30px;
    
                & li:nth-child(odd) {
                    margin: 20px 0;
                }
            }

            & figure {
                display: flex;
                justify-content: center;

                & img {
                    max-width: 25%;
                }
            }
        }

        & p {
            line-height: 23px;
        }
    }

`

export default EstructuraAlgoritmo