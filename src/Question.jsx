const Question = ({ data, onNext }) => {
  return (
    <div className="question-card">
      <h2>{data.question}</h2>
      <button onClick={onNext}>Next Question</button>
    </div>
  );
};

export default Question;
