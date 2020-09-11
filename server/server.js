const express = require('express');
const bodyParser = require('body-parser');
const dbconnection = require('../src/keys');
const mongoose = require('mongoose');

// create express app
const app = express();

// Require Notes routes
require('../routes/note.routes.js')(app);



// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbconnection.mongoURI, {
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
