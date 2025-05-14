import React from 'react';
import { FaFacebook, FaInstagram, FaVk, FaYoutube } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaInstagram />
        </a>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaVk />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer; 