import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Reflexões Pascais</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/relatorio" 
                className={`nav-link ${location.pathname === '/relatorio' ? 'active' : ''}`}
              >
                Relatório
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;