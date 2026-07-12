const express = require('express');
const router = express.Router();

const {
    createCategory,
    getCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
} = require('../controllers/category.controller');

const { protect, authorize } = require('../middlewares/authMiddleware');

/**
 * @route   POST /
 * @desc    Create a new category
 * @access  Private/Admin
 * @body    { name, description }
 */
router.post('/', protect, authorize('admin'), createCategory);

/**
 * @route   GET /
 * @desc    Get all categories
 * @access  Private (Any authenticated user)
 * @query   [isActive] (optional boolean)
 */
router.get('/', protect, getCategories);

/**
 * @route   GET /:id
 * @desc    Get a single category by ID
 * @access  Private (Any authenticated user)
 * @params  id
 */
router.get('/:id', protect, getCategoryById);

/**
 * @route   PUT /:id
 * @desc    Update a category
 * @access  Private/Admin
 * @params  id
 * @body    { name, description, isActive }
 */
router.put('/:id', protect, authorize('admin'), updateCategory);

/**
 * @route   DELETE /:id
 * @desc    Deactivate/Soft delete a category
 * @access  Private/Admin
 * @params  id
 */
router.delete('/:id', protect, authorize('admin'), deleteCategory);

module.exports = router;