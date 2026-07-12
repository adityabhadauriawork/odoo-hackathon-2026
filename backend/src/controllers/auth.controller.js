/**
 * Auth Controller for AssetFlow
 *
 * Handles user authentication: signup, login, and current user retrieval.
 * All operations respect security best practices:
 * - No password exposure in responses
 * - Email validation and uniqueness checks
 * - Proper error handling with specific status codes
 * - JWT generation on successful login
 * - User status (isActive) validation
 *
 * This controller assumes:
 * - req.user is set by a middleware (e.g., JWT auth middleware)
 * - All required environment variables are defined (JWT_SECRET, JWT_EXPIRES_IN)
 */

import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

// Default expiry in days (fallback to 7 days)
const DEFAULT_EXPIRES_IN = '7d';

/**
 * Registers a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, department, phone } = req.body;

    // Validate required fields
    if (!fullName || !email || !password || !department) {
      return res.status(400).json({
        message: 'Missing required fields: fullName, email, password, department'
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: 'Email already in use'
      });
    }

    // Create new user with hardcoded role: employee (safe default)
    const user = new User({
      fullName,
      email,
      password,
      role: 'employee', // Hardcoded safe default; client cannot set role
      department,
      phone
    });

    await user.save();

    // Return created user without password
    res.status(201).json({
      message: 'User created successfully',
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Logs in a user and returns a JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required'
      });
    }

    // Find user by email (select password to allow comparison)
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Validate user is active
    if (!user.isActive) {
      return res.status(403).json({
        message: 'User is inactive'
      });
    }

    // Compare password using model method
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
  {
    id: user._id,
    role: user.role,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  }
);

    // Update last login timestamp
    user.lastLogin = new Date();
    await user.save();

    // Return token and sanitized user data
    res.status(200).json({
      token,
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Error in login:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Retrieves the current authenticated user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find user by ID
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.status(200).json({
      user: user.toJSON()
    });
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};