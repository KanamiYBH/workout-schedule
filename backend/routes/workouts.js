const express = require('express');
const WorkoutModel = require('../models/workout');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();

// GET all documents
router.get('/', getWorkouts);

// GET a single document
router.get('/:id', getWorkout);

// POST(create) a new document
router.post('/', createWorkout);

// DELETE a new document
router.delete('/:id', deleteWorkout);

// UPDATE a new document
router.patch('/:id', updateWorkout);

module.exports = router;
