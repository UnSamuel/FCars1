// UserDashboard.js
import React from 'react';
import UserProfile from '../../molecules/UserProfile/UserProfile';
import FeatureProducts from '../../molecules/FeatureProducts/FeatureProducts';
import './UserDashboard.css'; // Importar estilos

const UserDashboard = ({ user, featuredProducts }) => {
  return (
    <div className="user-dashboard">
      <UserProfile
        username={user.username}
        status={user.status}
        avatarUrl={user.avatarUrl}
      />
      <h2 className="dashboard-title">Bienvenido de nuevo, {user.username}!</h2>
      <p className="dashboard-description">Explora nuestras ofertas destacadas:</p>
      <FeatureProducts products={featuredProducts} />
    </div>
  );
};

export default UserDashboard;
