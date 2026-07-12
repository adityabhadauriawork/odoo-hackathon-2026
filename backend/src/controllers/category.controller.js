import Category from '../models/category.model.js';

/**
 * @desc    Create a new category
 * @route   POST /api/categories
 * @access  Private/Admin (Handled by route middleware)
 */
export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate name is present
        if (!name) {
            return res.status(400).json({ 
                success: false, 
                message: 'Category name is required.' 
            });
        }

        // Check for duplicate category name
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(409).json({ 
                success: false, 
                message: 'A category with this name already exists.' 
            });
        }

        // Create the category
        const category = await Category.create({
            name,
            description
        });

        return res.status(201).json({
            success: true,
            data: category,
            message: 'Category created successfully.'
        });

    } catch (error) {
        console.error('Error in createCategory:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while creating category.'
        });
    }
};

/**
 * @desc    Get all categories
 * @route   GET /api/categories
 * @access  Private
 */
export const getCategories = async (req, res) => {
    try {
        const query = {};
        
        // Support optional query filter by isActive status
        if (req.query.isActive !== undefined) {
            query.isActive = req.query.isActive === 'true';
        }

        const categories = await Category.find(query);
        
        return res.status(200).json({
            success: true,
            count: categories.length,
            data: categories
        });
    } catch (error) {
        console.error('Error in getCategories:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while fetching categories.'
        });
    }
};

/**
 * @desc    Get a single category by ID
 * @route   GET /api/categories/:id
 * @access  Private
 */
export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        
        if (!category) {
            return res.status(404).json({ 
                success: false, 
                message: 'Category not found.' 
            });
        }

        return res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        console.error('Error in getCategoryById:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while fetching category.'
        });
    }
};

/**
 * @desc    Update a category
 * @route   PUT /api/categories/:id
 * @access  Private/Admin
 */
export const updateCategory = async (req, res) => {
    try {
        const { name, description, isActive } = req.body;
        
        let category = await Category.findById(req.params.id);
        
        if (!category) {
            return res.status(404).json({ 
                success: false, 
                message: 'Category not found.' 
            });
        }

        // If updating the name, check for duplicates with other categories
        if (name && name !== category.name) {
            const existingName = await Category.findOne({ name });
            if (existingName) {
                return res.status(409).json({
                    success: false,
                    message: 'Another category with this name already exists.'
                });
            }
        }

        category.name = name || category.name;
        category.description = description !== undefined ? description : category.description;
        category.isActive = isActive !== undefined ? isActive : category.isActive;

        await category.save();

        return res.status(200).json({
            success: true,
            data: category,
            message: 'Category updated successfully.'
        });
    } catch (error) {
        console.error('Error in updateCategory:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while updating category.'
        });
    }
};

/**
 * @desc    Deactivate/Soft delete a category
 * @route   DELETE /api/categories/:id
 * @access  Private/Admin
 */
export const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        
        if (!category) {
            return res.status(404).json({ 
                success: false, 
                message: 'Category not found.' 
            });
        }

        // Soft delete: set isActive to false instead of removing from DB
        category.isActive = false;
        await category.save();

        return res.status(200).json({
            success: true,
            message: 'Category deactivated successfully.'
        });
    } catch (error) {
        console.error('Error in deleteCategory:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while deleting category.'
        });
    }
};