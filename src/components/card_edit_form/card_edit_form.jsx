import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card-edit-form.module.css';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

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

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    } else {
      event.preventDefault();
      console.log(event.currentTarget.value);
      updateCard({
        ...card,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        id=""
        value={name}
        onChange={onChange}
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        id=""
        value={company}
        onChange={onChange}
      />
      <select
        ref={themeRef}
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        id=""
        value={title}
        onChange={onChange}
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        id=""
        value={email}
        onChange={onChange}
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        cols="30"
        rows="5"
        value={message}
        onChange={onChange}
      ></textarea>
      <ImageFileInput name={name} />
      <Button name={'Delete'} onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
