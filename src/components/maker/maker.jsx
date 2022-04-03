import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const [cards, setCards] = useState({});
  const locationHistory = useLocation();
  const locationHistoryState = locationHistory?.state;
  const [userId, setUserId] = useState(
    locationHistoryState && locationHistoryState.id
  );
  const navigator = useNavigate();

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  //내가 사용하는 props나 state가 update되었을때만 업데이트 될 수 있도록 수정
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    //unmount되었을때  (resource & memory정리)
    return () => stopSync();
  }, [userId, cardRepository]);

  //login
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigator('/');
      }
    });
  }, [userId, authService, locationHistory]);

  const createOrUpdateCard = useCallback(
    (card) => {
      setCards((cards) => {
        const updated = { ...cards };
        updated[card.id] = card;
        return updated;
      });

      cardRepository.saveCard(userId, card);
    },
    [cards]
  );

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
