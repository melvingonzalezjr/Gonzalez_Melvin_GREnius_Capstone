import React, { useState } from 'react';

const Question = ({ data, onSubmitAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [textAnswer, setTextAnswer] = useState('');

  // Handle selection of a radio button
  const handleRadioChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  // Handle typing in the text box (for open-ended questions)
  const handleTextChange = (e) => {
    setTextAnswer(e.target.value);
  };

  // Handle the submit button click
  const handleSubmit = () => {
    const answer = data.options.length > 0 ? selectedAnswer : textAnswer;
    onSubmitAnswer(answer);
  };

  return (
    <div>
      <h3>{data.questionText}</h3>
      {data.options && data.options.length > 0 ? (
        <div>
          {data.options.map((option, index) => (
            <label key={index} style={{ display: 'block', margin: '0.5rem 0' }}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={handleRadioChange}
              />
              {option}
            </label>
          ))}
        </div>
      ) : (
        <div>
          <label>
            Your Answer:
            <input
              type="text"
              value={textAnswer}
              onChange={handleTextChange}
              style={{ display: 'block', marginTop: '0.5rem', padding: '0.5rem', width: '100%' }}
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default Question;
