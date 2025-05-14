import React from 'react';
import '../styles/books.css';
import learnGermanImage from '../images/learnGerman.png';
import easyGermanImage from '../images/easyGerman.jpg';
import substantivesImage from '../images/substantives.png';
import successImage from '../images/success.png';
import testImage from '../images/test.jpg';

const Books = () => {
  return (
    <div className="books-section">
      <h1 className="books-title">Книги</h1>
      
      <div className="books-grid">
        {/* Учим язык с ребенком */}
        <div className="book-card">
          <img 
            src={learnGermanImage} 
            alt="Учим язык с ребенком" 
            className="book-image"
          />
          <p className="book-description">
            Книга о том, с какими проблемами могут столкнуться родители билингвов. Эта книга вам понравится, если: … ваш ребенок билингв, … вы заметили проблемы у ребенка с речью, … вы хотите помочь ребенку заговорить. «Учим язык с ребенком» — книга, основанная на личном опыте и современных исследованиях в области детской психологии.
          </p>
          <button className="read-button">ЧИТАТЬ</button>
        </div>

        {/* Иностранный язык? Легко! */}
        <div className="book-card">
          <img 
            src={easyGermanImage} 
            alt="Иностранный язык? Легко!" 
            className="book-image"
          />
          <p className="book-description">
            Учебное пособие даст Вам 5 легких шагов, как правильно учить любой иностранный язык.
          </p>
          <button className="download-button">СКАЧАТЬ</button>
        </div>

        {/* Род существительных в немецком языке */}
        <div className="book-card">
          <img 
            src={substantivesImage} 
            alt="Род существительных в немецком языке" 
            className="book-image"
          />
          <p className="book-description">
            При распространении ссылки на книгу, вы будете получать 10% на свой счет в ЛитРес.
          </p>
          <button className="read-button">ЧИТАТЬ</button>
        </div>

        {/* Дневник успеха */}
        <div className="book-card">
          <img 
            src={successImage} 
            alt="Дневник успеха" 
            className="book-image"
          />
          <p className="book-description">
            Чтобы реально понимать, что Вы уже умеете, а что еще предстоит выучить, воспользуйтесь нашим дневником успеха!
          </p>
          <button className="download-button">СКАЧАТЬ</button>
        </div>

        {/* Диагностический тест */}
        <div className="book-card">
          <img 
            src={testImage} 
            alt="Диагностический тест" 
            className="book-image"
          />
          <p className="book-description">
            Есть 6 типов восприятия информации. Какой из них Ваш? Тест не только поможет определить Ваш тип обучения, но и даст рекомендации, как именно Вам лучше учиться.
          </p>
          <button className="download-button">СКАЧАТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default Books; 