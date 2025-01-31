const { default: mongoose } = require('mongoose');
const WorkoutModel = require('../models/workout');

// Get all documents
const getWorkouts = async (req, res) => {
    const workouts = await WorkoutModel.find({}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
}

// Get a single document
const getWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout is found' });
    }

    const workout = await WorkoutModel.findById(id);

    if (!workout) {
        return res.status(404).json({ error: 'No workout is found' });
    }

    res.status(200).json(workout);
}

// Create a new document
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await WorkoutModel.create({ title, load, reps });
        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete a document
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout is found' });
    }

    const workout = await WorkoutModel.findByIdAndDelete(id);

    if (!workout) {
        return res.status(404).json({ error: 'No workout is found' });
    }

    res.status(200).json(workout);
}

// Update a document
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No workout is found' });
    }

    // const workout = await WorkoutModel.findByIdAndUpdate(id, {
    //     ...req.body
    // });

    // to return the updated document
    const workout = await WorkoutModel.findByIdAndUpdate(id, {
        ...req.body
    }, {
        new: true
    });

    if (!workout) {
        return res.status(404).json({ error: 'No workout is found' });
    }


    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout,
}