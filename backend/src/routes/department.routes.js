import express from "express";

import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import authorizeRoles from "../middlewares/role.middleware.js";

const router = express.Router();

/**
 * @route   POST /api/departments
 * @desc    Create a new department
 * @access  Private (Admin)
 */
router.post(
  "/",
  authMiddleware,
  authorizeRoles("Admin"),
  createDepartment
);

/**
 * @route   GET /api/departments
 * @desc    Get all departments
 * @access  Private
 */
router.get(
  "/",
  authMiddleware,
  getDepartments
);

/**
 * @route   GET /api/departments/:id
 * @desc    Get department by ID
 * @access  Private
 */
router.get(
  "/:id",
  authMiddleware,
  getDepartmentById
);

/**
 * @route   PUT /api/departments/:id
 * @desc    Update department
 * @access  Private (Admin)
 */
router.put(
  "/:id",
  authMiddleware,
  authorizeRoles("Admin"),
  updateDepartment
);

/**
 * @route   DELETE /api/departments/:id
 * @desc    Soft delete department
 * @access  Private (Admin)
 */
router.delete(
  "/:id",
  authMiddleware,
  authorizeRoles("Admin"),
  deleteDepartment
);

export default router;