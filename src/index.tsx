import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Routes,
  Route } from 'react-router-dom'

import App from './App';

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
