// src/components/molecules/Navigation/Navigation.js
import React from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

const Navigation = ({ items }) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
