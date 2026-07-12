import express from "express";
import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
} from "../controllers/department.controller.js";

const router = express.Router();

// Routes for /api/departments
router.route("/")
  .post(createDepartment)
  .get(getDepartments);

// Routes for /api/departments/:id
router.route("/:id")
  .get(getDepartmentById)
  .put(updateDepartment)
  .delete(deleteDepartment);

export default router;