// Require dependencies
const logger = require('morgan');
const express = require('express');
const path = require('path');
const cors = require('cors');
const webScraper = require('./webscraper');
const { Console } = require('console');
// console.log(typeof webScraper.webScraper())
// Create an Express application
const app = express();

// Configure the app port
const port = process.env.PORT || 3001;
app.set('port', port);


const corsOption = {
    origin: ['http://localhost:3001'],
};


// Load middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname)));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/favicon.ico', (req, res) => res.status(204).end());

app.post("/scrape", async (req, res) => {
  console.log("Got the request!")
  console.log(req.body)
  let fetchedResults = webScraper.webScraper(req.body)
  res.send(fetchedResults)
}
)


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

// Start the server and listen on the preconfigured port
app.listen(port, () => console.log(`App started on port ${port}.`));


