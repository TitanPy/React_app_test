import React from 'react';
import './assets/css/App.css';


// Importar componentes
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
