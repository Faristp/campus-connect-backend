// File: index.js

const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const cors = require('cors');

dotenv.config();

const app = express();
// const port = process.env.PORT || 3000;

app.use(express.json()); // Add this line

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(cors());  
// Use user routes in the application
app.use('/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;

// Add more route usages as needed
// Example in your backend index.js or routes file




app.get('/', (req, res) => {
  res.send('Hello, Campus Connect!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
