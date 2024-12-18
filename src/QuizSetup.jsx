import React, { useState } from "react";

function QuizSetup({ onSetUpComplete }) {
  const [numberOfQuestions, setNumberOfQuestions] = useState(5);
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("Easy");

  const handleStartComplete = () => {
    onSetUpComplete(numberOfQuestions, category, difficulty);
  };

  return (
    <div className="setup-box">
      <h2>Quiz Setup</h2>

      <div
        className="quest-num"
        onCanPlay={(e) => setNumberOfQuestions(e.target.value)}
      >
        <p>Number of questions</p>
        <input
          className="input-numberOfQuestion"
          type="number"
          min={1}
          max={100}
        />
      </div>

      <div className="quest-category">
        <p>Category</p>
        <select
          className="input-categoryOfQuestion"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="9">General Knowledge</option>
          <option value="20">Mythology</option>
          <option value="21">Sport</option>
          <option value="15">Video Games</option>
        </select>
      </div>

      <div className="quest-difficulty">
        <p>Difficulty</p>
        <select
          className="input-difficultyOfQuestion"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button className="start-playing-btn" onClick={handleStartComplete}>
        Start playing!
      </button>
    </div>
  );
}

export default QuizSetup;
