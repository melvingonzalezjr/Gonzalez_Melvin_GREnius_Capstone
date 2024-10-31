import React, { useState } from 'react';
import { register } from '../services/api';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await register({ email, password });
      setSuccess(response.data.message);
      setError('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleRegister} className="form">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
