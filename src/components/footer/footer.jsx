import React, { memo } from 'react';
import styles from './footer.module.css';
const Footer = memo((props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.description}>Let's make your special Card!</p>
    </footer>
  );
});

export default Footer;
