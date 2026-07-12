const express = require('express');
const router = express.Router();
const { signup, login, getCurrentUser } = require('../controllers/auth.controller');
const protect = require('../middlewares/auth.middleware');

// Public route: Register a new user
router.post('/signup', signup);

// Public route: Login and return JWT token
router.post('/login', login);

// Protected route: Get current authenticated user (requires JWT token)
router.get('/me', protect, getCurrentUser);

module.exports = router;
