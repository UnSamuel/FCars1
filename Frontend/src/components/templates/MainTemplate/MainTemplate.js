// MainTemplate.js
import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import MainLayout from '../../organisms/MainLayout/MainLayout';
import './MainTemplate.css'; // Importar estilos

const MainTemplate = ({ user, onLogout, onSearch, children }) => {
  return (
    <div className="main-template">
      <Header user={user} onLogout={onLogout} onSearch={onSearch} />
      <MainLayout user={user}>{children}</MainLayout>
      <Footer />
    </div>
  );
};

export default MainTemplate;
