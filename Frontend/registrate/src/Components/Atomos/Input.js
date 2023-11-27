// src/Components/Atomos/Input.js
import React from 'react';
import './Input.css';

const Input = ({ label, type, placeholder }) => {
  return (
    <div>
      <label className="custom-input-label">{label}</label>
      <input className="custom-input" type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;