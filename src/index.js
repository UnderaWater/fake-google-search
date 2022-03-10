import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalContextProvider } from './context/Context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <Router>
        <App />
      </Router>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
