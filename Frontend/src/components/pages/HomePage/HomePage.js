// HomePage.js
import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import FeatureProducts from '../../molecules/FeatureProducts/FeatureProducts';

const HomePage = ({ user, onLogout, onSearch, featuredProducts }) => {
  return (
    <MainTemplate user={user} onLogout={onLogout} onSearch={onSearch}>
      <h2>Bienvenido a Tu Empresa Automotriz</h2>
      <p>Explora nuestras ofertas destacadas:</p>
      <FeatureProducts products={featuredProducts} />
    </MainTemplate>
  );
};

export default HomePage;
Sdagfshgdhtfj