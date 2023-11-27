// src/components/organisms/MyAccountInfo/MyAccountInfo.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./MyAccountInfo.module.css";

const MyAccountInfo = ({ user }) => {
  // Tu lógica para mostrar la información de la cuenta
  return (
    <div className={styles.myAccountInfo}>
      {/* Contenido de la información de la cuenta */}
    </div>
  );
};

MyAccountInfo.propTypes = {
  user: PropTypes.object.isRequired, // Ajusta la forma del objeto según tus necesidades
};

export default MyAccountInfo;
