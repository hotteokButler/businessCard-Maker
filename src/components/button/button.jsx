import React, { memo } from 'react';
import styles from './button.module.css';

const Button = memo(({ name, onClick }) => (
  <input
    type="button"
    className={styles.button}
    onClick={onClick}
    value={name}
  />
));

export default Button;
