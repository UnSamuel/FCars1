// src/Components/Organismos/RegistrationPage.js
import React from 'react';
import LoginForm from '../Moleculas/LoginForm';
import './RegistrationPage.css';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <h2 className="registration-title">Regístrate</h2>
      <LoginForm />
      <button className="login-link-button">Confirmar Registro</button>
      <button className="login-link-button">¿Ya tienes cuenta? Inicia Sesión</button>
    </div>
  );
};

export default RegistrationPage;
