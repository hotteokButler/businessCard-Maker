import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card-edit-form.module.css';

const CardEditFrom = ({ card }) => {
  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onSubmit = () => {};

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        id=""
        value={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        id=""
        value={company}
      />
      <select className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        id=""
        value={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        id=""
        value={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        cols="30"
        rows="5"
        value={message}
      ></textarea>
      <ImageFileInput />
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  );
};

export default CardEditFrom;
