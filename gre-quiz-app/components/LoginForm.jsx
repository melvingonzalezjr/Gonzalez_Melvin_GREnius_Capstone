import React, { useState } from 'react';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialize navigate function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiLogin({ email, password });
      login();  // Set authentication state to true
      navigate('/quiz');  // Redirect to Quiz page after login
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Log In</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
