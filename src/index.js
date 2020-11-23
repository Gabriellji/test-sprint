import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
