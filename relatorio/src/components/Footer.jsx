import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Reflexões Pascais</p>
    </div>
  </footer>
);

export default Footer;