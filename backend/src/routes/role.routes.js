import express from "express";

import {
  assignRole,
  getUserRole,
} from "../controllers/role.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";

const router = express.Router();

/**
 * ==========================================================
 * Role Management Routes
 * ==========================================================
 */

/**
 * @route   PUT /api/roles/assign
 * @desc    Assign a role to a user
 * @access  Private (Admin)
 */
router.put(
  "/assign",
  authMiddleware,
  authorizeRoles("Admin"),
  assignRole
);

/**
 * @route   GET /api/roles/:userId
 * @desc    Get role of a specific user
 * @access  Private (Admin)
 */
router.get(
  "/:userId",
  authMiddleware,
  authorizeRoles("Admin"),
  getUserRole
);

export default router;