// Require necessary modules
var express = require('express');
var userModel = require('../models/user_mongoose'); // Assuming this path is correct
var cors = require('cors');
const bcrypt = require('bcrypt');
// Create Express application
var app = express();
app.use(cors());
app.use(express.json());


async function checkEmail(req, res, next) {
  try {
    var email = req.body.Email;
    var existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(200).json("Email Already Exists");
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json('Internal Server Error');
  }
}

// app.use(express.urlencoded({ extended: true }));

// Define route handler for GET '/'
app.post('/register', checkEmail, function (req, res, next) {
  // Create a new user object
  bcrypt.hash(req.body.Password, 10, function (err, hash) {
    if (err) {
      res.status(400).json("something Wrong, Try Later....");
    } else {
      var userDetails = new userModel({
        name: req.body.Name,
        email: req.body.Email,
        password: hash,
        role:'Author'
      });

      // Save the user object to the database
      userDetails.save()
        .then(() => {
          // If saved successfully, render a success message

        })
        .catch(err => {
          console.error(err); // Log any errors
          res.status(500).json({ error: 'Error occurred while saving user data' });
        });
    }
  });
});


app.post('/login', function (req, res, next) {
  var email = req.body.Email;
  userModel.find({ email: email }).exec().then(user => {
    if (user.length < 1) {
      res.status(200).json({ message: "Auth Failed", status: "error" });
    } else {
      bcrypt.compare(req.body.Password, user[0].password, function (err, result) {
        if (err) {
          res.json({ message: "Auth failed", status: "error" });
        } else {
          if (result) {
            res.status(200).json({
              message: "User Login Successfully",
              UserData: user,
              status: "success"
            });
          } else {
            res.json({
              message: "Auth Fail",
              UserData: '',
              status: 'error'
            });
          }
        }
      });
    }
  }).catch(err => {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error", status: "error" });
  });
});

// Start the Express application on port 6900
app.listen(6900);
