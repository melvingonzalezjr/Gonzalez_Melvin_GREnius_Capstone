import React, { useState } from 'react';

const SchoolForm = ({ onAddSchool }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSchool({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="School Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Add School</button>
    </form>
  );
};

export default SchoolForm;
