// Importación Librerias
import React from 'react';
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

// Importacion páginas internas
import Introduccion from './html/introduccion/IntroduccionHtml';
import ConstruccionArchivoHtml from './html/introduccion/ConstruccionArchivo'; // Ensure the file name is correct
import EstructuraPrincipal from './html/introduccion/EstructuraPrincipalHTML'; // Ensure the file name is correct

const Html = () => {
  return (
    <SectionHtml>
      <aside className='cont-glosario'>
        <Glosario>
          <ol>
            <li>Introducción a HTML</li>
            <ul>
              <li><Link to='/Html/html/introduccion'>Introducción.</Link></li>
              <li><Link to='/Html/html/construccion-archivo'>Construcción archivo HTML.</Link></li>
              <li><Link to='/Html/html/estructura-principal'>Estructura principal en HTML.</Link></li>
            </ul>
          </ol>
        </Glosario>
      </aside>
      <article className='cont-resultado'>
        <ResultadoGlosario>
          <Routes>
            <Route path="/Html/introduccion" element={<Introduccion />} />
            <Route path="/Html/construccion-archivo" element={<ConstruccionArchivoHtml />} />
            <Route path="/Html/estructura-principal" element={<EstructuraPrincipal />} />
          </Routes>
        </ResultadoGlosario>
      </article>
    </SectionHtml>
  )
}

export const SectionHtml = styled.div `
  display: flex;
  border: 1px solid black;

  & .cont-glosario {
    width: 20%;
    border: 1px solid red;
  }

  & .cont-resultado {
    width: 100%;
    border: 1px solid blue;
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