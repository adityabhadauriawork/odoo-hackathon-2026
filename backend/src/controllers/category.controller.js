import Category from "../models/category.model.js";

// @desc    Create a new category
// @route   POST /api/categories
export const createCategory = async (req, res) => {
  try {
    const { name, description, customFields, status } = req.body;

    // Check if category with the same name already exists
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category name already exists." });
    }

    const category = await Category.create({
      name,
      description,
      customFields,
      status
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all categories
// @route   GET /api/categories
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort("name"); // Sort alphabetically

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single category by ID
// @route   GET /api/categories/:id
export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a category
// @route   PUT /api/categories/:id
export const updateCategory = async (req, res) => {
  try {
    const { name, description, customFields, status } = req.body;

    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    // Update fields
    if (name) category.name = name;
    if (description !== undefined) category.description = description;
    if (customFields) category.customFields = customFields;
    if (status) category.status = status;

    const updatedCategory = await category.save();
    res.status(200).json(updatedCategory);
  } catch (error) {
    // Catch Mongoose duplicate key error if updating to an existing category name
    if (error.code === 11000) {
      return res.status(400).json({ message: "Category name already exists." });
    }
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.status(200).json({ message: "Category deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};