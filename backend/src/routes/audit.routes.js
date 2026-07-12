import express from "express";
import {
    createAudit,
    getAllAudits,
    getAuditById,
    updateAudit,
    deleteAudit
} from "../controllers/audit.controller.js"; // Adjust path based on your folder structure

const router = express.Router();

// Option 1: Apply authentication middleware here if needed
// import { protect } from "../middleware/auth.middleware.js";
// router.use(protect);

router
    .route("/")
    .post(createAudit)
    .get(getAllAudits);

router
    .route("/:id")
    .get(getAuditById)
    .put(updateAudit)
    .delete(deleteAudit);

export default router;