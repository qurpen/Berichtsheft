const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS to allow frontend access
app.use(cors());

// Set up the database connection
const db = mysql.createConnection({
  host: 'localhost', // Change to your database host
  user: 'root',      // Change to your database username
  password: 'password', // Change to your database password
  database: 'mydatabase' // Change to your database name
});

// Test the database connection
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database.');
});

// Create an API endpoint to fetch data
app.get('/api/data', (req, res) => {
  const sqlQuery = 'SELECT id, name, email FROM users'; // Update table name and columns
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Database error');
    } else {
      res.json(results); // Send the data as JSON
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
