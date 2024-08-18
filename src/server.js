const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

// Create a MySQL connection
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

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Get banner data
app.get("/api/banner", (req, res) => {
  db.query("SELECT * FROM banners WHERE id = 1", (err, result) => {
    if (err) {
      console.error("Error fetching banner data:", err);
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(result[0]);
  });
});

// Update banner data
app.post("/api/banner", (req, res) => {
  const { description, timer, link, isVisible } = req.body;
  db.query(
    "UPDATE banners SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1",
    [description, timer, link, isVisible],
    (err, result) => {
      if (err) {
        console.error("Error updating banner data:", err);
        return res.status(500).json({ error: "Database query error" });
      }
      res.json({ success: true });
    }
  );
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
