import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import './reset.css';
import App from './app.jsx';
import AuthService from './service/auth_service';
import { firebaseApp } from './service/firebase';
import '@fortawesome/fontawesome-free/js/all.js';

const authService = new AuthService(firebaseApp);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
