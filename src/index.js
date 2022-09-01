import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Imprint from './components/Imprint';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />      
            <Route path="/imprint" element={<Imprint />} />      

          </Routes>
          </ BrowserRouter>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
