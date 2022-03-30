import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>Card Preview</h2>
      <ul className={styles.cardList}>
        {Object.keys(cards).map((key) => {
          return <Card key={key} card={cards[key]} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;
