import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.target.textContent);
  };

  return (
    <section className={styles.loginPage}>
      <Header />
      <section className={styles.loginForm}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.buttonList}>
          <li>
            <button className={styles.googleBtn} onClick={onLogin}>
              <i className="fa-brands fa-google"></i>
              <span>Google</span>
            </button>
          </li>
          <li>
            <button className={styles.githubBtn} onClick={onLogin}>
              <i className="fa-brands fa-github-alt"></i>
              <span>Github</span>
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
