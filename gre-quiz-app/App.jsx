import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResourcesPage from './pages/ResourcesPage';
import SchoolsPage from './pages/SchoolsPage';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/dashboard" element={<SchoolsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
