import React, { useState, useEffect, useCallback } from 'react';
import '../styles/grammatik-trainer.css';

import verbPrepositionsQuizData from '../data/grammar/verb_prepositions_quiz_30.json';
import verbTensesQuizData from '../data/grammar/verb_tenses_trainer_irregular.json';
import prepositionsAkkusativData from '../data/grammar/prepositions_akkusativ_trainer.json';
import prepositionsDativData from '../data/grammar/prepositions_dativ_trainer.json';
import prepositionsAkkDatData from '../data/grammar/wechselpraepositionen_trainer.json';

const ruleAkkusativPrepositions = `🧠 Правило: Предлоги с Akkusativ
В немецком языке есть предлоги, которые всегда требуют винительный падеж (Akkusativ). После них существительное или местоимение всегда стоит в форме Akkusativ.

К таким предлогам относятся:

durch – через
für – для, за
ohne – без
gegen – против
um – вокруг, в (по времени)
bis – до
entlang – вдоль (обычно после существительного)

💡 Пример:

Ich gehe durch den Park. (Я иду через парк.)
Das Geschenk ist für dich. (Подарок для тебя.)
Wir treffen uns um 18 Uhr. (Мы встречаемся в 18:00.)`;

const ruleDativPrepositions = `🧠 Правило: Предлоги с Dativ (Dativpräpositionen)
Некоторые немецкие предлоги всегда требуют дательный падеж (Dativ), независимо от смысла предложения. После них существительное или местоимение всегда стоит в форме Dativ.

Вот самые распространённые Dativ-предлоги:

Предлог\tПеревод
mit\tс
nach\tв (страна/город), после
aus\tиз
zu\tк
von\tот
bei\tу, при
seit\tс (о времени), в течение
außer\tкроме
entgegen\tвопреки
gegenüber\tнапротив

💡 Примеры:

Ich fahre mit dem Bus.
Wir gehen zu der Schule.
Das Geschenk ist von meiner Mutter.
Er wohnt bei seinen Eltern.
Ich warte seit einer Stunde.`;

const ruleWechselpraepositionen = `🧠 Правило: Двунаправленные предлоги (Wechselpräpositionen)
В немецком языке есть предлоги, которые могут использоваться как с Dativ, так и с Akkusativ, в зависимости от контекста:

Предлог\tПеревод
in\tв
an\tу, на (вертикально)
auf\tна (горизонтально)
unter\tпод
über\tнад
vor\tперед
hinter\tпозади
neben\tрядом
zwischen\tмежду

Как выбрать падеж:
👉 Akkusativ — если есть движение, изменение положения
Wohin? → куда?

Ich lege das Buch auf den Tisch. (Я кладу книгу на стол.)

👉 Dativ — если речь о местоположении, статичности
Wo? → где?

Das Buch liegt auf dem Tisch. (Книга лежит на столе.)`;

