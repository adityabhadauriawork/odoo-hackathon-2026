/**
 * User Controller for AssetFlow
 *
 * Handles general user management operations (read, update, deactivate, reactivate)
 * Does NOT handle authentication, role changes, or email/password updates
 * All operations are restricted by role at the route level
 * This controller enforces soft deletion (isActive) and prevents self-deactivation
 */

const User = require('../models/user.model');

/**
 * Gets all users with optional filters
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns list of users with filters applied
 */
exports.getAllUsers = async (req, res) => {
  try {
    const { department, isActive } = req.query;

    // Build query object
    const query = {};
    if (department) {
      query.department = department;
    }
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    // Find users with filtering
    const users = await User.find(query).select('-password');

    res.status(200).json({
      users
    });
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Gets a user by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns single user or 404 if not found
 */
exports.getUserById = async (req, res) => {
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
      user
    });
  } catch (error) {
    console.error('Error in getUserById:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Updates user details (fullName, phone, department, profileImage)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns updated user or 404 if not found
 */
exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        message: 'User ID is required'
      });
    }

    // Extract allowed fields
    const { fullName, phone, profileImage, department } = req.body;

    // Validate that only allowed fields are provided
    const updateFields = {};
    if (fullName) updateFields.fullName = fullName;
    if (phone) updateFields.phone = phone;
    if (profileImage) updateFields.profileImage = profileImage;
    if (department) updateFields.department = department;

    // If email or password or role is in body, ignore it silently
    if (req.body.email || req.body.password || req.body.role) {
      // Log warning if needed (optional)
      console.warn('Ignored email, password, or role update in user update');
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Update only allowed fields
    Object.assign(user, updateFields);

    await user.save();

    res.status(200).json({
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        department: user.department,
        profileImage: user.profileImage,
        isActive: user.isActive,
        lastLogin: user.lastLogin
      }
    });
  } catch (error) {
    console.error('Error in updateUser:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Deactivates a user (soft delete)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns confirmation or 403/404
 */
exports.deactivateUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        message: 'User ID is required'
      });
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Prevent self-deactivation
    if (user._id.toString() === req.user.id) {
      return res.status(403).json({
        message: 'You cannot deactivate your own account'
      });
    }

    // Set inactive
    user.isActive = false;
    await user.save();

    res.status(200).json({
      message: 'User deactivated successfully'
    });
  } catch (error) {
    console.error('Error in deactivateUser:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

/**
 * Reactivates a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Returns confirmation or 404
 */
exports.reactivateUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        message: 'User ID is required'
      });
    }

    // Find user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // Set active
    user.isActive = true;
    await user.save();

    res.status(200).json({
      message: 'User reactivated successfully'
    });
  } catch (error) {
    console.error('Error in reactivateUser:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};
