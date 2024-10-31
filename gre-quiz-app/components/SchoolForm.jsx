import React, { useState } from 'react';

const SchoolForm = ({ onAddSchool }) => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [status, setStatus] = useState('Applying');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSchool({ name, code, status });
    setName('');
    setCode('');
    setStatus('Applying');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="School Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="GRE Code" value={code} onChange={(e) => setCode(e.target.value)} />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Applying">Applying</option>
        <option value="Accepted">Accepted</option>
        <option value="Rejected">Rejected</option>
      </select>
      <button type="submit">Add School</button>
    </form>
  );
};

export default SchoolForm;
