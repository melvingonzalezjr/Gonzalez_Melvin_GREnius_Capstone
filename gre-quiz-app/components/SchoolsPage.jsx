import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchoolsPage = () => {
  const [schoolName, setSchoolName] = useState('');
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSchools();
  }, []);

  // Fetch all saved schools from the database
  const fetchSchools = async () => {
    try {
      const response = await axios.get('/api/schools');
      console.log("Fetched schools data:", response.data);
      setSchools(response.data);
      
    } catch (error) {
      console.error('Error fetching schools:', error);
      setError('Could not load saved schools.');
    }
  };

  // Add a new school using the College Scorecard API
  const handleAddSchool = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/schools', { name: schoolName });
      setSchools([...schools, response.data]); // Add the new school to the list
      setSchoolName(''); // Clear the input
      setError('');
    } catch (error) {
      console.error('Error adding school:', error);
      setError('Could not add the school. Please try again.');
    }
  };

  // Temporary function to clear schools and refresh page
  const handleReset = () => {
    setSchools([]); // Clear the schools state
    window.location.reload(); // Refresh the page to ensure no cached data is displayed
  };

  return (
    <div className="schools-page">
      <h1>Schools</h1>

      {/* Input field to add a school by name only */}
      <form onSubmit={handleAddSchool} className="school-form">
        <input
          type="text"
          placeholder="Enter School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          required
        />
        <button type="submit">Add School</button>
      </form>

      {error && <p className="error">{error}</p>}

      {/* Temporary Reset button to clear state and refresh */}
      <button onClick={handleReset} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}>
        Reset Schools List
      </button>

      {/* Display saved schools */}
      <ul className="school-list">
        {schools.map((school) => (
          <li key={school._id}>
            <h3>{school.name}</h3>
            <p><strong>Location:</strong> {school.location}</p>
            <p><strong>Admission Rate:</strong> {school.admissionRate ? `${(school.admissionRate * 100).toFixed(1)}%` : 'N/A'}</p>
            <p><strong>In-State Tuition:</strong> ${school.inStateTuition || 'N/A'}</p>
            <p><strong>Out-of-State Tuition:</strong> ${school.outOfStateTuition || 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolsPage;

