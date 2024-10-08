// Require necessary modules
var express = require('express');
var userModel = require('./models/user_mongoose'); // Assuming this path is correct

// Create Express application
var app = express();

// Define route handler for GET '/'
app.post('/register', function(req, res, next) {
  // Create a new user object
  var userDetails = new userModel({
    name: 'Vikas',
    email: 'vikas@gmail.com',
    password: 'vikas@123',
  });

  // Save the user object to the database
  userDetails.save()
    .then(() => {
      // If saved successfully, render a success message
      res.render('index', { title: 'User Data Inserted' });
    })
    .catch(err => {
      console.error(err); // Log any errors
      res.status(500).send('Error occurred while saving user data.'); // Send an error response
    });
});

// Start the Express application on port 6900
app.listen(6900);
