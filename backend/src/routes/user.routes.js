/**
 * User Routes for AssetFlow
 *
 * Routes for managing user details and status
 * All routes are protected by JWT authentication
 * Admin-only routes require explicit authorization
 */

const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/authMiddleware');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
  reactivateUser
} = require('../controllers/user.controller');

/**
 * GET / - Get list of all users (any authenticated user)
 * @route GET /
 * @middleware protect
 * @returns {Array} List of users (without password)
 */
router.get('/', protect, getAllUsers);

/**
 * GET /:userId - Get a specific user by ID
 * @route GET /:userId
 * @middleware protect
 * @param {string} userId - ID of the user to retrieve
 * @returns {Object} User details (without password)
 */
router.get('/:userId', protect, getUserById);

/**
 * PUT /:userId - Update user details (fullName, phone, department, profileImage)
 * @route PUT /:userId
 * @middleware protect
 * @param {string} userId - ID of the user to update
 * @returns {Object} Updated user details (without password)
 */
router.put('/:userId', protect, updateUser);

/**
 * PATCH /:userId/deactivate - Deactivate a user (soft delete)
 * @route PATCH /:userId/deactivate
 * @middleware protect, authorize('admin')
 * @param {string} userId - ID of the user to deactivate
 * @returns {Object} Confirmation message
 */
router.patch('/:userId/deactivate', protect, authorize('admin'), deactivateUser);

/**
 * PATCH /:userId/reactivate - Reactivate a user
 * @route PATCH /:userId/reactivate
 * @middleware protect, authorize('admin')
 * @param {string} userId - ID of the user to reactivate
 * @returns {Object} Confirmation message
 */
router.patch('/:userId/reactivate', protect, authorize('admin'), reactivateUser);

module.exports = router;
