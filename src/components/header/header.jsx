import React, { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.css';
const Header = memo(({ onLogout }) => {
  const location = useLocation();
  const [makerPage, setMakerPage] = useState(null);

  useEffect(() => {
    setMakerPage(location.pathname);
  }, []);

  return (
    <header className={styles.header}>
      {makerPage === '/maker' && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <figure className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
      </figure>
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default Header;
