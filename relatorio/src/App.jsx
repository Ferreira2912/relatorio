import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Relatorio from './pages/Relatorio';
import './styles/global.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/relatorio" element={<Relatorio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}