// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link si estás utilizando react-router
import UserProfile from '../../molecules/UserProfile/UserProfile';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import './Header.css'; // Importar estilos

const Header = ({ user, onLogout, onSearch }) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Tu Empresa Automotriz</Link>
        <SearchBar onSearch={onSearch} />
        {user ? (
          <UserProfile
            username={user.username}
            status={user.status}
            avatarUrl={user.avatarUrl}
          />
        ) : (
          <Link to="/login" className="login-link">Iniciar sesión</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
