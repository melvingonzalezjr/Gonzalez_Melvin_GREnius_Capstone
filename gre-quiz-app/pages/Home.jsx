import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const Home = () => {
    const [showRegister, setShowRegister] = useState(false);
  
    return (
      <div className="container">
        <h1>Welcome to GRE Quiz App</h1>
        {showRegister ? (
          <>
            <RegisterForm />
            <p>Already have an account? <button onClick={() => setShowRegister(false)} className="toggle-button">Log In</button></p>
          </>
        ) : (
          <>
            <LoginForm />
            <p>New user? <button onClick={() => setShowRegister(true)} className="toggle-button">Register</button></p>
          </>
        )}
      </div>
    );
  };
  
  export default Home;
