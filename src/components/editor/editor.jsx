import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h2 className={styles.title}>Card Maker</h2>
      {cards.map((card) => (
        <CardEditForm key={card.id} card={card} />
      ))}
      <CardAddForm onSubmit={addCard} />
    </section>
  );
};

export default Editor;
