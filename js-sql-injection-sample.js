const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config(); // Load environment variables from a .env file

// Set up database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/user', (req, res) => {
  const userId = req.query.id; // User input from query string
  const query = 'SELECT * FROM users WHERE id = ?';

  // Log the constructed query (for demonstration purposes)
  console.log("Executing query:", query);

  // Vulnerable query execution
  connection.query(query, [userId], (error, results) => {
    if (error) {
      res.status(500).send('An error occurred');
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
