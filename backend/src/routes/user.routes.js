import express from "express";
import {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/user.controller.js";

const router = express.Router();

// Authentication Routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Standard CRUD Routes
router.route("/")
  .get(getUsers);

router.route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;