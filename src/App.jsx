import { useEffect, useState } from "react";
import "./App.css";
import QuizSetup from "./QuizSetup";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const fetchData = async (amount, category, difficulty) => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
      );
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false); // Prekida učitavanje nakon što se podaci preuzmu
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleStart = (amount, category, difficulty) => {
    setLoading(true); // Postavi loading na true pre pokretanja fetch-a
    fetchData(amount, category, difficulty);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) =>
      prev === questions.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="app">
      <QuizSetup onSetUpComplete={handleStart} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="questions-list">
          <Question
            data={questions[currentQuestion]}
            onNext={handleNextQuestion}
          />
        </div>
      )}
    </div>
  );
}

export default App;
