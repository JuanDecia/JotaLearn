import React from 'react';
import styled, { keyframes } from 'styled-components';

const LanguageLayout = ({ title, children }) => {
  return (
    <MainContainer>
        <section className='main-container'>
            {/* Heading */}
            <article className='heading-container'>
                <h1>{ title }</h1>
            </article>

            {/* Main Content */}
            <article className='content-container'>
                { children }
            </article>
        </section>
    </MainContainer>
  )
}

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

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Ubuntu", sans-serif;

    /* Styles all content */
    & .main-container {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 85%;
      margin: auto;

      /* Styles heading */
      & .heading-container {
        
        display: flex;
        justify-content: center;
        margin-top: 40px;
  
            & h1 {
              font-size: 2.5em;
              animation: ${fade} 1.2s ease-in, ${slideDown} 1.5s ease-in-out;
              color: rgb(11, 104, 211);
            }
      }
  
      /* Styles content */
      & .content-container {
          display: flex;
          flex-direction: column;
          gap: 25px;

          & h2 {
            font-size: 1.9em;
            animation: ${fade} 1.2s ease-in, ${slideRight} 1.5s ease-in-out;
            color: #5c65c9;
          }

          & .cont-introduccion {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
      }
    }


`

export default LanguageLayout