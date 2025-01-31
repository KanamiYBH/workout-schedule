require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT;

// Routes
const workoutRoutes = require('./routes/workouts');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_DB_URI, {
    dbName: process.env.MONGO_DB_COLLECTION
}).then(() => {

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
}).catch((err) => { console.log(err) });

