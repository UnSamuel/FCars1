// src/Components/Organismos/NavBar.js

import React from 'react';
import Button from '../Atomos/Button';
import './NavBar.css';

import image1 from '../../Images/image1.png';
import image2 from '../../Images/image2.png';
import image3 from '../../Images/image3.png';

const NavBar = () => {
  return (

    <div>
      {/* Barra de navegación superior */}
      <div className="navbar-top">
        {/* Barra de búsqueda en la parte izquierda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button>Buscar</button>
        </div>

        {/* Botones en la parte derecha */}
        <div className="navbar-buttons">
          <Button label="Mi Cuenta" />
          <Button label="Publicar" />
          <Button label="Ver todos los vehículos" />
        </div>
      </div>

      {/* Barra de navegación inferior */}
      <div className="navbar-bottom">
        <Button label="Todos" />
        <Button label="Modelo" />
        <Button label="Precio" />
        <Button label="Ubicación" />
        <Button label="Año" />
        <Button label="Color" />
      </div>

      {/* Subtítulo "Todos" */}
      <div className="subtitle">
        <h2>Todos</h2>
      </div>

      {/* Primera Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>


      {/* Nuevo Subtítulo "Modelo" */}
      <div className="subtitle">
        <h2>Modelo</h2>
      </div>

      {/* Segunda Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" (duplicado) */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>

      {/* Nuevo Subtítulo "Precio" */}
      <div className="subtitle">
        <h2>Precio</h2>
      </div>

      {/* Tercera Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" (duplicado) */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>

      {/* Nuevo Subtítulo "Ubicación" */}
      <div className="subtitle">
        <h2>Ubicación</h2>
      </div>

      {/* Cuarta Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" (duplicado) */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>

      {/* Nuevo Subtítulo "Año" */}
      <div className="subtitle">
        <h2>Año</h2>
      </div>

      {/* Quinta Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" (duplicado) */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>

      {/* Nuevo Subtítulo "Color" */}
      <div className="subtitle">
        <h2>Color</h2>
      </div>

      {/* Sexta Zona: Espacio para mostrar las imágenes y botones "Ver Detalles" (duplicado) */}
      <div className="image-display">
        <div className="image-container">
          <img src={image1} alt="Imagen 1" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image2} alt="Imagen 2" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>

        <div className="image-container">
          <img src={image3} alt="Imagen 3" className="image" />
          <Button label="Ver Detalles" className="details-button" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
