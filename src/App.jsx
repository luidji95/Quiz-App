import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuizSetup from "./QuizSetup";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isSetUpComplete, setSetupComplete] = useState(false);

  const fetchData = async (amount, category, difficulty) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleStart = (amount, category, difficulty) => {
    fetchData(amount, category, difficulty);
    setSetupComplete(true);
  };

  return (
    <div className="div-box">
      {isSetUpComplete ? (
        <Question></Question>
      ) : (
        <QuizSetup onSetUpComplete={handleStart}></QuizSetup>
      )}
    </div>
  );
}

export default App;
