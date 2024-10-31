import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResourcesPage from './pages/ResourcesPage';
import SchoolsPage from './pages/SchoolsPage';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route 
          path="/quiz" 
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/schools" 
          element={
            <ProtectedRoute>
              <SchoolsPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;

