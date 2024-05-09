const mongoose = require('mongoose');

// Connect to MongoDB using the connection string
mongoose.connect('mongodb+srv://meanstack:meanstack1234@cluster.aaqvhyo.mongodb.net/your_database_name_here?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true // Adding this option to avoid deprecation warning
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create the User model
const UserModel = mongoose.model('User', userSchema);

// Export the User model
module.exports = UserModel;
