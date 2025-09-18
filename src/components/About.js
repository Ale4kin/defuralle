import React from 'react';
import '../styles/about.css';
import aboutImage from '../images/background_about.png';

const About = () => {
  return (
    <main id="main-content" className="about-section">
      <h1 className="about-title">О проекте</h1>
      <div className="about-content">
        <div className="profile-section">
          <img 
            src={aboutImage} 
            alt="Преподаватель немецкого языка" 
            className="profile-image"
          />
          <h2 className="welcome-heading">Немецкий с удовольствием!</h2>
          <p className="tagline">Онлайн-курсы не выходя из дома!</p>
          <p className="greeting">Всем привет!</p>
        </div>
        
        <div className="bio-section">
          <p>Меня зовут Алевтина, и я преподаватель немецкого языка со стажем более 13 лет.</p>
          
          <p>Немецкий язык я учила в Орловском Государственном Университете на кафедре немецкого языка. Во время учебы участвовала в международных проектах и ездила на стажировки в Германию.</p>
          
          <p>С 2015 года живу в Германии.</p>
          
          <p>Идея создать авторские курсы возникла в декрете, а возможности появились после переезда в Берлин.</p>
          
          <p>Если вы хотите учить немецкий язык или вас интересует отдельные грамматические и лексические темы, буду рада вам помочь!</p>
        </div>
      </div>
    </main>
  );
};

export default About; 