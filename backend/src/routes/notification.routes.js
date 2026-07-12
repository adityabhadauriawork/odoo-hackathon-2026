import express from "express";
import {
  createNotification,
  getUserNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification
} from "../controllers/notification.controller.js";

const router = express.Router();

// General notification routes
router.route("/")
  .post(createNotification);

// User-specific notification routes
router.route("/user/:userId")
  .get(getUserNotifications);

router.route("/user/:userId/read-all")
  .patch(markAllAsRead);

// Individual notification operations
router.route("/:id/read")
  .patch(markAsRead);

router.route("/:id")
  .delete(deleteNotification);

export default router;