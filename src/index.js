import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/productos';
import KnowUs from './pages/conocenos';
import Branches from './pages/sucursales';
import Franchise from './pages/franquicias';
import Header from './header';
import Footer from './footer';

ReactDOM.render(
  <BrowserRouter forceRefresh>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="productos" element={<Products />} />
      <Route path="conocenos" element={<KnowUs />} />
      <Route path="sucursales" element={<Branches />} />
      <Route path="franquicia" element={<Franchise />} />
    </Routes>
    <Footer/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
