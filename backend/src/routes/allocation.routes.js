import express from "express";
import {
  createAllocation,
  getAllocations,
  getAllocationById,
  updateAllocation,
  deleteAllocation
} from "../controllers/allocation.controller.js";

const router = express.Router();

// Routes for /api/allocations
router.route("/")
  .post(createAllocation)
  .get(getAllocations);

// Routes for /api/allocations/:id
router.route("/:id")
  .get(getAllocationById)
  .put(updateAllocation)
  .delete(deleteAllocation);

export default router;