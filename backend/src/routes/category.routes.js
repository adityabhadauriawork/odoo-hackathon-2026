import express from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} from "../controllers/category.controller.js";

const router = express.Router();

// Routes for /api/categories
router.route("/")
  .post(createCategory)
  .get(getCategories);

// Routes for /api/categories/:id
router.route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;