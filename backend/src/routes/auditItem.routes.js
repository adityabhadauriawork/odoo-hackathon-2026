import express from "express";
import {
  createAuditItem,
  getAuditItems,
  getAuditItemsByAudit,
  getAuditItemById,
  updateAuditItem,
  deleteAuditItem
} from "../controllers/auditItem.controller.js";

const router = express.Router();

// General audit items endpoints
router.route("/")
  .post(createAuditItem)
  .get(getAuditItems);

// Specific parent audit lookup endpoint
router.route("/audit/:auditId")
  .get(getAuditItemsByAudit);

// Individual audit item operations
router.route("/:id")
  .get(getAuditItemById)
  .put(updateAuditItem)
  .delete(deleteAuditItem);

export default router;