import Department from "../models/department.model.js";

// @desc    Create a new department
// @route   POST /api/departments
export const createDepartment = async (req, res) => {
  try {
    const { name, description, departmentHead, parentDepartment, status } = req.body;

    // Check if department with the same name already exists
    const existingDepartment = await Department.findOne({ name });
    if (existingDepartment) {
      return res.status(400).json({ message: "Department name already exists." });
    }

    const department = await Department.create({
      name,
      description,
      departmentHead,
      parentDepartment,
      status
    });

    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all departments
// @route   GET /api/departments
export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("departmentHead", "name email") // Adjust based on your User schema
      .populate("parentDepartment", "name")     // Populates parent department details
      .sort("name"); // Sort alphabetically by name

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single department by ID
// @route   GET /api/departments/:id
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id)
      .populate("departmentHead", "name email")
      .populate("parentDepartment", "name");

    if (!department) {
      return res.status(404).json({ message: "Department not found." });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a department
// @route   PUT /api/departments/:id
export const updateDepartment = async (req, res) => {
  try {
    const { name, description, departmentHead, parentDepartment, status } = req.body;

    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({ message: "Department not found." });
    }

    // Update fields if provided
    if (name) department.name = name;
    if (description) department.description = description;
    if (departmentHead !== undefined) department.departmentHead = departmentHead;
    if (parentDepartment !== undefined) department.parentDepartment = parentDepartment;
    if (status) department.status = status;

    const updatedDepartment = await department.save();
    res.status(200).json(updatedDepartment);
  } catch (error) {
    // Catch Mongoose duplicate key error if trying to update to an existing name
    if (error.code === 11000) {
      return res.status(400).json({ message: "Department name already exists." });
    }
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a department
// @route   DELETE /api/departments/:id
export const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);

    if (!department) {
      return res.status(404).json({ message: "Department not found." });
    }

    // Note: If this department is a parent to others, you might want to update 
    // the child departments to set parentDepartment to null before deleting this one.

    res.status(200).json({ message: "Department deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};