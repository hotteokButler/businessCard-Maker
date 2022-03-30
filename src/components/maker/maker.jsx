import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'JiSoo',
      company: 'Samsung',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'gisoo@gmail.com',
      message: 'go for it',
      fileName: 'jisoo',
      fileURL: null,
    },
    {
      id: '2',
      name: 'hotteok',
      company: 'JS',
      theme: 'colorful',
      title: 'Cat',
      email: 'hotteokCat@gmail.com',
      message: '호떡이다옹',
      fileName: 'hotteok',
      fileURL: 'hotteok.png',
    },
    {
      id: '3',
      name: 'ruru',
      company: 'Samsung',
      theme: 'light',
      title: 'chef',
      email: 'ruru@gmail.com',
      message: '카츠동 최고',
      fileName: 'ruru',
      fileURL: null,
    },
  ]);
  const navigator = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigator('/');
      }
    });
  }, []);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
