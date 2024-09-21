import React from 'react';
import styled from 'styled-components';

const LanguageLayout = ({ title, children }) => {
  return (
    <MainContainer>
        <section>
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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

`

export default LanguageLayout