import React from 'react';

const QuizNavigation = ({ onSectionChange }) => {
  return (
    <div>
      <button onClick={() => onSectionChange('quantitative')}>Quantitative</button>
      <button onClick={() => onSectionChange('verbal')}>Verbal</button>
    </div>
  );
};

export default QuizNavigation;
