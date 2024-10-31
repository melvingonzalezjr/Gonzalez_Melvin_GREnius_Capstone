import React from 'react';

const Question = ({ data }) => {
  return (
    <div>
      <h3>{data.questionText}</h3>
      <ul>
        {data.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
