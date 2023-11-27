// src/Components/Organismos/LoginPage.js
import React from 'react';
import LoginForm from '../Moleculas/LoginForm'; // Cambiado a minúscula
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Iniciar Sesión</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
