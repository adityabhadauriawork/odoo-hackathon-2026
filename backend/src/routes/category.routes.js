import express from "express";

import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";

const router = express.Router();

/**
 * ==========================================================
 * Category Routes
 * ==========================================================
 */

/**
 * @route   POST /api/categories
 * @desc    Create a new category
 * @access  Private (Admin)
 */
router.post(
  "/",
  authMiddleware,
  authorizeRoles("Admin"),
  createCategory
);

/**
 * @route   GET /api/categories
 * @desc    Get all categories
 * @access  Private
 */
router.get(
  "/",
  authMiddleware,
  getCategories
);

/**
 * @route   GET /api/categories/:id
 * @desc    Get category by ID
 * @access  Private
 */
router.get(
  "/:id",
  authMiddleware,
  getCategoryById
);

/**
 * @route   PUT /api/categories/:id
 * @desc    Update category
 * @access  Private (Admin)
 */
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("Admin"),
  updateCategory
);

/**
 * @route   DELETE /api/categories/:id
 * @desc    Soft delete category
 * @access  Private (Admin)
 */
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("Admin"),
  deleteCategory
);

export default router;