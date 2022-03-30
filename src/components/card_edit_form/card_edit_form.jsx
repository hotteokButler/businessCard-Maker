import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card-edit-form.module.css';

const CardEditForm = ({ card }) => {
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
        defaultValue={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        id=""
        defaultValue={company}
      />
      <select className={styles.select} name="theme" defaultValue={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        id=""
        defaultValue={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        id=""
        defaultValue={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        cols="30"
        rows="5"
        defaultValue={message}
      ></textarea>
      <ImageFileInput name={name} />
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
