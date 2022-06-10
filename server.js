// Require dependencies
const logger = require('morgan');
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Configure the app port
const port = process.env.PORT || 3001;
app.set('port', port);

// Load middlewares
app.use(logger('dev'));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname)));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));


