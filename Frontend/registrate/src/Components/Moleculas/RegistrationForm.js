// src/Components/Moleculas/RegistrationForm.js
import React from 'react';
import Button from '../Atomos/Button'; // Importar el componente Button
import './RegistrationForm.css';

const RegistrationForm = () => {
  return (
    <form className="registration-form">
      <label>Nombre:</label>
      <input type="text" placeholder="Ingrese su nombre" />

      <label>Apellido:</label>
      <input type="text" placeholder="Ingrese su apellido" />

      <label>Email:</label>
      <input type="email" placeholder="Ingrese su email" />

      <label>Edad:</label>
      <input type="number" placeholder="Ingrese su edad" />

      <label>País/Ciudad:</label>
      <input type="text" placeholder="Ingrese su país/ciudad" />

      <label>Contraseña:</label>
      <input type="password" placeholder="Ingrese su contraseña" />

      <label>Confirmar Contraseña:</label>
      <input type="password" placeholder="Confirme su contraseña" />

      {/* Botones u otras acciones aquí */}
    </form>
  );
};

export default RegistrationForm;
