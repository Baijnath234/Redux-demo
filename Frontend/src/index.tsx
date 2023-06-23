import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import { Provider } from 'react-redux/es/exports';
import store from './ReduxImp/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

i18next.init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: {
        "English": "Home"
      }
    },
    hi: {
      translation: {
        "Hindi": "घर"
      }
    },
    JPN: {
      translation: {
        "japanese": "家"
      }
    }
  }
});

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);


