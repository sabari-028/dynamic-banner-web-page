const mysql = require("mysql2");

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "6652", 
  database: "bannerDB", 
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

module.exports = db;
