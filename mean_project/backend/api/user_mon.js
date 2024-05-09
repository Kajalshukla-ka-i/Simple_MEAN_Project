// Require necessary modules
var express = require('express');
var userModel = require('../models/user_mongoose'); // Assuming this path is correct
var  cors = require('cors');

// Create Express application
var app = express();
app.use(cors());
app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// Define route handler for GET '/'
app.post('/register', function(req, res, next) {
  // Create a new user object
  var userDetails = new userModel({
    name: req.body.Name,
    email: req.body.Email,
    password: req.body.Password,
  });

  // Save the user object to the database
  userDetails.save()
    .then(() => {
      // If saved successfully, render a success message
      res.status(200).json( 'User data inserted successfully' );
    })
    .catch(err => {
      console.error(err); // Log any errors
      res.status(500).json({ error: 'Error occurred while saving user data' });
    });
});

// Start the Express application on port 6900
app.listen(6900);
