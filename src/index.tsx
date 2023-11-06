import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app/app'
import reportWebVitals from './reportWebVitals';
import {Toast} from "./components/ui/toast-container/toast-container";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <Toast />
  </React.StrictMode>
);

reportWebVitals();