const GrammatikTrainer = ({ onGoBack }) => {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedSubThemeName, setSelectedSubThemeName] = useState(null);
  
  const [currentExercises, setCurrentExercises] = useState([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [individualFeedback, setIndividualFeedback] = useState([]);
  const [areAllBlanksAnswered, setAreAllBlanksAnswered] = useState(false);
  const [showOverallFeedback, setShowOverallFeedback] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isRuleNoteOpen, setIsRuleNoteOpen] = useState(false);

  const themes = [
    { name: "Управление глаголов", data: verbPrepositionsQuizData, type: "single-blank-multiple-choice" },
    { name: "Времена глаголов", data: verbTensesQuizData, type: "multi-blank-multiple-choice" },
    {
      name: "Предлоги",
      type: "prepositions-main",
      subThemes: [
        { name: "Предлоги с Akkusativ", data: prepositionsAkkusativData, type: "single-blank-multiple-choice", rule: ruleAkkusativPrepositions },
        { name: "Предлоги с Dativ", data: prepositionsDativData, type: "single-blank-multiple-choice", rule: ruleDativPrepositions },
        { name: "Предлоги с Akkusativ и Dativ", data: prepositionsAkkDatData, type: "single-blank-multiple-choice", rule: ruleWechselpraepositionen }
      ]
    }
  ];

  const resetExerciseState = useCallback((exercise, themeType) => {
    setShowOverallFeedback(false);
    setAreAllBlanksAnswered(false);
    
    let numBlanks = 0;
    if (exercise) {
        if (themeType === "multi-blank-multiple-choice") {
            numBlanks = exercise.question_elements.filter(el => el.type === 'blank').length;
        } else if (themeType === "single-blank-multiple-choice") {
            numBlanks = exercise.question_elements ? exercise.question_elements.filter(el => el.type === 'blank').length : 0;
            if (numBlanks === 0 && exercise.type === 'blank') numBlanks = 1; 
        }
    }
    setSelectedOptions(new Array(numBlanks).fill(null));
    setIndividualFeedback(new Array(numBlanks).fill(null));
  }, []);

  useEffect(() => {
    setIsRuleNoteOpen(false);
    if (!selectedTheme) {
      setCurrentExercises([]);
      return;
    }

    let exercisesToLoad = [];
    let exerciseType = selectedTheme.type;

    if (selectedTheme.type === "prepositions-main") {
      if (selectedSubThemeName) {
        const subThemeConfig = selectedTheme.subThemes.find(st => st.name === selectedSubThemeName);
        if (subThemeConfig) {
          exercisesToLoad = subThemeConfig.data;
          exerciseType = subThemeConfig.type;
        }
      } else {
        setCurrentExercises([]);
        return;
      }
    } else {
      exercisesToLoad = selectedTheme.data;
    }

    if (exercisesToLoad && exercisesToLoad.length > 0) {
      const shuffledExercises = [...exercisesToLoad].sort(() => Math.random() - 0.5);
      setCurrentExercises(shuffledExercises);
      resetExerciseState(shuffledExercises[0], exerciseType); 
    } else {
      setCurrentExercises([]);
    }
    setCurrentExerciseIndex(0);
    setScore(0);
    setQuizCompleted(false);

  }, [selectedTheme, selectedSubThemeName, resetExerciseState]);

  useEffect(() => {
    if (currentExercises.length > 0 && currentExercises[currentExerciseIndex]) {
      const currentExercise = currentExercises[currentExerciseIndex];
      let exerciseType = selectedTheme?.type;

      if (selectedTheme?.type === "prepositions-main" && selectedSubThemeName) {
        const subThemeConfig = selectedTheme.subThemes.find(st => st.name === selectedSubThemeName);
        if (subThemeConfig) {
          exerciseType = subThemeConfig.type;
        }
      } 
      resetExerciseState(currentExercise, exerciseType);
    }
  }, [currentExerciseIndex, currentExercises, selectedTheme, selectedSubThemeName, resetExerciseState]);

  const toggleRuleNote = () => {
    setIsRuleNoteOpen(!isRuleNoteOpen);
  };

  const handleThemeSelection = (theme) => {
    setSelectedTheme(theme);
    setSelectedSubThemeName(null);
    setQuizCompleted(false);
    setCurrentExercises([]);
  };

  const handleSubThemeSelection = (subThemeName) => {
    setSelectedSubThemeName(subThemeName);
    setQuizCompleted(false);
  };

  const handleAnswerOptionClick = (option, blankIndex, exercise) => {
    if (individualFeedback[blankIndex] !== null) return;

    const currentExercise = exercise || currentExercises[currentExerciseIndex];
    const blankElements = currentExercise.question_elements && Array.isArray(currentExercise.question_elements) 
        ? currentExercise.question_elements.filter(el => el.type === 'blank') 
        : [];
    const blankElement = blankElements[blankIndex];

    if (!blankElement) {
        console.error("Could not find blank element for index:", blankIndex, "in exercise:", currentExercise);
        return; 
    }
    
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[blankIndex] = option;
    setSelectedOptions(newSelectedOptions);

    const newIndividualFeedback = [...individualFeedback];
    newIndividualFeedback[blankIndex] = option === blankElement.correct_answer;
    setIndividualFeedback(newIndividualFeedback);

    const allAnswered = newIndividualFeedback.every(feedback => feedback !== null);
    if (allAnswered) {
      setAreAllBlanksAnswered(true);
      setShowOverallFeedback(true);

      let currentExerciseType = selectedTheme.type;
      if (selectedTheme.type === "prepositions-main" && selectedSubThemeName) {
        const subTheme = selectedTheme.subThemes.find(st => st.name === selectedSubThemeName);
        if (subTheme) currentExerciseType = subTheme.type;
      }

      if (currentExerciseType === "multi-blank-multiple-choice") {
        if (newIndividualFeedback.every(feedback => feedback === true)) {
          setScore(prevScore => prevScore + 1);
        }
      } else if (currentExerciseType === "single-blank-multiple-choice") {
         if (newIndividualFeedback[0] === true) {
            setScore(prevScore => prevScore + 1);
         }
      }
    }
  };

  const handleNextExercise = () => {
    const nextIndex = currentExerciseIndex + 1;
    if (nextIndex < currentExercises.length) {
      setCurrentExerciseIndex(nextIndex);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    let exercisesToRestart = [];
    let exerciseTypeForRestart = selectedTheme?.type;

    if (selectedTheme?.type === "prepositions-main" && selectedSubThemeName) {
        const subThemeConfig = selectedTheme.subThemes.find(st => st.name === selectedSubThemeName);
        if (subThemeConfig) {
            exercisesToRestart = subThemeConfig.data;
            exerciseTypeForRestart = subThemeConfig.type;
        }
    } else if (selectedTheme) {
        exercisesToRestart = selectedTheme.data;
    }

    if (exercisesToRestart && exercisesToRestart.length > 0) {
        const shuffledExercises = [...exercisesToRestart].sort(() => Math.random() - 0.5);
        setCurrentExercises(shuffledExercises);
        resetExerciseState(shuffledExercises[0], exerciseTypeForRestart);
    }
    setCurrentExerciseIndex(0);
    setScore(0);
    setQuizCompleted(false);
    setIsRuleNoteOpen(false);
  };

  const goBackWithinTrainer = () => {
    if (selectedTheme && selectedTheme.type === "prepositions-main" && selectedSubThemeName) {
      setSelectedSubThemeName(null);
      setCurrentExercises([]); 
      setQuizCompleted(false);
    } else {
      setSelectedTheme(null);
      setSelectedSubThemeName(null);
      setCurrentExercises([]);
      setQuizCompleted(false);
    }
    setIsRuleNoteOpen(false);
  };
  
  const getCurrentRule = () => {
    if (selectedTheme?.type === "prepositions-main" && selectedSubThemeName) {
        const subThemeConfig = selectedTheme.subThemes.find(st => st.name === selectedSubThemeName);
        return subThemeConfig?.rule || null;
    }
    return selectedTheme?.rule || null;
  };

  const renderCurrentExercise = () => {
    if (currentExercises.length === 0 || !currentExercises[currentExerciseIndex] || !selectedTheme) {
      return <p>Выберите тему или подтему для начала.</p>;
    }
    const exercise = currentExercises[currentExerciseIndex];

    let blankCounter = -1;

    return (
      <div className="exercise-container">
        <div className="quiz-header-info">
            <span>Вопрос: {currentExerciseIndex + 1} / {currentExercises.length}</span>
            <span>Правильные ответы: {score}</span>
        </div>
        {exercise.instruction && <h3>{exercise.instruction}</h3>}
        
        <div className="question-display">
          {exercise.question_elements && Array.isArray(exercise.question_elements) && exercise.question_elements.map((element, elIndex) => {
            if (element.type === 'text') {
              return <span key={elIndex} className="question-text">{element.content} </span>;
            }
            if (element.type === 'blank') {
              blankCounter++;
              const currentBlankIndex = blankCounter;
              return (
                <span key={elIndex} className="blank-group">
                  <span className="blank-placeholder">[___]</span>
                  <div className="options-grid for-blank">
                    {element.options && Array.isArray(element.options) && element.options.map((option, optIdx) => (
                      <button
                        key={optIdx}
                        onClick={() => handleAnswerOptionClick(option, currentBlankIndex, exercise)}
                        disabled={individualFeedback[currentBlankIndex] !== null}
                        className={`option-button-gt ${
                          individualFeedback[currentBlankIndex] !== null && selectedOptions[currentBlankIndex] === option ?
                            (individualFeedback[currentBlankIndex] ? 'selected-correct-gt' : 'selected-incorrect-gt')
                            : ''
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </span>
              );
            }
            return null;
          })}
        </div>

        {areAllBlanksAnswered && showOverallFeedback && (
          <div className="feedback-section-gt">
            {exercise.full_correct_sentence && <p>Правильный вариант: {exercise.full_correct_sentence}</p>}
            {exercise.explanation && <p className="explanation-text">{exercise.explanation}</p>}
            <button onClick={handleNextExercise} className="quiz-button-gt">Следующий вопрос</button>
          </div>
        )}
      </div>
    );
  };

  if (quizCompleted) {
    const activeRule = getCurrentRule();
    return (
      <div className="grammatik-trainer-container">
        {activeRule && (
          <div className="rule-note-container">
            <button onClick={toggleRuleNote} className="rule-toggle-button">
              {isRuleNoteOpen ? "Скрыть правило" : "Показать правило"}
            </button>
            {isRuleNoteOpen && (
              <div className="rule-note-static"> 
                {activeRule.split('\n').map((line, i) => <p key={i} className={line.trim() === '' ? 'rule-note-empty-line' : ''}>{line || '\u00A0'}</p>)}
              </div>
            )}
          </div>
        )}
        <h1>Тема "{selectedSubThemeName || selectedTheme?.name}" завершена!</h1>
        <p>Ваш результат: {score} из {currentExercises.length}</p>
        <div className="completion-actions">
            <button onClick={restartQuiz} className="theme-button">Начать сначала (эта тема)</button>
            <button onClick={goBackWithinTrainer} className="theme-button">Назад</button>
        </div>
      </div>
    );
  }

  if (selectedTheme && (selectedTheme.type !== "prepositions-main" || selectedSubThemeName) && currentExercises.length > 0) {
    const activeRule = getCurrentRule();
    return (
      <div className="grammatik-trainer-container">
        <h1>{selectedSubThemeName || selectedTheme.name}</h1>
        {activeRule && (
          <div className="rule-note-container">
            <button onClick={toggleRuleNote} className="rule-toggle-button">
              {isRuleNoteOpen ? "Скрыть правило" : "Показать правило"}
            </button>
            {isRuleNoteOpen && (
              <div className="rule-note">
                {activeRule.split('\n').map((line, i) => <p key={i} className={line.trim() === '' ? 'rule-note-empty-line' : ''}>{line || '\u00A0'}</p>)}
              </div>
            )}
          </div>
        )}
        {renderCurrentExercise()}
        <div className="trainer-footer-nav">
            <button onClick={goBackWithinTrainer} className="theme-button back-to-themes-button">Назад к темам</button>
            <button onClick={onGoBack} className="theme-button go-back-main-button">К списку игр</button>
        </div>
      </div>
    );
  }
  
  if (selectedTheme && selectedTheme.type === "prepositions-main" && !selectedSubThemeName) {
    return (
      <div className="grammatik-trainer-container">
        <h1>{selectedTheme.name}</h1>
        <p>Выберите подтему:</p>
        <div className="themes-grid sub-themes-grid">
          {selectedTheme.subThemes.map(subTheme => (
            <button 
              key={subTheme.name} 
              onClick={() => handleSubThemeSelection(subTheme.name)} 
              className="theme-button sub-theme-button"
              disabled={subTheme.data.length === 0}
            >
              {subTheme.name} {subTheme.data.length === 0 ? " (скоро)" : `(${subTheme.data.length})`}
            </button>
          ))}
        </div>
        <button onClick={goBackWithinTrainer} className="theme-button back-to-themes-button">Назад к основным темам</button>
        <button onClick={onGoBack} className="theme-button go-back-main-button">К списку игр</button>
      </div>
    );
  }

  // Render Main Theme Selection Screen (Default)
  return (
    <div className="grammatik-trainer-container">
      <h1>Grammatik Trainer</h1>
      <p>Выберите тему для тренировки:</p>
      <div className="themes-grid">
        {themes.map(theme => (
          <button 
            key={theme.name} 
            onClick={() => handleThemeSelection(theme)} 
            className="theme-button" 
            disabled={theme.type !== 'prepositions-main' && theme.data.length === 0}
          >
            {theme.name} 
            { (theme.type !== 'prepositions-main' && theme.data.length === 0) 
              ? " (скоро)" 
              : theme.type === 'prepositions-main' 
                ? (theme.subThemes.every(st => st.data.length === 0) ? " (нет упражнений)" : '') 
                : ` (${theme.data.length})`}
          </button>
        ))}
      </div>
      <button onClick={onGoBack} className="theme-button go-back-main-button">К списку игр</button>
    </div>
  );
};

export default GrammatikTrainer;