import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/quiz">Quiz</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/schools">Schools</Link>
      </nav>
    </header>
  );
};

export default Header;
