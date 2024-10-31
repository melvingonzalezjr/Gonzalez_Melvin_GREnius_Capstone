import React, { useState } from 'react';
import { login as apiLogin } from '../services/api';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login API
      const response = await apiLogin({ email, password });
      const token = response.data.token;

      if (token) {
        // Store token in local storage
        localStorage.setItem('token', token);
        console.log("Token saved in local storage:", token);

        // Update auth state and redirect
        login();
        navigate('/quiz');
      } else {
        console.log("Token not returned from login response.");
      }
    } catch (err) {
      // Handle errors
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
        autoComplete="email"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password" 
      />
      <button type="submit">Log In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;

