const express = require('express');
const router = express.Router();

const {
    createDepartment,
    getDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
} = require('../controllers/department.controller');

const { protect, authorize } = require('../middlewares/authMiddleware');

/**
 * @route   POST /
 * @desc    Create a new department
 * @access  Private/Admin
 * @body    { name, description }
 */
router.post('/', protect, authorize('admin'), createDepartment);

/**
 * @route   GET /
 * @desc    Get all departments
 * @access  Private (Any authenticated user)
 * @query   [isActive] (optional boolean)
 */
router.get('/', protect, getDepartments);

/**
 * @route   GET /:id
 * @desc    Get a single department by ID
 * @access  Private (Any authenticated user)
 * @params  id
 */
router.get('/:id', protect, getDepartmentById);

/**
 * @route   PUT /:id
 * @desc    Update a department
 * @access  Private/Admin
 * @params  id
 * @body    { name, description, isActive }
 */
router.put('/:id', protect, authorize('admin'), updateDepartment);

/**
 * @route   DELETE /:id
 * @desc    Deactivate/Soft delete a department
 * @access  Private/Admin
 * @params  id
 */
router.delete('/:id', protect, authorize('admin'), deleteDepartment);

module.exports = router;