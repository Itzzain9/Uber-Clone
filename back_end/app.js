const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express'); 
const app = express(); // Create an Express application
const connectToDb = require('./dataBase/dataBase'); // Import the database connection function
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000
const userRoutes = require('./routes/user.routes'); // Import user routes


connectToDb(); // Connect to the database
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors()); // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies


app.get('/', (req, res) => { 
    res.send(`I am working on currently this port no: ${port}`); // Send a response when the root URL is accessed
});

app.use('/api/users', userRoutes); // Use user routes for paths starting with /api/users


module.exports = app; // Export the app for use in other files 