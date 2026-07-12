import express from "express";
import {
  createTransfer,
  getTransfers,
  getTransferById,
  updateTransfer,
  deleteTransfer
} from "../controllers/transfer.controller.js";

const router = express.Router();

// Routes for /api/transfers
router.route("/")
  .post(createTransfer)
  .get(getTransfers);

// Routes for /api/transfers/:id
router.route("/:id")
  .get(getTransferById)
  .put(updateTransfer)
  .delete(deleteTransfer);

export default router;