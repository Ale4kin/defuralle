import React, { useState, useEffect } from 'react';
import '../styles/deutsche-kultur-quiz.css';
import quizQuestionsData from '../data/GermanQuiz/deutsche_kultur_quiz_103_questions.json';

const DeutscheKulturQuiz = ({ onGoBack }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    // Shuffle questions on initial load
    setQuestions(quizQuestionsData.sort(() => Math.random() - 0.5));
  }, []);

  const handleAnswerOptionClick = (option) => {
    if (showAnswer) return;

    setSelectedOption(option);
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (option === correctAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null); // Reset selected option for the next question
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizEnded(true);
    }
  };

  const restartQuiz = () => {
    // Reshuffle questions for a new game
    setQuestions(quizQuestionsData.sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedOption(null); // Reset selected option
    setQuizEnded(false);
  };

  if (questions.length === 0 && !quizEnded) {
    return <div>Loading Quiz...</div>;
  }

  if (quizEnded) {
    return (
      <div className="deutsche-kultur-quiz-container">
        <h1>Quiz закончен!</h1>
        <p>Твой результат: {score} из {questions.length}</p>
        <button onClick={restartQuiz} className="quiz-button">Начать сначала</button>
        <button onClick={onGoBack} className="quiz-button go-back-button">К списку игр</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Error: No question loaded. <button onClick={onGoBack} className="quiz-button go-back-button">К списку игр</button></div>;
  }

  return (
    <div className="deutsche-kultur-quiz-container">
      <div className="quiz-header">
        <h1>Deutsche Kultur Quiz</h1>
        <div className="quiz-stats">
          <span>Вопрос: {currentQuestionIndex + 1} / {questions.length}</span>
          <span>Правильные ответы: {score}</span>
        </div>
        <button onClick={onGoBack} className="quiz-button go-back-button header-go-back">Назад</button>
      </div>
      <div className="quiz-content">
        <h2>{currentQuestion.question}</h2>
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerOptionClick(option)}
              className={`option-button ${
                showAnswer && option === selectedOption ? 
                  (option === currentQuestion.correctAnswer ? 'selected-correct' : 'selected-incorrect') 
                : ''
              }`}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <div className="feedback-section">
            <p>Правильный ответ: {currentQuestion.correctAnswer}</p>
            <button onClick={handleNextQuestion} className="quiz-button">Следующий вопрос</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeutscheKulturQuiz; 