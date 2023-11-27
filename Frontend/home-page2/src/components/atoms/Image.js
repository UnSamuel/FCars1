// components/atoms/Image/Image.js
import React from 'react';
import styles from './Image.css';

const Image = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};

export default Image;
