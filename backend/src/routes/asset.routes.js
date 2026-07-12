import express from "express";

import {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
} from "../controllers/asset.controller.js";

const router = express.Router();

router.post("/", createAsset);

router.get("/", getAllAssets);

router.get("/:id", getAssetById);

router.put("/:id", updateAsset);

router.delete("/:id", deleteAsset);

export default router;