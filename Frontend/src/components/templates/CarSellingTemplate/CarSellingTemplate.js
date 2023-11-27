// CarSellingTemplate.js
import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import CarSellingPage from '../../organisms/CarSellingPage/CarSellingPage';
import './CarSellingTemplate.css'; // Importar estilos

const CarSellingTemplate = () => {
  return (
    <div className="car-selling-template">
      <Header />
      <main className="car-selling-content">
        <CarSellingPage />
      </main>
      <Footer />
    </div>
  );
};

export default CarSellingTemplate;
