import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// imports

import About from './routes/About';
import Home from './routes/Home';


import './index.css';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);


