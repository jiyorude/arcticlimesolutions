import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.min.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rates from './Rates';
import Services from './Services';
import Work from './Work';
import NotFound from './NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Home}/>
      <Route path='/rates' Component={Rates}/>
      <Route path='/services' Component={Services} />
      <Route path='/work' Component={Work} />
      <Route path='*' Component={NotFound} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
