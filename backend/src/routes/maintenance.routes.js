import express from "express";
import {
  createMaintenanceRequest,
  getAllMaintenanceRequests,
  getMaintenanceById,
  updateMaintenanceRequest,
  deleteMaintenanceRequest
} from "../controllers/maintenance.controller.js";

const router = express.Router();

// Routes for /api/maintenance
router.route("/")
  .post(createMaintenanceRequest) 
  .get(getAllMaintenanceRequests);

// Routes for /api/maintenance/:id
router.route("/:id")
  .get(getMaintenanceById)
  .put(updateMaintenanceRequest)
  .delete(deleteMaintenanceRequest);

export default router;