import Asset from "../models/asset.model.js";

// Create a new asset
export const createAsset = async (req, res) => {
  try {
    const { assetName, category, serialNumber, status } = req.body;

    // Check required fields
    if (!assetName || !category || !serialNumber) {
      return res.status(400).json({
        success: false,
        message: "Asset name, category and serial number are required.",
      });
    }

    // Check duplicate serial number
    const existingAsset = await Asset.findOne({ serialNumber });

    if (existingAsset) {
      return res.status(409).json({
        success: false,
        message: "An asset with this serial number already exists.",
      });
    }

    // Create asset
    const asset = await Asset.create({
      assetName,
      category,
      serialNumber,
      status,
    });

    return res.status(201).json({
      success: true,
      message: "Asset created successfully.",
      asset,
    });
  } catch (error) {
    console.error("Create Asset Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all assets
export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: assets.length,
      assets,
    });
  } catch (error) {
    console.error("Get Assets Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get asset by ID
export const getAssetById = async (req, res) => {
  try {
    const { id } = req.params;

    const asset = await Asset.findById(id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    return res.status(200).json({
      success: true,
      asset,
    });
  } catch (error) {
    console.error("Get Asset Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Update asset
export const updateAsset = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedAsset = await Asset.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedAsset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Asset updated successfully.",
      asset: updatedAsset,
    });
  } catch (error) {
    console.error("Update Asset Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Delete asset
export const deleteAsset = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAsset = await Asset.findByIdAndDelete(id);

    if (!deletedAsset) {
      return res.status(404).json({
        success: false,
        message: "Asset not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Asset deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Asset Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};