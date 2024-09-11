import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  const [ setData] = useState(null);
  const [ setError] = useState(null);

  useEffect(() => {
    axios.get('/api/endpoint')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
        console.error('Erro:', error);
      });
  }, );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
