// CarDetailsTemplate.js
import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import CarDetailsPage from '../../organisms/CarDetailsPage/CarDetailsPage';
import './CarDetailsTemplate.css'; // Importar estilos

const CarDetailsTemplate = ({ carDetails }) => {
  return (
    <div className="car-details-template">
      <Header />
      <main className="car-details-content">
        <CarDetailsPage carDetails={carDetails} />
      </main>
      <Footer />
    </div>
  );
};

export default CarDetailsTemplate;
