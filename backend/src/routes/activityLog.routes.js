import express from "express";
import {
  createActivityLog,
  getActivityLogs,
  getActivityLogById,
  deleteActivityLog
} from "../controllers/activityLog.controller.js";

const router = express.Router();

// Routes for /api/activity-logs
router.route("/")
  .post(createActivityLog)
  .get(getActivityLogs);

// Routes for /api/activity-logs/:id
// Notice there is no PUT/PATCH route here to maintain log integrity
router.route("/:id")
  .get(getActivityLogById)
  .delete(deleteActivityLog);

export default router;