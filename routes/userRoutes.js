// File: routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Example: Insert a new user into the database
router.post('/register', userController.registerUser);

// Add more user routes as needed
router.post('/login', userController.loginUser);

// Example in your backend route
router.post('/login', (req, res) => {
    console.log('Login request received:', req.body);
  
    // ... (rest of the code)
  });

module.exports = router;
