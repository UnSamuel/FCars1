// components/atoms/Text/Text.js
import React from 'react';
import styles from './Text.css';

const Text = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default Text;
