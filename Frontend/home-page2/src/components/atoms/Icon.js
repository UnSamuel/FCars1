// components/atoms/Icon/Icon.js
import React from 'react';
import styles from './Icon.css';

const Icon = ({ src, alt }) => {
  return <img className={styles.icon} src={src} alt={alt} />;
};

export default Icon;
