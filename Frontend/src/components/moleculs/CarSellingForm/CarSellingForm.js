// CarSellingForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import './CarSellingForm.css'; // Importar estilos

const CarSellingForm = ({ onSubmit }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
    // Puedes agregar la lógica necesaria para validar y enviar los datos
    onSubmit({ make, model, year, price });
  };

  return (
    <form className="car-selling-form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Marca" value={make} onChange={(e) => setMake(e.target.value)} />
      <Input type="text" placeholder="Modelo" value={model} onChange={(e) => setModel(e.target.value)} />
      <Input type="number" placeholder="Año" value={year} onChange={(e) => setYear(e.target.value)} />
      <Input type="number" placeholder="Precio" value={price} onChange={(e) => setPrice(e.target.value)} />
      <Button label="Vender Auto" type="submit" />
    </form>
  );
};

CarSellingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CarSellingForm;
