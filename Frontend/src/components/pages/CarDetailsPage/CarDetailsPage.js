// CarDetailsPage.js
import React from 'react';
import CarDetailsTemplate from '../../templates/CarDetailsTemplate/CarDetailsTemplate';

const CarDetailsPage = ({ carDetails }) => {
  return (
    <CarDetailsTemplate carDetails={carDetails} />
  );
};

export default CarDetailsPage;
