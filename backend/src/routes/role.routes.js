/**
 * Role Routes for AssetFlow
 *
 * Routes for managing user roles in the system.
 * All routes are protected and require admin privileges.
 *
 * Routes:
 * - PUT /assign: Assign a role to a user (admin-only)
 * - GET /:userId: Get the role of a specific user (admin-only)
 */

const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/authMiddleware');
const { assignRole, getUserRole } = require('../controllers/role.controller');

/**
 * Assign a role to a user
 * @route PUT /assign
 * @middleware protect, authorize('admin')
 * @body { userId: String, role: String }
 * @returns {Object} Success message and updated user data
 */
router.put('/assign', protect, authorize('admin'), assignRole);

/**
 * Get the role of a specific user
 * @route GET /:userId
 * @middleware protect, authorize('admin')
 * @param {String} userId - ID of the user to retrieve
 * @returns {Object} User data including role
 */
router.get('/:userId', protect, authorize('admin'), getUserRole);

module.exports = router;
