const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://meanstack:meanstack1234@cluster.aaqvhyo.mongodb.net/');
var conn =mongoose.Collection;

var userSchema =new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;


// 8ZaR3IqBHc6MqtFh
