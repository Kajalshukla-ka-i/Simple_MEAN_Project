const express = require("express");
// const router = express.Router();
const app = express();
const con = require('./models/user');

app.get("/",(req,resp)=>{
  resp.send("Hi kajal shukla");
});

app.post("/",(req,resp,next)=>{

  var userDetails = {
    name:'TEST',
    email:'test@gmail',
    password:'test@112',
    age:'12'
  };
  con.query("Insert into users SET ?", userDetails, (err, result, fields) => {
    if (err) err;
    resp.send(result);
});
  resp.send("User Data save successfully")

})
app.listen(6900);

