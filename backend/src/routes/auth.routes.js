import express from "express";

import {
  signup,
  login,
  getCurrentUser,
} from "../controllers/auth.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Register a new user
router.post("/signup", signup);

// Login user and return JWT
router.post("/login", login);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

// Get currently logged-in user
router.get("/me", authMiddleware, getCurrentUser);

export default router;