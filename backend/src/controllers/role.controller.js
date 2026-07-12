/**
 * Role Controller for AssetFlow
 *
 * Handles role assignment for users in the system.
 * Since roles are stored directly on the User model, this controller
 * manages updating a user's role (e.g., from employee to manager).
 *
 * Features:
 * - Assigns a role to a user by ID
 * - Validates that the user exists and is active
 * - Requires admin privileges to assign roles
 * - Uses the existing User model to update the role field
 * - Prevents users from changing their own role (even admins)
 *
 * This controller does NOT create, list, or delete roles.
 * It only updates the role field of an existing user.
 */

import User from '../models/user.model.js';

/**
 * Assigns a role to a user by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Resolves when role is updated or rejects with error
 */
export const assignRole = async (req, res) => {
  try {
    const { userId } = req.body;
    const { role } = req.body;

    // Validate required fields
    if (!userId || !role) {
      return res.status(400).json({
        message: 'User ID and role are required'
      });
    }

    // Validate role is a valid enum value (e.g., 'employee', 'manager', 'admin')
    const validRoles = ['employee', 'manager', 'admin'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        message: 'Invalid role. Must be one of: employee, manager, admin'
      });
    }

    // Check if the current user is trying to change their own role
    if (req.user.id === userId) {
      return res.status(403).json({
        message: 'You cannot change your own role'
      });
    }

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(400).json({
        message: 'Cannot assign role to inactive user'
      });
    }

    // Update user role
    user.role = role;
    await user.save();

    res.status(200).json({
      message: `Role successfully updated to ${role}`,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error in assignRole:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Get user role by ID (for read-only access)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Resolves when user role is returned or rejects with error
 */
export const getUserRole = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        message: 'User ID is required'
      });
    }

    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    res.status(200).json({
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error in getUserRole:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};