import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './contexts/Theme';
import ShopProvider from './contexts/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <ShopProvider>
      <App />
    </ShopProvider>
  </ThemeProvider>
);
