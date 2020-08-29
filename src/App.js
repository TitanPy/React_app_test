import React from 'react';
import './assets/css/App.css';

// Importar rutas 
import Router from './Router';
// Importar componentes
import Header from './components/Header';
import Sidebar from './components/Sidebar';
// // Sample
// import Peliculas from './components/sample/Peliculas';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
      {/*<Peliculas /> */}
      <Router />
    </div>
  );
}

export default App;
