import React from 'react';
import styles from './header.module.css';
const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
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
};

export default Header;
