const Department = require('../models/department.model');

/**
 * @desc    Create a new department
 * @route   POST /api/departments
 * @access  Private/Admin (Handled by route middleware)
 */
const createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate name is present
        if (!name) {
            return res.status(400).json({ 
                success: false, 
                message: 'Department name is required.' 
            });
        }

        // Check for duplicate department name
        const existingDepartment = await Department.findOne({ name });
        if (existingDepartment) {
            return res.status(409).json({ 
                success: false, 
                message: 'A department with this name already exists.' 
            });
        }

        // Create the department
        const department = await Department.create({
            name,
            description
        });

        return res.status(201).json({
            success: true,
            data: department,
            message: 'Department created successfully.'
        });

    } catch (error) {
        console.error('Error in createDepartment:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while creating department.'
        });
    }
};

/**
 * @desc    Get all departments
 * @route   GET /api/departments
 * @access  Private
 */
const getDepartments = async (req, res) => {
    try {
        const query = {};
        
        // Support optional query filter by isActive status
        if (req.query.isActive !== undefined) {
            query.isActive = req.query.isActive === 'true';
        }

        const departments = await Department.find(query);
        
        return res.status(200).json({
            success: true,
            count: departments.length,
            data: departments
        });
    } catch (error) {
        console.error('Error in getDepartments:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while fetching departments.'
        });
    }
};

/**
 * @desc    Get a single department by ID
 * @route   GET /api/departments/:id
 * @access  Private
 */
const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        
        if (!department) {
            return res.status(404).json({ 
                success: false, 
                message: 'Department not found.' 
            });
        }

        return res.status(200).json({
            success: true,
            data: department
        });
    } catch (error) {
        console.error('Error in getDepartmentById:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while fetching department.'
        });
    }
};

/**
 * @desc    Update a department
 * @route   PUT /api/departments/:id
 * @access  Private/Admin
 */
const updateDepartment = async (req, res) => {
    try {
        const { name, description, isActive } = req.body;
        
        let department = await Department.findById(req.params.id);
        
        if (!department) {
            return res.status(404).json({ 
                success: false, 
                message: 'Department not found.' 
            });
        }

        // If updating the name, check for duplicates with other departments
        if (name && name !== department.name) {
            const existingName = await Department.findOne({ name });
            if (existingName) {
                return res.status(409).json({
                    success: false,
                    message: 'Another department with this name already exists.'
                });
            }
        }

        department.name = name || department.name;
        department.description = description !== undefined ? description : department.description;
        department.isActive = isActive !== undefined ? isActive : department.isActive;

        await department.save();

        return res.status(200).json({
            success: true,
            data: department,
            message: 'Department updated successfully.'
        });
    } catch (error) {
        console.error('Error in updateDepartment:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while updating department.'
        });
    }
};

/**
 * @desc    Deactivate/Soft delete a department
 * @route   DELETE /api/departments/:id
 * @access  Private/Admin
 */
const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        
        if (!department) {
            return res.status(404).json({ 
                success: false, 
                message: 'Department not found.' 
            });
        }

        // Soft delete: set isActive to false instead of removing from DB
        department.isActive = false;
        await department.save();

        return res.status(200).json({
            success: true,
            message: 'Department deactivated successfully.'
        });
    } catch (error) {
        console.error('Error in deleteDepartment:', error);
        return res.status(500).json({ 
            success: false, 
            message: 'Server error while deleting department.'
        });
    }
};

module.exports = {
    createDepartment,
    getDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment
};