import React, { useState } from 'react'
import styled from 'styled-components'

// MAIN PAGE

const IntroductionViewport = () => {
  return(
    <IntroductionContainer>
      <section>
        <h1>Bienvenidos a HTML</h1>
      </section>

      <section>
        <h2>Introducción</h2>

      </section>
    </IntroductionContainer>
  )
}

const Html = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});

  return (
    <MainContainer>

    </MainContainer>
  )
}

export const IntroductionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
`;

export const MainContainer = styled.div`

`

export default Html