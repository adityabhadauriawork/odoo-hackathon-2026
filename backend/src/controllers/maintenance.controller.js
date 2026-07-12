import Maintenance from "../models/maintenance.model.js";

// @desc    Create a new maintenance request
// @route   POST /api/maintenance
export const createMaintenanceRequest = async (req, res) => {
  try {
    const { asset, raisedBy, issue, priority, images } = req.body;

    const maintenance = await Maintenance.create({
      asset,
      raisedBy,
      issue,
      priority,
      images
    });

    res.status(201).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all maintenance requests
// @route   GET /api/maintenance
export const getAllMaintenanceRequests = async (req, res) => {
  try {
    const maintenanceRequests = await Maintenance.find()
      .populate("asset", "name type") 
      .populate("raisedBy", "name email")
      .populate("technician", "name email")
      .populate("approvedBy", "name email")
      .sort("-createdAt");

    res.status(200).json(maintenanceRequests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single maintenance request by ID
// @route   GET /api/maintenance/:id
export const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id)
      .populate("asset")
      .populate("raisedBy", "name email")
      .populate("technician", "name email")
      .populate("approvedBy", "name email");

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a maintenance request (e.g., assign tech, update status, add resolution)
// @route   PUT /api/maintenance/:id
export const updateMaintenanceRequest = async (req, res) => {
  try {
    const { status, priority, technician, resolution, approvedBy } = req.body;

    const maintenance = await Maintenance.findById(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    // Update fields if they are provided in the request body
    if (status) maintenance.status = status;
    if (priority) maintenance.priority = priority;
    if (technician) maintenance.technician = technician;
    if (resolution) maintenance.resolution = resolution;
    if (approvedBy) maintenance.approvedBy = approvedBy;

    const updatedMaintenance = await maintenance.save();
    res.status(200).json(updatedMaintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a maintenance request
// @route   DELETE /api/maintenance/:id
export const deleteMaintenanceRequest = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

    if (!maintenance) {
      return res.status(404).json({ message: "Maintenance request not found." });
    }

    res.status(200).json({ message: "Maintenance request deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};