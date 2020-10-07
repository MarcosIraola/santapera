import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.view';
import Portada from './components/portada/portada.view';
import Expositores from './components/expositores/expositores.view';
import Mapa from './components/mapa/mapa.view';
import Participa from './components/participa/participa.view';
import Footer from './components/footer/footer.view';

function App() {
  return (
      <div>
        <Navbar/>
        <Portada/>
        <Expositores/>
        <Mapa/>
        <Participa/>
        <Footer/>
      </div>
  );
}

export default App;
