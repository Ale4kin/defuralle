import React from 'react';
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Deutsch für alle</h1>
        <p className="site-subtitle">~ Online-изучение немецкого языка ~</p>
        <div className="social-links">
          <a href="https://www.facebook.com/Defuralle" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
          <a href="https://www.instagram.com/deutsch_furalle/" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
          <a href="https://www.youtube.com/@deutschfuralle5626" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
}

export default Header; 