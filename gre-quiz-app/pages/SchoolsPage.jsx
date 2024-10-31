import React, { useState, useEffect } from 'react';
import SchoolForm from '../components/SchoolForm';
import { fetchSchools, addSchool } from '../services/api';

const SchoolsPage = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const getSchools = async () => {
      const schoolData = await fetchSchools();
      setSchools(schoolData);
    };
    getSchools();
  }, []);

  const handleAddSchool = async (newSchool) => {
    const updatedSchools = await addSchool(newSchool);
    setSchools(updatedSchools);
  };

  return (
    <div>
      <h2>Grad School Applications Tracker</h2>
      <SchoolForm onAddSchool={handleAddSchool} />
      <ul>
        {schools.map((school) => (
          <li key={school.id}>
            <strong>{school.name}</strong> - Code: {school.code}, Status: {school.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolsPage;
