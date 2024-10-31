import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const fetchQuestion = (section) => API.get(`/quiz/${section}`);
export const submitAnswer = (answerData) => API.post('/quiz/submit', answerData);
export const register = (userData) => API.post('/auth/register', userData);

// New API calls for SchoolsPage
export const fetchSchools = async () => {
  const response = await API.get('/schools');
  return response.data;
};

export const addSchool = async (schoolData) => {
  const response = await API.post('/schools', schoolData);
  return response.data;
};
