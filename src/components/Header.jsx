import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Iconos
import { FaLaptopCode } from "react-icons/fa";

const Header = ({ cardsRef }) => {

  const scrollToCards = () => {
    if (cardsRef && cardsRef.current) {
      cardsRef.current.scrollIntoView({ behavior: 'smooth' })
    };
  };

  return (
    <ContHeader>
      <div className='cont-title'>
        <FaLaptopCode className='page-icon'/>
        <h1>JLearning</h1>
      </div>

      <Navbar>
        <ul>
          <li className='cont-link'>
            <Link className='link' to="/">Inicio</Link>
          </li>
          <li className='cont-link'>
            <Link className='link' to="/Lenguajes">Lenguajes</Link>
          </li>
          <li className='cont-link'>
            <Link className='link' to="/About">Acerca</Link>
          </li>
          <li className='cont-link'>
            <Link className='link' to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </Navbar>

      <div className='cont-get-started' onClick={ scrollToCards }>
        Get Started
      </div>
    </ContHeader>
  )
}

// Contenedor Header
export const ContHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px;
  font-family: "Ubuntu", sans-serif;
  background-color: rgb(243, 244, 246);

  // Contenedor Título e ícono
  & .cont-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 25%;
  }

  // Icono
  & .page-icon {
    width: 35px;
    height: 35px;
  }

  & h1 {
    text-shadow: 5px 3px 5px rgba(0,0,0,0.6);
  }

  // Navbar
  & ul {
    display: flex;
    gap: 50px;
  }

  .link {
    position: relative;
    padding-bottom: 5px;
  }

  & .link::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    color: black;
    background-color: black;
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.3s ease-in;
  }

  & .link:hover::after {
    transform: scaleX(1);
  }

  // Get Started Button
  & .cont-get-started {
    display: flex;
    justify-content: center;
    width: 10%;
    padding: 11px;
    border-radius: 7px;
    background-color: black;
    color: #fff;
  }

  & .cont-get-started:hover {
    cursor: pointer;
  }

  @media (max-width: 992px) {
    & .cont-title {
      display: none;
    }

    & .cont-get-started {
      width: 17%;
    }
  }
`;

// Contenedor Navbar
const Navbar = styled.section`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding: 10px;
`;

export default Header;