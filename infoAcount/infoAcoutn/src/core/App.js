// src/core/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyAccountInfo from '../pages/organisms/MyAccountInfo/MyAccountInfo';
import HomePage from '../pages/templates/HomePage/HomePage';
import Navigation from '../components/molecules/Navigation/Navigation';
import Button from '../components/atoms/Button/Button';

const App = () => {
  const user = {}; // Proporciona la información del usuario según tu lógica

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyAccountInfo user={user} />} />
        <Route path="/home" element={<HomePage data={{}} />} />
      </Routes>

      {/* Ejemplo de uso de componentes comunes */}
      <Navigation items={[{ id: 1, label: 'Inicio' }, { id: 2, label: 'Cuenta' }]} />
      <Button label="Click me" onClick={() => alert('Button clicked!')} />
    </Router>
  );
};

export default App;
