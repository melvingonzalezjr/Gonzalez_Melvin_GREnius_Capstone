// routes/schoolRoutes.js
import express from 'express';
import axios from 'axios';
import School from '../models/schools.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const COLLEGE_API_URL = 'https://api.data.gov/ed/collegescorecard/v1/schools';

// Route to add a new school with data from the College Scorecard API
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    const response = await axios.get(COLLEGE_API_URL, {
      params: {
        'api_key': process.env.COLLEGE_SCORECARD_API_KEY,
        'school.name': name,
        'fields': 'id,school.name,school.city,school.state,latest.admissions.admission_rate.overall,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state',
      },
    });

    const schoolData = response.data.results[0];
    if (!schoolData) {
      return res.status(404).json({ message: 'School not found' });
    }

    // Create and save a new school in MongoDB
    const newSchool = new School({
      name: schoolData['school.name'],
      location: `${schoolData['school.city']}, ${schoolData['school.state']}`,
      admissionRate: schoolData['latest.admissions.admission_rate.overall'],
      inStateTuition: schoolData['latest.cost.tuition.in_state'],
      outOfStateTuition: schoolData['latest.cost.tuition.out_of_state'],
    });

    const savedSchool = await newSchool.save();
    res.status(201).json(savedSchool);
  } catch (error) {
    console.error('Error fetching or saving school data:', error);
    res.status(500).json({ error: 'Error fetching or saving school data' });
  }
});

// Route to get all saved schools
router.get('/', async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;

