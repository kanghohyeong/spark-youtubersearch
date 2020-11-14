import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './scrollToTop';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);