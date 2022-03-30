import React from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = ({ name }) => (
  <button className={styles.button}>{name}</button>
);

export default ImageFileInput;
