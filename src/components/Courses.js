import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/courses.css';
import prepositionImage from '../images/prepositions.png';
import geschlechtImage from '../images/der-die-das-orig.webp';
import quizletImage from '../images/quizlet-cards-orig.webp';

const Courses = () => {
  return (
    <main id="main-content" className="courses-section">
      <h1 className="courses-title">Курсы</h1>
      
      <div className="courses-grid">
        {/* Предлоги в немецком языке */}
        <div className="course-card">
          <img 
            src={prepositionImage} 
            alt="Предлоги в немецком языке" 
            className="course-image"
          />
          <h3 className="course-title">Предлоги в немецком языке</h3>
          <p className="course-description">
            Предлоги — одна из самых сложных тем в немецком языке. Почему в одном случае мы используем an, а в другом — auf? Когда использовать in, nach и zu? Как правильно сказать in Urlaub fahren или auf Urlaub fahren?
          </p>
          <p className="course-description">
            Иногда использование предлогов в немецком языке кажется нам нелогичным. Именно поэтому нужно знать не только, с каким падежом использовать тот или иной предлог, но и значение самих предлогов.
          </p>
          <a 
            href="https://www.udemy.com/course/praepositionen/?couponCode=LETSLEARNNOW"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </a>
        </div>

        {/* Род существительных в немецком языке */}
        <div className="course-card">
          <img 
            src={geschlechtImage} 
            alt="Род существительных в немецком языке" 
            className="course-image"
          />
          <h3 className="course-title">Род существительных в немецком языке</h3>
          <p className="course-description">
            Как запомнить род существительных в немецком языке? Почему der Fisch, хотя в русском языке «рыба» женского рода? почему das Kind, хотя это ребенок и он существенный?
          </p>
          <p className="course-description">
            Онлайн-курс не только ответит на эти вопросы, но и поможет систематизировать и легко ориентироваться в определении рода существительных в немецком языке
          </p>
          <a 
            href="https://www.udemy.com/course/geschlechtderdeutschenwoerter/?kw=%D1%80%D0%BE%D0%B4+%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D1%82%D0%B5%D0%BB&src=sac"
            target="_blank"
            rel="noopener noreferrer"
            className="register-button"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </a>
        </div>

        {/* Карточки для тренировки слов и выражений */}
        <div className="course-card">
          <img 
            src={quizletImage} 
            alt="Карточки для тренировки слов и выражений" 
            className="course-image"
          />
          <h3 className="course-title">Карточки для тренировки слов и выражений</h3>
          <p className="course-description">
            У Вас мало времени, чтобы выучить новые слова или управление слов? Воспользуйтесь приложением Quizlet! В пути или дома, немецкий всегда с Вами.
          </p>
          <a 
            href="https://quizlet.com/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="start-button"
          >
            НАЧАТЬ ТРЕНИРОВАТЬ
          </a>
        </div>

        
      </div>
    </main>
  );
};

export default Courses; 