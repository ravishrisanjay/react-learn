import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Index from './index.jsx';
import {Provider} from 'react-redux'
import store from './store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provide store={store}>
    
    <Index/>
  </Provider>
  </React.StrictMode>
);


