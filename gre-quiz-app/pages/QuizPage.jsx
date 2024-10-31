import React, { useState } from 'react';
import { fetchQuestion, submitAnswer } from '../services/api';
import Question from '../components/Question';

const QuizPage = () => {
  const [section, setSection] = useState('quantitative');
  const [question, setQuestion] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSectionChange = (e) => {
    setSection(e.target.value);
  };

  const handleFetchQuestion = async () => {
    try {
      const response = await fetchQuestion(section);
      setQuestion(response.data);
      setFeedback('');
    } catch (err) {
      setFeedback('Could not fetch question. Please try again.');
    }
  };

  const handleSubmitAnswer = async (userAnswer) => {
    try {
      const response = await submitAnswer({
        questionId: question._id,
        answer: userAnswer,
      });
      const { isCorrect, correctAnswer } = response.data;

      // Set feedback message
      if (isCorrect) {
        setFeedback('Correct! Great job!');
      } else {
        setFeedback(`Incorrect. The correct answer is: ${correctAnswer}`);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      setFeedback('Error submitting answer. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Quiz</h2>
      <div>
        <label>
          <input
            type="radio"
            value="quantitative"
            checked={section === 'quantitative'}
            onChange={handleSectionChange}
          />
          Quantitative Reasoning
        </label>
        <label>
          <input
            type="radio"
            value="verbal"
            checked={section === 'verbal'}
            onChange={handleSectionChange}
          />
          Verbal Reasoning
        </label>
      </div>
      <button onClick={handleFetchQuestion}>Get Question</button>

      {question && (
        <Question data={question} onSubmitAnswer={handleSubmitAnswer} />
      )}

      {feedback && <p className="feedback">{feedback}</p>}
    </div>
  );
};

export default QuizPage;
