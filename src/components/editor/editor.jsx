import React from 'react';
import CardEditFrom from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {cards.map((card) => {
        return <CardEditFrom key={card.id} card={card} />;
      })}
    </section>
  );
};

export default Editor;
