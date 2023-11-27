// src/Components/Moleculas/LoginForm.js
import React from 'react';
import Button from '../Atomos/Button'; // Importar el componente Button
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className="login-form">
      <label>Nombre:</label>
      <input type="text" placeholder="Ingrese su nombre" />

      <label>Apellido:</label>
      <input type="text" placeholder="Ingrese su apellido" />

      <label>Email:</label>
      <input type="email" placeholder="Ingrese su email" />

      <label>Edad:</label>
      <input type="text" placeholder="Ingrese su edad" />

      <label>Pais/Ciudad:</label>
      <input type="text" placeholder="Ingrese su país/ciudad" />

      <label>Rol:</label>
      <input type="password" placeholder="Escribe tu rol" />
      
      <label>Contraseña:</label>
      <input type="password" placeholder="Ingrese su contraseña" />

      
    </form>
  );
};

export default LoginForm;


