// File: controllers/userController.js
const userService = require('../services/userService');

exports.registerUser = (req, res) => {
  console.log('Received request body:', req.body);

  const { username, password, email } = req.body;

  userService.registerUser(username, password, email)
    .then(() => res.status(201).json({ message: 'User registered successfully' }))
    .catch((err) => {
      console.error('Error registering user: ', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  userService.loginUser(username, password)
    .then((user) => {
      // User is authenticated, you can generate a token or set a session here
      res.status(200).json({ message: 'Login successful', user });
    })
    .catch((err) => {
      console.error('Error during login: ', err);
      res.status(401).json({ error: 'Invalid credentials' });
    });
};

// Add more user controller functions as needed
