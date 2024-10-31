import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ResourcesPage.css'; // Ensure this path is correct

const ResourcesPage = () => {
  // State variables for each resource type
  const [generalResources, setGeneralResources] = useState([]);
  const [verbalResources, setVerbalResources] = useState([]);
  const [quantitativeResources, setQuantitativeResources] = useState([]);
  const [writingResources, setWritingResources] = useState([]);
  const [error, setError] = useState(''); // State to handle errors

  useEffect(() => {
    // Fetch resources from each endpoint and set state
    const fetchResources = async () => {
      try {
        const generalRes = await axios.get('/api/resources/general');
        const verbalRes = await axios.get('/api/resources/verbal');
        const quantitativeRes = await axios.get('/api/resources/quantitative');
        const writingRes = await axios.get('/api/resources/writing');

        // Log data to check if the API responses are coming through
        console.log("General Resources:", generalRes.data);
        console.log("Verbal Resources:", verbalRes.data);
        console.log("Quantitative Resources:", quantitativeRes.data);
        console.log("Writing Resources:", writingRes.data);

        // Update state with the fetched data
        setGeneralResources(generalRes.data);
        setVerbalResources(verbalRes.data);
        setQuantitativeResources(quantitativeRes.data);
        setWritingResources(writingRes.data);
      } catch (err) {
        console.error("Error fetching resources:", err);
        setError('Failed to load resources. Please try again later.');
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="resources-page">
      <h1>GRE Resources</h1>

      {error && <p className="error">{error}</p>}

      {/* General Resources Section */}
      <section>
        <h2>General Resources</h2>
        <ul>
          {generalResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Verbal Reasoning Resources Section */}
      <section>
        <h2>Verbal Reasoning Resources</h2>
        <ul>
          {verbalResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Quantitative Reasoning Resources Section */}
      <section>
        <h2>Quantitative Reasoning Resources</h2>
        <ul>
          {quantitativeResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Analytical Writing Resources Section */}
      <section>
        <h2>Analytical Writing Resources</h2>
        <ul>
          {writingResources.map((resource, index) => (
            <li key={index}>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                {resource.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ResourcesPage;

