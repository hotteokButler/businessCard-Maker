import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({
    // 1: {
    //   id: '1',
    //   name: 'JiSoo',
    //   company: 'Samsung',
    //   theme: 'dark',
    //   title: 'Software Engineer',
    //   email: 'gisoo@gmail.com',
    //   message: 'go for it',
    //   fileName: 'jisoo',
    //   fileURL: null,
    // },
  });
  const locationHistory = useLocation();
  const locationHistoryState = locationHistory?.state;
  const [userId, setUserId] = useState(
    locationHistoryState && locationHistoryState.id
  );
  const navigator = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  //
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    //unmount되었을때  (resource & memory정리)
    return () => stopSync();
  }, [userId]);

  //login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigator('/');
      }
    });
  }, []);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });

    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
