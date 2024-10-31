import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
});

export const register = (userData) => API.post('/auth/register', userData);
export const login = (credentials) => API.post('/auth/login', credentials);

export const fetchQuestion = (section) => API.get(`/quiz/${section}`);
export const submitAnswer = (answerData) => {
    //we need this token for submissions to compare given answer to correcyAnswer
    const token = localStorage.getItem('token');
    console.log("Token being sent:", token);

    //now we post token to keep authentication
    return API.post('/quiz/submit', answerData, {
        headers: {Authorization: `Bearer ${token}`}
    });
};

// New API calls for SchoolsPage
export const fetchSchools = async () => {
  const response = await API.get('/schools');
  return response.data;
};

export const addSchool = async (schoolData) => {
  const response = await API.post('/schools', schoolData);
  return response.data;
};
