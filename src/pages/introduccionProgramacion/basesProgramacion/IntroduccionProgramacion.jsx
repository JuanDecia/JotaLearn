import React from 'react';
import styled from 'styled-components';

const IntroduccionProgramacion = () => {
  return (
    <MainContainer>
        {/* Heading */}
        <article>
            <h1>Introducción a la programación</h1>
        </article>

        {/* Content */}
        <article className='content-article'>
          <h2>Introducción</h2>

          <p>
            Con la evolución de los lenguajes de programación se comenzaron a crear los <b>lenguajes de nivel alto</b>, estos se encuentran más cercanos a la forma de pensar de los humanos que al lenguaje que entiende la máquina.
          </p>

          <p>
            A lo largo de ir avanzando en el aprendizaje de la programación vamos a ver <b>cuatro conceptos</b> fundamentales que fueron impulsando a que los lenguajes sigan evoluciando, estos conceptos son conocidos en una definición llamada <b>Programación Orientada a Objetos</b> (POO):
          </p>

          <h3>Abstracción</h3>

          <p>
            Es el proceso mental por el que el ser humano extrae las características escenciales de algo. El objetivo que cumple en la programación es permitir simplificar la complejidad de un sistema informático al <b>ocultar</b> los detalles innecesarios y <b>resaltar</b> solo los aspectos relevantes.
          </p>

          <p>
            Imagina que estás desarrollando un software para gestionar vehículos. Podrías crear una clase abstracta <b>Vehiculo</b> que defina métodos como <b>arrancar(), detener(), y acelerar()</b>. Luego, podrías tener clases concretas como Coche y Moto que implementen estos métodos de manera específica para cada tipo de vehículo.
          </p>

          <h4>Beneficios de la abstracción</h4>

          <ul className='lista'>
            <li>
              <b>Reducción de la complejidad: </b>Al enfocarse solo en los aspectos esenciales, se facilita la comprensión y el mantenimiento del código.
            </li>
            <li>
              <b>Reutilización de código:</b> Las clases abstractas y las interfaces permiten reutilizar código en diferentes partes del programa.
            </li>
            <li>
              <b>Flexibilidad: </b>Facilita la modificación y extensión del software sin afectar otras partes del sistema.
            </li>
          </ul>

          <h3>Encapsulación</h3>

          <p>
            Es el principio sobre el cual <b>enmascaramos funcionalidad</b> en programación, es escencial para reutilizar un código. Cuando nos referimos a enmascarar la funcionalidad, nos referimos a que se <b>ocultan los detalles de cómo está hecho un programa</b>, pero se conoce el modo de funcionamiento, cuáles son sus entradas y que salida produce. También, forma parte de las características que el código sea reutilizable.
          </p>

          <h4>Beneficios del encapsulamiento</h4>

          <ul className="lista">
            <li>
              <b>Ocultación de datos: </b>Protege los datos internos de un objeto de accesos no autorizados.
            </li>
            <li>
              <b>Mantenimiento: </b>Facilita la modificación del código sin afectar a otras partes del programa.
            </li>
            <li>
              <b>Modularidad: </b>Permite dividir el programa en partes más manejables y comprensibles.
            </li>
            <li>
              <b>Control: </b>Proporciona un control más preciso sobre cómo se accede y modifica el estado de un objeto.
            </li>
          </ul>

          <h3>Modularidad</h3>

          <p>
            La modularidad en programación consiste en una técnica que <b>divide</b> un programa en <b>partes más pequeñas y manejables</b>, llamadas <b>módulos</b>. Cada <b><i>módulo</i></b> tiene una función específica y definida dentro del programa.
          </p>

          <p>
            Un ejemplo de modularización sería un programa que gestiona una biblioteca. Podrías tener módulos separados para gestionar los libros, los usuarios y los préstamos. Cada módulo se encarga de una parte específica del sistema, lo que facilita su desarrollo y mantenimiento.
          </p>

          <h4>Beneficios de la modularización</h4>

          <ul className="lista">
            <li>
              <b>Facilita el mantenimiento: </b>Al dividir el programa en módulos más pequeños, es más fácil de identificar y corregir errores. Si hay un problema en un módulo, solo necesitas revisar y modificar ese módulo específico.
            </li>
            <li>
              <b>Reutilización del código: </b>Los módulos pueden ser reutilizados en diferentes partes del mismo proyecto o proyectos distintos, lo que ahorra tiempo y esfuerzo al no tener que escribir el mismo código repetidamente.
            </li>
            <li>
              <b>Mejora la legibilidad: </b>Los programas modularizados son más fácules de leer y entender, lo que facilita la colaboración entre desarrolladores y la incorporación de nuevos miembros al equipo.
            </li>
            <li>
              <b>Pruebas más sencillas: </b>Los módulos pueden ser probados de manera independiente, lo que simplifica las pruebas unitarias y asegura que cada parte del programa funcione correctamente antes de integrarse con el resto.
            </li>
            <li>
              <b>Ailamiento de cambios: </b>Los cambios en un módulo no afectan a otros módulos, lo que permite realizar modificaciones y mejoras sin riesgo de introducir errores en otras partes del programa.
            </li>
            <li>
              <b>Mejora del rendimiento: </b>Los programas modularizados pueden ser optimizados más fácilmente, ya que cada módulo puede ser ajustado y mejorado de manera independiente.
            </li>
          </ul>

          <h3>Jerarquía</h3>

          <p>
            Este concepto se refiere a la <b>organización de clases y objetos</b> en niveles de abstracción, los podemos enmarcar en los siguientes conceptos claves:
          </p>

          <ul className="lista">
            <li>
              <b>Herencia: </b>Es una relación jerárquica donde una clase (subclase) hereda atributos y métodos de otra clase (superclase). Esto permite reutilizar código y extender funcionalidades sin necesidad de reescribirlas.
            </li>
            <li>
              <b>Herencia Simple: </b>Una subclase hereda de una única superclase.
            </li>
            <li>
              <b>Herencia Múltiple: </b>Una subclase puede heredar de múltiples superclases (no todos los lenguajes de programación soportan esto).
            </li>
            <li>
              <b>Relación de clases: </b>Define cómo las clases están relacionadas entre sí. Por ejemplo, un “Perro” es una subclase de “Mamífero”, lo que implica que un perro hereda características generales de los mamíferos, pero también tiene sus propias características específicas
            </li>
            <li>
              <b>Relación de objetos: </b>Se enfoca en cómo los objetos interactúan y dependen unos de otros. Por ejemplo, una “Llanta” es parte de un “Carro”, pero también puede ser parte de una “Moto” o un "Camión".
            </li>
          </ul>
        </article>
    </MainContainer>
  )
}

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    /* ### Estilos Generales ### */
    & .lista {
      list-style: disc;
      margin-left: 30px;

      & li:nth-child(even) {
        margin: 10px 0;
      }
    }

    /* ### Estilos Contenido página ###*/
    & .content-article {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
`

export default IntroduccionProgramacion;