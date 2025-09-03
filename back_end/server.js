const htttp = require('http');
const app = require('./app'); // Import the Express application
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

const server = htttp.createServer(app); // Create an HTTP server using the Express app

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
}); // Start the server and listen on port 3000