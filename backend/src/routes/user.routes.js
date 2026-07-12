import express from "express";

import authMiddleware from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";

import {
  getAllUsers,
  getUserById,
  updateUser,
  deactivateUser,
  reactivateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

/**
 * ==========================================================
 * User Management Routes
 * ==========================================================
 */

/**
 * @route   GET /api/users
 * @desc    Get all users
 * @access  Private
 */
router.get(
  "/",
  authMiddleware,
  getAllUsers
);

/**
 * @route   GET /api/users/:id
 * @desc    Get user by ID
 * @access  Private
 */
router.get(
  "/:id",
  authMiddleware,
  getUserById
);

/**
 * @route   PUT /api/users/:id
 * @desc    Update user details
 * @access  Private
 */
router.put(
  "/:id",
  authMiddleware,
  updateUser
);

/**
 * @route   PUT /api/users/:id/deactivate
 * @desc    Deactivate a user
 * @access  Private (Admin)
 */
router.put(
  "/:id/deactivate",
  authMiddleware,
  authorizeRoles("Admin"),
  deactivateUser
);

/**
 * @route   PUT /api/users/:id/reactivate
 * @desc    Reactivate a user
 * @access  Private (Admin)
 */
router.put(
  "/:id/reactivate",
  authMiddleware,
  authorizeRoles("Admin"),
  reactivateUser
);

export default router;