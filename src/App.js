import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Stats from './components/Stats';
import Footer from './components/Footer';
import About from './components/About';
import Contacts from './components/Contacts';
import Courses from './components/Courses';
import Books from './components/Books';
import OnlineLearning from './components/OnlineLearning';
import SEO from './components/SEO';
import './styles/main.css';
import heroImage from './images/hero.webp';

// Import new components
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';

function HomePage() {
  return (
    <main className="main-content" id="main-content">
      <SEO 
        title="Главная"
        description="Начните изучение немецкого языка с Deutsch für alle. Интерактивные курсы, упражнения и игры для эффективного обучения."
      />
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
    </main>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <a href="#main-content" className="skip-to-main">
          Перейти к основному содержимому
        </a>
        <div className="app">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={
              <>
                <SEO 
                  title="О проекте"
                  description="Узнайте больше о проекте Deutsch für alle, нашей методике обучения и команде преподавателей."
                />
                <About />
              </>
            } />
            <Route path="/contacts" element={
              <>
                <SEO 
                  title="Контакты"
                  description="Свяжитесь с нами для получения дополнительной информации о курсах и обучении."
                />
                <Contacts />
              </>
            } />
            <Route path="/courses" element={
              <>
                <SEO 
                  title="Курсы"
                  description="Выберите подходящий курс немецкого языка для вашего уровня подготовки."
                />
                <Courses />
              </>
            } />
            <Route path="/books" element={
              <>
                <SEO 
                  title="Книги"
                  description="Рекомендуемые книги и учебные материалы для изучения немецкого языка."
                />
                <Books />
              </>
            } />
            <Route path="/online-learning" element={
              <>
                <SEO 
                  title="Онлайн обучение"
                  description="Интерактивные упражнения и игры для практики немецкого языка онлайн."
                />
                <OnlineLearning />
              </>
            } />
            <Route path="/impressum" element={
              <>
                <SEO 
                  title="Impressum"
                  description="Impressum - Rechtliche Hinweise für Deutsch für alle." 
                />
                <Impressum />
              </>
            } />
            <Route path="/datenschutz" element={
              <>
                <SEO 
                  title="Datenschutz"
                  description="Datenschutzerklärung - Informationen zum Datenschutz auf Deutsch für alle."
                />
                <Datenschutz />
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
