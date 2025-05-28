import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaVk } from 'react-icons/fa';
import '../styles/contacts.css';

const Contacts = () => {
  return (
    <main id="main-content" className="contacts-section">
      <h1 className="contacts-title">Контакты</h1>
      <p className="contacts-description">
        Давайте общаться. Свяжитесь с нами, используя контактные данные ниже.
      </p>
      
      <div className="contact-info">
        <h2 className="contact-subtitle">Связаться с нами</h2>
        <div className="contact-details">
          <a href="mailto:defuralle@gmail.com" className="contact-email">
            defuralle@gmail.com
          </a>
          <p className="contact-skype">Skype: De_für_alle</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaYoutube />
            </a>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaVk />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts; 