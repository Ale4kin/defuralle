import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import Books from './components/Books';
import OnlineLearning from './components/OnlineLearning';
import './styles/main.css';
import heroImage from './images/hero.webp';

function HomePage() {
  return (
    <main className="main-content">
      <h1 className="main-title">Главная страница</h1>
      <div className="hero-section">
        <img 
          src={heroImage} 
          alt="German language learning"
          className="hero-image"
        />
      </div>
      <div className="content-wrapper">
        <p className="intro-text">
          В современном мире, где каждая минута на счету, где стёрлись границы стран и городов, онлайн-обучение становится эффективным средством изучения иностранных языков.
        </p>
        <p className="description">
          <span className="brand">Defuralle</span> поможет вам начать говорить на немецком языке, разобраться с грамматикой, откроет культурные особенности Германии, поделится секретами самостоятельного изучения иностранных языков.
        </p>
        <p className="additional-info">
          С нами вы можете учить немецкий язык как самостоятельно (онлайн-курсы), так и совместно с преподавателем.
        </p>
      </div>
      <Stats />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/books" element={<Books />} />
          <Route path="/online-learning" element={<OnlineLearning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
