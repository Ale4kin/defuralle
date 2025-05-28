import React, { useState } from 'react';
import wortschatzData from '../data/grammar/wortschatz.json';
import '../styles/wortschatz-challenge.css';

const WortschatzChallenge = ({ onGoBack }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentMode, setCurrentMode] = useState(null);
  const [currentExerciseType, setCurrentExerciseType] = useState(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setScore(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const handleModeSelect = (mode) => {
    setCurrentMode(mode);
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setScore(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const handleExerciseTypeSelect = (type) => {
    setCurrentExerciseType(type);
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setScore(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const handleBackToMain = () => {
    onGoBack();
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCurrentMode(null);
    setCurrentExerciseType(null);
    setCurrentWordIndex(0);
    setShowAnswer(false);
    setScore(0);
    setUserAnswer('');
    setIsCorrect(null);
  };

  const getCurrentCategory = () => {
    return wortschatzData.categories.find(cat => cat.id === selectedCategory);
  };

  const getCurrentWord = () => {
    const category = getCurrentCategory();
    return category ? category.words[currentWordIndex] : null;
  };

  const handleNext = () => {
    const category = getCurrentCategory();
    if (currentWordIndex < category.words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setShowAnswer(false);
      setUserAnswer('');
      setIsCorrect(null);
    }
  };

  const handlePrevious = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      setShowAnswer(false);
      setUserAnswer('');
      setIsCorrect(null);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const stripArticle = (word) => {
    // Remove articles (der, die, das) from the beginning of the word
    return word.replace(/^(der|die|das)\s+/i, '').trim();
  };

  const handleFillBlankSubmit = () => {
    const word = getCurrentWord();
    const userAnswerWithoutArticle = stripArticle(userAnswer);
    const correctAnswerWithoutArticle = stripArticle(word.german);
    
    const isAnswerCorrect = userAnswerWithoutArticle.toLowerCase().trim() === correctAnswerWithoutArticle.toLowerCase().trim();
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect && currentMode === 'testing') {
      setScore(score + 1);
    }
  };

  const handleWordMatch = (selectedWord) => {
    const word = getCurrentWord();
    const isAnswerCorrect = selectedWord === word.german;
    setIsCorrect(isAnswerCorrect);
    if (isAnswerCorrect && currentMode === 'testing') {
      setScore(score + 1);
    }
  };

  const renderFlashcard = () => {
    const word = getCurrentWord();
    if (!word) return null;

    return (
      <div className="flashcard">
        <div className="flashcard-content">
          <h2>{showAnswer ? word.russian : word.german}</h2>
          {showAnswer && (
            <div className="word-details">
              {word.image && <img src={`/images/${word.image}`} alt={word.german} />}
            </div>
          )}
        </div>
        <div className="flashcard-controls">
          <button onClick={toggleAnswer}>
            {showAnswer ? 'auf Deutsch' : 'auf Russisch'}
          </button>
          <div className="navigation-buttons">
            <button onClick={handlePrevious} disabled={currentWordIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentWordIndex === getCurrentCategory().words.length - 1}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderFillBlank = () => {
    const word = getCurrentWord();
    if (!word) return null;
    const inputId = `fill-blank-input-${currentWordIndex}`;

    return (
      <div className="fill-blank-exercise">
        <div className="exercise-content">
          <h2>Fill in the blank</h2>
          <p className="example">{word.example}</p>
          <div className="answer-input">
            <label htmlFor={inputId} className="visually-hidden">
              {`Translate and fill in the blank for: ${word.example} (answer in German, without article)`}
            </label>
            <input
              id={inputId}
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Напечатайте пропущенное слово (без артикля)"
              disabled={isCorrect !== null}
              aria-describedby={`example-text-${currentWordIndex}`}
            />
            <p id={`example-text-${currentWordIndex}`} className="visually-hidden">Example: {word.example}</p>

            {isCorrect === null ? (
              <button onClick={handleFillBlankSubmit}>Check</button>
            ) : (
              <div className={`${isCorrect ? 'правильно' : 'неправильно'}`}>
                {isCorrect ? 'Правильно!' : `Неправильно. Правильный ответ: ${stripArticle(word.german)}`}
              </div>
            )}
          </div>
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={currentWordIndex === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentWordIndex === getCurrentCategory().words.length - 1}>
            Next
          </button>
        </div>
      </div>
    );
  };

  const renderWordMatching = () => {
    const word = getCurrentWord();
    const category = getCurrentCategory();
    if (!word || !category) return null;

    // Get 3 random words from the same category for options
    const getRandomWords = () => {
      const words = [...category.words];
      const correctWord = words[currentWordIndex];
      words.splice(currentWordIndex, 1);
      const shuffled = words.sort(() => 0.5 - Math.random());
      const options = shuffled.slice(0, 3);
      options.push(correctWord);
      return options.sort(() => 0.5 - Math.random());
    };

    const options = getRandomWords();

    return (
      <div className="word-matching-exercise">
        <div className="exercise-content">
          <h2>Match the word</h2>
          <p className="word-to-match">{word.russian}</p>
          <div className="matching-options">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleWordMatch(option.german)}
                disabled={isCorrect !== null}
                className={isCorrect !== null && option.german === word.german ? 'правильно' : ''}
              >
                {option.german}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <div className={`${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? 'Правильно!' : `Неправильно. Правильный ответ: ${word.german}`}
            </div>
          )}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={currentWordIndex === 0}>
            Назад
          </button>
          <button onClick={handleNext} disabled={currentWordIndex === category.words.length - 1}>
            Дальше
          </button>
        </div>
      </div>
    );
  };

  const renderCategorySelection = () => {
    return (
      <div className="category-selection">
        <button className="back-button" onClick={handleBackToMain}>
          К главному меню
        </button>
        <h2>Выберите категорию</h2>
        <div className="categories-grid">
          {wortschatzData.categories.map(category => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategorySelect(category.id)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCategorySelect(category.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderModeSelection = () => {
    return (
      <div className="mode-selection">
        <button className="back-button" onClick={handleBackToCategories}>
          К категориям
        </button>
        <h2>Выберите режим</h2>
        <div className="modes-grid">
          <div
            className="mode-card"
            onClick={() => handleModeSelect('training')}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleModeSelect('training');
              }
            }}
            role="button"
            tabIndex={0}
          >
            <h3>Режим обучения</h3>
            <p>Учим слова с помощью flashcards</p>
          </div>
          <div
            className="mode-card"
            onClick={() => handleModeSelect('testing')}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleModeSelect('testing');
              }
            }}
            role="button"
            tabIndex={0}
          >
            <h3>Режим тестирования</h3>
            <p>Закрепи свои знания с помощью упражнений word matching и fill-in-the-blank.</p>
          </div>
        </div>
      </div>
    );
  };

  const renderExerciseTypeSelection = () => {
    const exerciseTypes = currentMode === 'training' 
      ? [{ id: 'flashcard', name: 'Flashcards', description: 'Учим слова с помощью flashcards' }]
      : [
          { id: 'matching', name: 'Word Matching', description: 'Сопоставьте немецкие слова с их русскими переводами' },
          { id: 'fillblank', name: 'Fill in the Blank', description: 'Заполните пропущенное слово в предложении' }
        ];

    return (
      <div className="exercise-type-selection">
        <button className="back-button" onClick={handleBackToCategories}>
          К категориям
        </button>
        <h2>Выберите тип упражнения</h2>
        <div className="exercise-types-grid">
          {exerciseTypes.map(type => (
            <div
              key={type.id}
              className="exercise-type-card"
              onClick={() => handleExerciseTypeSelect(type.id)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleExerciseTypeSelect(type.id);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <h3>{type.name}</h3>
              <p>{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="wortschatz-challenge" role="main">
      {!selectedCategory && renderCategorySelection()}
      {selectedCategory && !currentMode && renderModeSelection()}
      {selectedCategory && currentMode && !currentExerciseType && renderExerciseTypeSelection()}
      {selectedCategory && currentMode && currentExerciseType && (
        <>
          <button className="back-button" onClick={handleBackToCategories}>
            К категориям
          </button>
          {currentMode === 'training' && currentExerciseType === 'flashcard' && renderFlashcard()}
          {currentMode === 'testing' && currentExerciseType === 'fillblank' && renderFillBlank()}
          {currentMode === 'testing' && currentExerciseType === 'matching' && renderWordMatching()}
        </>
      )}
    </div>
  );
};

export default WortschatzChallenge; 