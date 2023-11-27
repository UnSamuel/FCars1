// src/Components/Atomos/Button.js
import React from 'react';
import './Button.css';

const Button = ({ label, className }) => {
  return <button className={`custom-button ${className}`}>{label}</button>;
};

export default Button;
