import React from "react";
import PropTypes from "prop-types";
import styles from "./HomePage.module.css";

const HomePage = ({ data }) => {
  // Lógica para mostrar la página de inicio
  return (
    <div className={styles.homePage}>
      {/* Contenido de la página de inicio */}
    </div>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired, // Ajusta la forma del objeto según tus necesidades
};

export default HomePage;
