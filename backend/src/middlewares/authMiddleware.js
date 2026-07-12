/**
 * Auth Middleware for AssetFlow
 *
 * Provides two core authentication functions:
 * - protect: verifies JWT token and sets req.user
 * - authorize: role-based permission enforcement
 *
 * These are used to secure routes in the application.
 */

const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const { JWT_SECRET } = process.env;

/**
 * protect middleware
 * Verifies JWT token and attaches user to req.user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Callback to pass control to next middleware
 * @returns {Promise<void>} Resolves when user is attached or rejects with error
 */
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if Authorization header exists and starts with "Bearer"
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'Authorization token required'
      });
    }

    const token = authHeader.split(' ')[1];

    // Verify token
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = { id: decoded.id, role: decoded.role };
    } catch (error) {
      return res.status(401).json({
        message: 'Invalid or expired token'
      });
    }

    // Fetch user from database by ID
    try {
      const user = await User.findById(req.user.id).select('-password');
      if (!user) {
        return res.status(401).json({
          message: 'User not found'
        });
      }

      // Check if user is active
      if (!user.isActive) {
        return res.status(403).json({
          message: 'User account is inactive'
        });
      }

      // Attach user to request
      req.user = user;
    } catch (error) {
      console.error('Error fetching user in protect middleware:', error);
      return res.status(500).json({
        message: 'Internal server error'
      });
    }

    next();
  } catch (error) {
    console.error('Unexpected error in protect middleware:', error);
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * authorize middleware
 * Checks if the user's role is in the allowed list of roles
 * @param {...String} roles - List of allowed roles (e.g., 'admin', 'manager')
 * @returns {Function} Middleware function that checks role and calls next if valid
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: 'Insufficient permissions'
      });
    }
    next();
  };
};

module.exports = { protect, authorize };
