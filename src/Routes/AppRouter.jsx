import React, {useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación Componentes y Páginas
import Header from '../components/Header';
import Home from '../pages/Home';
import Algoritmo from '../pages/Algoritmo';
import Html from '../pages/Html';
import Css from '../pages/Css';
import JavaScript from '../pages/JavaScript';
import NotFound from '../pages/NotFound';

export const AppRouter = () => {

  const cardsRef = useRef(null);

  return (
    <Router>
      <Header cardsRef={cardsRef} />
      <Routes>
        {/* Main Page */}
        <Route exact path='/' element={<Home cardsRef={cardsRef}/>} />

        {/* Languages Pages */}
        <Route path='/Algoritmo/*' element={<Algoritmo />} />
        <Route path='/Html/*' element={<Html />} />
        <Route path='/Css' element={<Css />} />
        <Route path='/JavaScript' element={<JavaScript />} />

        {/* NotFound Page */}
        <Route exact path='*' element={<NotFound />} />
      </Routes>          
    </Router>
  )
};
