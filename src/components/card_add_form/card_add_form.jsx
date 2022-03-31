import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card-add-form.module.css';

const CardAddForm = ({ FileInput, onSubmit }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmitNewCard = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value,
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName || '',
      fileURL: file.fileURL || '',
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    onSubmit(card);
  };

  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        id=""
        placeholder="name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        id=""
        placeholder="company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
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
        placeholder="title"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        id=""
        placeholder="email"
      />
      <textarea
        ref={messageRef}
        className={styles.textarea}
        name="message"
        cols="30"
        rows="5"
        placeholder="message"
      ></textarea>
      <FileInput name={file.fileName} onFileChange={onFileChange} />
      <Button name={'Add'} onClick={onSubmitNewCard} />
    </form>
  );
};

export default CardAddForm;
