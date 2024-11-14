const express = require('express');
const app = express();
const mysql = require('mysql');

// Set up database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
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
