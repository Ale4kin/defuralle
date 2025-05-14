import React, { useState } from 'react';
import '../styles/online-learning.css';
import DeutscheKulturQuiz from './DeutscheKulturQuiz';
import GrammatikTrainer from './GrammatikTrainer';

const OnlineLearning = () => {
  const [showDeutscheKulturQuiz, setShowDeutscheKulturQuiz] = useState(false);
  const [showGrammatikTrainer, setShowGrammatikTrainer] = useState(false);

  const handleGoBackToMain = () => {
    setShowDeutscheKulturQuiz(false);
    setShowGrammatikTrainer(false);
  };

  if (showDeutscheKulturQuiz) {
    return <DeutscheKulturQuiz onGoBack={handleGoBackToMain} />;
  }

  if (showGrammatikTrainer) {
    return <GrammatikTrainer onGoBack={handleGoBackToMain} />;
  }

  return (
    <div className="online-learning-section">
      <h1 className="online-learning-title">Online Lernspiele</h1>
      <p className="online-learning-description">
        Интерактивные онлайн-игры для изучения немецкого языка. Используйте эти игры для практики и закрепления словарного запаса, грамматики и навыков разговорной речи.
      </p>

      <div className="games-grid">
        {/* Game 1 */}
        <div className="game-card">
          <h2 className="game-title">Wortschatz Challenge</h2>
          <div className="game-content">
            <p>Интерактивная игра для расширения словарного запаса. Изучайте новые слова в различных тематических категориях.</p>
            <ul className="game-features">
              <li>10+ тематических категорий</li>
              <li>Режим тренировки и тестирования</li>
            </ul>
            <button className="play-button">ИГРАТЬ</button>
          </div>
        </div>

        {/* Game 2 */}
        <div className="game-card">
          <h2 className="game-title">Grammatik Trainer</h2>
          <div className="game-content">
            <p>Практикуйте грамматические правила немецкого языка в игровой форме. Идеально для начинающих и продолжающих.</p>
            <ul className="game-features">
              <li>Управление глаголов</li>
              <li>Времена глаголов</li>
              <li>Предлоги</li>
            </ul>
            <button className="play-button" onClick={() => setShowGrammatikTrainer(true)}>ИГРАТЬ</button>
          </div>
        </div>

        {/* Game 3 */}
        <div className="game-card">
          <h2 className="game-title">Deutsche Kultur Quiz</h2>
          <div className="game-content">
            <p>Увлекательная викторина о немецкой культуре, традициях, истории и современной жизни в Германии.</p>
            <ul className="game-features">
              <li>Более 60 вопросов</li>
              <li>Интересные факты и объяснения</li>
            </ul>
            <button className="play-button" onClick={() => setShowDeutscheKulturQuiz(true)}>ИГРАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLearning; 