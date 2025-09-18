import React from 'react';

function Stats() {
  return (
    <section className="stats-section">
      <h2 className="stats-title">Defuralle в цифрах</h2>
      <p className="stats-subtitle">Что может лучше всего рассказать про работу преподавателя? Конечно же, цифры!</p>
      
      <div className="stats-grid">
        <div className="stat-item">
          <h3 className="stat-number">13+ лет</h3>
          <p className="stat-description">преподавания</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">15.000+</h3>
          <p className="stat-description">проведенных часов</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">700+</h3>
          <p className="stat-description">учеников</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">90%</h3>
          <p className="stat-description">успешно сданных учениками экзаменов Гете-Института</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">15+ лет</h3>
          <p className="stat-description">жизни в Германии</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">365/24/7</h3>
          <p className="stat-description">доступность</p>
        </div>
      </div>
    </section>
  );
}

export default Stats; 