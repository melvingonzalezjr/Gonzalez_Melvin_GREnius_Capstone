import React, { useState } from 'react';
import QuizNavigation from '../components/QuizNavigation';
import Question from '../components/Question';

const QuizPage = () => {
  const [section, setSection] = useState('quantitative');
  const [question, setQuestion] = useState(null);

  const handleFetchQuestion = async () => {
    // Fetch question from backend API based on section
  };

  return (
    <div>
      <QuizNavigation onSectionChange={setSection} />
      <button onClick={handleFetchQuestion}>Get Question</button>
      {question && <Question data={question} />}
    </div>
  );
};

export default QuizPage;
