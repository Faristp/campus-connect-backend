// File: services/userService.js
const db = require('../utils/database');

exports.registerUser = (username, password, email) => {
  return new Promise((resolve, reject) => {
    // Use the 'db' connection to execute SQL queries
    db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, password, email], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.loginUser = (username, password) => {
  return new Promise((resolve, reject) => {
    // Validate user credentials against the database
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
      if (err) {
        reject(err);
      } else if (results.length === 0) {
        reject('Invalid credentials');
      } else {
        resolve(results[0]);
      }
    });
  });
};

// Add more user service functions as needed
