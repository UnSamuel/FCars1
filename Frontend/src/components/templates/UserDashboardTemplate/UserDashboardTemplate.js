// UserDashboardTemplate.js
import React from 'react';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import UserDashboard from '../../organisms/UserDashboard/UserDashboard';
import './UserDashboardTemplate.css'; // Importar estilos

const UserDashboardTemplate = ({ user, featuredProducts }) => {
  return (
    <div className="user-dashboard-template">
      <Header />
      <main className="user-dashboard-content">
        <UserDashboard user={user} featuredProducts={featuredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardTemplate;
