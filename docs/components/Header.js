import React from 'react';
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">Deutsch für alle</h1>
        <p className="site-subtitle">~ Online-изучение немецкого языка ~</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaInstagram /></a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaVk /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link"><FaYoutube /></a>
        </div>
      </div>
    </header>
  );
}

export default Header; 