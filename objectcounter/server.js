//Importing the required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');


//import config variables
const {port, mongoURI} = require('./config.js');


//import the routes
const accounts = require('./routes/accounts');

//Setup the express app and modules
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));


//connect to the database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true,})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//Setup the routes
app.use('/api/accounts', accounts);

//Listen on the port
app.listen(port, () => console.log(`Express app listening on port ${port}!`));

