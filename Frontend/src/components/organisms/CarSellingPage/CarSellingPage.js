// CarSellingPage.js
import React from 'react';
import CarSellingForm from '../../molecules/CarSellingForm/CarSellingForm';
import PromotionalBanner from '../../molecules/PromotionalBanner/PromotionalBanner';
import './CarSellingPage.css'; // Importar estilos

const CarSellingPage = () => {
  const handleSellCar = (carData) => {
    // Lógica para vender el automóvil
    // Puedes manejar los datos del automóvil aquí, por ejemplo, enviarlos a un servidor
    console.log('Vendiendo automóvil:', carData);
  };

  return (
    <div className="car-selling-page">
      <h2 className="page-title">Vender Automóvil</h2>
      <PromotionalBanner
        message="¡Vende tu automóvil hoy y obtén el mejor precio!"
        actionLabel="Comienza ahora"
        onActionClick={() => alert('Comenzando proceso de venta...')}
      />
      <CarSellingForm onSubmit={handleSellCar} />
    </div>
  );
};

export default CarSellingPage;
