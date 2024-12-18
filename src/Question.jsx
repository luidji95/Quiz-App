import React, { useState } from "react";

function Question({ question, asnwer }) {
  const [currentQuestinon, setCurrentQuestion] = useState(1);

  return <h1>This is Question section! </h1>;
}

export default Question;
