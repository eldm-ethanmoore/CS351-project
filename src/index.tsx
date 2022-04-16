import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Portal from "./Portal";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portal" element={<Portal/>} />
        <Route path="*" element={<App/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
