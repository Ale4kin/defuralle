import React from 'react';
import '../styles/arbeitsblatter.css';
import astronautImage from '../images/der-astronaut.png';
import fruhlingImage from '../images/der-fruhling.jpg';

const Arbeitsblatter = () => {
  return (
    <div className="arbeitsblatter-section">
      <h1 className="arbeitsblatter-title">Arbeitsblätter</h1>
      <p className="arbeitsblatter-description">
        Здесь вы найдете готовые комплекты игровых пособий на различные темы с полным описанием. Комплекты подходят как для самостоятельных занятий, так и для занятий в на уроке. Оплата производится через PayPal. При заказе указывайте название комплекта с рабочими листами.
      </p>

      <div className="arbeitsblatter-grid">
        {/* Der Astronaut */}
        <div className="arbeitsblatt-card">
          <h2 className="arbeitsblatt-title">Arbeitsblätter «Der Astronaut»</h2>
          <p className="arbeitsblatt-subtitle">Изучаем космос на немецком языке!</p>
          <img 
            src={astronautImage} 
            alt="Arbeitsblätter Der Astronaut" 
            className="arbeitsblatt-image"
          />
          <div className="arbeitsblatt-content">
            <p>Комплект для освоения темы включает 5 игр.</p>
            <p>Игры разработаны специально так, чтобы задания становились труднее, а ученик осваивал больше слов и учился сам строить предложения.</p>
            <ol>
              <li>Игра "Der Astronaut im Weltall"</li>
              <li>Игра "Planeten und Sterne"</li>
              <li>Игра "Was siehst du im Weltall?"</li>
              <li>Настольная игра с фишками</li>
              <li>Рабочий лист "Meine Weltraumreise"</li>
            </ol>
            <p className="arbeitsblatt-price">Стоимость — 150 руб. / 2 евро</p>
            <button className="order-button">ЗАКАЗАТЬ</button>
          </div>
        </div>

        {/* Der Frühling */}
        <div className="arbeitsblatt-card">
          <h2 className="arbeitsblatt-title">Arbeitsblätter «Der Frühling»</h2>
          <p className="arbeitsblatt-subtitle">Учим весну на немецком языке!</p>
          <img 
            src={fruhlingImage} 
            alt="Arbeitsblätter Der Frühling" 
            className="arbeitsblatt-image"
          />
          <div className="arbeitsblatt-content">
            <p>Комплект для освоения темы включает 6 игр.</p>
            <p>Игры разработаны специально так, чтобы задания становились труднее, а ученик осваивал больше слов и учился сам строить предложения.</p>
            <ol>
              <li>Игра "Frühling ist da!"</li>
              <li>Игра "Frühlingsblumen"</li>
              <li>Игра "Was passiert im Frühling?"</li>
              <li>Песня "Der Frühling ist gekommen"</li>
              <li>Настольная игра с фишками</li>
              <li>Рабочий лист "Mein Frühlingsgarten"</li>
            </ol>
            <p className="arbeitsblatt-price">Стоимость — 150 руб. / 2 евро</p>
            <button className="order-button">ЗАКАЗАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arbeitsblatter; 