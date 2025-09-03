const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express'); 
const app = express(); // Create an Express application
const connectToDb = require('./dataBase/dataBase'); // Import the database connection function

connectToDb(); // Connect to the database

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => { 
    res.send('Hello World!'); // Send a response when the root URL is accessed
});

module.exports = app; // Export the app for use in other files 