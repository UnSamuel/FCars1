// components/molecules/Card/Card.js
import React from 'react';
import Image from '../../atoms/Image/Image'; // Importa el componente de átomo Image
import Text from '../../atoms/Text/Text'; // Importa el componente de átomo Text
import styles from './Card.module.css';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={title} />
      <Text>{title}</Text>
      <Text>{description}</Text>
    </div>
  );
};

export default Card;
