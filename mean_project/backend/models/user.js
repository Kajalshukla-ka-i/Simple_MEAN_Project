const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test"
});

con.connect((err) => {
  if (err) {
    console.log("error : ", err);
  } else {
    console.log("Connected");
  }
});

const userSchema = `
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    age INT
)
`;

// Execute schema creation query
con.query(userSchema, (err, result) => {
  if (err) {
    console.error("Error creating user table:", err);
  } else {
    console.log("User table created successfully");
  }
});



module.exports = con;

