import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = memo(
  ({ name, company, title, email, message, theme, fileURL }) => {
    const url = fileURL || DEFAULT_IMAGE;
    return (
      <li className={`${styles.card} ${getStyles(theme)}`}>
        <figure className={styles.profileImg}>
          <img src={url} alt="profile" />
        </figure>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.company}>{company}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </li>
    );
  }
);

//컴포넌트에 포함하지 않아도 되는 함수는 외부에 선언
function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
